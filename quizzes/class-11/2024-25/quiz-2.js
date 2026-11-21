quizData = [
  // 1
  {
    question: "$3^\\sqrt{x} < 3^{x - 2}$ უტოლობის ამონახსნთა სიმრავლეა:",
    options: ["$(−\\infty; 1)$", "$(2; +\\infty)$", "$[0; 4)$", "$[3; +\\infty)$", "$(4; +\\infty)$", "$[0; 1) \\cup (4; +\\infty)$"],
    correct: 4,
    solution: "ფუძე $3 > 1$, ამიტომ $\\sqrt{x} < x - 2$ ($x \\ge 0$). $t = \\sqrt{x}$: $t^2 - t - 2 > 0$, $t > 2$.<br><br>$x > 4$.<br><br><strong>პასუხი:</strong> ე) $(4; +\\infty)$.",
    tags: [],
    area: "algebra",
    topics: ["exp-ineq"],
    grade: 11,
    difficulty: 1,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 2
  {
    question: "წესიერი ექვსკუთხა პირამიდის ფუძის გვერდის სიგრძეა $2$, ხოლო გვერდითი წიბოს სიგრძეა $3$. იპოვეთ პირამიდის მოცულობა.",
    options: ["$2\\sqrt{15}$", "$3\\sqrt{5}$", "$\\sqrt{30}$", "$\\frac{4\\sqrt{10}}{3}$", "$6\\sqrt{5}$", "$2\\sqrt{30}$"],
    correct: 0,
    solution: "წესიერ ექვსკუთხედში შემოხაზული წრეწირის რადიუსი გვერდის ტოლია: $R = 2$. სიმაღლე $h = \\sqrt{9 - 4} = \\sqrt{5}$.<br><br>ფუძის ფართობი: $6 \\cdot \\dfrac{\\sqrt{3}}{4} \\cdot 4 = 6\\sqrt{3}$. $V = \\dfrac{1}{3} \\cdot 6\\sqrt{3} \\cdot \\sqrt{5} = 2\\sqrt{15}$.<br><br><strong>პასუხი:</strong> ა) $2\\sqrt{15}$.",
    tags: [],
    area: "solid",
    topics: ["pyramid","volume-surface"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 3
  {
    question: "თუ $\\log_{3x}{4} = \\log_{2x}{8}$ განტოლების ამონახსნია $\\frac{a}{b}$, სადაც $a$ და $b$ ურთიერთმარტივი ნატურალური რიცხვებია. ქვემოთჩამოთვლილთაგან, რისი ტოლია $a + b$?",
    options: ["$5$", "$13$", "$17$", "$31$", "$35$", "$39$"],
    correct: 3,
    solution: "$\\dfrac{2\\ln 2}{\\ln 3x} = \\dfrac{3\\ln 2}{\\ln 2x}$, ანუ $2\\ln 2x = 3\\ln 3x$, $(2x)^2 = (3x)^3$, $x = \\dfrac{4}{27}$ (ფუძეები $\\dfrac{4}{9}$ და $\\dfrac{8}{27}$ დასაშვებია).<br><br>$a + b = 4 + 27 = 31$.<br><br><strong>პასუხი:</strong> დ) $31$.",
    tags: [],
    area: "algebra",
    topics: ["log-eq"],
    grade: 11,
    difficulty: 1,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 4
  {
    question: "$(\\sqrt{5} − 2)^{x−2} > (\\sqrt{5} + 2)^{1−2x}$ უტოლობის ამონახსნთა სიმრავლეა:",
    options: ["$(−\\infty; −1)$", "$(−1; +\\infty)$", "$(−\\infty; 1)$", "$(−1; 1)$", "$(1; +\\infty)$", "∅"],
    correct: 1,
    solution: "$\\sqrt{5} - 2 = \\dfrac{1}{\\sqrt{5} + 2}$, ამიტომ მარცხენა მხარე $(\\sqrt{5} + 2)^{2 - x}$-ია. ფუძე $> 1$: $2 - x > 1 - 2x$, $x > -1$.<br><br><strong>პასუხი:</strong> ბ) $(−1; +\\infty)$.",
    tags: [],
    area: "algebra",
    topics: ["exp-ineq"],
    grade: 11,
    difficulty: 1,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 5
  {
    question: "ოთხკუთხა პირამიდის ფუძეშია პარალელოგრამი. ამ პირამიდის თითოეული გვერდითი წიბოს სიგრძეა $8$, ფუძის ერთ-ერთი დიაგონალია $12$, ფუძის ერთ-ერთი გვერდია $8$. იპოვეთ პირამიდის მოცულობა.",
    options: [
      "$\\frac{112}{3}$",
      "$16\\sqrt{21}$",
      "$\\frac{64\\sqrt{35}}{3}$",
      "$\\frac{32\\sqrt{7}}{3}$",
      "$32\\sqrt{21}$",
      "$24\\sqrt{7}$"
    ],
    correct: 2,
    solution: "გვერდითი წიბოები ტოლია, ამიტომ წვერო გეგმილდება ფუძეზე შემოხაზული წრეწირის ცენტრში; წრეწირზე შემოხაზული პარალელოგრამი მართკუთხედია. $R = 6$, $h = \\sqrt{64 - 36} = 2\\sqrt{7}$.<br><br>გვერდები: $8$ და $\\sqrt{144 - 64} = 4\\sqrt{5}$, ფართობი $32\\sqrt{5}$.<br><br>$V = \\dfrac{1}{3} \\cdot 32\\sqrt{5} \\cdot 2\\sqrt{7} = \\dfrac{64\\sqrt{35}}{3}$.<br><br><strong>პასუხი:</strong> გ) $\\frac{64\\sqrt{35}}{3}$.",
    tags: [],
    area: "geometry",
    topics: ["parallelogram","pyramid","volume-surface"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
    // 6
  {
    question: "ცილინდრის ღერძის პარალელური კვეთის ფართობი $3$-ჯერ ნაკლებია ცილინდრის ღერძული კვეთის ფართობზე. რამდენი სანტიმეტრია მანძილი ცილინდრის ღერძიდან ამ კვეთამდე, თუ ცილინდრის სიმაღლის სიგრძეა $\\frac{1}{\\pi}$ სმ. ცილინდრის მოცულობაა $9$ სმ³?",
    options: ["$1$", "$3$", "$2$", "$2\\sqrt{2}$", "$\\pi$", "$2\\sqrt{3}$"],
    correct: 3,
    solution: "$V = \\pi R^2 \\cdot \\dfrac{1}{\\pi} = R^2 = 9$, $R = 3$. ღერძის პარალელური კვეთა მართკუთხედია $c \\times h$, ღერძული — $2R \\times h$: $c = \\dfrac{2R}{3} = 2$.<br><br>ღერძიდან ქორდამდე: $\\sqrt{R^2 - (c/2)^2} = \\sqrt{9 - 1} = 2\\sqrt{2}$ სმ.<br><br><strong>პასუხი:</strong> დ) $2\\sqrt{2}$.",
    tags: [],
    area: "solid",
    topics: ["cylinder","cross-sections","volume-surface"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 7
  {
    question: "იპოვეთ $f(x) = \\frac{12}{1 + \\lg(100 + x^2)} - 2$ ფუნქციის მნიშვნელობათა სიმრავლე.",
    options: ["$(−2; ∞)$", "$(−∞; 2]$", "$(−2; 2)$", "$[2; 3)$", "$(−2; 2]$", "$(−2; 6)$"],
    correct: 4,
    solution: "$100 + x^2 \\ge 100$, ამიტომ $1 + \\lg(100 + x^2) \\ge 3$ და $\\dfrac{12}{1 + \\lg(\\ldots)} \\in (0; 4]$.<br><br>$f(x) \\in (-2; 2]$.<br><br><strong>პასუხი:</strong> ე) $(−2; 2]$.",
    tags: [],
    area: "algebra",
    topics: ["function-basics","logarithms"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 8
  {
    question: "$\\lg(a^3b^7)$, $\\lg(a^5b^{12})$ და $\\lg(a^8b^{15})$ არამუდმივი არითმეტიკული პროგრესიის პირველი სამი წევრია. ამ პროგრესიის მე-$12$ წევრია $\\lg(b^n)$. რისი ტოლია $n$?",
    options: ["$40$", "$56$", "$76$", "$112$", "$143$", "$199$"],
    correct: 3,
    solution: "$A = \\lg a$, $B = \\lg b$: წევრებია $3A + 7B$, $5A + 12B$, $8A + 15B$. პროგრესიის პირობა: $2(5A + 12B) = 11A + 22B$, $A = 2B$.<br><br>წევრები $13B, 22B, 31B$, $d = 9B$. $a_{12} = 13B + 11 \\cdot 9B = 112B = \\lg b^{112}$.<br><br><strong>პასუხი:</strong> დ) $112$.",
    tags: [],
    area: "algebra",
    topics: ["arithmetic-prog"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 9
  {
    question: "ქვემოთჩამოთვლილთაგან, რომელ მეოთხედებში მდებარეობს ისეთი $(x; y)$ წერტილები, რომელთათვისაც $\\log_{0{,}199}(x^2 + y^2) < −1$",
    options: [
      "მხოლოდ I-ში",
      "მხოლოდ I-სა და II-ში",
      "მხოლოდ III-სა და IV-ში",
      "მხოლოდ I-სა და IV-ში",
      "მხოლოდ II-სა და III-ში",
      "ოთხივე მეოთხედში"
    ],
    correct: 5,
    solution: "ფუძე $0{,}199 < 1$, ამიტომ $x^2 + y^2 > 0{,}199^{-1} \\approx 5{,}03$ — წრის გარეთ მდებარე წერტილები, რომლებიც ოთხივე მეოთხედშია.<br><br><strong>პასუხი:</strong> ვ) ოთხივე მეოთხედში.",
    tags: [],
    area: "algebra",
    topics: ["log-ineq","line-circle-eq"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 10
  {
    question: "იპოვეთ საკოორდინატო სიბრტყეზე $|\\log_3(y − x)| + 1 > 0$, $|\\log_3(10 − x − y)| + 2 > 0$, $(\\log_{0{,}3} x)^2 ≥ 0$ უტოლობების ამონახსნებით მიღებული ფიგურის ფართობი.",
    options: ["$20$", "$25$", "$5$", "$36$", "$40$", "$32$"],
    correct: 1,
    solution: "მოდულებიანი უტოლობები ყოველთვის სრულდება, სადაც ლოგარითმი განსაზღვრულია, ამიტომ პირობები: $y > x$, $x + y < 10$, $x > 0$.<br><br>ეს სამკუთხედია წვეროებით $(0; 0)$, $(0; 10)$, $(5; 5)$: $S = \\dfrac{1}{2} \\cdot 10 \\cdot 5 = 25$.<br><br><strong>პასუხი:</strong> ბ) $25$.",
    tags: [],
    area: "algebra",
    topics: ["log-ineq","line-circle-eq"],
    grade: 11,
    difficulty: 2,
    type: ["solve"],
    method: ["absolute"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
    // 11
  {
    question: "წაკვეთილ კონუსში ჩახაზულია სფერო (სფერო ეხება კონუსის ორივე ფუძეს და კონუსის გვერდით ზედაპირს). წაკვეთილი კონუსის მოცულობა ორჯერ მეტია ბირთვის მოცულობაზე. იპოვეთ წაკვეთილი კონუსის ფუძეების რადიუსების შეფარდება (დიდის მცირესთან).",
    options: [
      "$1{,}5$",
      "$\\frac{1 + \\sqrt{5}}{2}$",
      "$\\sqrt{3}$",
      "$2$",
      "$\\frac{3 + \\sqrt{5}}{2}$",
      "შეუძლებელია დადგენა"
    ],
    correct: 4,
    solution: "სფეროს რადიუსი $r$, ფუძეების რადიუსები $R_1 > R_2$: $h = 2r$, მსახველი $R_1 + R_2$, ამიტომ $4r^2 = (R_1 + R_2)^2 - (R_1 - R_2)^2$, $r^2 = R_1R_2$.<br><br>$\\dfrac{\\pi \\cdot 2r}{3}(R_1^2 + R_1R_2 + R_2^2) = 2 \\cdot \\dfrac{4\\pi r^3}{3}$, საიდანაც $R_1^2 + R_2^2 = 3R_1R_2$.<br><br>$k = \\dfrac{R_1}{R_2}$: $k^2 - 3k + 1 = 0$, $k = \\dfrac{3 + \\sqrt{5}}{2}$.<br><br><strong>პასუხი:</strong> ე) $\\frac{3 + \\sqrt{5}}{2}$.",
    tags: [],
    area: "solid",
    topics: ["cone","sphere","volume-surface"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 12
  {
    question: "კონუსის წვეროდან ორ მსახველზე ფუძისადმი $45^{\\circ}$-იანი კუთხით გავლებულია სიბრტყე, რომელიც კვეთს ფუძის წრეწირის მეოთხედს. კონუსის სიმაღლეა $6$. იპოვეთ კონუსის მოცულობა.",
    options: ["$24\\pi$", "$120\\pi$", "$72\\pi$", "$144\\pi$", "$96\\pi$", "$48\\pi$"],
    correct: 3,
    solution: "ქორდა ჭრის $90^{\\circ}$-იან რკალს: ცენტრიდან მანძილი $d = \\dfrac{R}{\\sqrt{2}}$. სიბრტყე ფუძესთან $45^{\\circ}$-ია, ამიტომ $d = h = 6$, $R = 6\\sqrt{2}$.<br><br>$V = \\dfrac{1}{3}\\pi \\cdot 72 \\cdot 6 = 144\\pi$.<br><br><strong>პასუხი:</strong> დ) $144\\pi$.",
    tags: [],
    area: "solid",
    topics: ["cone","cross-sections","volume-surface"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 13
  {
    question: "ქვემოთჩამოთვლილთაგან, რისი ტოლი შეიძლება იყოს $k$, რომ $4^x - k \\cdot 2^x \\leq 0$ უტოლობის ამონახსნთა სიმრავლეში იყოს რიცხვი $1$?",
    options: ["$-2{,}2$", "$-1{,}8$", "$-0{,}3$", "$0{,}4$", "$1{,}8$", "$2{,}1$"],
    correct: 5,
    solution: "$x = 1$: $4 - 2k \\le 0$, $k \\ge 2$. ჩამოთვლილთაგან: $2{,}1$.<br><br><strong>პასუხი:</strong> ვ) $2{,}1$.",
    tags: [],
    area: "algebra",
    topics: ["exp-ineq"],
    grade: 11,
    difficulty: 2,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 14
  {
    question: "$A = (\\sqrt{17} − 4)^{5 − \\sqrt{23}}$, $B = (\\sqrt{17} − 4)^{5 − \\sqrt{21}}$, $C = (\\sqrt{11} − 3)^{4 − 3\\sqrt{2}}$ რიცხვები დაალაგეთ ზრდის მიხედვით (პატარადან დიდისკენ).",
    options: [
      "$A, B, C$",
      "$A, C, B$",
      "$B, A, C$",
      "$B, C, A$",
      "$C, A, B$",
      "$C, B, A$"
    ],
    correct: 2,
    solution: "$\\sqrt{17} - 4 \\in (0; 1)$ — ფუნქცია კლებადია. $5 - \\sqrt{23} \\approx 0{,}20 < 5 - \\sqrt{21} \\approx 0{,}42$, ამიტომ $B < A < 1$.<br><br>$\\sqrt{11} - 3 \\in (0; 1)$, ხოლო $4 - 3\\sqrt{2} < 0$, ამიტომ $C > 1$.<br><br>ზრდით: $B, A, C$.<br><br><strong>პასუხი:</strong> გ) $B, A, C$.",
    tags: [],
    area: "algebra",
    topics: ["numeric-ineq"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 15
  {
    question: "$f(x) = \\log_{0{,}5}\\left(\\log_4\\left(\\log_{\\frac{1}{4}}(\\log_{16} x)\\right)\\right)$ ფუნქციის განსაზღვრის არეა ინტერვალი, რომლის სიგრძეა:",
    options: ["$1$", "$1{,}25$", "$1{,}5$", "$2$", "$2{,}5$", "$3$"],
    correct: 0,
    solution: "გარე ლოგარითმისთვის $\\log_4\\left(\\log_{1/4}(\\log_{16}x)\\right) > 0$, ანუ $\\log_{1/4}(\\log_{16}x) > 1$, ანუ $0 < \\log_{16}x < \\dfrac{1}{4}$.<br><br>$1 < x < 2$ — სიგრძე $1$.<br><br><strong>პასუხი:</strong> ა) $1$.",
    tags: [],
    area: "algebra",
    topics: ["function-basics","logarithms"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
    // 16
  {
    question: "წესიერ ოთხკუთხა პირამიდაზე შემოხაზულ და მასში ჩახაზულ სფეროებს საერთო ცენტრი აქვთ. ქვემოთჩამოთვლილთაგან, რისი ტოლი შეიძლება იყოს ამ სფეროების რადიუსების შეფარდება?",
    options: ["$\\sqrt{2}$", "$2$", "$3$", "$4$", "$\\sqrt{2} - 1$", "$\\sqrt{3} - 1$"],
    correct: 4,
    solution: "ფუძის ნახევარგვერდი $1$, სიმაღლე $h$, $s = \\sqrt{1 + h^2}$. ჩახაზული სფეროს ცენტრი ფუძიდან $r = \\dfrac{h}{1 + s}$ სიმაღლეზეა, შემოხაზულისა — $\\dfrac{h^2 - 2}{2h}$ სიმაღლეზე.<br><br>ცენტრები ემთხვევა: $2(s^2 - 1) = (s^2 - 3)(1 + s)$, $s^2 - 2s - 1 = 0$, $s = 1 + \\sqrt{2}$.<br><br>$R = h - r$, $\\dfrac{r}{R} = \\dfrac{1}{1 + s - 1} = \\dfrac{1}{1 + \\sqrt{2}} = \\sqrt{2} - 1$ (ჩახაზულისა და შემოხაზულის შეფარდება).<br><br><strong>პასუხი:</strong> ე) $\\sqrt{2} - 1$.",
    tags: [],
    area: "solid",
    topics: ["pyramid","sphere"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 17
  {
    question: "ცნობილია, რომ $\\lg(x + y) = z$, $\\lg(x^2 + y^2) = z + 1$. ნებისმიერი ასეთი $x, y, z$ რიცხვებისთვის არსებობს $a$ და $b$, რომ ჭეშმარიტია ტოლობა: $x^3 + y^3 = a \\cdot 10^{3z} + b \\cdot 10^{2z}$. რისი ტოლია $a + b$?",
    options: ["$7{,}5$", "$14{,}5$", "$15$", "$19{,}5$", "$24$", "$26{,}5$"],
    correct: 1,
    solution: "$S = x + y = 10^z$, $x^2 + y^2 = 10S$, $xy = \\dfrac{S^2 - 10S}{2}$.<br><br>$x^3 + y^3 = S(x^2 + y^2 - xy) = S \\cdot \\dfrac{30S - S^2}{2} = -\\dfrac{1}{2} \\cdot 10^{3z} + 15 \\cdot 10^{2z}$.<br><br>$a + b = -0{,}5 + 15 = 14{,}5$.<br><br><strong>პასუხი:</strong> ბ) $14{,}5$.",
    tags: [],
    area: "geometry",
    topics: ["line-circle-eq","logarithms"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 18
  {
    question: "რამდენი მთელი ამონახსნი აქვს $\\lg(x - 40) + \\lg(60 - x) < 2$ უტოლობას?",
    options: ["$10$", "$11$", "$18$", "$20$", "$21$", "უამრავი"],
    correct: 2,
    solution: "არე: $40 < x < 60$. $(x - 40)(60 - x) < 100 \\Leftrightarrow x^2 - 100x + 2500 > 0 \\Leftrightarrow (x - 50)^2 > 0$.<br><br>მთელი $41, \\ldots, 59$ ($19$ რიცხვი), გარდა $50$-ისა: $18$.<br><br><strong>პასუხი:</strong> გ) $18$.",
    tags: [],
    area: "algebra",
    topics: ["log-ineq"],
    grade: 11,
    difficulty: 3,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 19
  {
    question: "იპოვეთ $a$-ს მნიშვნელობათა სიმრავლე, რომელთათვისაც $(\\log_7 x)^2 + |\\log_7 x| = a$ განტოლებას აქვს ოთხი განსხვავებული ამონახსენი.",
    options: [
      "$(−\\infty; 0)$",
      "$\\left(−\\frac{1}{4}; +\\infty\\right)$",
      "$\\left[−\\frac{1}{4}; +\\infty\\right)$",
      "$[0; +\\infty)$",
      "$(0; +\\infty)$",
      "∅"
    ],
    correct: 5,
    solution: "$t = |\\log_7 x| \\ge 0$: $t^2 + t = a$. $t \\ge 0$-ზე $t^2 + t$ ზრდადია, ამიტომ $t$-ს მაქსიმუმ ერთი მნიშვნელობა აქვს და $x$ — მაქსიმუმ ორი.<br><br>ოთხი ამონახსნი შეუძლებელია.<br><br><strong>პასუხი:</strong> ვ) ∅.",
    tags: [],
    area: "algebra",
    topics: ["log-eq","abs-eq","function-basics"],
    grade: 11,
    difficulty: 3,
    type: ["solve"],
    method: ["absolute"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 20
  {
    question: "მართკუთხა პარალელეპიპედზე შემოხაზულია სფერო (ყველა წვერო ამ სფეროზეა). პარალელეპიპედის თორმეტივე წიბოს სიგრძეების ჯამია $112$ სმ. პარალელეპიპედის სრული ზედაპირის ფართობია $384\\ \\text{სმ}^2$. რამდენი სანტიმეტრია სფეროს რადიუსი?",
    options: ["$8$", "$10$", "$12$", "$14$", "$16$", "$18$"],
    correct: 1,
    solution: "$4(a + b + c) = 112$, $a + b + c = 28$; $2(ab + bc + ca) = 384$.<br><br>$a^2 + b^2 + c^2 = 784 - 384 = 400$, დიაგონალი $20$, $R = 10$ სმ.<br><br><strong>პასუხი:</strong> ბ) $10$.",
    tags: [],
    area: "solid",
    topics: ["prism","sphere","volume-surface"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
    // 21
  {
    question: "მოცემულია: $a \\geq 2$, $b \\geq 1$, $c \\geq 0$ მთელი რიცხვებია და $\\log_a b = c$, ხოლო $a + b + c = 2025$. ქვემოთჩამოთვლილთაგან, რისი ტოლი შეიძლება იყოს $2a + b + c$?",
    options: ["$3037$", "$2026$", "$4048$", "$4050$", "$2700$", "$2701$"],
    correct: 0,
    solution: "$b = a^c$, $a + a^c + c = 2025$, ხოლო $2a + b + c = 2025 + a$.<br><br>$3037$-ისთვის $a = 1012$: $c = 1$, $b = 1012$, $1012 + 1012 + 1 = 2025$ ✓. დანარჩენი ვარიანტები ($a = 1$, $2023$, $2025$, $675$, $676$) ამ ტოლობას ვერ აკმაყოფილებს.<br><br><strong>პასუხი:</strong> ა) $3037$.",
    tags: [],
    area: "algebra",
    topics: ["log-ineq"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 22
  {
    question: "სამკუთხა პირამიდის ყველა გვერდითი წიბო $3$-ის ტოლია. ამ წიბოებს შორის კუთხეებია $90^{\\circ}$, $90^{\\circ}$ და $60^{\\circ}$ შესაბამისად. იპოვეთ პირამიდის მოცულობა.",
    options: ["$3\\sqrt{3}$", "$2{,}25\\sqrt{3}$", "$1{,}5\\sqrt{3}$", "$4{,}5$", "$4\\sqrt{3}$", "$3\\sqrt{6}$"],
    correct: 1,
    solution: "ვთქვათ, $DA \\perp DB$, $DA \\perp DC$, $\\angle BDC = 60^{\\circ}$. მაშინ $DA \\perp (DBC)$ და $DA$ სიმაღლეა.<br><br>$V = \\dfrac{1}{3} \\cdot \\dfrac{1}{2} \\cdot 3 \\cdot 3 \\cdot \\sin 60^{\\circ} \\cdot 3 = \\dfrac{9\\sqrt{3}}{4} = 2{,}25\\sqrt{3}$.<br><br><strong>პასუხი:</strong> ბ) $2{,}25\\sqrt{3}$.",
    tags: [],
    area: "solid",
    topics: ["pyramid","volume-surface"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 23
  {
    question: "განსხვავებულ მთელ $x, y, z, t$ რიცხვთა რამდენი ოთხეული არსებობს, რომელთათვისაც $x\\lg 2 + y\\lg 3 + z\\lg 5 + t\\lg 7 = 2024$?",
    options: ["არცერთი", "$2$", "$3$", "$4$", "$5$", "უამრავი"],
    correct: 0,
    solution: "$2^x 3^y 5^z 7^t = 10^{2024} = 2^{2024}5^{2024}$, ამიტომ ერთადერთი ამონახსნია $x = z = 2024$, $y = t = 0$ — რიცხვები განსხვავებული არ არის.<br><br><strong>პასუხი:</strong> ა) არცერთი.",
    tags: [],
    area: "algebra",
    topics: ["logarithms"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 24
  {
    question: "მოცემული უტოლობებიდან: I. $\\sqrt{x^2 − 3x − 2} > 2x − 1$; II. $\\log_{0{,}2}(x − 4) > −4$; III. $3^{x^2 − 4x − 100} < 7$, რომელს აქვს სასრული რაოდენობის მთელი ამონახსენი?",
    options: [
      "მხოლოდ I",
      "მხოლოდ II",
      "მხოლოდ III",
      "მხოლოდ I და II",
      "მხოლოდ I და III",
      "მხოლოდ II და III"
    ],
    correct: 5,
    solution: "I. არე: $x \\le \\dfrac{3 - \\sqrt{17}}{2}$ ან $x \\ge \\dfrac{3 + \\sqrt{17}}{2}$. პირველ შუალედზე $2x - 1 < 0$ — ყველა უარყოფითი მთელი ამონახსნია, უამრავი.<br>II. $0 < x - 4 < 0{,}2^{-4} = 625$: $4 < x < 629$ — სასრული.<br>III. $x^2 - 4x - 100 < \\log_3 7$ — შემოსაზღვრული შუალედი, სასრული.<br><br><strong>პასუხი:</strong> ვ) მხოლოდ II და III.",
    tags: [],
    area: "algebra",
    topics: ["log-ineq"],
    grade: 11,
    difficulty: 3,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 25
  {
    question: "$DABC$ წესიერი ტეტრაედრის (ექვისვე წიბო ტოლია) წიბოს სიგრძეა $\\log_{199} a$. ამ ტეტრაედრზე შემოხაზული სფეროს რადიუსია $\\log_{199} b$. იპოვეთ $(\\log_a b)^2$",
    options: ["$\\frac{1}{3}$", "$\\frac{5}{6}$", "$\\frac{3}{8}$", "$\\frac{101}{199}$", "$\\frac{2}{3}$", "$\\frac{7}{12}$"],
    correct: 2,
    solution: "წესიერი ტეტრაედრისთვის $R = \\dfrac{e\\sqrt{6}}{4}$: $\\log_{199}b = \\dfrac{\\sqrt{6}}{4}\\log_{199}a$, ანუ $\\log_a b = \\dfrac{\\sqrt{6}}{4}$.<br><br>$(\\log_a b)^2 = \\dfrac{6}{16} = \\dfrac{3}{8}$.<br><br><strong>პასუხი:</strong> გ) $\\frac{3}{8}$.",
    tags: [],
    area: "solid",
    topics: ["pyramid","sphere","logarithms"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];
