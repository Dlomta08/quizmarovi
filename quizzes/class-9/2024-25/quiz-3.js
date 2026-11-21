quizData = [
  //1
  {
    question: "რამდენი ამონახსნი აქვს $27x \\equiv 1 \\pmod{9}$ განტოლებას?",
    options: ["$1$", "$2$", "$3$", "$4$", "უამრავი", "არა აქვს ამონახსნი"],
    correct: 5,
    solution: "$27x = 9 \\cdot 3x$ ნებისმიერ მთელ $x$-ზე $9$-ის ჯერადია, ანუ $27x \\equiv 0 \\pmod 9$ და ვერასოდეს იქნება $\\equiv 1$.<br><br><strong>პასუხი:</strong> ვ) არა აქვს ამონახსნი.",
    tags: [],
    area: "algebra",
    topics: ["divisibility"],
    grade: 9,
    difficulty: 1,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //2
  {
    question: "ცნობილია, რომ $a_1 = 2$ და ნებისმიერი ნატურალური $n$-სთვის $a_{n+1} = 3a_n - 1$. იპოვეთ $a_5$.",
    options: ["$100$", "$122$", "$147$", "$178$", "$199$", "$201$"],
    correct: 1,
    solution: "$a_2 = 3 \\cdot 2 - 1 = 5$, $a_3 = 14$, $a_4 = 41$, $a_5 = 122$.<br><br><strong>პასუხი:</strong> ბ) $122$.",
    tags: [],
    area: "algebra",
    topics: [],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //3
  {
    question: "იპოვეთ $a_n = 12 - n^2 + 8n$ მიმდევრობის უდიდესი წევრი.",
    options: ["$28$", "$36$", "$44$", "$16$", "$18$", "$20$"],
    correct: 0,
    solution: "$a_n = 28 - (n - 4)^2 \\le 28$, ტოლობა $n = 4$-ზე.<br><br><strong>პასუხი:</strong> ა) $28$.",
    tags: [],
    area: "algebra",
    topics: [],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //4
  {
    question: "წესიერ ექვსკუთხედზე, რომლის მცირე დიაგონალი $6\\sqrt{3}$-ის ტოლია, შემოხაზულია წრეწირი. იპოვეთ იმ რკალის სიგრძე, რომელიც მოთავსებულია ორ მეზობელ წვეროს შორის.",
    options: [
      "$\\dfrac{3\\pi}{2}$",
      "$\\dfrac{3\\sqrt{3}\\pi}{2}$",
      "$2\\pi$",
      "$2\\sqrt{3}\\pi$",
      "$3\\pi$",
      "$6\\pi$"
    ],
    correct: 2,
    solution: "წესიერი ექვსკუთხედის მცირე დიაგონალი $a\\sqrt{3} = 6\\sqrt{3}$, $a = 6$, ხოლო შემოხაზული წრეწირის რადიუსი $R = a = 6$.<br><br>მეზობელ წვეროებს შორის რკალი $60^\\circ$-ია: $\\dfrac{2\\pi \\cdot 6}{6} = 2\\pi$.<br><br><strong>პასუხი:</strong> გ) $2\\pi$.",
    tags: [],
    area: "geometry",
    topics: ["regular-polygon","circle-angles","inscribed-circum"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //5
  {
    question: "$O$ ცენტრის მქონე წრეწირი $A$ და $B$ წერტილებზე გამავალ წრფეს ეხება $A$ წერტილში. $C$ წერტილი ამ წრეწირზე მდებარეობს ისე, რომ $\\angle CAB = 30^\\circ$. ჩამოთვლილთაგან რომელი რიცხვი მიჩვენებს, თუ რამდენჯერ აღემატება ამ წრეწირით შემოსაზღვრული წრის ფართობი $AOC$ სექტორის ფართობს?",
    options: ["$2$", "$3$", "$4$", "$5$", "$6$", "$10$"],
    correct: 4,
    solution: "მხებსა და $AC$ ქორდას შორის კუთხე ცენტრალური $AOC$ კუთხის ნახევარია: $\\angle AOC = 60^\\circ$.<br><br>სექტორი წრის $\\dfrac{60^\\circ}{360^\\circ} = \\dfrac{1}{6}$ ნაწილია, ამიტომ წრის ფართობი $6$-ჯერ მეტია.<br><br><strong>პასუხი:</strong> ე) $6$.",
    tags: [],
    area: "geometry",
    topics: ["circle-length-area","circle-segments","function-props"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
    //6
  {
    question: "ჩამოთვლილთაგან ცვლადის რომელი მნიშვნელობა აკმაყოფილებს $15x \\equiv 21 \\pmod{18}$ განტოლებას?",
    options: ["$60$", "$69$", "$70$", "$71$", "$75$", "$87$"],
    correct: 3,
    solution: "$15x \\equiv 21 \\pmod{18}$ გავყოთ $3$-ზე: $5x \\equiv 7 \\equiv 1 \\pmod 6$. $5 \\cdot 5 = 25 \\equiv 1$, ამიტომ $x \\equiv 5 \\pmod 6$.<br><br>ჩამოთვლილთაგან: $71 = 6 \\cdot 11 + 5$.<br><br><strong>პასუხი:</strong> დ) $71$.",
    tags: [],
    area: "algebra",
    topics: ["divisibility"],
    grade: 9,
    difficulty: 1,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //7
  {
    question: "ჩამოთვლილთაგან რისი ტოლია $\\dfrac{xy}{x^2 - 6y^2}$ გამოსახულების მნიშვნელობა, თუ $x$ და $y$ ისეთია, რომ $\\dfrac{xy}{x^2 + 6y^2} = \\dfrac{1}{5}$?",
    options: [
      "$-\\dfrac{1}{5}$",
      "$-5$",
      "$5$",
      "$1$",
      "$\\dfrac{1}{6}$",
      "$-\\dfrac{1}{3}$"
    ],
    correct: 3,
    solution: "$5xy = x^2 + 6y^2$, ანუ $(x - 2y)(x - 3y) = 0$.<br><br>$x = 2y$: $\\dfrac{2y^2}{4y^2 - 6y^2} = -1$; $x = 3y$: $\\dfrac{3y^2}{9y^2 - 6y^2} = 1$. ჩამოთვლილთა შორისაა $1$.<br><br><strong>პასუხი:</strong> დ) $1$.",
    tags: [],
    area: "algebra",
    topics: [],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //8
  {
    question: "მოცემული $a = 27^{\\frac{1}{4}};\\ b = 9^\\frac{2}{7};\\ c = \\sqrt[5]{81};\\ d = \\sqrt[9]{3^5}$ რიცხვები დაალაგეთ ზრდის მიხედვით.",
    options: [
      "$d,\\ b,\\ c,\\ a$",
      "$b,\\ d,\\ c,\\ a$",
      "$d,\\ b,\\ a,\\ c$",
      "$c,\\ d,\\ b,\\ a$",
      "$b,\\ c,\\ d,\\ a$",
      "$a,\\ c,\\ d,\\ b$"
    ],
    correct: 2,
    solution: "ჩავწეროთ $3$-ის ხარისხებად: $a = 3^{3/4}$, $b = 3^{4/7}$, $c = 3^{4/5}$, $d = 3^{5/9}$.<br><br>$\\dfrac{5}{9} \\approx 0{,}556 < \\dfrac{4}{7} \\approx 0{,}571 < \\dfrac{3}{4} = 0{,}75 < \\dfrac{4}{5} = 0{,}8$.<br><br><strong>პასუხი:</strong> გ) $d,\\ b,\\ a,\\ c$.",
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

  //9
  {
    question: "ორი ტოლი წრიდან თითოეული გადის მეორეს ცენტრზე. იპოვეთ მათი საერთო ნაწილის ფართობი, თუ წრის რადიუსი $\\sqrt{3}$-ის ტოლია.",
    options: [
      "$2\\sqrt{3}\\pi$",
      "$2\\pi - \\dfrac{3\\sqrt{3}}{2}$",
      "$\\pi + \\dfrac{\\sqrt{3}}{4}$",
      "$\\sqrt{3}\\pi + 3\\sqrt{3}$",
      "$3\\pi - \\dfrac{3}{2}$",
      "$3\\pi$"
    ],
    correct: 1,
    solution: "საერთო ნაწილი შედგება ორი ტოლი სეგმენტისგან, რომელთა ცენტრალური კუთხე $120^\\circ$-ია (ცენტრები და გადაკვეთის წერტილები ორ ტოლგვერდა სამკუთხედს ქმნის).<br><br>ერთი სეგმენტი: $\\dfrac{\\pi r^2}{3} - \\dfrac{r^2\\sqrt{3}}{4} = \\pi - \\dfrac{3\\sqrt{3}}{4}$ ($r^2 = 3$).<br><br>საერთო ნაწილი: $2\\pi - \\dfrac{3\\sqrt{3}}{2}$.<br><br><strong>პასუხი:</strong> ბ) $2\\pi - \\dfrac{3\\sqrt{3}}{2}$.",
    tags: [],
    area: "algebra",
    topics: ["square-roots"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //10
  {
    question: "$2\\alpha$ რადიანის მქონე კუთხის სექტორში ჩახაზულია წრე. იპოვეთ სექტორისა და წრის ფართობების შეფარდება.",
    options: [
      "$2$",
      "$2\\alpha$",
      "$2\\sin \\alpha$",
      "$\\dfrac{\\alpha(1 + \\sin \\alpha)^2}{\\pi \\sin^2 \\alpha}$",
      "$\\dfrac{(1 + \\cos \\alpha)^2}{2\\pi \\sin^2 \\alpha}$",
      "$\\dfrac{\\alpha(1 + \\cos \\alpha)^2}{\\pi \\cos^2 \\alpha}$"
    ],
    correct: 3,
    solution: "ვთქვათ, სექტორის რადიუსია $R$, ჩახაზული წრის — $r$, ცენტრი წვეროდან $d$ მანძილზე. $r = d\\sin\\alpha$ და $d + r = R$, ამიტომ $r = \\dfrac{R\\sin\\alpha}{1 + \\sin\\alpha}$.<br><br>$\\dfrac{S_{სექტ}}{S_{წრე}} = \\dfrac{\\alpha R^2}{\\pi r^2} = \\dfrac{\\alpha(1 + \\sin\\alpha)^2}{\\pi\\sin^2\\alpha}$.<br><br><strong>პასუხი:</strong> დ) $\\dfrac{\\alpha(1 + \\sin \\alpha)^2}{\\pi \\sin^2 \\alpha}$.",
    tags: [],
    area: "geometry",
    topics: ["circle-length-area","inscribed-circum","circle-segments"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //11
  {
    question: "მოცემული $a_n = n^2 - 7n + 18$ მიმდევრობის რამდენი წევრი ეკუთვნის $[-1; 8]$ შუალედს?",
    options: ["არცერთი", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 3,
    solution: "$n^2 - 7n + 18 \\ge -1$ ყოველთვის სრულდება ($D < 0$). $n^2 - 7n + 18 \\le 8 \\Leftrightarrow (n - 2)(n - 5) \\le 0 \\Leftrightarrow 2 \\le n \\le 5$.<br><br>$n = 2, 3, 4, 5$ — $4$ წევრი.<br><br><strong>პასუხი:</strong> დ) $4$.",
    tags: [],
    area: "algebra",
    topics: [],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //12
  {
    question: "ჩამოთვლითაგან რისი ტოლია $\\dfrac{\\sqrt[3]{\\sqrt{3} + \\sqrt{6}} \\cdot \\sqrt[6]{9 - 6\\sqrt{2}} - \\sqrt[3]{24}}{\\sqrt[3]{3}}$ გამოსახულების მნიშვნელობა.",
    options: [
      "$-1$",
      "$-\\sqrt[6]{3}$",
      "$1$",
      "$2$",
      "$2\\sqrt[3]{3}$",
      "$2\\sqrt[6]{3}$"
    ],
    correct: 0,
    solution: "$9 - 6\\sqrt{2} = (\\sqrt{6} - \\sqrt{3})^2$, ამიტომ $\\sqrt[6]{9 - 6\\sqrt{2}} = \\sqrt[3]{\\sqrt{6} - \\sqrt{3}}$.<br><br>$\\sqrt[3]{(\\sqrt{6} + \\sqrt{3})(\\sqrt{6} - \\sqrt{3})} = \\sqrt[3]{3}$, ხოლო $\\sqrt[3]{24} = 2\\sqrt[3]{3}$.<br><br>$\\dfrac{\\sqrt[3]{3} - 2\\sqrt[3]{3}}{\\sqrt[3]{3}} = -1$.<br><br><strong>პასუხი:</strong> ა) $-1$.",
    tags: [],
    area: "algebra",
    topics: ["nth-roots"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //13
  {
    question: "ჩამოთვლილთაგან რომელი წინადადებაა ჭეშმარიტი? I. ნებისმიერი ნატურალური $n$-სთვის ჭეშმარიტია $\\dfrac{1}{1 \\cdot 5} + \\dfrac{1}{5 \\cdot 9} + \\dots + \\dfrac{1}{(4n - 3)(4n + 1)} = \\dfrac{n}{3n + 2}$ ტოლობა. II. ნებისმიერი ნატურალური $n$-სთვის $n^5 - n$ იყოფა $5$-ზე. III. ნებისმიერი ნატურალური $n$-სთვის ჭეშმარიტია $1 \\cdot 2 + 2 \\cdot 5 + \\dots + n \\cdot (3n - 1) = n^2(n + 1)$ ტოლობა. IV. ნებისმიერი თანხა, რომელიც $7$ დრამზე მეტია, შეგვიძლია დავშალოთ $3$ დრამიანი ან $5$ დრამიანი კუპიურებით. (დრამი ფულის უმცირესი ერთეულია)",
    options: [
      "მხოლოდ I",
      "მხოლოდ II",
      "მხოლოდ II და III",
      "მხოლოდ IV",
      "მხოლოდ II, III და IV",
      "ოთხივე"
    ],
    correct: 4,
    solution: "I. $\\dfrac{1}{(4k - 3)(4k + 1)} = \\dfrac{1}{4}\\left(\\dfrac{1}{4k - 3} - \\dfrac{1}{4k + 1}\\right)$, ჯამი $\\dfrac{n}{4n + 1}$; $n = 2$-ზე $\\dfrac{2}{9} \\ne \\dfrac{2}{8}$ — მცდარია.<br>II. $n^5 - n = (n - 1)n(n + 1)(n^2 + 1)$ იყოფა $5$-ზე (ფერმას თეორემა) — ჭეშმარიტია.<br>III. $\\sum k(3k - 1) = 3\\sum k^2 - \\sum k = \\dfrac{n(n + 1)(2n + 1)}{2} - \\dfrac{n(n + 1)}{2} = n^2(n + 1)$ — ჭეშმარიტია.<br>IV. $8 = 3 + 5$, $9 = 3 \\cdot 3$, $10 = 5 + 5$, შემდეგ კი $3$-ის დამატებით ყველა თანხა მიიღება — ჭეშმარიტია.<br><br><strong>პასუხი:</strong> ე) მხოლოდ II, III და IV.",
    tags: [],
    area: "algebra",
    topics: ["divisibility"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //14
  {
    question: "იპოვეთ იმ უმცირესი რადიუსის მქონე წრის ფართობი, რომელშიც მოთავსდება სამკუთხედი, რომლის გვერდის სიგრძეებია $7$, $9$ და $12$.",
    options: [
      "$24\\pi$",
      "$\\dfrac{64\\pi}{3}$",
      "$\\dfrac{49\\pi}{2}$",
      "$28\\pi$",
      "$36\\pi$",
      "$49\\pi$"
    ],
    correct: 4,
    solution: "$7^2 + 9^2 = 130 < 144 = 12^2$ — სამკუთხედი ბლაგვკუთხაა. ასეთ სამკუთხედს მოიცავს უმცირესი წრე, რომლის დიამეტრი უდიდესი გვერდია: $r = 6$.<br><br>ფართობი: $36\\pi$.<br><br><strong>პასუხი:</strong> ე) $36\\pi$.",
    tags: [],
    area: "geometry",
    topics: ["circle-length-area"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //15
  {
    question: "წრეში გავლებულია $AB$ და $AC$ ტოლი ქორდები, $\\angle BAC = 30^\\circ$. იპოვეთ წრის ფართობისა და წრის იმ ნაწილის ფართობის შეფარდება, რომელიც მოქცეულია მოცემული კუთხის შიგნით.",
    options: [
      "$2$",
      "$\\dfrac{6\\pi}{\\pi + 3}$",
      "$3$",
      "$\\dfrac{2\\pi + 3}{\\pi}$",
      "$4$",
      "$\\dfrac{9}{\\pi}$"
    ],
    correct: 1,
    solution: "ცენტრი $O$ კუთხის შიგნითაა. $\\angle BOC = 2 \\cdot 30^\\circ = 60^\\circ$, $\\angle AOB = \\angle AOC = 150^\\circ$.<br><br>კუთხის შიგნით მოქცეული ნაწილი $= S_{AOB} + S_{AOC} + S_{BOC\\,სექტ} = 2 \\cdot \\dfrac{R^2}{2}\\sin 150^\\circ + \\dfrac{\\pi R^2}{6} = \\dfrac{R^2(3 + \\pi)}{6}$.<br><br>$\\dfrac{\\pi R^2}{R^2(3 + \\pi)/6} = \\dfrac{6\\pi}{\\pi + 3}$.<br><br><strong>პასუხი:</strong> ბ) $\\dfrac{6\\pi}{\\pi + 3}$.",
    tags: [],
    area: "geometry",
    topics: ["circle-length-area","chords-tangents"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //16
  {
    question: "ჩამოთვლილთაგან რისი ტოლია $a$ პარამეტრის მნიშვნელობა, თუ $x^2 - (2a + 1)x + a^2 - 7a + 6 = 0$ განტოლებას აქვს მხოლოდ დადებითი ნამდვილი ამონახსნები.",
    options: ["$1$", "$2$", "$3$", "$4$", "$6$", "$7$"],
    correct: 5,
    solution: "ორივე ფესვი დადებითია, როცა $D \\ge 0$, $x_1 + x_2 > 0$, $x_1x_2 > 0$:<br>• $D = (2a + 1)^2 - 4(a^2 - 7a + 6) = 32a - 23 \\ge 0$;<br>• $2a + 1 > 0$;<br>• $a^2 - 7a + 6 = (a - 1)(a - 6) > 0$.<br><br>$a \\in \\left[\\dfrac{23}{32}; 1\\right) \\cup (6; +\\infty)$ — ჩამოთვლილთაგან $7$.<br><br><strong>პასუხი:</strong> ვ) $7$.",
    tags: [],
    area: "algebra",
    topics: ["quadratic-eq"],
    grade: 9,
    difficulty: 2,
    type: ["solve"],
    method: ["parameter"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //17
  {
    question: "იპოვეთ $x_n = (n + 1)(n - 5)(n - 8)$ მიმდევრობის უმცირესი წევრი.",
    options: ["$-30$", "$-16$", "$-14$", "$0$", "$2$", "$6$"],
    correct: 1,
    solution: "$x_n < 0$ მხოლოდ $5 < n < 8$-ზე: $x_6 = 7 \\cdot 1 \\cdot (-2) = -14$, $x_7 = 8 \\cdot 2 \\cdot (-1) = -16$.<br><br><strong>პასუხი:</strong> ბ) $-16$.",
    tags: [],
    area: "algebra",
    topics: [],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //18
  {
    question: "იპოვეთ $k$ პარამეტრის უდიდესი მნიშვნელობა, რომლისთვისაც $(k - 3)x^2 - 2kx + 6k = 0$ განტოლების ყველა ფესვი დადებითია.",
    options: ["$3$", "$5$", "$\\dfrac{18}{5}$", "$\\dfrac{16}{3}$", "$-4$", "$-2$"],
    correct: 2,
    solution: "$k = 3$: $-6x + 18 = 0$, $x = 3 > 0$ — გამოდგება.<br><br>$k \\ne 3$: $\\dfrac{D}{4} = k^2 - 6k(k - 3) = k(18 - 5k) \\ge 0$, ანუ $0 \\le k \\le \\dfrac{18}{5}$; ფესვების ჯამი და ნამრავლი დადებითია, როცა $\\dfrac{k}{k - 3} > 0$, ანუ $k < 0$ ან $k > 3$.<br><br>$k \\in \\left[3; \\dfrac{18}{5}\\right]$, უდიდესი $\\dfrac{18}{5}$.<br><br><strong>პასუხი:</strong> გ) $\\dfrac{18}{5}$.",
    tags: [],
    area: "algebra",
    topics: ["max-min","quadratic-eq"],
    grade: 9,
    difficulty: 3,
    type: ["solve"],
    method: ["parameter"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //19
  {
    question: "იპოვეთ უმცირესი ნატურალური $M$ რიცხვი, რომ $y_n = \\sqrt{7 + \\sqrt{7 + \\sqrt{7 + \\sqrt{7 + \\dots}}}}$ მიმდევრობისთვის შესრულდეს $y_n \\leq M$ უტოლობა.",
    options: ["$3$", "$4$", "$5$", "$7$", "$49$", "მიმდევრობა არ არის შემოსაზღვრული"],
    correct: 1,
    solution: "$y_1 = \\sqrt{7}$, $y_{n+1} = \\sqrt{7 + y_n}$ — ზრდადი მიმდევრობაა, რომლის ზღვარი $L = \\sqrt{7 + L}$: $L^2 - L - 7 = 0$, $L = \\dfrac{1 + \\sqrt{29}}{2} \\approx 3{,}19$.<br><br>ყველა წევრი $L$-ზე ნაკლებია, ხოლო $y_n > 3$ საკმარისად დიდ $n$-ზე. უმცირესი ნატურალური $M$ არის $4$.<br><br><strong>პასუხი:</strong> ბ) $4$.",
    tags: [],
    area: "algebra",
    topics: ["linear-ineq"],
    grade: 9,
    difficulty: 3,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //20
  {
    question: "ქორდა წრეწირს ყოფს ორ რკალად რომლებიც ისე შეეფარდებიან ერთმანეთს როგორც $1 : 11$. რა შეფარდებით ყოფს ეს ქორდა ამ წრეწირით შემოსაზღვრულ წრის ფართობს?",
    options: [
      "$\\dfrac{\\pi - 3}{11\\pi + 3}$",
      "$\\dfrac{\\pi}{10\\pi + 1}$",
      "$\\dfrac{2\\pi + 1}{3\\pi + 11}$",
      "$\\dfrac{3\\pi}{9\\pi + 1}$",
      "$\\dfrac{2\\pi - 1}{\\pi + 11}$",
      "$\\dfrac{\\pi}{11}$"
    ],
    correct: 0,
    solution: "რკალები $30^\\circ$ და $330^\\circ$-ია. მცირე სეგმენტი: $\\dfrac{R^2}{2}\\left(\\dfrac{\\pi}{6} - \\sin 30^\\circ\\right) = \\dfrac{R^2(\\pi - 3)}{12}$.<br><br>დიდი ნაწილი: $\\pi R^2 - \\dfrac{R^2(\\pi - 3)}{12} = \\dfrac{R^2(11\\pi + 3)}{12}$.<br><br>შეფარდება: $\\dfrac{\\pi - 3}{11\\pi + 3}$.<br><br><strong>პასუხი:</strong> ა) $\\dfrac{\\pi - 3}{11\\pi + 3}$.",
    tags: [],
    area: "geometry",
    topics: ["circle-length-area","circle-angles","function-props"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //21
  {
    question: "$\\sqrt{13}$ რადიუსის მქონე $AOB$ წრიულ სექტორში, სადაც $\\angle AOB = 30^\\circ$, ჩახაზულია კვადრატი ისე, რომ მისი ორი წვერო მდებარეობს $AO$ გვერდზე, ერთი $OB$ გვერდზე, ერთი კი $AB$ რკალზე. იპოვეთ კვადრატის ფართობი.",
    options: [
      "$\\sqrt{26} - 2$",
      "$\\sqrt{13} + 1$",
      "$5 - 2\\sqrt{3}$",
      "$13 - \\sqrt{3}$",
      "$2 + 3\\sqrt{2}$",
      "$1 + 4\\sqrt{2}$"
    ],
    correct: 2,
    solution: "$OA$ ავიღოთ აბსცისთა ღერძად. კვადრატის გვერდი $s$, $OA$-ზე მდებარე წვეროები $x$ და $x + s$ წერტილებშია. $(x; s)$ წვერო $OB$-ზეა: $s = x\\tan 30^\\circ$, $x = s\\sqrt{3}$.<br><br>$(x + s; s)$ რკალზეა: $s^2(\\sqrt{3} + 1)^2 + s^2 = 13$, $s^2(5 + 2\\sqrt{3}) = 13$.<br><br>$s^2 = \\dfrac{13}{5 + 2\\sqrt{3}} = \\dfrac{13(5 - 2\\sqrt{3})}{13} = 5 - 2\\sqrt{3}$.<br><br><strong>პასუხი:</strong> გ) $5 - 2\\sqrt{3}$.",
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

  //22
  {
    question: "იპოვეთ $a$ პარამეტრის ყველა იმ მნიშვნელობათა ნამრავლი, რომელთათვისაც $3ax^2 + (3a^3 - 12a^2 - 1)x - a(a - 4) = 0$ განტოლების ყველა ფესვი აკმაყოფილებს პირობას $|x| < 1$.",
    options: ["$-6$", "$-4$", "$0$", "$8$", "$\\sqrt{6} - 1$", "$4 + \\sqrt{15}$"],
    correct: 2,
    solution: "$a = 0$-ზე განტოლებაა $-x = 0$, ფესვი $x = 0$ — პირობა სრულდება.<br><br>(ზოგადად $3a^3 - 12a^2 = 3a \\cdot a(a - 4)$ და განტოლება იშლება: $(3ax - 1)(x + a(a - 4)) = 0$; პირობას აკმაყოფილებს აგრეთვე $a \\in (2 + \\sqrt{3}; 2 + \\sqrt{5})$.)<br><br>რადგან მნიშვნელობებს შორის არის $a = 0$, ნამრავლი $0$-ია.<br><br><strong>პასუხი:</strong> გ) $0$.",
    tags: [],
    area: "algebra",
    topics: ["quadratic-eq"],
    grade: 9,
    difficulty: 3,
    type: ["solve"],
    method: ["parameter"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //23
  {
    question: "ჩამოთვლილთაგან რისი ტოლია $\\dfrac{\\sqrt[3]{4} + (\\sqrt[3]{2} - a)^2}{\\sqrt[4]{9} + (\\sqrt[4]{3} - a)^2}$ გამოსახულების მნიშვნელობა, თუ ცნობილია, რომ $\\sqrt[3]{4}+\\sqrt[4]{9} = (\\sqrt[3]{2}+\\sqrt[4]{3} - a)^2$.",
    options: [
      "$a$",
      "$1$",
      "$\\dfrac{\\sqrt[3]{2}}{\\sqrt[4]{3}}$",
      "$\\dfrac{\\sqrt[3]{2} - a}{\\sqrt[4]{3} - a}$",
      "$\\dfrac{\\sqrt[3]{2} + a +1}{\\sqrt[4]{3} + a +1}$",
      "$\\dfrac{\\sqrt[3]{2} + \\sqrt[4]{3}}{\\sqrt[4]{3} - \\sqrt[3]{2}}$"
    ],
    correct: 3,
    solution: "აღვნიშნოთ $p = \\sqrt[3]{2}$, $q = \\sqrt[4]{3}$, $P = p - a$, $Q = q - a$. პირობა: $(p + q - a)^2 = p^2 + q^2$, ანუ $a^2 - 2ap - 2aq + 2pq = 0$, რაც იგივეა: $2PQ = a^2$.<br><br>მრიცხველი: $p^2 + P^2 = (P + a)^2 + P^2 = 2P^2 + 2Pa + 2PQ = 2P(P + Q + a)$. ანალოგიურად მნიშვნელი $= 2Q(P + Q + a)$.<br><br>შეფარდება: $\\dfrac{P}{Q} = \\dfrac{\\sqrt[3]{2} - a}{\\sqrt[4]{3} - a}$.<br><br><strong>პასუხი:</strong> დ) $\\dfrac{\\sqrt[3]{2} - a}{\\sqrt[4]{3} - a}$.",
    tags: [],
    area: "algebra",
    topics: ["nth-roots"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //24
  {
    question: "$ABCD$ ტრაპეციაზე შემოხაზული წრეწირის ცენტრი $12\\text{სმ}$ სიგრძის მქონე $AD$ ფუძეზე მდებარეობს. კუთხე $\\angle ADC = 60^\\circ$. იპოვეთ $AB$ ფერდით, $AC$ დიაგონალით და $BC$ მცირე რკალით შემოსაზღვრული ფიგურის ფართობი.",
    options: [
      "$6\\pi$",
      "$3\\pi$",
      "$2\\pi$",
      "$4{,}5\\pi$",
      "$\\dfrac{3\\sqrt{3}}{2}\\pi$",
      "$4\\sqrt{3}\\pi$"
    ],
    correct: 0,
    solution: "$AD = 12$ დიამეტრია, $R = 6$. $\\angle ADC = 60^\\circ$, ამიტომ $OCD$ ტოლგვერდაა ($\\angle COD = 60^\\circ$); ტოლფერდა ტრაპეციაში $\\angle AOB = 60^\\circ$ და $\\angle BOC = 60^\\circ$, $BC \\parallel AD$.<br><br>$ABC$ და $OBC$ სამკუთხედებს საერთო ფუძე $BC$ და ტოლი სიმაღლეები აქვთ ($A, O \\in AD \\parallel BC$), ამიტომ ფიგურის ფართობი $= S_{OBC} + S_{სეგმ.\\,BC} = S_{სექტ.\\,BOC} = \\dfrac{60}{360}\\pi \\cdot 36 = 6\\pi$.<br><br><strong>პასუხი:</strong> ა) $6\\pi$.",
    tags: [],
    area: "geometry",
    topics: ["trapezoid","circle-angles","inscribed-circum"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //25
  {
    question: "იპოვეთ $2m$ პერიმეტრის ტოლი უდიდესი ფართობის მქონე სექტორის ცენტრალური კუთხის რადიანული ზომა.",
    options: [
      "$\\dfrac{\\pi m}{2}$",
      "$\\dfrac{2\\pi m}{3}$",
      "$\\dfrac{\\pi}{6}$",
      "$2$",
      "$1$",
      "$\\dfrac{m}{2}$"
    ],
    correct: 3, 
    solution: "$2r + r\\theta = 2m$, ფართობი $S = \\dfrac{r^2\\theta}{2} = \\dfrac{r(2m - 2r)}{2} = r(m - r)$ — უდიდესია $r = \\dfrac{m}{2}$-ზე.<br><br>$\\theta = \\dfrac{2m - 2r}{r} = \\dfrac{m}{m/2} = 2$.<br><br><strong>პასუხი:</strong> დ) $2$.",
    tags: [],
    area: "geometry",
    topics: ["circle-angles","circle-segments"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];