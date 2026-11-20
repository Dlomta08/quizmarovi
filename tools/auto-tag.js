#!/usr/bin/env node
/*
 * Suggests tags for every math problem and writes them into the quiz files.
 *
 *   node tools/auto-tag.js --dry       show statistics and a sample, write nothing
 *   node tools/auto-tag.js             write tags into problems that have none yet
 *   node tools/auto-tag.js --force     also overwrite tags of problems with "tagsReviewed": false
 *
 * Problems with "tagsReviewed": true are never touched.
 * 2025/26 quizzes use the hand-picked suggestions in tools/tag-data/manual-2025-26.js;
 * older years use the keyword rules below. Every suggestion is written with "tagsReviewed": false.
 * source is always left empty ({ book: "", section: "", number: null }) — never guessed.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const { ROOT, loadTags, listMathQuizzes, writeTags, problemText } = require("./tags-lib");
const MANUAL = require("./tag-data/manual-2025-26");

const DRY = process.argv.includes("--dry");
const FORCE = process.argv.includes("--force");
const T = loadTags();

/* ---------------------------------------------------------------- keyword rules
 * Each rule: [topicId, regex, weight]. Matched against the problem text (question/intro/task);
 * options count at half weight. A topic is only suggested if it is taught by the problem's grade.
 */
const TRIG = String.raw`\\(?:sin|cos|tan|cot|tg|ctg)\b|\\operatorname\{(?:tg|ctg)\}|\b(?:tg|ctg)\s*[\\(\dα-ω]`;
const LOG = String.raw`\\log|\\lg\b|\\ln\b|ლოგარითმ`;
const EQ = String.raw`განტოლებ|ფესვ`;
const INEQ = String.raw`უტოლობ|უთანასწორ`;
const X2 = String.raw`x\^\{?2\b|x\^2`;
// \b only knows Latin letters, so Georgian words use {GB} (word start) and {GE} (word end) instead.
const GB = "(?<![ა-ჰ])", GE = "(?![ა-ჰ])";
const R = (s, f = "") => new RegExp(s.replace(/\{GB\}/g, GB).replace(/\{GE\}/g, GE), "i" + f);

/** Text for matching: math italic letters (𝑥, 𝐴) -> x, A; unicode minus -> "-". */
function norm(s) {
  return String(s || "").normalize("NFKC").replace(/[−–]/g, "-").replace(/[  ]/g, " ");
}

