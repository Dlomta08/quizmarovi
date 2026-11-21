quizData = [
  // 1
  {
    question: "$\\lim\\limits_{x \\to 0} \\frac{\\sqrt{1 + 2x} - 1}{5x} = $",
    options: ["$0{,}75$", "$0{,}4$", "$0{,}13$", "$0{,}25$", "$0{,}2$", "$0{,}1$"],
    correct: 4,
    solution: "გავამრავლოთ შეუღლებულზე: $\\dfrac{(1 + 2x) - 1}{5x(\\sqrt{1 + 2x} + 1)} = \\dfrac{2}{5(\\sqrt{1 + 2x} + 1)} \\to \\dfrac{2}{10} = 0{,}2$.<br><br><strong>პასუხი:</strong> ე) $0{,}2$.",
    tags: [],
    area: "calculus",
    topics: ["func-limit"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 2
  {
    question: "თუ $A(3; 5)$, $B(−1; 8)$, $C(7; 5)$, იპოვეთ $ABC$ სამკუთხედის $C$ წვეროდან გავლებული სიმაღლის სიგრძე.",
    options: ["$1{,}8$", "$2$", "$2{,}2$", "$2{,}4$", "$\\sqrt{10}$", "$2\\sqrt{3}$"],
    correct: 3,
    solution: "$\\vec{AB} = (-4; 3)$, $|AB| = 5$; $\\vec{AC} = (4; 0)$. ფართობის ორმაგი: $|(-4) \\cdot 0 - 3 \\cdot 4| = 12$.<br><br>$h_C = \\dfrac{12}{5} = 2{,}4$.<br><br><strong>პასუხი:</strong> დ) $2{,}4$.",
    tags: [],
    area: "geometry",
    topics: ["cevians"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: ["coordinates"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 3
  {
    question: "თუ $f(x) = \\frac{18}{\\sqrt[3]{x}}$, რისი ტოლია $f'(x)$?",
    options: [
      "$-\\frac{6}{x \\sqrt[3]{x}}$",
      "$\\frac{6}{x \\sqrt[3]{x}}$",
      "$\\frac{18}{x \\sqrt[3]{x}}$",
      "$-\\frac{18}{x \\sqrt[3]{x}}$",
      "$\\frac{6}{\\sqrt[3]{x}}$",
      "$-\\frac{18}{\\sqrt[3]{x}}$"
    ],
    correct: 0,
    solution: "$f(x) = 18x^{-1/3}$, $f'(x) = 18 \\cdot \\left(-\\dfrac{1}{3}\\right)x^{-4/3} = -\\dfrac{6}{x\\sqrt[3]{x}}$.<br><br><strong>პასუხი:</strong> ა) $-\\frac{6}{x \\sqrt[3]{x}}$.",
    tags: [],
    area: "calculus",
    topics: ["derivative","nth-roots"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 4
  {
    question: "$O$ ცენტრის მქონე სფეროს რადიუსია $6$. ეს სფერო ეხება სამკუთხედის სამივე გვერდს. ამ სამკუთხედის გვერდების სიგრძეებია $15$, $15$ და $24$. იპოვეთ მანძილი $O$ წერტილიდან სამკუთხედის სიბრტყემდე.",
    options: ["$2\\sqrt{3}$", "$4$", "$3\\sqrt{2}$", "$2\\sqrt{5}$", "$5$", "$6$"],
    correct: 3,
    solution: "სფერო ეხება გვერდებს, ამიტომ $O$-ს გეგმილი სამკუთხედის ჩახაზული წრეწირის ცენტრია. სიმაღლე ფუძეზე $\\sqrt{225 - 144} = 9$, $S = 108$, $p = 27$, $r = 4$.<br><br>$d = \\sqrt{6^2 - 4^2} = 2\\sqrt{5}$.<br><br><strong>პასუხი:</strong> დ) $2\\sqrt{5}$.",
    tags: [],
    area: "solid",
    topics: ["sphere"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 5
  {
    question: "წაკვეთილი კონუსის ფუძეების რადიუსების შეფარდებაა $2:3$. ამ წაკვეთილ კონუსში ჩაიხაზება სფერო (სფერო ეხება წაკვეთილი კონუსის ორივე ფუძესა და გვერდით ზედაპირს). იპოვეთ სფეროს ზედაპირის ფართობის შეფარდება ამ წაკვეთილი კონუსის გვერდითი ზედაპირის ფართობთან.",
    options: ["$0{,}64$", "$0{,}3$", "$2{,}4$", "$\\sqrt{0{,}5}$", "$0{,}96$", "$\\sqrt{2}$"],
    correct: 4,
    solution: "რადიუსები $3k$ და $2k$. ჩახაზული სფეროსთვის მსახველი $l = 3k + 2k = 5k$, ხოლო $r^2 = 3k \\cdot 2k = 6k^2$.<br><br>$S_{სფ} = 4\\pi r^2 = 24\\pi k^2$, $S_{გვ} = \\pi(3k + 2k) \\cdot 5k = 25\\pi k^2$.<br><br>შეფარდება $\\dfrac{24}{25} = 0{,}96$.<br><br><strong>პასუხი:</strong> ე) $0{,}96$.",
    tags: [],
    area: "solid",
    topics: ["cone","sphere","volume-surface"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
    // 6
  {
    question: "$f(x) = \\frac{\\arccos x}{x^2 − 1}$, იპოვეთ $f'(0)$",
    options: ["$-1$", "$0$", "$1$", "$2$", "$\\frac{\\pi}{3}$", "$\\frac{\\pi}{2}$"],
    correct: 2,
    solution: "$f'(x) = \\dfrac{-\\frac{1}{\\sqrt{1 - x^2}}(x^2 - 1) - 2x\\arccos x}{(x^2 - 1)^2}$.<br><br>$f'(0) = \\dfrac{-1 \\cdot (-1) - 0}{1} = 1$.<br><br><strong>პასუხი:</strong> გ) $1$.",
    tags: [],
    area: "algebra",
    topics: ["inverse-trig","derivative"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 7
  {
    question: "თუ $f(x) = e^x \\cos x$, რისი ტოლია $f'(x)$?",
    options: [
      "$e^x(\\cos x − \\sin x)$",
      "$e^x(\\cos x + \\sin x)$",
      "$e^x(2\\cos x + \\sin x)$",
      "$e^x(\\sin x − \\cos x)$",
      "$e^x$",
      "$e^x \\sin x$"
    ],
    correct: 0,
    solution: "$f'(x) = e^x\\cos x - e^x\\sin x = e^x(\\cos x - \\sin x)$.<br><br><strong>პასუხი:</strong> ა) $e^x(\\cos x − \\sin x)$.",
    tags: [],
    area: "calculus",
    topics: ["derivative"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 8
  {
    warning: "ორი პასუხია ჩათვლილი",
    question: "წესიერი სამკუთხა პრიზმის გვერდითი ზედაპირის ფართობია $S$. იპოვეთ ამ პრიზმაზე შემოხაზული ცილინდრის ღერძული კვეთის ფართობი.",
    options: [
      "$\\frac{4}{3}S$",
      "$\\sqrt{2}S$",
      "$\\frac{2\\sqrt{2}}{9}S$",
      "$\\frac{2}{3\\sqrt{3}}S$",
      "$\\sqrt{3}S$",
      "$\\frac{2\\sqrt{3}}{9}S$"
    ],
    correct: [3,5],
    solution: "ფუძის გვერდი $a$, სიმაღლე $h$: $S = 3ah$. შემოხაზული ცილინდრის რადიუსი $R = \\dfrac{a}{\\sqrt{3}}$, ღერძული კვეთა $2Rh = \\dfrac{2ah}{\\sqrt{3}} = \\dfrac{2S}{3\\sqrt{3}}$ ($= \\dfrac{2\\sqrt{3}}{9}S$, ამიტომ ორივე ჩანაწერი სწორია).<br><br><strong>პასუხი:</strong> დ) $\\frac{2}{3\\sqrt{3}}S$.",
    tags: [],
    area: "solid",
    topics: ["prism","cylinder","cross-sections"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 9
  {
    question: "კონუსში მოიძებნება სამი, წყვილ-წყვილად ურთიერთმართობული მსახველი. რისი ტოლია კონუსის ფუძის ფართობის შეფარდება გვერდითი ზედაპირის ფართობასთან?",
    options: [
      "$0{,}5$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$\\frac{\\sqrt{6}}{3}$",
      "$\\frac{1}{6}$",
      "$\\frac{1}{\\sqrt{3}}$",
      "შეუძლებელია დადგენა"
    ],
    correct: 2,
    solution: "სამი ურთიერთმართობული მსახველის ($l$) ბოლოები ქმნის ტოლგვერდა სამკუთხედს გვერდით $l\\sqrt{2}$, ამიტომ ფუძის რადიუსი $r = \\dfrac{l\\sqrt{2}}{\\sqrt{3}}$.<br><br>$\\dfrac{\\pi r^2}{\\pi rl} = \\dfrac{r}{l} = \\sqrt{\\dfrac{2}{3}} = \\dfrac{\\sqrt{6}}{3}$.<br><br><strong>პასუხი:</strong> გ) $\\frac{\\sqrt{6}}{3}$.",
    tags: [],
    area: "solid",
    topics: ["cone","volume-surface"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 10
  {
    question: "$\\lim\\limits_{x \\to 0} \\frac{\\sqrt{\\cos x} − 1}{x} = $",
    options: ["$-1$", "$-0{,}5$", "$0{,}5$", "$0$", "$1$", "$1{,}5$"],
    correct: 3,
    solution: "$\\sqrt{\\cos x} - 1 = \\dfrac{\\cos x - 1}{\\sqrt{\\cos x} + 1} \\approx \\dfrac{-x^2/2}{2}$, ამიტომ წილადი $\\approx -\\dfrac{x}{4} \\to 0$.<br><br><strong>პასუხი:</strong> დ) $0$.",
    tags: [],
    area: "calculus",
    topics: ["func-limit"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 11
  {
    question: "იპოვეთ $\\lim\\limits_{x \\to 0} \\left( \\frac{1}{x^2} − \\frac{\\cot x}{x} \\right)$",
    options: ["$\\frac{1}{3}$", "$\\frac{3}{4}$", "$\\frac{2}{5}$", "$\\frac{3}{5}$", "$\\frac{2}{7}$", "$1$"],
    correct: 0,
    solution: "$\\dfrac{1}{x^2} - \\dfrac{\\cot x}{x} = \\dfrac{\\sin x - x\\cos x}{x^2\\sin x}$. ტეილორით: $\\sin x - x\\cos x = \\left(x - \\dfrac{x^3}{6}\\right) - \\left(x - \\dfrac{x^3}{2}\\right) + \\ldots = \\dfrac{x^3}{3} + \\ldots$, ხოლო $x^2\\sin x \\approx x^3$.<br><br>ზღვარი: $\\dfrac{1}{3}$.<br><br><strong>პასუხი:</strong> ა) $\\frac{1}{3}$.",
    tags: [],
    area: "calculus",
    topics: ["func-limit"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 12
  {
    question: "$y = f(x)$ ფუნქციის განსაზღვრის არეა $\\mathbb{R}$ და იგი უწყვეტია ნებისმიერ წერტილში. ნებისმიერი ნატურალური $n$-ისთვის სრულდება: $f\\left(\\frac{1}{n}\\right) = \\frac{5n^2 + 1}{2n^2 − 2n + 1}$. რისი ტოლია $f(0)$?",
    options: ["$0$", "$0{,}5$", "$1$", "$2$", "$2{,}5$", "$5$"],
    correct: 4,
    solution: "$f$ უწყვეტია, ამიტომ $f(0) = \\lim\\limits_{n \\to \\infty} f\\left(\\dfrac{1}{n}\\right) = \\lim\\limits_{n \\to \\infty}\\dfrac{5n^2 + 1}{2n^2 - 2n + 1} = \\dfrac{5}{2}$.<br><br><strong>პასუხი:</strong> ე) $2{,}5$.",
    tags: [],
    area: "calculus",
    topics: ["continuity","function-basics"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 13
  {
    question: "$\\lim\\limits_{n \\to \\infty} \\left(\\frac{n+5}{n+4}\\right)^{2n−1} = $",
    options: ["$e$", "$e^2$", "$e^3$", "$e^4$", "$0$", "$1$"],
    correct: 1,
    solution: "$\\left(1 + \\dfrac{1}{n + 4}\\right)^{2n - 1} = \\left[\\left(1 + \\dfrac{1}{n + 4}\\right)^{n + 4}\\right]^{\\frac{2n - 1}{n + 4}} \\to e^2$.<br><br><strong>პასუხი:</strong> ბ) $e^2$.",
    tags: [],
    area: "calculus",
    topics: ["seq-limit"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 14
  {
    question: "$y = f(x)$ ფუნქციის განსაზღვრის არეა $\\mathbb{R}$ და ეს ფუნქცია დიფერენცირებადია (წარმოებადია) განსაზღვრის არის ნებისმიერ წერტილში. ცნობილია, რომ ნებისმიერი $x$-თვის $f^3(x) + x^2f(x) + 1 = x$. იპოვეთ $f'(1)$",
    options: ["$0$", "$-1{,}4$", "$1$", "$-2$", "$-1$", "$2{,}3$"],
    correct: 2,
    solution: "$x = 1$: $f^3(1) + f(1) + 1 = 1$, $f(1)(f^2(1) + 1) = 0$, $f(1) = 0$.<br><br>გავაწარმოოთ: $3f^2f' + 2xf + x^2f' = 1$. $x = 1$-ზე: $0 + 0 + f'(1) = 1$.<br><br><strong>პასუხი:</strong> გ) $1$.",
    tags: [],
    area: "calculus",
    topics: ["derivative","function-basics"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 15
  {
    question: "$\\lim\\limits_{n \\to \\infty} \\left(n − \\sqrt{n^2 + n + 199}\\right) = $",
    options: ["$-0{,}5$", "$0$", "$-99{,}5$", "$1$", "$99{,}5$", "$199$"],
    correct: 0,
    solution: "$n - \\sqrt{n^2 + n + 199} = \\dfrac{-(n + 199)}{n + \\sqrt{n^2 + n + 199}} \\to -\\dfrac{1}{2}$.<br><br><strong>პასუხი:</strong> ა) $-0{,}5$.",
    tags: [],
    area: "calculus",
    topics: ["seq-limit"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 16
  {
    question: "ტოლფერდა ტრაპეცია, რომლის ფუძეებია $4$ და $6$, ხოლო მახვილი კუთხეა $60^{\\circ}$, ბრუნავს დიდი ფუძის შემცველი წრფის გარშემო. იპოვეთ მიღებული სხეულის მოცულობა.",
    options: ["$16\\pi$", "$10\\pi$", "$12\\pi$", "$18\\pi$", "$20\\pi$", "$14\\pi$"],
    correct: 5,
    solution: "ფერდის გეგმილი დიდ ფუძეზე $\\dfrac{6 - 4}{2} = 1$, სიმაღლე $\\sqrt{3}$. ბრუნვით მიიღება ცილინდრი (რადიუსი $\\sqrt{3}$, სიმაღლე $4$) და ორი კონუსი (რადიუსი $\\sqrt{3}$, სიმაღლე $1$).<br><br>$V = \\pi \\cdot 3 \\cdot 4 + 2 \\cdot \\dfrac{1}{3}\\pi \\cdot 3 \\cdot 1 = 12\\pi + 2\\pi = 14\\pi$.<br><br><strong>პასუხი:</strong> ვ) $14\\pi$.",
    tags: [],
    area: "geometry",
    topics: ["trapezoid","isosceles","volume-surface"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 17
  {
    question: "თუ $\\lim\\limits_{x \\to \\sqrt{3}} \\frac{3\\arctan x − \\pi}{x − \\sqrt{3}} = \\frac{m}{n}$, სადაც $m$ და $n$ ურთიერთმარტივი ნატურალური რიცხვებია, მაშინ $m + n$",
    options: ["$3$", "$9$", "$100$", "$39$", "$199$", "$7$"],
    correct: 5,
    solution: "$3\\arctan\\sqrt{3} = \\pi$, ამიტომ ზღვარი $3\\arctan x$-ის წარმოებულია $\\sqrt{3}$-ში: $\\dfrac{3}{1 + 3} = \\dfrac{3}{4}$.<br><br>$m + n = 7$.<br><br><strong>პასუხი:</strong> ვ) $7$.",
    tags: [],
    area: "algebra",
    topics: ["inverse-trig","func-limit"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 18
  {
    question: "მოცემულია სამი წინადადება: I. $\\lim\\limits_{n \\to \\infty} \\frac{n^{199199}}{1{,}0001^n} = 0$. II. თუ $x_n = \\sin(a_n)$ მიმდევრობა კრებადია, მაშინ აუცილებლად $a_n$ მიმდევრობაც კრებადია. III. თუ $a_n$ მიმდევრობა კრებადია, მაშინ აუცილებლად $x_n = \\sin(a_n)$ მიმდევრობაც კრებადია. ამ სამი წინადადებიდან, რომელია ჭეშმარიტი?",
    options: [
      "მხოლოდ I",
      "მხოლოდ II",
      "მხოლოდ III",
      "მხოლოდ I და II",
      "მხოლოდ I და III",
      "მხოლოდ II და III"
    ],
    correct: 4,
    solution: "I. ჭეშმარიტია — ექსპონენტა ($1{,}0001^n$) ნებისმიერ ხარისხოვან ფუნქციაზე სწრაფად იზრდება.<br>II. მცდარია: $a_n = 2\\pi n$ განშლადია, ხოლო $\\sin a_n = 0$ კრებადია.<br>III. ჭეშმარიტია — $\\sin$ უწყვეტია.<br><br><strong>პასუხი:</strong> ე) მხოლოდ I და III.",
    tags: [],
    area: "calculus",
    topics: ["seq-limit","trig-eq"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 19
  {
    question: "ცილინდრის ორი კვეთა, რომელიც ერთი და იგივე მსახველზე გადის, ერთმანეთთან ადგენს მართ კუთხეს. ცილინდრის ღერძიდან ამ სიბრტყეებამდე მანძილებია $2{,}5$ და $6$. იპოვეთ ცილინდრის გვერდითი ზედაპირის ფართობი, თუ მისი სიმაღლე $4$-ის ტოლია.",
    options: ["$18\\pi$", "$52\\pi$", "$48\\pi$", "$\\frac{144}{3}\\pi$", "$64\\pi$", "$100\\pi$"],
    correct: 1,
    solution: "ფუძეზე: მსახველის წერტილი $P$, ქორდები $PA \\perp PB$, $AB$ დიამეტრია. ცენტრიდან ქორდებამდე მანძილები $\\dfrac{PB}{2} = 2{,}5$, $\\dfrac{PA}{2} = 6$: $PB = 5$, $PA = 12$, $2R = 13$.<br><br>$S_{გვ} = 2\\pi Rh = 13\\pi \\cdot 4 = 52\\pi$.<br><br><strong>პასუხი:</strong> ბ) $52\\pi$.",
    tags: [],
    area: "solid",
    topics: ["cylinder","cross-sections","volume-surface"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 20
  {
    question: "ტოლფერდა სამკუთხედის კუთხეა $120^{\\circ}$. ეს სამკუთხედი ბრუნავს ფერდის შემცველი წრფის გარშემო. იპოვეთ მიღებული სხეულის ზედაპირის ფართობის შეფარდება სამკუთხედის ფართობთან.",
    options: [
      "$(2\\sqrt{5} − 3)\\pi$",
      "$(2\\sqrt{3} + 2)\\pi$",
      "$\\sqrt{5}\\pi$",
      "$(8\\sqrt{3} + 6)\\pi$",
      "$\\sqrt{3}\\pi$",
      "$(\\sqrt{3} + 1)\\pi$"
    ],
    correct: 1,
    solution: "$AB = AC = a$, $\\angle A = 120^{\\circ}$, $BC = a\\sqrt{3}$; ვაბრუნებთ $AB$ წრფის გარშემო. $C$-დან $AB$-მდე მანძილი $r = a\\sin 60^{\\circ} = \\dfrac{a\\sqrt{3}}{2}$.<br><br>სხეული: დიდი კონუსი (მსახველი $BC$) მოკლებული მცირე კონუსი (მსახველი $AC$); ზედაპირი $\\pi r(BC + AC) = \\pi \\cdot \\dfrac{a\\sqrt{3}}{2}(a\\sqrt{3} + a)$.<br><br>სამკუთხედის ფართობი $\\dfrac{a^2\\sqrt{3}}{4}$. შეფარდება: $2\\pi(\\sqrt{3} + 1) = (2\\sqrt{3} + 2)\\pi$.<br><br><strong>პასუხი:</strong> ბ) $(2\\sqrt{3} + 2)\\pi$.",
    tags: [],
    area: "geometry",
    topics: ["isosceles","volume-surface"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 21
  {
    question: "$f(x) = \\begin{cases} ax + b, & x < 1 \\\\ x^4 + x + 1, & x \\geq 1 \\end{cases}$ — ქვემოთჩამოთვლილთაგან, რისი ტოლი შეიძლება იყოს $ab$, თუ $y=f(x)$ დიფერენცირებადია (წარმოებადია) განსაზღვრის არის ნებისმიერ წერტილში?",
    options: ["$8$", "$-5$", "$-10$", "$-15$", "$10$", "ყველა წინა პასუხი შესაძლებელია"],
    correct: 2,
    solution: "უწყვეტობა $x = 1$-ში: $a + b = 3$. წარმოებულების ტოლობა: $a = 4 \\cdot 1^3 + 1 = 5$, $b = -2$.<br><br>$ab = -10$.<br><br><strong>პასუხი:</strong> გ) $-10$.",
    tags: [],
    area: "algebra",
    topics: ["linear-systems","linear-ineq"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 22
  {
    question: "ოთხკუთხა პირამიდის ფუძეშია რომბი, რომლის გვერდია $7$ სმ, ხოლო ამ რომბის სიმაღლეა $4$ სმ. ამ პირამიდის თითოეული აპოთემა ფუძის სიბრტყესთან ადგენს $\\alpha$ კუთხეს. $\\sin\\alpha = \\frac{3}{5}$. პირამიდაში ჩახაზული სფეროს (ეხება ხუთივე წახნაგს) ზედაპირის ფართობია $\\frac{a}{b}\\pi$ სმ², სადაც $a$ და $b$ ურთიერთმარტივი ნატურალური რიცხვებია. იპოვეთ $a^2 + b^2$.",
    options: ["$96$", "$112$", "$170$", "$284$", "$136$", "$337$"],
    correct: 5,
    solution: "აპოთემები ფუძესთან ტოლ კუთხეებს ქმნის, ამიტომ წვერო რომბის ცენტრში გეგმილდება; რომბის ჩახაზული წრეწირის რადიუსი $\\dfrac{4}{2} = 2$.<br><br>$\\cos\\alpha = \\dfrac{4}{5}$, $\\tan\\dfrac{\\alpha}{2} = \\dfrac{\\sin\\alpha}{1 + \\cos\\alpha} = \\dfrac{1}{3}$, სფეროს რადიუსი $\\rho = 2 \\cdot \\dfrac{1}{3} = \\dfrac{2}{3}$.<br><br>$S = 4\\pi\\rho^2 = \\dfrac{16}{9}\\pi$, $a^2 + b^2 = 256 + 81 = 337$.<br><br><strong>პასუხი:</strong> ვ) $337$.",
    tags: [],
    area: "solid",
    topics: ["pyramid","sphere","rhombus-rect-sq"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 23
  {
    question: "$f(x) = \\sqrt[3]{x}\\sin\\left(\\frac{1}{x}\\right)$, როცა $x \\ne 0$; $g(x) = x\\sin\\left(\\frac{1}{x}\\right)$, როცა $x \\ne 0$; $h(x) = x^2\\sin\\left(\\frac{1}{x}\\right)$, როცა $x \\ne 0$. $f(0) = g(0) = h(0) = 0$. ამ სამი ფუნქციიდან რომელია დიფერენცირებადი (წარმოებადი) $x = 0$ წერტილში?",
    options: [
      "მხოლოდ $f(x)$",
      "მხოლოდ $g(x)$",
      "მხოლოდ $h(x)$",
      "მხოლოდ $f(x)$ და $g(x)$",
      "მხოლოდ $f(x)$ და $h(x)$",
      "სამივე"
    ],
    correct: 2,
    solution: "წარმოებული $0$-ში: $\\lim\\limits_{x \\to 0}\\dfrac{F(x)}{x}$.<br>• $h$: $x\\sin\\dfrac{1}{x} \\to 0$ — დიფერენცირებადია;<br>• $g$: $\\sin\\dfrac{1}{x}$ — ზღვარი არ არსებობს;<br>• $f$: $x^{-2/3}\\sin\\dfrac{1}{x}$ — შემოუსაზღვრელია.<br><br><strong>პასუხი:</strong> გ) მხოლოდ $h(x)$.",
    tags: [],
    area: "algebra",
    topics: ["trig-eq","nth-roots"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 24
  {
    question: "$a_n$ მიმდევრობა მოცემულია რეკურენტულად: $a_1 = 1$, $a_2 = \\sqrt[7]{2}$ და $a_n = a_{n−1} \\cdot a_{n−2}^2$, ნებისმიერი $n \\geq 3$ ნატურალური $n$-ისთვის. იპოვეთ უმცირესი ნატურალური $k > 1$ რიცხვი, რომლისთვისაც $a_1a_2 \\cdots a_k$ ნამრავლი იქნება მთელი რიცხვი.",
    options: ["$4$", "$6$", "$8$", "$10$", "$12$", "$14$"],
    correct: 1,
    solution: "$a_n = 2^{e_n/7}$: $e_1 = 0$, $e_2 = 1$, $e_n = e_{n-1} + 2e_{n-2}$ — $e_3 = 1$, $e_4 = 3$, $e_5 = 5$, $e_6 = 11$.<br><br>ნამრავლის მაჩვენებლის მრიცხველი: $S_k = e_1 + \\ldots + e_k$: $1, 2, 5, 10, 21$ ($k = 2, \\ldots, 6$). პირველად $7$-ის ჯერადია $S_6 = 21$ (ნამრავლი $2^3 = 8$).<br><br><strong>პასუხი:</strong> ბ) $6$.",
    tags: [],
    area: "prob-stats",
    topics: ["combinatorics","nth-roots","linear-ineq"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 25
  {
    question: "$a$ წრფის განტოლებაა $x − y = 0$, $b$ წრფის განტოლებაა $3x + 5y − 16 = 0$. $c$ წრფე არის $b$ წრფის სიმეტრიული $a$ წრფის მიმართ. ქვემოთჩამოთვლილთაგან, რომელია $c$ წრფის განტოლება?",
    options: [
      "$2x + 5y − 14 = 0$",
      "$5x + 3y − 16 = 0$",
      "$5x + 2y − 14 = 0$",
      "$3x + 5y − 16 = 0$",
      "$x + 2y − 6 = 0$",
      "$2x + y − 6 = 0$"
    ],
    correct: 1,
    solution: "$y = x$ წრფის მიმართ სიმეტრია $x$-სა და $y$-ს უცვლის ადგილებს: $3y + 5x - 16 = 0$.<br><br><strong>პასუხი:</strong> ბ) $5x + 3y − 16 = 0$.",
    tags: [],
    area: "geometry",
    topics: ["line-circle-eq"],
    grade: 11,
    difficulty: 3,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];
