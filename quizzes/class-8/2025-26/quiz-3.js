quizData = [
  // 1
  {
    question: "<strong>(3 ქულა)</strong> იპოვეთ $\\sqrt{2x - 1} < 7$ და $\\sqrt{3x - 20} > -1$ უტოლობებისა და $x^2 - 9x + 14 = 0$ განტოლების საერთო ამონახსნი.",
    options: [],
    tags: [],
    solution: "$\\sqrt{2x - 1} < 7 \\Leftrightarrow 0 \\le 2x - 1 < 49 \\Leftrightarrow \\dfrac{1}{2} \\le x < 25$.<br><br>$\\sqrt{3x - 20} > -1$ სრულდება განსაზღვრის მთელ არეზე: $x \\ge \\dfrac{20}{3}$.<br><br>$x^2 - 9x + 14 = 0 \\Leftrightarrow x = 2$ ან $x = 7$. $2 < \\dfrac{20}{3}$, ამიტომ საერთო ამონახსნია მხოლოდ $x = 7$.<br><br><strong>პასუხი:</strong> $x = 7$."
  },

  // 2
  {
    question: "<strong>(3 ქულა)</strong> რისი ტოლია $-x\\sqrt{-x^3y^2} \\cdot \\left(\\dfrac{\\sqrt{xy}}{\\sqrt{-x^2y}} - \\dfrac{1}{\\sqrt{-x^5y^2}}\\right)$ გამოსახულების მნიშვნელობა, თუ $x^2 + x = 6$ და $y^2 = 4$?",
    options: [],
    tags: [],
    solution: "დასაშვები მნიშვნელობები: $\\sqrt{-x^2y}$ მნიშვნელშია, ამიტომ $-x^2y > 0$, ე.ი. $y < 0$ და $x \\ne 0$; $\\sqrt{-x^5y^2} > 0$ მოითხოვს $x < 0$.<br><br>$x^2 + x = 6 \\Rightarrow x = 2$ ან $x = -3$; $y^2 = 4 \\Rightarrow y = \\pm 2$. პირობებს აკმაყოფილებს მხოლოდ $x = -3$, $y = -2$.<br><br>გამოვთვალოთ: $-x\\sqrt{-x^3y^2} = 3\\sqrt{27 \\cdot 4} = 3 \\cdot 6\\sqrt{3} = 18\\sqrt{3}$;<br>$\\dfrac{\\sqrt{xy}}{\\sqrt{-x^2y}} = \\dfrac{\\sqrt{6}}{\\sqrt{18}} = \\dfrac{1}{\\sqrt{3}}$; $\\dfrac{1}{\\sqrt{-x^5y^2}} = \\dfrac{1}{\\sqrt{243 \\cdot 4}} = \\dfrac{1}{18\\sqrt{3}}$.<br><br>$18\\sqrt{3} \\cdot \\left(\\dfrac{1}{\\sqrt{3}} - \\dfrac{1}{18\\sqrt{3}}\\right) = 18 - 1 = 17$.<br><br><strong>პასუხი:</strong> $17$."
  },

  // 3
  {
    question: "<strong>(3 ქულა)</strong> $ABC$ სამკუთხედის $AB$ გვერდზე აიღეს $M$ წერტილი ისე, რომ $AM : MB = 1 : 3$, ხოლო $BC$ და $AC$ გვერდებზე შესაბამისად $N$ და $K$ შუა წერტილები. შემდეგ $ABC$ სამკუთხედი წაშალეს ისე, რომ მხოლოდ $M$, $N$ და $K$ წერტილები დარჩა. ფარგლისა და სახაზავის საშუალებით ამ სამი წერტილით აღადგინეთ $ABC$ სამკუთხედი.",
    options: [],
    tags: [],
    solution: "<strong>ანალიზი:</strong> $KN$ არის $ABC$-ს შუახაზი: $KN \\parallel AB$ და $AB = 2KN$. $M$ ძევს $AB$-ზე და $AM = \\dfrac{AB}{4} = \\dfrac{KN}{2}$, $MB = \\dfrac{3}{2}KN$; $A$ წერტილი $M$-დან $\\overrightarrow{NK}$ მიმართულებითაა.<br><br><strong>აგება:</strong><br>1) $M$ წერტილზე გავავლოთ $KN$-ის პარალელური წრფე $l$.<br>2) $KN$ შუაზე გავყოთ (შუამართობის აგებით).<br>3) $l$-ზე $M$-დან $\\overrightarrow{NK}$ მიმართულებით გადავზომოთ $MA = \\dfrac{KN}{2}$, საპირისპირო მიმართულებით კი $MB = KN + \\dfrac{KN}{2}$.<br>4) $AK$ სხივზე $K$-ს მიღმა გადავზომოთ $KC = AK$.<br><br><strong>დამტკიცება:</strong> $K$ არის $AC$-ს შუაწერტილი, $AB = 2KN$ და $AB \\parallel KN$, ამიტომ $KN$ შუახაზია და $N$ არის $BC$-ს შუაწერტილი; $AM : MB = \\dfrac{1}{2} : \\dfrac{3}{2} = 1 : 3$."
  },

  // 4
  {
    question: "<strong>(4 ქულა)</strong> ამოხსენით განტოლება: $\\sqrt{x^2 - 6x + 9} = \\left|2\\sqrt{3} - 3\\right|$.",
    options: [],
    tags: [],
    solution: "$\\sqrt{x^2 - 6x + 9} = \\sqrt{(x - 3)^2} = |x - 3|$. $2\\sqrt{3} = \\sqrt{12} > 3$, ამიტომ $|2\\sqrt{3} - 3| = 2\\sqrt{3} - 3$.<br><br>$|x - 3| = 2\\sqrt{3} - 3 \\Rightarrow x - 3 = \\pm(2\\sqrt{3} - 3)$.<br><br><strong>პასუხი:</strong> $x = 2\\sqrt{3}$ ან $x = 6 - 2\\sqrt{3}$."
  },

  // 5
  {
    question: "<strong>(4 ქულა)</strong> $ABC$ სამკუთხედში $AB = BC = 10$. $AB$ გვერდზე, როგორც დიამეტრზე, აგებული წრეწირი $BC$ გვერდს გადაკვეთს $D$ წერტილში ისე, რომ $BD : DC = 4 : 1$. იპოვეთ მანძილი $D$ წერტილიდან $AC$ გვერდამდე.",
    options: [],
    tags: [],
    solution: "$D$ წრეწირზეა, $AB$ დიამეტრია, ამიტომ $\\angle ADB = 90^\\circ$, ე.ი. $AD \\perp BC$.<br><br>$BD : DC = 4 : 1$ და $BC = 10$: $BD = 8$, $DC = 2$. $ABD$-დან $AD = \\sqrt{100 - 64} = 6$. $ADC$-დან $AC = \\sqrt{36 + 4} = 2\\sqrt{10}$.<br><br>მანძილი $D$-დან $AC$-მდე — $ADC$ მართკუთხა სამკუთხედის სიმაღლე: $h = \\dfrac{AD \\cdot DC}{AC} = \\dfrac{12}{2\\sqrt{10}} = \\dfrac{3\\sqrt{10}}{5}$.<br><br><strong>პასუხი:</strong> $\\dfrac{3\\sqrt{10}}{5}$."
  },

  // 6
  {
    question: "<strong>(4 ქულა)</strong> ორი წრეწირი, რომელთა რადიუსებია $3$ და $9$, გარედან ეხება ერთმანეთს $C$ წერტილში. მათი საერთო გარე მხები წრეწირებს $A$ და $B$ წერტილებში ეხება. იპოვეთ $ABC$ სამკუთხედის გვერდები.",
    options: [],
    tags: [],
    solution: "ვთქვათ, $O_1$ და $O_2$ ცენტრებია ($r = 3$, $R = 9$), $O_1O_2 = 12$. $O_1ABO_2$ მართკუთხა ტრაპეციაა ($O_1A \\perp AB$, $O_2B \\perp AB$): $AB = \\sqrt{12^2 - (9 - 3)^2} = \\sqrt{108} = 6\\sqrt{3}$.<br><br>ტრაპეციაში $O_1O_2$ ფერდი ფუძეებთან ადგენს კუთხეებს: $\\cos\\angle O_2 = \\dfrac{6}{12} = \\dfrac{1}{2}$, ე.ი. $\\angle BO_2C = 60^\\circ$ და $\\angle AO_1C = 120^\\circ$.<br><br>$O_2BC$ ტოლგვერდაა ($O_2B = O_2C = 9$, კუთხე $60^\\circ$): $BC = 9$.<br>$O_1AC$ ტოლფერდაა, წვეროსთან კუთხე $120^\\circ$: $AC = 3\\sqrt{3}$.<br><br>შემოწმება: $AC^2 + BC^2 = 27 + 81 = 108 = AB^2$ — $\\angle ACB = 90^\\circ$, როგორც უნდა იყოს.<br><br><strong>პასუხი:</strong> $AB = 6\\sqrt{3}$, $AC = 3\\sqrt{3}$, $BC = 9$."
  },

  // 7
  {
    question: "<strong>(4 ქულა)</strong> შეადარეთ $\\dfrac{8}{2026 + 8 + 199} + \\dfrac{199}{8 + 199 + 2025} + \\dfrac{2025}{199 + 2025 + 2026} + \\dfrac{2026}{2025 + 2026 + 8}$ და $\\sqrt{\\dfrac{\\left(\\dfrac{8}{199} + \\dfrac{2025}{2026}\\right)^2 + \\left(\\dfrac{199}{8} + \\dfrac{2026}{2025}\\right)^2}{2}}$ გამოსახულებების მნიშვნელობები.",
    options: [],
    tags: [],
    solution: "აღვნიშნოთ $a = 8$, $b = 199$, $c = 2025$, $d = 2026$. პირველი გამოსახულებაა $S = \\dfrac{a}{a + b + d} + \\dfrac{b}{a + b + c} + \\dfrac{c}{b + c + d} + \\dfrac{d}{a + c + d}$.<br><br>მნიშვნელის შემცირებით წილადი იზრდება: $\\dfrac{a}{a + b + d} < \\dfrac{a}{a + b}$, $\\dfrac{b}{a + b + c} < \\dfrac{b}{a + b}$, $\\dfrac{c}{b + c + d} < \\dfrac{c}{c + d}$, $\\dfrac{d}{a + c + d} < \\dfrac{d}{c + d}$. ამიტომ $S < 1 + 1 = 2$.<br><br>მეორე გამოსახულება: $T = \\sqrt{\\dfrac{u^2 + v^2}{2}}$, სადაც $v = \\dfrac{199}{8} + \\dfrac{2026}{2025} > 24$. $T > \\sqrt{\\dfrac{v^2}{2}} > \\dfrac{24}{\\sqrt{2}} = 12\\sqrt{2} > 2$.<br><br>მაშასადამე, $T > S$: მეორე გამოსახულება მეტია."
  }
];
