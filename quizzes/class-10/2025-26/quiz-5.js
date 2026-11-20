quizData = [
  // 1
  {
    question: "გაამარტივეთ: $\\dfrac{\\sin 2\\alpha - \\sin 3\\alpha + \\sin 4\\alpha}{\\cos 2\\alpha - \\cos 3\\alpha + \\cos 4\\alpha}$.",
    options: ["$\\operatorname{tg} 4\\alpha$", "$1$", "$\\operatorname{tg} 2\\alpha$", "$0$", "$\\operatorname{tg}\\alpha$", "$\\operatorname{tg} 3\\alpha$"],
    correct: 5,
    tags: [],
    solution: "$\\sin 2\\alpha + \\sin 4\\alpha = 2\\sin 3\\alpha\\cos\\alpha$, $\\cos 2\\alpha + \\cos 4\\alpha = 2\\cos 3\\alpha\\cos\\alpha$.<br><br>$\\dfrac{\\sin 3\\alpha(2\\cos\\alpha - 1)}{\\cos 3\\alpha(2\\cos\\alpha - 1)} = \\operatorname{tg} 3\\alpha$.<br><br><strong>პასუხი:</strong> ვ) $\\operatorname{tg} 3\\alpha$.",
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
    question: "რამდენი ამონახსნი აქვს $\\sin 2x = \\cos x$ განტოლებას $[0;\\ 2\\pi]$ შუალედში?",
    options: ["$0$", "$1$", "$4$", "$2$", "$3$", "$5$"],
    correct: 2,
    tags: [],
    solution: "$2\\sin x\\cos x = \\cos x \\Leftrightarrow \\cos x(2\\sin x - 1) = 0$.<br><br>$[0;\\ 2\\pi]$-ზე: $\\cos x = 0$ — $\\dfrac{\\pi}{2}, \\dfrac{3\\pi}{2}$; $\\sin x = \\dfrac{1}{2}$ — $\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}$. სულ $4$.<br><br><strong>პასუხი:</strong> გ) $4$.",
    area: "algebra",
    topics: ["trig-eq"],
    grade: 10,
    difficulty: 1,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 3
  {
    question: "გამოთვალეთ $\\dfrac{C_{12}^7}{C_{12}^5}$.",
    options: ["$0$", "$1$", "$4$", "$2$", "$3$", "$5$"],
    correct: 1,
    tags: [],
    solution: "$C_n^k = C_n^{n-k}$, ამიტომ $C_{12}^7 = C_{12}^5$ და შეფარდება $1$-ია.<br><br><strong>პასუხი:</strong> ბ) $1$.",
    area: "prob-stats",
    topics: ["combinatorics"],
    grade: 10,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 4
  {
    question: "წესიერი ოთხკუთხა წაკვეთილი პირამიდის დიდი ფუძის გვერდი, მცირე ფუძის გვერდი და გვერდითი წიბო შესაბამისად ტოლია $10$ სმ, $4$ სმ და $5$ სმ. იპოვეთ ამ პირამიდის სიმაღლე.",
    options: ["$\\sqrt{7}$", "$\\sqrt{14}$", "$7$", "$\\sqrt{2}$", "$2$", "$3$"],
    correct: 0,
    tags: [],
    solution: "ფუძეების დიაგონალები $10\\sqrt{2}$ და $4\\sqrt{2}$. დიაგონალურ კვეთაში (ტოლფერდა ტრაპეცია) გვერდითი წიბოს გეგმილია $\\dfrac{10\\sqrt{2} - 4\\sqrt{2}}{2} = 3\\sqrt{2}$.<br><br>$h = \\sqrt{25 - 18} = \\sqrt{7}$.<br><br><strong>პასუხი:</strong> ა) $\\sqrt{7}$.",
    area: "solid",
    topics: ["pyramid"],
    grade: 10,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 5
  {
    question: "იპოვეთ კუთხე $\\vec{a}$ და $\\vec{b}$ არანულოვან ვექტორებს შორის, თუ $|\\vec{a} + \\vec{b}| = |\\vec{a} - \\vec{b}|$.",
    options: ["$30^\\circ$", "$45^\\circ$", "$90^\\circ$", "$60^\\circ$", "$0^\\circ$", "$120^\\circ$"],
    correct: 2,
    tags: [],
    solution: "$|\\vec{a} + \\vec{b}|^2 = |\\vec{a} - \\vec{b}|^2 \\Leftrightarrow 4\\vec{a}\\cdot\\vec{b} = 0$, ვექტორები ურთიერთმართობულია.<br><br><strong>პასუხი:</strong> გ) $90^\\circ$.",
    area: "geometry",
    topics: ["dot-product"],
    grade: 10,
    difficulty: 1,
    type: ["compute"],
    method: ["vectors"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 6
  {
    question: "გამოთვალეთ: $\\sin\\left(2\\alpha - \\dfrac{3}{2}\\pi\\right) + \\cos\\left(2\\alpha - \\dfrac{8}{3}\\pi\\right) + \\cos\\left(2\\alpha + \\dfrac{2}{3}\\pi\\right)$.",
    options: ["$1$", "$0$", "$-1$", "$3$", "$-2$", "$2$"],
    correct: 1,
    tags: [],
    solution: "$\\sin\\left(2\\alpha - \\dfrac{3\\pi}{2}\\right) = \\cos 2\\alpha$; $\\cos\\left(2\\alpha - \\dfrac{8\\pi}{3}\\right) = \\cos\\left(2\\alpha - \\dfrac{2\\pi}{3}\\right)$.<br><br>$\\cos\\left(2\\alpha - \\dfrac{2\\pi}{3}\\right) + \\cos\\left(2\\alpha + \\dfrac{2\\pi}{3}\\right) = 2\\cos 2\\alpha\\cos\\dfrac{2\\pi}{3} = -\\cos 2\\alpha$.<br><br>ჯამი: $\\cos 2\\alpha - \\cos 2\\alpha = 0$.<br><br><strong>პასუხი:</strong> ბ) $0$.",
    area: "algebra",
    topics: ["reduction","product-sum"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 7
  {
    question: "ამოხსენით $\\sqrt{x + 1} < x - 1$ უტოლობა.",
    options: ["$x \\in [3;\\ +\\infty)$", "$x \\in (3;\\ +\\infty)$", "$x \\in (-\\infty;\\ 0)$", "$x \\in [-1;\\ +\\infty)$", "$x \\in \\varnothing$", "$x \\in \\mathbb{R}$"],
    correct: 1,
    tags: [],
    solution: "საჭიროა $x - 1 > 0$ და $x + 1 < (x - 1)^2$, ანუ $x^2 - 3x > 0$. $x > 1$-ზე ეს ნიშნავს $x > 3$.<br><br><strong>პასუხი:</strong> ბ) $x \\in (3;\\ +\\infty)$.",
    area: "algebra",
    topics: ["irrational-eq"],
    grade: 10,
    difficulty: 2,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 8
  {
    question: "იპოვეთ ალბათობა იმისა, რომ ორი კამათლის გაგორებისას ორივეზე მოსული ციფრების ჯამი მეტია $8$-ზე, თუ ვიცით, რომ ორივეზე მოვიდა <strong>კენტი</strong> ციფრი.",
    options: ["$\\dfrac{4}{5}$", "$\\dfrac{4}{9}$", "$\\dfrac{2}{9}$", "$\\dfrac{1}{9}$", "$\\dfrac{1}{5}$", "$\\dfrac{2}{5}$"],
    correct: 3,
    tags: [],
    solution: "ორივე კენტი: $3 \\cdot 3 = 9$ თანაბრად შესაძლო შედეგი. ჯამი $8$-ზე მეტია მხოლოდ $(5;\\ 5)$-ზე ($3 + 5 = 8$ არ არის მეტი).<br><br>$P = \\dfrac{1}{9}$.<br><br><strong>პასუხი:</strong> დ) $\\dfrac{1}{9}$.",
    area: "prob-stats",
    topics: ["probability"],
    grade: 10,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 9
  {
    question: "იპოვეთ $f(x) = \\sin\\left(2x + \\dfrac{\\pi}{3}\\right) + \\cos\\left(3x - \\dfrac{\\pi}{4}\\right)$ ფუნქციის უმცირესი დადებითი პერიოდი.",
    options: ["$\\dfrac{\\pi}{4}$", "$\\dfrac{\\pi}{2}$", "$3\\pi$", "$2\\pi$", "$\\pi$", "$4\\pi$"],
    correct: 3,
    tags: [],
    solution: "$\\sin\\left(2x + \\dfrac{\\pi}{3}\\right)$-ის პერიოდი $\\pi$, $\\cos\\left(3x - \\dfrac{\\pi}{4}\\right)$-ის — $\\dfrac{2\\pi}{3}$. ჯამის უმცირესი დადებითი პერიოდი მათი უმცირესი საერთო ჯერადია: $2\\pi$.<br><br><strong>პასუხი:</strong> დ) $2\\pi$.",
    area: "algebra",
    topics: ["function-props"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 10
  {
    question: "იპოვეთ $f(x) = \\dfrac{\\sqrt{\\sin x}}{\\arcsin(x - 4)}$ ფუნქციის განსაზღვრის არეში მოთავსებული მთელი რიცხვების რაოდენობა.",
    options: ["$2$", "$3$", "$1$", "$0$", "$4$", "$5$"],
    correct: 2,
    tags: [],
    solution: "$\\arcsin(x - 4)$: $3 \\le x \\le 5$; მნიშვნელში $\\arcsin(x - 4) \\ne 0$, ე.ი. $x \\ne 4$; ფესვქვეშ $\\sin x \\ge 0$.<br><br>$x = 3$: $3 < \\pi$, $\\sin 3 > 0$ ✓; $x = 5$: $\\pi < 5 < 2\\pi$, $\\sin 5 < 0$ ✗. ერთი მთელი რიცხვი.<br><br><strong>პასუხი:</strong> გ) $1$.",
    area: "algebra",
    topics: ["function-basics","inverse-trig"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 11
  {
    question: "$ABC$ სამკუთხედში $\\sin\\angle B = \\dfrac{1}{3}$ და $\\overrightarrow{BA} \\cdot \\overrightarrow{BC} = 16\\sqrt{2}$ (სკალარული ნამრავლი). იპოვეთ $ABC$ სამკუთხედის ფართობი.",
    options: ["$8$", "$4$", "$3$", "$24$", "$1$", "$6$"],
    correct: 1,
    tags: [],
    solution: "$\\overrightarrow{BA}\\cdot\\overrightarrow{BC} = |BA||BC|\\cos B > 0$, ამიტომ $\\cos B = \\dfrac{2\\sqrt{2}}{3}$ და $|BA||BC| = \\dfrac{16\\sqrt{2}}{2\\sqrt{2}/3} = 24$.<br><br>$S = \\dfrac{1}{2} \\cdot 24 \\cdot \\dfrac{1}{3} = 4$.<br><br><strong>პასუხი:</strong> ბ) $4$.",
    area: "geometry",
    topics: ["dot-product","area-formulas"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: ["vectors"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 12
  {
    question: "სიბრტყიდან $h$ მანძილით დაშორებული წერტილიდან გავლებულია ორი დახრილი, რომლებიც სიბრტყესთან $\\varphi$-ს ტოლ კუთხეებს ქმნიან, ხოლო ერთმანეთთან კი მართ კუთხეს. იპოვეთ მანძილი დახრილების ფუძეებს შორის.",
    options: ["$\\dfrac{h}{2 \\cdot \\sin\\varphi}$", "$\\dfrac{h}{\\sqrt{2} \\cdot \\sin\\varphi}$", "$\\dfrac{3h}{\\sqrt{2} \\cdot \\sin\\varphi}$", "$h \\cdot \\sin\\varphi$", "$\\dfrac{\\sqrt{2} \\cdot h}{\\sin\\varphi}$", "$\\dfrac{h}{\\sin\\varphi}$"],
    correct: 4,
    tags: [],
    solution: "თითოეული დახრილის სიგრძე $\\dfrac{h}{\\sin\\varphi}$. დახრილები ურთიერთმართობულია, ამიტომ მათ ფუძეებს შორის მანძილი — ტოლფერდა მართკუთხა სამკუთხედის ჰიპოტენუზა: $\\dfrac{\\sqrt{2}h}{\\sin\\varphi}$.<br><br><strong>პასუხი:</strong> ე) $\\dfrac{\\sqrt{2} \\cdot h}{\\sin\\varphi}$.",
    area: "solid",
    topics: ["angles-space","distances-space"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 13
  {
    question: "ქვემოთ ჩამოთვლილი ტოლობებიდან რომელია <strong>სამართლიანი</strong> ნებისმიერი $\\vec{a}$ და $\\vec{b}$ ვექტორებისთვის ($\\vec{a} \\cdot \\vec{b}$ არის სკალარული ნამრავლი; $[\\vec{a} \\times \\vec{b}]$ არის ვექტორული ნამრავლი)?",
    options: ["$(\\vec{a} \\cdot \\vec{b})^2 = \\vec{a}^{\\,2} \\cdot \\vec{b}^{\\,2}$", "$\\vec{a} \\cdot (\\vec{a} \\cdot \\vec{b}) = \\vec{a}^{\\,2} \\cdot \\vec{b}$", "$(\\vec{a} + \\vec{b})(\\vec{a} - \\vec{b}) = \\vec{a}^{\\,2} - \\vec{b}^{\\,2}$", "$(\\vec{a} - \\vec{b})^2 = \\vec{a}^{\\,2} - \\vec{b}^{\\,2}$", "$[\\vec{a} \\times \\vec{b}]^2 = \\vec{a}^{\\,2} \\cdot \\vec{b}^{\\,2}$", "$[(\\vec{a} + \\vec{b}) \\times (\\vec{a} - \\vec{b})] = [\\vec{a} \\times \\vec{a}] - [\\vec{b} \\times \\vec{b}]$"],
    correct: 2,
    tags: [],
    solution: "$(\\vec{a} + \\vec{b})(\\vec{a} - \\vec{b}) = \\vec{a}^{\\,2} - \\vec{a}\\cdot\\vec{b} + \\vec{b}\\cdot\\vec{a} - \\vec{b}^{\\,2} = \\vec{a}^{\\,2} - \\vec{b}^{\\,2}$ — სამართლიანია ყოველთვის.<br><br>დანარჩენი ზოგადად არასწორია: მაგ., ა) მხოლოდ კოლინეარულისთვისაა სწორი, ე) მხოლოდ ურთიერთმართობულისთვის.<br><br><strong>პასუხი:</strong> გ) $(\\vec{a} + \\vec{b})(\\vec{a} - \\vec{b}) = \\vec{a}^{\\,2} - \\vec{b}^{\\,2}$.",
    area: "geometry",
    topics: ["dot-product","vectors"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: ["vectors"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 14
  {
    question: "$ABC$ მართკუთხა სამკუთხედში ($\\angle C = 90^\\circ$) ჰიპოტენუზის სიგრძეა $5$. იპოვეთ $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} + \\overrightarrow{BC} \\cdot \\overrightarrow{BA} + \\overrightarrow{CA} \\cdot \\overrightarrow{CB}$ გამოსახულების მნიშვნელობა.",
    options: ["$1$", "$25$", "$10$", "$9$", "$15$", "$21$"],
    correct: 1,
    tags: [],
    solution: "$\\overrightarrow{CA}\\cdot\\overrightarrow{CB} = 0$ (მართი კუთხე). $\\overrightarrow{AB}\\cdot\\overrightarrow{AC} = |AB||AC|\\cos A = AC^2$, ანალოგიურად $\\overrightarrow{BC}\\cdot\\overrightarrow{BA} = BC^2$.<br><br>ჯამი: $AC^2 + BC^2 = AB^2 = 25$.<br><br><strong>პასუხი:</strong> ბ) $25$.",
    area: "geometry",
    topics: ["dot-product"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: ["vectors"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 15
  {
    question: "იპოვეთ $f(x) = 5\\cos^2 x - 6\\cos x + 2$ ფუნქციის უდიდესი მნიშვნელობა.",
    options: ["$15$", "$13$", "$14$", "$2$", "$1$", "$16$"],
    correct: 1,
    tags: [],
    solution: "$t = \\cos x \\in [-1;\\ 1]$: $5t^2 - 6t + 2$, წვერო $t = 0{,}6$ — მინიმუმი. მაქსიმუმი ბოლოებზეა: $t = -1$: $5 + 6 + 2 = 13$; $t = 1$: $1$.<br><br><strong>პასუხი:</strong> ბ) $13$.",
    area: "algebra",
    topics: ["trig-identities","max-min"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: ["substitution"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 16
  {
    question: "ქვემოთ ჩამოთვლილთაგან რომელ შუალედში მდებარეობს $\\arccos\\left(\\sin\\left(-\\dfrac{2\\pi}{9}\\right)\\right)$?",
    options: ["$\\left[0;\\ \\dfrac{\\pi}{4}\\right]$", "$\\left[\\dfrac{\\pi}{4};\\ \\dfrac{\\pi}{3}\\right]$", "$\\left[\\dfrac{\\pi}{3};\\ \\dfrac{\\pi}{2}\\right]$", "$\\left[\\dfrac{\\pi}{2};\\ \\dfrac{2\\pi}{3}\\right]$", "$\\left[\\dfrac{2\\pi}{3};\\ \\dfrac{3\\pi}{4}\\right]$", "$\\left[\\dfrac{3\\pi}{4};\\ \\dfrac{5\\pi}{6}\\right]$"],
    correct: 4,
    tags: [],
    solution: "$\\sin\\left(-\\dfrac{2\\pi}{9}\\right) = -\\sin 40^\\circ = -\\cos 50^\\circ$. $\\arccos(-\\cos 50^\\circ) = 180^\\circ - 50^\\circ = 130^\\circ = \\dfrac{13\\pi}{18}$.<br><br>$\\dfrac{2\\pi}{3} = \\dfrac{12\\pi}{18} < \\dfrac{13\\pi}{18} < \\dfrac{13{,}5\\pi}{18} = \\dfrac{3\\pi}{4}$.<br><br><strong>პასუხი:</strong> ე) $\\left[\\dfrac{2\\pi}{3};\\ \\dfrac{3\\pi}{4}\\right]$.",
    area: "algebra",
    topics: ["inverse-trig","reduction"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 17
  {
    question: "იპოვეთ $x$, თუ $B(x - 1;\\ -3)$ წერტილი არის $A(3;\\ 3)$ წერტილის ჰომოთეტიური $M(1;\\ 1)$ ცენტრის მიმართ.",
    options: ["$-1$", "$-3$", "$-2$", "$0$", "$3$", "$2$"],
    correct: 2,
    tags: [],
    solution: "$\\overrightarrow{MB} = k\\overrightarrow{MA}$: $(x - 2;\\ -4) = k(2;\\ 2)$, $k = -2$, $x - 2 = -4$, $x = -2$.<br><br><strong>პასუხი:</strong> გ) $-2$.",
    area: "geometry",
    topics: ["vectors"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: ["coordinates"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 18
  {
    question: "მოცემულია $20\\sin 2\\alpha + 21\\cos 2\\alpha = 29$. იპოვეთ $\\operatorname{ctg}\\alpha$.",
    options: ["$\\dfrac{1}{2}$", "$\\dfrac{3}{2}$", "$5$", "$\\dfrac{5}{2}$", "$\\dfrac{2}{5}$", "$\\dfrac{2}{3}$"],
    correct: 3,
    tags: [],
    solution: "$t = \\operatorname{tg}\\alpha$: $\\sin 2\\alpha = \\dfrac{2t}{1 + t^2}$, $\\cos 2\\alpha = \\dfrac{1 - t^2}{1 + t^2}$. $40t + 21 - 21t^2 = 29 + 29t^2$, $50t^2 - 40t + 8 = 0$, $(5t - 2)^2 = 0$, $t = \\dfrac{2}{5}$.<br><br>$\\operatorname{ctg}\\alpha = \\dfrac{5}{2}$.<br><br><strong>პასუხი:</strong> დ) $\\dfrac{5}{2}$.",
    area: "algebra",
    topics: ["sum-formulas"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: ["substitution"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 19
  {
    question: "იპოვეთ ალბათობა იმისა, რომ $[-5;\\ 5]$ შუალედიდან შემთხვევით შერჩეული ნამდვილი $x$ რიცხვი იქნება $\\sqrt{2x + 8} \\ge x$ უტოლობის ამონახსნი.",
    options: ["$0{,}5$", "$0{,}6$", "$0{,}7$", "$0{,}8$", "$0{,}9$", "$1$"],
    correct: 3,
    tags: [],
    solution: "განსაზღვრის არე $x \\ge -4$. $x < 0$-ზე უტოლობა სრულდება. $x \\ge 0$-ზე: $2x + 8 \\ge x^2$, $-2 \\le x \\le 4$. ამონახსნი $[-5;\\ 5]$-ში: $[-4;\\ 4]$, სიგრძე $8$.<br><br>$P = \\dfrac{8}{10} = 0{,}8$.<br><br><strong>პასუხი:</strong> დ) $0{,}8$.",
    area: "algebra",
    topics: ["irrational-eq","probability"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 20
  {
    question: "პრიზმის ყველა წახნაგის დიაგონალების რაოდენობა $20$-ის ტოლია. იპოვეთ ამ პრიზმის წიბოების რაოდენობა.",
    options: ["$18$", "$15$", "$12$", "$21$", "$24$", "$9$"],
    correct: 1,
    tags: [],
    solution: "$n$-კუთხა პრიზმა: ფუძეების დიაგონალები $2 \\cdot \\dfrac{n(n - 3)}{2} = n(n - 3)$, გვერდითი წახნაგების (პარალელოგრამების) — $2n$. $n(n - 3) + 2n = n^2 - n = 20$, $n = 5$.<br><br>წიბოები: $3n = 15$.<br><br><strong>პასუხი:</strong> ბ) $15$.",
    area: "solid",
    topics: ["prism"],
    grade: 10,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 21
  {
    question: "პირამიდის ფუძეა $1$ სმ და $2$ სმ სიგრძის კათეტების მქონე მართკუთხა სამკუთხედი. პირამიდის სიმაღლე ფუძის მართი კუთხის წვეროზე გადის და $3$ სმ-ის ტოლია. იპოვეთ პირამიდის სრული ზედაპირის ფართობი.",
    options: ["$15\\sqrt{3}$", "$5\\sqrt{3}$", "$9$", "$18$", "$2$", "$2\\sqrt{3} + 20$"],
    correct: 2,
    tags: [],
    solution: "$SC \\perp$ ფუძე, $CA = 1$, $CB = 2$, $SC = 3$. ფუძე: $1$; $SCA$: $\\dfrac{1 \\cdot 3}{2} = 1{,}5$; $SCB$: $\\dfrac{2 \\cdot 3}{2} = 3$.<br><br>$C$-დან $AB$-მდე: $CH = \\dfrac{1 \\cdot 2}{\\sqrt{5}}$; სამი მართობის თეორემით $SH \\perp AB$, $SH = \\sqrt{9 + \\dfrac{4}{5}} = \\dfrac{7}{\\sqrt{5}}$; $S_{SAB} = \\dfrac{1}{2} \\cdot \\sqrt{5} \\cdot \\dfrac{7}{\\sqrt{5}} = 3{,}5$.<br><br>სრული ზედაპირი: $1 + 1{,}5 + 3 + 3{,}5 = 9$.<br><br><strong>პასუხი:</strong> გ) $9$.",
    area: "solid",
    topics: ["pyramid","perpendicular-space"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 22
  {
    question: "$OAB$ სამკუთხედში გავლებულია $OC$ ბისექტრისა. $\\overrightarrow{OA} = 6\\vec{i} + 8\\vec{j}$; $\\overrightarrow{OB} = 5\\vec{i} + 12\\vec{j}$ ($\\vec{i}$ და $\\vec{j}$ ბაზისის ვექტორებია). იპოვეთ იმ <strong>ერთეულოვანი</strong> ვექტორის კოორდინატები, რომელიც $\\overrightarrow{OC}$ ვექტორის თანამიმართულია.",
    options: ["$\\left(\\dfrac{4}{13};\\ \\dfrac{7}{13}\\right)$", "$\\left(\\dfrac{2}{5};\\ \\dfrac{13}{10}\\right)$", "$(10;\\ 13)$", "$\\left(\\dfrac{4}{\\sqrt{65}};\\ \\dfrac{7}{\\sqrt{65}}\\right)$", "$\\left(\\dfrac{10}{\\sqrt{65}};\\ \\dfrac{13}{\\sqrt{65}}\\right)$", "$\\left(\\dfrac{2}{\\sqrt{65}};\\ \\dfrac{13}{\\sqrt{65}}\\right)$"],
    correct: 3,
    tags: [],
    solution: "$|\\overrightarrow{OA}| = 10$, $|\\overrightarrow{OB}| = 13$. ბისექტრისის მიმართულება — ერთეულოვანი ვექტორების ჯამი: $\\left(\\dfrac{6}{10} + \\dfrac{5}{13};\\ \\dfrac{8}{10} + \\dfrac{12}{13}\\right) = \\left(\\dfrac{64}{65};\\ \\dfrac{112}{65}\\right) \\parallel (4;\\ 7)$.<br><br>ერთეულოვანი: $\\left(\\dfrac{4}{\\sqrt{65}};\\ \\dfrac{7}{\\sqrt{65}}\\right)$.<br><br><strong>პასუხი:</strong> დ) $\\left(\\dfrac{4}{\\sqrt{65}};\\ \\dfrac{7}{\\sqrt{65}}\\right)$.",
    area: "geometry",
    topics: ["vectors"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: ["vectors"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 23
  {
    question: "იპოვეთ $x$, თუ $\\operatorname{tg} x = \\dfrac{2 - (1 + \\operatorname{tg} 13^\\circ)^2}{2 - (1 - \\operatorname{tg} 13^\\circ)^2}$.",
    options: ["$16^\\circ + 180^\\circ n,\\ n \\in \\mathbb{Z}$", "$26^\\circ + 180^\\circ n,\\ n \\in \\mathbb{Z}$", "$21^\\circ + 180^\\circ n,\\ n \\in \\mathbb{Z}$", "$71^\\circ + 180^\\circ n,\\ n \\in \\mathbb{Z}$", "$13^\\circ + 180^\\circ n,\\ n \\in \\mathbb{Z}$", "$19^\\circ + 180^\\circ n,\\ n \\in \\mathbb{Z}$"],
    correct: 5,
    tags: [],
    solution: "$t = \\operatorname{tg} 13^\\circ$: მრიცხველი $1 - 2t - t^2$, მნიშვნელი $1 + 2t - t^2$. გავყოთ $1 - t^2$-ზე და გამოვიყენოთ $\\operatorname{tg} 26^\\circ = \\dfrac{2t}{1 - t^2}$:<br><br>$\\operatorname{tg}x = \\dfrac{1 - \\operatorname{tg} 26^\\circ}{1 + \\operatorname{tg} 26^\\circ} = \\operatorname{tg}(45^\\circ - 26^\\circ) = \\operatorname{tg} 19^\\circ$.<br><br><strong>პასუხი:</strong> ვ) $19^\\circ + 180^\\circ n,\\ n \\in \\mathbb{Z}$.",
    area: "algebra",
    topics: ["sum-formulas"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 24
  {
    question: "იპოვეთ $a$ პარამეტრის ყველა მნიშვნელობა, რომელთათვისაც $\\left|5\\sin^2 x + \\cos x - 7\\right| = a$ განტოლებას გააჩნია ამონახსნი.",
    options: ["$a \\in [2;\\ 8]$", "$a \\in \\left[\\dfrac{39}{20};\\ 8\\right]$", "$a \\in \\left[\\dfrac{20}{39};\\ 8\\right]$", "$a \\in \\left[\\dfrac{1}{20};\\ 8\\right]$", "$a \\in \\left[\\dfrac{1}{20};\\ \\dfrac{39}{20}\\right]$", "$a \\in \\left[\\dfrac{1}{2};\\ \\dfrac{39}{20}\\right]$"],
    correct: 1,
    tags: [],
    solution: "$c = \\cos x \\in [-1;\\ 1]$: $5\\sin^2 x + \\cos x - 7 = -5c^2 + c - 2$. წვერო $c = \\dfrac{1}{10}$: $-\\dfrac{39}{20}$ (მაქსიმუმი); $c = -1$: $-8$ (მინიმუმი).<br><br>გამოსახულება $\\left[-8;\\ -\\dfrac{39}{20}\\right]$-შია, მოდული — $\\left[\\dfrac{39}{20};\\ 8\\right]$-ში.<br><br><strong>პასუხი:</strong> ბ) $a \\in \\left[\\dfrac{39}{20};\\ 8\\right]$.",
    area: "algebra",
    topics: ["trig-identities","max-min"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: ["parameter","substitution"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 25
  {
    question: "$ABCDA_1B_1C_1D_1$ პარალელეპიპედის ($AA_1 \\parallel BB_1 \\parallel CC_1 \\parallel DD_1$) ფუძე არის კვადრატი. $AA_1$ გვერდითი წიბო ფუძის $AB$ და $AD$ გვერდებთან ქმნის $60^\\circ$-ის ტოლ კუთხეებს. იპოვეთ $AA_1C_1C$ და $BB_1D_1D$ დიაგონალური კვეთების ფართობთა შეფარდება.",
    options: ["$\\dfrac{\\sqrt{3}}{2}$", "$\\sqrt{2}$", "$\\dfrac{1}{\\sqrt{2}}$", "$\\dfrac{2}{3}$", "$1$", "$\\dfrac{1}{2}$"],
    correct: 2,
    tags: [],
    solution: "$AA_1$ ტოლ კუთხეებს ადგენს $AB$-სა და $AD$-სთან, ამიტომ მისი გეგმილი $AC$-ზეა და $AA_1 \\perp BD$: $BB_1D_1D$ მართკუთხედია, ფართობი $a\\sqrt{2} \\cdot l$ ($a$ — ფუძის გვერდი, $l$ — გვერდითი წიბო).<br><br>$AA_1$-სა და $AC$-ს შორის კუთხე $\\theta$: $\\cos 60^\\circ = \\cos\\theta\\cos 45^\\circ$, $\\cos\\theta = \\dfrac{1}{\\sqrt{2}}$, $\\theta = 45^\\circ$. $S_{AA_1C_1C} = a\\sqrt{2} \\cdot l \\cdot \\sin 45^\\circ = al$.<br><br>შეფარდება: $\\dfrac{al}{a\\sqrt{2}l} = \\dfrac{1}{\\sqrt{2}}$.<br><br><strong>პასუხი:</strong> გ) $\\dfrac{1}{\\sqrt{2}}$.",
    area: "solid",
    topics: ["prism","angles-space"],
    grade: 10,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];