const RULES = [
  // numbers & arithmetic
  ["divisibility", R(String.raw`იყოფა|გაყოფისას|ნაშთ|ჯერად|\\pmod|\bmod\b|ბოლო ციფრ|ციფრით ბოლოვდება|ციფრთა ჯამ`), 3],
  ["gcd-lcm", R(String.raw`უსგ|უსჯ|საერთო გამყოფ|საერთო ჯერად`), 4],
  ["prime-factor", R(String.raw`მარტივ მამრავლ|გამყოფთა რაოდენობ|გამყოფების რაოდენობ|მარტივი რიცხვ|მარტივი? გამყოფ`), 3],
  ["percent", R(String.raw`პროცენტ|\\%|%`), 2],
  ["proportion", R(String.raw`პროპორცი|უკუპროპორცი`), 3],
  ["proportion", R(String.raw`შეეფარდება|შეფარდებით|\d+\s*:\s*\d+`), 1],
  ["sets", R(String.raw`სიმრავლე(?:თა|ებ)|ქვესიმრავლ|\\cup|\\cap|\\setminus|გაერთიანებ|თანაკვეთ`), 2],
  ["new-operations", R(String.raw`ახალი ოპერაცი|ოპერაცია განსაზღვრ|\\otimes|\\oplus|\\odot|\\ast|\\nabla|\\star|∇|★|⊕|⊗|∗`), 4],
  ["powers", R(String.raw`ხარისხ(?:ში|ის|ს){GE}|\d\^\{\d{2,}\}|\d\^\{?n|\d\^\{\d+[nk]`), 2],
  ["powers", R(String.raw`\d\^\{?\d`), 1],
  ["integer-part", R(String.raw`მთელი ნაწილ|წილადი ნაწილ|\\lfloor|\\\{x`), 4],
  // expressions
  ["polynomials", R(String.raw`მრავალწევრ|ერთწევრ`), 3],
  ["special-products", R(String.raw`შემოკლებული გამრავლ`), 4],
  ["special-products", R(String.raw`[\d{},]+\^\{?2\}?\s*-\s*[\d{},]+\^\{?2|\(\s*\d*[a-z]\s*[+-]\s*\d*[a-z]\s*\)\^\{?[23]\b`), 2],
  ["factoring", R(String.raw`მამრავლებად|დაშალეთ`), 4],
  ["poly-division", R(String.raw`ნაშთი მიიღება|ბეზუ|გავყოფთ .{0,40}მრავალწევრ|მრავალწევრის გაყოფ`), 4],
  ["identities", R(String.raw`იგივეობ`), 3],
  ["rational-expr", R(String.raw`გაამარტივეთ`), 1],
  ["square-roots", R(String.raw`\\sqrt\{`), 1],
  ["nth-roots", R(String.raw`\\sqrt\[`), 2],
  // equations
  ["abs-eq", R(String.raw`\|[^|$]{0,40}x[^|$]{0,40}\|[^$]{0,30}=|\\left\|[^$]{0,60}=`), 2],
  ["linear-systems", R(String.raw`განტოლებათა სისტემ|\\begin\{cases\}|\\left\\\{`), 2],
  ["diophantine", R(String.raw`მთელ რიცხვებში|მთელ ამონახსნ|ნატურალურ რიცხვებში|(?:მთელ|ნატურალურ) რიცხვთა წყვილ`), 3],
  ["quadratic-eq", R(String.raw`კვადრატულ(?:ი)? განტოლებ`), 3],
  ["vieta", R(String.raw`ვიეტ|x_\{?1\}?[^$]{0,10}x_\{?2|ფესვების? (?:ჯამ|ნამრავლ|კვადრატების|კუბების)`), 3],
  ["higher-degree", R(String.raw`x\^\{?[3-9]\}?[^$]{0,60}=|ბიკვადრატ`), 1],
  ["irrational-eq", R(String.raw`\\sqrt\{[^}]*x`), 1],
  ["word-problems", R(String.raw`სიჩქარ|ავტომობილ|მატარებ|ველოსიპედ|თვითმფრინავ|ფეხით|ხსნარ|შენადნობ|სამუშაო|შრომისნაყოფიერ|{GB}ფას(?:ი|ის|ად|ში){GE}|{GB}ლარ(?:ი|ად|ის){GE}|კილოგრამ|{GB}კგ{GE}|ლიტრ|მილით|{GB}აუზ|{GB}მუშა|ბრიგად`), 2],
  // inequalities
  ["numeric-ineq", R(String.raw`შეადარეთ|დაალაგეთ|რომელია მეტი|რომელი რიცხვია მეტი`), 3],
  ["means", R(String.raw`საშუალო გეომეტრიულ|კოში|\\frac\{a\s*\+\s*b\}\{2\}`), 2],
  ["ineq-proofs", R(String.raw`დაამტკიცეთ[^$]{0,80}(?:\\ge|\\le|>|<|უტოლობ)`), 4],
  ["two-var-ineq", R(String.raw`x\s*\+\s*y[^$]{0,40}(?:\\le|\\ge)|y\s*\\ge[^$]{0,40}x`), 1],
  // functions
  ["function-basics", R(String.raw`განსაზღვრის არე|მნიშვნელობათა სიმრავლე|ფუნქციის მნიშვნელობ|შექცეულ`), 2],
  ["function-props", R(String.raw`{GB}ლუწი|{GB}კენტი|პერიოდ|ზრდად|კლებად|მონოტონ|შემოსაზღვრულ`), 2],
  ["linear-func", R(String.raw`წრფივი ფუნქცი|kx\s*\+\s*b|y\s*=\s*\(?-?[\da-z]*\s*[+-]?\s*\d*\)?\s*x\s*[+-]\s*\d`), 2],
  ["quadratic-func", R(String.raw`პარაბოლ|y\s*=\s*-?\d*x\^\{?2|f\(x\)\s*=\s*-?\d*x\^\{?2`), 2],
  ["graph-transform", R(String.raw`გრაფიკ[^$]{0,60}(?:გადატან|სიმეტრიულ|გადაადგილ)|ააგეთ[^$]{0,30}გრაფიკ`), 2],
  ["max-min", R(String.raw`უდიდესი მნიშვნელობ|უმცირესი მნიშვნელობ|მაქსიმალურ|მინიმალურ`), 2],
  // sequences
  ["arithmetic-prog", R(String.raw`არითმეტიკულ(?:ი)? პროგრესი`), 5],
  ["geometric-prog", R(String.raw`გეომეტრიულ(?:ი)? პროგრესი`), 5],
  ["induction", R(String.raw`ინდუქცი`), 5],
  // trigonometry
  ["radians", R(String.raw`რადიან`), 3],
  ["trig-identities", R(TRIG), 1],
  ["reduction", R(String.raw`(?:sin|cos|tg|ctg|tan|cot)\}?\s*\(?\s*(?:\d{3}|9\d|1\d\d)\s*\^\{?\\circ|(?:sin|cos|tg|ctg)[^$]{0,15}\\frac\{\d*\\pi\}\{2\}\s*[+-]`), 2],
  ["sum-formulas", R(String.raw`(?:sin|cos|tg)\}?\s*\(?\s*\\alpha\s*[+-]\s*\\beta|(?:sin|cos|tg)\}?\s*2\s*\\?(?:alpha|x|a)\b|ორმაგი კუთხ`), 2],
  ["product-sum", R(String.raw`\\sin[^$]{0,25}[+-]\s*\\sin|\\cos[^$]{0,25}[+-]\s*\\cos`), 2],
  ["inverse-trig", R(String.raw`\\arc|arcsin|arccos|arctg|arcctg`), 4],
  // exp & log
  ["real-exponent", R(String.raw`\^\{\s*-?\\d?frac|\^\{\s*-?\d+\s*/\s*\d`), 2],
  ["logarithms", R(LOG), 2],
  // calculus
  ["seq-limit", R(String.raw`\\lim[^$]{0,30}n\s*\\to`), 5],
  ["func-limit", R(String.raw`\\lim[^$]{0,30}x\s*\\to|ზღვარ`), 3],
  ["continuity", R(String.raw`უწყვეტ`), 4],
  ["derivative", R(String.raw`წარმოებულ|f'\s*\(|f\^\{\\prime\}|\\prime|მხები[^$]{0,40}(?:ფუნქცი|გრაფიკ)|სიჩქარე[^$]{0,30}დრო`), 3],
  ["monotonic-extrema", R(String.raw`ექსტრემუმ|ზრდადობის შუალედ|კლებადობის შუალედ|მაქსიმუმის წერტილ|მინიმუმის წერტილ`), 4],
  ["convexity", R(String.raw`გადაღუნვ|ჩაზნექილ|ამოზნექილ`), 4],
  ["curve-sketching", R(String.raw`ასიმპტოტ|გამოიკვლიეთ`), 4],
  ["antiderivative", R(String.raw`პირველად`), 4],
  ["definite-integral", R(String.raw`\\int|ინტეგრალ|წირებით შემოსაზღვრულ|ბრუნვით`), 4],
  // probability & statistics
  ["statistics", R(String.raw`მედიან(?:ა|ის)? (?:მონაცემ|რიცხვ)|მონაცემ|მოდა|სტანდარტული გადახრ|დისპერსი|სიხშირ|საშუალო არითმეტიკულ`), 3],
  ["combinatorics", R(String.raw`რამდენნაირად|რამდენი გზით|C_\{?\d|A_\{?\d|P_\{?\d|გადანაცვლებ|წყობ|ჯუფთებ|კომბინაცი`), 4],
  ["binomial", R(String.raw`ბინომ|ნიუტონის ბინომ`), 5],
  ["probability", R(String.raw`ალბათობ|კამათ|მონეტ|შემთხვევით`), 4],
  // plane geometry
  ["lines-angles", R(String.raw`გაშლილი კუთხ|სხივ[^$]{0,40}კუთხ|მონაკვეთ[^$]{0,40}წრფეზე|მონაკვეთ(?:ზე|ის)[^$]{0,60}წერტილ|ისრებს შორის`), 2],
  ["angle-pairs", R(String.raw`მოსაზღვრე კუთხ|ვერტიკალური კუთხ`), 3],
  ["parallel-lines", R(String.raw`პარალელური წრფე[^$]{0,60}(?:მესამე|მკვეთ|გადაკვეთ)|შიგა ჯვარედინ|შესაბამისი კუთხ`), 3],
  ["parallel-lines", R(String.raw`პარალელურ(?:ი)? წრფ`), 2],
  ["angle-sum", R(String.raw`სამკუთხედ[^$]{0,80}(?:კუთხე|კუთხის)`), 1],
  ["angle-sum", R(String.raw`გარე კუთხ`), 3],
  ["congruence", R(String.raw`ტოლობის ნიშ|სამკუთხედები ტოლია`), 3],
  ["isosceles", R(String.raw`ტოლფერდა|ტოლგვერდა`), 3],
  ["triangle-ineq", R(String.raw`სამკუთხედის უტოლობ|არსებობს სამკუთხედ|შეიძლება იყოს სამკუთხედის გვერდ`), 4],
  ["right-triangle", R(String.raw`მართკუთხა სამკუთხედ|კათეტ|ჰიპოტენუზ`), 3],
  ["cevians", R(String.raw`მედიან|ბისექტრის|სიმაღლ`), 1],
  ["midline", R(String.raw`შუახაზ`), 4],
  ["pythagoras", R(String.raw`პითაგორ`), 5],
  ["acute-trig", R(String.raw`მახვილი კუთხის (?:სინუს|კოსინუს|ტანგენს)`), 3],
  ["law-cos-sin", R(String.raw`სინუსების თეორემ|კოსინუსების თეორემ`), 5],
  ["notable-points", R(String.raw`გადაკვეთის წერტილ[^$]{0,40}(?:მედიან|ბისექტრის|სიმაღლ)|(?:მედიანების|ბისექტრისების|სიმაღლეების) გადაკვეთ|ორთოცენტრ|ცენტროიდ`), 3],
  ["menelaus-ceva", R(String.raw`მენელაოს|ჩევას`), 5],
  ["polygon-basics", R(String.raw`მრავალკუთხედ|ამოზნექილი \S*კუთხედ|დიაგონალების რაოდენობ`), 3],
  ["parallelogram", R(String.raw`პარალელოგრამ`), 4],
  ["rhombus-rect-sq", R(String.raw`{GB}რომბ|მართკუთხედ|{GB}კვადრატ(?:ი|ის|ს|ში)?{GE}`), 2],
  ["trapezoid", R(String.raw`ტრაპეცი`), 4],
  ["regular-polygon", R(String.raw`წესიერ(?:ი)? (?:სამ|ოთხ|ხუთ|ექვს|შვიდ|რვა|ცხრა|ათ|თორმეტ|n-|\d+-)?კუთხედ|წესიერი მრავალკუთხ`), 3],
  ["chords-tangents", R(String.raw`ქორდ|მხებ`), 2],
  ["circle-angles", R(String.raw`რკალ|ჩახაზული კუთხ|ცენტრალური კუთხ`), 3],
  ["inscribed-circum", R(String.raw`ჩახაზულ[^$]{0,30}წრ|შემოხაზულ[^$]{0,30}წრ|წრეწირში ჩახაზ|წრეწირზე შემოხაზ`), 3],
  ["circle-segments", R(String.raw`სეგმენტ|სექტორ`), 3],
  ["circle-length-area", R(String.raw`წრეწირის სიგრძ|წრის ფართობ`), 4],
  ["thales", R(String.raw`თალეს`), 5],
  ["similar-figures", R(String.raw`მსგავს|ჰომოთეტი`), 3],
  ["area-formulas", R(String.raw`ფართობ`), 1],
  ["heron", R(String.raw`ჰერონ`), 5],
  ["area-ratios", R(String.raw`ფართობ(?:ების|თა) შეფარდ|ფართობი[^$]{0,40}რამდენჯერ`), 3],
  ["vectors", R(String.raw`ვექტორ|\\vec|\\overrightarrow`), 3],
  ["dot-product", R(String.raw`სკალარულ`), 4],
  ["line-circle-eq", R(String.raw`x\^\{?2\}?\s*\+\s*y\^\{?2|წრფის განტოლებ|წრეწირის განტოლებ|საკოორდინატო სიბრტყ`), 3],
  ["conics", R(String.raw`ელიფს|ჰიპერბოლ|დირექტრის|ფოკუს|ექსცენტრისიტეტ|y\^\{?2\}?\s*=\s*-?\d*x\b`), 4],
  ["constructions", R(String.raw`ფარგლ|სახაზავ`), 5],
  // solid geometry
  ["stereo-axioms", R(String.raw`სივრცე|ერთ სიბრტყეში`), 1],
  ["parallel-space", R(String.raw`სიბრტყის პარალელ|პარალელური სიბრტყ|აცდენილ`), 3],
  ["perpendicular-space", R(String.raw`სიბრტყის მართობ|სამი მართობ|სიბრტყისადმი[^$]{0,30}მართობ`), 3],
  ["angles-space", R(String.raw`ორწახნაგა|წრფესა და სიბრტყეს შორის|სიბრტყეებს შორის კუთხ|სიბრტყესთან[^$]{0,30}კუთხ`), 3],
  ["distances-space", R(String.raw`მანძილი[^$]{0,50}(?:სიბრტყემდე|წიბომდე|წახნაგამდე)`), 3],
  ["prism", R(String.raw`პრიზმ|{GB}კუბ(?:ი|ის|ს|ში){GE}|პარალელეპიპედ`), 4],
  ["pyramid", R(String.raw`პირამიდ|ტეტრაედრ`), 4],
  ["cross-sections", R(String.raw`{GB}კვეთ(?:ა|ის|ს|ში|ები|ებ){GE}|დიაგონალურ(?:ი)? კვეთ`), 2],
  ["cylinder", R(String.raw`ცილინდრ`), 4],
  ["cone", R(String.raw`კონუს`), 4],
  ["sphere", R(String.raw`სფერო|ბირთვ`), 4],
  ["volume-surface", R(String.raw`მოცულობ|ზედაპირის ფართობ`), 2],
];

