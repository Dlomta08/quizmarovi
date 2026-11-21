quizData = [
  //1
  {
    question: "იპოვეთ $(2x^3 + \\frac{x^2}{2})^{11}$ დაშლის მე-$6$ შესაკრები (წევრი).",
    options: [
      "$2C_{11}^5 x^{28}$",
      "$C_{11}^5 x^{24}$",
      "$4C_{11}^5 x^{28}$",
      "$2C_{11}^5 x^{22}$",
      "$C_{11}^5 x^{32}$",
      "$2C_{11}^5 x^{34}$"
    ],
    correct: 0,
    solution: "$T_6 = C_{11}^5 (2x^3)^6 \\left(\\dfrac{x^2}{2}\\right)^5 = C_{11}^5 \\cdot 64x^{18} \\cdot \\dfrac{x^{10}}{32} = 2C_{11}^5x^{28}$.<br><br><strong>პასუხი:</strong> ა) $2C_{11}^5 x^{28}$.",
    tags: [],
    area: "prob-stats",
    topics: ["combinatorics"],
    grade: 10,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //2
  {
    question: "ამოხსენით უტოლობა $\\sqrt{5 - x} > \\sqrt{2x - 1}$.",
    options: [
      "$(1 ; 5)$",
      "$[2; 5)$",
      "$[0{,}5; 2)$",
      "$[0{,}5; 2]$",
      "$(-1; 5)$",
      "$(-1; 0{,}5)$"
    ],
    correct: 2,
    solution: "განსაზღვრის არე: $\\dfrac{1}{2} \\le x \\le 5$. ორივე მხარე არაუარყოფითია, კვადრატში: $5 - x > 2x - 1$, $x < 2$.<br><br>$x \\in [0{,}5; 2)$.<br><br><strong>პასუხი:</strong> გ) $[0{,}5; 2)$.",
    tags: [],
    area: "algebra",
    topics: ["square-roots"],
    grade: 10,
    difficulty: 1,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //3
  {
    question: "იპოვეთ $(\\sqrt{x} + \\sqrt[4]{x})^{20}$ დაშლის იმ წევრის ნომერი, რომელიც შეიცავს $x^8$ წევრს.",
    options: ["$7$", "$12$", "$6$", "$16$", "$5$", "$9$"],
    correct: 5,
    solution: "$T_{k+1} = C_{20}^k (\\sqrt{x})^{20 - k}(\\sqrt[4]{x})^k$, $x$-ის ხარისხი: $\\dfrac{20 - k}{2} + \\dfrac{k}{4} = 10 - \\dfrac{k}{4} = 8$, $k = 8$.<br><br>წევრის ნომერი: $k + 1 = 9$.<br><br><strong>პასუხი:</strong> ვ) $9$.",
    tags: [],
    area: "algebra",
    topics: ["nth-roots"],
    grade: 10,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //4
  {
    question: "იპოვეთ $n$, თუ $\\vec{a} = (n;−2; 1)$ და $\\vec{b} = (5; 3n − 5;−7)$ ვექტორები მართობულია.",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 2,
    solution: "$\\vec a \\cdot \\vec b = 5n - 2(3n - 5) - 7 = 3 - n = 0$, $n = 3$.<br><br><strong>პასუხი:</strong> გ) $3$.",
    tags: [],
    area: "geometry",
    topics: ["vectors"],
    grade: 10,
    difficulty: 1,
    type: ["compute"],
    method: ["vectors","coordinates"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //5
  {
    question: "მოცემულია $\\vec{a} = (3m − n; n − 2m; 6)$ და $\\vec{b} = (n − 4m; 3; c)$ ტოლი ვექტორები. იპოვეთ $m + n + c$.",
    options: ["$11$", "$2$", "$9$", "$15$", "$5$", "$20$"],
    correct: 3,
    solution: "ტოლ ვექტორებს ტოლი კოორდინატები აქვთ: $3m - n = n - 4m$, $n - 2m = 3$, $c = 6$.<br><br>$7m = 2n$ და $n = 2m + 3$: $3m = 6$, $m = 2$, $n = 7$.<br><br>$m + n + c = 15$.<br><br><strong>პასუხი:</strong> დ) $15$.",
    tags: [],
    area: "geometry",
    topics: ["vectors"],
    grade: 10,
    difficulty: 1,
    type: ["compute"],
    method: ["vectors"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //6
  {
    question: "სამ მოსწავლეს დაუბრუნეს ერთ ყუთში ჩადებული თავიანთი სამი მობილური. მათ შემთხვევით ამოიღეს ისინი. რა არის ალბათობა იმისა, რომ არცერთს არ შეხვდებოდა თავისი მობილური?",
    options: [
      "$\\frac{1}{6}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$",
      "$\\frac{2}{5}$",
      "$\\frac{1}{4}$"
    ],
    correct: 1,
    solution: "სამი მობილურის $3! = 6$ განაწილებიდან არცერთი ფიქსირებული წერტილის გარეშეა მხოლოდ $2$ (ციკლური გადანაცვლებები).<br><br>$P = \\dfrac{2}{6} = \\dfrac{1}{3}$.<br><br><strong>პასუხი:</strong> ბ) $\\frac{1}{3}$.",
    tags: [],
    area: "prob-stats",
    topics: ["probability"],
    grade: 10,
    difficulty: 1,
    type: ["word"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //7
  {
    question: "იპოვეთ $\\alpha$ პარამეტრის ყველა მნიშვნელობა, რომელთათვისაც $3\\sin x + 4\\cos x = \\sin\\alpha + \\frac{9}{2}$ განტოლებას ექნება ამონახსნი. (სავარაუდო პასუხებში ყველგან $n \\in \\mathbb{Z}$)",
    options: [
      "$\\frac{\\pi}{6} + 2\\pi n \\leq \\alpha \\leq \\frac{5\\pi}{6} + 2\\pi n$",
      "$\\frac{\\pi}{3} + 2\\pi n \\leq \\alpha \\leq \\frac{4\\pi}{3} + 2\\pi n$",
      "$\\frac{\\pi}{6} + 2\\pi n \\leq \\alpha \\leq \\frac{7\\pi}{6} + 2\\pi n$",
      "$\\frac{2\\pi}{3} + \\pi n \\leq \\alpha \\leq \\frac{\\pi}{6} + 2\\pi n$",
      "$\\frac{5\\pi}{6} + 2\\pi n \\leq \\alpha \\leq \\frac{13\\pi}{6} + 2\\pi n$",
      "$\\frac{\\pi}{2} + \\pi n \\leq \\alpha \\leq \\frac{11\\pi}{6} + 2\\pi n$"
    ],
    correct: 4,
    solution: "$3\\sin x + 4\\cos x$ ღებულობს $[-5; 5]$-ის მნიშვნელობებს. ამონახსნი არსებობს, როცა $\\sin\\alpha + \\dfrac{9}{2} \\le 5$, ანუ $\\sin\\alpha \\le \\dfrac{1}{2}$ (ქვედა საზღვარი ყოველთვის სრულდება).<br><br>$\\alpha \\in \\left[\\dfrac{5\\pi}{6} + 2\\pi n; \\dfrac{13\\pi}{6} + 2\\pi n\\right]$.<br><br><strong>პასუხი:</strong> ე) $\\frac{5\\pi}{6} + 2\\pi n \\leq \\alpha \\leq \\frac{13\\pi}{6} + 2\\pi n$.",
    tags: [],
    area: "algebra",
    topics: ["trig-eq"],
    grade: 10,
    difficulty: 1,
    type: ["solve"],
    method: ["parameter"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //8
  {
    question: "ჩამოთვლილთაგან რომელი შუალედის ყოველი მნიშვნელობისთვისაა სამართლიანი $\\sin x > \\cos x$ უტოლობა?",
    options: [
      "$[\\pi; \\frac{5\\pi}{4}]$",
      "$[\\frac{5\\pi}{14}; \\frac{2\\pi}{3}]$",
      "$[\\frac{\\pi}{6}; \\frac{\\pi}{4}]$",
      "$[\\frac{\\pi}{16}; \\frac{3\\pi}{4}]$",
      "$[−\\pi; \\frac{\\pi}{2}]$",
      "$[−\\frac{\\pi}{2}; \\frac{7\\pi}{15}]$"
    ],
    correct: 1,
    solution: "$\\sin x - \\cos x = \\sqrt{2}\\sin\\left(x - \\dfrac{\\pi}{4}\\right) > 0 \\Leftrightarrow x \\in \\left(\\dfrac{\\pi}{4} + 2\\pi n; \\dfrac{5\\pi}{4} + 2\\pi n\\right)$.<br><br>$\\left[\\dfrac{5\\pi}{14}; \\dfrac{2\\pi}{3}\\right]$ მთლიანად ამ შუალედშია ($\\dfrac{5}{14} > \\dfrac{1}{4}$, $\\dfrac{2}{3} < \\dfrac{5}{4}$).<br><br><strong>პასუხი:</strong> ბ) $[\\frac{5\\pi}{14}; \\frac{2\\pi}{3}]$.",
    tags: [],
    area: "algebra",
    topics: ["trig-ineq"],
    grade: 10,
    difficulty: 1,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //9
  {
    question: "იპოვეთ $m + n$, თუ $\\vec{a} = (n − 2; 3; 6)$ და $\\vec{b} = (4; m + 3; 2)$ ვექტორები კოლენიალურია.",
    options: ["$12$", "$5$", "$15$", "$7$", "$11$", "$17$"],
    correct: 0,
    solution: "კოლინეარობა: $\\dfrac{n - 2}{4} = \\dfrac{3}{m + 3} = \\dfrac{6}{2} = 3$.<br><br>$n - 2 = 12$, $n = 14$; $m + 3 = 1$, $m = -2$. $m + n = 12$.<br><br><strong>პასუხი:</strong> ა) $12$.",
    tags: [],
    area: "geometry",
    topics: ["vectors"],
    grade: 10,
    difficulty: 1,
    type: ["compute"],
    method: ["vectors"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //10
  {
    question: "$\\vec{a}$ ვექტორი, რომელიც $\\vec{b} = (12;−16;−15)$ ვექტორის კოლენიალურია, $\\vec{c} = (0; 0; 11)$ ვექტორთან ქმნის მახვილ კუთხეს. იპოვეთ $\\vec{a}$ ვექტორის კოორდინატების ჯამი, თუ $|\\vec{a}| = 25$.",
    options: ["$-19$", "$19$", "$-23$", "$23$", "$-43$", "$43$"],
    correct: 1,
    solution: "$|\\vec b| = \\sqrt{144 + 256 + 225} = 25$, ამიტომ $\\vec a = \\pm\\vec b$.<br><br>მახვილი კუთხე $\\vec c$-სთან ნიშნავს $a_z > 0$-ს: $\\vec a = -\\vec b = (-12; 16; 15)$.<br><br>ჯამი: $19$.<br><br><strong>პასუხი:</strong> ბ) $19$.",
    tags: [],
    area: "geometry",
    topics: ["vectors"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: ["vectors","coordinates"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //11
  {
    question: "იპოვეთ ალბათობა იმისა, რომ შემთხვევით შერჩეული ნამდვილი $a \\in [-3; 7]$ რიცხვისათვის $\\sqrt{x - 3} = a$ განტოლების ფესვი არ აღემატება $12$-ს.",
    options: ["$0{,}3$", "$0{,}6$", "$0{,}9$", "$0{,}25$", "$0{,}5$", "$0{,}75$"],
    correct: 0,
    solution: "$a < 0$-ზე ფესვი არ არის; $a \\ge 0$-ზე $x = a^2 + 3 \\le 12 \\Leftrightarrow a \\le 3$.<br><br>ხელსაყრელი შუალედი $[0; 3]$ (სიგრძე $3$), მთელი $[-3; 7]$ (სიგრძე $10$): $P = 0{,}3$.<br><br><strong>პასუხი:</strong> ა) $0{,}3$.",
    tags: [],
    area: "prob-stats",
    topics: ["probability"],
    grade: 10,
    difficulty: 2,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //12
  {
    question: "ჩამოთვლილთაგან შეარჩიეთ შუალედი, რომლის ნებისმიერი მნიშვნელობისათვის სრულდება $4 \\cos x − \\sin 2x > 0$ უტოლობა.",
    options: [
      "$[0; \\pi]$",
      "$[\\frac{\\pi}{6}; \\frac{2\\pi}{3}]$",
      "$[−\\frac{\\pi}{6}; \\frac{2\\pi}{3}]$",
      "$[\\frac{5\\pi}{6}; \\frac{4\\pi}{3}]$",
      "$[−\\frac{2\\pi}{3}; −\\frac{\\pi}{3}]$",
      "$[−\\frac{2\\pi}{5}; \\frac{3\\pi}{7}]$"
    ],
    correct: 5,
    solution: "$4\\cos x - \\sin 2x = 2\\cos x(2 - \\sin x)$, ხოლო $2 - \\sin x > 0$. ამიტომ უტოლობა $\\Leftrightarrow \\cos x > 0$.<br><br>$\\left[-\\dfrac{2\\pi}{5}; \\dfrac{3\\pi}{7}\\right] \\subset \\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$.<br><br><strong>პასუხი:</strong> ვ) $[−\\frac{2\\pi}{5}; \\frac{3\\pi}{7}]$.",
    tags: [],
    area: "algebra",
    topics: ["trig-ineq","sum-formulas"],
    grade: 10,
    difficulty: 2,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //13
  {
    question: "იპოვეთ $(1 + x)^7 + (1 + x)^8 + (1 + x)^9$ გამოსახულების სტანდარტული სახით წარმოდგენისას $x^7$ წევრის კოეფიციენტი.",
    options: ["$1$", "$12$", "$24$", "$36$", "$45$", "$63$"],
    correct: 4,
    solution: "$x^7$-ის კოეფიციენტი: $C_7^7 + C_8^7 + C_9^7 = 1 + 8 + 36 = 45$.<br><br><strong>პასუხი:</strong> ე) $45$.",
    tags: [],
    area: "algebra",
    topics: [],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //14
  {
    question: "წესიერი წაკვეთილი ოთკუთხა პირამიდის ფუძეების ცენტრების შემაერთებელ წრფეზე გავლებული სიბრტყე პირამიდის ფუძეების წიბოებს მართი კუთხით გადაკვეთს. მიღებულ კვეთაში ჩახაზულია $R = 2$ რადიუსის მქონე წრეწირი. იპოვეთ პირამიდის ზედაპირის ფართობი, თუ პირამიდის აპოთემაა $5$.",
    options: ["$96$", "$120$", "$125$", "$144$", "$168$", "$172$"],
    correct: 4,
    solution: "კვეთა ტოლფერდა ტრაპეციაა: ფუძეები $a$, $b$ (პირამიდის ფუძეების გვერდები), ფერდები — აპოთემა $5$. ჩახაზული წრეწირის გამო სიმაღლე $2R = 4$ და $a + b = 2 \\cdot 5 = 10$.<br><br>$\\dfrac{a - b}{2} = \\sqrt{25 - 16} = 3$: $a = 8$, $b = 2$.<br><br>$S = 64 + 4 + 4 \\cdot \\dfrac{8 + 2}{2} \\cdot 5 = 168$.<br><br><strong>პასუხი:</strong> ე) $168$.",
    tags: [],
    area: "solid",
    topics: ["pyramid"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //15
  {
    question: "იპოვეთ $\\vec{a} \\cdot \\vec{c}$, თუ $\\vec{a} = (2; 3; 1)$, ხოლო $\\vec{c} = \\vec{b} \\times \\vec{d}$, სადაც $\\vec{b} = (1;−1; 2)$ და $\\vec{d} = (1; 2; 1)$.",
    options: ["$-4$", "$-2$", "$-1$", "$3$", "$7$", "$9$"],
    correct: 0,
    solution: "$\\vec b \\times \\vec d = \\left((-1) \\cdot 1 - 2 \\cdot 2;\\ 2 \\cdot 1 - 1 \\cdot 1;\\ 1 \\cdot 2 - (-1) \\cdot 1\\right) = (-5; 1; 3)$.<br><br>$\\vec a \\cdot \\vec c = -10 + 3 + 3 = -4$.<br><br><strong>პასუხი:</strong> ა) $-4$.",
    tags: [],
    area: "geometry",
    topics: ["vectors"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: ["vectors","coordinates"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //16
  {
    question: "ორი მოთამაშე მორიგეობით აგდებს კამათელს, მოგებულია ის ვისაც პირველად მოუვა რიცხვი $5$. იპოვეთ ალბათობა იმისა, რომ დამწყები მოიგებს.",
    options: [
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$",
      "$\\frac{6}{11}$",
      "$\\frac{5}{12}$",
      "$\\frac{1}{3}$",
      "$\\frac{3}{5}$"
    ],
    correct: 2,
    solution: "დამწყები იგებს პირველ, მესამე, ... სვლაზე: $P = \\dfrac{1}{6} + \\left(\\dfrac{5}{6}\\right)^2\\dfrac{1}{6} + \\ldots = \\dfrac{1/6}{1 - 25/36} = \\dfrac{6}{11}$.<br><br><strong>პასუხი:</strong> გ) $\\frac{6}{11}$.",
    tags: [],
    area: "prob-stats",
    topics: ["probability"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //17
  {
    warning: "ყველა პასუხი ჩათვლილია",
    question: "იპოვეთ $x$, თუ სამართლიანია $\\sqrt{4 - x^2} \\leq \\sin y + \\frac{1}{\\sin y}$ უტოლობა.",
    options: ["$0$", "$1$", "$\\frac{1}{\\pi}$", "$(−1; 1)$", "$(−2; 0)$", "$(−2; 2)$"],
    correct: [0,1,2,3,4,5],
    solution: "<strong>ამ ამოცანაში ყველა პასუხი ჩაითვალა სწორად.</strong><br><br>თუ $\\sin y > 0$, მარჯვენა მხარე $\\ge 2 \\ge \\sqrt{4 - x^2}$ — უტოლობა სრულდება ნებისმიერ $x \\in [-2; 2]$-ზე; თუ $\\sin y < 0$, მარჯვენა მხარე უარყოფითია და ამონახსნი არ არის.<br><br>ამიტომ $x$ ცალსახად არ განისაზღვრება: გამოდგება $[-2; 2]$-ის ნებისმიერი მნიშვნელობა, ხოლო ყველა ვარიანტი ამ შუალედს ეკუთვნის.",
    tags: [],
    area: "algebra",
    topics: ["trig-ineq"],
    grade: 10,
    difficulty: 2,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //18
  {
    question: "იპოვეთ $(x^2 − x) = \\sqrt{x^2 − x + 2}$ განტოლების ყველა ამონახსნთა ჯამი.",
    options: ["$5$", "$-2$", "$1$", "$6$", "$-4$", "$8$"],
    correct: 2,
    solution: "$t = x^2 - x$, $t \\ge 0$: $t = \\sqrt{t + 2}$, $t^2 - t - 2 = 0$, $t = 2$ ($t = -1$ არ გამოდგება).<br><br>$x^2 - x - 2 = 0$: $x = 2$ ან $x = -1$, ჯამი $1$.<br><br><strong>პასუხი:</strong> გ) $1$.",
    tags: [],
    area: "algebra",
    topics: ["quadratic-eq"],
    grade: 10,
    difficulty: 3,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //19
  {
    question: "მოცემულია ორი $\\vec{a} = (1;−2; 1)$ და $\\vec{b} = (5;−2;−1)$ ვექტორი. ჩამოთვლილთაგან $\\vec{d} = (2;1;3)$, $\\vec{e} = (4;2;6)$, $\\vec{f} = (8;4;12)$, $\\vec{k} = (1;2;-2)$, რომელი ვექტორი უნდა ავიღოთ მესამე ვექტორად, რომ სამეული იყოს კომპლანარული ვექტორები?",
    options: ["მხოლოდ $\\vec{d}$", "მხოლოდ $\\vec{e}$", "მხოლოდ $\\vec{f}$", "მხოლოდ $\\vec{k}$", "მხოლოდ $\\vec{d}$ და $\\vec{e}$", "მხოლოდ $\\vec{e}$ და $\\vec{k}$"],
    correct: 3,
    solution: "$\\vec a \\times \\vec b = (2 + 2;\\ 5 + 1;\\ -2 + 10) = (4; 6; 8)$. ვექტორი $\\vec a$, $\\vec b$-სთან კომპლანარულია, როცა ამ ნორმალის მართობულია.<br><br>$\\vec d$: $8 + 6 + 24 = 38 \\ne 0$ ($\\vec e$ და $\\vec f$ მისი ჯერადებია); $\\vec k$: $4 + 12 - 16 = 0$ ✓.<br><br><strong>პასუხი:</strong> დ) მხოლოდ $\\vec{k}$.",
    tags: [],
    area: "geometry",
    topics: ["vectors"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: ["vectors","coordinates"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //20
  {
    question: "მოცემულია $ABCD A_1 B_1 C_1 D_1$ წესიერი წაკვეთილი პირამიდა. $AB = 8$, $A_1B_1 = 4$. პირამიდის სიმაღლეა $3$. იპოვეთ მანძილი $A_1$ წვეროდან $CD$ გვერდის შუა წერტილამდე.",
    options: ["$6$", "$9$", "$7$", "$2\\sqrt{3}$", "$3\\sqrt{2}$", "$\\sqrt{15}$"],
    correct: 2,
    solution: "$A(-4; -4; 0)$, $C(4; 4; 0)$, $D(-4; 4; 0)$, $A_1(-2; -2; 3)$. $CD$-ს შუა წერტილი $M(0; 4; 0)$.<br><br>$A_1M = \\sqrt{2^2 + 6^2 + 3^2} = 7$.<br><br><strong>პასუხი:</strong> გ) $7$.",
    tags: [],
    area: "prob-stats",
    topics: ["combinatorics","pyramid"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //21
  {
    question: "ჩამოთვლილთაგან რომელი შუალედის ყოველი მნიშვნელობა დააკმაყოფილებს $\\sin2 x − 2 \\sin 37^\\circ \\cos x > 0$ უტოლობას?",
    options: ["$(3^\\circ; 11^\\circ)$", "$(15^\\circ; 21^\\circ)$", "$(23^\\circ; 29^\\circ)$", "$(97^\\circ; 115^\\circ)$", "$(123^\\circ; 131^\\circ)$", "$(161^\\circ; 173^\\circ)$"],
    correct: 5,
    solution: "$\\sin 2x - 2\\sin 37^\\circ\\cos x = 2\\cos x(\\sin x - \\sin 37^\\circ) > 0$.<br><br>$(161^\\circ; 173^\\circ)$-ზე $\\cos x < 0$ და $\\sin x < \\sin 19^\\circ < \\sin 37^\\circ$ — ორივე მამრავლი უარყოფითია, ნამრავლი დადებითი. დანარჩენ შუალედებზე მამრავლებს განსხვავებული ნიშნები აქვთ.<br><br><strong>პასუხი:</strong> ვ) $(161^\\circ; 173^\\circ)$.",
    tags: [],
    area: "algebra",
    topics: ["trig-ineq","sum-formulas"],
    grade: 10,
    difficulty: 3,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //22
  {
    question: "რამდენი ამონახსნი აქვს $(\\sin \\pi x − \\cos \\pi x) \\sqrt{6 + x − x^2} = 0$ განტოლებას?",
    options: ["$2$", "$4$", "$5$", "$7$", "$8$", "$8$-ზე მეტი"],
    correct: 3,
    solution: "განსაზღვრის არე: $6 + x - x^2 \\ge 0$, $x \\in [-2; 3]$. ფესვი $0$-ია $x = -2$-ზე და $x = 3$-ზე.<br><br>$\\sin\\pi x = \\cos\\pi x \\Leftrightarrow \\tan\\pi x = 1$, $x = \\dfrac{1}{4} + k$: არეში $-1{,}75;\\ -0{,}75;\\ 0{,}25;\\ 1{,}25;\\ 2{,}25$.<br><br>სულ $7$.<br><br><strong>პასუხი:</strong> დ) $7$.",
    tags: [],
    area: "algebra",
    topics: ["trig-eq"],
    grade: 10,
    difficulty: 3,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //23
  {
    question: "იპოვეთ $y$-ის ყველა მნიშვნელობა $f(y) = \\sqrt{y^2 − 5y + 4}$ და $g(y) = y − 3$ ფუნქციების განსაზღვრის არიდან, რომ $f(y) \\cdot (x^2 + 2x + 2) \\leq g(y)$ უტოლობას არ ჰქონდეს ამონახსნი $x$-ის მიმართ.",
    options: [
      "$y \\in(−\\infty;1]\\cup (5;+\\infty)$",
      "$y \\in (−\\infty; 0)$",
      "$y \\in (7; +\\infty)$",
      "$y \\in (−\\infty; 0) \\cup (4;+\\infty)$",
      "$y \\in (4;7)$",
      "$y \\in (−\\infty;−3)$"
    ],
    correct: 0,
    solution: "არე: $y^2 - 5y + 4 \\ge 0$, $y \\le 1$ ან $y \\ge 4$. $x^2 + 2x + 2 = (x + 1)^2 + 1$ ღებულობს $[1; +\\infty)$-ის მნიშვნელობებს.<br><br>• $f(y) = 0$: $y = 1$-ზე $0 \\le -2$ — ამონახსნი არ არის ✓; $y = 4$-ზე $0 \\le 1$ — არის.<br>• $f(y) > 0$: ამონახსნი არ არის, როცა $f(y) > g(y)$. $y < 1$-ზე $g < 0$ — სრულდება; $y > 4$-ზე კვადრატში: $y^2 - 5y + 4 > y^2 - 6y + 9$, $y > 5$.<br><br>$y \\in (-\\infty; 1] \\cup (5; +\\infty)$.<br><br><strong>პასუხი:</strong> ა) $y \\in(−\\infty;1]\\cup (5;+\\infty)$.",
    tags: [],
    area: "algebra",
    topics: ["quadratic-ineq"],
    grade: 10,
    difficulty: 3,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //24
  {
    question: "წესიერ $A_1A_2A_3\\dots A_8$ რვაკუთხედზე შემოხაზულია ერთეულოვანი დიამეტრის მქონე წრეწირი. $K$ წერტილი წრეწირზე მდებარეობს. იპოვეთ $\\vec{KA_1} + \\vec{KA_2} + \\dots + \\vec{KA_8}$ ვექტორის სიგრძე.",
    options: ["$0$", "$\\frac{1}{2}$", "$1$", "$2$", "$4$", "$8$"],
    correct: 4,
    solution: "$\\vec{KA_i} = \\vec{KO} + \\vec{OA_i}$, ხოლო წესიერი მრავალკუთხედისთვის $\\sum\\vec{OA_i} = \\vec 0$.<br><br>ჯამი $= 8\\vec{KO}$, $|\\vec{KO}| = R = \\dfrac{1}{2}$, სიგრძე $4$.<br><br><strong>პასუხი:</strong> ე) $4$.",
    tags: [],
    area: "prob-stats",
    topics: ["combinatorics","vectors"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: ["vectors"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //25
  {
    question: "ვთქვათ $\\vec{OA}, \\vec{OB}, \\vec{OC} და \\vec{OD}$ სხვადასხვა ერთეულოვანი ვექტორებია სივრცეში, ამასთან ცნობილია, რომ $\\vec{OA} \\cdot \\vec{OB} = \\vec{OB} \\cdot \\vec{OC} = \\vec{OC} \\cdot \\vec{OA} = \\vec{OD} \\cdot \\vec{OB} = \\vec{OD} \\cdot \\vec{OC} = \\frac{1}{2}$. იპოვეთ $\\vec{OA} \\cdot \\vec{OD}$.",
    options: ["$0$", "$1$", "$-\\frac{1}{3}$", "$-\\frac{1}{2}$", "$\\frac{1}{3}$", "$\\frac{1}{3}$"],
    correct: 2,
    solution: "$\\vec{OA}$ და $\\vec{OD}$ ორივე ერთეულოვანია და $\\vec{OB}$-სთან, $\\vec{OC}$-სთან ერთნაირ სკალარულ ნამრავლს იძლევა, ამიტომ ისინი სიმეტრიულია $OBC$ სიბრტყის მიმართ: $\\vec{OA} = \\vec p + \\vec h$, $\\vec{OD} = \\vec p - \\vec h$ ($\\vec p$ — სიბრტყეში, $\\vec h$ — მართობული).<br><br>$\\vec p = \\beta(\\vec{OB} + \\vec{OC})$, $\\vec p \\cdot \\vec{OB} = \\beta \\cdot \\dfrac{3}{2} = \\dfrac{1}{2}$, $\\beta = \\dfrac{1}{3}$, $|\\vec p|^2 = \\dfrac{1}{9} \\cdot 3 = \\dfrac{1}{3}$, $|\\vec h|^2 = \\dfrac{2}{3}$.<br><br>$\\vec{OA} \\cdot \\vec{OD} = |\\vec p|^2 - |\\vec h|^2 = -\\dfrac{1}{3}$.<br><br><strong>პასუხი:</strong> გ) $-\\frac{1}{3}$.",
    area: "geometry",
    topics: ["vectors"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: ["vectors"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];
