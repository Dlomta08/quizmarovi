quizData = [
  // 1
  {
    question: "ცნობილია, რომ $y = x^2$ და $y = 3x + b$ ფუნქციათა გრაფიკების ორი გადაკვეთის წერტილიდან ერთერთია $A$, რომელიც საკორდინატო სიბრტყის პირველ მეოთხედში მდებარეობს. იპოვეთ $b$-ს მნიშვნელობა, თუ $A$ წერტილის აბსცისათა კოორდინატი ორდინატთა კოორდინატზე $2$-ჯერ ნაკლებია.",
    options: [],
    tags: [],
    solution: "$A$-ს კოორდინატებია $(x; 2x)$, $x > 0$. $A$ ძევს $y = x^2$ პარაბოლაზე: $2x = x^2$, $x = 2$, ანუ $A(2; 4)$.<br><br>$A$ ძევს წრფეზეც: $4 = 3 \\cdot 2 + b$, $b = -2$.<br><br>შემოწმება: $x^2 = 3x - 2$-ს აქვს ორი ფესვი, $1$ და $2$.<br><br><strong>პასუხი:</strong> $b = -2$.",
    area: "algebra",
    topics: [],
    grade: 8,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 2
  {
    question: "იპოვეთ $8$-ის და $18$-ის საშუალო გეომეტრიული, საშუალო არითმეტიკული და საშუალო კვადრატული. დაადგინეთ რომელია მეტი, საშუალო არითმეტიკულის და საშუალო გეომეტრიულის სხვაობა, თუ საშუალო კვადრატულის და საშუალო არითმეტიკულის სხვაობა.",
    options: [],
    tags: [],
    solution: "საშუალო გეომეტრიული: $\\sqrt{8 \\cdot 18} = 12$; საშუალო არითმეტიკული: $\\dfrac{8 + 18}{2} = 13$; საშუალო კვადრატული: $\\sqrt{\\dfrac{64 + 324}{2}} = \\sqrt{194}$.<br><br>$13 - 12 = 1$, ხოლო $\\sqrt{194} - 13 < 14 - 13 = 1$ (რადგან $\\sqrt{194} < \\sqrt{196} = 14$).<br><br><strong>პასუხი:</strong> $12$, $13$, $\\sqrt{194}$; მეტია საშუალო არითმეტიკულისა და გეომეტრიულის სხვაობა ($1 > \\sqrt{194} - 13$).",
    area: "algebra",
    topics: ["numeric-ineq","statistics","means"],
    grade: 8,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 3
  {
    question: "გამოითვალეთ: $\\left(\\dfrac{1}{\\sqrt{18}} + \\dfrac{1}{6 - 3\\sqrt{2}} - \\dfrac{1}{\\sqrt{2} + 1}\\right) \\cdot \\dfrac{\\sqrt{27 + 18\\sqrt{2}}}{\\sqrt{8}}$.",
    options: [],
    tags: [],
    solution: "$\\dfrac{1}{\\sqrt{18}} = \\dfrac{\\sqrt{2}}{6}$, $\\dfrac{1}{6 - 3\\sqrt{2}} = \\dfrac{6 + 3\\sqrt{2}}{18} = \\dfrac{2 + \\sqrt{2}}{6}$, $\\dfrac{1}{\\sqrt{2} + 1} = \\sqrt{2} - 1$.<br><br>ფრჩხილი: $\\dfrac{2 + 2\\sqrt{2}}{6} - \\sqrt{2} + 1 = \\dfrac{4 - 2\\sqrt{2}}{3}$.<br><br>$27 + 18\\sqrt{2} = (3 + 3\\sqrt{2})^2$, ამიტომ $\\dfrac{\\sqrt{27 + 18\\sqrt{2}}}{\\sqrt{8}} = \\dfrac{3(1 + \\sqrt{2})}{2\\sqrt{2}}$.<br><br>ნამრავლი: $\\dfrac{(4 - 2\\sqrt{2})(1 + \\sqrt{2})}{2\\sqrt{2}} = \\dfrac{4 + 4\\sqrt{2} - 2\\sqrt{2} - 4}{2\\sqrt{2}} = 1$.<br><br><strong>პასუხი:</strong> $1$.",
    area: "algebra",
    topics: ["square-roots"],
    grade: 8,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 4
  {
    question: "ერთმანეთის გარეთ მდებარე ორი წრეწირის რადიუსების სიგრძეები ისე შეეფარდება ერთმანეთს, როგორც $1 : 3$. იპოვეთ ამ რადიუსების სიგრძეთა საშუალო ჰარმონიული, თუ ამ წრეწირთა საერთო გარე და შიდა მხების სიგრძეთა საშუალო კვადრატული $12$-ის ტოლია.",
    options: [],
    tags: [],
    solution: "ვთქვათ, რადიუსებია $r$ და $3r$, ცენტრებს შორის მანძილი $d$. საერთო გარე მხების სიგრძე: $L^2 = d^2 - (3r - r)^2 = d^2 - 4r^2$; შიდა მხების: $l^2 = d^2 - (3r + r)^2 = d^2 - 16r^2$.<br><br>$\\sqrt{\\dfrac{L^2 + l^2}{2}} = 12$: $d^2 - 10r^2 = 144$.<br><br>რადიუსების საშუალო ჰარმონიული: $\\dfrac{2 \\cdot r \\cdot 3r}{r + 3r} = \\dfrac{3r}{2}$.<br><br>შენიშვნა: პირობით $r$ ცალსახად არ განისაზღვრება — ის დამოკიდებულია $d$-ზე. მაგალითად, თუ წრეწირები ერთმანეთს გარედან ეხება ($d = 4r$), $6r^2 = 144$, $r = 2\\sqrt{6}$ და საშუალო ჰარმონიული $3\\sqrt{6}$-ია.<br><br><strong>პასუხი:</strong> $\\dfrac{3r}{2}$, სადაც $d^2 - 10r^2 = 144$ (შეხებისას $3\\sqrt{6}$).",
    area: "geometry",
    topics: ["chords-tangents"],
    grade: 8,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 5
  {
    question: "იპოვეთ სამკუთხედის საშუალო გვერდის მიმართ გავლებული სიმაღლის სიგრძე, თუ ამ სამკუთხედის გვერდის სიგრძეებია $13$, $14$ და $15$.",
    options: [],
    tags: [],
    solution: "ჰერონის ფორმულით: $p = 21$, $S = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = 84$.<br><br>საშუალო გვერდზე ($14$) დაშვებული სიმაღლე: $h = \\dfrac{2S}{14} = 12$.<br><br><strong>პასუხი:</strong> $12$.",
    area: "geometry",
    topics: ["cevians"],
    grade: 8,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 6
  {
    question: "გაამარტივეთ ირაციონალური გამოსახულება $\\dfrac{1}{(\\sqrt{x} + \\sqrt{y})^2} : \\left[\\left(\\dfrac{\\sqrt{x} - \\sqrt{y}}{x - y}\\right)^{-1} - \\left(\\dfrac{x - y}{x\\sqrt{x} - y\\sqrt{y}}\\right)^{-1}\\right] : (\\sqrt{x}^{-1} - \\sqrt{y}^{-1})$, იპოვეთ მისი მნიშვნელობა, თუ $x = 0{,}025$ და $y = 0{,}1$.",
    options: [],
    tags: [],
    solution: "$\\left(\\dfrac{\\sqrt{x} - \\sqrt{y}}{x - y}\\right)^{-1} = \\sqrt{x} + \\sqrt{y}$, $\\left(\\dfrac{x - y}{x\\sqrt{x} - y\\sqrt{y}}\\right)^{-1} = \\dfrac{x + \\sqrt{xy} + y}{\\sqrt{x} + \\sqrt{y}}$.<br><br>კვადრატული ფრჩხილი: $\\dfrac{(\\sqrt{x} + \\sqrt{y})^2 - x - \\sqrt{xy} - y}{\\sqrt{x} + \\sqrt{y}} = \\dfrac{\\sqrt{xy}}{\\sqrt{x} + \\sqrt{y}}$.<br><br>$\\dfrac{1}{(\\sqrt{x} + \\sqrt{y})^2} \\cdot \\dfrac{\\sqrt{x} + \\sqrt{y}}{\\sqrt{xy}} \\cdot \\dfrac{\\sqrt{xy}}{\\sqrt{y} - \\sqrt{x}} = \\dfrac{1}{y - x}$.<br><br>$x = 0{,}025$, $y = 0{,}1$: $\\dfrac{1}{0{,}075} = \\dfrac{40}{3}$.<br><br><strong>პასუხი:</strong> $\\dfrac{1}{y - x} = 13\\dfrac{1}{3}$.",
    area: "algebra",
    topics: ["rational-eq"],
    grade: 8,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 7
  {
    question: "იპოვეთ რისი ტოლია $\\dfrac{\\sqrt{b}}{\\sqrt{a}} - \\dfrac{b - 1}{\\sqrt{ab}}$ გამოსახულების უმცირესი შესაძლო მნიშვნელობა, თუ $a$ და $b$ დადებითი რიცხვებისთვის სამართლიანია ტოლობა $2a + 18b = 25$.",
    options: [],
    tags: [],
    solution: "$\\dfrac{\\sqrt{b}}{\\sqrt{a}} - \\dfrac{b - 1}{\\sqrt{ab}} = \\dfrac{b - (b - 1)}{\\sqrt{ab}} = \\dfrac{1}{\\sqrt{ab}}$ — უმცირესია, როცა $ab$ უდიდესია.<br><br>კოშის უტოლობით: $2a \\cdot 18b \\le \\left(\\dfrac{2a + 18b}{2}\\right)^2 = \\dfrac{625}{4}$, ანუ $ab \\le \\dfrac{625}{144}$ და $\\sqrt{ab} \\le \\dfrac{25}{12}$; ტოლობა $2a = 18b = 12{,}5$-ზე.<br><br><strong>პასუხი:</strong> $\\dfrac{12}{25}$.",
    area: "algebra",
    topics: ["square-roots"],
    grade: 8,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 8
  {
    question: "მოცემული გვაქვს მონაკვეთი, რომლის სიგრძეა $a$. ფარგლის და სახაზავის გამოყენებით (სახაზავს მხოლოდ ერთი მხარე აქვს სწორი და დანაყოფების გარეშეა) როგორ ავაგოთ &thinsp; $\\sqrt{15}a$ &thinsp; სიგრძის მონაკვეთი?",
    options: [],
    tags: [],
    solution: "ავაგოთ მართი კუთხე (მართობი წრფეზე ფარგლით და სახაზავით). ერთ გვერდზე გადავდოთ $a$ სიგრძის კათეტი $AC$.<br><br>$A$ ცენტრით შემოვხაზოთ $4a$ რადიუსის წრეწირი ($a$ ოთხჯერ გადავდოთ), რომელიც მეორე გვერდს კვეთს $B$-ში.<br><br>$ABC$ მართკუთხა სამკუთხედში $BC = \\sqrt{(4a)^2 - a^2} = \\sqrt{15}a$.<br><br>(სხვა გზა: $8a$ დიამეტრზე ავაგოთ ნახევარწრეწირი და $3a$ მანძილზე აღვმართოთ მართობი — მისი სიგრძე $\\sqrt{3a \\cdot 5a} = \\sqrt{15}a$.)<br><br><strong>პასუხი:</strong> $\\sqrt{15}a$ არის $4a$ ჰიპოტენუზისა და $a$ კათეტის მქონე მართკუთხა სამკუთხედის მეორე კათეტი.",
    area: "geometry",
    topics: ["constructions"],
    grade: 8,
    difficulty: 3,
    type: ["construction"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 9
  {
    question: "წრეწირის რადიუსი $30$ სმ-ია. იპოვეთ იმ რკალის მომჭიმავი ქორდის სიგრძე, რომელიც ამ წრეწირის ცენტრიდან $50$ სმ-ით დაშორებული წერტილიდან გავლებული მხებების შეხების წერტილთა შეერთებით მიიღება.",
    options: [],
    tags: [],
    solution: "ვთქვათ, $O$ ცენტრია, $P$ — წერტილი ($OP = 50$), $A$ და $B$ — შეხების წერტილები. მხების სიგრძე: $PA = \\sqrt{50^2 - 30^2} = 40$.<br><br>$AB \\perp OP$, და $AB$-ს ნახევარი $OAP$ მართკუთხა სამკუთხედის სიმაღლეა: $\\dfrac{OA \\cdot PA}{OP} = \\dfrac{30 \\cdot 40}{50} = 24$.<br><br>$AB = 48$ სმ.<br><br><strong>პასუხი:</strong> $48$ სმ.",
    area: "geometry",
    topics: ["circle-angles","chords-tangents"],
    grade: 8,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 10
  {
    question: "ტოლფერდა ტრაპეციის ბლაგვი კუთხე $150^\\circ$-ის ტოლია. იპოვეთ რა უმცირესი პერიმეტრი შესაძლოა ჰქონდეს ამ ტრაპეციას, თუ ამ ტრაპეციის სიმაღლის და შუახაზის ნამრავლი $9$-ის ტოლია.",
    options: [],
    tags: [],
    solution: "მახვილი კუთხე $30^\\circ$-ია, ამიტომ ფერდი $c = 2h$. პერიმეტრი: $P = (a + b) + 2c = 2m + 4h$, სადაც $m$ შუახაზია და $mh = 9$.<br><br>კოშის უტოლობით: $2m + 4h \\ge 2\\sqrt{8mh} = 2\\sqrt{72} = 12\\sqrt{2}$; ტოლობა $2m = 4h$-ზე, ანუ $h = \\dfrac{3}{\\sqrt{2}}$, $m = 3\\sqrt{2}$.<br><br>ასეთი ტრაპეცია არსებობს: მცირე ფუძე $m - h\\sqrt{3} = 3\\sqrt{2} - \\dfrac{3\\sqrt{6}}{2} > 0$.<br><br><strong>პასუხი:</strong> $12\\sqrt{2}$.",
    area: "geometry",
    topics: ["midline","trapezoid","isosceles"],
    grade: 8,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];
