quizData = [
//1
{
  question: "იპოვეთ $y = x^2 - 4x + 3$, სადაც $x \\in [-1; 1]$ ფუნქციის უდიდესი და უმცირესი მნიშვნელობების ნამრავლი.",
  options: ["$0$", "$1$", "$2$", "$4$", "$-6$", "$-8$"],
  correct: 0,
  solution: "პარაბოლის წვერო $x = 2$-ზეა, ამიტომ $[-1; 1]$-ზე ფუნქცია კლებადია: $y(-1) = 1 + 4 + 3 = 8$, $y(1) = 0$.<br><br>ნამრავლი: $8 \\cdot 0 = 0$.<br><br><strong>პასუხი:</strong> ა) $0$.",
  tags: [],
  area: "algebra",
  topics: ["quadratic-func","max-min"],
  grade: 9,
  difficulty: 1,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//2
{
  question: "ამოხსენით $\\frac{3}{(x-2)^3} \\geq 0$ უტოლობა.",
  options: ["$[-3; 2]$", "$(-\\infty; 2)$", "$[2; 3]$", "$(2; \\infty)$", "$(3; \\infty)$", "$(-\\infty; \\infty)$"],
  correct: 3,
  solution: "მრიცხველი დადებითია, ამიტომ საჭიროა $(x - 2)^3 > 0$ (მნიშვნელი $0$ ვერ იქნება), ანუ $x > 2$.<br><br><strong>პასუხი:</strong> დ) $(2; \\infty)$.",
  tags: [],
  area: "algebra",
  topics: ["linear-ineq","interval-method"],
  grade: 9,
  difficulty: 1,
  type: ["solve"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//3
{
  question: "იპოვეთ $y = -x^2 + 6x + 3$ ფუნქციის უდიდესი მნიშვნელობა.",
  options: ["$18$", "$12$", "$10$", "$8$", "$6$", "$3$"],
  correct: 1,
  solution: "$y = -(x^2 - 6x + 9) + 12 = 12 - (x - 3)^2 \\le 12$.<br><br><strong>პასუხი:</strong> ბ) $12$.",
  tags: [],
  area: "algebra",
  topics: ["quadratic-func","max-min"],
  grade: 9,
  difficulty: 1,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//4
{
  question: "გამოთვალეთ მართკუთხედის ფართობი, თუ მასში ჩახაზული წრეწირის რადიუსია $4$.",
  options: ["$12$", "$16$", "$32$", "$48$", "$64$", "$96$"],
  correct: 4,
  solution: "მართკუთხედში წრეწირი ჩაიხაზება მხოლოდ მაშინ, როცა ის კვადრატია, ხოლო კვადრატის გვერდი ჩახაზული წრეწირის დიამეტრის ტოლია: $8$.<br><br>ფართობი: $64$.<br><br><strong>პასუხი:</strong> ე) $64$.",
  tags: [],
  area: "geometry",
  topics: ["inscribed-circum","rhombus-rect-sq"],
  grade: 9,
  difficulty: 1,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//5
{
  warning: "ყველა პასუხი ჩათვლილია",
  question: "გამოთვალეთ სამკუთხედის ფართობი, თუ მისი გვერდებია $8$, $10$ და $12$, ხოლო კუთხეებია $30^{\\circ}$, $\\alpha$ და $\\beta$ ($30^{\\circ} < \\alpha < \\beta$).",
  options: ["$40$", "$48$", "$30$", "$80$", "$96$", "$70$"],
  correct: [0,1,2,3,4,5],
  solution: "<strong>ამ ამოცანაში ყველა პასუხი ჩაითვალა სწორად.</strong><br><br>პირობა წინააღმდეგობრივია: $8, 10, 12$ გვერდების მქონე სამკუთხედის უმცირესი კუთხე $8$-ის პირდაპირაა და $\\cos = \\dfrac{100 + 144 - 64}{2 \\cdot 10 \\cdot 12} = \\dfrac{3}{4}$, ანუ ის $\\approx 41{,}4^{\\circ}$-ია და არა $30^{\\circ}$.<br><br>ჰერონის ფორმულით ასეთი სამკუთხედის ფართობია $\\sqrt{15 \\cdot 7 \\cdot 5 \\cdot 3} = 15\\sqrt{7} \\approx 39{,}7$ — ვარიანტებში არ არის.",
  tags: [],
  area: "algebra",
  topics: ["linear-ineq"],
  grade: 9,
  difficulty: 1,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//6
{
  question: "ჩამოთვლილთაგან რისი ტოლია $a$ და $b$ ნატურალური რიცხვების ნამრავლი, თუ $y = x^2 + ax + b$ კვადრატული ფუნქციის გრაფიკის წვერო აბსცისათა ღერძზე მდებარეობს?",
  options: ["$4$", "$12$", "$16$", "$18$", "$20$", "$24$"],
  correct: 2,
  solution: "წვერო აბსცისათა ღერძზეა, როცა $D = a^2 - 4b = 0$, ანუ $b = \\dfrac{a^2}{4}$. $a$ ლუწია: $a = 2k$, $b = k^2$, $ab = 2k^3$.<br><br>ჩამოთვლილთაგან ამ სახისაა მხოლოდ $16 = 2 \\cdot 2^3$ ($a = 4$, $b = 4$).<br><br><strong>პასუხი:</strong> გ) $16$.",
  tags: [],
  area: "algebra",
  topics: ["quadratic-func"],
  grade: 9,
  difficulty: 1,
  type: ["graph"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//7
{
  question: "ჩამოთვლილთაგან რომელ შუალედს ეკუთვნის $a$ პარამეტრი, თუ $y = -x^2 + 6x + a$ ფუნქციის გრაფიკი მეორე მეოთხედში არ გადის, $a$ პარამეტრი ნებისმიერი მნიშვნელობისთვის ამ შუალედიდან?",
  options: ["$(3; 6)$", "$(6; 12)$", "$(0; 6)$", "$(-3; 6)$", "$(-3; 3)$", "$(-4; -3)$"],
  correct: 5,
  solution: "მეორე მეოთხედი: $x < 0$, $y > 0$. $x < 0$-ზე $y = -x^2 + 6x + a < a$, ხოლო $x \\to 0$-ზე $y \\to a$.<br><br>გრაფიკი მეორე მეოთხედში არ გადის მხოლოდ მაშინ, როცა $a \\le 0$. ჩამოთვლილი შუალედებიდან მთლიანად ამ პირობას აკმაყოფილებს მხოლოდ $(-4; -3)$.<br><br><strong>პასუხი:</strong> ვ) $(-4; -3)$.",
  tags: [],
  area: "algebra",
  topics: ["quadratic-func"],
  grade: 9,
  difficulty: 1,
  type: ["graph"],
  method: ["parameter"],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//8
{
  question: "მოცემულია $y = f(x)$ ფუნქცია. $f(x) = 0$ განტოლების ამონახსნთა სიმრავლეა $\\{−5; −4; 1; 4\\}.$ რამდენი ელემენტისგან შედგება $|f(x)| \\cdot f(|x|) = 0$ განტოლების ამონახსნთა სიმრავლე?",
  options: ["$8$", "$2$", "$7$", "$4$", "$5$", "$6$"],
  correct: 4,
  solution: "ნამრავლი $0$-ია, როცა $f(x) = 0$ ($x \\in \\{-5; -4; 1; 4\\}$), ან $f(|x|) = 0$, ანუ $|x| \\in \\{1; 4\\}$ ($x = \\pm 1, \\pm 4$; $|x|$ უარყოფითი ვერ იქნება).<br><br>გაერთიანება: $\\{-5; -4; -1; 1; 4\\}$ — $5$ ელემენტი.<br><br><strong>პასუხი:</strong> ე) $5$.",
  tags: [],
  area: "algebra",
  topics: ["abs-eq"],
  grade: 9,
  difficulty: 1,
  type: ["solve"],
  method: ["absolute"],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//9
{
  question: "მართკუთხა სამკუთხედი ჰიპოტენუზისადმი გავლებული სიმაღლით ორ სამკუთხედად იყოფა, რომელთა პერიმეტრებია $n$ და $m$ ($n < m$). იპოვეთ მათ შორის უდიდესის ფართობი, თუ უმცირესის ფართობია $Q$.",
  options: ["$mn$", "$\\frac{Q^2}{mn}$", "$\\frac{Qm^2}{n^2}$", "$\\frac{Qm}{n}$", "$\\frac{mn}{Q}$", "$\\frac{m^2n^2}{Q}$"],
  correct: 2,
  solution: "სიმაღლე ყოფს სამკუთხედს ორ მსგავს სამკუთხედად. პერიმეტრების შეფარდება მსგავსების კოეფიციენტია: $\\dfrac{m}{n}$, ხოლო ფართობების შეფარდება — მისი კვადრატი.<br><br>უდიდესის ფართობი: $Q \\cdot \\dfrac{m^2}{n^2}$.<br><br><strong>პასუხი:</strong> გ) $\\frac{Qm^2}{n^2}$.",
  tags: [],
  area: "algebra",
  topics: ["divisibility","right-triangle","linear-ineq"],
  grade: 9,
  difficulty: 1,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//10
{
  question: "სამკუთხედის სიმაღლეები ისე შეეფარდება ერთმანეთს, როგორც $2:3:4$. იპოვეთ უმცირესი გვერდი, თუ სამკუთხედის პერიმეტრია $39$.",
  options: ["$9$", "$4$", "$2$", "$5$", "$6$", "$10$"],
  correct: 0,
  solution: "გვერდები სიმაღლეების უკუპროპორციულია ($a h_a = 2S$): $\\dfrac{1}{2} : \\dfrac{1}{3} : \\dfrac{1}{4} = 6 : 4 : 3$.<br><br>$13k = 39$, $k = 3$; უმცირესი გვერდი $3k = 9$.<br><br><strong>პასუხი:</strong> ა) $9$.",
  tags: [],
  area: "algebra",
  topics: ["proportion"],
  grade: 9,
  difficulty: 2,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//11
{
  question: "მოცემულია $A = \\{6; 7; 8; 9; 10; 12\\}$ სიმრავლე. $A$ სიმრავლის ელემენტებიდან აღებული $a$ პარამეტრის რამდენი მნიშვნელობისთვის ეკუთვნის $y = x^2 - ax + 7$ ფუნქციის ზრდადობის შუალედს რიცხვი $7$?",
  options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
  correct: 5,
  solution: "$y = x^2 - ax + 7$ ზრდადია $\\left[\\dfrac{a}{2}; +\\infty\\right)$-ზე. $7$ ამ შუალედს ეკუთვნის, როცა $\\dfrac{a}{2} \\le 7$, ანუ $a \\le 14$.<br><br>$A$-ს ყველა $6$ ელემენტი აკმაყოფილებს ამას.<br><br><strong>პასუხი:</strong> ვ) $6$.",
  tags: [],
  area: "algebra",
  topics: ["function-props","quadratic-func"],
  grade: 9,
  difficulty: 2,
  type: ["compute"],
  method: ["parameter"],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//12
{
  question: "რამდენი მთელი მნიშვნელობა აკმაყოფილებს $\\frac{(x^2 - 2x)(x^2 - 4x + 3)}{(x + 4)(x - 7)(x^2 - x - 6)} \\leq 0$ უტოლობას?",
  options: ["$8$", "$7$", "$6$", "$9$", "$5$", "$4$"],
  correct: 1,
  solution: "$\\dfrac{x(x - 2)(x - 1)(x - 3)}{(x + 4)(x - 7)(x - 3)(x + 2)} \\le 0$, $x \\ne 3$. შევკვეცოთ $(x - 3)$:<br><br>$\\dfrac{x(x - 1)(x - 2)}{(x + 4)(x + 2)(x - 7)} \\le 0$. ინტერვალების მეთოდით: $x \\in (-4; -2) \\cup [0; 1] \\cup [2; 7)$, $x \\ne 3$.<br><br>მთელი რიცხვები: $-3;\\ 0;\\ 1;\\ 2;\\ 4;\\ 5;\\ 6$ — სულ $7$.<br><br><strong>პასუხი:</strong> ბ) $7$.",
  tags: [],
  area: "algebra",
  topics: ["quadratic-ineq","interval-method"],
  grade: 9,
  difficulty: 2,
  type: ["solve"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//13
{
  question: "ჩამოთვლილთაგან $x$-ის რომელი მნიშვნელობისთვის ექნება $x^2 - x - 12$ და $3x - 7$ გამოსახულებას ერთნაირი ნიშანი?",
  options: ["$-8$", "$-\\sqrt{17}$", "$-\\frac{16}{3}$", "$\\frac{5}{3}$", "$\\sqrt{10}$", "$3$"],
  correct: 3,
  solution: "$x^2 - x - 12 = (x - 4)(x + 3)$ უარყოფითია $(-3; 4)$-ზე, $3x - 7$ — $x < \\dfrac{7}{3}$-ზე.<br><br>ორივე უარყოფითია $\\left(-3; \\dfrac{7}{3}\\right)$-ზე, ორივე დადებითი — $x > 4$-ზე. ჩამოთვლილთაგან ამ სიმრავლეს ეკუთვნის მხოლოდ $\\dfrac{5}{3}$.<br><br><strong>პასუხი:</strong> დ) $\\frac{5}{3}$.",
  tags: [],
  area: "algebra",
  topics: ["square-roots"],
  grade: 9,
  difficulty: 2,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//14
{
  question: "გამოთვალეთ მართკუთხა სამკუთხედის უმცირესი სიმაღლე, თუ დანარჩენი სიმაღლეებია $6$ და $8$.",
  options: ["$4$", "$3$", "$3{,}6$", "$5{,}4$", "$4{,}8$", "$5$"],
  correct: 4,
  solution: "მართკუთხა სამკუთხედის ორი სიმაღლე მისი კათეტებია: $6$ და $8$. ჰიპოტენუზა $10$, მასზე დაშვებული სიმაღლე $\\dfrac{6 \\cdot 8}{10} = 4{,}8$.<br><br><strong>პასუხი:</strong> ე) $4{,}8$.",
  tags: [],
  area: "geometry",
  topics: ["right-triangle"],
  grade: 9,
  difficulty: 2,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//15
{
  question: "გამოთვალეთ მართკუთხა სამკუთხედის ფართობი, თუ ჰიპოტენუზა $15$-ია, ხოლო ჩახაზული წრეწირის რადიუსი $3$.",
  options: ["$45$", "$36$", "$54$", "$64$", "$24$", "$72$"],
  correct: 2,
  solution: "$r = \\dfrac{a + b - c}{2}$: $a + b = 2 \\cdot 3 + 15 = 21$. $a^2 + b^2 = 225$, ამიტომ $2ab = 441 - 225 = 216$, $ab = 108$.<br><br>ფართობი: $\\dfrac{ab}{2} = 54$.<br><br><strong>პასუხი:</strong> გ) $54$.",
  tags: [],
  area: "geometry",
  topics: ["right-triangle","inscribed-circum"],
  grade: 9,
  difficulty: 2,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//16
{
  question: "ჩამოთვლილთაგან რომელ გამოსახულებაზე უნდა გავამრავლოთ $y = |x - 2|$ ფუნქცია, რომ მივიღოთ ლუწი ფუნქცია? I. $x^2$; II. $x^2 - |x|$; III. $|x + 2|$; IV. $|x - 2|$.",
  options: ["მხოლოდ I", "მხოლოდ II", "მხოლოდ III", "მხოლოდ IV", "მხოლოდ II და IV", "მხოლოდ I და II"],
  correct: 2,
  solution: "III: $|x - 2| \\cdot |x + 2| = |x^2 - 4|$ — ლუწია.<br><br>დანარჩენი არა: მაგ. $x = 1$ და $x = -1$-ზე I: $1$ და $3$; II: $0$ და $0$, მაგრამ $x = 3, -3$-ზე $6$ და $30$; IV: $1$ და $9$.<br><br><strong>პასუხი:</strong> გ) მხოლოდ III.",
  tags: [],
  area: "algebra",
  topics: ["function-props"],
  grade: 9,
  difficulty: 2,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//17
{
  question: "იპოვეთ $x^2 + 4x + 7 + y^2 + 6y + 11 + z^2 + 8z + 17$ გამოსახულების უმცირესი მნიშვნელობა.",
  options: ["$-2$", "$-1$", "$0$", "$6$", "$9$", "$15$"],
  correct: 3,
  solution: "$(x + 2)^2 + 3 + (y + 3)^2 + 2 + (z + 4)^2 + 1 \\ge 6$; ტოლობა $x = -2$, $y = -3$, $z = -4$-ზე.<br><br><strong>პასუხი:</strong> დ) $6$.",
  tags: [],
  area: "algebra",
  topics: ["max-min"],
  grade: 9,
  difficulty: 2,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//18
{
  question: "მოცემულია $g(x) = 2x$ და $f(x) = x + 1$ ფუნქციები. იპოვეთ $f(x) \\cdot f(g(x))$ ფუნქციის უმცირესი მნიშვნელობა.",
  options: ["$-1$", "$0$", "$-\\frac{1}{8}$", "$-\\frac{1}{16}$", "$\\frac{5}{4}$", "$2$"],
  correct: 2,
  solution: "$f(x) \\cdot f(g(x)) = (x + 1)(2x + 1) = 2x^2 + 3x + 1$.<br><br>წვერო $x = -\\dfrac{3}{4}$-ზე: $2 \\cdot \\dfrac{9}{16} - \\dfrac{9}{4} + 1 = -\\dfrac{1}{8}$.<br><br><strong>პასუხი:</strong> გ) $-\\frac{1}{8}$.",
  tags: [],
  area: "algebra",
  topics: ["max-min"],
  grade: 9,
  difficulty: 3,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//19
{
  question: "$M$ და $N$ წერტილები $ABCD$ ტრაპეციის შესაბამისად $AC$ და $BD$ დიაგონალების შუაწერტილებია, ხოლო $K$ და $P$ წერტილები შესაბამისად $BC$ და $AD$ ფუძეების შუაწერტილებია. იპოვეთ $MKNP$ ოთხკუთხედის ფართობი, თუ $MN = 5$, $AB = 6$, $DC = 8$.",
  options: ["$18$", "$12$", "$24$", "$36$", "$32$", "$30$"],
  correct: 1,
  solution: "შუახაზებით: $KM = \\dfrac{AB}{2} = 3$ ($ABC$-ში), $PN = \\dfrac{AB}{2} = 3$ ($ABD$-ში), $KN = PM = \\dfrac{CD}{2} = 4$. $MKNP$ პარალელოგრამია.<br><br>$MKN$ სამკუთხედში $3^2 + 4^2 = 5^2 = MN^2$, ამიტომ $\\angle K = 90^{\\circ}$ — მართკუთხედი.<br><br>ფართობი: $3 \\cdot 4 = 12$.<br><br><strong>პასუხი:</strong> ბ) $12$.",
  tags: [],
  area: "geometry",
  topics: ["trapezoid"],
  grade: 9,
  difficulty: 3,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//20
{
  question: "$M$ და $N$ წერტილები $AB$ დიამეტრზე აგებულ ნახევარწრეწირს სამ ტოლ ნაწილად ყოფენ. გამოთვალეთ $AMN$ სამკუთხედის ფართობი, თუ $AB = 12$.",
  options: ["$9\\sqrt{3}$", "$12\\sqrt{2}$", "$12\\sqrt{6}$", "$24$", "$36$", "შეუძლებელია დადგენა"],
  correct: 0,
  solution: "$R = 6$, რკალები $60^{\\circ}$-იანია. ცენტრი $O(0; 0)$, $A(-6; 0)$, $M(-3; 3\\sqrt{3})$, $N(3; 3\\sqrt{3})$.<br><br>$MN = 6$ და $MN \\parallel AB$, $A$-დან $MN$-მდე მანძილი $3\\sqrt{3}$.<br><br>$S = \\dfrac{1}{2} \\cdot 6 \\cdot 3\\sqrt{3} = 9\\sqrt{3}$.<br><br><strong>პასუხი:</strong> ა) $9\\sqrt{3}$.",
  tags: [],
  area: "geometry",
  topics: ["area-formulas"],
  grade: 9,
  difficulty: 3,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},
//21
{
  question: "$g(x) = x^2 + b \\cdot x + c$ კვადრატულ სამწევრს აქვს დადებითი $D$ დისკრიმინანტი. რამდენი ამონახსნი აქვს $g(x) + g(x + \\sqrt{D}) = 0$ განტოლებას?",
  options: ["$0$", "$1$", "$2$", "$3$", "$4$", "შეუძლებელია დადგენა"],
  correct: 1,
  solution: "$g(x) = (x - x_1)(x - x_2)$, სადაც $x_2 = x_1 + \\sqrt{D}$. მაშინ $g(x + \\sqrt{D}) = (x - x_1 + \\sqrt{D})(x - x_1)$.<br><br>$g(x) + g(x + \\sqrt{D}) = (x - x_1)(x - x_2 + x - x_1 + \\sqrt{D}) = (x - x_1) \\cdot 2(x - x_1) = 2(x - x_1)^2$.<br><br>$2(x - x_1)^2 = 0$ — ერთი ამონახსნი.<br><br><strong>პასუხი:</strong> ბ) $1$.",
  tags: [],
  area: "algebra",
  topics: ["square-roots"],
  grade: 9,
  difficulty: 3,
  type: ["solve"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//22
{
  question: "ამოხსენით $\\frac{1}{x^2 - x - 6} \\leq x + 4 - x^2$ უტოლობა.",
  options: ["$1$", "$(-6; 4)$", "$(-6; -4)$", "$(-2; 3)$", "$(2; 4)$", "∅"],
  correct: 3,
  solution: "აღვნიშნოთ $t = x^2 - x - 6$; მაშინ $x + 4 - x^2 = -t - 2$.<br><br>$\\dfrac{1}{t} \\le -t - 2 \\Leftrightarrow \\dfrac{1 + t^2 + 2t}{t} \\le 0 \\Leftrightarrow \\dfrac{(t + 1)^2}{t} \\le 0 \\Leftrightarrow t < 0$.<br><br>$x^2 - x - 6 < 0$: $-2 < x < 3$.<br><br><strong>პასუხი:</strong> დ) $(-2; 3)$.",
  tags: [],
  area: "algebra",
  topics: ["quadratic-ineq","interval-method"],
  grade: 9,
  difficulty: 3,
  type: ["solve"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//23
{
  question: "$f(x) = x^2 - a x + 6$ კვადრატული ფუნქციის გრაფიკი საკოორდინატო ღერძებს გადაკვეთს $A$, $B$ და $C$ წერტილებში. ჩამოთვლილთაგან რისი ტოლია $a$, თუ $ABC$ სამკუთხედის ფართობია $3$.",
  options: ["$3$", "$-4$", "$5$", "$2$", "$6$", "$0$"],
  correct: 2,
  solution: "გრაფიკი $Oy$-ს კვეთს $C(0; 6)$-ში, $Ox$-ს — ფესვებში $x_1$, $x_2$.<br><br>$S = \\dfrac{1}{2}|x_1 - x_2| \\cdot 6 = 3$, $|x_1 - x_2| = 1$. $|x_1 - x_2| = \\sqrt{a^2 - 24}$, ამიტომ $a^2 = 25$, $a = \\pm 5$.<br><br><strong>პასუხი:</strong> გ) $5$.",
  tags: [],
  area: "algebra",
  topics: ["quadratic-func"],
  grade: 9,
  difficulty: 3,
  type: ["graph"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//24
{
  question: "ამოზნექილი ოთხკუთხედის ორი გვერდის სიგრძეა $1$ და $4$. ერთ-ერთი დიაგონალი, რომლის სიგრძეა $2$, ყოფს მას ორ ტოლფერდა სამკუთხედად. იპოვეთ ოთხკუთხედის ფართობი.",
  options: ["$8$", "$5$", "$6$", "$4\\sqrt{3}$", "$\\frac{7\\sqrt{5}}{2}$", "$\\frac{5\\sqrt{15}}{4}$"],
  correct: 5,
  solution: "დიაგონალი $2$ და გვერდი $1$ ტოლფერდა სამკუთხედში: $(1; 1; 2)$ გადაგვარებულია, ამიტომ $(1; 2; 2)$. დიაგონალი $2$ და გვერდი $4$: $(2; 2; 4)$ გადაგვარებულია, ამიტომ $(2; 4; 4)$.<br><br>$(1; 2; 2)$: ფუძეზე $1$ სიმაღლე $\\sqrt{4 - \\frac{1}{4}} = \\dfrac{\\sqrt{15}}{2}$, ფართობი $\\dfrac{\\sqrt{15}}{4}$. $(2; 4; 4)$: ფუძეზე $2$ სიმაღლე $\\sqrt{16 - 1} = \\sqrt{15}$, ფართობი $\\sqrt{15}$.<br><br>ჯამი: $\\dfrac{5\\sqrt{15}}{4}$.<br><br><strong>პასუხი:</strong> ვ) $\\frac{5\\sqrt{15}}{4}$.",
  tags: [],
  area: "geometry",
  topics: ["isosceles","polygon-basics"],
  grade: 9,
  difficulty: 3,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//25
{
  question: "მახვილკუთხა $ABC$ სამკუთხედში $\\angle B = 60^{\\circ}$. $AM$ და $CN$ სამკუთხედის სიმაღლეებია. $P$ წერტილი $AC$ გვერდის შუა წერტილია. იპოვეთ $MNP$ სამკუთხედის ფართობი, თუ $AC = 12$.",
  options: ["$9$", "$9\\sqrt{3}$", "$18$", "$12\\sqrt{2}$", "$6\\sqrt{2}$", "$6\\sqrt{3}$"],
  correct: 1,
  solution: "$AMC$ და $ANC$ მართკუთხა სამკუთხედებია საერთო $AC$ ჰიპოტენუზით, ამიტომ $PM = PN = \\dfrac{AC}{2} = 6$.<br><br>$PA = PN$-დან $\\angle APN = 180^{\\circ} - 2\\angle A$, ანალოგიურად $\\angle CPM = 180^{\\circ} - 2\\angle C$. $\\angle MPN = 2(\\angle A + \\angle C) - 180^{\\circ} = 180^{\\circ} - 2\\angle B = 60^{\\circ}$.<br><br>$MNP$ ტოლგვერდაა, გვერდით $6$: $S = \\dfrac{36\\sqrt{3}}{4} = 9\\sqrt{3}$.<br><br><strong>პასუხი:</strong> ბ) $9\\sqrt{3}$.",
  tags: [],
  area: "geometry",
  topics: ["cevians"],
  grade: 9,
  difficulty: 3,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
}
];