/* Context rules: topics that depend on the kind of statement (equation / inequality / function). */
function contextTopics(text, add) {
  const isEq = R(EQ).test(text) || /=\s*0\b/.test(text);
  const isIneq = R(INEQ).test(text) || /\\(?:ge|le|geq|leq)\b|[<>]/.test(text);
  const hasTrig = R(TRIG).test(text), hasLog = R(LOG).test(text);
  const hasExp = /\d\^\{?[a-z-]*x|\\left\([^$]{1,30}\\right\)\^\{?x|\)\^\{?x\b|\^x\b/.test(text);
  const hasX2 = R(X2).test(text);
  const hasRootX = /\\sqrt\{[^}]*x/.test(text);
  const hasCases = /\\begin\{cases\}|განტოლებათა სისტემ/.test(text);
  if (hasTrig && isEq) add("trig-eq", 4);
  if (hasTrig && isIneq && !isEq) add("trig-ineq", 4);
  if (hasLog && isEq) add("log-eq", 4);
  if (hasLog && isIneq && !isEq) add("log-ineq", 4);
  if (hasExp && !hasLog && isEq) add("exp-eq", 4);
  if (hasExp && !hasLog && isIneq && !isEq) add("exp-ineq", 4);
  if (hasCases && hasX2) add("nonlinear-systems", 3);
  // a quadratic *equation*, not a function definition (f(x) = x^2 ..., y = x^2 ...) or an inequality
  const isFunctionDef = /(?:[a-z]\(x\)|\by)\s*=\s*[^=]*x\^/.test(text);
  if (isEq && hasX2 && !isFunctionDef && !R(INEQ).test(text) && !hasTrig && !hasLog && !hasExp) add("quadratic-eq", 2);
  if (isIneq && !isEq && hasX2 && !hasTrig && !hasLog) add("quadratic-ineq", 3);
  if (isIneq && !isEq && !hasX2 && !hasTrig && !hasLog && !hasExp && !hasRootX) add("linear-ineq", 2);
  if (isIneq && /\\frac\{[^}]*\}\{[^}]*x/.test(text)) add("interval-method", 2);
  if (isEq && /\\d?frac\{[^}]*\}\{[^}]*x/.test(text) && !hasTrig && !hasLog) add("rational-eq", 2);
  if (isEq && !hasX2 && !hasTrig && !hasLog && !hasExp && !hasRootX && /ამოხსენით|იპოვეთ x|x\s*=|ამონახსნ|ფესვ/.test(text)) add("linear-eq", 1);
  if (hasRootX && isEq) add("irrational-eq", 2);
}

