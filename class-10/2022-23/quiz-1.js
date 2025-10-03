const quizData = [
  //1
  {
    question: "დაალაგეთ ზრდადობით $a = \\sin 7; \\quad b = \\cos 280^\\circ; \\quad c = \\sin 8.$",
    options: [
      "$a; b; c$",
      "$a; c; b$",
      "$b; a; c$",
      "$b; c; a$",
      "$c; a; b$",
      "$c; b; a$"
    ],
    correct: 2,
    tags: ["trigonometry", "ordering"]
  },

  //2
  {
    question: "იპოვეთ $y = (2 \\sin^2 3x - 2 \\cos^2 3x)^2$ გამოსახულების უდიდესი შესაძლო მნიშვნელობა?",
    options: ["$0$", "$12$", "$18$", "$4$", "$2$", "$6$"],
    correct: 3,
    tags: ["functions", "max-value"]
  },

  //3
  {
    question: "დაალაგეთ ზრდადობით $a = \ tg 2; \\quad b = \ctg 3; \\quad c = \ tg 4.$",
    options: [
      "$a, b, c$",
      "$a, c, b$",
      "$c, a, b$",
      "$c, b, a$",
      "$b, c, a$",
      "$b, a, c$"
    ],
    correct: 5,
    tags: ["trigonometry", "ordering"]
  },

  //4
  {
    warning: "სამი პასუხია ჩათვლილი",
    question: "ჩამოთვლილთაგან რომელია ლუწი? \ $f(x) = \\sin x \\cdot \\cos x \\cdot x^3;$ \ $g(x) = \\sqrt{\\cos x};$ \ $h(x) = \ tg x \\cdot \ ctg x.$",
    options: [
      "$f(x)$ და $g(x)$",
      "$f(x)$ და $h(x)$",
      "$h(x)$ და $g(x)$",
      "მხოლოდ $g(x)$",
      "მხოლოდ $f(x)$",
      "მხოლოდ $h(x)$"
    ],
    correct: [0,1,2],
    tags: ["functions", "even-odd"]
  },

  //5
  {
    question: "ორი აცდენილი წრფიდან ერთი $\\theta$ სიბრტყის მართობულია. მეორე კი $\\theta$ სიბრტყესთან ადგენს $30^\\circ$-იან კუთხეს. რისი ტოლია ამ აცდენილ წრფეებს შორის კუთხე?",
    options: ["$150^\\circ$", "$30^\\circ$", "$0^\\circ$", "შეუძლებელია განსაზღვრა", "$60^\\circ$", "$45^\\circ$"],
    correct: 4,
    tags: ["geometry", "spatial"]
  },

  //6
  {
    question: "სიბრტყიდან $1$ ერთეულით დაშორებული $M$ წერტილიდან სიბრტყისადმი გავლებულია $MA$ და $MB$ დახრილები. პირველი მათგანი $M$ წერტილიდან სიბრტყეზე დაშვებულ მართობთან ადგენს $45^\\circ$-იან კუთხეს, მეორე კი $60^\\circ$ გრადუსიან კუთხეს. ამ დახრილების გეგმილები ერთმანეთთან $90^\\circ$-იან კუთხეს ადგენენ. იპოვეთ $AB$ მონაკვეთის სიგრძე.",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 1,
    tags: ["spatial geometry"]
  },

  //7
  {
    question: "ცნობილია, რომ $\\sin \\alpha$ ორჯერ ნაკლებია $\\cos \\alpha$-ზე. იპოვეთ $\\sin2 \\alpha$, თუ $\\alpha \\in [0; 90^\\circ]$.",
    options: ["$0{,}2$", "$0{,}4$", "$0{,}5$", "$0{,}6$", "$0{,}7$", "$0{,}8$"],
    correct: 5,
    tags: ["trigonometry"]
  },

  //8
  {
    question: "$45^\\circ$-იან ორწახნაგა კუთხის ერთ წახნაგში გავლებული $AB$ მონაკვეთი წიბოს კვეთს $B$ წერტილში და მასთან ადგენს $45^\\circ$-იან კუთხეს. იპოვეთ რა კუთხეს ადგენს $AB$ დახრილი მეორე წახნაგთან.",
    options: ["$15^\\circ$", "$30^\\circ$", "$0^\\circ$", "$75^\\circ$", "$60^\\circ$", "$45^\\circ$"],
    correct: 1,
    tags: ["spatial geometry"]
  },

  //9
  {
    question: "სივრცეში მოცემულია $A, B, C$ და $D$ წერტილები. ცნობილია, რომ $\\angle ABC = 90^\\circ$ და $\\angle BCD = 90^\\circ$. რა შეიძლება ითქვას $AB$ და $CD$ წრფეებს შორის კუთხეზე?",
    options: [
      "აუცილებლად მართია",
      "აუცილებლად მახვილია",
      "აუცილებლად ნულია",
      "შეიძლება იყოს ნებისმიერი",
      "აუცილებლად გაშლილია",
      "აუცილებლად ბლაგვია"
    ],
    correct: 3,
    tags: ["spatial geometry"]
  },

  //10
  {
    question: "დახრილი სიბრტყესთან ადგენს კუთხეს, რომლის ტანგენსი $0{,}5\\sqrt{5}$-ის ტოლია. ამ დახრილის გეგმილი სიბრტყეში მდებარე $a$ წრფესთან კი ადგენს კუთხეს, რომლის სინუსი $0{,}25\\sqrt{7}$-ის ტოლია. რისი ტოლია დახრილსა და $a$ წრფეს შორის მდებარე კუთხე?",
    options: ["$15^\\circ$", "$30^\\circ$", "$0^\\circ$", "$75^\\circ$", "$60^\\circ$", "$45^\\circ$"],
    correct: 4,
    tags: ["spatial geometry"]
  },
    //11
  {
    question: "იპოვეთ $f(x)$ ფუნქციის უმცირესი დადებითი პერიოდი, თუ $f(x) = g(0{,}5x) + h(2x)$, სადაც $g(x) = \\sin(4x)$, ხოლო $h(x) = \\cos x$.",
    options: ["$\\dfrac{\\pi}{2}$", "$\\pi$", "$1{,}5\\pi$", "$2\\pi$", "$2{,}5\\pi$", "$3\\pi$"],
    correct: 1,
    tags: ["periodicity", "functions"]
  },

  //12
  {
    question: "რისი ტოლია $\ tg(-\\pi + 1)\\sin 900^\\circ + \ ctg(-675^\\circ) - \\sin^2\\left(\\dfrac{20\\pi}{7}\\right) - \\cos^2\\left(\\dfrac{6\\pi}{7}\\right)$ გამოსახულების მნიშვნელობა?",
    options: ["$0$", "$1$", "$2$", "$3$", "$4$", "$5$"],
    correct: 0,
    tags: ["trig identities", "simplification"]
  },

  //13
  {
    question: "ჩამოთვლილთაგან რისი ტოლია ნებისმიერი $\\alpha$-სთვის $\\sin\\left(\\dfrac{3\\pi}{2} + \\alpha\\right)$ გამოსახულების მნიშვნელობა?",
    options: [
      "$\\sin\\left(\\dfrac{\\pi}{2} - \\alpha\\right)$",
      "$\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right)$",
      "$\\sin\\left(\\dfrac{\\pi}{2} + \\alpha\\right)$",
      "$\\cos(\\alpha - \\dfrac{\\pi}{2})$",
      "$\\sin(\\alpha - \\dfrac{\\pi}{2})$",
      "$\\cos(\\alpha + \\dfrac{\\pi}{2})$"
    ],
    correct: 4,
    tags: ["trigonometry", "identity"]
  },

  //14
  {
    question: "ABC ტოლფერდა სამკუთხედის გვერდებია $6; 6; 3\\sqrt{2}$. სამკუთხედის $BC$ ფერდი $\\alpha$ სიბრტყეშია. $AB$ დახრილი $\\alpha$ სიბრტყესთან $30^\\circ$-იან კუთხეს ადგენს. სიბრტყის გარეთ მდებარე $A$ წერტილიდან $\\alpha$ სიბრტყისადმი გავლებულია $AK$ მართობი. იპოვეთ $BKC$ კუთხის სიდიდე?",
    options: ["$15^\\circ$", "$30^\\circ$", "$90^\\circ$", "$75^\\circ$", "$60^\\circ$", "$45^\\circ$"],
    correct: 2,
    tags: ["geometry", "triangles"]
  },

  //15
  {
    question: "$\\dfrac{\\cos\\left(\\dfrac{\\pi}{4} + \\alpha\\right) + \\cos\\left(\\dfrac{\\pi}{4} - \\alpha\\right)}{\\sqrt{2} \\cos \\alpha} + \\sqrt{2} \\cdot \\dfrac{\\sin\\left(\\dfrac{\\pi}{6} - \\alpha\\right) + \\sin\\left(\\dfrac{\\pi}{6} + \\alpha\\right)}{\\sin\\left(\\dfrac{\\pi}{4} - \\alpha\\right) + \\sin\\left(\\dfrac{\\pi}{4} + \\alpha\\right)} =$",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 1,
    tags: ["trigonometric identities"]
  },

  //16
  {
    question: "დათვალეთ $\ tg\\left(\\dfrac{360^\\circ - \\alpha - \\beta}{4}\\right)$, თუ $\\cos\\left(\\dfrac{\\alpha}{4}\\right) = \\dfrac{1}{2}$ და $\\cos\\left(\\dfrac{\\beta}{4}\\right) = -\\dfrac{\\sqrt{2}}{2}$, ხოლო $1080^\\circ < \\alpha < 1440^\\circ; \\quad 720^\\circ < \\beta < 1080^\\circ.$",
    options: ["$\\sqrt{2}$", "$\\sqrt{3}$", "$\\sqrt{2} + \\sqrt{3}$", "$\\sqrt{2} - \\sqrt{3}$", "$-\\sqrt{2} + \\sqrt{3}$", "$-2 - \\sqrt{3}$"],
    correct: 5,
    tags: ["trig expressions", "range"]
  },

  //17
  {
    question: "$AB$ მონაკვეთი სიბრტყის პარალელურია და დაშორებულია მისგან $\\sqrt{3}$ ერთეულით. სიბრტყეზე დაშვებულია $AA_1$ და $BB_1$ სიმაღლეები. ასევე გავლებულია $AB$ მონაკვეთის მართობულად სიბრტყისადმი $AC$ და $BD$ დახრილები. ერთი მათგანი სიბრტყესთან $60^\\circ$-იან, ხოლო მეორე $30^\\circ$-იან კუთხეებს ადგენენ. იპოვეთ $A_1B_1DC$ ოთხკუთხედის ფართობი, თუ $AB = 3$.",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 5,
    tags: ["spatial geometry", "area"]
  },

  //18
  {
    question: "იპოვეთ $\\dfrac{\\sqrt{0{,}5 - x^3}}{\\sqrt{0{,}5 + x^3}}$ გამოსახულების მნიშვნელობათა სიმრავლე.",
    options: ["$[0; 1)$", "$[0; 1]$", "$(0; 1)$", "$(0; 1]$", "$[0; +\\infty)$", "$[1; +\\infty)$"],
    correct: 4,
    tags: ["domain", "inequality"]
  },

  //19
  {
    question: "$90^\\circ$-იანი ორწახნაგა კუთხის თითოეულ წახნაგზე მოცემულია თითო წრფე. თითოეული მათგანი ორწახნაგა კუთხის წიბოს კვეთს $45^\\circ$-იანი კუთხით. რისი ტოლია ამ წრფეებს შორის კუთხე?",
    options: ["$0^\\circ$", "$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$90^\\circ$", "$180^\\circ$"],
    correct: 3,
    tags: ["spatial angles"]
  },

  //20
  {
    question: "$\\dfrac{\ tg \\alpha + \ tg(45^\\circ - \\alpha)}{1 - \ tg \\alpha \\cdot \ tg(45^\\circ - \\alpha)} - \ tg \\alpha \\cdot \ tg \\beta - (\ tg \\alpha + \ tg \\beta) \\cdot \ ctg(\\alpha + \\beta) =$",
    options: ["$0$", "$1$", "$2$", "$3$", "$4$", "$5$"],
    correct: 0,
    tags: ["identities", "simplification"]
  },

  //21
  {
    question: "იპოვეთ $8\ tg^2 x + 18\ ctg^2(-x)$ გამოსახულების უმცირესი შესაძლო მნიშვნელობა?",
    options: ["$0$", "$36$", "$18$", "$8$", "$28$", "$24$"],
    correct: 5,
    tags: ["minimum", "expressions"]
  },

  //22
  {
    question: "ცნობილია, რომ $\ ctg\\left(\\dfrac{\\pi}{2} + \\alpha\\right) = 2$. რისი ტოლია $\\sin4 \\alpha$?",
    options: ["$-\\dfrac{24}{25}$", "$-\\dfrac{4}{5}$", "$-\\dfrac{40}{34}$", "$-\\dfrac{2}{5}$", "$\\dfrac{4}{5}$", "$\\dfrac{24}{25}$"],
    correct: 5,
    tags: ["powers", "trigonometry"]
  },

  //23
  {
    question: "$M$ წერტილი სიბრტყიდან დაშორებულია $MK = h$ მანძილით. $M$ წერტილიდან გავლებულია $MA = a$ და $MB = b$ სიგრძის დახრილები. იპოვეთ $AB$ მონაკვეთის სიგრძე, თუ $MAK$ კუთხის ბისექტრისა მართობულია $KB$ წრფის.",
    options: [
      "$\\sqrt{3a^2 + b^2 - 5h^2}$",
      "$\\sqrt{a^2 - b^2 + h^2}$",
      "$\\sqrt{ab} - h$",
      "$\\sqrt{ab} + h$",
      "$\\sqrt{a^2 + b^2 - 2h^2}$",
      "შეუძლებელია დადგენა."
    ],
    correct: 4,
    tags: ["spatial geometry", "distance"]
  },

  //24
  {
    question: "ცნობილია, რომ $\\cos 2020^\\circ = a$. რისი ტოლია $\\cos 505^\\circ$?",
    options: [
    "$-\\dfrac{\\sqrt{2 + \\sqrt{2 + 2a}}}{2}$",
    "$\\dfrac{\\sqrt{2 - \\sqrt{2 - 2a}}}{2}$",
    "$\\dfrac{\\sqrt{2 + \\sqrt{2 - 2a}}}{2}$",
    "$-\\dfrac{\\sqrt{2 - \\sqrt{2 + 2a}}}{2}$",
    "$\\dfrac{\\sqrt{2 + \\sqrt{2 + 2a}}}{2}$",
    "$-\\dfrac{\\sqrt{2 - \\sqrt{2 - 2a}}}{2}$"
  ],
  correct: 0,
  tags: ["cos identity", "angle reduction"]
  },

  //25
  {
    question: "სიბრტყის გარეთ აღებულია სამი $A, B$ და $C$ წერტილები (შესაძლოა წერტილები არ იყოს სიბრტყის ერთ მხარეს). ეს წერტილები დაშორებული არიან სიბრტყიდან $1$, $2$ და $3$ ერთეულით. ჩამოთვლილთაგან რისი ტოლი არ შეიძლება იყოს მანძილი $ABC$ სამკუთხედის მედიანების გადაკვეთის წერტილიდან სიბრტყემდე?",
    options: ["$2$", "$\\dfrac{4}{3}$", "$\\dfrac{2}{3}$", "$0$", "$1$", "ყველა წინა პასუხი სწორია და შესაძლებელია."],
    correct: 4,
    tags: ["spatial geometry", "median"]
  }
];
