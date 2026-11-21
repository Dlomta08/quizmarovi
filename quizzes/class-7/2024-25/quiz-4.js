quizData = [
  // 1
  {
    question: "ამოხსენით $3x - 1 = -x + 7$ განტოლება გრაფიკულად.",
    options: [],
    tags: [],
    solution: "ავაგოთ $y = 3x - 1$ (გადის $(0; -1)$ და $(1; 2)$ წერტილებზე) და $y = -x + 7$ (გადის $(0; 7)$ და $(7; 0)$ წერტილებზე) წრფეები.<br><br>წრფეები იკვეთება $(2; 5)$ წერტილში: $3 \\cdot 2 - 1 = 5$ და $-2 + 7 = 5$. განტოლების ამონახსნი გადაკვეთის წერტილის აბსცისაა.<br><br><strong>პასუხი:</strong> $x = 2$.",
    area: "algebra",
    topics: ["linear-eq"],
    grade: 7,
    difficulty: 2,
    type: ["solve"],
    method: ["graphical"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 2
  {
    question: "ამოხსენით $\\begin{cases} 2x + 3y = 8 \\\\ 3x - 4y = -5 \\end{cases}$ განტოლებათა სისტემა.",
    options: [],
    tags: [],
    solution: "პირველი განტოლება გავამრავლოთ $4$-ზე, მეორე $3$-ზე: $8x + 12y = 32$, $9x - 12y = -15$.<br><br>შევკრიბოთ: $17x = 17$, $x = 1$. მაშინ $3y = 8 - 2 = 6$, $y = 2$.<br><br><strong>პასუხი:</strong> $(1; 2)$.",
    area: "algebra",
    topics: ["linear-systems"],
    grade: 7,
    difficulty: 2,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 3
  {
    question: "იპოვეთ $a^2b - ab + a^2c - ac$ გამოსახულების მნიშვნელობა, თუ $a = 2;\\ b + c = 5$.",
    options: [],
    tags: [],
    solution: "$a^2b - ab + a^2c - ac = ab(a - 1) + ac(a - 1) = a(a - 1)(b + c)$.<br><br>$a = 2$, $b + c = 5$: $2 \\cdot 1 \\cdot 5 = 10$.<br><br><strong>პასუხი:</strong> $10$.",
    area: "algebra",
    topics: [],
    grade: 7,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 4
  {
    question: "დავუშვათ $y = f(x)$ ფუნქციის მნიშვნელობათა სიმრავლე წარმოადგენს $[-7; 7]$ მონაკვეთს. იპოვეთ $y = |f(x) - 3|$ ფუნქციის მნიშვნელობათა სიმრავლე.",
    options: [],
    tags: [],
    solution: "$-7 \\le f(x) \\le 7$, ამიტომ $-10 \\le f(x) - 3 \\le 4$ და $f(x) - 3$ ღებულობს ამ შუალედის ყველა მნიშვნელობას.<br><br>მოდული ღებულობს $0$-დან (როცა $f(x) = 3$) $10$-მდე (როცა $f(x) = -7$) ყველა მნიშვნელობას.<br><br><strong>პასუხი:</strong> $[0; 10]$.",
    area: "algebra",
    topics: ["function-basics"],
    grade: 7,
    difficulty: 2,
    type: ["compute"],
    method: ["absolute"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 5
  {
    question: "საკოორდინატო სიბრტყეზე მოცემულია ორი $A(1; -1)$ და $B(4; 11)$ წერტილი. დაწერეთ $A$ და $B$ წერტილებზე გამავალი წრფის მართობული წრფის განტოლება, რომელიც გადის ორდინატთა ღერძის მიმართ $B$ წერტილის სიმეტრიულ წერტილზე.",
    options: [],
    tags: [],
    solution: "$AB$ წრფის კუთხური კოეფიციენტი: $\\dfrac{11 - (-1)}{4 - 1} = 4$. მართობული წრფის კოეფიციენტია $-\\dfrac{1}{4}$.<br><br>$B$-ს სიმეტრიული წერტილი ორდინატთა ღერძის მიმართ: $B'(-4; 11)$.<br><br>$y - 11 = -\\dfrac{1}{4}(x + 4)$, ანუ $y = -\\dfrac{1}{4}x + 10$.<br><br><strong>პასუხი:</strong> $y = -\\dfrac{1}{4}x + 10$.",
    area: "algebra",
    topics: [],
    grade: 7,
    difficulty: 2,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 6
  {
    question: "იპოვეთ $a$-ს ორი მნიშვნელობა, რომლისთვისაც $f(x) = a$ განტოლებას ექნება მხოლოდ ერთი ფესვი, თუ \n$f(x) = \\begin{cases} \\dfrac{x+5}{2}, & \\text{როცა } x \\le 1 \\\\ -3x + 4, & \\text{როცა } x > 1 \\end{cases}$",
    options: [],
    tags: [],
    solution: "$x \\le 1$-ზე $f(x) = \\dfrac{x + 5}{2}$ ზრდადია და ღებულობს $(-\\infty; 3]$ შუალედის მნიშვნელობებს. $x > 1$-ზე $f(x) = -3x + 4$ კლებადია და ღებულობს $(-\\infty; 1)$ შუალედის მნიშვნელობებს.<br><br>• $a < 1$: ორი ფესვი (თითო ორივე ნაწილზე);<br>• $1 \\le a \\le 3$: ერთი ფესვი (მხოლოდ პირველ ნაწილზე);<br>• $a > 3$: ფესვი არ არის.<br><br>გამოდგება $[1; 3]$ შუალედის ნებისმიერი ორი მნიშვნელობა.<br><br><strong>პასუხი:</strong> მაგალითად, $a = 1$ და $a = 3$ (ნებისმიერი $a \\in [1; 3]$).",
    area: "algebra",
    topics: ["linear-systems"],
    grade: 7,
    difficulty: 3,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 7
  {
    question: "სამკუთხედზე შემოხაზული წრეწირი სამკუთხედის წვეროებით იყოფა რკალებად, რომლებიც ისე შეეფარდებიან ერთმანეთს, როგორც $3 : 4 : 5$. იპოვეთ სამკუთხედის კუთხეები.",
    options: [],
    tags: [],
    solution: "რკალები: $3k + 4k + 5k = 360^\\circ$, $k = 30^\\circ$ — $90^\\circ$, $120^\\circ$, $150^\\circ$.<br><br>სამკუთხედის ყოველი კუთხე ჩახაზული კუთხეა და უდრის მის პირდაპირ მდებარე რკალის ნახევარს: $45^\\circ$, $60^\\circ$, $75^\\circ$.<br><br><strong>პასუხი:</strong> $45^\\circ$, $60^\\circ$, $75^\\circ$.",
    area: "algebra",
    topics: ["divisibility","circle-angles","inscribed-circum"],
    grade: 7,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 8
  {
    question: "ორი წრეწირი გარედან ეხება ერთმანეთს. მათი საერთო მხებები $60^\\circ$-იანი კუთხით იკვეთებიან. იპოვეთ დიდი წრეწირის რადიუსი, თუ მცირე წრეწირის დიამეტრია $10$.",
    options: [],
    tags: [],
    solution: "საერთო მხებები იკვეთება $P$ წერტილში, ცენტრები $O_1$ (მცირე, $r = 5$) და $O_2$ (დიდი, $R$) ძევს მხებებს შორის კუთხის ბისექტრისაზე, რომელიც მხებთან $30^\\circ$-იან კუთხეს ქმნის.<br><br>ცენტრიდან მხებამდე მანძილი რადიუსია, ხოლო $30^\\circ$-ის პირდაპირ მდებარე კათეტი ჰიპოტენუზის ნახევარია: $PO_1 = 2r = 10$, $PO_2 = 2R$.<br><br>წრეწირები ეხება, ამიტომ $O_1O_2 = r + R$: $2R - 10 = R + 5$, $R = 15$.<br><br><strong>პასუხი:</strong> $15$.",
    area: "geometry",
    topics: ["chords-tangents"],
    grade: 7,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 9
  {
    image: "quizzes/class-7/images/image.27.png",
    question: "წრეწირის $C$ წერტილიდან გავლებულია ორი ტოლი ქორდა $EC = CD$, $\\angle ECD = 54^\\circ$, ხოლო $BD$ წრეწირის დიამეტრია. იპოვეთ კუთხე $\\angle BDC$. (იხ. ნახაზი)",
    options: [],
    tags: [],
    solution: "$ECD$ სამკუთხედი ტოლფერდაა: $\\angle CED = \\angle CDE = \\dfrac{180^\\circ - 54^\\circ}{2} = 63^\\circ$.<br><br>$\\angle CBD$ და $\\angle CED$ ეყრდნობა ერთსა და იმავე $CD$ რკალს, ამიტომ $\\angle CBD = 63^\\circ$.<br><br>$BD$ დიამეტრია, ამიტომ $\\angle BCD = 90^\\circ$ და $\\angle BDC = 90^\\circ - 63^\\circ = 27^\\circ$.<br><br><strong>პასუხი:</strong> $27^\\circ$.",
    area: "geometry",
    topics: ["chords-tangents"],
    grade: 7,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  // 10
  {
    question: "წრეწირში გავლებულია $AB$ ქორდა. მცირე $AB$ რკალის შუა $C$ წერტილიდან გავლებულია $CD$ და $CK$ ქორდები, რომლებიც $AB$ ქორდას შესაბამისად $M$ და $N$ წერტილებში კვეთენ. იპოვეთ $\\angle DKC$ კუთხე, თუ $\\angle AMC = 140^\\circ$.",
    options: [],
    tags: [],
    solution: "$C$ მცირე $AB$ რკალის შუა წერტილია, ამიტომ $\\smile AC = \\smile CB$.<br><br>$\\angle CMB = 180^\\circ - 140^\\circ = 40^\\circ$. ქორდებს შორის კუთხე: $\\angle CMB = \\dfrac{\\smile CB + \\smile AD}{2} = \\dfrac{\\smile CA + \\smile AD}{2}$, ანუ $A$-ზე გამავალი $CD$ რკალი $80^\\circ$-ია.<br><br>$\\angle DKC$ ჩახაზული კუთხეა, რომელიც ამ რკალს ეყრდნობა: $\\angle DKC = \\dfrac{80^\\circ}{2} = 40^\\circ$ (თუ $K$ მდებარეობს $A$-სა და $D$-ს შორის, მაშინ $180^\\circ - 40^\\circ = 140^\\circ$).<br><br><strong>პასუხი:</strong> $40^\\circ$.",
    area: "geometry",
    topics: ["circle-angles","chords-tangents"],
    grade: 7,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];