/* Old free-text tags that point to a topic. */
const OLD_TAG_TOPICS = {
  "ცილინდრი": "cylinder", "cylinder": "cylinder", "cone": "cone", "sphere": "sphere", "prism": "prism", "პირამიდა": "pyramid",
  "logarithms": "logarithms", "logarithm": "logarithms", "ლოგარითმები": "logarithms", "logarithmic equations": "log-eq",
  "limits": "func-limit", "derivatives": "derivative", "წარმოებული": "derivative", "integrals": "definite-integral",
  "\\text{integrals}": "definite-integral", "probability": "probability", "კომბინატორიკა": "combinatorics",
  "combinatorics": "combinatorics", "permutations": "combinatorics", "პერმუტაციები": "combinatorics", "binomial": "binomial",
  "vectors": "vectors", "vector": "vectors", "ვექტორები": "vectors", "parallelogram": "parallelogram", "trapezoid": "trapezoid",
  "sequences": "arithmetic-prog", "conic sections": "conics", "asymptotes": "curve-sketching", "extrema": "monotonic-extrema",
  "floor": "integer-part", "fractional_part": "integer-part", "homothety": "similar-figures", "similar_triangles": "similar-figures",
  "trigonometric identities": "trig-identities", "trig identities": "trig-identities", "inverse_function": "function-props",
  "even-odd": "function-props", "periodicity": "function-props", "periodic": "function-props", "volume": "volume-surface",
  "surface area": "volume-surface", "მოცულობა": "volume-surface", "area_ratio": "area-ratios", "radicals": "square-roots",
  "რადიკალები": "square-roots", "integer_solutions": "diophantine", "domain": "function-basics", "range": "function-basics",
};
const OLD_TAG_AREAS = {
  "geometry": "geometry", "გეომეტრია": "geometry", "სამკუთხედი": "geometry", "triangle": "geometry",
  "სტერეომეტრია": "solid", "3d geometry": "solid", "spatial geometry": "solid", "solid geometry": "solid", "3d": "solid",
  "calculus": "calculus", "limits": "calculus", "derivatives": "calculus", "integrals": "calculus",
  "probability": "prob-stats", "კომბინატორიკა": "prob-stats", "combinatorics": "prob-stats",
};

