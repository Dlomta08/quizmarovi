quizData = [
  // 1
  {
    question: "გამოთვალეთ $\\lim\\limits_{n \\to \\infty} \\dfrac{(5n + 1)(4n + 3)}{2n^2 - 9}$.",
    options: ["$2$", "$4$", "$5$", "$10$", "$12$", "$14$"],
    correct: 3,
    tags: [],
    solution: "მრიცხველი და მნიშვნელი $n^2$-ზე: $\\dfrac{(5 + 1/n)(4 + 3/n)}{2 - 9/n^2} \\to \\dfrac{20}{2} = 10$.<br><br><strong>პასუხი:</strong> დ) $10$.",
    area: "calculus",
    topics: ["seq-limit"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 2
  {
    question: "გამოთვალეთ $f'\\left(\\dfrac{\\pi}{2}\\right)$, თუ $f(x) = \\sin\\dfrac{\\pi}{2} + \\cos x$.",
    options: ["$-2$", "$-1$", "$0$", "$1$", "$2$", "$3$"],
    correct: 1,
    tags: [],
    solution: "$\\sin\\dfrac{\\pi}{2} = 1$ მუდმივაა, ამიტომ $f'(x) = -\\sin x$, $f'\\left(\\dfrac{\\pi}{2}\\right) = -1$.<br><br><strong>პასუხი:</strong> ბ) $-1$.",
    area: "calculus",
    topics: ["derivative"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 3
  {
    question: "იპოვეთ $f(x) = 3^x - x \\cdot \\ln 3$ ფუნქციის ზრდადობის შუალედი.",
    options: ["$(0;\\ \\infty)$", "$(1;\\ \\infty)$", "$(2;\\ \\infty)$", "$(\\ln 3;\\ \\infty)$", "$(3;\\ \\infty)$", "$(\\ln 3;\\ 3)$"],
    correct: 0,
    tags: [],
    solution: "$f'(x) = 3^x\\ln 3 - \\ln 3 = \\ln 3(3^x - 1) > 0 \\Leftrightarrow x > 0$.<br><br><strong>პასუხი:</strong> ა) $(0;\\ \\infty)$.",
    area: "calculus",
    topics: ["monotonic-extrema"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 4
  {
    question: "ჩამოთვლილთაგან რომელია $y = \\dfrac{x^3}{x^2 + 9x}$ ფუნქციის გრაფიკის ასიმპტოტი?",
    options: ["$x = 1$", "$x = 3$", "$x = 9$", "$y = x$", "$y = 9$", "$y = x - 9$"],
    correct: 5,
    tags: [],
    solution: "$x \\ne 0$-ზე $y = \\dfrac{x^2}{x + 9} = x - 9 + \\dfrac{81}{x + 9}$. დახრილი ასიმპტოტი: $y = x - 9$ (ვერტიკალური: $x = -9$).<br><br><strong>პასუხი:</strong> ვ) $y = x - 9$.",
    area: "calculus",
    topics: ["curve-sketching"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 5
  {
    question: "ჩამოთვლილთაგან რომელია $\\dfrac{x^2}{3} + y^2 = 2$ ელიფსის დირექტრისის განტოლება?",
    options: ["$x = -3$", "$x = -2$", "$x = -1$", "$x = 1$", "$x = 2$", "$x = 4$"],
    correct: 0,
    tags: [],
    solution: "$\\dfrac{x^2}{6} + \\dfrac{y^2}{2} = 1$: $a^2 = 6$, $c = 2$, დირექტრისები $x = \\pm 3$.<br><br><strong>პასუხი:</strong> ა) $x = -3$.",
    area: "geometry",
    topics: ["conics"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 6
  {
    question: "რამდენი გადაღუნვის წერტილი აქვს $\\dfrac{x^4}{12} - \\dfrac{5x^3}{6} + 2x^2 + 7$ ფუნქციას?",
    options: ["$0$", "$1$", "$2$", "$3$", "$4$", "$7$"],
    correct: 2,
    tags: [],
    solution: "$f''(x) = x^2 - 5x + 4 = (x - 1)(x - 4)$ — ორჯერ იცვლის ნიშანს, $2$ გადაღუნვის წერტილი.<br><br><strong>პასუხი:</strong> გ) $2$.",
    area: "calculus",
    topics: ["convexity"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 7
  {
    question: "ამოხსენით $2^x > \\log_9 25 \\cdot \\log_5 81$ უტოლობა.",
    options: ["$(1;\\ \\infty)$", "$(2;\\ \\infty)$", "$(3;\\ \\infty)$", "$(\\log_9 5;\\ \\infty)$", "$(-1;\\ \\infty)$", "$(-\\log_3 5;\\ \\infty)$"],
    correct: 1,
    tags: [],
    solution: "$\\log_9 25 = \\log_3 5$, $\\log_5 81 = 4\\log_5 3$; ნამრავლი $4$. $2^x > 4 \\Leftrightarrow x > 2$.<br><br><strong>პასუხი:</strong> ბ) $(2;\\ \\infty)$.",
    area: "algebra",
    topics: ["exp-ineq","logarithms"],
    grade: 11,
    difficulty: 1,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 8
  {
    question: "გამოთვალეთ $f'\\left(\\dfrac{\\pi}{8}\\right)$, თუ $f(x) = \\sin^4 2x + 4x^2$.",
    options: ["$3$", "$2$", "$0$", "$4 + 2\\pi$", "$2 + \\pi$", "$1 + 4\\pi$"],
    correct: 4,
    tags: [],
    solution: "$f'(x) = 4\\sin^3 2x \\cdot \\cos 2x \\cdot 2 + 8x$. $x = \\dfrac{\\pi}{8}$: $\\sin\\dfrac{\\pi}{4} = \\cos\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}$, $8 \\cdot \\left(\\dfrac{\\sqrt{2}}{2}\\right)^4 + \\pi = 2 + \\pi$.<br><br><strong>პასუხი:</strong> ე) $2 + \\pi$.",
    area: "calculus",
    topics: ["derivative"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 9
  {
    question: "იპოვეთ $a$ პარამეტრის მნიშვნელობა, თუ $y = 3x^2 + 6x$, $x = 1$, $x = a$, $y = 0$ წირებით შემოსაზღვრული ფიგურის ფართობია $50$.",
    options: ["$1$", "$2$", "$3$", "$5$", "$10$", "$12$"],
    correct: 2,
    tags: [],
    solution: "$x \\ge 1$-ზე $3x^2 + 6x > 0$: $\\displaystyle\\int_1^a (3x^2 + 6x)\\,dx = a^3 + 3a^2 - 4 = 50$, $a^3 + 3a^2 - 54 = 0$, $a = 3$.<br><br><strong>პასუხი:</strong> გ) $3$.",
    area: "calculus",
    topics: ["definite-integral"],
    grade: 11,
    difficulty: 2,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 10
  {
    question: "იპოვეთ წესიერი ოთხკუთხა წაკვეთილი პირამიდის მოცულობა, თუ მისი დიაგონალი $9$-ის ტოლია, ხოლო ფუძეების დიაგონალებია $\\sqrt{50}$ და $\\sqrt{98}$.",
    options: ["$60\\sqrt{5}$", "$90\\sqrt{3}$", "$84\\sqrt{2}$", "$109$", "$124$", "$144$"],
    correct: 3,
    tags: [],
    solution: "ფუძეების დიაგონალები $\\sqrt{50}$ და $\\sqrt{98}$ — გვერდები $5$ და $7$. დიაგონალის გეგმილი $\\dfrac{\\sqrt{50} + \\sqrt{98}}{2} = 6\\sqrt{2}$, $h = \\sqrt{81 - 72} = 3$.<br><br>$V = \\dfrac{3}{3}(25 + 49 + 35) = 109$.<br><br><strong>პასუხი:</strong> დ) $109$.",
    area: "solid",
    topics: ["pyramid","volume-surface"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 11
  {
    question: "იპოვეთ $\\left(\\dfrac{3}{2} - \\dfrac{\\sqrt{5}}{2}\\right)^x + \\left(\\dfrac{3}{2} + \\dfrac{\\sqrt{5}}{2}\\right)^x = 3$ განტოლების ფესვთა ნამრავლი.",
    options: ["$-3$", "$-1$", "$0$", "$3$", "$9\\sqrt{5}$", "$45$"],
    correct: 1,
    tags: [],
    solution: "$\\left(\\dfrac{3}{2} - \\dfrac{\\sqrt{5}}{2}\\right)\\left(\\dfrac{3}{2} + \\dfrac{\\sqrt{5}}{2}\\right) = \\dfrac{9 - 5}{4} = 1$. $t = \\left(\\dfrac{3 + \\sqrt{5}}{2}\\right)^x$: $t + \\dfrac{1}{t} = 3$, $t = \\dfrac{3 \\pm \\sqrt{5}}{2}$, ე.ი. $x = \\pm 1$.<br><br>ნამრავლი: $-1$.<br><br><strong>პასუხი:</strong> ბ) $-1$.",
    area: "algebra",
    topics: ["exp-eq"],
    grade: 11,
    difficulty: 2,
    type: ["solve"],
    method: ["substitution"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 12
  {
    question: "ამოხსენით $\\log_a(2x^2 - 3x - 3) < \\log_a(x - 3)$ უტოლობა, თუ ცნობილია, რომ ის სამართლიანია, როცა $x = 4$.",
    options: ["$\\left(\\dfrac{14}{3};\\ \\infty\\right)$", "$(3;\\ \\infty)$", "$(4;\\ \\infty)$", "$(\\sqrt{33};\\ \\infty)$", "$\\left(\\dfrac{1}{3};\\ 7\\right)$", "$(3;\\ \\sqrt{33})$"],
    correct: 1,
    tags: [],
    solution: "$x = 4$: $\\log_a 17 < \\log_a 1 = 0$, ამიტომ $0 < a < 1$ და $2x^2 - 3x - 3 > x - 3 > 0$.<br><br>$x > 3$ და $2x^2 - 4x > 0$ ($x > 2$) — ერთად $x > 3$.<br><br><strong>პასუხი:</strong> ბ) $(3;\\ \\infty)$.",
    area: "algebra",
    topics: ["log-ineq"],
    grade: 11,
    difficulty: 2,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 13
  {
    question: "ჩამოთვლილთაგან რისი ტოლია მანძილი $A(7;\\ 0)$ წერტილიდან $16x^2 + 25y^2 = 400$ ელიფსის ფოკუსამდე?",
    options: ["$3$", "$5$", "$7$", "$10$", "$15$", "$16$"],
    correct: 3,
    tags: [],
    solution: "$\\dfrac{x^2}{25} + \\dfrac{y^2}{16} = 1$, $c = 3$, ფოკუსები $(\\pm 3;\\ 0)$. მანძილები $A(7;\\ 0)$-დან: $4$ და $10$.<br><br><strong>პასუხი:</strong> დ) $10$.",
    area: "geometry",
    topics: ["conics"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 14
  {
    question: "მოცემული $A(1;\\ 2;\\ 3)$, $B(-1;\\ 2;\\ -3)$, $C(-3;\\ 1;\\ 4)$, $D(2;\\ 1;\\ -1)$, $E(5;\\ 1;\\ 4)$ ხუთი წერტილიდან ჩამოთვლილთაგან რომელი ორი წერტილი მდებარეობს $2x + 3y - 5z + 7 = 0$ სიბრტყის მიმართ სხვადასხვა ნახევარსივრცეში?",
    options: ["$A$ და $B$", "$B$ და $D$", "$A$ და $C$", "$B$ და $C$", "$D$ და $E$", "$C$ და $E$"],
    correct: 3,
    tags: [],
    solution: "ჩავსვათ $2x + 3y - 5z + 7$-ში: $A$: $0$ (სიბრტყეზეა); $B$: $26 > 0$; $C$: $-16 < 0$; $D$: $19 > 0$; $E$: $0$ (სიბრტყეზეა).<br><br>სხვადასხვა მხარესაა $B$ და $C$ (ასევე $C$ და $D$).<br><br><strong>პასუხი:</strong> დ) $B$ და $C$.",
    area: "geometry",
    topics: ["vectors"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: ["coordinates"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 15
  {
    question: "გამოთვალეთ $\\displaystyle\\int_1^3 \\left(\\sin\\left(\\frac{76\\pi}{7}\\right) + \\cos\\left(\\frac{149\\pi}{14}\\right)\\right)dx$.",
    options: ["$0$", "$1$", "$3$", "$\\pi$", "$2\\pi$", "$3\\pi$"],
    correct: 0,
    tags: [],
    solution: "$\\sin\\dfrac{76\\pi}{7} = \\sin\\left(10\\pi + \\dfrac{6\\pi}{7}\\right) = \\sin\\dfrac{\\pi}{7}$; $\\cos\\dfrac{149\\pi}{14} = \\cos\\left(10\\pi + \\dfrac{9\\pi}{14}\\right) = \\cos\\left(\\dfrac{\\pi}{2} + \\dfrac{\\pi}{7}\\right) = -\\sin\\dfrac{\\pi}{7}$.<br><br>ინტეგრალქვეშა გამოსახულება $0$-ია, ინტეგრალიც $0$.<br><br><strong>პასუხი:</strong> ა) $0$.",
    area: "calculus",
    topics: ["definite-integral","reduction"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 16
  {
    question: "იპოვეთ $a$ პარამეტრის მნიშვნელობა, რომლისთვისაც $f(x) = 16^x - 4^{x+1} + 5$ და $g(x) = x^3 - ax^2 + 5$ ფუნქციების, შესაბამისად, მინიმუმის და მაქსიმუმის წერტილები ტოლია.",
    options: ["$1$", "$2$", "$\\dfrac{3}{8}$", "$\\dfrac{1}{2}$", "$\\dfrac{3}{4}$", "$\\dfrac{4}{5}$"],
    correct: 4,
    tags: [],
    solution: "$f(x) = (4^x)^2 - 4 \\cdot 4^x + 5$ მინიმალურია, როცა $4^x = 2$, $x = \\dfrac{1}{2}$.<br><br>$g'(x) = x(3x - 2a)$, კრიტიკული წერტილები $0$ და $\\dfrac{2a}{3}$. $\\dfrac{2a}{3} = \\dfrac{1}{2}$, $a = \\dfrac{3}{4}$.<br><br>(შენიშვნა: $a = \\dfrac{3}{4}$-ზე $x = \\dfrac{1}{2}$ არის $g$-ს <strong>მინიმუმის</strong> წერტილი, მაქსიმუმი $x = 0$-შია.)<br><br><strong>პასუხი:</strong> ე) $\\dfrac{3}{4}$.",
    area: "calculus",
    topics: ["monotonic-extrema"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: ["substitution"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 17
  {
    question: "იპოვეთ $f(x) = 4^x \\cdot 2^{1 + \\sin^2 x}$ ფუნქციის მნიშვნელობათა სიმრავლე.",
    options: ["$[-1;\\ \\infty)$", "$(0;\\ \\infty)$", "$[1;\\ \\infty)$", "$[2;\\ \\infty)$", "$[4;\\ \\infty)$", "$(-\\infty;\\ \\infty)$"],
    correct: 1,
    tags: [],
    solution: "$f(x) = 2^{2x + 1 + \\sin^2 x}$. მაჩვენებელი უწყვეტია და ყველა ნამდვილ მნიშვნელობას იღებს ($2x$-ის გამო), ამიტომ $f$ ყველა დადებით მნიშვნელობას იღებს.<br><br><strong>პასუხი:</strong> ბ) $(0;\\ \\infty)$.",
    area: "algebra",
    topics: ["real-exponent"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 18 (the answer sheet marks all six options as correct)
  {
    question: "გამოთვალეთ $\\lim\\limits_{x \\to 0} \\dfrac{4e^x \\cdot x - 3}{4x^2 + 8x}$ ზღვარი.",
    options: ["$\\dfrac{1}{2}$", "$\\dfrac{3}{4}$", "$\\dfrac{4}{5}$", "$\\dfrac{3}{8}$", "$1$", "$2$"],
    correct: [0, 1, 2, 3, 4, 5],
    tags: [],
    solution: "<strong>ამ ამოცანაში ყველა პასუხი ჩაითვალა სწორად.</strong><br><br>$x \\to 0$-ზე მრიცხველი $4e^x x - 3 \\to -3$, მნიშვნელი $4x^2 + 8x \\to 0$, ამიტომ წილადი უსასრულოდ იზრდება მოდულით — სასრული ზღვარი არ არსებობს.",
    area: "calculus",
    topics: ["func-limit"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 19
  {
    question: "ბირთვის ზედაპირზე მოცემულია ორი წრეწირი, რომელთა რადიუსები $5$-ის ტოლია, ხოლო მათი საერთო ქორდის სიგრძე $2\\sqrt{2}$-ია. იპოვეთ ბირთვის ზედაპირის ფართობი, თუ ცნობილია, რომ წრეწირების სიბრტყეები ურთიერთმართობულია.",
    options: ["$240\\sqrt{3}\\pi$", "$256\\sqrt{3}\\pi$", "$64\\sqrt{6}\\pi$", "$256\\pi$", "$176\\pi$", "$192\\pi$"],
    correct: 5,
    tags: [],
    solution: "წრეწირების ცენტრები $O_1, O_2$, ქორდის შუაწერტილი $H$: $O_1H = O_2H = \\sqrt{25 - 2} = \\sqrt{23}$. $OO_1HO_2$ მართკუთხედია: $OH^2 = 46$, $R^2 = 46 + 2 = 48$.<br><br>ზედაპირის ფართობი: $4\\pi R^2 = 192\\pi$.<br><br><strong>პასუხი:</strong> ვ) $192\\pi$.",
    area: "solid",
    topics: ["sphere"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 20
  {
    question: "ჩამოთვლილთაგან რომელია $f(x) = x^3 - 6x^2 + 9x + 3$ ფუნქციის გრაფიკზე მდებარე იმ $A$ წერტილის კოორდინატები, რომლიდანაც მანძილი $y = -3x - 7$ წრფემდე იქნება უმცირესი?",
    options: ["$A(1;\\ 7)$", "$A(3;\\ 14)$", "$A(2;\\ 5)$", "$A(-1;\\ -13)$", "$A(-2;\\ 47)$", "$A(0;\\ 3)$"],
    correct: 2,
    tags: [],
    solution: "<strong>მოსალოდნელი ამოხსნა:</strong> უმცირესი მანძილის წერტილში მხები მოცემული წრფის პარალელური უნდა იყოს: $f'(x) = 3x^2 - 12x + 9 = -3$, $(x - 2)^2 = 0$, $x = 2$, $f(2) = 5$: $A(2;\\ 5)$.<br><br><strong>შენიშვნა:</strong> $f(x) - (-3x - 7) = (x - 2)^3 + 18$ ნიშანს იცვლის, ე.ი. გრაფიკი წრფეს კვეთს ($x = 2 - \\sqrt[3]{18}$-ში) და იქ მანძილი $0$-ია. ამიტომ ამოცანის პირობა ზუსტად არ არის ჩამოყალიბებული.<br><br><strong>პასუხი:</strong> გ) $A(2;\\ 5)$.",
    area: "calculus",
    topics: ["derivative"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 21
  {
    question: "იპოვეთ $a$ პარამეტრის მნიშვნელობა, რომლისთვისაც $\\displaystyle\\int_0^1 \\left(3x^2 - 4ax + a^2\\right)dx$ ინტეგრალის მნიშვნელობა იქნება მინიმალური.",
    options: ["$-2$", "$-1$", "$0$", "$1$", "$2$", "$3$"],
    correct: 3,
    tags: [],
    solution: "$\\displaystyle\\int_0^1 (3x^2 - 4ax + a^2)\\,dx = 1 - 2a + a^2 = (a - 1)^2$ — მინიმალურია, როცა $a = 1$.<br><br><strong>პასუხი:</strong> დ) $1$.",
    area: "calculus",
    topics: ["definite-integral","max-min"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 22
  {
    question: "გამოთვალეთ იმ სხეულის მოცულობა, რომელიც მიიღება შემდეგი წირებით შემოსაზღვრული ფიგურის ბრუნვით $Ox$ ღერძის გარშემო: 1) $x = 1$; 2) $x = 4$; 3) $Ox$ ღერძით; 4) $y^2 = 2x$ წირით.",
    options: ["$6\\pi$", "$9\\pi$", "$10\\pi$", "$11\\pi$", "$15\\pi$", "$16\\pi$"],
    correct: 4,
    tags: [],
    solution: "$V = \\pi\\displaystyle\\int_1^4 y^2\\,dx = \\pi\\int_1^4 2x\\,dx = \\pi(16 - 1) = 15\\pi$.<br><br><strong>პასუხი:</strong> ე) $15\\pi$.",
    area: "calculus",
    topics: ["definite-integral"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 23
  {
    question: "ჩამოთვლილთაგან რისი ტოლია $\\displaystyle\\int_0^4 \\big(f(x) + 2 - f(4 - x)\\big)\\,dx$ ინტეგრალის მნიშვნელობა?",
    options: ["$-5$", "$0$", "$2$", "$8$", "$10$", "$12$"],
    correct: 3,
    tags: [],
    solution: "ჩანაცვლებით $t = 4 - x$: $\\displaystyle\\int_0^4 f(4 - x)\\,dx = \\int_0^4 f(t)\\,dt$. ამიტომ $\\displaystyle\\int_0^4 \\big(f(x) - f(4 - x)\\big)dx = 0$ და მთელი ინტეგრალი $\\displaystyle\\int_0^4 2\\,dx = 8$.<br><br><strong>პასუხი:</strong> დ) $8$.",
    area: "calculus",
    topics: ["definite-integral"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 24
  {
    question: "მართკუთხა საკოორდინატო სივრცეში მოცემულია $A(1;\\ 0;\\ 3)$, $B(3;\\ -2;\\ 1)$ და $C(6;\\ 1;\\ 2)$ წერტილები და $x - 2y + 3z = 10$ განტოლებით განსაზღვრული სიბრტყე. ჩამოთვლილთაგან რომელია მოცემულ სიბრტყეში მდებარე $D$ წერტილის კოორდინატები, თუ $AB$ წრფე $CD$ წრფის პარალელურია?",
    options: ["$(12;\\ 7;\\ 4)$", "$(14;\\ -7;\\ -6)$", "$(11;\\ 5;\\ 3)$", "$(13;\\ 9;\\ 5)$", "$(11;\\ 7;\\ 5)$", "$(10;\\ 7;\\ 6)$"],
    correct: 1,
    tags: [],
    solution: "$\\overrightarrow{AB} = (2;\\ -2;\\ -2)$. $CD \\parallel AB$: $D = (6 + 2t;\\ 1 - 2t;\\ 2 - 2t)$. სიბრტყეში ჩასმა: $6 + 2t - 2 + 4t + 6 - 6t = 10$ — სრულდება ნებისმიერი $t$-სთვის (წრფე $CD$ მთლიანად სიბრტყეშია).<br><br>ვარიანტებიდან ამ სახისაა $t = 4$: $(14;\\ -7;\\ -6)$.<br><br><strong>პასუხი:</strong> ბ) $(14;\\ -7;\\ -6)$.",
    area: "geometry",
    topics: ["vectors"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: ["coordinates"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 25
  {
    question: "ჩამოთვლილთაგან რისი ტოლია $2x + 3y$ გამოსახულების მნიშვნელობა, თუ $x$ და $y$ ცვლადები $2^{|x|} - \\cos y + \\lg\\left(1 + x^2 + |y|\\right) + \\displaystyle\\int_0^{\\frac{\\pi}{2}} \\cos x\\,dx = 1$ განტოლების ამონახსნებია?",
    options: ["$-5$", "$-1$", "$0$", "$1$", "$8$", "$10$"],
    correct: 2,
    tags: [],
    solution: "$\\displaystyle\\int_0^{\\pi/2} \\cos x\\,dx = 1$, ამიტომ $2^{|x|} - \\cos y + \\lg(1 + x^2 + |y|) = 0$.<br><br>$2^{|x|} \\ge 1$, $-\\cos y \\ge -1$, $\\lg(1 + x^2 + |y|) \\ge 0$ — ჯამი $\\ge 0$, ტოლობით მხოლოდ მაშინ, როცა $x = 0$, $\\cos y = 1$, $x^2 + |y| = 0$, ე.ი. $x = y = 0$.<br><br>$2x + 3y = 0$.<br><br><strong>პასუხი:</strong> გ) $0$.",
    area: "calculus",
    topics: ["definite-integral","logarithms"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: ["estimation"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];
