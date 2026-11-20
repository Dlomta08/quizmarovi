quizData = [
  // 1
  {
    question: "იპოვეთ $f(x) = 4^x \\cdot 2^{1 + x^2}$ ფუნქციის მნიშვნელობათა სიმრავლე.",
    options: ["$[-1;\\ \\infty)$", "$[0;\\ \\infty)$", "$[1;\\ \\infty)$", "$[2;\\ \\infty)$", "$[3;\\ \\infty)$", "$(-\\infty;\\ \\infty)$"],
    correct: 2,
    tags: [],
    solution: "$f(x) = 2^{2x} \\cdot 2^{1 + x^2} = 2^{x^2 + 2x + 1} = 2^{(x + 1)^2}$. $(x + 1)^2 \\in [0;\\ +\\infty)$, ამიტომ $f(x) \\in [1;\\ +\\infty)$.<br><br><strong>პასუხი:</strong> გ) $[1;\\ \\infty)$.",
    area: "algebra",
    topics: ["real-exponent","max-min"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 2
  {
    question: "იპოვეთ $\\log_{0{,}5}(2x + 9) \\le \\log_{0{,}5}(7 - 2x)$ უტოლობის უმცირესი მთელი ამონახსნი.",
    options: ["$-4$", "$-3$", "$-1$", "$0$", "$1$", "$3$"],
    correct: 3,
    tags: [],
    solution: "ფუძე $0{,}5 < 1$, ამიტომ უტოლობის ნიშანი იცვლება: $2x + 9 \\ge 7 - 2x > 0$. $x \\ge -\\dfrac{1}{2}$ და $x < 3{,}5$.<br><br>უმცირესი მთელი: $0$.<br><br><strong>პასუხი:</strong> დ) $0$.",
    area: "algebra",
    topics: ["log-ineq"],
    grade: 11,
    difficulty: 1,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 3
  {
    question: "ამოხსენით $\\left(2 - \\sqrt{3}\\right)^x < \\left(2 + \\sqrt{3}\\right)^2$ უტოლობა.",
    options: ["$(1;\\ \\infty)$", "$(-2;\\ \\infty)$", "$(-1;\\ \\infty)$", "$(-\\infty;\\ 1)$", "$(-\\infty;\\ 2)$", "$(-\\infty;\\ 3)$"],
    correct: 1,
    tags: [],
    solution: "$2 - \\sqrt{3} = (2 + \\sqrt{3})^{-1}$: $(2 + \\sqrt{3})^{-x} < (2 + \\sqrt{3})^2$. ფუძე $> 1$: $-x < 2$, $x > -2$.<br><br><strong>პასუხი:</strong> ბ) $(-2;\\ \\infty)$.",
    area: "algebra",
    topics: ["exp-ineq"],
    grade: 11,
    difficulty: 1,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 4
  {
    question: "იპოვეთ წესიერი ოთხკუთხა წაკვეთილი პირამიდის მოცულობა, თუ მისი დიაგონალი $9$-ის ტოლია, ხოლო ფუძეების გვერდებია $5$ და $7$.",
    options: ["$64\\sqrt{5}$", "$96\\sqrt{3}$", "$96$", "$109$", "$123$", "$156$"],
    correct: 3,
    tags: [],
    solution: "დიაგონალური კვეთა — ტოლფერდა ტრაპეცია $7\\sqrt{2}$ და $5\\sqrt{2}$ ფუძეებით. პირამიდის დიაგონალის გეგმილი: $\\dfrac{7\\sqrt{2} + 5\\sqrt{2}}{2} = 6\\sqrt{2}$, $h = \\sqrt{81 - 72} = 3$.<br><br>$V = \\dfrac{h}{3}(S_1 + S_2 + \\sqrt{S_1S_2}) = 1 \\cdot (49 + 25 + 35) = 109$.<br><br><strong>პასუხი:</strong> დ) $109$.",
    area: "solid",
    topics: ["pyramid","volume-surface"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 5
  {
    question: "ხის ცილინდრისაგან, რომლის სიმაღლე $20$-ია, ხოლო ფუძის რადიუსი $9$, გამოთალეს მაქსიმალური მოცულობის მქონე ბირთვი. ცილინდრის მოცულობის რა ნაწილს შეადგენს გამოთლილი ბირთვი?",
    options: ["$\\dfrac{1}{8}$", "$\\dfrac{7}{8}$", "$\\dfrac{2}{9}$", "$\\dfrac{2}{7}$", "$\\dfrac{3}{5}$", "$\\dfrac{5}{8}$"],
    correct: 4,
    tags: [],
    solution: "ბირთვის დიამეტრი ცილინდრის დიამეტრს ($18$) და სიმაღლეს ($20$) არ უნდა აღემატებოდეს: $r = 9$.<br><br>$\\dfrac{V_{\\text{ბირთ}}}{V_{\\text{ცილ}}} = \\dfrac{\\frac{4}{3}\\pi \\cdot 729}{\\pi \\cdot 81 \\cdot 20} = \\dfrac{972}{1620} = \\dfrac{3}{5}$.<br><br><strong>პასუხი:</strong> ე) $\\dfrac{3}{5}$.",
    area: "solid",
    topics: ["cylinder","sphere","volume-surface"],
    grade: 11,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 6
  {
    question: "ამოხსენით $\\sqrt{x + 7} > \\log_3 5 \\cdot \\log_5 27$ უტოლობა.",
    options: ["$(1;\\ \\infty)$", "$(2;\\ \\infty)$", "$(3;\\ \\infty)$", "$(\\log_3 5;\\ \\infty)$", "$(-1;\\ \\infty)$", "$(-\\log_3 5;\\ \\infty)$"],
    correct: 1,
    tags: [],
    solution: "$\\log_3 5 \\cdot \\log_5 27 = \\log_3 27 = 3$. $\\sqrt{x + 7} > 3 \\Leftrightarrow x + 7 > 9 \\Leftrightarrow x > 2$.<br><br><strong>პასუხი:</strong> ბ) $(2;\\ \\infty)$.",
    area: "algebra",
    topics: ["logarithms","irrational-eq"],
    grade: 11,
    difficulty: 1,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 7
  {
    question: "იპოვეთ უდიდესი მთელი რიცხვი, რომელიც აკმაყოფილებს $2^{2x} - 3 \\cdot 2^x + 2 \\le 0$ უტოლობას.",
    options: ["$2$", "$8$", "$0$", "$1$", "$6$", "$3$"],
    correct: 3,
    tags: [],
    solution: "$t = 2^x$: $t^2 - 3t + 2 \\le 0 \\Leftrightarrow 1 \\le t \\le 2 \\Leftrightarrow 0 \\le x \\le 1$. უდიდესი მთელი: $1$.<br><br><strong>პასუხი:</strong> დ) $1$.",
    area: "algebra",
    topics: ["exp-ineq"],
    grade: 11,
    difficulty: 1,
    type: ["solve"],
    method: ["substitution"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 8 (the answer sheet marks all six options as correct)
  {
    question: "იპოვეთ $(\\log_7 2)^{\\sqrt{x^2 - 1}} > (\\log_2 7)^{x - 1}$ უტოლობის ამონახსნთა სიმრავლე.",
    options: ["$(-\\infty;\\ 1)$", "$(-2;\\ \\infty)$", "$(0;\\ \\infty)$", "$(1;\\ \\infty)$", "$(2;\\ \\infty)$", "$(3;\\ \\infty)$"],
    correct: [0, 1, 2, 3, 4, 5],
    tags: [],
    solution: "<strong>ამ ამოცანაში ყველა პასუხი ჩაითვალა სწორად.</strong><br><br>$\\log_2 7 = (\\log_7 2)^{-1}$, ამიტომ უტოლობა: $(\\log_7 2)^{\\sqrt{x^2 - 1}} > (\\log_7 2)^{1 - x}$. ფუძე $(0;\\ 1)$-შია: $\\sqrt{x^2 - 1} < 1 - x$.<br><br>განსაზღვრის არე $|x| \\ge 1$, მარჯვენა მხარე დადებითი უნდა იყოს: $x < 1$, ე.ი. $x \\le -1$. კვადრატში: $x^2 - 1 < 1 - 2x + x^2 \\Leftrightarrow x < 1$ ✓.<br><br><strong>პასუხი:</strong> $(-\\infty;\\ -1]$ — ვარიანტებში არ არის, ამიტომ ჩაითვალა ნებისმიერი პასუხი.",
    area: "algebra",
    topics: ["exp-ineq"],
    grade: 11,
    difficulty: 2,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 9
  {
    question: "იპოვეთ სფეროს რადიუსი, თუ მასზე შემოხაზულია წაკვეთილი კონუსი, რომლის ფუძეების რადიუსებია $4$ და $9$.",
    options: ["$3$", "$5$", "$6$", "$4$", "$7$", "$8$"],
    correct: 2,
    tags: [],
    solution: "სფეროზე შემოხაზული წაკვეთილი კონუსის ღერძული კვეთა — ტრაპეცია ჩახაზული წრით. ფერდი ფუძეების ნახევრების ჯამია: $4 + 9 = 13$; სიმაღლე $\\sqrt{13^2 - 5^2} = 12$.<br><br>სფეროს რადიუსი სიმაღლის ნახევარია: $6$ (იგივეა $\\sqrt{4 \\cdot 9}$).<br><br><strong>პასუხი:</strong> გ) $6$.",
    area: "solid",
    topics: ["cone","sphere"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 10
  {
    question: "რომბის დიაგონალებია $15$ და $20$. ბირთვი, რომლის მოცულობა $\\dfrac{4000\\pi}{3}$-ია, ამ რომბის ოთხივე გვერდს ეხება. იპოვეთ მანძილი ბირთვის ცენტრიდან ამ რომბის სიბრტყემდე.",
    options: ["$5$", "$8$", "$4$", "$6$", "$9$", "$10$"],
    correct: 1,
    tags: [],
    solution: "ბირთვის რადიუსი: $\\dfrac{4}{3}\\pi R^3 = \\dfrac{4000\\pi}{3}$, $R = 10$.<br><br>რომბის გვერდი $\\sqrt{7{,}5^2 + 10^2} = 12{,}5$, ფართობი $\\dfrac{15 \\cdot 20}{2} = 150$, სიმაღლე $12$, ჩახაზული წრის რადიუსი $r = 6$. სიბრტყე ბირთვს კვეთს სწორედ ამ წრეწირზე.<br><br>მანძილი: $\\sqrt{R^2 - r^2} = \\sqrt{100 - 36} = 8$.<br><br><strong>პასუხი:</strong> ბ) $8$.",
    area: "solid",
    topics: ["sphere"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 11
  {
    question: "ამოხსენით $\\begin{cases} 5^{x^2 + 5x} > 5^{30 - 2x} \\\\ \\log_5(x + 12) > 1 \\end{cases}$ უტოლობათა სისტემა.",
    options: ["$(-12;\\ \\infty)$", "$(-5;\\ \\infty)$", "$(-1;\\ \\infty)$", "$(3;\\ \\infty)$", "$(5;\\ \\infty)$", "$(10;\\ \\infty)$"],
    correct: 3,
    tags: [],
    solution: "$x^2 + 5x > 30 - 2x \\Leftrightarrow (x + 10)(x - 3) > 0$: $x < -10$ ან $x > 3$.<br>$\\log_5(x + 12) > 1 \\Leftrightarrow x + 12 > 5 \\Leftrightarrow x > -7$.<br><br>თანაკვეთა: $x > 3$.<br><br><strong>პასუხი:</strong> დ) $(3;\\ \\infty)$.",
    area: "algebra",
    topics: ["exp-ineq","log-ineq"],
    grade: 11,
    difficulty: 2,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 12
  {
    question: "ამოხსენით $\\log_3 \\sqrt[3]{3} \\cdot \\log_{\\sqrt[3]{3}}(x - 1) < 0$ უტოლობა.",
    options: ["$\\left(\\dfrac{2}{3};\\ \\infty\\right)$", "$(2;\\ 3)$", "$(1;\\ 2)$", "$(1;\\ \\infty)$", "$(2;\\ 4)$", "$\\left(1;\\ \\sqrt[3]{3}\\right)$"],
    correct: 2,
    tags: [],
    solution: "$\\log_3\\sqrt[3]{3} = \\dfrac{1}{3} > 0$, ამიტომ საჭიროა $\\log_{\\sqrt[3]{3}}(x - 1) < 0$. ფუძე $> 1$: $0 < x - 1 < 1$, $1 < x < 2$.<br><br><strong>პასუხი:</strong> გ) $(1;\\ 2)$.",
    area: "algebra",
    topics: ["log-ineq"],
    grade: 11,
    difficulty: 2,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 13
  {
    question: "თუ $y = a \\cdot 199^x + b$ ფუნქციის გრაფიკი $XOY$ საკოორდინატო სიბრტყის მხოლოდ I მეოთხედში <strong>არ</strong> გადის, მაშინ ჩამოთვლილთაგან რომელი შესრულდება?",
    options: ["$a > 0;\\ b > 0$", "$a > 0;\\ b < 0$", "$a < 0;\\ b > 0$", "$a < 0;\\ b < 0$", "$a \\ne 0;\\ b = 0$", "ჩამოთვლილთაგან არცერთი"],
    correct: 2,
    tags: [],
    solution: "გრაფიკი არ გადის მხოლოდ I მეოთხედში, ე.ი. გადის II, III და IV მეოთხედებში.<br><br>$a > 0$-ზე $x \\to +\\infty$-ზე $y \\to +\\infty$ — გადის I-ში. $a < 0$-ზე ფუნქცია კლებადია, $x \\to -\\infty$-ზე $y \\to b$. II მეოთხედში გავლისთვის საჭიროა $b > 0$ (ხოლო I-ის თავიდან ასაცილებლად $a + b \\le 0$).<br><br>აუცილებლად სრულდება: $a < 0$, $b > 0$.<br><br><strong>პასუხი:</strong> გ) $a < 0;\\ b > 0$.",
    area: "algebra",
    topics: ["function-props"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: ["graphical"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 14
  {
    question: "$MABC$ სამკუთხა პირამიდის $MA$, $MC$ და $MB$ წიბოებზე აღებულია შესაბამისად $E$, $F$ და $K$ წერტილები ისე, რომ $ME : EA = 1 : 2$, $MF : FC = 3 : 1$ და $MK = KB$. იპოვეთ $MKEF$ პირამიდის მოცულობის შეფარდება $MABC$ პირამიდის მოცულობასთან.",
    options: ["$\\dfrac{1}{8}$", "$\\dfrac{3}{5}$", "$\\dfrac{1}{9}$", "$\\dfrac{3}{7}$", "$\\dfrac{2}{7}$", "$\\dfrac{4}{9}$"],
    correct: 0,
    tags: [],
    solution: "საერთო $M$ წვეროს მქონე პირამიდებისთვის: $\\dfrac{V_{MKEF}}{V_{MABC}} = \\dfrac{ME}{MA} \\cdot \\dfrac{MF}{MC} \\cdot \\dfrac{MK}{MB} = \\dfrac{1}{3} \\cdot \\dfrac{3}{4} \\cdot \\dfrac{1}{2} = \\dfrac{1}{8}$.<br><br><strong>პასუხი:</strong> ა) $\\dfrac{1}{8}$.",
    area: "solid",
    topics: ["pyramid","volume-surface"],
    grade: 11,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 15
  {
    question: "ნახევარსფეროში ჩახაზულია კუბი ისე, რომ მისი ოთხი წვერო მდებარეობს ნახევარსფეროს ფუძის სიბრტყეზე, ხოლო დანარჩენი ოთხი წვერო კი ნახევარსფეროს ზედაპირზე. იპოვეთ ამ სფეროთი შემოსაზღვრული ბირთვის მოცულობა, თუ კუბის წიბო $4$-ის ტოლია.",
    options: ["$240\\sqrt{3}\\pi$", "$256\\sqrt{3}\\pi$", "$64\\sqrt{6}\\pi$", "$\\dfrac{64\\sqrt{6}\\pi}{3}$", "$\\dfrac{32\\sqrt{6}\\pi}{3}$", "$\\dfrac{64\\sqrt{3}\\pi}{5}$"],
    correct: 2,
    tags: [],
    solution: "ნახევარსფეროს ცენტრი კუბის ქვედა წახნაგის ცენტრია. ზედა წვეროდან მანძილი: $R^2 = \\left(2\\sqrt{2}\\right)^2 + 4^2 = 24$, $R = 2\\sqrt{6}$.<br><br>$V = \\dfrac{4}{3}\\pi R^3 = \\dfrac{4}{3}\\pi \\cdot 48\\sqrt{6} = 64\\sqrt{6}\\pi$.<br><br><strong>პასუხი:</strong> გ) $64\\sqrt{6}\\pi$.",
    area: "solid",
    topics: ["sphere","prism"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 16
  {
    question: "ვთქვათ, რომელიმე $a$-სთვის სრულდება $4^a - 3 \\cdot 49^a + 2 \\cdot 14^a > 0$ უტოლობა, მაშინ აუცილებლად...",
    options: ["$\\sqrt{a^{14}} = a^7$", "$4^a > 1$", "$\\sin a > 0$", "$\\cos a < 0$", "$|a| = -a$", "$a = -1$"],
    correct: 4,
    tags: [],
    solution: "გავყოთ $49^a$-ზე და აღვნიშნოთ $t = \\left(\\dfrac{2}{7}\\right)^a > 0$: $t^2 + 2t - 3 > 0 \\Leftrightarrow (t + 3)(t - 1) > 0 \\Leftrightarrow t > 1$, ე.ი. $a < 0$.<br><br>$a < 0$-სთვის აუცილებლად $|a| = -a$ (სხვა ვარიანტები ირღვევა: მაგ., $4^a < 1$, $\\sqrt{a^{14}} = -a^7$).<br><br><strong>პასუხი:</strong> ე) $|a| = -a$.",
    area: "algebra",
    topics: ["exp-ineq"],
    grade: 11,
    difficulty: 3,
    type: ["solve"],
    method: ["substitution"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 17
  {
    question: "მოცემული ოთხი $A = \\left\\{2;\\ \\dfrac{1}{5};\\ 5;\\ \\dfrac{1}{25};\\ 1\\right\\}$, $B = \\left\\{2;\\ 25;\\ 5;\\ \\dfrac{1}{25};\\ 1\\right\\}$, $C = \\left\\{25;\\ \\dfrac{1}{5};\\ 5;\\ \\dfrac{1}{25};\\ 1;\\ 125\\right\\}$, $D = \\left\\{4;\\ \\dfrac{1}{5};\\ 5;\\ \\dfrac{1}{25};\\ 3\\right\\}$ სიმრავლიდან რომლის ქვესიმრავლეა $x^{\\log_5 x} = \\dfrac{1}{625}$ განტოლების ამონახსნთა სიმრავლე?",
    options: ["მხოლოდ $A$", "მხოლოდ $B$", "მხოლოდ $A$, $C$", "მხოლოდ $A$, $B$", "$A$, $B$, $C$, $D$", "ჩამოთვლილთაგან არცერთის"],
    correct: 4,
    tags: [],
    solution: "გავალოგარითმოთ $5$-ის ფუძით: $(\\log_5 x)^2 = \\log_5\\dfrac{1}{625} = -4$ — ამონახსნი არ აქვს.<br><br>ამონახსნთა სიმრავლე ცარიელია, ხოლო ცარიელი სიმრავლე ყველა სიმრავლის ქვესიმრავლეა.<br><br><strong>პასუხი:</strong> ე) $A, B, C, D$.",
    area: "algebra",
    topics: ["log-eq"],
    grade: 11,
    difficulty: 3,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 18
  {
    question: "ამოხსენით $\\log_a(2x^2 - 3x + 1) < \\log_a(x - 1)$ უტოლობა, თუ ცნობილია, რომ ის სამართლიანია, როცა $x = 2$.",
    options: ["$\\left(\\dfrac{2}{3};\\ \\infty\\right)$", "$(1;\\ \\infty)$", "$(2;\\ \\infty)$", "$(1;\\ 2)$", "$\\left(\\dfrac{2}{3};\\ 3\\right)$", "$(2;\\ 3)$"],
    correct: 1,
    tags: [],
    solution: "$x = 2$-ზე: $\\log_a 3 < \\log_a 1 = 0$, ამიტომ $0 < a < 1$. მაშინ: $2x^2 - 3x + 1 > x - 1 > 0$.<br><br>$x > 1$ და $2x^2 - 4x + 2 = 2(x - 1)^2 > 0$ — სრულდება ყველა $x > 1$-ისთვის.<br><br><strong>პასუხი:</strong> ბ) $(1;\\ \\infty)$.",
    area: "algebra",
    topics: ["log-ineq"],
    grade: 11,
    difficulty: 3,
    type: ["solve"],
    method: ["parameter"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 19
  {
    question: "ბირთვის ზედაპირზე მოცემულია ორი წრეწირი, რომელთა რადიუსები $5$-ის ტოლია, ხოლო მათი საერთო ქორდის სიგრძე $2\\sqrt{2}$-ია. იპოვეთ ბირთვის მოცულობა, თუ ცნობილია, რომ წრეწირების სიბრტყეები ურთიერთმართობულია.",
    options: ["$64\\sqrt{6}\\pi$", "$256\\sqrt{3}\\pi$", "$240\\sqrt{3}\\pi$", "$\\dfrac{64\\sqrt{6}\\pi}{3}$", "$\\dfrac{64\\sqrt{2}\\pi}{3}$", "$\\dfrac{64\\sqrt{3}\\pi}{5}$"],
    correct: 1,
    tags: [],
    solution: "წრეწირების ცენტრები $O_1, O_2$, ქორდის შუაწერტილი $H$: $O_1H = O_2H = \\sqrt{25 - 2} = \\sqrt{23}$. სიბრტყეები ურთიერთმართობულია, $OO_1HO_2$ მართკუთხედია ($O$ — ბირთვის ცენტრი): $OH^2 = 23 + 23 = 46$.<br><br>$R^2 = OH^2 + (\\sqrt{2})^2 = 48$, $R = 4\\sqrt{3}$. $V = \\dfrac{4}{3}\\pi(4\\sqrt{3})^3 = 256\\sqrt{3}\\pi$.<br><br><strong>პასუხი:</strong> ბ) $256\\sqrt{3}\\pi$.",
    area: "solid",
    topics: ["sphere"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 20
  {
    question: "ცილინდრის ქვედა ფუძის ცენტრზე გამავალი სიბრტყე დახრილია ამ ფუძისადმი $\\alpha$ კუთხით და ზედა ფუძის გადაკვეთისას მიიღება $b$ სიგრძის ქორდა, რომელიც $\\beta$ სიდიდის რკალს ჭიმავს. იპოვეთ ცილინდრის მოცულობა, თუ $\\operatorname{tg}\\alpha = 3\\sqrt{3}$, $b = 4$, $\\operatorname{ctg}\\dfrac{\\beta}{2} = 2$.",
    options: ["$240\\sqrt{3}\\pi$", "$\\dfrac{64\\sqrt{6}\\pi}{3}$", "$256\\sqrt{3}\\pi$", "$\\dfrac{32\\sqrt{6}\\pi}{3}$", "$64\\sqrt{5}\\pi$", "$96\\sqrt{3}\\pi$"],
    correct: 0,
    tags: [],
    solution: "ქორდის ნახევარი $2$, ზედა ფუძის ცენტრიდან ქორდამდე მანძილი $d = 2\\operatorname{ctg}\\dfrac{\\beta}{2} = 4$, რადიუსი $r = \\sqrt{4 + 16} = 2\\sqrt{5}$.<br><br>სიბრტყე ქვედა ცენტრზე გადის: $\\operatorname{tg}\\alpha = \\dfrac{h}{d}$, $h = 4 \\cdot 3\\sqrt{3} = 12\\sqrt{3}$.<br><br>$V = \\pi r^2h = \\pi \\cdot 20 \\cdot 12\\sqrt{3} = 240\\sqrt{3}\\pi$.<br><br><strong>პასუხი:</strong> ა) $240\\sqrt{3}\\pi$.",
    area: "solid",
    topics: ["cylinder","volume-surface"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 21
  {
    question: "ჩამოთვლილთაგან $x$-ის რომელი მნიშვნელობისთვის იქნება $\\log_3 \\log_4 \\dfrac{4x - 1}{x + 1} - \\log_{\\frac{1}{3}} \\log_{\\frac{1}{4}} \\dfrac{x + 1}{4x - 1} < 0$ უტოლობა ჭეშმარიტი?",
    options: ["$\\dfrac{7}{25}$", "$\\dfrac{1}{8}$", "$\\dfrac{1}{5}$", "$\\dfrac{3}{5}$", "$\\dfrac{5}{8}$", "$\\dfrac{7}{8}$"],
    correct: 5,
    tags: [],
    solution: "$L = \\log_4\\dfrac{4x - 1}{x + 1}$. $\\log_{\\frac{1}{4}}\\dfrac{x + 1}{4x - 1} = L$ და $\\log_{\\frac{1}{3}}L = -\\log_3 L$, ამიტომ უტოლობა: $2\\log_3 L < 0 \\Leftrightarrow 0 < L < 1 \\Leftrightarrow 1 < \\dfrac{4x - 1}{x + 1} < 4$.<br><br>$\\dfrac{4x - 1}{x + 1} < 4 \\Leftrightarrow x > -1$; $\\dfrac{4x - 1}{x + 1} > 1 \\Leftrightarrow \\dfrac{3x - 2}{x + 1} > 0$. ერთად: $x > \\dfrac{2}{3}$.<br><br>ვარიანტებიდან $\\dfrac{2}{3}$-ზე მეტია მხოლოდ $\\dfrac{7}{8}$.<br><br><strong>პასუხი:</strong> ვ) $\\dfrac{7}{8}$.",
    area: "algebra",
    topics: ["log-ineq"],
    grade: 11,
    difficulty: 3,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 22
  {
    question: "ჩამოთვლილთაგან რომელი შუალედის ყოველი მნიშვნელობის მიღება შეუძლია $a$ პარამეტრს, რომ $x^2 - a \\le 0$ უტოლობის ყველა ამონახსნი აკმაყოფილებდეს $(a - 3x)\\sqrt{x + 5} \\ge 0$ უტოლობას?",
    options: ["$(-5;\\ 7)$", "$(-9;\\ 1)$", "$(11;\\ 21)$", "$(7;\\ 15)$", "$(14;\\ 30)$", "$(17;\\ 35)$"],
    correct: 2,
    tags: [],
    solution: "$a \\ge 0$-ზე $x^2 \\le a$-ს ამონახსნია $[-\\sqrt{a};\\ \\sqrt{a}]$. ყველა უნდა აკმაყოფილებდეს $(a - 3x)\\sqrt{x + 5} \\ge 0$-ს:<br>• განსაზღვრის არე: $-\\sqrt{a} \\ge -5$, $a \\le 25$;<br>• $\\sqrt{x + 5} > 0$-ზე $x \\le \\dfrac{a}{3}$: $\\sqrt{a} \\le \\dfrac{a}{3}$, $a \\ge 9$ (ან $a = 0$).<br><br>$a \\in [9;\\ 25]$ (და $a = 0$). შუალედი, რომლის ყველა წერტილი გამოდგება: $(11;\\ 21)$.<br><br><strong>პასუხი:</strong> გ) $(11;\\ 21)$.",
    area: "algebra",
    topics: ["irrational-eq","quadratic-ineq"],
    grade: 11,
    difficulty: 3,
    type: ["solve"],
    method: ["parameter"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 23
  {
    question: "ჩამოთვლილთაგან რომელი შუალედის ყოველი მნიშვნელობის მიღება შეუძლია $a$ პარამეტრს, რომ $25^x - a \\cdot 5^x + 3 - a \\le 0$ უტოლობას არ ჰქონდეს ამონახსნი?",
    options: ["$(-5;\\ 7)$", "$(-9;\\ 1)$", "$(-11;\\ 4)$", "$(3;\\ 12)$", "$(11;\\ 21)$", "$(14;\\ 30)$"],
    correct: 1,
    tags: [],
    solution: "$t = 5^x > 0$: საჭიროა $t^2 - at + 3 - a > 0$ ყველა $t > 0$-სთვის, ანუ $a < \\dfrac{t^2 + 3}{t + 1}$.<br><br>$u = t + 1 > 1$: $\\dfrac{t^2 + 3}{t + 1} = u + \\dfrac{4}{u} - 2 \\ge 2$ (ტოლობა $u = 2$-ზე). ამიტომ $a < 2$.<br><br>შუალედი, რომელიც მთლიანად $(-\\infty;\\ 2)$-შია: $(-9;\\ 1)$.<br><br><strong>პასუხი:</strong> ბ) $(-9;\\ 1)$.",
    area: "algebra",
    topics: ["exp-ineq"],
    grade: 11,
    difficulty: 3,
    type: ["solve"],
    method: ["parameter","substitution"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 24
  {
    question: "კონუსში ჩახაზულია ბირთვი, რომლის მოცულობა $3$-ჯერ ნაკლებია კონუსის ფუძის ფართობისა და ბირთვის რადიუსის ნამრავლზე. იპოვეთ კონუსის ღერძულ კვეთაში წვეროსთან მდებარე კუთხის კოსინუსი.",
    options: ["$\\dfrac{1}{3}$", "$\\dfrac{2}{3}$", "$\\dfrac{5}{11}$", "$\\dfrac{3}{5}$", "$\\dfrac{7}{25}$", "$\\dfrac{11}{36}$"],
    correct: 4,
    tags: [],
    solution: "$\\dfrac{4}{3}\\pi r^3 = \\dfrac{1}{3}\\pi R^2 \\cdot r$, $R = 2r$. ღერძულ კვეთაში ფუძესთან კუთხე $\\beta$: $r = R\\operatorname{tg}\\dfrac{\\beta}{2}$, $\\operatorname{tg}\\dfrac{\\beta}{2} = \\dfrac{1}{2}$, $\\operatorname{tg}\\beta = \\dfrac{4}{3}$.<br><br>წვეროსთან კუთხე $180^\\circ - 2\\beta$: $\\cos(180^\\circ - 2\\beta) = -\\cos 2\\beta = -\\dfrac{1 - \\operatorname{tg}^2\\beta}{1 + \\operatorname{tg}^2\\beta} = \\dfrac{7}{25}$.<br><br><strong>პასუხი:</strong> ე) $\\dfrac{7}{25}$.",
    area: "solid",
    topics: ["cone","sphere"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 25
  {
    question: "პირამიდას ფუძედ აქვს წესიერი სამკუთხედი, რომლის გვერდია $12$, ერთ-ერთი გვერდითი წიბო კი ფუძის პერპენდიკულარულია. იპოვეთ პირამიდის მოცულობა, თუ მასზე შემოხაზული სფეროს რადიუსია $8$.",
    options: ["$256\\sqrt{3}$", "$64\\sqrt{6}$", "$96\\sqrt{3}$", "$\\dfrac{64\\sqrt{6}}{3}$", "$\\dfrac{32\\sqrt{6}}{3}$", "$\\dfrac{64\\sqrt{3}}{5}$"],
    correct: 2,
    tags: [],
    solution: "ფუძეზე შემოხაზული წრეწირის რადიუსი $\\dfrac{12}{\\sqrt{3}} = 4\\sqrt{3}$. ფუძის მართობული წიბოს ($h$) შემთხვევაში $R^2 = (4\\sqrt{3})^2 + \\left(\\dfrac{h}{2}\\right)^2$: $64 = 48 + \\dfrac{h^2}{4}$, $h = 8$.<br><br>$V = \\dfrac{1}{3} \\cdot \\dfrac{\\sqrt{3}}{4} \\cdot 144 \\cdot 8 = 96\\sqrt{3}$.<br><br><strong>პასუხი:</strong> გ) $96\\sqrt{3}$.",
    area: "solid",
    topics: ["pyramid","sphere"],
    grade: 11,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];
