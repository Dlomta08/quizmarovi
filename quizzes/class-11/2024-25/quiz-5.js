quizData = [
  //1
  {
    question: "$y = (2x - 1)^{50}$; $x = 0$, $x = 1$ და $y = 0$ განტოლებებით მოცემული წირებით შემოსაზღვრული ფიგურა ბრუნავს $Ox$ ღერძის გარშემო. იპოვეთ მიღებული სხეულის მოცულობა.",
    options: [],
    tags: [],
    solution: "$V = \\pi\\int_0^1(2x - 1)^{100}dx = \\pi\\left.\\dfrac{(2x - 1)^{101}}{202}\\right|_0^1 = \\pi \\cdot \\dfrac{1 - (-1)}{202} = \\dfrac{\\pi}{101}$.<br><br><strong>პასუხი:</strong> $\\dfrac{\\pi}{101}$.",
    area: "calculus",
    topics: ["definite-integral","function-props","linear-func"],
    grade: 11,
    difficulty: 2,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //2
  {
    question: "კონსის ფუძის რადიუსია $2$სმ. ამ კონუსში მოიძებნება სამი წყვილ-წყვილად ურთიერთმართობული მსახველი. იპოვეთ მანძილი კონუსის ფუძის ცენტრიდან მსახველამდე.",
    options: [],
    tags: [],
    solution: "სამი ურთიერთმართობული მსახველის ($l$) ბოლოები ქმნის ტოლგვერდა სამკუთხედს გვერდით $l\\sqrt{2}$, რომელიც ფუძის წრეწირშია ჩახაზული: $r = \\dfrac{l\\sqrt{2}}{\\sqrt{3}} = 2$, $l = \\sqrt{6}$.<br><br>$h = \\sqrt{l^2 - r^2} = \\sqrt{2}$. ცენტრიდან მსახველამდე მანძილი მართკუთხა სამკუთხედის სიმაღლეა: $\\dfrac{rh}{l} = \\dfrac{2\\sqrt{2}}{\\sqrt{6}} = \\dfrac{2\\sqrt{3}}{3}$ სმ.<br><br><strong>პასუხი:</strong> $\\dfrac{2\\sqrt{3}}{3}$ სმ.",
    area: "solid",
    topics: ["cone"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //3
  {
    question: "გამოთვალეთ: ა) $\\lim\\limits_{x \\to \\infty} \\frac{\\ln x}{\\sqrt[3]{x}}$ \tბ) $\\lim\\limits_{x \\to \ 1} \\frac{1 - x + \\ln x}{1 + \\cos(\\pi x)}$",
    options: [],
    tags: [],
    solution: "ა) ლოპიტალის წესით: $\\lim\\limits_{x \\to \\infty}\\dfrac{1/x}{\\frac{1}{3}x^{-2/3}} = \\lim\\limits_{x \\to \\infty}\\dfrac{3}{\\sqrt[3]{x}} = 0$.<br><br>ბ) $x = 1 + t$: მრიცხველი $-t + \\ln(1 + t) = -\\dfrac{t^2}{2} + \\ldots$, მნიშვნელი $1 + \\cos(\\pi + \\pi t) = 1 - \\cos\\pi t = \\dfrac{\\pi^2t^2}{2} + \\ldots$.<br><br>ზღვარი: $-\\dfrac{1}{\\pi^2}$.<br><br><strong>პასუხი:</strong> ა) $0$; ბ) $-\\dfrac{1}{\\pi^2}$.",
    area: "calculus",
    topics: ["func-limit","nth-roots","logarithms"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //4
  {
    question: "მოცემულია $A(1;1;0)$, $B(-1;2;8)$ და $C(0;1;3)$ წერტილები. იპოვეთ $ABC$ სიბრტყეზე მდებარე ერთი რომელიმე წერტილი, რომლის კოორდინატების ჯამი $1$-ის ტოლია.",
    options: [],
    tags: [],
    solution: "$\\vec{AB} = (-2; 1; 8)$, $\\vec{AC} = (-1; 0; 3)$, ნორმალი $\\vec{AB} \\times \\vec{AC} = (3; -2; 1)$. სიბრტყე: $3x - 2y + z = 1$.<br><br>დამატებით $x + y + z = 1$; გამოკლებით $2x - 3y = 0$. მაგალითად, $x = y = 0$, $z = 1$.<br><br><strong>პასუხი:</strong> მაგალითად, $(0; 0; 1)$ (ზოგადად $(3t; 2t; 1 - 5t)$).",
    area: "algebra",
    topics: [],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //5
  {
    question: "$\\frac{x^2}{a^2} + \\frac{y^2}{10} = 1$ და $y^2 = -12x$ ფორმულებით მოცემულ წირებს ერთადერთი საერთო წერტილი აქვთ. იპოვეთ მანძილი ამ პარაბოლის ფოკუსიდან ამ ელიფსის დირექტრისამდე.",
    options: [],
    tags: [],
    solution: "<strong>ამოცანის პირობა არასწორია — ასეთი $a$ არ არსებობს.</strong><br><br>$y^2 = -12x$-ის ჩასმით ელიფსის განტოლებაში: $\\dfrac{x^2}{a^2} - 1{,}2x - 1 = 0$.<br><br>ვიეტის თეორემით ფესვების ნამრავლი $-a^2 < 0$, ამიტომ ნებისმიერი $a$-სთვის ერთი ფესვი დადებითია, მეორე — უარყოფითი. დადებით $x$-ზე $y^2 = -12x < 0$ — წერტილი არ არის. უარყოფით $x$-ზე $y^2 = -12x > 0$, ანუ $y = \\pm\\sqrt{-12x}$ — ორი სიმეტრიული წერტილი.<br><br>ამრიგად, წირებს ყოველთვის ზუსტად <strong>ორი</strong> საერთო წერტილი აქვთ და ერთადერთი საერთო წერტილის პირობა ვერ შესრულდება.",
    area: "geometry",
    topics: ["conics","quadratic-func"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //6
  {
    question: "ცილინდრის ზედა ფუძის წრეწირზე აღებულია $A$ წერტილი, ქვედა ფუძის წრეწირზე აღებულია $B$ წერტილი. $AB = 2\\sqrt{3}$სმ. $AB$ წრფე ცილინდრის ფუძესთან ადგენს $60^\\circ$-ის ტოლ კუთხეს. $A$ და $B$ წერტილებზე გავლებულია ცილინდრის ღერძის პარალელური კვეთა. იპოვეთ მანძილი ღერძიდან ამ კვეთამდე, თუ ცილინდრის მოცულობაა $42\\pi$სმ$^3$.",
    options: [],
    tags: [],
    solution: "$AB$-ის გეგმილი ფუძეზე $2\\sqrt{3}\\cos 60^\\circ = \\sqrt{3}$, ხოლო ცილინდრის სიმაღლე $2\\sqrt{3}\\sin 60^\\circ = 3$.<br><br>$\\pi R^2 \\cdot 3 = 42\\pi$, $R^2 = 14$. კვეთა ფუძეზე $\\sqrt{3}$ სიგრძის ქორდას იძლევა, ღერძიდან მანძილი: $\\sqrt{R^2 - \\dfrac{3}{4}} = \\sqrt{\\dfrac{53}{4}} = \\dfrac{\\sqrt{53}}{2}$ სმ.<br><br><strong>პასუხი:</strong> $\\dfrac{\\sqrt{53}}{2}$ სმ.",
    area: "solid",
    topics: ["cylinder","cross-sections","volume-surface"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //7
  {
    question: "მოცემულია $A(5;0)$ წერტილი. $B$ წერტილი $y = 2\\sqrt{x}$ ფუნქციის გრაფიკზე მდებარე წერტილებს შორის ისეთი წერტილია, რომ $AB$ მანძილი არის მინიმუმალური შესაძლო. იპოვეთ $B$ წერტილზე გავლებული ამ ფუნქციის გრაფიკის მხების ფორმულა.",
    options: [],
    tags: [],
    solution: "$B(t; 2\\sqrt{t})$: $AB^2 = (t - 5)^2 + 4t = t^2 - 6t + 25 = (t - 3)^2 + 16$ — უმცირესია $t = 3$-ზე, $B(3; 2\\sqrt{3})$.<br><br>$y' = \\dfrac{1}{\\sqrt{x}}$, $y'(3) = \\dfrac{1}{\\sqrt{3}}$. მხები: $y = 2\\sqrt{3} + \\dfrac{x - 3}{\\sqrt{3}} = \\dfrac{x}{\\sqrt{3}} + \\sqrt{3}$.<br><br><strong>პასუხი:</strong> $y = \\dfrac{\\sqrt{3}}{3}x + \\sqrt{3}$.",
    area: "geometry",
    topics: ["chords-tangents"],
    grade: 11,
    difficulty: 3,
    type: ["graph"],
    method: ["coordinates"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //8
  {
    question: "იპოვეთ: $\\int x^2 e^x dx$",
    options: [],
    tags: [],
    solution: "ნაწილობით ინტეგრება ორჯერ: $\\int x^2e^x\\,dx = x^2e^x - 2\\int xe^x\\,dx = x^2e^x - 2(xe^x - e^x) + C$.<br><br><strong>პასუხი:</strong> $e^x(x^2 - 2x + 2) + C$.",
    area: "calculus",
    topics: ["definite-integral"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //9
  {
    question: "$A$ და $B$ წერტილები მდებარეობს $y = \\log_2 x$ ფუნქციის გრაფიკზე. $AB$ მონაკვეთის შუაწერტილის კოორდინატებია $(6;2)$. იპოვეთ $Ox$ ღერძზე $AB$ მონაკვეთის გეგმილის სიგრძე.",
    options: [],
    tags: [],
    solution: "$A(x_1; \\log_2 x_1)$, $B(x_2; \\log_2 x_2)$: $x_1 + x_2 = 12$, $\\log_2 x_1 + \\log_2 x_2 = 4$, ანუ $x_1x_2 = 16$.<br><br>გეგმილის სიგრძე: $|x_1 - x_2| = \\sqrt{144 - 64} = \\sqrt{80} = 4\\sqrt{5}$.<br><br><strong>პასუხი:</strong> $4\\sqrt{5}$.",
    area: "algebra",
    topics: ["logarithms","lines-angles"],
    grade: 11,
    difficulty: 3,
    type: ["graph"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //10
  {
    question: "რისი ტოლი უნდა იყოს ცილინდრის ფუძის რადიუსი, რომლის მოცულობაა $199$მ$^3$ და რომელსაც აქვს მინიმალური შესაძლო სრული ზედაპირის ფართობი?",
    options: [],
    tags: [],
    solution: "$\\pi r^2h = 199$, სრული ზედაპირი $S(r) = 2\\pi r^2 + \\dfrac{398}{r}$.<br><br>$S'(r) = 4\\pi r - \\dfrac{398}{r^2} = 0$, $r^3 = \\dfrac{199}{2\\pi}$. ამ წერტილამდე $S' < 0$, შემდეგ $S' > 0$ — ეს მინიმუმია (ამ დროს $h = 2r$).<br><br><strong>პასუხი:</strong> $r = \\sqrt[3]{\\dfrac{199}{2\\pi}}$ მ.",
    area: "solid",
    topics: ["cylinder","max-min","volume-surface"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];