/* Topics a grade may get: taught in this grade or earlier. */
function allowedFor(grade) {
  return id => {
    const t = T.topics.get(id);
    return t && T.leaves.has(id) && (!t.grades.length || Math.min(...t.grades) <= grade);
  };
}

function suggestTopics(p, grade) {
  const text = norm(problemText(p));
  const optText = norm((p.options || []).join(" "));
  const score = new Map();
  const add = (id, w) => score.set(id, (score.get(id) || 0) + w);
  for (const [id, re, w] of RULES) {
    if (re.test(text)) add(id, w);
    else if (re.test(optText)) add(id, w / 2);
  }
  contextTopics(text, add);
  for (const t of [].concat(p.tags || [], p.tag || [])) {
    const id = OLD_TAG_TOPICS[String(t).trim().toLowerCase()];
    if (id) add(id, 3);
  }
  // keyword overlaps: drop the generic topic when a specific one fired
  const drop = (generic, ...specific) => { if (specific.some(s => score.has(s))) score.delete(generic); };
  drop("trig-identities", "trig-eq", "trig-ineq", "reduction", "sum-formulas", "product-sum", "inverse-trig");
  drop("logarithms", "log-eq", "log-ineq");
  drop("irrational-eq", "square-roots");
  drop("angle-sum", "isosceles", "right-triangle", "cevians");
  drop("area-formulas", "area-ratios", "heron", "volume-surface");
  drop("stereo-axioms", "prism", "pyramid", "cylinder", "cone", "sphere", "parallel-space", "perpendicular-space");
  drop("rational-expr", "trig-identities", "logarithms", "powers", "nth-roots");
  drop("linear-ineq", "abs-eq");
  drop("divisibility", "poly-division");
  if (score.has("derivative") && score.has("chords-tangents") && grade === 11) score.delete("chords-tangents");

  const ok = allowedFor(grade);
  const ranked = [...score.entries()].filter(([id]) => ok(id)).sort((a, b) => b[1] - a[1]);
  if (!ranked.length) return [];
  const best = ranked[0][1];
  return ranked.filter(([, s]) => s >= Math.max(2, best * 0.5)).slice(0, 3).map(([id]) => id)
    .concat(best < 2 ? [ranked[0][0]] : []).filter((v, i, a) => a.indexOf(v) === i).slice(0, 3);
}

