const quizData = [
  //1
  {
    question: "რისი ტოლია $\\cos(\\alpha + \\beta) + \\cos(\\alpha - \\beta)$ გამოსახულების მნიშვნელობა?",
    options: [
      "$2 \\cos \\alpha \\cdot \\cos \\beta$",
      "$\\cos \\alpha \\cdot \\cos \\beta$",
      "$0$",
      "$1$",
      "$\\tan \\alpha$",
      "$\\cot \\alpha$"
    ],
    correct: 0,
    tags: ["trigonometry", "sum identity"]
  },

  //2
  {
    question: "რისი ტოლია $2 \\cdot \\sin \\alpha \\cdot \\cos \\beta$ გამოსახულების მნიშვნელობა?",
    options: [
      "$\\sin(\\alpha + \\beta) + \\sin(\\beta - \\alpha)$",
      "$\\sin(\\alpha + \\beta) + \\sin(\\alpha - \\beta)$",
      "$\\cos \\alpha \\cdot \\sin \\beta$",
      "$\\cos \\alpha \\cdot \\cos \\beta$",
      "$2$",
      "$3$"
    ],
    correct: 1,
    tags: ["trigonometry", "product-to-sum"]
  },

  //3
  {
    question: "რისი ტოლია $\\cos \\alpha - \\cos \\beta$ გამოსახულების მნიშვნელობა?",
    options: [
      "$2 \\sin\\left(\\dfrac{\\alpha - \\beta}{2}\\right) \\cdot \\sin\\left(\\dfrac{\\alpha + \\beta}{2}\\right)$",
      "$2 \\cos\\left(\\dfrac{\\alpha - \\beta}{2}\\right) \\cdot \\sin\\left(\\dfrac{\\alpha + \\beta}{2}\\right)$",
      "$2 \\cos\\left(\\dfrac{\\alpha - \\beta}{2}\\right) \\cdot \\cos\\left(\\dfrac{\\alpha + \\beta}{2}\\right)$",
      "$-2 \\cos\\left(\\dfrac{\\alpha - \\beta}{2}\\right) \\cdot \\cos\\left(\\dfrac{\\alpha + \\beta}{2}\\right)$",
      "$-2 \\sin\\left(\\dfrac{\\alpha - \\beta}{2}\\right) \\cdot \\sin\\left(\\dfrac{\\alpha + \\beta}{2}\\right)$",
      "$2 \\sin\\left(\\dfrac{\\alpha - \\beta}{2}\\right) \\cdot \\sin\\left(\\dfrac{\\alpha + \\beta}{2}\\right)$"
    ],
    correct: 4,
    tags: ["trigonometry", "difference identity"]
  },

  //4
  {
    question: "რისი ტოლია $\\dfrac{\\sin(\\alpha + \\beta)}{\\cos \\alpha \\cdot \\cos \\beta}$ გამოსახულების მნიშვნელობა?",
    options: [
      "$\ tg \\alpha + \ tg \\beta$",
      "$\\cos(2\\alpha - \\beta)$",
      "$1$",
      "$\\dfrac{\\sqrt{3}}{2}$",
      "$-1$",
      "$\ ctg \\alpha + \ ctg \\beta$"
    ],
    correct: 0,
    tags: ["trigonometry", "identity"]
  },

  //5
  {
    question: "მართი პარალელეპიპედის ფუძეა რომბი, რომელიც პარალელეპიპედის მცირე დიაგონალური კვეთის ტოლდიდია. იპოვეთ პარალელეპიპედის გვერდითი ზედაპირის ფართობი, თუ რომბის გვერდია $1$, ხოლო რომბის მახვილი კუთხეა $60^\\circ$.",
    options: [
      "$2\\sqrt{3}$",
      "$3\\sqrt{2}$",
      "$3$",
      "$\\sqrt{3} + 2\\sqrt{2}$",
      "$2$",
      "$1{,}4$"
    ],
    correct: 0,
    tags: ["geometry", "surface area"]
  },


//6
  {
    question: "რისი ტოლია $3\\sin x + 4\\cos x$ გამოსახულების მაქსიმალური მნიშვნელობა?",
    options: ["$3$", "$4$", "$5$", "$6$", "$7$", "$8$"],
    correct: 2,
    tags: ["trigonometry", "maximum"]
  },

  //7
  {
    question: "დაშალეთ მამრავლებად: $\\sin x - \\sin y + \\sin(x - y)$",
    options: [
      "$2\\sin\\left(\\dfrac{x - y}{2}\\right) \\sin\\left(\\dfrac{y}{2}\\right)$",
      "$4\\sin\\left(\\dfrac{x - y}{2}\\right) \\cos\\left(\\dfrac{x}{2}\\right) \\cos\\left(\\dfrac{y}{2}\\right)$",
      "$4\\sin\\left(\\dfrac{x - y}{2}\\right) \\sin\\left(\\dfrac{y}{2}\\right)$",
      "$4\\sin\\left(\\dfrac{x - y}{2}\\right) \\cos\\left(\\dfrac{y}{2}\\right)$",
      "$2\\sin\\left(\\dfrac{x - y}{2}\\right) \\cos\\left(\\dfrac{y}{2}\\right)$",
      "$4\\sin\\left(\\dfrac{y}{2}\\right) \\cos\\left(\\dfrac{y}{2}\\right)$"
    ],
    correct: 1,
    tags: ["trigonometry", "factoring"]
  },

  //8
  {
    question: "$ABCA_1B_1C_1$ მართი სამკუთხა პრიზმის ფუძეა $ABC$ მართკუთხა სამკუთხედი, რომლის $AC$ კათეტია $1$, ხოლო $BC$ კათეტია $1{,}5$. იპოვეთ $ACB_1$ სამკუთხედის ფართობი, თუ პრიზმის სიმაღლეა $\\dfrac{\\sqrt{3}}{2}$.",
    options: ["$\\dfrac{1}{2}$", "$\\dfrac{2}{3}$", "$1{,}5$", "$\\dfrac{\\sqrt{3}}{2}$", "$1$", "$1{,}4$"],
    correct: 3,
    tags: ["geometry", "area"]
  },

  //9
  {
    question: "წესიერი ექვსკუთხა პრიზმის თითოეული წიბოს სიგრძეა $b$. რისი ტოლია ამ ექვსკუთხა პრიზმის ყველა დიაგონალის სიგრძეთა ჯამი?",
    options: ["$18b$", "$6\\sqrt{5}b$", "$24b$", "$7\\sqrt{5}b + 14b$", "$6\\sqrt{5}b + 24b$", "$4\\sqrt{7}b + 28b$"],
    correct: 4,
    tags: ["geometry", "diagonals"]
  },

  //10
  {
    question: "პატარა გიგიმ სხვადასხვა ფიგურებით ააგო სასახლე ისე, რომ მიიღო სივრცული მრავალწახნაგა სხეული, რომელსაც ჰქონდა $20$ წვერო და $36$ წიბო. რამდენი წახნაგი აქვს ამ სხეულს?",
    options: ["$10$", "$14$", "$12$", "$16$", "$20$", "$18$"],
    correct: 5,
    tags: ["geometry", "polyhedra"]
  },

  //11
  {
    question: "რა მრავალკუთხედი შეიძლება მივიღოთ ტრაპეციის რაიმე სიბრტყეზე პარალელური დაგეგმილებით?",
    options: ["სამკუთხედი", "კვადრატი", "მართკუთხედი", "პარალელოგრამი", "რომბი", "ტრაპეცია"],
    correct: 5,
    tags: ["geometry", "cross-section"]
  },

  //12
  {
    question: "იპოვეთ $y = 2\\cos\\left(2x - \\dfrac{\\pi}{4}\\right) + 1$ ფუნქციის გრაფიკის ორდინატათა ღერძთან კვეთის წერტილის ორდინატა.",
    options: ["$2$", "$3$", "$-\\sqrt{2} + 1$", "$-\\sqrt{2} - 1$", "$\\sqrt{2} + 1$", "$\\sqrt{2} - 1$"],
    correct: 4,
    tags: ["functions", "graph"]
  },

  //13
  {
    question: "მართი პრიზმის ფუძეა პარალელოგრამი $1$ და $2$-ის ტოლი გვერდებით. პრიზმის სიმაღლეა $3$, ხოლო მცირე დიაგონალი დახრილია ფუძის სიბრტყისადმი $60^\\circ$-იანი კუთხით. იპოვეთ პრიზმის სრული ზედაპირის ფართობი?",
    options: ["$\\sqrt{5} + 38$", "$\\sqrt{15} + 18$", "$\\sqrt{35} + 8$", "$2\\sqrt{3} + 18$", "$\\sqrt{7{,}5} + 18$", "$\\sqrt{35} + 9$"],
    correct: 3,
    tags: ["geometry", "surface area"]
  },

  //14
  {
    question: "დაადგინეთ $y = |2\\sin(3x - 7) - 1| + 1$ ფუნქციის მნიშვნელობათა სიმრავლე.",
    options: ["$[1; 4]$", "$[1; 5]$", "$[1; 3]$", "$[1; 4{,}5]$", "$[0; 4]$", "$\\mathbb{R}$"],
    correct: 0,
    tags: ["functions", "range"]
  },

  //15
  {
    question: "ჩამოთვლილთაგან რომელია ჭეშმარიტი, თუ მთელ რიცხვით ღერძზე განსაზღვრული $f, g$ და $h$ ფუნქციებისათვის, $y = (f(\\sin2 x) - g(\\cos3 x)) \\cdot h(\ tg 1{,}5x)$ არის ლუწი.",
    options: [
      "$f$ და $g$ კენტია, $h$ ნებისმიერია",
      "$f$ და $h$ ლუწია, $g$ ნებისმიერია",
      "$f$ და $g$ ლუწია, $h$ ნებისმიერია",
      "$f$ და $h$ კენტია, $g$ ნებისმიერია",
      "$g$ და $h$ ლუწია, $f$ ნებისმიერია",
      "$g$ და $h$ კენტია, $f$ ნებისმიერია"
    ],
    correct: 1,
    tags: ["even/odd", "functions"]
  },

  //16
  {
    question: "გამოთვალეთ გამოსახულების მნიშვნელობა: $\\sin 20^\\circ \\cdot \\sin 40^\\circ \\cdot \\sin 80^\\circ$",
    options: [
      "$\\sin 40^\\circ + \\sin 20^\\circ$",
      "$\\dfrac{1}{4} \\cos 10^\\circ$",
      "$\\dfrac{1}{8} \ tg 20^\\circ$",
      "$\\dfrac{3}{8}$",
      "$\\dfrac{\\sqrt{3}}{8}$",
      "$\\dfrac{\\sqrt{3}}{2}$"
    ],
    correct: 4,
    tags: ["trigonometry", "product"]
  },

  //17
  {
    question: "გამოთვალეთ გამოსახულების მნიშვნელობა: $\\cos 20^\\circ \\cdot \\cos 40^\\circ \\cdot \\cos 60^\\circ \\cdot \\cos 80^\\circ$",
    options: [
      "$\\dfrac{1}{16}$",
      "$\\dfrac{1}{8}$",
      "$\\dfrac{1}{4}$",
      "$\\dfrac{1}{2}$",
      "$-\\dfrac{1}{4}$",
      "$-\\dfrac{1}{8}$"
    ],
    correct: 0,
    tags: ["trigonometry", "product"]
  },

  //18
  {
    question: "ჩამოთვლილთაგან რისი ტოლი უნდა იყოს $k$ პარამეტრი, რომ $f(x) = \\sin(\\sqrt{2}x) + \\sin(kx)$ ფუნქცია იყოს პერიოდული?",
    options: ["$k = 1$", "$k = 2$", "$k = \\sqrt{3}$", "$k = \\dfrac{1}{\\sqrt{2}}$", "$k \\in \\mathbb{R}$", "$k \\in \\mathbb{R} \\setminus \\{0\\}$"],
    correct: 3,
    tags: ["periodicity", "parameters"]
  },

  //19
  {
    question: "წესიერი ოთხკუთხა პრიზმის დიაგონალური კვეთა კვადრატია. იპოვეთ იმ კუთხის კოსინუსი, რომელსაც პრიზმის დიაგონალი ადგენს გვერდით წახნაგთან.",
    options: ["$\\dfrac{\\sqrt{3}}{2}$", "$\\dfrac{\\sqrt{3}}{\\sqrt{7}}$", "$\\dfrac{2\\sqrt{3}}{3}$", "$\\dfrac{\\sqrt{3}}{4}$", "$\\dfrac{\\sqrt{3}}{\\sqrt{5}}$", "$\\dfrac{0{,}3\\sqrt{3}}{2}$"],
    correct: 0,
    tags: ["geometry", "cosine"]
  },

  //20
  {
    question: "პირველი მართი ოთხკუთხა პრიზმის სიმაღლეა $4$, ხოლო ფუძეში მყოფი ოთხკუთხედის დიაგონალების ჯამია $10$. მეორე ოთხკუთხა პრიზმის წვეროები ემთხვევა პირველის ფუძეების გვერდების შუაწერტილებს. იპოვეთ მეორე პრიზმის გვერდითი ზედაპირის ფართობი.",
    options: ["$20$", "$24$", "$28$", "$32$", "$36$", "$40$"],
    correct: 5,
    tags: ["geometry", "surface area"]
  },

    //21
  {
    question: "იპოვეთ $a$ პარამეტრის ყველა შესაძლო მნიშვნელობა, თუ ცნობილია, რომ $y = |a \\cdot \\cos x + 3|$ ფუნქციის მნიშვნელობათა სიმრავლეა $[0; a + 3]$.",
    options: ["$a < 0$", "$a \\geq 3$", "$a \\leq 0$", "$a \\geq 0$", "$a \\in [2{,}5; 15]$", "$a \\in [2{,}5; 27{,}5]$"],
    correct: 1,
    tags: ["functions", "range", "parameters"]
  },

  //22
  {
    question: "დაადგინეთ $y = 2 \\cdot \\cos x - 3 \\cdot \\sqrt{\\cos x} - \\dfrac{3}{8}$ ფუნქციის მნიშვნელობათა სიმრავლე.",
    options: [
      "$y \\in \\mathbb{R}$",
      "$y \\in$ ∅",
      "$y \\in \\left[ -\\dfrac{3}{2}; -1\\dfrac{3}{8} \\right]$",
      "$y \\in [0; 1]$",
      "$y \\in [0; +\\infty)$",
      "$y \\in \\left[ -\\dfrac{3}{2}; -\\dfrac{3}{8} \\right]$"
    ],
    correct: 5,
    tags: ["functions", "domain", "range"]
  },

  //23
  {
    question: "რამდენი წყვეტის წერტილი ექნება $y = 3 \ tg(2x + 3)$ ფუნქციას, როცა $x \\in [0; 2\\pi]$?",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 3,
    tags: ["functions", "discontinuity", "tangent"]
  },

  //24
  {
    question: "სამკუთხა პრიზმის ფუძეა ტოლგვერდა სამკუთხედი, ხოლო ორი გვერდითი წახნაგი $a$ გვერდის მქონე ტოლი რომბებია. თითოეული გვერდითი წიბო დახრილია ფუძის სიბრტყისადმი $60^\\circ$-იანი კუთხით. იპოვეთ პრიზმის გვერდითი ზედაპირის ფართობი?",
    options: [
      "$\\dfrac{\\sqrt{13}a^2}{5}$",
      "$\\dfrac{2a^2 + \\sqrt{13}a^2}{2}$",
      "$\\dfrac{4a^2 + \\sqrt{13}a^2}{2}$",
      "$\\dfrac{2\\sqrt{13}a^2}{3}$",
      "$\\dfrac{5\\sqrt{26}a^2}{7}$",
      "$\\dfrac{5\\sqrt{26}a^2}{5}$"
    ],
    correct: 1,
    tags: ["geometry", "surface area"]
  },

  //25
  {
    question: "მართკუთხედის დიაგონალების გადაკვეთის წერტილზე გავლებულია სიბრტყე ისე, რომ მართკუთხედის ორი წვერო (რომლებიც სიბრტყის ერთმხარესაა) სიბრტყიდან დაშორებულები არიან $1$ და $2$ ერთეულით. მართკუთხედის დიაგონალებია $6$-ის ტოლი, ხოლო დიაგონალებს შორის $60^\\circ$-ია. იპოვეთ ამ მართკუთხედის ამავე სიბრტყეზე დაგეგმილებით მიღებული ფიგურის ფართობი.",
    options: [
      "$3\\sqrt{15}$",
      "$5\\sqrt{13}$",
      "$2\\sqrt{65}$",
      "$5\\sqrt{31}$",
      "$10\\sqrt{7}$",
      "$11\\sqrt{8}$"
    ],
    correct: 0,
    tags: ["geometry", "spatial", "area"]
  }
];
