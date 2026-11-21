quizData = [
  // 1
  {
    question: "ამოხსენით $\\sin x = \ tg x$ განტოლება. (სავარაუდო პასუხებში ყველგან $n \\in \\mathbb{Z}$)",
    options: ["$x = 0$", "$x = \\pi n$", "$x = 2\\pi n$", "$x = \\pi + 2\\pi n$", "$x = \\frac{\\pi}{2} + 2\\pi n$", "$x = \\frac{\\pi}{2} - 2\\pi n$"],
    correct: 1,
    solution: "$\\sin x = \\dfrac{\\sin x}{\\cos x}$, $\\cos x \\ne 0$: $\\sin x\\left(1 - \\dfrac{1}{\\cos x}\\right) = 0$, ანუ $\\sin x = 0$ ან $\\cos x = 1$.<br><br>ორივე შემთხვევა იძლევა $x = \\pi n$-ს.<br><br><strong>პასუხი:</strong> ბ) $x = \\pi n$.",
    tags: [],
    area: "algebra",
    topics: ["trig-eq"],
    grade: 10,
    difficulty: 1,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 2
  {
    question: "ამოხსენით $\\arcsin\\left(\\frac{2x - 3}{4}\\right) = \\frac{\\pi}{6}$ განტოლება.",
    options: ["$x = \\pi$", "$x = \\frac{\\pi}{4}$", "$x = \\frac{1}{2}$", "$x = \\frac{5}{2}$", "$x = \\frac{2}{3}$", "$x = 2$"],
    correct: 3,
    solution: "$\\dfrac{2x - 3}{4} = \\sin\\dfrac{\\pi}{6} = \\dfrac{1}{2}$, $2x - 3 = 2$, $x = \\dfrac{5}{2}$.<br><br><strong>პასუხი:</strong> დ) $x = \\frac{5}{2}$.",
    tags: [],
    area: "algebra",
    topics: ["inverse-trig"],
    grade: 10,
    difficulty: 1,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 3
  {
    question: "გამოთვალეთ $\\arcsin(\\sin 7)$ გამოსახულების მნიშვნელობა.",
    options: ["$7$", "$\\cos 7$", "$\\pi$", "$7 - 2\\pi$", "$7 + 2\\pi$", "$\\sin 7 - \\pi$"],
    correct: 3,
    solution: "$\\sin 7 = \\sin(7 - 2\\pi)$, ხოლო $7 - 2\\pi \\approx 0{,}72 \\in \\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$.<br><br>$\\arcsin(\\sin 7) = 7 - 2\\pi$.<br><br><strong>პასუხი:</strong> დ) $7 - 2\\pi$.",
    tags: [],
    area: "algebra",
    topics: ["inverse-trig"],
    grade: 10,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 4
  {
    question: "წესიერი სამკუთხა პირამიდის ფუძის გვერდია $6$. იპოვეთ მანძილი გვერდითი წიბოს შუა წერტილიდან პირამიდის სიმაღლემდე.",
    options: ["$3$", "$1$", "$2$", "$\\sqrt{6}$", "$\\sqrt{2}$", "$\\sqrt{3}$"],
    correct: 5,
    solution: "სიმაღლე გადის ფუძის ცენტრზე, ფუძის წვეროდან მის ღერძამდე მანძილი $R = \\dfrac{6}{\\sqrt{3}} = 2\\sqrt{3}$.<br><br>გვერდითი წიბოს შუა წერტილი ამ მანძილის ნახევარზეა (წიბოს მეორე ბოლო — წვერო — ღერძზეა): $\\sqrt{3}$.<br><br><strong>პასუხი:</strong> ვ) $\\sqrt{3}$.",
    tags: [],
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
    question: "პირამიდის წვეროების რაოდენობა $26$-ით ნაკლებია წიბოების რაოდენობაზე. იპოვეთ წახნაგების რაოდენობა.",
    options: ["$26$", "$20$", "$30$", "$32$", "$28$", "$29$"],
    correct: 4,
    solution: "$n$-კუთხა პირამიდას აქვს $n + 1$ წვერო, $2n$ წიბო, $n + 1$ წახნაგი.<br><br>$2n - (n + 1) = 26$, $n = 27$, წახნაგები $28$.<br><br><strong>პასუხი:</strong> ე) $28$.",
    tags: [],
    area: "solid",
    topics: ["pyramid"],
    grade: 10,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 6
{
  question: "ამოხსენით $\\begin{cases} 3\\sin x - \\cos y = 1 \\\\ 5\\sin x + 7\\cos y = 6 \\end{cases}$ განტოლებათა სისტემა. (სავარაუდო პასუხებში ყველგან $n \\in \\mathbb{Z};\\ k \\in \\mathbb{Z}$)",
  options: [
    "$\\begin{cases} x = (-1)^n \\frac{\\pi}{6} + \\pi n \\\\ y = \\frac{\\pi}{3} + 2\\pi k \\end{cases}$",
    "$\\begin{cases} x = (-1)^n \\frac{\\pi}{6} + \\pi n \\\\ y = \\pm\\frac{\\pi}{3} + 2\\pi k \\end{cases}$",
    "$\\begin{cases} x = (-1)^{n+1} \\frac{\\pi}{6} + \\pi n \\\\ y = \\pm\\frac{\\pi}{3} + \\pi k \\end{cases}$",
    "$\\begin{cases} x = \\frac{\\pi}{6} + \\pi n \\\\ y = \\pm\\frac{\\pi}{3} + 2\\pi k \\end{cases}$",
    "$\\begin{cases} x = \\pm\\frac{\\pi}{6} + \\pi n \\\\ y = \\pm\\frac{\\pi}{3} + 2\\pi k \\end{cases}$",
    "$\\begin{cases} x = \\pm\\frac{\\pi}{6} + \\pi n \\\\ y = (-1)^n \\frac{\\pi}{3} + 2\\pi k \\end{cases}$"
  ],
  correct: 1,
  solution: "აღვნიშნოთ $u = \\sin x$, $v = \\cos y$: $v = 3u - 1$, $5u + 7(3u - 1) = 6$, $u = \\dfrac{1}{2}$, $v = \\dfrac{1}{2}$.<br><br>$x = (-1)^n\\dfrac{\\pi}{6} + \\pi n$, $y = \\pm\\dfrac{\\pi}{3} + 2\\pi k$.<br><br><strong>პასუხი:</strong> ბ) $x = (-1)^n \\frac{\\pi}{6} + \\pi n$, $y = \\pm\\frac{\\pi}{3} + 2\\pi k$.",
  tags: [],
  area: "algebra",
  topics: ["trig-eq","linear-systems"],
  grade: 10,
  difficulty: 1,
  type: ["solve"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

// 7
{
  question: "ჩამოთვლილთაგან რისი ტოლია $a$ პარამეტრის მნიშვნელობა, თუ $\\sin x + \\sqrt{3}\\cos x = a$ განტოლების უდიდესი უარყოფითი ამონახსნისა და უმცირესი დადებითი ამონახსნების ჯამი $-\\frac{5\\pi}{3}$ -ის ტოლია.",
  options: ["$\\frac{1}{2}$", "$\\frac{\\sqrt{2}}{2}$", "$-1$", "$1$", "$2$", "$3$"],
  correct: 4,
  solution: "$\\sin x + \\sqrt{3}\\cos x = 2\\sin\\left(x + \\dfrac{\\pi}{3}\\right) = a$.<br><br>$a = 2$-ზე $x = \\dfrac{\\pi}{6} + 2\\pi k$: უმცირესი დადებითი $\\dfrac{\\pi}{6}$, უდიდესი უარყოფითი $-\\dfrac{11\\pi}{6}$, ჯამი $-\\dfrac{5\\pi}{3}$ ✓.<br><br>(მაგ. $a = 1$-ზე ამონახსნებია $-\\dfrac{\\pi}{6}$ და $\\dfrac{\\pi}{2}$, ჯამი $\\dfrac{\\pi}{3}$.)<br><br><strong>პასუხი:</strong> ე) $2$.",
  tags: [],
  area: "algebra",
  topics: ["trig-eq"],
  grade: 10,
  difficulty: 1,
  type: ["solve"],
  method: ["parameter"],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

// 8
{
  question: "გამოთვალეთ $\\cos\\left(2\\arcsin\\frac{1}{3}\\right)$ გამოსახულების მნიშვნელობა.",
  options: ["$\\frac{7}{9}$", "$\\frac{2}{3}$", "$\\frac{2}{9}$", "$\\frac{2\\sqrt{2}}{9}$", "$\\frac{\\sqrt{3}}{6}$", "შეუძლებელია გამოთვლა"],
  correct: 0,
  solution: "$\\cos 2t = 1 - 2\\sin^2 t$, $t = \\arcsin\\dfrac{1}{3}$: $1 - \\dfrac{2}{9} = \\dfrac{7}{9}$.<br><br><strong>პასუხი:</strong> ა) $\\frac{7}{9}$.",
  tags: [],
  area: "algebra",
  topics: ["inverse-trig"],
  grade: 10,
  difficulty: 1,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

// 9
{
  question: "ჩამოთვლილთაგან რისი ტოლია წესიერი ექვსკუთხა პირამიდის გვერდითი წახნაგის ფუძესთან მდებარე ბრტყელი კუთხე?",
  options: ["$17^\\circ$", "$27^\\circ$", "$30^\\circ$", "$47^\\circ$", "$60^\\circ$", "$77^\\circ$"],
  correct: 5,
  solution: "გვერდითი წახნაგი ტოლფერდა სამკუთხედია ფუძესთან $\\alpha$ კუთხით; წვეროსთან კუთხე $180^\\circ - 2\\alpha$.<br><br>მრავალწახნაგა კუთხის ბრტყელი კუთხეების ჯამი $360^\\circ$-ზე ნაკლებია: $6(180^\\circ - 2\\alpha) < 360^\\circ$, $\\alpha > 60^\\circ$. ჩამოთვლილთაგან: $77^\\circ$.<br><br><strong>პასუხი:</strong> ვ) $77^\\circ$.",
  tags: [],
  area: "solid",
  topics: ["pyramid"],
  grade: 10,
  difficulty: 1,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

// 10
{
  question: "წესიერი სამკუთხა პირამიდის ყველა წიბო ერთმანეთის ტოლია. იპოვეთ ამ პირამიდის სიმაღლესა და აპოთემას შორის კუთხის სინუსი.",
  options: ["$\\frac{1}{3}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{2}}{2}$", "$\\frac{\\sqrt{3}}{3}$", "$\\frac{1}{4}$", "$\\frac{\\sqrt{3}}{4}$"],
  correct: 0,
  solution: "ვთქვათ, წიბოა $a$. აპოთემა (გვერდითი წახნაგის სიმაღლე) $\\dfrac{a\\sqrt{3}}{2}$, ფუძის ჩახაზული წრეწირის რადიუსი $r = \\dfrac{a}{2\\sqrt{3}}$.<br><br>სიმაღლე, აპოთემა და $r$ ქმნის მართკუთხა სამკუთხედს: $\\sin\\varphi = \\dfrac{r}{\\text{აპოთემა}} = \\dfrac{a/(2\\sqrt{3})}{a\\sqrt{3}/2} = \\dfrac{1}{3}$.<br><br><strong>პასუხი:</strong> ა) $\\frac{1}{3}$.",
  tags: [],
  area: "solid",
  topics: ["pyramid"],
  grade: 10,
  difficulty: 2,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},
// 11
{
  question: "მოცემულია $f(x) = \\frac{1}{x}$ და $g(x) = \\cos\\left(\\frac{\\pi}{8}x\\right)$ ფუნქციები. ამოხსენით $f(g(x)) = -2g(8)$ განტოლება. (სავარაუდო პასუხებში ყველგან $n \\in \\mathbb{Z}$)",
  options: [
    "$\\pm \\pi + 2\\pi n$",
    "$\\pm \\frac{4\\pi}{3} + 16\\pi n$",
    "$\\pm \\frac{\\pi}{3} + 2\\pi n$",
    "$\\pm \\frac{1}{6} + 8n$",
    "$\\pm \\frac{8}{3} + 16n$",
    "$2n$"
  ],
  correct: 4,
  solution: "$g(8) = \\cos\\pi = -1$, ამიტომ $-2g(8) = 2$. $f(g(x)) = \\dfrac{1}{\\cos(\\pi x/8)} = 2$, $\\cos\\dfrac{\\pi x}{8} = \\dfrac{1}{2}$.<br><br>$\\dfrac{\\pi x}{8} = \\pm\\dfrac{\\pi}{3} + 2\\pi n$, $x = \\pm\\dfrac{8}{3} + 16n$.<br><br><strong>პასუხი:</strong> ე) $\\pm \\frac{8}{3} + 16n$.",
  tags: [],
  area: "algebra",
  topics: ["trig-eq"],
  grade: 10,
  difficulty: 2,
  type: ["solve"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

// 12
{
  question: "ამოხსენით $\\sin x \\cos x \\cos 2x = 0$ განტოლება. (სავარაუდო პასუხებში ყველგან $n \\in \\mathbb{Z}$)",
  options: [
    "$x = \\pm \\frac{\\pi}{4} + 2\\pi n$",
    "$x = \\pm \\frac{\\pi}{2} + 2\\pi n$",
    "$x = \\pm \\frac{\\pi}{4} + \\pi n$",
    "$x = \\frac{\\pi n}{4}$",
    "$x = \\frac{\\pi n}{2}$",
    "$x = \\pi n$"
  ],
  correct: 3,
  solution: "$\\sin x\\cos x\\cos 2x = \\dfrac{1}{4}\\sin 4x = 0$, $4x = \\pi n$, $x = \\dfrac{\\pi n}{4}$.<br><br><strong>პასუხი:</strong> დ) $x = \\frac{\\pi n}{4}$.",
  tags: [],
  area: "algebra",
  topics: ["trig-eq","sum-formulas"],
  grade: 10,
  difficulty: 2,
  type: ["solve"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

// 13
{
  question: "ჩამოთვლილთაგან რისი ტოლია $f(\\cos x) = 4$ განტოლების ამონახსნი, თუ $f(\\sin x) = 3 + \\cos^2 x$.",
  options: [
    "$-\\pi$", 
    "$-\\frac{4\\pi}{3}$", 
    "$-\\frac{3\\pi}{2}$", 
    "$\\frac{\\pi}{3}$", 
    "$\\pi$", 
    "$2\\pi$"
  ],
  correct: 2,
  solution: "$f(\\sin x) = 3 + \\cos^2 x = 4 - \\sin^2 x$, ამიტომ $f(t) = 4 - t^2$ ($t \\in [-1; 1]$).<br><br>$f(\\cos x) = 4 - \\cos^2 x = 4$, $\\cos x = 0$, $x = \\dfrac{\\pi}{2} + \\pi n$. ჩამოთვლილთაგან: $-\\dfrac{3\\pi}{2}$.<br><br><strong>პასუხი:</strong> გ) $-\\frac{3\\pi}{2}$.",
  tags: [],
  area: "algebra",
  topics: ["trig-eq"],
  grade: 10,
  difficulty: 2,
  type: ["solve"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

// 14
{
  question: "იპოვეთ $SABCDEBF$ წესიერი პირამიდის იმ კვეთის ფართობი, რომელიც გადის $S$ წვეროზე და $ABCDEF$ ფუძის $BF$ დიაგონალზე, თუ ფუძის გვერდია $8$, ხოლო პირამიდის სიმაღლე $3$.",
  options: [
    "$20$", 
    "$20\\sqrt{3}$", 
    "$20\\sqrt{2}$", 
    "$24$", 
    "$24\\sqrt{3}$", 
    "$24\\sqrt{2}$"
  ],
  correct: 1,
  solution: "კვეთა $SBF$ სამკუთხედია. $BF = 8\\sqrt{3}$ (ექვსკუთხედის მცირე დიაგონალი), ცენტრიდან $BF$-მდე მანძილი $\\dfrac{a}{2} = 4$.<br><br>$S$-დან $BF$-მდე მანძილი: $\\sqrt{3^2 + 4^2} = 5$.<br><br>$S_{SBF} = \\dfrac{1}{2} \\cdot 8\\sqrt{3} \\cdot 5 = 20\\sqrt{3}$.<br><br><strong>პასუხი:</strong> ბ) $20\\sqrt{3}$.",
  tags: [],
  area: "solid",
  topics: ["pyramid","cross-sections"],
  grade: 10,
  difficulty: 2,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

// 15
{
  question: "პარალელეპიპედის ფუძის ორი მეზობელი წიბოს შუა წერტილებზე გავლებულია სიბრტყე. ჩამოთვლილთაგან რა ფიგურა მიიღება კვეთაში? სამკუთხედი; ოთკუთხედი; ხუთკუთხედი; ექვსკუთხედი.",
  options: [
    "მხოლოდ სამკუთხედი",
    "მხოლოდ ოთკუთხედი",
    "მხოლოდ სამკუთხედი ან ოთკუთხედი",
    "მხოლოდ სამკუთხედი, ოთკუთხედი ან ექვსკუთხედი",
    "მხოლოდ სამკუთხედი ან ექვსკუთხედი",
    "ნებისმიერი ამ ოთხიდან"
  ],
  correct: 5,
  solution: "ვთქვათ, $M$ და $N$ არის $AB$ და $AD$ წიბოების შუა წერტილები. სიბრტყის დახრის მიხედვით კვეთა შეიძლება იყოს:<br>• სამკუთხედი — თუ სიბრტყე მხოლოდ $A$ წვეროს მოკვეთს ($AA_1$-ის წერტილზე გადის);<br>• ოთხკუთხედი — მაგ. ფუძის მართობული სიბრტყე $MN$-ზე;<br>• ხუთკუთხედი — თუ სიბრტყე ზედა ფუძესაც კვეთს;<br>• ექვსკუთხედი — მაგ. კუბში ექვსი წიბოს შუა წერტილზე ($AB$, $AD$, $DD_1$, $D_1C_1$, $C_1B_1$, $B_1B$) გამავალი სიბრტყე.<br><br><strong>პასუხი:</strong> ვ) ნებისმიერი ამ ოთხიდან.",
  tags: [],
  area: "solid",
  topics: ["prism"],
  grade: 10,
  difficulty: 2,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},
// 16
{
  question: "ამოხსენით $\\sin^4 x + \\cos^4 x = \\frac{3}{4}$ განტოლება. (სავარაუდო პასუხებში ყველგან $n \\in \\mathbb{Z}$)",
  options: [
    "$x = (-1)^n \\frac{\\pi}{4} + \\pi n$",
    "$x = (-1)^n \\pi + \\pi n$",
    "$x = \\pm \\frac{\\pi}{4} + \\pi n$",
    "$x = \\frac{\\pi}{4} + \\frac{\\pi n}{2}$",
    "$x = \\frac{\\pi}{2} + \\frac{\\pi n}{2}$",
    "$x = \\frac{\\pi}{8} + \\frac{\\pi n}{4}$"
  ],
  correct: 5,
  solution: "$\\sin^4 x + \\cos^4 x = 1 - \\dfrac{1}{2}\\sin^2 2x = \\dfrac{3}{4}$, $\\sin^2 2x = \\dfrac{1}{2}$, ანუ $\\cos 4x = 0$.<br><br>$4x = \\dfrac{\\pi}{2} + \\pi n$, $x = \\dfrac{\\pi}{8} + \\dfrac{\\pi n}{4}$.<br><br><strong>პასუხი:</strong> ვ) $x = \\frac{\\pi}{8} + \\frac{\\pi n}{4}$.",
  tags: [],
  area: "algebra",
  topics: ["trig-eq"],
  grade: 10,
  difficulty: 2,
  type: ["solve"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

// 17
{
  question: "ამოხსენით $2|\\sin x| - 3 = \\cos 2x$ განტოლება. (სავარაუდო პასუხებში ყველგან $n \\in \\mathbb{Z}$)",
  options: [
    "$x = \\pm \\frac{\\pi}{4} + 2\\pi n$",
    "$x = \\pm \\frac{\\pi}{4} + \\pi n$",
    "$x = \\frac{\\pi}{2} + 2\\pi n$",
    "$x = \\pm \\frac{\\pi}{3} + 2\\pi n$",
    "$x = \\pm \\frac{\\pi}{3} + \\pi n$",
    "$x = \\frac{\\pi}{2} + \\pi n$"
  ],
  correct: 5,
  solution: "$\\cos 2x = 1 - 2\\sin^2 x$: $2|\\sin x| - 3 = 1 - 2\\sin^2 x$, $\\sin^2 x + |\\sin x| - 2 = 0$, $|\\sin x| = 1$ (ან $-2$).<br><br>$\\sin x = \\pm 1$, $x = \\dfrac{\\pi}{2} + \\pi n$.<br><br><strong>პასუხი:</strong> ვ) $x = \\frac{\\pi}{2} + \\pi n$.",
  tags: [],
  area: "algebra",
  topics: ["trig-eq","abs-eq","sum-formulas"],
  grade: 10,
  difficulty: 2,
  type: ["solve"],
  method: ["absolute"],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

// 18
{
  question: "ჩამოთვლილთაგან რომლის ტოლია $2\ arctg\\frac{1}{5} + \ arctg\\frac{1}{4}$ გამოსახულების მნიშვნელობა?",
  options: [
    "$\ arctg\\frac{11}{20}$",
    "$\ arctg\\frac{12}{37}$",
    "$\ arctg\\frac{32}{43}$",
    "$30^\\circ$",
    "$45^\\circ$",
    "$60^\\circ$"
  ],
  correct: 2,
  solution: "$\\tan\\left(2\\arctan\\dfrac{1}{5}\\right) = \\dfrac{2/5}{1 - 1/25} = \\dfrac{5}{12}$.<br><br>$\\tan(\\ldots + \\arctan\\dfrac{1}{4}) = \\dfrac{\\frac{5}{12} + \\frac{1}{4}}{1 - \\frac{5}{48}} = \\dfrac{32/48}{43/48} = \\dfrac{32}{43}$; კუთხე $\\left(0; \\dfrac{\\pi}{2}\\right)$-შია, ამიტომ მნიშვნელობა $\\arctan\\dfrac{32}{43}$.<br><br><strong>პასუხი:</strong> გ) $arctg\\frac{32}{43}$.",
  tags: [],
  area: "algebra",
  topics: ["inverse-trig"],
  grade: 10,
  difficulty: 3,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

// 19
{
  question: "რა მაქსიმალური რაოდენობის წიბო შეიძლება ჰქონდეს $SA_1A_2\\dots A_n$ პირამიდას (ფუძეში $A_1A_2\\dots A_n$ მრავალკუთხედია), თუ $S$ წვეროსთან მდებარე ბრტყელი კუთხეები ადგენენ არითმეტიკულ პროგრესიას, რომლის სხვაობა $10^\\circ$-ია, ხოლო $S$ წვეროსთან მდებარე უმცირესი ბრტყელი კუთხე კი $20^\\circ$-ია?",
  options: ["$8$", "$10$", "$12$", "$14$", "$16$", "$18$"],
  correct: 3,
  solution: "ბრტყელი კუთხეები: $20^\\circ, 30^\\circ, \\ldots, 20^\\circ + 10^\\circ(n - 1)$; მათი ჯამი $360^\\circ$-ზე ნაკლები უნდა იყოს: $20n + 5n(n - 1) < 360$, $n^2 + 3n - 72 < 0$, $n \\le 7$.<br><br>$n = 7$-ზე ჯამი $350^\\circ$ და უდიდესი კუთხე დანარჩენების ჯამზე ნაკლებია — პირამიდა არსებობს. წიბოები: $2n = 14$.<br><br><strong>პასუხი:</strong> დ) $14$.",
  tags: [],
  area: "algebra",
  topics: ["arithmetic-prog","combinatorics","pyramid"],
  grade: 10,
  difficulty: 3,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

// 20
{
  question: "$ABCDA_1B_1C_1D_1$ კუბის $AD$ და $CC_1$ წიბოების შუა წერტილებსა და $A_1B_1C_1D_1$ წახნაგის დიაგონალების გადაკვეთის წერტილზე გავლებულია სიბრტყე. იპოვეთ მიღებული კვეთის პერიმეტრი, თუ კუბის წიბოს სიგრძეა $6$.",
  options: [
    "$\\sqrt{54} + \\sqrt{13} + \\sqrt{7}$",
    "$\\sqrt{40} + \\sqrt{52} + \\sqrt{13} + \\sqrt{10}$",
    "$\\sqrt{52} + \\sqrt{45} + \\sqrt{10} + \\frac{\\sqrt{5}}{2} + \\sqrt{13}$",
    "$\\sqrt{52} + \\sqrt{10} + \\sqrt{40} + \\frac{3\\sqrt{5}}{2} + \\frac{3\\sqrt{13}}{2}$",
    "$\\sqrt{52} + \\sqrt{10} + \\frac{2\\sqrt{5}}{3} + \\frac{\\sqrt{11}}{3} + \\sqrt{13}$",
    "$\\sqrt{40} + \\sqrt{52} + \\sqrt{10} + 3\\sqrt{6}$"
  ],
  correct: 3,
  solution: "$A(0;0;0)$, $C(6;6;0)$, $C_1(6;6;6)$. წერტილები: $P(0;3;0)$, $Q(6;6;3)$, $O_1(3;3;6)$. სიბრტყე: $z = 2x - 3y + 9$.<br><br>კვეთის წვეროები: $P(0;3;0)$, $R(4{,}5;6;0)$ ($DC$-ზე), $Q(6;6;3)$, $T(6;5;6)$ ($B_1C_1$-ზე), $U(0;1;6)$ ($A_1D_1$-ზე) — ხუთკუთხედი.<br><br>$PR = \\dfrac{3\\sqrt{13}}{2}$, $RQ = \\dfrac{3\\sqrt{5}}{2}$, $QT = \\sqrt{10}$, $TU = \\sqrt{52}$, $UP = \\sqrt{40}$.<br><br><strong>პასუხი:</strong> დ) $\\sqrt{52} + \\sqrt{10} + \\sqrt{40} + \\frac{3\\sqrt{5}}{2} + \\frac{3\\sqrt{13}}{2}$.",
  tags: [],
  area: "prob-stats",
  topics: ["combinatorics","prism","cross-sections"],
  grade: 10,
  difficulty: 3,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},
// 21
{
  question: "რამდენ განსხვავებულ მნიშვნელობას მიიღებს $\\sin x + \\sin y$ გამოსახულება, თუ სრულდება $(\\sin^4 x + 1)(\\sin^4 y + 1) = 4\\sin^2 x \\sin^2 y$ ტოლობა.",
  options: ["$1$", "$5$", "$2$", "$6$", "$4$", "$3$"],
  correct: 5,
  solution: "$\\sin^4 x + 1 \\ge 2\\sin^2 x$ და $\\sin^4 y + 1 \\ge 2\\sin^2 y$, ამიტომ მარცხენა მხარე $\\ge 4\\sin^2 x\\sin^2 y$; ტოლობა მხოლოდ $\\sin^2 x = \\sin^2 y = 1$-ზე.<br><br>$\\sin x, \\sin y \\in \\{-1; 1\\}$, ჯამი: $-2$, $0$ ან $2$ — $3$ მნიშვნელობა.<br><br><strong>პასუხი:</strong> ვ) $3$.",
  tags: [],
  area: "algebra",
  topics: ["product-sum"],
  grade: 10,
  difficulty: 3,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

// 22
{
  question: "რიცხვით ღერძზე მოძრავი წერტილის კოორდინატი დროის $t$ მომენტში გამოითვლება ფორმულით $3\\sin\\left(\\frac{\\pi}{4}t\\right)$. რა მანძილს გაივლის ეს წერტილი დროის $[2;\\ 8]$ შუალედში?",
  options: ["$9$", "$6$", "$3$", "$3\\sqrt{2}$", "$6\\sqrt{2}$", "შეუძლებელია დადგენა"],
  correct: 0,
  solution: "$x(2) = 3$ (მაქსიმუმი), $x(6) = 3\\sin\\dfrac{3\\pi}{2} = -3$ (მინიმუმი), $x(8) = 0$. $[2; 6]$-ზე წერტილი მონოტონურად მოძრაობს $3$-დან $-3$-მდე, $[6; 8]$-ზე — $-3$-დან $0$-მდე.<br><br>გავლილი მანძილი: $6 + 3 = 9$.<br><br><strong>პასუხი:</strong> ა) $9$.",
  tags: [],
  area: "algebra",
  topics: ["trig-identities"],
  grade: 10,
  difficulty: 3,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

// 23
{
  question: "რამდენი ამონახსნი აქვს $2\\sin^2 x - 2 = 4\\sin x + \\frac{4}{\\sin^2 x}$ განტოლებას $[-2;\\ 12]$ შუალედში?",
  options: ["$1$", "$2$", "$3$", "$4$", "$5$", "არცერთი"],
  correct: 2,
  solution: "$s = \\sin x \\ne 0$. მარცხენა მხარე $2s^2 - 2 \\le 0$. $s > 0$-ზე მარჯვენა დადებითია — ამონახსნი არ არის. $s < 0$-ზე $4s \\ge -4$ და $\\dfrac{4}{s^2} \\ge 4$, ამიტომ მარჯვენა $\\ge 0$; ტოლობა მხოლოდ $s = -1$-ზე, სადაც მარცხენაც $0$-ია.<br><br>$\\sin x = -1$: $x = -\\dfrac{\\pi}{2} + 2\\pi k$. $[-2; 12]$-ში: $-\\dfrac{\\pi}{2}, \\dfrac{3\\pi}{2}, \\dfrac{7\\pi}{2}$ — სამი.<br><br><strong>პასუხი:</strong> გ) $3$.",
  tags: [],
  area: "algebra",
  topics: ["trig-eq"],
  grade: 10,
  difficulty: 3,
  type: ["solve"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

// 24
{
  question: "სამკუთხა პირამიდის ზედაპირის ფართობია $S$. იპოვეთ იმ პირამიდის ზედაპირის ფართობი, რომლის წვეროები მოცემული პირამიდის წახნაგების მედიანების გადაკვეთის წერტილებია.",
  options: [
    "$\\frac{S}{2}$", 
    "$\\frac{S}{3}$", 
    "$\\frac{2S}{3}$", 
    "$\\frac{S}{9}$", 
    "$\\frac{S}{6}$", 
    "შეუძლებელია დადგენა"
  ],
  correct: 3,
  solution: "წახნაგების მედიანების გადაკვეთის წერტილები მიიღება პირამიდის ჰომოთეტიით, კოეფიციენტით $-\\dfrac{1}{3}$, მისი მედიანების გადაკვეთის წერტილის მიმართ (წახნაგის ცენტრი მოპირდაპირე წვეროს „უპასუხებს“).<br><br>ზედაპირის ფართობი მცირდება $9$-ჯერ: $\\dfrac{S}{9}$.<br><br><strong>პასუხი:</strong> დ) $\\frac{S}{9}$.",
  tags: [],
  area: "solid",
  topics: ["pyramid","notable-points"],
  grade: 10,
  difficulty: 3,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

// 25
{
  question: "შემდეგი სამი დებულებიდან რომელი შეიძლება იყოს ჭეშმარიტი?\n$A)$ პირამიდის წიბოების, წახნაგების და წვეროების რაოდენობა არითმეტიკულ პროგრესიას ადგენენ\n$B)$ პირამიდის წვეროებისა და წიბოების რაოდენობის ჯამი $10$-ით მეტია წახნაგების რაოდენობაზე\n$C)$ სამკუთხა პირამიდაში ყოველი წახნაგის პერიმეტრი მეტია დანარჩენი სამი წიბოს სიგრძეთა ჯამზე.",
  options: [
    "მხოლოდ $A$",
    "მხოლოდ $B$",
    "მხოლოდ $C$",
    "მხოლოდ $A$ და $C$",
    "მხოლოდ $A$ და $B$",
    "მხოლოდ $B$ და $C$"
  ],
  correct: 1,
  solution: "$n$-კუთხა პირამიდა: წიბოები $2n$, წახნაგები $n + 1$, წვეროები $n + 1$.<br>A) $2n, n + 1, n + 1$ პროგრესიაა მხოლოდ $2n = n + 1$-ზე, $n = 1$ — შეუძლებელია.<br>B) $(n + 1) + 2n = (n + 1) + 10$, $n = 5$ — შესაძლებელია (ხუთკუთხა პირამიდა).<br>C) ოთხივე წახნაგის პერიმეტრების ჯამი $2S$-ია ($S$ — წიბოების ჯამი), ხოლო პირობით თითო $\\dfrac{S}{2}$-ზე მეტი უნდა იყოს — ჯამი $2S$-ზე მეტი გამოვიდოდა. შეუძლებელია.<br><br><strong>პასუხი:</strong> ბ) მხოლოდ $B$.",
  tags: [],
  area: "algebra",
  topics: ["arithmetic-prog","pyramid"],
  grade: 10,
  difficulty: 3,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
}
]