function guessArea(p, topics, grade) {
  if (topics.length) return T.topics.get(topics[0]).area;
  const text = norm(problemText(p));
  for (const t of [].concat(p.tags || [], p.tag || [])) {
    const a = OLD_TAG_AREAS[String(t).trim().toLowerCase()];
    if (a) return a;
  }
  if (/პრიზმ|პირამიდ|კუბ|ცილინდრ|კონუს|სფერო|ბირთვ|სივრცე/.test(text)) return "solid";
  if (/\\lim|\\int|წარმოებულ/.test(text)) return "calculus";
  if (/ალბათობ|რამდენნაირად/.test(text)) return "prob-stats";
  if (/სამკუთხედ|ოთხკუთხედ|წრეწირ|კუთხ|გვერდ|ფართობ|პერიმეტრ/.test(text)) return "geometry";
  return "algebra";
}

function suggestType(p) {
  const text = norm(problemText(p));
  const types = [];
  if (/დაამტკიცეთ|აჩვენეთ, რომ/.test(text)) types.push("proof");
  if (/ფარგლ|სახაზავ|აღადგინეთ/.test(text)) types.push("construction");
  if (/ააგეთ[^$]{0,40}გრაფიკ|გრაფიკ(?:ი|ზე|ის მიხედვით)/.test(text)) types.push("graph");
  if (R(String.raw`სიჩქარ|ავტომობილ|მატარებ|ველოსიპედ|თვითმფრინავ|ხსნარ|შენადნობ|შრომისნაყოფიერ|{GB}ფას(?:ი|ის|ად){GE}|{GB}ლარ(?:ი|ად|ის){GE}|მოსწავლ|კლასში|{GB}მუშა|ბრიგად`).test(text)) types.push("word");
  if (/ამოხსენით|იპოვეთ[^$]{0,30}(?:ამონახსნ|ფესვ)|ამონახსნთა|ამონახსენთა/.test(text) || (/განტოლებ|უტოლობ/.test(text) && !types.length)) types.push("solve");
  if (!types.length) types.push("compute");
  return types;
}

