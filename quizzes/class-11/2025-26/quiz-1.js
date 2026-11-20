quizData = [
  // 1
  {
    question: "<strong>(3 ქულა)</strong> $5$ სმ წიბოს მქონე კუბის ფორმის სხეულიდან ამოჭრილია $1$ სმ რადიუსის მქონე ცილინდრის ფორმის სხეული ისე, რომ ცილინდრის ფუძეების ცენტრები ემთხვევა კუბის მოპირდაპირე წახნაგების ცენტრებს. იპოვეთ მიღებული სხეულის ზედაპირის ფართობი.",
    options: [],
    tags: [],
    solution: "კუბის ზედაპირი: $6 \\cdot 25 = 150$ სმ². ცილინდრის ამოჭრისას ორ წახნაგს აკლდება $1$ სმ რადიუსიანი წრე: $-2\\pi$. ემატება ხვრელის შიგა ზედაპირი — ცილინდრის გვერდითი ზედაპირი: $2\\pi \\cdot 1 \\cdot 5 = 10\\pi$.<br><br>$150 - 2\\pi + 10\\pi = 150 + 8\\pi$.<br><br><strong>პასუხი:</strong> $150 + 8\\pi$ სმ².",
    area: "solid",
    topics: ["cylinder","volume-surface"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 2
  {
    question: "<strong>(3 ქულა)</strong> რისი ტოლია $\\log_{a^2}(a^7 - a^9)$, თუ $a$ არის $a^6 + a^2 = 1$ განტოლების დადებითი ამონახსნი.",
    options: [],
    tags: [],
    solution: "$a^6 + a^2 = 1 \\Rightarrow 1 - a^2 = a^6$ (და $0 < a < 1$, $a \\ne 1$).<br><br>$a^7 - a^9 = a^7(1 - a^2) = a^7 \\cdot a^6 = a^{13}$. $\\log_{a^2}a^{13} = \\dfrac{13}{2}$.<br><br><strong>პასუხი:</strong> $\\dfrac{13}{2}$.",
    area: "algebra",
    topics: ["logarithms"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 3
  {
    question: "<strong>(3 ქულა)</strong> ამოხსენით $\\left(10 + 3\\sqrt{11}\\right)^x + \\left(10 - 3\\sqrt{11}\\right)^x = 20$ განტოლება.",
    options: [],
    tags: [],
    solution: "$(10 + 3\\sqrt{11})(10 - 3\\sqrt{11}) = 100 - 99 = 1$. აღვნიშნოთ $t = (10 + 3\\sqrt{11})^x > 0$: $t + \\dfrac{1}{t} = 20$, $t^2 - 20t + 1 = 0$, $t = 10 \\pm 3\\sqrt{11}$.<br><br>$t = 10 + 3\\sqrt{11} \\Rightarrow x = 1$; $t = 10 - 3\\sqrt{11} = (10 + 3\\sqrt{11})^{-1} \\Rightarrow x = -1$.<br><br><strong>პასუხი:</strong> $x = \\pm 1$.",
    area: "algebra",
    topics: ["exp-eq"],
    grade: 11,
    difficulty: 2,
    type: ["solve"],
    method: ["substitution"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 4
  {
    question: "<strong>(4 ქულა)</strong> გამოთვალეთ $\\log_2 20$, თუ $\\log_3 54 = a$ და $\\log_5 75 = b$.",
    options: [],
    tags: [],
    solution: "$\\log_3 54 = \\log_3(2 \\cdot 27) = 3 + \\log_3 2 = a$, ამიტომ $\\log_3 2 = a - 3$.<br>$\\log_5 75 = \\log_5(3 \\cdot 25) = 2 + \\log_5 3 = b$, ამიტომ $\\log_5 3 = b - 2$.<br><br>$\\log_5 2 = \\log_5 3 \\cdot \\log_3 2 = (a - 3)(b - 2)$, $\\log_2 5 = \\dfrac{1}{(a - 3)(b - 2)}$.<br><br>$\\log_2 20 = 2 + \\log_2 5 = 2 + \\dfrac{1}{(a - 3)(b - 2)}$.<br><br><strong>პასუხი:</strong> $2 + \\dfrac{1}{(a - 3)(b - 2)}$.",
    area: "algebra",
    topics: ["logarithms"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 5
  {
    question: "<strong>(4 ქულა)</strong> კონუსის ფუძის რადიუსია $R$, ხოლო მსახველი ფუძის სიბრტყესთან $\\alpha$ კუთხეს შეადგენს. კონუსის წვეროზე გავლებულია სიბრტყე, რომელიც მის სიმაღლესთან $\\varphi$ კუთხეს შეადგენს. იპოვეთ მიღებული კვეთის ფართობი.",
    options: [],
    tags: [],
    solution: "კონუსის სიმაღლე $H = R\\operatorname{tg}\\alpha$. კვეთა — ტოლფერდა სამკუთხედი, ფუძით ფუძის წრის ქორდაზე. სიბრტყე სიმაღლესთან $\\varphi$ კუთხეს ადგენს, ამიტომ ქორდის მანძილი ცენტრიდან $d = H\\operatorname{tg}\\varphi$, სამკუთხედის სიმაღლე $\\dfrac{H}{\\cos\\varphi}$, ქორდის ნახევარი $\\sqrt{R^2 - d^2}$.<br><br>$S = \\dfrac{H}{\\cos\\varphi}\\sqrt{R^2 - H^2\\operatorname{tg}^2\\varphi} = \\dfrac{R^2\\operatorname{tg}\\alpha}{\\cos\\varphi}\\sqrt{1 - \\operatorname{tg}^2\\alpha\\operatorname{tg}^2\\varphi}$ (კვეთა არსებობს, როცა $\\operatorname{tg}\\alpha\\operatorname{tg}\\varphi < 1$, ანუ $\\alpha + \\varphi < 90^\\circ$).<br><br><strong>პასუხი:</strong> $S = \\dfrac{R^2\\operatorname{tg}\\alpha}{\\cos\\varphi}\\sqrt{1 - \\operatorname{tg}^2\\alpha\\operatorname{tg}^2\\varphi}$.",
    area: "solid",
    topics: ["cone","cross-sections"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 6
  {
    question: "<strong>(4 ქულა)</strong> სფერო დიამეტრით $AD = \\sqrt{3}$ ეხება $ABC$ სამკუთხედის სიბრტყეს $A$ წერტილში. $BD$ და $CD$ მონაკვეთები სფეროს გადაკვეთს შესაბამისად $M$ და $N$ წერტილებში. იპოვეთ $MN$ მონაკვეთის სიგრძე, თუ $AB = 3$, $AC = 3\\sqrt{5}$, $\\angle BDC = \\dfrac{\\pi}{3}$.",
    options: [],
    tags: [],
    solution: "სფერო სიბრტყეს $A$-ში ეხება, ამიტომ $AD \\perp$ სიბრტყე. $AD$ დიამეტრია, ამიტომ $\\angle AMD = 90^\\circ$: $AM$ არის $DAB$ მართკუთხა სამკუთხედის სიმაღლე და $DM \\cdot DB = DA^2$.<br><br>$DB = \\sqrt{3 + 9} = 2\\sqrt{3}$, $DM = \\dfrac{3}{2\\sqrt{3}} = \\dfrac{\\sqrt{3}}{2}$; $DC = \\sqrt{3 + 45} = 4\\sqrt{3}$, $DN = \\dfrac{3}{4\\sqrt{3}} = \\dfrac{\\sqrt{3}}{4}$.<br><br>$DMN$ სამკუთხედში $\\angle D = 60^\\circ$: $MN^2 = \\dfrac{3}{4} + \\dfrac{3}{16} - 2 \\cdot \\dfrac{\\sqrt{3}}{2} \\cdot \\dfrac{\\sqrt{3}}{4} \\cdot \\dfrac{1}{2} = \\dfrac{9}{16}$, $MN = \\dfrac{3}{4}$.<br><br><strong>პასუხი:</strong> $\\dfrac{3}{4}$.",
    area: "solid",
    topics: ["sphere"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 7
  {
    question: "<strong>(4 ქულა)</strong> ამოხსენით განტოლება $\\log_2 \\dfrac{x}{\\sqrt{4x - 3}} = \\sqrt{4x - 3} - x$.",
    options: [],
    tags: [],
    solution: "განსაზღვრის არე: $x > \\dfrac{3}{4}$. $\\log_2 x - \\log_2\\sqrt{4x - 3} = \\sqrt{4x - 3} - x$, ანუ $\\log_2 x + x = \\log_2\\sqrt{4x - 3} + \\sqrt{4x - 3}$.<br><br>$g(t) = \\log_2 t + t$ მკაცრად ზრდადია, ამიტომ $x = \\sqrt{4x - 3}$: $x^2 - 4x + 3 = 0$, $x = 1$ ან $x = 3$ — ორივე დასაშვებია.<br><br><strong>პასუხი:</strong> $x \\in \\{1;\\ 3\\}$.",
    area: "algebra",
    topics: ["log-eq"],
    grade: 11,
    difficulty: 3,
    type: ["solve"],
    method: ["estimation"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];
