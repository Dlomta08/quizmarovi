quizData = [
  // 1
  {
    question: "გაამარტივეთ: $\\sin 25^\\circ + \\cos 55^\\circ$.",
    options: ["$\\sqrt{2}\\cos 15^\\circ$", "$1$", "$\\cos 5^\\circ$", "$\\sin 5^\\circ$", "$\\sqrt{2}\\sin 15^\\circ$", "$\\sqrt{2}$"],
    correct: 2,
    tags: [],
    solution: "$\\cos 55^\\circ = \\sin 35^\\circ$. $\\sin 25^\\circ + \\sin 35^\\circ = 2\\sin 30^\\circ\\cos 5^\\circ = \\cos 5^\\circ$.<br><br><strong>პასუხი:</strong> გ) $\\cos 5^\\circ$.",
    area: "algebra",
    topics: ["product-sum"],
    grade: 10,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 2
  {
    question: "გაამარტივეთ: $\\sin(\\alpha - \\beta) \\cdot \\cos(\\beta - \\alpha)$.",
    options: ["$\\dfrac{1}{2}\\cos(2\\alpha - 2\\beta)$", "$2\\cos(2\\alpha - 2\\beta)$", "$\\cos(2\\alpha - 2\\beta)$", "$\\sin(2\\alpha - 2\\beta)$", "$\\dfrac{1}{2}\\sin(2\\alpha - 2\\beta)$", "$2\\sin(2\\alpha - 2\\beta)$"],
    correct: 4,
    tags: [],
    solution: "$\\cos(\\beta - \\alpha) = \\cos(\\alpha - \\beta)$, ამიტომ $\\sin(\\alpha - \\beta)\\cos(\\alpha - \\beta) = \\dfrac{1}{2}\\sin(2\\alpha - 2\\beta)$.<br><br><strong>პასუხი:</strong> ე) $\\dfrac{1}{2}\\sin(2\\alpha - 2\\beta)$.",
    area: "algebra",
    topics: ["sum-formulas"],
    grade: 10,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 3
  {
    question: "იპოვეთ $\\sin\\alpha + \\cos\\alpha$, თუ $\\operatorname{tg}\\left(\\dfrac{\\alpha}{2}\\right) = 3$.",
    options: ["$-0{,}2$", "$0{,}2$", "$-0{,}5$", "$0{,}5$", "$-0{,}25$", "$0{,}25$"],
    correct: 0,
    tags: [],
    solution: "$t = \\operatorname{tg}\\dfrac{\\alpha}{2} = 3$: $\\sin\\alpha = \\dfrac{2t}{1 + t^2} = \\dfrac{6}{10}$, $\\cos\\alpha = \\dfrac{1 - t^2}{1 + t^2} = -\\dfrac{8}{10}$.<br><br>$\\sin\\alpha + \\cos\\alpha = -0{,}2$.<br><br><strong>პასუხი:</strong> ა) $-0{,}2$.",
    area: "algebra",
    topics: ["trig-identities"],
    grade: 10,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 4
  {
    question: "მოცემულია ორი პრიზმა. პირველ პრიზმაში დიაგონალების რაოდენობა $10$-ის ტოლია. პირველი პრიზმის წიბოების რაოდენობა ტოლია მეორე პრიზმის წახნაგების რაოდენობის. იპოვეთ მეორე პრიზმის წვეროების რაოდენობა.",
    options: ["$22$", "$20$", "$24$", "$26$", "$28$", "$30$"],
    correct: 3,
    tags: [],
    solution: "$n$-კუთხა პრიზმის დიაგონალების რაოდენობა $n(n - 3)$-ია (ყოველი ზედა წვეროდან $n - 3$). $n(n - 3) = 10$, $n = 5$; წიბოები: $3n = 15$.<br><br>მეორე პრიზმას $15$ წახნაგი აქვს: $m + 2 = 15$, $m = 13$; წვეროები: $2m = 26$.<br><br><strong>პასუხი:</strong> დ) $26$.",
    area: "solid",
    topics: ["prism"],
    grade: 10,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 5
  {
    question: "წესიერი სამკუთხა პრიზმის ყველა წიბო $4$-ის ტოლია. იპოვეთ სრული ზედაპირის ფართობი.",
    options: ["$8(\\sqrt{6} + 3)$", "$6(\\sqrt{3} + 8)$", "$(\\sqrt{3} + 6)$", "$4(\\sqrt{6} + 3)$", "$4(\\sqrt{3} + 6)$", "$8(\\sqrt{3} + 6)$"],
    correct: 5,
    tags: [],
    solution: "ფუძეები: $2 \\cdot \\dfrac{\\sqrt{3}}{4} \\cdot 16 = 8\\sqrt{3}$; გვერდითი წახნაგები: $3 \\cdot 16 = 48$.<br><br>$8\\sqrt{3} + 48 = 8(\\sqrt{3} + 6)$.<br><br><strong>პასუხი:</strong> ვ) $8(\\sqrt{3} + 6)$.",
    area: "solid",
    topics: ["prism"],
    grade: 10,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 6
  {
    question: "იპოვეთ $y = 7\\sin\\left(0{,}1\\pi x + \\dfrac{7\\pi}{18}\\right) - 2\\pi$ ფუნქციის უმცირესი დადებითი პერიოდი.",
    options: ["$0{,}5$", "$2$", "$20$", "$26$", "$28$", "$1$"],
    correct: 2,
    tags: [],
    solution: "$y = A\\sin(kx + b) + c$-ს პერიოდია $\\dfrac{2\\pi}{|k|}$: $\\dfrac{2\\pi}{0{,}1\\pi} = 20$.<br><br><strong>პასუხი:</strong> გ) $20$.",
    area: "algebra",
    topics: ["function-props"],
    grade: 10,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 7
  {
    question: "გაამარტივეთ: $\\dfrac{\\sin\\alpha + \\sin\\beta}{\\cos\\alpha + \\cos\\beta}$.",
    options: ["$\\operatorname{tg}(\\alpha + \\beta)$", "$\\operatorname{ctg}(\\alpha + \\beta)$", "$\\operatorname{tg}\\dfrac{\\alpha - \\beta}{2}$", "$\\operatorname{ctg}\\dfrac{\\alpha - \\beta}{2}$", "$\\operatorname{tg}\\dfrac{\\alpha + \\beta}{2}$", "$\\operatorname{ctg}\\dfrac{\\alpha + \\beta}{2}$"],
    correct: 4,
    tags: [],
    solution: "$\\dfrac{\\sin\\alpha + \\sin\\beta}{\\cos\\alpha + \\cos\\beta} = \\dfrac{2\\sin\\frac{\\alpha + \\beta}{2}\\cos\\frac{\\alpha - \\beta}{2}}{2\\cos\\frac{\\alpha + \\beta}{2}\\cos\\frac{\\alpha - \\beta}{2}} = \\operatorname{tg}\\dfrac{\\alpha + \\beta}{2}$.<br><br><strong>პასუხი:</strong> ე) $\\operatorname{tg}\\dfrac{\\alpha + \\beta}{2}$.",
    area: "algebra",
    topics: ["product-sum"],
    grade: 10,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 8
  {
    question: "წესიერი ექვსკუთხა პრიზმის გვერდითი ზედაპირის ფართობი ისე შეეფარდება სრული ზედაპირის ფართობს, როგორც $1 : 3$. იპოვეთ ამ პრიზმის სიმაღლის სიგრძის შეფარდება ფუძის გვერდის სიგრძესთან.",
    options: ["$\\dfrac{\\sqrt{2}}{4}$", "$\\dfrac{\\sqrt{3}}{4}$", "$\\dfrac{\\sqrt{3}}{2}$", "$\\dfrac{1}{4}$", "$\\dfrac{1}{2}$", "$\\sqrt{3}$"],
    correct: 1,
    tags: [],
    solution: "გვერდითი ზედაპირი $6ah$, ფუძეები $2 \\cdot \\dfrac{3\\sqrt{3}}{2}a^2 = 3\\sqrt{3}a^2$. $\\dfrac{6ah}{6ah + 3\\sqrt{3}a^2} = \\dfrac{1}{3}$: $18ah = 6ah + 3\\sqrt{3}a^2$, $12h = 3\\sqrt{3}a$.<br><br>$\\dfrac{h}{a} = \\dfrac{\\sqrt{3}}{4}$.<br><br><strong>პასუხი:</strong> ბ) $\\dfrac{\\sqrt{3}}{4}$.",
    area: "solid",
    topics: ["prism"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 9
  {
    question: "იპოვეთ $\\dfrac{\\sin\\alpha - 2\\sin 2\\alpha + \\sin 3\\alpha}{\\cos\\alpha - 2\\cos 2\\alpha + \\cos 3\\alpha}$ გამოსახულების მნიშვნელობა, თუ $\\operatorname{tg}\\alpha = -3$.",
    options: ["$-0{,}2$", "$0{,}2$", "$-0{,}5$", "$-0{,}75$", "$0{,}75$", "$0{,}25$"],
    correct: 4,
    tags: [],
    solution: "$\\sin\\alpha + \\sin 3\\alpha = 2\\sin 2\\alpha\\cos\\alpha$, $\\cos\\alpha + \\cos 3\\alpha = 2\\cos 2\\alpha\\cos\\alpha$.<br><br>$\\dfrac{2\\sin 2\\alpha(\\cos\\alpha - 1)}{2\\cos 2\\alpha(\\cos\\alpha - 1)} = \\operatorname{tg} 2\\alpha = \\dfrac{2 \\cdot (-3)}{1 - 9} = 0{,}75$.<br><br><strong>პასუხი:</strong> ე) $0{,}75$.",
    area: "algebra",
    topics: ["product-sum"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 10
  {
    question: "იპოვეთ $f(x) = \\cos\\left(2x + \\dfrac{13\\pi}{15}\\right) - \\cos\\left(2x + \\dfrac{\\pi}{5}\\right)$ ფუნქციის მნიშვნელობათა სიმრავლე.",
    options: ["$[-\\sqrt{5};\\ \\sqrt{5}]$", "$[-2\\sqrt{2};\\ 2\\sqrt{2}]$", "$[-\\sqrt{3};\\ \\sqrt{3}]$", "$[-\\sqrt{2};\\ \\sqrt{2}]$", "$[-2;\\ 2]$", "$[-1;\\ 1]$"],
    correct: 2,
    tags: [],
    solution: "$\\cos A - \\cos B = -2\\sin\\dfrac{A + B}{2}\\sin\\dfrac{A - B}{2}$: $f(x) = -2\\sin\\left(2x + \\dfrac{8\\pi}{15}\\right)\\sin\\dfrac{\\pi}{3} = -\\sqrt{3}\\sin\\left(2x + \\dfrac{8\\pi}{15}\\right)$.<br><br>მნიშვნელობათა სიმრავლე: $[-\\sqrt{3};\\ \\sqrt{3}]$.<br><br><strong>პასუხი:</strong> გ) $[-\\sqrt{3};\\ \\sqrt{3}]$.",
    area: "algebra",
    topics: ["product-sum","function-props"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 11
  {
    question: "მართკუთხა პარალელეპიპედის სამი წახნაგის დიაგონალის სიგრძეებია $5$ სმ, $\\sqrt{34}$ სმ და $\\sqrt{41}$ სმ. იპოვეთ ამ პარალელეპიპედის დიაგონალის სიგრძე.",
    options: ["$5\\sqrt{2}$", "$4\\sqrt{3}$", "$5\\sqrt{3}$", "$3\\sqrt{5}$", "$10$", "$6\\sqrt{2}$"],
    correct: 0,
    tags: [],
    solution: "წიბოები $a, b, c$: $a^2 + b^2 = 25$, $b^2 + c^2 = 34$, $a^2 + c^2 = 41$. შევკრიბოთ: $2(a^2 + b^2 + c^2) = 100$.<br><br>დიაგონალი: $\\sqrt{a^2 + b^2 + c^2} = \\sqrt{50} = 5\\sqrt{2}$.<br><br><strong>პასუხი:</strong> ა) $5\\sqrt{2}$.",
    area: "solid",
    topics: ["prism"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 12 (the answer sheet marks all six options as correct)
  {
    question: "მართი სამკუთხა $ABCA_1B_1C_1$ პრიზმის ($AA_1 \\parallel BB_1 \\parallel CC_1$) ფუძის ფართობია $8$, ხოლო $ABC_1$ სამკუთხედის ფართობია $10$. იპოვეთ ამ პრიზმის გვერდითი ზედაპირის ფართობი.",
    options: ["$6\\sqrt{6}$", "$36$", "$30$", "$3\\sqrt{6}$", "$18$", "$24$"],
    correct: [0, 1, 2, 3, 4, 5],
    tags: [],
    solution: "<strong>ამ ამოცანაში ყველა პასუხი ჩაითვალა სწორად.</strong><br><br>$ABC$ არის $ABC_1$-ის ორთოგონალური გეგმილი, ამიტომ $\\cos\\varphi = \\dfrac{8}{10}$ ($\\varphi$ — ორწახნაგა კუთხე $AB$ წიბოსთან). ეს საშუალებას გვაძლევს ვიპოვოთ სიმაღლის შეფარდება $C$-დან $AB$-მდე მანძილთან, მაგრამ ფუძის გვერდები და პრიზმის სიმაღლე ცალ-ცალკე არ დგინდება — გვერდითი ზედაპირი ცალსახად ვერ გამოითვლება.",
    area: "solid",
    topics: ["prism","angles-space"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 13
  {
    question: "გაამარტივეთ: $\\sin^2\\alpha + \\sin^2\\beta + \\cos(\\alpha + \\beta) \\cdot \\cos(\\alpha - \\beta)$.",
    options: ["$3$", "$2$", "$0$", "$1$", "$10$", "$4$"],
    correct: 3,
    tags: [],
    solution: "$\\cos(\\alpha + \\beta)\\cos(\\alpha - \\beta) = \\cos^2\\alpha - \\sin^2\\beta$.<br><br>$\\sin^2\\alpha + \\sin^2\\beta + \\cos^2\\alpha - \\sin^2\\beta = 1$.<br><br><strong>პასუხი:</strong> დ) $1$.",
    area: "algebra",
    topics: ["sum-formulas"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 14
  {
    question: "იპოვეთ $a$ პარამეტრის ყველა მნიშვნელობა, რომელთათვისაც $y = 2a$ და $y = 2\\sin^2 x + \\sin x + 1$ ფუნქციებს ექნებათ ერთი მაინც გადაკვეთის წერტილი.",
    options: ["$a \\in \\left[\\dfrac{7}{16};\\ 4\\right]$", "$a \\in \\left[\\dfrac{7}{4};\\ 2\\right]$", "$a \\in \\left[\\dfrac{7}{8};\\ 2\\right]$", "$a \\in \\left[0;\\ \\dfrac{7}{8}\\right]$", "$a \\in \\left[\\dfrac{7}{16};\\ 2\\right]$", "$a \\in \\left[\\dfrac{7}{8};\\ 1\\right]$"],
    correct: 4,
    tags: [],
    solution: "$s = \\sin x \\in [-1;\\ 1]$: $g(s) = 2s^2 + s + 1$, წვერო $s = -\\dfrac{1}{4}$: $g = \\dfrac{7}{8}$; $g(-1) = 2$, $g(1) = 4$. მნიშვნელობათა სიმრავლე: $\\left[\\dfrac{7}{8};\\ 4\\right]$.<br><br>$2a \\in \\left[\\dfrac{7}{8};\\ 4\\right] \\Leftrightarrow a \\in \\left[\\dfrac{7}{16};\\ 2\\right]$.<br><br><strong>პასუხი:</strong> ე) $a \\in \\left[\\dfrac{7}{16};\\ 2\\right]$.",
    area: "algebra",
    topics: ["trig-identities","max-min"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: ["parameter","substitution"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 15
  {
    question: "$ABCD$ კვადრატის შემცველი სიბრტყე $AD$ გვერდზე გავლებულ $P$ სიბრტყესთან ქმნის $\\alpha$ სიდიდის ორწახნაგა კუთხეს. იპოვეთ იმ კუთხის სინუსი, რომელსაც $P$ სიბრტყესთან ქმნის $ABCD$ კვადრატის დიაგონალი, თუ $\\sin\\alpha = \\dfrac{\\sqrt{2}}{3}$.",
    options: ["$1$", "$\\dfrac{\\sqrt{3}}{2}$", "$\\dfrac{1}{3}$", "$\\dfrac{\\sqrt{2}}{2}$", "$\\dfrac{\\sqrt{3}}{3}$", "$\\dfrac{2}{3}$"],
    correct: 2,
    tags: [],
    solution: "კვადრატის გვერდი $a$. $C$ წერტილი $AD$ წრფიდან $CD = a$ მანძილზეა, ამიტომ მისი მანძილი $P$ სიბრტყემდე $a\\sin\\alpha$-ია.<br><br>$AC$ დიაგონალისა და $P$ სიბრტყის კუთხის სინუსი: $\\dfrac{a\\sin\\alpha}{a\\sqrt{2}} = \\dfrac{\\sqrt{2}/3}{\\sqrt{2}} = \\dfrac{1}{3}$.<br><br><strong>პასუხი:</strong> გ) $\\dfrac{1}{3}$.",
    area: "solid",
    topics: ["angles-space"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 16
  {
    question: "გამოთვალეთ: $\\cos 10^\\circ \\cdot (1 + \\operatorname{tg} 10^\\circ \\cdot \\operatorname{tg} 5^\\circ)$.",
    options: ["$2$", "$3$", "$4$", "$1$", "$\\dfrac{1}{3}$", "$\\dfrac{2}{3}$"],
    correct: 3,
    tags: [],
    solution: "$1 + \\operatorname{tg} 10^\\circ\\operatorname{tg} 5^\\circ = \\dfrac{\\cos 10^\\circ\\cos 5^\\circ + \\sin 10^\\circ\\sin 5^\\circ}{\\cos 10^\\circ\\cos 5^\\circ} = \\dfrac{\\cos 5^\\circ}{\\cos 10^\\circ\\cos 5^\\circ} = \\dfrac{1}{\\cos 10^\\circ}$.<br><br>ნამრავლი: $1$.<br><br><strong>პასუხი:</strong> დ) $1$.",
    area: "algebra",
    topics: ["sum-formulas"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 17
  {
    question: "წესიერ ექვსკუთხა პრიზმაში ერთი წვეროდან გავლებული პრიზმის ყველა დიაგონალის სიგრძეთა ჯამია $2\\sqrt{37} + \\sqrt{41}$, ხოლო გვერდითი წახნაგის დიაგონალის სიგრძე კი $\\sqrt{29}$. ჩამოთვლილთაგან რისი ტოლია პრიზმის გვერდითი ზედაპირის ფართობი?",
    options: ["$60$", "$50$", "$70$", "$65$", "$55$", "$75$"],
    correct: 0,
    tags: [],
    solution: "ფუძის გვერდი $a$, სიმაღლე $h$. ერთი წვეროდან გამოდის სამი დიაგონალი: ორი სიგრძით $\\sqrt{h^2 + 3a^2}$ (ფუძის მოკლე დიაგონალი $a\\sqrt{3}$) და ერთი $\\sqrt{h^2 + 4a^2}$ (გრძელი დიაგონალი $2a$).<br><br>$h^2 + 3a^2 = 37$, $h^2 + 4a^2 = 41$: $a^2 = 4$, $h^2 = 25$. შემოწმება: $a^2 + h^2 = 29$ ✓.<br><br>გვერდითი ზედაპირი: $6ah = 6 \\cdot 2 \\cdot 5 = 60$.<br><br><strong>პასუხი:</strong> ა) $60$.",
    area: "solid",
    topics: ["prism"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 18
  {
    question: "გამოთვალეთ: $(1 - \\operatorname{ctg} 23^\\circ)(1 - \\operatorname{ctg} 22^\\circ)$.",
    options: ["$1$", "$2$", "$0$", "$3$", "$10$", "$4$"],
    correct: 1,
    tags: [],
    solution: "$23^\\circ + 22^\\circ = 45^\\circ$, $\\operatorname{ctg}(A + B) = \\dfrac{\\operatorname{ctg}A\\operatorname{ctg}B - 1}{\\operatorname{ctg}A + \\operatorname{ctg}B} = 1$, ე.ი. $\\operatorname{ctg}A\\operatorname{ctg}B - \\operatorname{ctg}A - \\operatorname{ctg}B = 1$.<br><br>$(1 - \\operatorname{ctg}A)(1 - \\operatorname{ctg}B) = 1 - \\operatorname{ctg}A - \\operatorname{ctg}B + \\operatorname{ctg}A\\operatorname{ctg}B = 1 + 1 = 2$.<br><br><strong>პასუხი:</strong> ბ) $2$.",
    area: "algebra",
    topics: ["sum-formulas"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 19
  {
    question: "იპოვეთ ყველა იმ მთელი რიცხვის რაოდენობა, რომლებიც მოთავსებულია $[-4;\\ 10]$ შუალედში და რომლებისთვისაც არ არის განსაზღვრული $y = \\dfrac{\\sqrt{25 - 4x^2}}{\\sin\\dfrac{\\pi x}{2} - 1}$ ფუნქცია.",
    options: ["$11$", "$10$", "$9$", "$12$", "$15$", "$4$"],
    correct: 0,
    tags: [],
    solution: "ფუნქცია განსაზღვრულია, როცა $25 - 4x^2 \\ge 0$ ($|x| \\le 2{,}5$) და $\\sin\\dfrac{\\pi x}{2} \\ne 1$ ($x \\ne 1 + 4k$).<br><br>$[-4;\\ 10]$-ში $15$ მთელი რიცხვია. განსაზღვრულია: $-2, -1, 0, 2$ ($x = 1$ გამოირიცხება) — $4$ რიცხვი. განსაზღვრული არ არის: $15 - 4 = 11$.<br><br><strong>პასუხი:</strong> ა) $11$.",
    area: "algebra",
    topics: ["function-basics","trig-eq"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 20
  {
    question: "$60^\\circ$-ის ტოლი ორწახნაგა კუთხის შიგნით აღებულია $A$ წერტილი. მანძილი $A$ წერტილიდან წახნაგებამდე $3$-ის და $6$-ის ტოლია. იპოვეთ მანძილი $A$ წერტილიდან ორწახნაგა კუთხის წიბომდე.",
    options: ["$15\\sqrt{3}$", "$5\\sqrt{3}$", "$3\\sqrt{5}$", "$2\\sqrt{21}$", "$\\sqrt{21}$", "$4\\sqrt{21}$"],
    correct: 3,
    tags: [],
    solution: "წიბოს მართობულ კვეთაში: $O$ — წიბოს წერტილი, $P$ და $Q$ — $A$-ს გეგმილები წახნაგებზე ($AP = 3$, $AQ = 6$). $OPAQ$-ში $P$ და $Q$ კუთხეები მართია, ამიტომ $\\angle PAQ = 180^\\circ - 60^\\circ = 120^\\circ$.<br><br>$PQ^2 = 9 + 36 + 18 = 63$. $O, P, A, Q$ ძევს $OA$ დიამეტრიან წრეწირზე: $OA = \\dfrac{PQ}{\\sin 60^\\circ} = \\dfrac{\\sqrt{63}}{\\sqrt{3}/2} = 2\\sqrt{21}$.<br><br><strong>პასუხი:</strong> დ) $2\\sqrt{21}$.",
    area: "solid",
    topics: ["angles-space","distances-space"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 21
  {
    question: "მართი პარალელეპიპედის დიაგონალური კვეთების სიბრტყეებს შორის კუთხეა $60^\\circ$, ხოლო დიაგონალური კვეთების ფართობებია $3$ და $4$. იპოვეთ ამ პარალელეპიპედის გვერდითი ზედაპირის ფართობი.",
    options: ["$2(\\sqrt{13} + \\sqrt{37})$", "$\\sqrt{13} + \\sqrt{37}$", "$\\sqrt{13}$", "$2\\sqrt{21}$", "$10$", "$2$"],
    correct: 1,
    tags: [],
    solution: "სიმაღლე $h$, ფუძის დიაგონალები $d_1, d_2$: $hd_1 = 3$, $hd_2 = 4$; კვეთების სიბრტყეებს შორის კუთხე ფუძის დიაგონალებს შორის კუთხეა, $60^\\circ$.<br><br>ფუძის გვერდები: $a^2 = \\dfrac{d_1^2 + d_2^2 - d_1d_2}{4}$, $b^2 = \\dfrac{d_1^2 + d_2^2 + d_1d_2}{4}$.<br><br>გვერდითი ზედაპირი: $2h(a + b) = \\sqrt{h^2d_1^2 + h^2d_2^2 - h^2d_1d_2} + \\sqrt{h^2d_1^2 + h^2d_2^2 + h^2d_1d_2} = \\sqrt{9 + 16 - 12} + \\sqrt{9 + 16 + 12} = \\sqrt{13} + \\sqrt{37}$.<br><br><strong>პასუხი:</strong> ბ) $\\sqrt{13} + \\sqrt{37}$.",
    area: "solid",
    topics: ["prism","cross-sections"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 22
  {
    question: "იპოვეთ $\\dfrac{6\\operatorname{tg} 2\\alpha}{1 + \\operatorname{tg}^2 2\\alpha} - \\dfrac{4 - 4\\operatorname{tg}^2 2\\alpha}{1 + \\operatorname{tg}^2 2\\alpha}$ გამოსახულების უდიდეს და უმცირეს მნიშვნელობებს შორის სხვაობა.",
    options: ["$22$", "$4$", "$10$", "$20$", "$26$", "$2$"],
    correct: 2,
    tags: [],
    solution: "$t = \\operatorname{tg} 2\\alpha$: $\\dfrac{2t}{1 + t^2} = \\sin 4\\alpha$, $\\dfrac{1 - t^2}{1 + t^2} = \\cos 4\\alpha$. გამოსახულება: $3\\sin 4\\alpha - 4\\cos 4\\alpha = 5\\sin(4\\alpha - \\varphi)$, $\\cos\\varphi = \\dfrac{3}{5}$.<br><br>უდიდესი $5$, უმცირესი $-5$, სხვაობა $10$.<br><br><strong>პასუხი:</strong> გ) $10$.",
    area: "algebra",
    topics: ["sum-formulas","max-min"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 23
  {
    question: "გამოთვალეთ: $\\dfrac{\\sin 75^\\circ}{\\sin 25^\\circ \\cdot \\sin 35^\\circ \\cdot \\sin 85^\\circ}$.",
    options: ["$5$", "$6$", "$3$", "$1$", "$10$", "$4$"],
    correct: 5,
    tags: [],
    solution: "ცნობილი ტოლობა: $\\sin x\\sin(60^\\circ - x)\\sin(60^\\circ + x) = \\dfrac{1}{4}\\sin 3x$. $x = 25^\\circ$: $\\sin 25^\\circ\\sin 35^\\circ\\sin 85^\\circ = \\dfrac{1}{4}\\sin 75^\\circ$.<br><br>$\\dfrac{\\sin 75^\\circ}{\\frac{1}{4}\\sin 75^\\circ} = 4$.<br><br><strong>პასუხი:</strong> ვ) $4$.",
    area: "algebra",
    topics: ["product-sum"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 24
  {
    question: "პრიზმის ფუძეა წესიერი სამკუთხედი, რომლის გვერდის სიგრძეა $5$. პრიზმის გვერდითი წიბოს სიგრძეა $6$. ერთ-ერთი გვერდითი წიბო ფუძის მიმდებარე ორივე გვერდთან ადგენს $\\alpha$ კუთხეს. იპოვეთ პრიზმის გვერდითი ზედაპირის ფართობი, თუ $\\sin\\alpha = \\dfrac{2}{3}$.",
    options: ["$80$", "$60$", "$70$", "$50$", "$90$", "$100$"],
    correct: 2,
    tags: [],
    solution: "$AA_1$ ფუძის $AB$ და $AC$ გვერდებთან ტოლ კუთხეებს ადგენს, ამიტომ მისი გეგმილი $A$ კუთხის ბისექტრისაზეა და $AA_1 \\perp BC$. მაშინ $BB_1C_1C$ მართკუთხედია: $5 \\cdot 6 = 30$.<br><br>$AA_1B_1B$ და $AA_1C_1C$ პარალელოგრამებია: $5 \\cdot 6 \\cdot \\sin\\alpha = 20$ თითო.<br><br>გვერდითი ზედაპირი: $20 + 20 + 30 = 70$.<br><br><strong>პასუხი:</strong> გ) $70$.",
    area: "solid",
    topics: ["prism"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 25
  {
    question: "რისი ტოლია $\\cos 4^\\circ \\cdot \\cos 8^\\circ \\cdot \\cos 12^\\circ \\cdots \\cos 84^\\circ \\cdot \\cos 88^\\circ$ გამოსახულების მნიშვნელობა?",
    options: ["$\\left(\\dfrac{1}{2}\\right)^{20}$", "$\\left(\\dfrac{1}{4}\\right)^{11}$", "$\\left(\\dfrac{1}{8}\\right)^{10}$", "$\\left(\\dfrac{1}{4}\\right)^{20}$", "$\\left(\\dfrac{1}{2}\\right)^{88}$", "$\\left(\\dfrac{1}{2}\\right)^{24}$"],
    correct: 1,
    tags: [],
    solution: "$P = \\prod_{k=1}^{22}\\cos 4k^\\circ$, $Q = \\prod_{k=1}^{22}\\sin 4k^\\circ$. $\\sin 4k^\\circ\\cos 4k^\\circ = \\dfrac{1}{2}\\sin 8k^\\circ$, ამიტომ $PQ = 2^{-22}\\prod_{k=1}^{22}\\sin 8k^\\circ$.<br><br>$\\sin 8k^\\circ$ ($k = 1, \\ldots, 22$): $8^\\circ, \\ldots, 88^\\circ$ და $\\sin 96^\\circ = \\sin 84^\\circ, \\ldots, \\sin 176^\\circ = \\sin 4^\\circ$ — ეს ზუსტად $\\sin 4^\\circ, \\sin 8^\\circ, \\ldots, \\sin 88^\\circ$-ია, ანუ ნამრავლი $Q$-ს ტოლია.<br><br>$PQ = 2^{-22}Q$, ამიტომ $P = 2^{-22} = \\left(\\dfrac{1}{4}\\right)^{11}$.<br><br><strong>პასუხი:</strong> ბ) $\\left(\\dfrac{1}{4}\\right)^{11}$.",
    area: "algebra",
    topics: ["sum-formulas"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];
