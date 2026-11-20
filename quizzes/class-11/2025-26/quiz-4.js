quizData = [
  // 1
  {
    question: "რამდენი ექსტრემუმის წერტილი აქვს $y = x^4 - 8x^2 + 6$ ფუნქციას?",
    options: ["$0$", "$1$", "$2$", "$3$", "$4$", "$6$"],
    correct: 3,
    tags: [],
    solution: "$y' = 4x^3 - 16x = 4x(x - 2)(x + 2)$. ნულები $-2, 0, 2$ და თითოეულში წარმოებული ნიშანს იცვლის — $3$ ექსტრემუმის წერტილი.<br><br><strong>პასუხი:</strong> დ) $3$.",
    area: "calculus",
    topics: ["monotonic-extrema"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 2
  {
    question: "იპოვეთ $y = \\dfrac{5}{x} + \\dfrac{x}{5}$ ფუნქციის უმცირესი მნიშვნელობა $[1;\\ 7]$ შუალედში.",
    options: ["$1$", "$2$", "$3$", "$5$", "$\\dfrac{74}{35}$", "$\\dfrac{71}{35}$"],
    correct: 1,
    tags: [],
    solution: "$x > 0$-ზე საშუალოების უტოლობით $\\dfrac{5}{x} + \\dfrac{x}{5} \\ge 2\\sqrt{\\dfrac{5}{x} \\cdot \\dfrac{x}{5}} = 2$, ტოლობა $x = 5 \\in [1;\\ 7]$-ზე.<br><br><strong>პასუხი:</strong> ბ) $2$.",
    area: "calculus",
    topics: ["monotonic-extrema"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: ["estimation"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 3
  {
    question: "ჩამოთვლილთაგან რომელია $y = \\dfrac{x^3}{x^2 + 9}$ ფუნქციის გრაფიკის ასიმპტოტი?",
    options: ["$x = 1$", "$x = 3$", "$x = 9$", "$y = x$", "$y = 9$", "$y = x + 9$"],
    correct: 3,
    tags: [],
    solution: "$\\dfrac{x^3}{x^2 + 9} = x - \\dfrac{9x}{x^2 + 9}$, ხოლო $\\dfrac{9x}{x^2 + 9} \\to 0$, როცა $x \\to \\pm\\infty$. დახრილი ასიმპტოტი: $y = x$ (ვერტიკალური არ არის, მნიშვნელი $> 0$).<br><br><strong>პასუხი:</strong> დ) $y = x$.",
    area: "calculus",
    topics: ["curve-sketching"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 4
  {
    question: "ჩამოთვლილთაგან რომელია $x^2 + 3y^2 = 6$ ელიფსის დირექტრისის განტოლება?",
    options: ["$x = -2$", "$x = -1$", "$x = 0$", "$x = 1$", "$x = 3$", "$x = 6$"],
    correct: 4,
    tags: [],
    solution: "$\\dfrac{x^2}{6} + \\dfrac{y^2}{2} = 1$: $a^2 = 6$, $b^2 = 2$, $c = \\sqrt{a^2 - b^2} = 2$. დირექტრისები: $x = \\pm\\dfrac{a^2}{c} = \\pm 3$.<br><br><strong>პასუხი:</strong> ე) $x = 3$.",
    area: "geometry",
    topics: ["conics"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 5
  {
    question: "იპოვეთ $x^2 + 3y^2 = 6$ ელიფსის ექსცენტრისიტეტი.",
    options: ["$2$", "$\\dfrac{2}{\\sqrt{6}}$", "$1$", "$\\dfrac{1}{\\sqrt{3}}$", "$3$", "$\\dfrac{1}{\\sqrt{6}}$"],
    correct: 1,
    tags: [],
    solution: "$a = \\sqrt{6}$, $c = 2$: $e = \\dfrac{c}{a} = \\dfrac{2}{\\sqrt{6}}$.<br><br><strong>პასუხი:</strong> ბ) $\\dfrac{2}{\\sqrt{6}}$.",
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
    question: "იპოვეთ $g(1)$, სადაც $g(x)$ არის $f(x) = 3x^2 - 2x + 4$ ფუნქციის ის პირველადი, რომლის გრაფიკს ეკუთვნის $(2;\\ 17)$ წერტილი.",
    options: ["$2$", "$3$", "$5$", "$6$", "$9$", "$12$"],
    correct: 4,
    tags: [],
    solution: "$g(x) = x^3 - x^2 + 4x + C$. $g(2) = 8 - 4 + 8 + C = 17$, $C = 5$. $g(1) = 1 - 1 + 4 + 5 = 9$.<br><br><strong>პასუხი:</strong> ე) $9$.",
    area: "calculus",
    topics: ["antiderivative"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 7
  {
    question: "იპოვეთ $\\displaystyle\\int_0^1 \\frac{x\\,dx}{x + 1} + \\int_2^3 \\frac{dx}{x^2 - 1}$ გამოსახულების მნიშვნელობა.",
    options: ["$1$", "$1 + \\ln\\dfrac{\\sqrt{2}}{\\sqrt{3}}$", "$1 - \\ln\\dfrac{\\sqrt{2}}{\\sqrt{3}}$", "$1 - \\ln\\dfrac{\\sqrt{3}}{2\\sqrt{2}}$", "$1 + \\ln\\dfrac{\\sqrt{3}}{2\\sqrt{2}}$", "$1 - \\ln 2$"],
    correct: 4,
    tags: [],
    solution: "$\\displaystyle\\int_0^1 \\frac{x\\,dx}{x + 1} = \\int_0^1 \\left(1 - \\frac{1}{x + 1}\\right)dx = 1 - \\ln 2$.<br><br>$\\displaystyle\\int_2^3 \\frac{dx}{x^2 - 1} = \\frac{1}{2}\\ln\\frac{x - 1}{x + 1}\\Big|_2^3 = \\frac{1}{2}\\left(\\ln\\frac{1}{2} - \\ln\\frac{1}{3}\\right) = \\frac{1}{2}\\ln\\frac{3}{2}$.<br><br>ჯამი: $1 - \\ln 2 + \\ln\\sqrt{\\dfrac{3}{2}} = 1 + \\ln\\dfrac{\\sqrt{3}}{2\\sqrt{2}}$.<br><br><strong>პასუხი:</strong> ე) $1 + \\ln\\dfrac{\\sqrt{3}}{2\\sqrt{2}}$.",
    area: "calculus",
    topics: ["definite-integral"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 8
  {
    question: "იპოვეთ $f(x) = 2x^3 - 27x^2 + 84x + 11$ ფუნქციის კლებადობის შუალედის სიგრძე.",
    options: ["$3$", "$5$", "$6$", "$8$", "$9$", "$12$"],
    correct: 1,
    tags: [],
    solution: "$f'(x) = 6x^2 - 54x + 84 = 6(x - 2)(x - 7) \\le 0$, როცა $x \\in [2;\\ 7]$ — კლებადობის შუალედი, სიგრძე $5$.<br><br><strong>პასუხი:</strong> ბ) $5$.",
    area: "calculus",
    topics: ["monotonic-extrema"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 9
  {
    question: "დაწერეთ $9x^2 - 16y^2 = 144$ ჰიპერბოლის ასიმპტოტების განტოლება.",
    options: ["$y = \\pm\\dfrac{3}{4}x$", "$y = \\pm\\dfrac{1}{4}x$", "$y = \\pm\\dfrac{5}{4}x$", "$y = \\pm\\dfrac{1}{3}x$", "$y = \\pm\\dfrac{2}{3}x$", "$y = \\pm\\dfrac{5}{3}x$"],
    correct: 0,
    tags: [],
    solution: "$\\dfrac{x^2}{16} - \\dfrac{y^2}{9} = 1$: $a = 4$, $b = 3$, ასიმპტოტები $y = \\pm\\dfrac{b}{a}x = \\pm\\dfrac{3}{4}x$.<br><br><strong>პასუხი:</strong> ა) $y = \\pm\\dfrac{3}{4}x$.",
    area: "geometry",
    topics: ["conics"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 10
  {
    question: "დაწერეთ $9x^2 - 16y^2 = 144$ ჰიპერბოლის დირექტრისების განტოლებები.",
    options: ["$x = \\pm\\dfrac{3}{4}$", "$x = \\pm\\dfrac{5}{4}$", "$x = \\pm\\dfrac{15}{4}$", "$x = \\pm\\dfrac{16}{5}$", "$x = \\pm\\dfrac{9}{5}$", "$x = \\pm\\dfrac{3}{5}$"],
    correct: 3,
    tags: [],
    solution: "$a = 4$, $b = 3$, $c = \\sqrt{16 + 9} = 5$. დირექტრისები: $x = \\pm\\dfrac{a^2}{c} = \\pm\\dfrac{16}{5}$.<br><br><strong>პასუხი:</strong> დ) $x = \\pm\\dfrac{16}{5}$.",
    area: "geometry",
    topics: ["conics"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 11
  {
    question: "იპოვეთ $y = x^2 \\ln x$ ფუნქციის მნიშვნელობათა სიმრავლე $(0;\\ e]$ შუალედში.",
    options: ["$(0;\\ e^2]$", "$\\left[-\\dfrac{1}{2e};\\ e^2\\right]$", "$(0;\\ e]$", "$\\left[-\\dfrac{1}{2};\\ e^2\\right]$", "$(-1;\\ e^2]$", "$\\left[-\\dfrac{1}{e};\\ e^2\\right]$"],
    correct: 1,
    tags: [],
    solution: "$y' = 2x\\ln x + x = x(2\\ln x + 1) = 0 \\Rightarrow x = e^{-1/2}$, $y = e^{-1} \\cdot \\left(-\\dfrac{1}{2}\\right) = -\\dfrac{1}{2e}$ — მინიმუმი.<br><br>$x \\to 0^+$-ზე $y \\to 0$; $y(e) = e^2$. მნიშვნელობათა სიმრავლე: $\\left[-\\dfrac{1}{2e};\\ e^2\\right]$.<br><br><strong>პასუხი:</strong> ბ) $\\left[-\\dfrac{1}{2e};\\ e^2\\right]$.",
    area: "calculus",
    topics: ["monotonic-extrema"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 12
  {
    question: "იპოვეთ $f(x) = x^2 + 2\\cos x$ ფუნქციის ზრდადობის შუალედი.",
    options: ["$(-\\infty;\\ -2)$", "$(-1;\\ 0)$", "$(-\\infty;\\ 0)$", "$(0;\\ \\infty)$", "$(0;\\ 1)$", "$(2;\\ \\infty)$"],
    correct: 3,
    tags: [],
    solution: "$f'(x) = 2x - 2\\sin x = 2(x - \\sin x)$. $x > 0$-ზე $x > \\sin x$, $f' > 0$; $x < 0$-ზე $f' < 0$. ფუნქცია ზრდადია $(0;\\ \\infty)$-ზე.<br><br><strong>პასუხი:</strong> დ) $(0;\\ \\infty)$.",
    area: "calculus",
    topics: ["monotonic-extrema"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 13
  {
    question: "მატერიალური წერტილის მოძრაობის სიჩქარის დროზე დამოკიდებულება მოცემულია ტოლობით $V = \\dfrac{t^3}{3} - 2t^2 + 10t$. ჩამოთვლილთაგან რისი ტოლია ამ მოძრაობისას აჩქარების უმცირესი მნიშვნელობა?",
    options: ["$18$", "$12$", "$6$", "$10$", "$3$", "$4$"],
    correct: 2,
    tags: [],
    solution: "აჩქარება $a(t) = V'(t) = t^2 - 4t + 10 = (t - 2)^2 + 6 \\ge 6$.<br><br><strong>პასუხი:</strong> გ) $6$.",
    area: "calculus",
    topics: ["derivative"],
    grade: 11,
    difficulty: 1,
    type: ["word"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 14
  {
    question: "ჩამოთვლილთაგან რისი ტოლია მანძილი $A(5;\\ 0)$ წერტილიდან $16x^2 + 25y^2 = 400$ ელიფსის ფოკუსამდე?",
    options: ["$8$", "$6$", "$12$", "$9$", "$4$", "$1$"],
    correct: 0,
    tags: [],
    solution: "$\\dfrac{x^2}{25} + \\dfrac{y^2}{16} = 1$: $c = \\sqrt{25 - 16} = 3$, ფოკუსები $(\\pm 3;\\ 0)$. მანძილები $A(5;\\ 0)$-დან: $2$ და $8$.<br><br><strong>პასუხი:</strong> ა) $8$.",
    area: "geometry",
    topics: ["conics"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 15
  {
    question: "იპოვეთ მანძილი $A(7;\\ 11)$ წერტილიდან $y^2 = 12x$ პარაბოლის დირექტრისამდე.",
    options: ["$0$", "$3$", "$6$", "$8$", "$10$", "$12$"],
    correct: 4,
    tags: [],
    solution: "$y^2 = 12x = 2px$, $p = 6$, დირექტრისა $x = -\\dfrac{p}{2} = -3$. მანძილი $A(7;\\ 11)$-დან: $7 + 3 = 10$.<br><br><strong>პასუხი:</strong> ე) $10$.",
    area: "geometry",
    topics: ["conics"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 16
  {
    question: "იპოვეთ $f(t) = \\displaystyle\\int_3^t \\left(x^2 + \\sqrt{x^2 + 1}\\right)dx$ ფუნქციის გადაღუნვის წერტილი.",
    options: ["$-1$", "$0$", "$1$", "$3$", "$6$", "$12$"],
    correct: 1,
    tags: [],
    solution: "$f'(t) = t^2 + \\sqrt{t^2 + 1}$, $f''(t) = 2t + \\dfrac{t}{\\sqrt{t^2 + 1}} = t\\left(2 + \\dfrac{1}{\\sqrt{t^2 + 1}}\\right)$ — ნიშანს იცვლის მხოლოდ $t = 0$-ში.<br><br><strong>პასუხი:</strong> ბ) $0$.",
    area: "calculus",
    topics: ["convexity","definite-integral"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 17
  {
    question: "გამოთვალეთ $x^2 + y^4$ გამოსახულების მაქსიმალური მნიშვნელობა, თუ $x$ და $y$ წარმოადგენენ $\\dfrac{x^2}{12} + \\dfrac{y^2}{6} = 1$ ელიფსზე მდებარე წერტილის კოორდინატებს.",
    options: ["$1$", "$3$", "$6$", "$12$", "$26$", "$36$"],
    correct: 5,
    tags: [],
    solution: "$x^2 = 12 - 2y^2$, $y^2 \\in [0;\\ 6]$. $x^2 + y^4 = y^4 - 2y^2 + 12 = (y^2 - 1)^2 + 11$ — უდიდესია $y^2 = 6$-ზე: $25 + 11 = 36$.<br><br><strong>პასუხი:</strong> ვ) $36$.",
    area: "geometry",
    topics: ["conics","max-min"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 18
  {
    question: "იპოვეთ $a$ პარამეტრის მნიშვნელობა, რომლისთვისაც $f(x) = 16^x - 4^{x+1} + 5$ ფუნქციის მინიმალური მნიშვნელობა $g(x) = x^3 - ax^2 + 5$ ფუნქციის ექსტრემალური მნიშვნელობის ტოლია.",
    options: ["$-3$", "$-1$", "$0$", "$1$", "$3$", "$6$"],
    correct: 4,
    tags: [],
    solution: "$t = 4^x > 0$: $f = t^2 - 4t + 5 = (t - 2)^2 + 1$, მინიმუმი $1$.<br><br>$g'(x) = 3x^2 - 2ax = x(3x - 2a)$, ექსტრემუმები: $g(0) = 5$ და $g\\left(\\dfrac{2a}{3}\\right) = 5 - \\dfrac{4a^3}{27}$. $5 - \\dfrac{4a^3}{27} = 1$, $a^3 = 27$, $a = 3$.<br><br><strong>პასუხი:</strong> ე) $3$.",
    area: "calculus",
    topics: ["monotonic-extrema"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: ["substitution"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 19
  {
    question: "იპოვეთ $a + b$, თუ $f(x) = -\\dfrac{x^4}{12} + \\dfrac{7x^3}{6} - ax^2 + 4x + 9$ ფუნქციის ჩაზნექილობის შუალედი ემთხვევა $g(x) = 2x^3 - bx^2 + 60x + 15$ ფუნქციის კლებადობის შუალედს.",
    options: ["$0$", "$10$", "$12$", "$26$", "$36$", "$48$"],
    correct: 3,
    tags: [],
    solution: "$f''(x) = -x^2 + 7x - 2a > 0$ ფესვებს შორის, ე.ი. $x^2 - 7x + 2a < 0$-ის შუალედზე.<br>$g'(x) = 6x^2 - 2bx + 60 < 0 \\Leftrightarrow x^2 - \\dfrac{b}{3}x + 10 < 0$.<br><br>შუალედები ემთხვევა, თუ კვადრატული სამწევრები ტოლია: $\\dfrac{b}{3} = 7$, $2a = 10$: $b = 21$, $a = 5$, $a + b = 26$.<br><br><strong>პასუხი:</strong> დ) $26$.",
    area: "calculus",
    topics: ["convexity","monotonic-extrema"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 20
  {
    question: "გამოთვალეთ იმ სხეულის მოცულობა, რომელიც მიიღება შემდეგი სამი წირით შემოსაზღვრული ფიგურის ბრუნვით $Ox$ ღერძის გარშემო: 1) $y = 0$; 2) $x = 3$; 3) პარაბოლით, რომელიც სიმეტრიულია $Ox$ ღერძის მიმართ, გადის კოორდინატთა სათავეზე და მისი ფოკუსია $F\\left(\\dfrac{1}{2};\\ 0\\right)$ წერტილი.",
    options: ["$\\dfrac{14}{15}\\pi$", "$\\dfrac{16}{15}\\pi$", "$\\pi$", "$3\\pi$", "$6\\pi$", "$9\\pi$"],
    correct: 5,
    tags: [],
    solution: "წვერო სათავეშია, ფოკუსი $\\left(\\dfrac{1}{2};\\ 0\\right)$: $y^2 = 2px$, $\\dfrac{p}{2} = \\dfrac{1}{2}$, $y^2 = 2x$.<br><br>$V = \\pi\\displaystyle\\int_0^3 y^2\\,dx = \\pi\\int_0^3 2x\\,dx = 9\\pi$.<br><br><strong>პასუხი:</strong> ვ) $9\\pi$.",
    area: "calculus",
    topics: ["definite-integral","conics"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 21 (the answer sheet marks all six options as correct)
  {
    question: "გამოთვალეთ $\\displaystyle\\int_0^\\pi \\big(|\\sin 199| - |\\sin 200|\\big)\\,dx$ ინტეგრალი.",
    options: ["$-3$", "$-1$", "$0$", "$1$", "$3$", "$6$"],
    correct: [0, 1, 2, 3, 4, 5],
    tags: [],
    solution: "<strong>ამ ამოცანაში ყველა პასუხი ჩაითვალა სწორად.</strong><br><br>ინტეგრალქვეშა გამოსახულება $x$-ზე არ არის დამოკიდებული (მუდმივაა), ამიტომ ინტეგრალი უდრის $\\pi\\left(|\\sin 199| - |\\sin 200|\\right)$-ს. ეს რიცხვი ვარიანტებს შორის არ არის.",
    area: "calculus",
    topics: ["definite-integral"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 22
  {
    question: "დაწერეთ იმ ვერტიკალური წრფის განტოლება, რომელიც $y = 2x^2$ და $y = -x^2 - 6x + 16$ წირებით შემოსაზღვრული ფიგურის ფართობს ორ ტოლ ნაწილად ყოფს.",
    options: ["$x = -3$", "$x = -1$", "$x = 0$", "$x = 1$", "$x = 3$", "$x = 6$"],
    correct: 1,
    tags: [],
    solution: "გადაკვეთა: $2x^2 = -x^2 - 6x + 16 \\Leftrightarrow 3x^2 + 6x - 16 = 0$. ფიგურის „სიმაღლე“: $(-x^2 - 6x + 16) - 2x^2 = -3(x + 1)^2 + 19$ — სიმეტრიულია $x = -1$-ის მიმართ, გადაკვეთის წერტილებიც სიმეტრიულია ($x_1 + x_2 = -2$).<br><br>მაშასადამე, $x = -1$ ფიგურას ორ ტოლ ნაწილად ყოფს.<br><br><strong>პასუხი:</strong> ბ) $x = -1$.",
    area: "calculus",
    topics: ["definite-integral"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 23
  {
    question: "გამოთვალეთ იმ სხეულის მოცულობა, რომელიც მიიღება $y = x^2 - 2x$; $y = 0$ წირებით შემოსაზღვრული ფიგურის ბრუნვით $Ox$ ღერძის გარშემო.",
    options: ["$\\dfrac{11}{15}\\pi$", "$\\dfrac{14}{15}\\pi$", "$\\dfrac{16}{15}\\pi$", "$\\pi$", "$6\\pi$", "$9\\pi$"],
    correct: 2,
    tags: [],
    solution: "$x^2 - 2x = 0$-ის ფესვები $0$ და $2$. $V = \\pi\\displaystyle\\int_0^2 (x^2 - 2x)^2\\,dx = \\pi\\int_0^2 (x^4 - 4x^3 + 4x^2)\\,dx = \\pi\\left(\\frac{32}{5} - 16 + \\frac{32}{3}\\right) = \\frac{16\\pi}{15}$.<br><br><strong>პასუხი:</strong> გ) $\\dfrac{16}{15}\\pi$.",
    area: "calculus",
    topics: ["definite-integral"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 24
  {
    question: "გამოთვალეთ $\\displaystyle\\int_0^\\pi x\\sin x\\,dx$ ინტეგრალი.",
    options: ["$\\dfrac{1}{2}\\pi$", "$\\dfrac{1}{3}\\pi$", "$0$", "$\\pi$", "$6\\pi$", "$9\\pi$"],
    correct: 3,
    tags: [],
    solution: "ნაწილობითი ინტეგრებით: $\\displaystyle\\int_0^\\pi x\\sin x\\,dx = \\big[-x\\cos x\\big]_0^\\pi + \\int_0^\\pi \\cos x\\,dx = \\pi + 0 = \\pi$.<br><br><strong>პასუხი:</strong> დ) $\\pi$.",
    area: "calculus",
    topics: ["definite-integral"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 25
  {
    question: "ჩამოთვლილთაგან რომელ შუალედში ექნება ფესვი ყველა იმ $x^2 + bx + c = 0$ სახის კვადრატულ განტოლებას, რომლის კოეფიციენტები აკმაყოფილებენ $2 + 3b + 6c = 0$ პირობას?",
    options: ["$(-\\infty;\\ -2)$", "$(-2;\\ -1)$", "$(0;\\ 1)$", "$(1;\\ 2)$", "$(2;\\ 3)$", "$(2;\\ +\\infty)$"],
    correct: 2,
    tags: [],
    solution: "$f(x) = x^2 + bx + c$. $\\displaystyle\\int_0^1 f(x)\\,dx = \\frac{1}{3} + \\frac{b}{2} + c = \\frac{2 + 3b + 6c}{6} = 0$.<br><br>უწყვეტი ფუნქციის ინტეგრალი $[0;\\ 1]$-ზე $0$-ია, ამიტომ $f$ ამ შუალედში ან ნიშანს იცვლის, ან ნულის ტოლია — ნებისმიერ შემთხვევაში ფესვი $(0;\\ 1)$-შია.<br><br><strong>პასუხი:</strong> გ) $(0;\\ 1)$.",
    area: "calculus",
    topics: ["definite-integral","quadratic-eq"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];
