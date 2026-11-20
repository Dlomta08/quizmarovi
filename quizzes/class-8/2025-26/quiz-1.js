quizData = [
  // 1
  {
    question: "<strong>(3 ქულა)</strong> გამოსახულება $\\left(-\\dfrac{2m^2n^4}{3p^3q}\\right)^2 \\cdot \\left(\\dfrac{3p^2q^2}{mn^2}\\right)^3$ წარმოადგინეთ სტანდარტული სახით.",
    options: [],
    tags: [],
    solution: "$\\left(-\\dfrac{2m^2n^4}{3p^3q}\\right)^2 = \\dfrac{4m^4n^8}{9p^6q^2}$, $\\left(\\dfrac{3p^2q^2}{mn^2}\\right)^3 = \\dfrac{27p^6q^6}{m^3n^6}$.<br><br>ნამრავლი: $\\dfrac{4 \\cdot 27}{9} \\cdot m^{4-3}n^{8-6}p^{6-6}q^{6-2} = 12mn^2q^4$.<br><br><strong>პასუხი:</strong> $12mn^2q^4$.",
    area: "algebra",
    topics: ["powers"],
    grade: 8,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 2
  {
    question: "<strong>(3 ქულა)</strong> იპოვეთ $n$-ის ყველა ნატურალური მნიშვნელობა, რომელთათვისაც $\\dfrac{2n^2 - 8n - 7}{n - 4}$ გამოსახულების მნიშვნელობა ნატურალურია.",
    options: [],
    tags: [],
    solution: "$2n^2 - 8n = 2n(n - 4)$, ამიტომ $\\dfrac{2n^2 - 8n - 7}{n - 4} = 2n - \\dfrac{7}{n - 4}$.<br><br>გამოსახულება მთელია, თუ $n - 4$ არის $7$-ის გამყოფი: $n - 4 \\in \\{-7, -1, 1, 7\\}$, ე.ი. $n \\in \\{-3, 3, 5, 11\\}$. ნატურალური $n$: $3, 5, 11$.<br><br>შემოწმება (მნიშვნელობა ნატურალური უნდა იყოს): $n = 3$: $6 + 7 = 13$; $n = 5$: $10 - 7 = 3$; $n = 11$: $22 - 1 = 21$.<br><br><strong>პასუხი:</strong> $n \\in \\{3;\\ 5;\\ 11\\}$.",
    area: "algebra",
    topics: ["rational-expr","divisibility"],
    grade: 8,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 3
  {
    question: "<strong>(3 ქულა)</strong> წრეწირში ჩაიხაზება და შემოიხაზება ტრაპეცია, რომლის პერიმეტრია $20$ სმ. იპოვეთ ტრაპეციის ფუძეები, თუ ერთი მათგანი მეორეზე $4$-ჯერ მეტია.",
    options: [],
    tags: [],
    solution: "წრეწირში ჩახაზული ტრაპეცია ტოლფერდაა, ხოლო წრეწირზე შემოხაზულ ოთხკუთხედში მოპირდაპირე გვერდების ჯამები ტოლია: $a + b = 2c$ ($a$, $b$ ფუძეებია, $c$ ფერდი).<br><br>პერიმეტრი: $a + b + 2c = 2(a + b) = 20$, $a + b = 10$.<br><br>$a = 4b$: $5b = 10$, $b = 2$, $a = 8$.<br><br><strong>პასუხი:</strong> $2$ სმ და $8$ სმ.",
    area: "geometry",
    topics: ["trapezoid","inscribed-circum"],
    grade: 8,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 4
  {
    question: "<strong>(4 ქულა)</strong> ამოხსენით $10x - 14y = 26$ განტოლება მთელ რიცხვებში.",
    options: [],
    tags: [],
    solution: "გავყოთ $2$-ზე: $5x - 7y = 13$. ერთ-ერთი ამონახსნია $x = 4$, $y = 1$ ($20 - 7 = 13$).<br><br>$5(x - 4) = 7(y - 1)$. $5$ და $7$ ურთიერთმარტივია, ამიტომ $x - 4 = 7t$, $y - 1 = 5t$.<br><br><strong>პასუხი:</strong> $x = 4 + 7t$, $y = 1 + 5t$, $t \\in \\mathbb{Z}$.",
    area: "algebra",
    topics: ["diophantine"],
    grade: 8,
    difficulty: 2,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 5
  {
    question: "<strong>(4 ქულა)</strong> მოცემულია $ABCD$ პარალელოგრამი $A$ მახვილი კუთხით. $AB$ და $CB$ სხივებზე აღებულია შესაბამისად $H$ და $K$ წერტილები ისე, რომ $CH = BC$ და $AK = AB$. იპოვეთ კუთხე $\\angle AKD$, თუ $\\angle HDC = 30^\\circ$.",
    options: [],
    tags: [],
    solution: "ვთქვათ, $\\angle A = \\alpha$ (მახვილი), მაშინ $\\angle ABC = 180^\\circ - \\alpha$ და $\\angle C = \\alpha$.<br><br>$CBH$ ტოლფერდაა ($CH = CB$), $\\angle CBH = 180^\\circ - \\angle ABC = \\alpha$, ამიტომ $\\angle BCH = 180^\\circ - 2\\alpha$. ანალოგიურად, $ABK$ ტოლფერდაა ($AK = AB$), $\\angle ABK = \\alpha$, $\\angle BAK = 180^\\circ - 2\\alpha$.<br><br>შევადაროთ $KAD$ და $DCH$ სამკუთხედები:<br>$KA = AB = DC$; $AD = BC = CH$;<br>$\\angle KAD = \\angle KAB + \\angle BAD = 180^\\circ - 2\\alpha + \\alpha = 180^\\circ - \\alpha$;<br>$\\angle DCH = \\angle DCB + \\angle BCH = \\alpha + 180^\\circ - 2\\alpha = 180^\\circ - \\alpha$.<br><br>სამკუთხედები ტოლია (ორი გვერდით და მათ შორის კუთხით), ამიტომ $\\angle AKD = \\angle CDH = 30^\\circ$.<br><br><strong>პასუხი:</strong> $30^\\circ$.",
    area: "geometry",
    topics: ["parallelogram","congruence"],
    grade: 8,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 6
  {
    question: "<strong>(4 ქულა)</strong> იპოვეთ $a$-ს ყველა მნიშვნელობა, რომელთათვისაც $\\dfrac{a + 2}{2x^2 - 8} + \\dfrac{1}{2x - x^2} = 0$ განტოლებას არ ექნება ამონახსნი.",
    options: [],
    tags: [],
    solution: "დასაშვები მნიშვნელობები: $x \\ne 0$, $x \\ne \\pm 2$. $2x^2 - 8 = 2(x - 2)(x + 2)$, $2x - x^2 = -x(x - 2)$.<br><br>საერთო მნიშვნელით $2x(x - 2)(x + 2)$: $(a + 2)x - 2(x + 2) = 0$, ანუ $ax = 4$.<br><br>ამონახსნი არ იქნება, თუ:<br>1) $a = 0$ ($0 \\cdot x = 4$);<br>2) $x = \\dfrac{4}{a}$ აკრძალული მნიშვნელობაა: $\\dfrac{4}{a} = 2 \\Rightarrow a = 2$; $\\dfrac{4}{a} = -2 \\Rightarrow a = -2$ ($\\dfrac{4}{a} = 0$ შეუძლებელია).<br><br><strong>პასუხი:</strong> $a \\in \\{-2;\\ 0;\\ 2\\}$.",
    area: "algebra",
    topics: ["rational-eq"],
    grade: 8,
    difficulty: 3,
    type: ["solve"],
    method: ["parameter"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 7
  {
    question: "<strong>(4 ქულა)</strong> $ABCD$ ტრაპეციაში ($AD \\parallel BC$) $AD = 9$, $BC = 4$, $AB = 5$, $CD = 6$. $A$ და $B$ გარე კუთხის ბისექტრისები $M$ წერტილში იკვეთებიან, ხოლო $C$ და $D$ გარე კუთხის ბისექტრისები $N$ წერტილში. გამოთვალეთ $MN$ მონაკვეთის სიგრძე.",
    options: [],
    tags: [],
    solution: "$\\angle A + \\angle B = 180^\\circ$ (ფერდთან მდებარე კუთხეები), ამიტომ გარე კუთხეების ჯამიც $180^\\circ$-ია, მათი ნახევრების ჯამი $90^\\circ$ და $\\angle AMB = 90^\\circ$.<br><br>$M$ ბისექტრისებზე მდებარეობს, ამიტომ თანაბრად არის დაშორებული $AD$, $AB$ და $BC$ წრფეებიდან, ე.ი. $M$ ძევს შუახაზის წრფეზე. ვთქვათ, $P$ არის $AB$-ს შუაწერტილი; მართკუთხა $AMB$-ში მედიანა $MP = \\dfrac{AB}{2} = 2{,}5$.<br><br>ანალოგიურად, $N$ ძევს შუახაზის წრფეზე და $NQ = \\dfrac{CD}{2} = 3$ ($Q$ — $CD$-ს შუაწერტილი).<br><br>შუახაზი $PQ = \\dfrac{9 + 4}{2} = 6{,}5$. $M$ და $N$ ტრაპეციის გარეთ, შუახაზის გაგრძელებაზე მდებარეობს, ამიტომ $MN = 2{,}5 + 6{,}5 + 3 = 12$.<br><br><strong>პასუხი:</strong> $12$.",
    area: "geometry",
    topics: ["trapezoid","midline"],
    grade: 8,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];
