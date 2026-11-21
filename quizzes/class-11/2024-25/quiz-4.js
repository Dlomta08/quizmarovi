quizData = [
  //1
  {
    question: "$a$-ს რა მნიშვნელობისათვის იქნება $ax - 6y + 3z - 1 = 0$ და $3x - 2y + z + 2a - 1 = 0$ განტოლებებით მოცემული სიბრტყეები ურთიერთმართობული?",
    options: ["$0{,}5$", "$\\frac{1}{2}$", "$\\frac{4}{3}$", "$-5$", "$-16$", "ასეთი $a$ არ არსებობს"],
    correct: 3,
    solution: "სიბრტყეები მართობულია, როცა ნორმალები მართობულია: $(a; -6; 3) \\cdot (3; -2; 1) = 3a + 12 + 3 = 0$, $a = -5$.<br><br><strong>პასუხი:</strong> დ) $-5$.",
    tags: [],
    area: "algebra",
    topics: [],
    grade: 11,
    difficulty: 1,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //2
  {
    question: "$f(x) = \\frac{16}{x} + x^2 + 1$, სადაც $x > 0$ ფუნქციის უმცირესი მნიშვნელობაა:",
    options: ["$1$", "$7$", "$13$", "$20$", "$27$", "$33$"],
    correct: 2,
    solution: "$f'(x) = -\\dfrac{16}{x^2} + 2x = 0$, $x^3 = 8$, $x = 2$ (აქ წარმოებული ნიშანს $-$-დან $+$-ზე იცვლის).<br><br>$f(2) = 8 + 4 + 1 = 13$.<br><br><strong>პასუხი:</strong> გ) $13$.",
    tags: [],
    area: "algebra",
    topics: ["quadratic-ineq","max-min","interval-method"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //3
  {
    question: "ქვემოთჩამოთვლილთაგან, რომელია იმ ჰიპერბოლის განტოლება, რომლის ასიმპტოტების განტოლებებია $y = 0{,}75x$ და $y = -0{,}75x$, ხოლო ფოკუსებს შორის მანძილია $2c = 30$?",
    options: [
      "$\\frac{x^2}{48} - \\frac{y^2}{64} = 1$",
      "$\\frac{x^2}{55} - \\frac{y^2}{76} = 1$",
      "$\\frac{x^2}{81} - \\frac{y^2}{25} = 1$",
      "$\\frac{x^2}{64} - \\frac{y^2}{16} = 1$",
      "$\\frac{x^2}{44} - \\frac{y^2}{61} = 1$",
      "$\\frac{x^2}{144} - \\frac{y^2}{81} = 1$"
    ],
    correct: 5,
    solution: "$\\dfrac{b}{a} = 0{,}75$, $c = 15$, $a^2 + b^2 = 225$: $a^2(1 + 0{,}5625) = 225$, $a = 12$, $b = 9$.<br><br>$\\dfrac{x^2}{144} - \\dfrac{y^2}{81} = 1$.<br><br><strong>პასუხი:</strong> ვ) $\\frac{x^2}{144} - \\frac{y^2}{81} = 1$.",
    tags: [],
    area: "calculus",
    topics: ["curve-sketching","conics"],
    grade: 11,
    difficulty: 1,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //4
  {
    question: "ცნობილია, რომ $f'(x) = \\frac{8x}{\\sqrt{2x^2+1}}$ და $f(0) = 5$. რისი ტოლია $f(2)$?",
    options: ["$21$", "$-1$", "$\\sqrt{3} + 3$", "$2 - \\sqrt{3}$", "$13$", "$10$"],
    correct: 4,
    solution: "$f(x) = 4\\sqrt{2x^2 + 1} + C$ (შემოწმება: $(\\sqrt{2x^2 + 1})' = \\dfrac{2x}{\\sqrt{2x^2 + 1}}$). $f(0) = 4 + C = 5$, $C = 1$.<br><br>$f(2) = 4 \\cdot 3 + 1 = 13$.<br><br><strong>პასუხი:</strong> ე) $13$.",
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
  //5
  {
    question: "თუ $f(x) = \\frac{\\ln 6x}{2x}$, ქვემოთჩამოთვლილთაგან, რომელია ამ ფუნქციის გრაფიკის გადაღუნვის წერტილის აბსცისა.",
    options: ["$e$", "$\\frac{e\\sqrt{e}}{6}$", "$\\frac{e^2}{3}$", "$\\ln 3$", "$\\ln 6$", "$0$"],
    correct: 1,
    solution: "$f'(x) = \\dfrac{1 - \\ln 6x}{2x^2}$, $f''(x) = \\dfrac{4\\ln 6x - 6}{4x^3}$.<br><br>$f'' = 0$ და ნიშანს იცვლის, როცა $\\ln 6x = \\dfrac{3}{2}$, $x = \\dfrac{e^{3/2}}{6} = \\dfrac{e\\sqrt{e}}{6}$.<br><br><strong>პასუხი:</strong> ბ) $\\frac{e\\sqrt{e}}{6}$.",
    tags: [],
    area: "calculus",
    topics: ["convexity","logarithms"],
    grade: 11,
    difficulty: 1,
    type: ["graph"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
    //6
  {
    question: "A$(1;2;1)$. $w$ სიბრტყის განტოლებაა $x + y + z = 0$. $B$ არის $A$ წერტილის სიმეტრიული $w$ სიბრტყის მიმართ. იპოვეთ $B$ წერტილის სამივე კოორდინატის ნამრავლი.",
    options: ["$-\\frac{3}{8}$", "$-\\frac{50}{27}$", "$\\frac{9}{4}$", "$\\frac{7}{9}$", "$\\frac{49}{64}$", "$-\\frac{13}{16}$"],
    correct: 1,
    solution: "$A$-ს მნიშვნელობა სიბრტყის განტოლებაში: $1 + 2 + 1 = 4$, ნორმალი $\\vec n(1; 1; 1)$, $|\\vec n|^2 = 3$.<br><br>$B = A - 2 \\cdot \\dfrac{4}{3}\\vec n = \\left(-\\dfrac{5}{3}; -\\dfrac{2}{3}; -\\dfrac{5}{3}\\right)$.<br><br>ნამრავლი: $-\\dfrac{50}{27}$.<br><br><strong>პასუხი:</strong> ბ) $-\\frac{50}{27}$.",
    tags: [],
    area: "algebra",
    topics: [],
    grade: 11,
    difficulty: 1,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //7
  {
    question: "$y = \\frac{1}{3}x^3 - 2x^2 - 4x + \\frac{31}{3}$ ფუნქციის გრაფიკზე მდებარეობს $A$ და $B$ წერტილები. ამ წერტილებზე გავლებულია ამ გრაფიკის მხებები, რომლებიც (თითოეული) $y = x + 199$ წრფის პარალელურია. $AB$ წრფის განტოლებაა:",
    options: ["$y = 7 - 5x$", "$y = 3x - 1$", "$y = 10 - 2x$", "$y = 3x + 22$", "$y = 4$", "$y = x + 9$"],
    correct: 0,
    solution: "$y' = x^2 - 4x - 4 = 1$, $x^2 - 4x - 5 = 0$, $x = 5$ ან $x = -1$.<br><br>$y(5) = \\dfrac{125}{3} - 50 - 20 + \\dfrac{31}{3} = -18$, $y(-1) = -\\dfrac{1}{3} - 2 + 4 + \\dfrac{31}{3} = 12$.<br><br>$AB$: კოეფიციენტი $\\dfrac{12 + 18}{-1 - 5} = -5$, $y = 7 - 5x$.<br><br><strong>პასუხი:</strong> ა) $y = 7 - 5x$.",
    tags: [],
    area: "geometry",
    topics: ["line-circle-eq","linear-func","chords-tangents"],
    grade: 11,
    difficulty: 1,
    type: ["graph"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //8
  {
    question: "$f''(x) = 36x - 10$. ცნობილია, რომ $f(0) = -3$ და $f(1) = 0$. რისი ტოლია $f(-1)$?",
    options: ["$-16$", "$7$", "$15$", "$-23$", "$-9$", "$1{,}5$"],
    correct: 0,
    solution: "$f'(x) = 18x^2 - 10x + C_1$, $f(x) = 6x^3 - 5x^2 + C_1x + C_2$. $f(0) = C_2 = -3$, $f(1) = 6 - 5 + C_1 - 3 = 0$, $C_1 = 2$.<br><br>$f(-1) = -6 - 5 - 2 - 3 = -16$.<br><br><strong>პასუხი:</strong> ა) $-16$.",
    tags: [],
    area: "algebra",
    topics: [],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //9
  {
    question: "მოცემულია $f(x) = 460 - \\frac{x^3}{300} - \\frac{8100}{x}$, სადაც $x > 0$. ამ ფუნქციის გრაფიკზე მდებარეობს $A$ წერტილი, რომელშიც გატარებული ამ ფუნქციის გრაფიკის მხები $x$ და $y$ ღერძებს კვეთს დადებით მხარეს. იპოვეთ $A$ წერტილის აბსცისის ყველა შესაძლო მნიშვნელობა.",
    options: ["$(0;30)$", "$(30;+\\infty)$", "$(60;+\\infty)$", "$(0;60)$", "$(90;+\\infty)$", "$(0;90)$"],
    correct: 1,
    solution: "მხები ორივე ღერძს დადებით ნაწილში კვეთს, როცა $f'(x_0) < 0$ და $Oy$-თან გადაკვეთა $b = f(x_0) - x_0f'(x_0) > 0$.<br><br>$f'(x) = -\\dfrac{x^2}{100} + \\dfrac{8100}{x^2} < 0 \\Leftrightarrow x^4 > 810000 \\Leftrightarrow x > 30$.<br><br>$b = 460 + \\dfrac{x_0^3}{150} - \\dfrac{16200}{x_0}$ — ზრდადია და $x_0 = 30$-ზე $b = 100 > 0$, ამიტომ $x_0 > 30$-ზე დადებითია.<br><br><strong>პასუხი:</strong> ბ) $(30;+\\infty)$.",
    tags: [],
    area: "geometry",
    topics: ["chords-tangents","cross-sections","linear-ineq"],
    grade: 11,
    difficulty: 1,
    type: ["graph"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //10
  {
    question: "$\\int_\\frac{\\pi}{6}^\\frac{\\pi}{2} 3\\sin^2 x \\cos x\\, dx$ =",
    options: ["$-1$", "$-\\frac{\\sqrt{3}}{2}$", "$-\\frac{1}{2}$", "$\\frac{1}{2}$", "$\\frac{7}{8}$", "$1$"],
    correct: 4,
    solution: "$\\int 3\\sin^2 x\\cos x\\,dx = \\sin^3 x$.<br><br>$\\sin^3\\dfrac{\\pi}{2} - \\sin^3\\dfrac{\\pi}{6} = 1 - \\dfrac{1}{8} = \\dfrac{7}{8}$.<br><br><strong>პასუხი:</strong> ე) $\\frac{7}{8}$.",
    tags: [],
    area: "calculus",
    topics: ["definite-integral"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //11
  {
    question: "$A(1;2;-1)$, $B(3;-2;1)$, $C(1;0;1)$, $D(2;2;2)$, $E(-1;4;-1)$, $K(0;0;3)$. $D$, $E$ და $K$ წერტილებიდან, რომელი მდებარეობს $ABC$ სიბრტყეზე?",
    options: ["არცერთი", "მხოლოდ $D$", "მხოლოდ $E$", "მხოლოდ $K$", "მხოლოდ $E$ და $K$", "მხოლოდ $D$ და $K$"],
    correct: 2,
    solution: "$\\vec{AB} = (2; -4; 2)$, $\\vec{AC} = (0; -2; 2)$, $\\vec{AB} \\times \\vec{AC} = (-4; -4; -4) \\parallel (1; 1; 1)$. სიბრტყე: $x + y + z = 2$.<br><br>$D$: $6$; $E$: $-1 + 4 - 1 = 2$ ✓; $K$: $3$.<br><br><strong>პასუხი:</strong> გ) მხოლოდ $E$.",
    tags: [],
    area: "algebra",
    topics: [],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //12
  {
    question: "$x + 2y - 2z - 3 = 0$ და $2x - y + 2z + 3 = 0$ ფორმულებით მოცემულ სიბრტყეებს შორის კუთხეა:",
    options: ["$15^\\circ$", "$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$90^\\circ$", "არცერთი წინა პასუხი არ არის სწორი"],
    correct: 5,
    solution: "ნორმალები $(1; 2; -2)$ და $(2; -1; 2)$, სიგრძეები $3$. $|\\cos\\varphi| = \\dfrac{|2 - 2 - 4|}{9} = \\dfrac{4}{9}$.<br><br>$\\varphi = \\arccos\\dfrac{4}{9} \\approx 63{,}6^\\circ$ — ჩამოთვლილ კუთხეებს შორის არ არის.<br><br><strong>პასუხი:</strong> ვ) არცერთი წინა პასუხი არ არის სწორი.",
    tags: [],
    area: "solid",
    topics: ["angles-space"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //13
  {
    question: "$y^2 = -12x$ ფორმულით მოცემული პარაბოლის დირექტრისისა და $y = 5x + 1$ ფორმულით მოცემული წრფის გადაკვეთის წერტილის კოორდინატების ჯამი ტოლია:",
    options: ["$-11$", "$27$", "$15$", "$-9$", "$19$", "$16$"],
    correct: 4,
    solution: "$y^2 = -2px$-ში $2p = 12$, $\\dfrac{p}{2} = 3$: დირექტრისა $x = 3$.<br><br>$y = 5 \\cdot 3 + 1 = 16$, ჯამი $3 + 16 = 19$.<br><br><strong>პასუხი:</strong> ე) $19$.",
    tags: [],
    area: "geometry",
    topics: ["conics","linear-func","quadratic-func"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: ["coordinates"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //14
  {
    question: "ქვემოთჩამოთვლილთაგან, რომელი მახასიათებელი არის საერთო როგორც ელიფსისთვის, ასევე ჰიპერბოლისთვისა და პარაბოლისთვის?",
    options: [
      "თითოეულ მათგანს აქვს ორი ფოკუსი",
      "თითოეულ მათგანს კვეთს დირექტრისა",
      "თითოეული მათგანის ექსცენტრისიტეტი ცვლადია",
      "თითოეული მათგანი შეიძლება განისაზღვროს არსებული ფოკუსებითა და დირექტრისით",
      "თითოეულ მათგანს აქვს ასიმპტოტი",
      "ყველა წინა პასუხი მცდარია"
    ],
    correct: 3,
    solution: "ელიფსი, ჰიპერბოლა და პარაბოლა არის იმ წერტილების სიმრავლე, რომელთა ფოკუსამდე და დირექტრისამდე მანძილების შეფარდება მუდმივია (ექსცენტრისიტეტი $e$: $e < 1$, $e > 1$, $e = 1$).<br><br>დანარჩენი თვისებები ყველასთვის არ სრულდება (მაგ. პარაბოლას ერთი ფოკუსი და ასიმპტოტის გარეშეა).<br><br><strong>პასუხი:</strong> დ) თითოეული მათგანი შეიძლება განისაზღვროს არსებული ფოკუსებითა და დირექტრისით.",
    tags: [],
    area: "geometry",
    topics: ["conics","quadratic-func","curve-sketching"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //15
  {
    question: "ქვემოთჩამოთვლილთაგან, რომელია $y = x - \\frac{2}{x} + \\frac{1}{x^3}$ ფუნქციის გრაფიკის ასიმპტოტის ფორმულა?",
    options: ["$y = x$", "$y = x + 1$", "$y = 1$", "$y = x + 2$", "$y = 2x - 1$", "$y = 1 - 2x$"],
    correct: 0,
    solution: "$x \\to \\pm\\infty$-ზე $-\\dfrac{2}{x} + \\dfrac{1}{x^3} \\to 0$, ამიტომ დახრილი ასიმპტოტია $y = x$ (ვერტიკალური — $x = 0$).<br><br><strong>პასუხი:</strong> ა) $y = x$.",
    tags: [],
    area: "calculus",
    topics: ["curve-sketching"],
    grade: 11,
    difficulty: 2,
    type: ["graph"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //16
  {
    question: "ქვემოთჩამოთვლილთაგან, რომელ შუალედშია $y = x - \\frac{2}{x} + \\frac{1}{x^3}$ ფუნქცია კლებადი?",
    options: ["$(-\\infty; 0)$", "$(0; \\sqrt{2}]$", "$[−3; 1]$", "$(0; 1]$", "$[1; +\\infty)$", "$(−∞; −3]$"],
    correct: 3,
    solution: "$y' = 1 + \\dfrac{2}{x^2} - \\dfrac{3}{x^4} = \\dfrac{x^4 + 2x^2 - 3}{x^4} = \\dfrac{(x^2 + 3)(x^2 - 1)}{x^4}$.<br><br>$y' < 0$, როცა $x^2 < 1$, $x \\ne 0$: ფუნქცია კლებადია $[-1; 0)$-ზე და $(0; 1]$-ზე.<br><br><strong>პასუხი:</strong> დ) $(0; 1]$.",
    tags: [],
    area: "algebra",
    topics: ["function-props"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //17
  {
    question: "იპოვეთ $y^2 = 4 - x$ და $y^2 = 12 + 3x$ ფორმულებით მოცემულ წირებს შორის მოქცეული ფიგურის ფართობი.",
    options: ["$30$", "$20\\sqrt{2}$", "$\\frac{32\\sqrt{6}}{3}$", "$\\frac{15\\sqrt{5}}{2}$", "$\\frac{142}{7}$", "$21 + 2\\sqrt{5}$"],
    correct: 2,
    solution: "გადაკვეთა: $4 - x = 12 + 3x$, $x = -2$, $y = \\pm\\sqrt{6}$. $y$-ის მიხედვით: მარჯვენა წირი $x = 4 - y^2$, მარცხენა $x = \\dfrac{y^2 - 12}{3}$.<br><br>$S = \\int_{-\\sqrt{6}}^{\\sqrt{6}}\\left(8 - \\dfrac{4y^2}{3}\\right)dy = 2\\left(8\\sqrt{6} - \\dfrac{4 \\cdot 6\\sqrt{6}}{9}\\right) = \\dfrac{32\\sqrt{6}}{3}$.<br><br><strong>პასუხი:</strong> გ) $\\frac{32\\sqrt{6}}{3}$.",
    tags: [],
    area: "geometry",
    topics: ["area-formulas"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //18
  {
    question: "ცნობილია, რომ $f''(x) = 3(x+1)^3(x-2)(x-4)^2$. მოცემულია სამი წინადადება:\nI. ამ ფუნქციას აქვს გადაღუნვის წერტილი $x = 2$ თვის.\nII. ამ ფუნქციას აქვს გადაღუნვის წერტილი $x = 4$ თვის.\nIII. ამ ფუნქციას აქვს ლოკალური მაქსიმუმის წერტილი $x = -1$ თვის.\nქვემოთჩამოთვლილთაგან, რომელია აუცილებლად ჭეშმარიტი $y = f(x)$ ფუნქციისთვის?",
    options: [
      "მხოლოდ I",
      "მხოლოდ II",
      "მხოლოდ III",
      "მხოლოდ I და II",
      "მხოლოდ I და III",
      "მხოლოდ II და III"
    ],
    correct: 0,
    solution: "I. $x = 2$-ზე $(x - 2)$ პირველ ხარისხშია — $f''$ ნიშანს იცვლის, გადაღუნვის წერტილია.<br>II. $x = 4$-ზე $(x - 4)^2$ — ნიშანი არ იცვლება, გადაღუნვა არ არის.<br>III. $x = -1$-ზე ექსტრემუმისთვის $f'(-1) = 0$ უნდა იყოს, რაც მოცემული არ არის (იქ მხოლოდ გადაღუნვაა).<br><br><strong>პასუხი:</strong> ა) მხოლოდ I.",
    tags: [],
    area: "calculus",
    topics: ["monotonic-extrema","convexity"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //19
  {
    question: "ცნობილია, რომ $y = 6x^2$ ფუნქციის გრაფიკსა და $Ox$ ღერძს შორის მდებარე ფიგურის ფართობია $S$, სადაც $-a \\leq x \\leq a$. ქვემოთჩამოთვლილთაგან, რისი ტოლია $S$, თუ ცნობილია, რომ $a$ ნატურალური რიცხვია?",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 3,
    solution: "$S = \\int_{-a}^{a}6x^2\\,dx = 4a^3$. ნატურალურ $a$-ზე: $4, 32, \\ldots$ — ჩამოთვლილთაგან $4$ ($a = 1$).<br><br><strong>პასუხი:</strong> დ) $4$.",
    tags: [],
    area: "algebra",
    topics: ["quadratic-ineq","quadratic-func"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //20
  {
    question: "$f(w) = \\int_1^w \\sqrt{x^3 + 2}\\, dx$. იპოვეთ $f'(2)$. ",
    options: ["$3\\sqrt{2}$", "$3\\sqrt{2} - \\sqrt{3}$", "$0{,}6\\sqrt{10}$", "$\\sqrt{10} - \\sqrt{3}$", "$\\sqrt{10}$", "$\\sqrt{3} + \\sqrt{2}$"],
    correct: 4,
    solution: "ზედა საზღვრით ინტეგრალის წარმოებული ინტეგრალქვეშა ფუნქციაა: $f'(w) = \\sqrt{w^3 + 2}$.<br><br>$f'(2) = \\sqrt{10}$.<br><br><strong>პასუხი:</strong> ე) $\\sqrt{10}$.",
    tags: [],
    area: "calculus",
    topics: ["definite-integral","derivative"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //21
  {
    question: "$\\frac{x^2}{9} + \\frac{y^2}{16} = 1$ ტოლობით მოცემული ელიფსის ფოკუსის კოორდინატებია $F(m; c)$. რისი ტოლია $10 + m^2 - c^2$?",
    options: ["$11$", "$17$", "$12$", "$35$", "$-15$", "$3$"],
    correct: 5,
    solution: "$16 > 9$, ამიტომ ფოკუსები $Oy$-ზეა: $c^2 = 16 - 9 = 7$, $F(0; \\pm\\sqrt{7})$.<br><br>$10 + 0 - 7 = 3$.<br><br><strong>პასუხი:</strong> ვ) $3$.",
    tags: [],
    area: "geometry",
    topics: ["conics"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: ["coordinates"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //22
  {
    question: "$y = f(x)$ არის $\\mathbb{R}$-ზე განსაზღვრული და განსაზღვრის არეში ყველგან დიფერენცირებადი (წარმოებადი) ფუნქცია. ცნობილია, რომ $f(2) = 2$, $f'(2) = 1$ და $f''(2) = 3$. $g(x) = (x(f(x))'$. რისი ტოლია $\\int_0^2 xf(x)g(x)\\,dx$.",
    options: ["$1$", "$3$", "$4$", "$5$", "$6$", "$8$"],
    correct: 5,
    solution: "$g(x) = (xf(x))'$, ამიტომ $xf(x)g(x) = u\\,u'$, სადაც $u = xf(x)$.<br><br>$\\int_0^2 u\\,u'\\,dx = \\dfrac{u^2}{2}\\Big|_0^2 = \\dfrac{(2f(2))^2}{2} = 8$.<br><br><strong>პასუხი:</strong> ვ) $8$.",
    tags: [],
    area: "calculus",
    topics: ["definite-integral","derivative","function-basics"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //23
  {
    question: "$\\frac{x^2}{32} - \\frac{y^2}{18} = 1$ განტოლებით მოცემულ ჰიპერბოლაზე აღებულია $A$ და $B$ წერტილები ისე, რომ ისინი სიმეტრიულია კოორდინატთა სათავის მიმართ. $A$ და $B$ წერტილებზე გავლებული ჰიპერბოლას მხებები (თითოეული) $9x - 4y + 11 = 0$ წრფის პარალელურია. რისი ტოლია $AB$-ს სიგრძე?",
    options: ["$4$", "$4\\sqrt{23}$", "$3\\sqrt{17}$", "$5\\sqrt{15}$", "$10\\sqrt{11}$", "$12\\sqrt{3}$"],
    correct: 2,
    solution: "$(x_0; y_0)$-ში მხები: $\\dfrac{xx_0}{32} - \\dfrac{yy_0}{18} = 1$, კოეფიციენტი $\\dfrac{9x_0}{16y_0} = \\dfrac{9}{4}$, $x_0 = 4y_0$.<br><br>$\\dfrac{16y_0^2}{32} - \\dfrac{y_0^2}{18} = 1$, $y_0^2 = \\dfrac{9}{4}$: $A(6; 1{,}5)$, $B(-6; -1{,}5)$.<br><br>$AB = 2\\sqrt{36 + 2{,}25} = \\sqrt{153} = 3\\sqrt{17}$.<br><br><strong>პასუხი:</strong> გ) $3\\sqrt{17}$.",
    tags: [],
    area: "geometry",
    topics: ["conics","chords-tangents","quadratic-eq"],
    grade: 11,
    difficulty: 3,
    type: ["solve"],
    method: ["coordinates"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //24
  {
    question: "რა მაქსიმალური მნიშვნელობა შეიძლება მიიღოს $\\frac{x^2}{16} + \\frac{y^2}{2} = 1$ ელიფსზე მდებარე წერტილის აბსცისისა და ორდინატის კვადრატის ჯამმა (იგულისხმება აბსცისას დამატებული ორიდნატის კვადრატი)?",
    options: ["$3$", "$4$", "$6$", "$7$", "$8$", "$11$"],
    correct: 1,
    solution: "$y^2 = 2 - \\dfrac{x^2}{8}$, $x + y^2 = 2 + x - \\dfrac{x^2}{8}$, $x \\in [-4; 4]$.<br><br>პარაბოლის წვერო $x = 4$-ზეა: $2 + 4 - 2 = 4$.<br><br><strong>პასუხი:</strong> ბ) $4$.",
    tags: [],
    area: "geometry",
    topics: ["conics","max-min","rhombus-rect-sq"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //25
  {
    question: "მოცემულია $f(x) = e^{2x} - 6e^x + 5$, სადაც $x$ ნებისმიერია და $g(x) = e^{2x} - 6e^x + 5$, სადაც $x \\leq a$. იპოვეთ $a$-ს მინიმალური შესაძლო მნიშვნელობა, რომლისთვისაც $f$ და $g$ ფუნქციების მინიმალური მნიშვნელობები ტოლია.",
    options: ["$5$", "$2$", "$\\ln 3$", "$3$", "$\\ln 2$", "არ არსებობს მინიმალური $a$"],
    correct: 2,
    solution: "$f(x) = (e^x - 3)^2 - 4$, მინიმუმი $-4$ მიიღწევა $x = \\ln 3$-ზე.<br><br>$g$-ს მინიმუმიც $-4$ რომ იყოს, $\\ln 3$ უნდა ეკუთვნოდეს $(-\\infty; a]$-ს: $a \\ge \\ln 3$. მინიმალური $a = \\ln 3$.<br><br><strong>პასუხი:</strong> გ) $\\ln 3$.",
    tags: [],
    area: "algebra",
    topics: ["exp-ineq","max-min"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];
