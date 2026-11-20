quizData = [
  // 1
  {
    question: "<strong>(3 ქულა)</strong> განსაზღვრეთ $f(x) = (x + 1)^3 - 1$ ფუნქციის შექცეული ფუნქციის სახე და ააგეთ მისი გრაფიკი.",
    options: [],
    tags: [],
    solution: "$y = (x + 1)^3 - 1 \\Rightarrow (x + 1)^3 = y + 1 \\Rightarrow x = \\sqrt[3]{y + 1} - 1$. ცვლადები გადავაგდოთ: $f^{-1}(x) = \\sqrt[3]{x + 1} - 1$.<br><br>გრაფიკი: $y = \\sqrt[3]{x}$-ის გრაფიკი, გადატანილი $1$-ით მარცხნივ და $1$-ით ქვემოთ; ის $y = (x + 1)^3 - 1$-ის გრაფიკის სიმეტრიულია $y = x$ წრფის მიმართ. გადის $(-9;\\ -3)$, $(-2;\\ -2)$, $(-1;\\ -1)$, $(0;\\ 0)$, $(7;\\ 1)$ წერტილებზე.<br><br><strong>პასუხი:</strong> $f^{-1}(x) = \\sqrt[3]{x + 1} - 1$.",
    area: "algebra",
    topics: ["function-props","graph-transform"],
    grade: 9,
    difficulty: 1,
    type: ["graph"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 2
  {
    question: "<strong>(3 ქულა)</strong> წრეწირში ჩახაზული წესიერი რვაკუთხედის ფართობი $8\\sqrt{6}$-ის ტოლია. იპოვეთ იმავე წრეწირზე შემოხაზული წესიერი ექვსკუთხედის ფართობი.",
    options: [],
    tags: [],
    solution: "$R$ რადიუსიან წრეწირში ჩახაზული წესიერი რვაკუთხედის ფართობი: $8 \\cdot \\dfrac{1}{2}R^2\\sin 45^\\circ = 2\\sqrt{2}R^2 = 8\\sqrt{6}$, $R^2 = 4\\sqrt{3}$.<br><br>იმავე წრეწირზე შემოხაზული წესიერი ექვსკუთხედის აპოთემა $R$-ია, გვერდი $a = \\dfrac{2R}{\\sqrt{3}}$, ფართობი: $\\dfrac{3\\sqrt{3}}{2}a^2 = 2\\sqrt{3}R^2 = 2\\sqrt{3} \\cdot 4\\sqrt{3} = 24$.<br><br><strong>პასუხი:</strong> $24$.",
    area: "geometry",
    topics: ["regular-polygon"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 3
  {
    question: "<strong>(3 ქულა)</strong> გაამარტივეთ გამოსახულება: $\\left(\\dfrac{\\sqrt[4]{x^3} - y}{\\sqrt[4]{x} - \\sqrt[3]{y}} - 3\\sqrt[12]{x^3 \\cdot y^4}\\right)^{-\\frac{1}{2}} \\cdot \\left(\\dfrac{\\sqrt[4]{x^3} + y}{\\sqrt[4]{x} + \\sqrt[3]{y}} - \\sqrt[3]{y^2}\\right)$, სადაც $x^3 > y^4$.",
    options: [],
    tags: [],
    solution: "აღვნიშნოთ $a = \\sqrt[4]{x}$, $b = \\sqrt[3]{y}$: $\\sqrt[4]{x^3} = a^3$, $y = b^3$, $\\sqrt[12]{x^3y^4} = ab$, $\\sqrt[3]{y^2} = b^2$.<br><br>პირველი ფრჩხილი: $\\dfrac{a^3 - b^3}{a - b} - 3ab = a^2 + ab + b^2 - 3ab = (a - b)^2$.<br>$x^3 > y^4 \\Rightarrow a > |b| \\ge b$, ამიტომ $\\left((a - b)^2\\right)^{-\\frac{1}{2}} = \\dfrac{1}{a - b}$.<br><br>მეორე ფრჩხილი: $\\dfrac{a^3 + b^3}{a + b} - b^2 = a^2 - ab = a(a - b)$.<br><br>ნამრავლი: $\\dfrac{a(a - b)}{a - b} = a = \\sqrt[4]{x}$.<br><br><strong>პასუხი:</strong> $\\sqrt[4]{x}$.",
    area: "algebra",
    topics: ["nth-roots"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: ["substitution"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 4
  {
    question: "<strong>(4 ქულა)</strong> ერთი და იმავე წრის $60^\\circ$-იან სექტორში და $60^\\circ$-იანი რკალით შემოსაზღვრულ სეგმენტში ჩახაზულია წრეწირები. იპოვეთ ამ წრეწირთა ფართობების შეფარდება.",
    options: [],
    tags: [],
    solution: "წრის რადიუსი $R$.<br><br><strong>სექტორი:</strong> ჩახაზული წრეწირის ცენტრი ბისექტრისაზეა, $O$-დან $d$ მანძილზე: $r_1 = d\\sin 30^\\circ = \\dfrac{d}{2}$ და $d + r_1 = R$, ამიტომ $r_1 = \\dfrac{R}{3}$.<br><br><strong>სეგმენტი:</strong> $60^\\circ$-იანი რკალის ქორდა ცენტრიდან $R\\cos 30^\\circ = \\dfrac{R\\sqrt{3}}{2}$ მანძილზეა; სეგმენტის სიმაღლე $R - \\dfrac{R\\sqrt{3}}{2}$, უდიდესი ჩახაზული წრეწირის დიამეტრი ამ სიმაღლის ტოლია: $r_2 = \\dfrac{R(2 - \\sqrt{3})}{4}$.<br><br>$\\dfrac{r_1}{r_2} = \\dfrac{4}{3(2 - \\sqrt{3})} = \\dfrac{4(2 + \\sqrt{3})}{3}$, ფართობების შეფარდება: $\\dfrac{S_1}{S_2} = \\dfrac{16(2 + \\sqrt{3})^2}{9} = \\dfrac{16(7 + 4\\sqrt{3})}{9}$.<br><br><strong>პასუხი:</strong> $\\dfrac{16(7 + 4\\sqrt{3})}{9}$ (სექტორში ჩახაზულისა სეგმენტში ჩახაზულთან).",
    area: "geometry",
    topics: ["circle-segments","inscribed-circum"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 5
  {
    question: "<strong>(4 ქულა)</strong> მათემატიკური ინდუქციის მეთოდის გამოყენებით დაამტკიცეთ, რომ ნებისმიერი $n \\in \\mathbb{N}$ რიცხვისთვის სამართლიანია ტოლობა: $1 \\cdot 3 + 3 \\cdot 3^2 + 5 \\cdot 3^3 + \\ldots + (2n - 1) \\cdot 3^n = 3^{n+1}(n - 1) + 3$.",
    options: [],
    tags: [],
    solution: "<strong>ბაზა:</strong> $n = 1$: მარცხნივ $1 \\cdot 3 = 3$, მარჯვნივ $3^2 \\cdot 0 + 3 = 3$ — სწორია.<br><br><strong>ინდუქციური ბიჯი:</strong> ვთქვათ, $n = k$-სთვის $S_k = 3^{k+1}(k - 1) + 3$. მაშინ<br>$S_{k+1} = S_k + (2k + 1) \\cdot 3^{k+1} = 3^{k+1}(k - 1 + 2k + 1) + 3 = 3^{k+1} \\cdot 3k + 3 = 3^{k+2} \\cdot k + 3$,<br>რაც არის $3^{(k+1)+1}\\big((k + 1) - 1\\big) + 3$ — ტოლობა სწორია $n = k + 1$-სთვის.<br><br>მათემატიკური ინდუქციის პრინციპით ტოლობა სწორია ნებისმიერი $n \\in \\mathbb{N}$-სთვის.",
    area: "algebra",
    topics: ["induction"],
    grade: 9,
    difficulty: 2,
    type: ["proof"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 6
  {
    question: "<strong>(4 ქულა)</strong> იპოვეთ, რა უდიდესი ფართობი შეიძლება ჰქონდეს წრიულ სექტორს, თუ მისი პერიმეტრი (რადიუსების და რკალის ჯამი) $36$-ის ტოლია.",
    options: [],
    tags: [],
    solution: "რადიუსი $r$, რკალის სიგრძე $l$: $2r + l = 36$, $l = 36 - 2r$. სექტორის ფართობი: $S = \\dfrac{lr}{2} = r(18 - r) = 81 - (r - 9)^2 \\le 81$; ტოლობა, როცა $r = 9$, $l = 18$ (კუთხე $2$ რადიანი).<br><br><strong>პასუხი:</strong> $81$.",
    area: "geometry",
    topics: ["circle-length-area","max-min"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 7
  {
    question: "<strong>(4 ქულა)</strong> მოცემულია რეკურენტული მიმდევრობა $\\{a_n\\}$, რომელიც განისაზღვრება ფორმულით $a_{n+1} = \\dfrac{a_n^2 + 2}{2a_n}$, $n \\in \\mathbb{N}$, საწყისი წევრით $a_1 = 3$. დაამტკიცეთ, რომ ეს მიმდევრობა არის კლებადი და შემოსაზღვრული.",
    options: [],
    tags: [],
    solution: "<strong>დადებითობა:</strong> $a_1 = 3 > 0$, და თუ $a_n > 0$, მაშინ $a_{n+1} = \\dfrac{a_n^2 + 2}{2a_n} > 0$.<br><br><strong>ქვემოდან შემოსაზღვრულობა:</strong> $a_{n+1} - \\sqrt{2} = \\dfrac{a_n^2 - 2\\sqrt{2}a_n + 2}{2a_n} = \\dfrac{(a_n - \\sqrt{2})^2}{2a_n} \\ge 0$. მაშასადამე, $a_n \\ge \\sqrt{2}$ ყველა $n$-ისთვის ($a_1 = 3 > \\sqrt{2}$ და ტოლობა შეუძლებელია, რადგან $a_1 \\ne \\sqrt{2}$).<br><br><strong>კლებადობა:</strong> $a_{n+1} - a_n = \\dfrac{a_n^2 + 2 - 2a_n^2}{2a_n} = \\dfrac{2 - a_n^2}{2a_n} < 0$, რადგან $a_n > \\sqrt{2}$.<br><br>მიმდევრობა კლებადია და $\\sqrt{2} < a_n \\le a_1 = 3$, ე.ი. შემოსაზღვრულია.",
    area: "algebra",
    topics: ["induction"],
    grade: 9,
    difficulty: 3,
    type: ["proof"],
    method: ["estimation"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];