function suggestMethods(p, area) {
  const text = norm(problemText(p));
  const m = [];
  if (/პარამეტრ/.test(text)) m.push("parameter");
  if (/\|[^|$]{1,40}x[^|$]{0,40}\||\\left\||მოდულ/.test(text)) m.push("absolute");
  if (/გრაფიკულად|გრაფიკულ მეთოდ/.test(text)) m.push("graphical");
  if (/ვექტორ|\\vec|\\overrightarrow/.test(text)) m.push("vectors");
  if ((area === "geometry" || area === "solid") && /\(\s*-?\d+(?:[.,]\d+)?\s*;\s*-?\d|კოორდინატ/.test(text)) m.push("coordinates");
  return m;
}

/* Difficulty from the position in the quiz (multiple choice) or from points (open tasks). */
function suggestDifficulty(p, index, quizProblems) {
  const text = norm(problemText(p));
  const pts = /\(\s*(\d)\s*ქულა\s*\)/.exec(text);
  if (pts) return Number(pts[1]) >= 4 ? 3 : 2;
  const mc = quizProblems.filter(x => x.options && x.options.length);
  if (p.options && p.options.length && mc.length >= 6) {
    const pos = mc.indexOf(p) / mc.length;
    return pos < 1 / 3 ? 1 : pos < 2 / 3 ? 2 : 3;
  }
  const pos = index / Math.max(1, quizProblems.length);
  return pos < 0.5 ? 2 : 3;
}

/* Hand-picked lines: "topic-a,topic-b | 2 | c,s | par,abs" */
const TYPE_CODES = { c: "compute", s: "solve", p: "proof", w: "word", k: "construction", g: "graph" };
const METHOD_CODES = { par: "parameter", abs: "absolute", sub: "substitution", gra: "graphical", est: "estimation",
                       fsq: "full-square", aux: "aux-construct", coo: "coordinates", vec: "vectors" };
function parseManual(line) {
  const [topics, diff, types, methods] = line.split("|").map(s => s.trim());
  const list = s => (s ? s.split(",").map(x => x.trim()).filter(Boolean) : []);
  const tl = list(topics);
  return {
    topics: tl,
    area: T.topics.get(tl[0]) ? T.topics.get(tl[0]).area : null,
    difficulty: Number(diff),
    type: list(types).map(c => TYPE_CODES[c] || c),
    method: list(methods).map(c => METHOD_CODES[c] || c),
  };
}

module.exports = { suggestTopics, guessArea, suggestType, suggestMethods, suggestDifficulty, parseManual, norm };

if (require.main === module) {
/* ---------------------------------------------------------------- run */
const stats = { files: 0, written: 0, manual: 0, auto: 0, noTopic: 0, skippedReviewed: 0, skippedExisting: 0 };
const topicCount = {};
const sample = [];

for (const q of listMathQuizzes()) {
  const manual = q.year === "2025-26" ? MANUAL[`${q.grade}-${q.quiz}`] : null;
  if (manual && manual.length !== q.problems.length) {
    throw new Error(`${q.file}: ${manual.length} hand-picked lines for ${q.problems.length} problems`);
  }
  const tagsList = q.problems.map((p, i) => {
    if (p.tagsReviewed === true) { stats.skippedReviewed++; return null; }
    if ("area" in p && !FORCE) { stats.skippedExisting++; return null; }
    let t;
    if (manual) {
      t = parseManual(manual[i]);
      stats.manual++;
    } else {
      const topics = suggestTopics(p, q.grade);
      const area = guessArea(p, topics, q.grade);
      t = { topics, area, difficulty: suggestDifficulty(p, i, q.problems), type: suggestType(p), method: suggestMethods(p, area) };
      stats.auto++;
      if (!topics.length) stats.noTopic++;
      if (sample.length < 400) sample.push({ where: `${q.file} #${i + 1}`, text: problemText(p).slice(0, 110), t });
    }
    t.topics.forEach(id => (topicCount[id] = (topicCount[id] || 0) + 1));
    return {
      area: t.area,
      topics: t.topics,
      grade: q.grade,
      difficulty: t.difficulty,
      type: t.type,
      method: t.method,
      source: { book: "", section: "", number: null },
      tagsReviewed: false,
    };
  });
  if (tagsList.every(x => x === null)) continue;
  stats.files++;
  stats.written += tagsList.filter(Boolean).length;
  if (!DRY) fs.writeFileSync(path.join(ROOT, q.file), writeTags(q.source, tagsList), "utf8");
}

console.log(`${DRY ? "[dry run] " : ""}${stats.written} problems in ${stats.files} files: ${stats.manual} hand-picked, ${stats.auto} keyword-based (${stats.noTopic} without a topic).`);
if (stats.skippedReviewed) console.log(`  skipped ${stats.skippedReviewed} reviewed problems`);
if (stats.skippedExisting) console.log(`  skipped ${stats.skippedExisting} problems that already have tags (use --force to redo unreviewed ones)`);
if (DRY) {
  const top = Object.entries(topicCount).sort((a, b) => b[1] - a[1]);
  console.log("\nmost used topics:", top.slice(0, 25).map(([k, v]) => `${k}:${v}`).join(", "));
  console.log("never used:", [...T.leaves].filter(id => !topicCount[id]).join(", "));
  const pick = sample.filter((_, i) => i % 13 === 0).slice(0, 30);
  console.log("\nsample of keyword suggestions:");
  for (const s of pick) console.log(`- ${s.where} [${s.t.area}] ${s.t.topics.join(",") || "(none)"} d${s.t.difficulty} ${s.t.type.join(",")}${s.t.method.length ? " / " + s.t.method.join(",") : ""}\n    ${s.text}`);
}
}
