quizData = [
  // 1
  {
    question: "<strong>(3 ქულა)</strong> მოცემულია, რომ: $\\cos\\left(\\alpha - \\dfrac{\\pi}{2}\\right) = -\\dfrac{2}{3}$ და $\\dfrac{3\\pi}{2} < \\alpha < 2\\pi$. გამოთვალეთ $\\operatorname{tg}(2\\alpha)$.",
    options: [],
    tags: [],
    solution: "$\\cos\\left(\\alpha - \\dfrac{\\pi}{2}\\right) = \\sin\\alpha = -\\dfrac{2}{3}$. IV მეოთხედში $\\cos\\alpha > 0$: $\\cos\\alpha = \\sqrt{1 - \\dfrac{4}{9}} = \\dfrac{\\sqrt{5}}{3}$, $\\operatorname{tg}\\alpha = -\\dfrac{2}{\\sqrt{5}}$.<br><br>$\\operatorname{tg} 2\\alpha = \\dfrac{2\\operatorname{tg}\\alpha}{1 - \\operatorname{tg}^2\\alpha} = \\dfrac{-\\frac{4}{\\sqrt{5}}}{1 - \\frac{4}{5}} = -\\dfrac{20}{\\sqrt{5}} = -4\\sqrt{5}$.<br><br><strong>პასუხი:</strong> $-4\\sqrt{5}$.",
    area: "algebra",
    topics: ["reduction","sum-formulas"],
    grade: 10,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 2
  {
    question: "<strong>(3 ქულა)</strong> გამოთვალეთ: $\\dfrac{\\cos^2\\left(\\dfrac{\\pi}{3} + \\alpha\\right)}{\\operatorname{tg}^2\\left(\\dfrac{\\pi}{6} - \\alpha\\right)} + \\sin^2\\left(\\dfrac{\\pi}{3} + \\alpha\\right) \\cdot \\operatorname{tg}^2\\left(\\dfrac{\\pi}{6} - \\alpha\\right)$.",
    options: [],
    tags: [],
    solution: "აღვნიშნოთ $\\beta = \\dfrac{\\pi}{3} + \\alpha$. მაშინ $\\dfrac{\\pi}{6} - \\alpha = \\dfrac{\\pi}{2} - \\beta$ და $\\operatorname{tg}\\left(\\dfrac{\\pi}{6} - \\alpha\\right) = \\operatorname{ctg}\\beta$.<br><br>$\\dfrac{\\cos^2\\beta}{\\operatorname{ctg}^2\\beta} + \\sin^2\\beta\\operatorname{ctg}^2\\beta = \\sin^2\\beta + \\cos^2\\beta = 1$.<br><br><strong>პასუხი:</strong> $1$.",
    area: "algebra",
    topics: ["reduction","trig-identities"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 3
  {
    question: "<strong>(3 ქულა)</strong> $ABC$ სამკუთხედში $AB = 13$; $BC = 14$; $AC = 15$. $AC$ გვერდის შუა $D$ წერტილიდან სამკუთხედის სიბრტყისადმი აღმართულია $DM$ მართობი. იპოვეთ $DM$ მართობის სიგრძე, თუ მანძილი $M$ წერტილიდან $BC$ გვერდამდე არის $\\sqrt{52}$.",
    options: [],
    tags: [],
    solution: "$13, 14, 15$ გვერდებიანი სამკუთხედის ფართობი (ჰერონის ფორმულით, $p = 21$): $\\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = 84$. $A$-დან $BC$-ზე სიმაღლე: $\\dfrac{2 \\cdot 84}{14} = 12$.<br><br>$D$ არის $AC$-ს შუაწერტილი, ამიტომ $D$-დან $BC$-მდე მანძილი $6$-ია. სამი მართობის თეორემით $M$-დან $BC$-მდე მანძილი: $\\sqrt{DM^2 + 6^2} = \\sqrt{52}$.<br><br>$DM^2 = 52 - 36 = 16$, $DM = 4$.<br><br><strong>პასუხი:</strong> $4$.",
    area: "solid",
    topics: ["perpendicular-space","distances-space","heron"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 4
  {
    question: "<strong>(4 ქულა)</strong> $ABCDA_1B_1C_1D_1$ კუბში $K$ წერტილი $DD_1$ წიბოს შუაწერტილია. იპოვეთ $CK$ და $A_1D$ წრფეებს შორის კუთხის კოსინუსის მნიშვნელობა.",
    options: [],
    tags: [],
    solution: "ავიღოთ კუბის წიბო $2$: $C(2;\\ 2;\\ 0)$, $D(0;\\ 2;\\ 0)$, $A_1(0;\\ 0;\\ 2)$, $K(0;\\ 2;\\ 1)$.<br><br>$\\overrightarrow{CK} = (-2;\\ 0;\\ 1)$, $\\overrightarrow{A_1D} = (0;\\ 2;\\ -2)$.<br><br>$\\cos\\varphi = \\dfrac{|0 + 0 - 2|}{\\sqrt{5} \\cdot \\sqrt{8}} = \\dfrac{2}{2\\sqrt{10}} = \\dfrac{\\sqrt{10}}{10}$.<br><br><strong>პასუხი:</strong> $\\dfrac{\\sqrt{10}}{10}$.",
    area: "solid",
    topics: ["angles-space","prism"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: ["coordinates"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 5
  {
    question: "<strong>(4 ქულა)</strong> $ABCDA_1B_1C_1D_1$ კუბის წიბო $1$-ის ტოლია. $T$, $P$ და $Q$ წერტილები წარმოადგენენ შესაბამისად $AA_1B_1B$; $A_1B_1C_1D_1$ და $BB_1C_1C$ წახნაგების ცენტრებს. იპოვეთ მანძილი $P$ წერტილიდან $ATQ$ სიბრტყემდე.",
    options: [],
    tags: [],
    solution: "$A(0;\\ 0;\\ 0)$, $B(1;\\ 0;\\ 0)$, $D(0;\\ 1;\\ 0)$, $A_1(0;\\ 0;\\ 1)$. წახნაგების ცენტრები: $T\\left(\\dfrac{1}{2};\\ 0;\\ \\dfrac{1}{2}\\right)$, $P\\left(\\dfrac{1}{2};\\ \\dfrac{1}{2};\\ 1\\right)$, $Q\\left(1;\\ \\dfrac{1}{2};\\ \\dfrac{1}{2}\\right)$.<br><br>$ATQ$ სიბრტყე სათავეზე გადის; ნორმალი $\\overrightarrow{AT} \\times \\overrightarrow{AQ} \\parallel (-1;\\ 1;\\ 1)$, განტოლება: $-x + y + z = 0$.<br><br>მანძილი $P$-დან: $\\dfrac{\\left|-\\frac{1}{2} + \\frac{1}{2} + 1\\right|}{\\sqrt{3}} = \\dfrac{\\sqrt{3}}{3}$.<br><br><strong>პასუხი:</strong> $\\dfrac{\\sqrt{3}}{3}$.",
    area: "solid",
    topics: ["distances-space","prism"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: ["coordinates"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 6
  {
    question: "<strong>(4 ქულა)</strong> იპოვეთ $\\dfrac{3}{-2\\cos^2 x + 6\\sin x + 9}$ გამოსახულების უმცირესი მნიშვნელობა.",
    options: [],
    tags: [],
    solution: "მნიშვნელი: $-2(1 - \\sin^2 x) + 6\\sin x + 9 = 2\\sin^2 x + 6\\sin x + 7$. $s = \\sin x \\in [-1;\\ 1]$: $g(s) = 2s^2 + 6s + 7$, წვერო $s = -1{,}5$, ამიტომ $[-1;\\ 1]$-ზე ზრდადია: $g \\in [3;\\ 15]$.<br><br>$\\dfrac{3}{g}$ უმცირესია, როცა $g = 15$ ($\\sin x = 1$): $\\dfrac{3}{15} = \\dfrac{1}{5}$.<br><br><strong>პასუხი:</strong> $\\dfrac{1}{5}$.",
    area: "algebra",
    topics: ["trig-identities","max-min"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: ["substitution"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 7
  {
    question: "<strong>(4 ქულა)</strong> გამოთვალეთ: $\\dfrac{1}{\\cos 290^\\circ} + \\left(\\dfrac{1}{\\sin 165^\\circ} + \\dfrac{1}{\\cos 165^\\circ}\\right)^2 + \\dfrac{1}{\\sqrt{3}\\sin 250^\\circ}$.",
    options: [],
    tags: [],
    solution: "$\\cos 290^\\circ = \\cos 70^\\circ = \\sin 20^\\circ$; $\\sin 250^\\circ = -\\sin 70^\\circ = -\\cos 20^\\circ$; $\\sin 165^\\circ = \\sin 15^\\circ$, $\\cos 165^\\circ = -\\cos 15^\\circ$.<br><br>შუა შესაკრები: $\\left(\\dfrac{\\cos 15^\\circ - \\sin 15^\\circ}{\\sin 15^\\circ\\cos 15^\\circ}\\right)^2 = \\dfrac{1 - \\sin 30^\\circ}{\\frac{1}{4}\\sin^2 30^\\circ} = \\dfrac{1/2}{1/16} = 8$.<br><br>დანარჩენი: $\\dfrac{1}{\\sin 20^\\circ} - \\dfrac{1}{\\sqrt{3}\\cos 20^\\circ} = \\dfrac{\\sqrt{3}\\cos 20^\\circ - \\sin 20^\\circ}{\\sqrt{3}\\sin 20^\\circ\\cos 20^\\circ} = \\dfrac{2\\sin 40^\\circ}{\\frac{\\sqrt{3}}{2}\\sin 40^\\circ} = \\dfrac{4}{\\sqrt{3}}$.<br><br><strong>პასუხი:</strong> $8 + \\dfrac{4\\sqrt{3}}{3}$.",
    area: "algebra",
    topics: ["reduction","product-sum"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];
