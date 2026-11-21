quizData = [
  //1
  {
    question: "იპოვეთ $f(x) = 3 - \\dfrac{2}{2 + \\sqrt{x - 5}}$ ფუნქციის უმცირესი მნიშვნელობა.",
    options: ["$0$", "$1$", "$2$", "$3$", "$-1$", "$-3$"],
    correct: 2,
    solution: "$\\sqrt{x - 5} \\ge 0$, ამიტომ $2 + \\sqrt{x - 5} \\ge 2$ და $\\dfrac{2}{2 + \\sqrt{x - 5}} \\le 1$.<br><br>$f(x) \\ge 3 - 1 = 2$, ტოლობა $x = 5$-ზე.<br><br><strong>პასუხი:</strong> გ) $2$.",
    tags: [],
    area: "algebra",
    topics: ["max-min"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //2
  {
    question: "იპოვეთ არითმეტიკული პროგრესიის უდიდესი უარყოფითი წევრი, თუ $a_1 = 7{,}5$, $d = -0{,}3$.",
    options: ["$-2$", "$-1{,}6$", "$-1{,}2$", "$-0{,}9$", "$-0{,}3$", "$-0{,}1$"],
    correct: 4,
    solution: "$a_n = 7{,}5 - 0{,}3(n - 1)$. $a_{26} = 7{,}5 - 7{,}5 = 0$, $a_{27} = -0{,}3$ — პირველი უარყოფითი წევრი და, პროგრესია კლებადია, ამიტომ უდიდესიც.<br><br><strong>პასუხი:</strong> ე) $-0{,}3$.",
    tags: [],
    area: "algebra",
    topics: ["arithmetic-prog"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //3
  {
    question: "ჩამოთვლითაგან რისი ტოლია $\\sqrt[8]{\\sqrt{3}+\\sqrt{2}} \\cdot \\sqrt[16]{5-2\\sqrt{6}}$ გამოსახულების მნიშვნელობა?",
    options: ["$0$", "$1$", "$2$", "$3$", "$12\\sqrt{2}$", "$24\\sqrt{3}$"],
    correct: 1,
    solution: "$5 - 2\\sqrt{6} = (\\sqrt{3} - \\sqrt{2})^2$, ამიტომ $\\sqrt[16]{5 - 2\\sqrt{6}} = \\sqrt[8]{\\sqrt{3} - \\sqrt{2}}$.<br><br>$\\sqrt[8]{(\\sqrt{3} + \\sqrt{2})(\\sqrt{3} - \\sqrt{2})} = \\sqrt[8]{1} = 1$.<br><br><strong>პასუხი:</strong> ბ) $1$.",
    tags: [],
    area: "algebra",
    topics: ["nth-roots"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //4
  {
    question: "რას უდრის წესიერი მრავალკუთხედის ერთი შიგა კუთხის გრადუსული ზომა, თუ მისი დიაგონალების რაოდენობა $20$-ის ტოლია?",
    options: ["$60^\\circ$", "$80^\\circ$", "$90^\\circ$", "$120^\\circ$", "$135^\\circ$", "$150^\\circ$"],
    correct: 4,
    solution: "$\\dfrac{n(n - 3)}{2} = 20$, $n = 8$. შიგა კუთხე: $\\dfrac{(8 - 2) \\cdot 180^\\circ}{8} = 135^\\circ$.<br><br><strong>პასუხი:</strong> ე) $135^\\circ$.",
    tags: [],
    area: "geometry",
    topics: ["polygon-basics","regular-polygon"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //5
  {
    question: "რომბში ჩახაზული წრეწირის რადიუსია $3$, ხოლო დიდი დიაგონალის სიგრძეა $12$. იპოვეთ რომბის ფართობი.",
    options: ["$24\\sqrt{3}$", "$36\\sqrt{2}$", "$18\\sqrt{3}$", "$32$", "$48$", "$60$"],
    correct: 0,
    solution: "დიაგონალების ნახევრებია $6$ და $q$, გვერდი $a = \\sqrt{36 + q^2}$. რადიუსი ცენტრიდან გვერდამდე მანძილია (მართკუთხა სამკუთხედის სიმაღლე): $r = \\dfrac{6q}{a} = 3$, ანუ $a = 2q$.<br><br>$4q^2 = 36 + q^2$, $q = 2\\sqrt{3}$.<br><br>$S = \\dfrac{12 \\cdot 4\\sqrt{3}}{2} = 24\\sqrt{3}$.<br><br><strong>პასუხი:</strong> ა) $24\\sqrt{3}$.",
    tags: [],
    area: "geometry",
    topics: ["inscribed-circum","rhombus-rect-sq"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //6
  {
    question: "მიმდევრობა მოცემულია $c_n = 5 \\cdot 2^n$ ფორმულით. იპოვეთ პირველი $8$ წევრის ჯამი.",
    options: ["$2550$", "$2400$", "$1440$", "$2620$"],
    correct: 0,
    solution: "$c_1 = 10$, $q = 2$: $S_8 = \\dfrac{10(2^8 - 1)}{2 - 1} = 2550$.<br><br><strong>პასუხი:</strong> ა) $2550$.",
    tags: [],
    area: "algebra",
    topics: ["powers"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //7
  {
    question: "მოცემული $a = 16^{\\frac{1}{5}};\\quad b = 4^{\\frac{1}{3}};\\quad c = \\sqrt[7]{32};\\quad d = \\sqrt[7]{64}$ რიცხვები დაალაგეთ ზრდის მიხედვით.",
    options: [
      "$d,\\ b,\\ c,\\ a$",
      "$b,\\ d,\\ c,\\ a$",
      "$b,\\ c,\\ a,\\ d$",
      "$c,\\ d,\\ b,\\ a$",
      "$b,\\ c,\\ d,\\ a$",
      "$a,\\ c,\\ d,\\ b$"
    ],
    correct: 2,
    solution: "$2$-ის ხარისხებად: $a = 2^{4/5}$, $b = 2^{2/3}$, $c = 2^{5/7}$, $d = 2^{6/7}$.<br><br>$\\dfrac{2}{3} \\approx 0{,}667 < \\dfrac{5}{7} \\approx 0{,}714 < \\dfrac{4}{5} = 0{,}8 < \\dfrac{6}{7} \\approx 0{,}857$.<br><br><strong>პასუხი:</strong> გ) $b,\\ c,\\ a,\\ d$.",
    tags: [],
    area: "algebra",
    topics: ["numeric-ineq","nth-roots"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //8
  {
    question: "გამოთვალეთ $\\left\\{ \\dfrac{1}{1 \\cdot 2} + \\dfrac{1}{2 \\cdot 3} + \\cdots + \\dfrac{1}{19 \\cdot 20} \\right\\}$. ($\\{a\\}$ — $a$ რიცხვის წილადი ნაწილია)",
    options: ["$0{,}3$", "$0{,}45$", "$0{,}05$", "$0{,}7$", "$0{,}85$", "$0{,}95$"],
    correct: 5,
    solution: "$\\dfrac{1}{k(k + 1)} = \\dfrac{1}{k} - \\dfrac{1}{k + 1}$, ამიტომ ჯამი $1 - \\dfrac{1}{20} = 0{,}95$.<br><br>წილადი ნაწილი: $0{,}95$.<br><br><strong>პასუხი:</strong> ვ) $0{,}95$.",
    tags: [],
    area: "algebra",
    topics: ["integer-part","linear-systems"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //9
  {
    question: "სიბრტყეზე მოცემული სამი ვექტორიდან ნებისმიერი ორის ჯამის მოდული $1$-ის ტოლია, ხოლო სამივე ვექტორის ჯამი ნულოვანი ვექტორია. ეს ვექტორები ერთმანეთთან წყვილ-წყვილად ადგენენ $x^\\circ$-იან კუთხეს. ჩამოთვლილთაგან რისი ტოლია $x$?",
    options: ["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$90^\\circ$", "$120^\\circ$", "$150^\\circ$"],
    correct: 4,
    solution: "$\\vec a + \\vec b + \\vec c = \\vec 0$, ამიტომ $|\\vec a + \\vec b| = |\\vec c| = 1$, ანალოგიურად $|\\vec a| = |\\vec b| = 1$.<br><br>სამი ერთეულოვანი ვექტორი, რომელთა ჯამი ნულია, ტოლგვერდა სამკუთხედს ქმნის: $|\\vec a + \\vec b|^2 = 2 + 2\\cos x = 1$, $\\cos x = -\\dfrac{1}{2}$, $x = 120^\\circ$.<br><br><strong>პასუხი:</strong> ე) $120^\\circ$.",
    tags: [],
    area: "geometry",
    topics: ["vectors"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: ["absolute","vectors"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //10
  {
    question: "ჩამოთვლილთაგან რისი ტოლია $n$, თუ $\\vec{a}(n+1;\\ 3-n)$ ვექტორი $\\vec{b} = 5\\vec{i} + 7\\vec{j}$ ვექტორის მართობულია? ($\\vec{i}$ და $\\vec{j}$ ბაზის ვექტორებია)",
    options: ["$4$", "$13$", "$3$", "$16$", "$6$", "$10$"],
    correct: 1,
    solution: "$\\vec a \\cdot \\vec b = 5(n + 1) + 7(3 - n) = 26 - 2n = 0$, $n = 13$.<br><br><strong>პასუხი:</strong> ბ) $13$.",
    tags: [],
    area: "geometry",
    topics: ["vectors"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: ["vectors"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //11
  {
    question: "ცნობილია, რომ გეომეტრიულ პროგრესიაში $b_7 = 12$, ჩამოთვლილთაგან რისი ტოლია $\\dfrac{b_{17}}{b_{15}} - 6 \\cdot \\dfrac{b_{11}}{b_{10}} + b_7$ გამოსახულების უმცირესი მნიშვნელობა?",
    options: ["$-7$", "$-12$", "$0$", "$3$", "$6$", "$13$"],
    correct: 3,
    solution: "$\\dfrac{b_{17}}{b_{15}} = q^2$, $\\dfrac{b_{11}}{b_{10}} = q$. გამოსახულება: $q^2 - 6q + 12 = (q - 3)^2 + 3 \\ge 3$.<br><br><strong>პასუხი:</strong> დ) $3$.",
    tags: [],
    area: "algebra",
    topics: ["geometric-prog"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //12
  {
    question: "ჩამოთვლილთაგან ცვლადის რომელი მნიშვნელობა აკმაყოფილებს $12x \\equiv 39 \\pmod{15}$ განტოლებას?",
    options: ["$13$", "$18$", "$25$", "$29$", "$32$", "$41$"],
    correct: 4,
    solution: "გავყოთ $3$-ზე: $4x \\equiv 13 \\equiv 3 \\pmod 5$. $4 \\cdot 4 = 16 \\equiv 1$, ამიტომ $x \\equiv 12 \\equiv 2 \\pmod 5$.<br><br>ჩამოთვლილთაგან: $32 = 5 \\cdot 6 + 2$.<br><br><strong>პასუხი:</strong> ე) $32$.",
    tags: [],
    area: "algebra",
    topics: ["divisibility"],
    grade: 9,
    difficulty: 2,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //13
  {
    question: "რამდენი მთელი რიცხვი აკმაყოფილებს $(x^2 - 12x + 27)\\sqrt{x^2 - 7x + 10} \\leq 0$ უტოლობას?",
    options: ["$3$", "$4$", "$6$", "$7$", "$10$", "$11$"],
    correct: 2,
    solution: "განსაზღვრის არე: $x^2 - 7x + 10 = (x - 2)(x - 5) \\ge 0$, ანუ $x \\le 2$ ან $x \\ge 5$.<br><br>უტოლობა სრულდება, როცა ფესვი $0$-ია ($x = 2, 5$) ან $x^2 - 12x + 27 = (x - 3)(x - 9) \\le 0$, ანუ $3 \\le x \\le 9$ — არესთან ერთად $5 \\le x \\le 9$.<br><br>მთელი: $2, 5, 6, 7, 8, 9$ — სულ $6$.<br><br><strong>პასუხი:</strong> გ) $6$.",
    tags: [],
    area: "algebra",
    topics: ["quadratic-ineq"],
    grade: 9,
    difficulty: 2,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //14
  {
    question: "სიბრტყეზე დახაზულია ორი კონცენტრული წრეწირი რადიუსებით $8$ და $6$. დიდ წრეწირში გავლებულია ორი რადიუსი, რომელთა შორის კუთხე $60^\\circ$-ია. დიდ წრეწირში შემთხვევით ვარდება წერტილი. ჩამოთვლილთაგან რისი ტოლია ალბათობა იმისა, რომ წერტილი ჩავარდება $60^\\circ$-იანი სექტორის იმ ნაწილში, რომელიც შემოსაზღვრულია მოცემული ორი წრეწირის რკალებით.",
    options: [
      "$\\dfrac{7}{96}$",
      "$\\dfrac{48}{75}$",
      "$\\dfrac{15}{48}$",
      "$\\dfrac{1}{6}$",
      "$\\dfrac{9}{16}$",
      "$\\dfrac{13}{14}$"
    ],
    correct: 0,
    solution: "რგოლის სექტორის ფართობი: $\\dfrac{60}{360} \\cdot \\pi(64 - 36) = \\dfrac{14\\pi}{3}$. დიდი წრის ფართობი $64\\pi$.<br><br>$P = \\dfrac{14\\pi/3}{64\\pi} = \\dfrac{7}{96}$.<br><br><strong>პასუხი:</strong> ა) $\\dfrac{7}{96}$.",
    tags: [],
    area: "prob-stats",
    topics: ["probability","circle-angles","circle-segments"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //15
  {
    question: "$ABCD$ კვადრატის გვერდია $2$. დიაგონალების გადაკვეთის წერტილზე გავლებული წრფე $AC$ დიაგონალთან ადგენს $\\alpha$ მახვილ კუთხეს. იპოვეთ კვადრატის ყველა წვეროდან ამ წრფემდე მანძილების კვადრატების ჯამი.",
    options: [
      "$2$",
      "$4$",
      "$6$",
      "$\\sin \\alpha$",
      "$4\\sin^2 \\alpha$",
      "$2\\sin^2 \\alpha + 2\\tan^2 \\alpha$"
    ],
    correct: 1,
    solution: "წვეროები ცენტრიდან $\\sqrt{2}$ მანძილზეა. $A$ და $C$ $AC$-ზეა, რომელიც წრფესთან $\\alpha$ კუთხეს ქმნის: მანძილი $\\sqrt{2}\\sin\\alpha$. $B$ და $D$ $BD \\perp AC$-ზეა: მანძილი $\\sqrt{2}\\cos\\alpha$.<br><br>$2 \\cdot 2\\sin^2\\alpha + 2 \\cdot 2\\cos^2\\alpha = 4$.<br><br><strong>პასუხი:</strong> ბ) $4$.",
    tags: [],
    area: "geometry",
    topics: ["rhombus-rect-sq"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //16
  {
    question: "მოცემულია $g(x) = x^2$ და $f(x) = 2x - 1$ ფუნქციები. იპოვეთ $2f(x) + f(g(x))$ ფუნქციის უმცირესი მნიშვნელობა.",
    options: ["$-7$", "$-5$", "$-2$", "$0$", "$5$", "$7$"],
    correct: 1,
    solution: "$2f(x) + f(g(x)) = 2(2x - 1) + 2x^2 - 1 = 2x^2 + 4x - 3 = 2(x + 1)^2 - 5 \\ge -5$.<br><br><strong>პასუხი:</strong> ბ) $-5$.",
    tags: [],
    area: "algebra",
    topics: ["max-min"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //17
  {
    question: "ამოხსენით $\\dfrac{1}{5x - x^2 - 4} + 5x - x^2 - 6 \\geq 0$ უტოლობა.",
    options: [
      "$( -6; 4 )$",
      "$( -3; 2 )$",
      "$[0; 5]$",
      "$(1; 4)$",
      "$( -\\infty; 4 )$",
      "$(2; \\infty)$"
    ],
    correct: 3,
    solution: "$t = 5x - x^2 - 4$: $\\dfrac{1}{t} + t - 2 \\ge 0 \\Leftrightarrow \\dfrac{(t - 1)^2}{t} \\ge 0 \\Leftrightarrow t > 0$.<br><br>$x^2 - 5x + 4 < 0$: $1 < x < 4$.<br><br><strong>პასუხი:</strong> დ) $(1; 4)$.",
    tags: [],
    area: "algebra",
    topics: ["quadratic-ineq"],
    grade: 9,
    difficulty: 2,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //18
  {
    question: "$5$ ქალისა და $3$ მამაკაცისგან შემდგარი ჯგუფიდან უნდა შეირჩეს $4$-წევრიანი დელეგაცია. იპოვეთ ალბათობა იმისა, რომ დელეგაციაში ერთი მაინც მამაკაცი იქნება.",
    options: [
      "$\\dfrac{9}{16}$",
      "$\\dfrac{2}{7}$",
      "$\\dfrac{13}{14}$",
      "$\\dfrac{3}{5}$",
      "$\\dfrac{7}{96}$",
      "$\\dfrac{48}{75}$"
    ],
    correct: 2,
    solution: "საწინააღმდეგო ხდომილობა — დელეგაციაში მხოლოდ ქალებია: $\\dfrac{C_5^4}{C_8^4} = \\dfrac{5}{70} = \\dfrac{1}{14}$.<br><br>$P = 1 - \\dfrac{1}{14} = \\dfrac{13}{14}$.<br><br><strong>პასუხი:</strong> გ) $\\dfrac{13}{14}$.",
    tags: [],
    area: "prob-stats",
    topics: ["probability"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //19
  {
    question: "წრეწირი, რომლის ცენტრია $(3; -2)$ და რადიუსი $\\sqrt{10}$, ეხება $y = -\\dfrac{x}{3} + \\dfrac{7}{3}$ წრფეს. იპოვეთ შეხების წერტილის კოორდინატების ჯამი.",
    options: ["$-1$", "$-5$", "$4$", "$5$", "$7$", "$12$"],
    correct: 3,
    solution: "წრფე: $x + 3y - 7 = 0$. შეხების წერტილი ცენტრიდან წრფეზე დაშვებული მართობის ფუძეა.<br><br>$3 + 3(-2) - 7 = -10$, ფუძე: $(3; -2) - \\dfrac{-10}{1^2 + 3^2}(1; 3) = (4; 1)$.<br><br>კოორდინატების ჯამი: $5$.<br><br><strong>პასუხი:</strong> დ) $5$.",
    tags: [],
    area: "algebra",
    topics: ["square-roots"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //20
  {
    question: "თუ $ABCDEF$ წესიერი ექვსკუთხედია, რისი ტოლია $\\vec{AB}$ და $\\vec{BC}$ ვექტორების სკალარული ნამრავლის შეფარდება $\\vec{BC}$ და $\\vec{DE}$ ვექტორების სკალარულ ნამრავლზე?",
    options: [
      "$\\dfrac{1}{2}$",
      "$-1$",
      "$-\\dfrac{\\sqrt{3}}{2}$",
      "$1$",
      "$2$",
      "$\\dfrac{3}{2}$"
    ],
    correct: 1,
    solution: "წესიერი ექვსკუთხედის გვერდის ყოველი შემდეგი ვექტორი წინაზე $60^\\circ$-ით არის მობრუნებული. $\\vec{AB}$ და $\\vec{BC}$ შორის კუთხე $60^\\circ$-ია: $\\vec{AB} \\cdot \\vec{BC} = \\dfrac{a^2}{2}$.<br><br>$\\vec{BC}$ და $\\vec{DE}$ შორის კუთხე $120^\\circ$-ია: $\\vec{BC} \\cdot \\vec{DE} = -\\dfrac{a^2}{2}$.<br><br>შეფარდება: $-1$.<br><br><strong>პასუხი:</strong> ბ) $-1$.",
    tags: [],
    area: "geometry",
    topics: ["dot-product","regular-polygon","vectors"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: ["vectors"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //21
  {
    question: "მოცემულია ნატურალურ რიცხვთა მიმდევრობა $a, b, c, d, 7, 2, 9$. ჩამოთვლილთაგან რისი ტოლია მოდისა და მედიანის ჯამი თუ ცნობილია, რომ მოდა $2$-ით ნაკლებია მედიანაზე?",
    options: ["$5$", "$6$", "$7$", "$14$", "$18$", "$20$"],
    correct: 1,
    solution: "შვიდ რიცხვში მედიანა მე-$4$ რიცხვია, ჯამი $2m + 2$ ($m$ — მოდა) ლუწია, ამიტომ $5$ და $7$ გამოირიცხება. $14, 18, 20$ მოითხოვს მედიანას $8$, $10$ ან $11$, რისთვისაც მოცემული $2$ და $7$-ის გარდა ოთხი რიცხვი უნდა იყოს მედიანაზე არანაკლები — მაშინ მოდა ($6, 8, 9$) ორჯერ ვერ შეგვხვდება.<br><br>$6$ შესაძლებელია: $a = 2$, $b = 3$, $c = 4$, $d = 5$ — დალაგებით $2, 2, 3, 4, 5, 7, 9$: მოდა $2$, მედიანა $4$.<br><br><strong>პასუხი:</strong> ბ) $6$.",
    tags: [],
    area: "prob-stats",
    topics: ["statistics"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //22
  {
    question: "მატარებელი შედგება $4$ ვაგონისაგან. სამი ტურისტი ერთმანეთისგან დამოუკიდებლად ირჩევს ვაგონს. რა არის იმის ალბათობა, რომ ამ სამი ტურისტიდან ზუსტად ორი აღმოჩნდება ერთსა და იმავე ვაგონში?",
    options: [
      "$\\dfrac{3}{4}$",
      "$\\dfrac{9}{16}$",
      "$\\dfrac{13}{14}$",
      "$\\dfrac{7}{16}$",
      "$\\dfrac{7}{96}$",
      "$\\dfrac{2}{7}$"
    ],
    correct: 1,
    solution: "ყველა შესაძლო განაწილება: $4^3 = 64$. ზუსტად ორი ერთ ვაგონში: ავირჩიოთ წყვილი ($3$ გზა), მათი ვაგონი ($4$) და მესამის სხვა ვაგონი ($3$): $36$.<br><br>$P = \\dfrac{36}{64} = \\dfrac{9}{16}$.<br><br><strong>პასუხი:</strong> ბ) $\\dfrac{9}{16}$.",
    tags: [],
    area: "prob-stats",
    topics: ["probability","word-problems"],
    grade: 9,
    difficulty: 3,
    type: ["word"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //23
  {
    question: "ჩამოთვლილთაგან $a$ პარამეტრის რომელი მნიშვნელობისთვის ექნება $|x^2 - 6x + 5| = a$ განტოლებას სამი ამონახსნი?",
    options: ["$16$", "$2$", "$3$", "$4$", "$5$", "$12$"],
    correct: 3,
    solution: "$y = |x^2 - 6x + 5|$ გრაფიკში პარაბოლის $[1; 5]$-ზე მდებარე ნაწილი აირეკლება და წვერო $(3; -4)$ გადადის $(3; 4)$-ში.<br><br>$y = a$ წრფე გრაფიკს სამ წერტილში კვეთს მხოლოდ მაშინ, როცა ის ამ წვეროზე გადის: $a = 4$.<br><br><strong>პასუხი:</strong> დ) $4$.",
    tags: [],
    area: "algebra",
    topics: ["abs-eq","quadratic-eq"],
    grade: 9,
    difficulty: 3,
    type: ["solve"],
    method: ["parameter","absolute"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //24
  {
    question: "$45^\\circ$-იან $AOB$ სექტორში ჩახაზულია $FEMN$ მართკუთხედი ისე, რომ გვერდი $FE$ მდებარეობს $AO$ მონაკვეთზე, $M$ წვერო მდებარეობს $AB$ რკალზე, ხოლო $N$ წვერო $OB$ მონაკვეთზე. იპოვეთ მართკუთხედის პერიმეტრი, თუ $FE = 2FN$, $AO = 2\\sqrt{5}$.",
    options: ["$4 + 4\\sqrt{5}$", "$6\\sqrt{2}$", "$4\\sqrt{5}$", "$14$", "$16$", "$18$"],
    correct: 1,
    solution: "$OA$ ავიღოთ აბსცისთა ღერძად, $FN = h$, $FE = 2h$. $N$ ძევს $OB$-ზე ($45^\\circ$), ამიტომ $N(h; h)$, $F(h; 0)$, $E(3h; 0)$, $M(3h; h)$.<br><br>$M$ რკალზეა: $9h^2 + h^2 = 20$, $h = \\sqrt{2}$.<br><br>პერიმეტრი: $2(2h + h) = 6\\sqrt{2}$.<br><br><strong>პასუხი:</strong> ბ) $6\\sqrt{2}$.",
    tags: [],
    area: "geometry",
    topics: ["circle-angles","circle-segments","rhombus-rect-sq"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //25
  {
    question: "მოცემულია ამოზნექილი ხუთკუთხედი. ამ ხუთკუთხედის შიგნით აღებულია $O$ წერტილი, რომლიდანაც თითოეული გვერდის შემცველი წრფის მიმართულებით გავლებულია შესაბამისად ამ წრფის მართობული $\\vec{a},\\ \\vec{b},\\ \\vec{c},\\ \\vec{d},\\ \\vec{e}$ ვექტორი, რომელთა სიგრძე შესაბამისი გვერდის სიგრძის ტოლია, $|\\vec{a}| = 5$, $|\\vec{b}| = 6$, $|\\vec{c}| = 5$, $|\\vec{d}| = 9$, $|\\vec{e}| = 9$. იპოვეთ $|\\vec{a} + \\vec{b} + \\vec{c} + \\vec{d} + \\vec{e}|$.",
    options: ["$0$", "$6$", "$12$", "$17$", "$34$", "$45$"],
    correct: 0,
    solution: "ხუთკუთხედის გვერდების ვექტორების ჯამი (შემოვლისას) ნულია. მოცემული ვექტორები მიიღება ამ ვექტორების $90^\\circ$-ით ერთი და იმავე მიმართულებით მობრუნებით (სიგრძე ინახება).<br><br>მობრუნება ჯამსაც აბრუნებს, ამიტომ $\\vec a + \\vec b + \\vec c + \\vec d + \\vec e = \\vec 0$.<br><br><strong>პასუხი:</strong> ა) $0$.",
    tags: [],
    area: "geometry",
    topics: ["polygon-basics","vectors"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: ["vectors"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];
