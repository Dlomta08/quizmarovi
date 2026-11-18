quizData = [
  // 1
  {
    question: "<strong>(3 ქულა)</strong> $\\dfrac{\\cos(2\\pi x)}{1 + \\operatorname{tg}(\\pi x)} = 0$ განტოლების ფესვებს შორის იპოვეთ ისეთი $x_0$ ფესვი, რომლისთვისაც $\\left|x_0 - \\sqrt{13}\\right|$ გამოსახულების მნიშვნელობა მინიმალურია.",
    options: [],
    tags: [],
    solution: "$\\cos 2\\pi x = 0 \\Rightarrow x = \\dfrac{1}{4} + \\dfrac{k}{2}$. საჭიროა $\\operatorname{tg}\\pi x \\ne -1$ და $\\operatorname{tg}\\pi x$ განსაზღვრული.<br><br>$x = \\dfrac{1}{4} + m$: $\\operatorname{tg}\\left(\\dfrac{\\pi}{4} + \\pi m\\right) = 1$ ✓; $x = \\dfrac{3}{4} + m$: $\\operatorname{tg}\\left(\\dfrac{3\\pi}{4} + \\pi m\\right) = -1$ ✗. ფესვები: $x = \\dfrac{1}{4} + m$, $m \\in \\mathbb{Z}$.<br><br>$\\sqrt{13} \\approx 3{,}606$: უახლოესი ფესვებია $3{,}25$ (მანძილი $\\approx 0{,}356$) და $4{,}25$ ($\\approx 0{,}644$).<br><br><strong>პასუხი:</strong> $x_0 = \\dfrac{13}{4}$."
  },

  // 2
  {
    question: "<strong>(3 ქულა)</strong> ამოხსენით განტოლებათა სისტემა: $\\begin{cases} \\sqrt{\\sin x} \\cdot \\cos y = 0 \\\\ 2\\sin^2 x - \\cos 2y - 2 = 0 \\end{cases}$",
    options: [],
    tags: [],
    solution: "მეორე განტოლება: $2\\sin^2 x - 2 = \\cos 2y$, ანუ $\\cos 2y = -2\\cos^2 x$.<br><br>1) $\\sin x = 0$: $\\cos^2 x = 1$, $\\cos 2y = -2$ — შეუძლებელია.<br>2) $\\cos y = 0$ (და $\\sin x \\ge 0$): $\\cos 2y = -1$, $\\cos^2 x = \\dfrac{1}{2}$; $\\sin x \\ge 0$ პირობით $x = \\dfrac{\\pi}{4} + 2\\pi n$ ან $x = \\dfrac{3\\pi}{4} + 2\\pi n$.<br><br><strong>პასუხი:</strong> $x = (-1)^n\\dfrac{\\pi}{4} + \\pi n$, $y = \\dfrac{\\pi}{2} + \\pi k$, $n, k \\in \\mathbb{Z}$."
  },

  // 3
  {
    question: "<strong>(3 ქულა)</strong> წესიერ სამკუთხა $SABC$ პირამიდაში ($ABC$ პირამიდის ფუძეა) გავლებულია კვეთა, რომელიც გადის პირამიდის $S$ წვეროდან დაშვებული სიმაღლის ფუძეზე და პარალელურია $SA$ და $BC$ წიბოების. იპოვეთ ამ კვეთის ფართობი, თუ პირამიდის ფუძის გვერდის სიგრძეა $12$ სმ, ხოლო გვერდითი წიბოს სიგრძეა $15$ სმ.",
    options: [],
    tags: [],
    solution: "სიმაღლის ფუძე $O$ — $ABC$-ს ცენტრი, $A$-დან გამოსულ მედიანას $2 : 1$ ყოფს. $O$-ზე $BC$-ს პარალელური წრფე $AB$ და $AC$-ს კვეთს $P$ და $Q$ წერტილებში: $\\dfrac{AP}{AB} = \\dfrac{2}{3}$, $PQ = 8$.<br><br>$SAB$-ში $P$-ზე $SA$-ს პარალელური წრფე $SB$-ს კვეთს $R$-ში: $\\dfrac{PR}{SA} = \\dfrac{BP}{BA} = \\dfrac{1}{3}$, $PR = 5$; ანალოგიურად $QT = 5$, $RT \\parallel BC$, $RT = 8$.<br><br>კვეთა $PQTR$ პარალელოგრამია $8$ და $5$ გვერდებით. წესიერ პირამიდაში $SA \\perp BC$, ამიტომ ის მართკუთხედია: $S = 40$ სმ².<br><br><strong>პასუხი:</strong> $40$ სმ²."
  },

  // 4
  {
    question: "<strong>(4 ქულა)</strong> წესიერი ოთხკუთხა პირამიდის ფუძის ცენტრიდან გვერდით წახნაგამდე და გვერდით წიბომდე მანძილებია შესაბამისად $\\sqrt{14}$ და $4$. იპოვეთ პირამიდის სრული ზედაპირის ფართობის შეფარდება ფუძის ფართობთან.",
    options: [],
    tags: [],
    solution: "ფუძის გვერდი $a$, $m = \\dfrac{a}{2}$ (ცენტრიდან გვერდამდე), $d = \\dfrac{a\\sqrt{2}}{2}$ (ცენტრიდან წვერომდე), სიმაღლე $h$. მართკუთხა სამკუთხედებში ჰიპოტენუზაზე დაშვებული სიმაღლეებით:<br>$\\dfrac{1}{14} = \\dfrac{1}{m^2} + \\dfrac{1}{h^2}$, $\\dfrac{1}{16} = \\dfrac{1}{d^2} + \\dfrac{1}{h^2} = \\dfrac{1}{2m^2} + \\dfrac{1}{h^2}$.<br><br>გამოვაკლოთ: $\\dfrac{1}{2m^2} = \\dfrac{1}{14} - \\dfrac{1}{16} = \\dfrac{1}{112}$, $m^2 = 56$; $\\dfrac{1}{h^2} = \\dfrac{1}{14} - \\dfrac{1}{56} = \\dfrac{3}{56}$.<br><br>ფუძესთან ორწახნაგა კუთხე: $\\cos\\varphi = \\dfrac{m}{\\sqrt{m^2 + h^2}} = \\sqrt{\\dfrac{56}{56 + 56/3}} = \\dfrac{\\sqrt{3}}{2}$. $S_{\\text{გვ}} = \\dfrac{S_{\\text{ფ}}}{\\cos\\varphi}$, ამიტომ $\\dfrac{S_{\\text{სრ}}}{S_{\\text{ფ}}} = 1 + \\dfrac{2}{\\sqrt{3}} = \\dfrac{3 + 2\\sqrt{3}}{3}$.<br><br><strong>პასუხი:</strong> $\\dfrac{3 + 2\\sqrt{3}}{3}$."
  },

  // 5
  {
    question: "<strong>(4 ქულა)</strong> წესიერი წაკვეთილი ოთხკუთხა პირამიდის დიაგონალური კვეთის ფართობი გვერდითი წახნაგის ფართობის ტოლია. იპოვეთ დიდ ფუძესთან მდებარე ორწახნაგა კუთხე.",
    options: [],
    tags: [],
    solution: "ფუძეები $a$ და $b$, სიმაღლე $h$, გვერდითი წახნაგის სიმაღლე (აპოთემა) $l$.<br><br>დიაგონალური კვეთა — ტრაპეცია $a\\sqrt{2}$ და $b\\sqrt{2}$ ფუძეებით, სიმაღლით $h$: $S = \\dfrac{(a + b)\\sqrt{2}}{2}h$. გვერდითი წახნაგი: $\\dfrac{a + b}{2}l$.<br><br>ტოლობიდან $\\sqrt{2}h = l$, ე.ი. $\\sin\\varphi = \\dfrac{h}{l} = \\dfrac{1}{\\sqrt{2}}$, $\\varphi = 45^\\circ$.<br><br><strong>პასუხი:</strong> $45^\\circ$."
  },

  // 6
  {
    question: "<strong>(4 ქულა)</strong> ამოხსენით განტოლება: $\\sin 5x + \\sin x + 2\\sin^2 x = \\sqrt{3} \\cdot \\operatorname{tg}\\left(\\arcsin\\left(\\dfrac{\\sqrt{3}}{2}\\right) - \\operatorname{arctg}\\left(\\dfrac{1}{\\sqrt{3}}\\right)\\right)$.",
    options: [],
    tags: [],
    solution: "მარჯვენა მხარე: $\\arcsin\\dfrac{\\sqrt{3}}{2} = \\dfrac{\\pi}{3}$, $\\operatorname{arctg}\\dfrac{1}{\\sqrt{3}} = \\dfrac{\\pi}{6}$, $\\sqrt{3}\\operatorname{tg}\\dfrac{\\pi}{6} = 1$.<br><br>$\\sin 5x + \\sin x = 1 - 2\\sin^2 x = \\cos 2x$, ხოლო $\\sin 5x + \\sin x = 2\\sin 3x\\cos 2x$. ამიტომ $\\cos 2x(2\\sin 3x - 1) = 0$.<br><br>$\\cos 2x = 0 \\Rightarrow x = \\dfrac{\\pi}{4} + \\dfrac{\\pi k}{2}$; $\\sin 3x = \\dfrac{1}{2} \\Rightarrow x = (-1)^n\\dfrac{\\pi}{18} + \\dfrac{\\pi n}{3}$.<br><br><strong>პასუხი:</strong> $x = \\dfrac{\\pi}{4} + \\dfrac{\\pi k}{2}$; $x = (-1)^n\\dfrac{\\pi}{18} + \\dfrac{\\pi n}{3}$, $k, n \\in \\mathbb{Z}$."
  },

  // 7
  {
    question: "<strong>(4 ქულა)</strong> იპოვეთ $a$ პარამეტრის ყველა მნიშვნელობა, რომლისთვისაც $\\cos 2x + a\\sin x = 2a - 7$ განტოლებას გააჩნია ერთი მაინც ამონახსნი.",
    options: [],
    tags: [],
    solution: "$s = \\sin x \\in [-1;\\ 1]$: $1 - 2s^2 + as = 2a - 7 \\Leftrightarrow a(s - 2) = 2s^2 - 8 = 2(s - 2)(s + 2)$.<br><br>$s \\ne 2$, ამიტომ $a = 2(s + 2)$. როცა $s$ გაირბენს $[-1;\\ 1]$-ს, $a$ გაირბენს $[2;\\ 6]$-ს.<br><br><strong>პასუხი:</strong> $a \\in [2;\\ 6]$."
  }
];
