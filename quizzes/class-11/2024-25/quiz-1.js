quizData = [
  // 1
  {
    question: "$\\log_{81}{27} = ?$",
    options: ["$0{,}75$", "$0{,}5$", "$0{,}199$", "$0{,}25$", "$0{,}9$", "$0{,}6$"],
    correct: 0,
    solution: "$\\log_{81}27 = \\log_{3^4}3^3 = \\dfrac{3}{4} = 0{,}75$.<br><br><strong>პასუხი:</strong> ა) $0{,}75$.",
    tags: [],
    area: "algebra",
    topics: ["logarithms"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 2
  {
    question: "თუ $\\log_{2}{3} = a$ ; $\\log_{2}{5} = b$, ქვემოთჩამოთვლილთაგან რისი ტოლია $\\log_{12}{80}$?",
    options: [
      "$\\frac{2b}{3a}$",
      "$\\frac{2a}{5b}$",
      "$\\frac{b+4}{a+2}$",
      "$\\frac{b+6}{a+8}$",
      "$\\frac{2a+3}{3b+4}$",
      "$\\frac{2b+1}{3a+2}$"
    ],
    correct: 2,
    solution: "$\\log_{12}80 = \\dfrac{\\log_2 80}{\\log_2 12} = \\dfrac{\\log_2(2^4 \\cdot 5)}{\\log_2(2^2 \\cdot 3)} = \\dfrac{4 + b}{2 + a}$.<br><br><strong>პასუხი:</strong> გ) $\\frac{b+4}{a+2}$.",
    tags: [],
    area: "algebra",
    topics: ["logarithms"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 3
  {
    question: "ქვემოთჩამოთვლილთაგან, რომელი რიცხვი არ არის $y = \\sqrt{\\log_{9}(6x + 1) + \\log_{199}(7x + 1)}$ ფუნქციის განსაზღვრის არეში?",
    options: ["$2$", "$1$", "$0{,}3$", "$0{,}1$", "$−0{,}1$", "$3$"],
    correct: 4,
    solution: "საჭიროა $6x + 1 > 0$, $7x + 1 > 0$ და ლოგარითმების ჯამი $\\ge 0$. $x \\ge 0$-ზე ორივე ლოგარითმი არაუარყოფითია.<br><br>$x = -0{,}1$-ზე $6x + 1 = 0{,}4 < 1$ და $7x + 1 = 0{,}3 < 1$ — ორივე ლოგარითმი უარყოფითია, ჯამიც უარყოფითია, ფესვს აზრი არ აქვს.<br><br><strong>პასუხი:</strong> ე) $−0{,}1$.",
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
  // 4
  {
    question: "სამკუთხა პრიზმის გვერდით წიბოებს შორის მანძილები, შესაბამისად, $3$-ის, $4$-ისა და $5$-ის ტოლია. ამ პრიზმის გვერდითი წიბოს სიგრძეა $6$. რისი ტოლია პრიზმის მოცულობა?",
    options: ["$180$", "$18$", "$12$", "$36$", "$60$", "$90$"],
    correct: 3,
    solution: "გვერდითი წიბოს მართობული კვეთა სამკუთხედია გვერდებით $3, 4, 5$ (მართკუთხა), ფართობით $6$.<br><br>$V = S_{\\perp} \\cdot l = 6 \\cdot 6 = 36$.<br><br><strong>პასუხი:</strong> დ) $36$.",
    tags: [],
    area: "solid",
    topics: ["prism","volume-surface"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 5
  {
    question: "კონუსის ღერძული კვეთის ფართობი ფუძის ფართობის ტოლია. რას უდრის კუთხის ტანგენსი მსახველსა და ფუძის სიბრტყეს შორის?",
    options: ["$1$", "$3$", "$2$", "$\\sqrt{2}$", "$\\pi$", "$3\\sqrt{3}$"],
    correct: 4,
    solution: "ღერძული კვეთა სამკუთხედია ფუძით $2r$ და სიმაღლით $h$: $rh = \\pi r^2$, $h = \\pi r$.<br><br>$\\tan\\varphi = \\dfrac{h}{r} = \\pi$.<br><br><strong>პასუხი:</strong> ე) $\\pi$.",
    tags: [],
    area: "solid",
    topics: ["cone","cross-sections"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
    // 6
  {
    question: "$\\log_7 3$, $\\log_7 x$, $\\log_7 y$, $\\log_7 24$ რიცხვები ამ თანმიმდევრობით ადგენს არითმეტიკულ პროგრესიას. რისი ტოლია $x + y$?",
    options: ["$18$", "$72$", "$2{,}1$", "$25$", "$16{,}8$", "$27$"],
    correct: 0,
    solution: "ლოგარითმები არითმეტიკულ პროგრესიას ადგენს, ამიტომ $3, x, y, 24$ გეომეტრიულ პროგრესიას ადგენს: $q^3 = 8$, $q = 2$.<br><br>$x = 6$, $y = 12$, $x + y = 18$.<br><br><strong>პასუხი:</strong> ა) $18$.",
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
  // 7
  {
    question: "რისი ტოლია $x$, თუ $\\frac{1}{\\log_2 x} + \\frac{1}{\\log_3 x} + \\frac{1}{\\log_4 x} = 1$?",
    options: ["$18$", "$12$", "$9$", "$1$", "$36$", "$24$"],
    correct: 5,
    solution: "$\\dfrac{1}{\\log_k x} = \\log_x k$, ამიტომ $\\log_x 2 + \\log_x 3 + \\log_x 4 = \\log_x 24 = 1$, $x = 24$.<br><br><strong>პასუხი:</strong> ვ) $24$.",
    tags: [],
    area: "algebra",
    topics: ["logarithms"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 8
  {
    question: "წესიერი ოთხკუთხა პირამიდის ფუძის გვერდის სიგრძეა $2$, ხოლო გვერდითი წიბოს სიგრძეა $3$. იპოვეთ პირამიდის გვერდითი ზედაპირის ფართობი.",
    options: [
      "$\\frac{4}{3}$",
      "$8\\sqrt{2}$",
      "$\\frac{5\\sqrt{2}}{3}$",
      "$\\frac{4\\sqrt{3}}{3}$",
      "$2\\sqrt{7}$",
      "$2\\sqrt{3}$"
    ],
    correct: 1,
    solution: "აპოთემა (გვერდითი წახნაგის სიმაღლე): $\\sqrt{3^2 - 1^2} = 2\\sqrt{2}$.<br><br>$S_{გვ} = 4 \\cdot \\dfrac{1}{2} \\cdot 2 \\cdot 2\\sqrt{2} = 8\\sqrt{2}$.<br><br><strong>პასუხი:</strong> ბ) $8\\sqrt{2}$.",
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
  // 9
  {
    question: "კონუსში მოიძებნება სამი, წყვილ-წყვილად ურთიერთმართობული მსახველი. რისი ტოლია მსახველსა და ფუძეს შორის მდებარე კუთხის ტანგენსის კვადრატი?",
    options: ["$1{,}5$", "$1$", "$0{,}5$", "$2{,}5$", "$2{,}1$", "შეუძლებელია დადგენა"],
    correct: 2,
    solution: "სამი ურთიერთმართობული მსახველის (სიგრძით $l$) ბოლოები ქმნის ტოლგვერდა სამკუთხედს გვერდით $l\\sqrt{2}$, რომელიც ფუძის წრეწირშია ჩახაზული: $r = \\dfrac{l\\sqrt{2}}{\\sqrt{3}}$.<br><br>$h = \\sqrt{l^2 - r^2} = \\dfrac{l}{\\sqrt{3}}$, $\\tan\\varphi = \\dfrac{h}{r} = \\dfrac{1}{\\sqrt{2}}$, $\\tan^2\\varphi = 0{,}5$.<br><br><strong>პასუხი:</strong> გ) $0{,}5$.",
    tags: [],
    area: "solid",
    topics: ["cone","rhombus-rect-sq"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 10
  {
    question: "$(625^{\\log_5 2024})^{0{,}25}$",
    options: ["$5$", "$5^{506}$", "$\\sqrt[4]{2024}$", "$506$", "$625$", "$2024$"],
    correct: 5,
    solution: "$(625^{\\log_5 2024})^{0{,}25} = (5^4)^{0{,}25\\log_5 2024} = 5^{\\log_5 2024} = 2024$.<br><br><strong>პასუხი:</strong> ვ) $2024$.",
    tags: [],
    area: "algebra",
    topics: ["logarithms"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
    // 11
  {
    question: "მოცემულია სამი განტოლება: I. $\\log_3(x^2) + \\log_3(x^3) = 1$; II. $\\log_3(x^2) + \\log_3(x^4) = 1$; III. $9^x - 3^{x+3} = 1$. ამ განტოლებებიდან, რომელს აქვს ზუსტად ორი ცალი ამონახსენი?",
    options: [
      "მხოლოდ I-ს",
      "მხოლოდ II-ს",
      "სამივეს",
      "მხოლოდ I-ს და II-ს",
      "არცერთს",
      "მხოლოდ III-ს"
    ],
    correct: 1,
    solution: "I. $x^3 > 0$-დან $x > 0$: $5\\log_3 x = 1$ — ერთი ამონახსნი.<br>II. $x \\ne 0$: $2\\log_3|x| + 4\\log_3|x| = 1$, $|x| = 3^{1/6}$ — ორი ამონახსნი.<br>III. $t = 3^x > 0$: $t^2 - 27t - 1 = 0$-ს ერთი დადებითი ფესვი აქვს — ერთი ამონახსნი.<br><br><strong>პასუხი:</strong> ბ) მხოლოდ II-ს.",
    tags: [],
    area: "algebra",
    topics: ["log-eq"],
    grade: 11,
    difficulty: 2,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 12
  {
    question: "$x$ ნატურალური რიცხვია და $\\log_2(\\log_{16} x) = \\log_4(\\log_4 x)$. იპოვეთ $x$-ის ციფრთა ჯამი.",
    options: ["$2$", "$4$", "$10$", "$7$", "$13$", "$15$"],
    correct: 4,
    solution: "$u = \\log_2 x$: $\\log_{16}x = \\dfrac{u}{4}$, $\\log_4 x = \\dfrac{u}{2}$. $\\log_2\\dfrac{u}{4} = \\dfrac{1}{2}\\log_2\\dfrac{u}{2}$, ანუ $\\left(\\dfrac{u}{4}\\right)^2 = \\dfrac{u}{2}$, $u = 8$.<br><br>$x = 2^8 = 256$, ციფრთა ჯამი $13$.<br><br><strong>პასუხი:</strong> ე) $13$.",
    tags: [],
    area: "algebra",
    topics: ["divisibility","logarithms"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 13
  {
    question: "$y = \\log_3(15 − 12\\sin x)$ ფუნქციის მნიშვნელობათა სიმრავლეში მდებარე ყველა მთელი რიცხვის ჯამია",
    options: ["$1$", "$9$", "$2$", "$6$", "$5$", "$3$"],
    correct: 3,
    solution: "$15 - 12\\sin x \\in [3; 27]$, ამიტომ $y \\in [1; 3]$.<br><br>მთელი რიცხვები $1, 2, 3$, ჯამი $6$.<br><br><strong>პასუხი:</strong> დ) $6$.",
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
  // 14
  {
    question: "$(\\log_2(4x))^2 + \\log_2(8x) = 13$ განტოლების ამონახსნების ჯამია:",
    options: [
      "$3$",
      "$\\frac{2\\sqrt{2}+3}{\\sqrt{2}}$",
      "$\\frac{129}{64}$",
      "$\\frac{2\\sqrt[6]{2}+1}{\\sqrt[6]{2}}$",
      "$\\frac{67}{32}$",
      "$2$"
    ],
    correct: 2,
    solution: "$t = \\log_2 x$: $(2 + t)^2 + 3 + t = 13$, $t^2 + 5t - 6 = 0$, $t = 1$ ან $t = -6$.<br><br>$x = 2$ ან $x = \\dfrac{1}{64}$, ჯამი $\\dfrac{129}{64}$.<br><br><strong>პასუხი:</strong> გ) $\\frac{129}{64}$.",
    tags: [],
    area: "algebra",
    topics: ["log-eq"],
    grade: 11,
    difficulty: 2,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 15
  {
    question: "$DABC$ პირამიდის ფუძეშია $ABC$ სამკუთხედი. $AB = 5$, $AC = 3$, $BC = 4$, $BD = 4$, $AD = 3$, $CD = \\frac{12\\sqrt{2}}{5}$. იპოვეთ პირამიდის სიმაღლე.",
    options: [
      "$\\frac{12}{5}$",
      "$2\\sqrt{5}$",
      "$3\\sqrt{2}$",
      "$3\\sqrt{3}$",
      "$\\frac{12\\sqrt{3}}{5}$",
      "$6$"
    ],
    correct: 0,
    solution: "$ABC$ მართკუთხაა ($3^2 + 4^2 = 5^2$, $\\angle C = 90^\\circ$). $C(0; 0; 0)$, $A(3; 0; 0)$, $B(0; 4; 0)$, $D(x; y; z)$:<br><br>$DC^2 = \\dfrac{288}{25}$, $DA^2 - DC^2 = -6x + 9 = 9 - \\dfrac{288}{25}$, $x = 1{,}92$; $DB^2 - DC^2 = -8y + 16 = 16 - \\dfrac{288}{25}$, $y = 1{,}44$.<br><br>$z^2 = 11{,}52 - 3{,}6864 - 2{,}0736 = 5{,}76$, $z = 2{,}4 = \\dfrac{12}{5}$.<br><br><strong>პასუხი:</strong> ა) $\\frac{12}{5}$.",
    tags: [],
    area: "solid",
    topics: ["pyramid"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
    // 16
  {
    question: "ნებისმიერი $x > 1$-თვის ცნობილია, რომ $\\sqrt[a]{x \\cdot \\sqrt[b]{x \\cdot \\sqrt[c]{x}}} = \\sqrt[36]{x^{25}}$. ქვემოთჩამოთვლილთაგან, რისი ტოლია $b$, თუ $a$, $b$ და $c$ ერთზე მეტი ნატურალური რიცხვებია?",
    options: ["$2$", "$3$", "$4$", "$5$", "$6$", "$7$"],
    correct: 1,
    solution: "მარცხენა მხარე $x$-ის ხარისხია: $\\dfrac{1}{a} + \\dfrac{1}{ab} + \\dfrac{1}{abc} = \\dfrac{25}{36}$.<br><br>$a = 2$: $\\dfrac{1}{2b}\\left(1 + \\dfrac{1}{c}\\right) = \\dfrac{7}{36}$, $b = 3$-ზე $1 + \\dfrac{1}{c} = \\dfrac{7}{6}$, $c = 6$ ✓ (შემოწმება: $\\dfrac{1}{2} + \\dfrac{1}{6} + \\dfrac{1}{36} = \\dfrac{25}{36}$).<br><br><strong>პასუხი:</strong> ბ) $3$.",
    tags: [],
    area: "algebra",
    topics: ["nth-roots","linear-ineq"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 17
  {
    question: "ქვემოთჩამოთვლილი ფუნქციების გრაფიკებიდან, რომელს აქვს ერთი მაინც წერტილი საკოორდინატო სიბრტყის $IV$ მეოთხედში?",
    options: [
      "$y = 3^x$",
      "$y = 0{,}199^x + 1$",
      "$y = \\log_{199}(x + 7)$",
      "$y = \\log_3(x + 4)$",
      "$y = \\log_{0{,}3}(0{,}4 − x)$",
      "$y = \\log_{0{,}2}(x + 2)$"
    ],
    correct: 5,
    solution: "IV მეოთხედი: $x > 0$, $y < 0$. $x > 0$-ზე $x + 2 > 2 > 1$ და ფუძე $0{,}2 < 1$, ამიტომ $\\log_{0{,}2}(x + 2) < 0$.<br><br>დანარჩენი ფუნქციები $x > 0$-ზე დადებითია (ბოლო, $\\log_{0{,}3}(0{,}4 - x)$, $0 < x < 0{,}4$-ზე ასევე დადებითია).<br><br><strong>პასუხი:</strong> ვ) $y = \\log_{0{,}2}(x + 2)$.",
    tags: [],
    area: "geometry",
    topics: ["line-circle-eq"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: ["coordinates"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 18
  {
    question: "ქვემოთჩამოთვლილთაგან, რისი ტოლია $a$, თუ ცნობილია, რომ $\\log_2 x − \\log_a x + \\log_4 x = 1$ განტოლების ამონახსნთა სიმრავლე ცარიელი სიმრავლეა?",
    options: [
      "$\\sqrt[3]{3}$",
      "$\\sqrt{3}$",
      "$\\sqrt{2}$",
      "$\\sqrt[3]{4}$",
      "$\\sqrt[3]{2}$",
      "$2$"
    ],
    correct: 3,
    solution: "$\\log_2 x\\left(1 - \\dfrac{1}{\\log_2 a} + \\dfrac{1}{2}\\right) = 1$. ამონახსნი არ არის, როცა ფრჩხილი $0$-ია: $\\dfrac{1}{\\log_2 a} = \\dfrac{3}{2}$, $\\log_2 a = \\dfrac{2}{3}$.<br><br>$a = 2^{2/3} = \\sqrt[3]{4}$.<br><br><strong>პასუხი:</strong> დ) $\\sqrt[3]{4}$.",
    tags: [],
    area: "algebra",
    topics: ["log-eq"],
    grade: 11,
    difficulty: 3,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 19
  {
    question: "ცილინდრის ორი კვეთა, რომელიც ერთი და იგივე მსახველზე გადის, ერთმანეთთან ადგენს მართ კუთხეს. ცილინდრის ღერძიდან ამ სიბრტყეებამდე მანძილებია $2{,}5$ და $6$. იპოვეთ ცილინდრის ღერძული კვეთის ფართობი, თუ მისი სიმაღლე $4$-ის ტოლია.",
    options: ["$18$", "$48$", "$52$", "$\\frac{144}{3}$", "$64$", "$100$"],
    correct: 2,
    solution: "ფუძეზე: მსახველის წერტილი $P$, კვეთების ქორდები $PA \\perp PB$, ამიტომ $AB$ დიამეტრია. ცენტრიდან $PA$-მდე მანძილი $\\dfrac{PB}{2} = 2{,}5$, $PB$-მდე — $\\dfrac{PA}{2} = 6$.<br><br>$PB = 5$, $PA = 12$, $AB = 13 = 2R$.<br><br>ღერძული კვეთა: $2R \\cdot h = 13 \\cdot 4 = 52$.<br><br><strong>პასუხი:</strong> გ) $52$.",
    tags: [],
    area: "solid",
    topics: ["cylinder","cross-sections"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 20
  {
    question: "კონუსის წვეროდან ორ მსახველზე ფუძისადმი $45^{\\circ}$-იანი კუთხით გავლებულია სიბრტყე, რომელიც კვეთს ფუძის წრეწირის მეოთხედს. კონუსის სიმაღლეა $10$. იპოვეთ კვეთის ფართობი.",
    options: ["$50$", "$50\\sqrt{2}$", "$50\\sqrt{3}$", "$100$", "$100\\sqrt{2}$", "$150$"],
    correct: 4,
    solution: "ქორდა $AB$ ჭრის $90^\\circ$-იან რკალს: ცენტრიდან $AB$-მდე $d = \\dfrac{R}{\\sqrt{2}}$, $AB = R\\sqrt{2}$. კვეთის სიბრტყე ფუძესთან $45^\\circ$-ია: $d = h = 10$, $R = 10\\sqrt{2}$, $AB = 20$.<br><br>წვეროდან $AB$-მდე: $\\sqrt{10^2 + 10^2} = 10\\sqrt{2}$.<br><br>$S = \\dfrac{1}{2} \\cdot 20 \\cdot 10\\sqrt{2} = 100\\sqrt{2}$.<br><br><strong>პასუხი:</strong> ე) $100\\sqrt{2}$.",
    tags: [],
    area: "solid",
    topics: ["cone","cross-sections"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
    // 21
  {
    question: "მოცემულია რიცხვები: $\\sqrt{\\lg a}$ ; $\\sqrt{\\lg b}$ ; $\\lg \\sqrt{a}$ ; $\\lg \\sqrt{b}$. თითოეული მათგანი ნატურალურია და მათი ჯამი $36$-ის ტოლია. იპოვეთ $ab$.",
    options: ["$10^{52}$", "$10^{36}$", "$10^{72}$", "$10^{100}$", "$10^{60}$", "$10^{81}$"],
    correct: 0,
    solution: "$p = \\sqrt{\\lg a}$, $q = \\sqrt{\\lg b}$ — ნატურალური; $\\lg\\sqrt{a} = \\dfrac{p^2}{2}$, $\\lg\\sqrt{b} = \\dfrac{q^2}{2}$ ნატურალური, ამიტომ $p, q$ ლუწია.<br><br>$p + q + \\dfrac{p^2 + q^2}{2} = 36 \\Leftrightarrow (p + 1)^2 + (q + 1)^2 = 74 = 25 + 49$: $p = 4$, $q = 6$.<br><br>$\\lg a = 16$, $\\lg b = 36$, $ab = 10^{52}$.<br><br><strong>პასუხი:</strong> ა) $10^{52}$.",
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
  // 22
  {
    image: "quizzes/class-11/images/image1.png",
    question: "წესიერ ოთხკუთხა პრიზმაში მოთავსებულია ცხრა ცალი სფერო. დიდი სფეროს რადიუსია $2$, რვა ცალი მცირე სფეროს რადიუსია $1$. თითოეული მცირე სფერო ეხება პრიზმის სამ გვერდით წახნაგსა და დიდ სფეროს. დიდი სფერო ეხება თითოეულ მცირე სფეროს. პრიზმის ფუძის გვერდია $4$. იპოვეთ პრიზმის გვერდითი წიბოს სიგრძე (იხ. ნახაზი).",
    options: [
      "$2 + 2\\sqrt{7}$",
      "$3 + 2\\sqrt{5}$",
      "$4 + 2\\sqrt{7}$",
      "$9$",
      "$4\\sqrt{7}$",
      "$4\\sqrt{5}$"
    ],
    correct: 0,
    solution: "ფუძე $[-2; 2]^2$. ქვედა მცირე სფეროები კუთხეებშია: ცენტრები $(\\pm 1; \\pm 1; 1)$; ზედა — $(\\pm 1; \\pm 1; H - 1)$. დიდი სფეროს ცენტრი ღერძზეა, $(0; 0; Z)$.<br><br>ეხება ქვედას: $\\sqrt{1 + 1 + (Z - 1)^2} = 2 + 1$, $(Z - 1)^2 = 7$, $Z = 1 + \\sqrt{7}$; სიმეტრიით $H = 2Z = 2 + 2\\sqrt{7}$.<br><br><strong>პასუხი:</strong> ა) $2 + 2\\sqrt{7}$.",
    tags: [],
    area: "solid",
    topics: ["prism","sphere"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 23
  {
    question: "$f(x) = \\log_3(x + 3)$ ფუნქციის გრაფიკი აბსცისათა და ორდინატთა ღერძებს $A$ და $B$ წერტილებში კვეთს, ხოლო $y = f(x)$-ის შექცეული ფუნქციის გრაფიკი იგივე ღერძებს $C$ და $D$ წერტილებში კვეთს. იპოვეთ $ABCD$ ოთხკუთხედის ფართობი.",
    options: ["$5$", "$3{,}5$", "$3$", "$5{,}5$", "$6{,}5$", "$4{,}5$"],
    correct: 5,
    solution: "$f$: $A(-2; 0)$, $B(0; 1)$. შექცეული $y = 3^x - 3$: $C(1; 0)$, $D(0; -2)$.<br><br>$ABCD$-ის დიაგონალები $AC = 3$ (აბსცისთა ღერძზე) და $BD = 3$ (ორდინატთა ღერძზე) მართობულია: $S = \\dfrac{3 \\cdot 3}{2} = 4{,}5$.<br><br><strong>პასუხი:</strong> ვ) $4{,}5$.",
    tags: [],
    area: "algebra",
    topics: ["function-basics","logarithms","cross-sections"],
    grade: 11,
    difficulty: 3,
    type: ["graph"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 24
  {
    question: "$\\log_2 x = \\log_y 16$ ; $xy = 64$. რისი ტოლია $\\left(\\log_2 \\frac{x}{y}\\right)^2$?",
    options: ["$\\frac{25}{2}$", "$20$", "$\\frac{45}{2}$", "$25$", "$32$", "$36$"],
    correct: 1,
    solution: "$u = \\log_2 x$, $v = \\log_2 y$: $u = \\dfrac{4}{v}$, ანუ $uv = 4$; $xy = 64$-დან $u + v = 6$.<br><br>$\\left(\\log_2\\dfrac{x}{y}\\right)^2 = (u - v)^2 = (u + v)^2 - 4uv = 36 - 16 = 20$.<br><br><strong>პასუხი:</strong> ბ) $20$.",
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
  // 25
  {
    question: "$DABC$ პირამიდის ფუძეშია $ABC$ მართკუთხა სამკუთხედი $C$ მართი კუთხით. ამ პირამიდის გვერდითი წიბოები ტოლია. $DB$ გვერდით წიბოზე აღებული $M$ წერტილი ისე, რომ $BM:MD = 1:2$. $AMC$ და $ABC$ სიბრტყეებს შორის კუთხეა $60^{\\circ}$. $AMC$ სამკუთხედის ფართობია $4\\ \\text{სმ}^2$, პირამიდის სიმაღლისა და $ABC$ სამკუთხედის ფართობის ნამრავლი — $3\\ \\text{სმ}^3$. რამდენი სანტიმეტრია პირამიდის სიმაღლე?",
    options: ["$1$", "$2$", "$\\frac{4}{3}$", "$\\frac{5}{4}$", "$\\frac{6}{5}$", "$\\frac{3}{2}$"],
    correct: 3,
    solution: "გვერდითი წიბოები ტოლია, ამიტომ $D$ გეგმილდება $ABC$-ზე შემოხაზული წრეწირის ცენტრში — ჰიპოტენუზის შუა $O$ წერტილში. $M$-ის გეგმილი $M'$ ძევს $OB$-ზე, $BM' = \\dfrac{BO}{3}$, ამიტომ $AM' = \\dfrac{5}{6}AB$ და $S_{AM'C} = \\dfrac{5}{6}S_{ABC}$.<br><br>$AM'C$ არის $AMC$-ის გეგმილი: $S_{AM'C} = 4\\cos 60^\\circ = 2$, $S_{ABC} = \\dfrac{12}{5}$.<br><br>$H = \\dfrac{3}{12/5} = \\dfrac{5}{4}$ სმ.<br><br><strong>პასუხი:</strong> დ) $\\frac{5}{4}$.",
    tags: [],
    area: "solid",
    topics: ["pyramid","right-triangle","angles-space"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];
