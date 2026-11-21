quizData = [
  //1
  {
    question: "ჩამოთვლილთაგან $𝑎$-ს რომელი მნიშვნელობისთვის იქნება $𝑦 = \\sqrt{𝑥+a}  + 4𝑎 + 5$ ფუნქციის გრაფიკი მხოლოდ პირველ მეოთხედში?",
    options: ["$-1$", "$-2$", "$-3$", "$1$", "$2$", "$3$"],
    correct: 0,
    solution: "გრაფიკი იწყება $(-a; 4a + 5)$ წერტილში და შემდეგ მარჯვნივ და ზემოთ მიდის. მხოლოდ პირველ მეოთხედში რომ იყოს, საჭიროა $-a \\ge 0$ და $4a + 5 > 0$, ანუ $-\\dfrac{5}{4} < a \\le 0$.<br><br>ჩამოთვლილთაგან: $a = -1$ (საწყისი წერტილი $(1; 1)$).<br><br><strong>პასუხი:</strong> ა) $-1$.",
    tags: [],
    area: "algebra",
    topics: ["square-roots"],
    grade: 9,
    difficulty: 1,
    type: ["graph"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //2
  {
    question: "ჩამოთვლილთაგან იგივურად რომლის ტოლია $\\sqrt{-a^5b^7c^8}$ გამოსახულების მნიშვნელობა?",
    options: [
      "$ab^3c^4\\sqrt{ab}$",
      "$-ab^3c^4\\sqrt{ab}$",
      "$a^2b^3c^4\\sqrt{ab}$",
      "$a^2|b^3|c^4\\sqrt{-ab}$",
      "$a^2|b^3|c^4\\sqrt{ab}$",
      "$|a^2|b^3c^4\\sqrt{-ab}$"
    ],
    correct: 3,
    solution: "ფესვს აზრი აქვს, როცა $-a^5b^7 \\ge 0$, ანუ $ab \\le 0$.<br><br>$-a^5b^7c^8 = (a^2|b^3|c^4)^2 \\cdot (-ab)$, ამიტომ $\\sqrt{-a^5b^7c^8} = a^2|b^3|c^4\\sqrt{-ab}$.<br><br><strong>პასუხი:</strong> დ) $a^2|b^3|c^4\\sqrt{-ab}$.",
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

  //3
  {
    question: "ჩამოთვლილთაგან რომელია $𝑦 = 𝑥^2 − 4𝑥 + 5$ ფუნქციის შექცეული ფუნქცია $[2; +∞)$ შუალედში?",
    options: [
      "$y = -x^2 + 4x - 5$",
      "$y = \\dfrac{1}{x^2 - 4x + 5}$",
      "$y = \\sqrt{x^2 - 4x + 5}$",
      "$y = \\sqrt{x - 1} + 2$",
      "$y = \\sqrt{x - 2}$",
      "$y = \\sqrt{x + 2}$"
    ],
    correct: 3,
    solution: "$y = (x - 2)^2 + 1$, $x \\ge 2$-ზე $y \\ge 1$. გამოვსახოთ $x$: $x - 2 = \\sqrt{y - 1}$, $x = \\sqrt{y - 1} + 2$.<br><br>შექცეული: $y = \\sqrt{x - 1} + 2$.<br><br><strong>პასუხი:</strong> დ) $y = \\sqrt{x - 1} + 2$.",
    tags: [],
    area: "algebra",
    topics: ["function-basics","quadratic-func"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //4
  {
    question: "პარალელოგრამის დიაგონალებია $6$ და $8$, ხოლო ერთ-ერთი გვერდი $5$. იპოვეთ პარალელოგრამის ფართობი.",
    options: ["$4$", "$12$", "$16$", "$24$", "$30$", "$60$"],
    correct: 3,
    solution: "დიაგონალების ნახევრებია $3$ და $4$, გვერდი $5$: $3^2 + 4^2 = 5^2$, ამიტომ დიაგონალები მართობულია (პარალელოგრამი რომბია).<br><br>$S = \\dfrac{6 \\cdot 8}{2} = 24$.<br><br><strong>პასუხი:</strong> დ) $24$.",
    tags: [],
    area: "geometry",
    topics: ["parallelogram"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //5
  {
    question: "ტრაპეციის ფუძეები $2$-ის და $8$-ის ტოლია, ხოლო ფერდები $5$-ის. იპოვეთ ტრაპეციის ფართობი.",
    options: ["$12$", "$16$", "$20$", "$25$", "$30$", "$32$"],
    correct: 2,
    solution: "ფერდები ტოლია — ტრაპეცია ტოლფერდაა. სიმაღლე დიდ ფუძეზე მოკვეთს $\\dfrac{8 - 2}{2} = 3$-ს, $h = \\sqrt{25 - 9} = 4$.<br><br>$S = \\dfrac{2 + 8}{2} \\cdot 4 = 20$.<br><br><strong>პასუხი:</strong> გ) $20$.",
    tags: [],
    area: "geometry",
    topics: ["trapezoid"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
    //6
  {
    question: "თუ $[x] = [y]$ ($[x]$ , $x$-ის მთელი ნაწილია), მაშინ აუცილებლად:",
    options: [
      "$x = y$",
      "$|x| = |y|$",
      "$xy = 1$",
      "$|x - y| < 1$",
      "$x = 2y$",
      "$xy = -1$"
    ],
    correct: 3,
    solution: "თუ $[x] = [y] = n$, მაშინ $x, y \\in [n; n + 1)$, ამიტომ $|x - y| < 1$.<br><br>დანარჩენი აუცილებელი არ არის (მაგ. $x = 0{,}2$, $y = 0{,}5$).<br><br><strong>პასუხი:</strong> დ) $|x - y| < 1$.",
    tags: [],
    area: "algebra",
    topics: ["integer-part"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //7
  {
    question: "$\\dfrac{2}{\\sqrt{7} - \\sqrt{5}} - \\sqrt{7} = $",
    options: ["$\\sqrt{5}$", "$\\sqrt{7}$", "$\\sqrt{35}$", "$1$", "$3$", "$5$"],
    correct: 0,
    solution: "$\\dfrac{2}{\\sqrt{7} - \\sqrt{5}} = \\dfrac{2(\\sqrt{7} + \\sqrt{5})}{7 - 5} = \\sqrt{7} + \\sqrt{5}$.<br><br>$\\sqrt{7} + \\sqrt{5} - \\sqrt{7} = \\sqrt{5}$.<br><br><strong>პასუხი:</strong> ა) $\\sqrt{5}$.",
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

  //8
  {
    question: "რამდენი გადაკვეთის წერტილი აქვთ $y = x^4$ და $y = \\sqrt{x + 1}$ ფუნქციის გრაფიკებს?",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 0,
    solution: "<strong>შენიშვნა:</strong> პასუხების გასაღებში მითითებულია ა) $1$, მაგრამ ქვემოთ მოცემული ამოხსნით გადაკვეთის წერტილი $2$-ია.<br><br>$x \\ge -1$.<br>• $[-1; 0]$-ზე $x^4$ კლებულობს $1$-დან $0$-მდე, $\\sqrt{x + 1}$ იზრდება $0$-დან $1$-მდე — ერთი გადაკვეთა (დაახლ. $x \\approx -0{,}85$).<br>• $x > 0$-ზე $x = 1$-ში $1 < \\sqrt{2}$, $x = 1{,}2$-ში $2{,}07 > 1{,}48$ — კიდევ ერთი გადაკვეთა (დაახლ. $x \\approx 1{,}09$); შემდეგ $x^4$ უფრო სწრაფად იზრდება.<br><br><strong>პასუხი:</strong> ბ) $2$.",
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

  //9
  {
    question: "იპოვეთ $ABCD$ ტრაპეციის ($BC \\parallel AD$) ფართობი, თუ $BC = 1$, $AD = 5$, ხოლო $BOC$ სამკუთხედის ფართობია $4$, სადაც $O$ წერტილი დიაგონალების გადაკვეთის წერტილია.",
    options: ["$20$", "$50$", "$64$", "$144$", "$196$", "$224$"],
    correct: 3,
    solution: "$BOC \\sim DOA$ კოეფიციენტით $\\dfrac{BC}{AD} = \\dfrac{1}{5}$, ამიტომ $S_{AOD} = 25 \\cdot 4 = 100$.<br><br>$S_{AOB} = S_{COD} = \\sqrt{S_{BOC} \\cdot S_{AOD}} = \\sqrt{400} = 20$.<br><br>$S = 4 + 100 + 20 + 20 = 144$.<br><br><strong>პასუხი:</strong> დ) $144$.",
    tags: [],
    area: "geometry",
    topics: ["trapezoid"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //10
  {
    question: "$ABC$ სამკუთხედში $A$ და $C$ კუთხიდან გავლებული მედიანები $AC$ გვერდთან ქმნიან $17^\\circ$ და $13^\\circ$-იან კუთხეებს. იპოვეთ $ABC$ სამკუთხედის ფართობი, თუ ამ მედიანების სიგრძეებია $6$ და $12$.",
    options: ["$12$", "$24$", "$28$", "$32$", "$36$", "$48$"],
    correct: 1,
    solution: "მედიანები იკვეთება $G$-ში: $AG = \\dfrac{2}{3} \\cdot 6 = 4$, $CG = \\dfrac{2}{3} \\cdot 12 = 8$, $\\angle AGC = 180^\\circ - 17^\\circ - 13^\\circ = 150^\\circ$.<br><br>$S_{AGC} = \\dfrac{1}{2} \\cdot 4 \\cdot 8 \\cdot \\sin 150^\\circ = 8$, ხოლო $S_{ABC} = 3S_{AGC} = 24$.<br><br><strong>პასუხი:</strong> ბ) $24$.",
    tags: [],
    area: "geometry",
    topics: ["cevians"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //11
  {
    question: "ამოხსენით $|3x - 1| \\leq |-5|$ უტოლობა.",
    options: [
      "$(-\\infty; \\dfrac{1}{3}]$",
      "$[\\dfrac{1}{2}; 2]$",
      "$[-\\dfrac{1}{2}; \\dfrac{1}{4}]$",
      "$[-\\dfrac{4}{3}; 2]$",
      "$[\\dfrac{1}{3}; \\dfrac{3}{4}]$",
      "$[\\dfrac{1}{3}; \\dfrac{2}{3}]$"
    ],
    correct: 3,
    solution: "$|3x - 1| \\le 5$: $-5 \\le 3x - 1 \\le 5$, $-\\dfrac{4}{3} \\le x \\le 2$.<br><br><strong>პასუხი:</strong> დ) $[-\\dfrac{4}{3}; 2]$.",
    tags: [],
    area: "algebra",
    topics: ["linear-ineq"],
    grade: 9,
    difficulty: 2,
    type: ["solve"],
    method: ["absolute"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //12
  {
    question: "რამდენი გადაკვეთის წერტილი აქვთ $y = x^3 - 1$ და $y = \\dfrac{1}{x} + 2$ ფუნქციის გრაფიკებს?",
    options: ["$2$", "$3$", "$1$", "$4$", "$5$", "$6$"],
    correct: 0,
    solution: "$h(x) = x^3 - 3 - \\dfrac{1}{x}$. $h'(x) = 3x^2 + \\dfrac{1}{x^2} > 0$, ამიტომ $h$ ზრდადია $(-\\infty; 0)$-ზეც და $(0; +\\infty)$-ზეც.<br><br>$(-\\infty; 0)$-ზე $h$ იცვლება $-\\infty$-დან $+\\infty$-მდე, $(0; +\\infty)$-ზეც $-\\infty$-დან $+\\infty$-მდე — თითოზე ერთი ფესვი.<br><br>სულ $2$ გადაკვეთა.<br><br><strong>პასუხი:</strong> ა) $2$.",
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

  //13
  {
    question: "ჩამოთვლილთაგან რისი ტოლი შეიძლება იყოს $a$-ს მნიშვნელობა, რომ $\\dfrac{3x - 17}{x + a}$ ფუნქცია $[-8; 4]$ შუალედზე იყოს ზრდადი?",
    options: ["$-7$", "$-6$", "$-5$", "$-3$", "$-2$", "$-1$"],
    correct: 2,
    solution: "$\\dfrac{3x - 17}{x + a} = 3 - \\dfrac{17 + 3a}{x + a}$ — ზრდადია, როცა $17 + 3a > 0$, ანუ $a > -\\dfrac{17}{3}$.<br><br>გარდა ამისა, $x = -a$ არ უნდა ეკუთვნოდეს $[-8; 4]$-ს: $a \\notin [-4; 8]$.<br><br>$a \\in \\left(-\\dfrac{17}{3}; -4\\right)$ — ჩამოთვლილთაგან $-5$.<br><br><strong>პასუხი:</strong> გ) $-5$.",
    tags: [],
    area: "algebra",
    topics: ["function-props"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //14
  {
    question: "პარალელოგრამის მახვილი კუთხის წვეროებიდან გავლებული სიმაღლეები $4$-ის და $6$-ის ტოლია, მათ შორის კუთხე $150^\\circ$-ია. იპოვეთ პარალელოგრამის ფართობი.",
    options: ["$12$", "$24$", "$36$", "$48$", "$32$", "$20$"],
    correct: 3,
    solution: "ერთი წვეროდან გავლებულ სიმაღლეებს შორის კუთხე პარალელოგრამის მეორე კუთხის ტოლია, ამიტომ მახვილი კუთხე $30^\\circ$-ია.<br><br>$h_a = b\\sin 30^\\circ = 4$, $b = 8$; $h_b = a\\sin 30^\\circ = 6$, $a = 12$.<br><br>$S = a \\cdot h_a = 12 \\cdot 4 = 48$.<br><br><strong>პასუხი:</strong> დ) $48$.",
    tags: [],
    area: "geometry",
    topics: ["parallelogram"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //15
  {
    question: "$ABC$ სამკუთხედის $AD$ მედიანაზე აღებულია $M$ წერტილი. იპოვეთ $AM : AD$, თუ $S_{\\triangle ABM} = 8$ და $S_{\\triangle DCM} = 6$.",
    options: ["$3 : 7$", "$3 : 2$", "$4 : 3$", "$4 : 7$", "$2 : 5$", "$1 : 2$"],
    correct: 3,
    solution: "$D$ არის $BC$-ს შუა წერტილი, ამიტომ $S_{DBM} = S_{DCM} = 6$.<br><br>$ABM$ და $DBM$ სამკუთხედებს საერთო სიმაღლე აქვთ $B$-დან, ამიტომ $\\dfrac{AM}{MD} = \\dfrac{8}{6} = \\dfrac{4}{3}$, $AM : AD = 4 : 7$.<br><br><strong>პასუხი:</strong> დ) $4 : 7$.",
    tags: [],
    area: "geometry",
    topics: ["cevians"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //16
  {
    question: "ყველა იმ წერტილთა სიმრავლე რომლებიც აკმაყოფილებენ $\\{x\\} = \\{y\\}$ ($\\{x\\}$ , $x$-ის წილადი ნაწილია), პირობას, საკოორდინატო სიბრტყეზე წარმოადგენს...",
    options: [
      "პარალელურ წრფეებს",
      "პარალელურ მონაკვეთებს",
      "მართობულ წრფეებს",
      "მართობულ მონაკვეთებს",
      "კვადრატს",
      "რომბს"
    ],
    correct: 0,
    solution: "$\\{x\\} = \\{y\\} \\Leftrightarrow x - y \\in \\mathbb{Z}$, ანუ $y = x + k$, $k \\in \\mathbb{Z}$.<br><br>ეს პარალელური წრფეების ოჯახია.<br><br><strong>პასუხი:</strong> ა) პარალელურ წრფეებს.",
    tags: [],
    area: "algebra",
    topics: ["integer-part","line-circle-eq"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //17
  {
    question: "იპოვეთ $\\dfrac{\\sqrt[3]{4} - \\sqrt[6]{4}}{\\sqrt[3]{2^5} - \\sqrt[3]{16}}$ გამოსახულების მნიშვნელობა.",
    options: [
      "$\\sqrt[3]{2}$",
      "$\\dfrac{1}{2}$",
      "$\\dfrac{\\sqrt[3]{2}}{\\sqrt[6]{2}}$",
      "$\\sqrt[6]{2}$",
      "$\\dfrac{1}{\\sqrt[3]{2}}$",
      "$\\dfrac{\\sqrt[3]{2} + 1}{1 - \\sqrt[3]{2}}$"
    ],
    correct: 1,
    solution: "$\\sqrt[3]{4} - \\sqrt[6]{4} = 2^{2/3} - 2^{1/3} = 2^{1/3}(2^{1/3} - 1)$, $\\sqrt[3]{2^5} - \\sqrt[3]{16} = 2^{5/3} - 2^{4/3} = 2^{4/3}(2^{1/3} - 1)$.<br><br>შეფარდება: $2^{1/3 - 4/3} = \\dfrac{1}{2}$.<br><br><strong>პასუხი:</strong> ბ) $\\dfrac{1}{2}$.",
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

  //18
  {
    question: "ჩამოთვლილთაგან რისი ტოლი იქნება $\\dfrac{b\\sqrt{b} + a\\sqrt{-a}}{\\sqrt{b} - \\sqrt{-a}}$ წილადის გამარტივების შედეგად მიღებული გამოსახულება?",
    options: [
      "$b - a + \\sqrt{-ab}$",
      "$b + a - \\sqrt{ab}$",
      "$\\sqrt{b} - \\sqrt{a}$",
      "$\\sqrt{b} + \\sqrt{-a}$",
      "$b - a$",
      "$b + a$"
    ],
    correct: 0,
    solution: "$b \\ge 0$, $a \\le 0$. აღვნიშნოთ $u = \\sqrt{b}$, $v = \\sqrt{-a}$: $b\\sqrt{b} = u^3$, $a\\sqrt{-a} = -v^3$.<br><br>$\\dfrac{u^3 - v^3}{u - v} = u^2 + uv + v^2 = b + \\sqrt{-ab} - a$.<br><br><strong>პასუხი:</strong> ა) $b - a + \\sqrt{-ab}$.",
    tags: [],
    area: "algebra",
    topics: ["square-roots"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //19
  {
    question: "პარალელოგრამის ყოველი სიმაღლე არ არის იმ გვერდზე ნაკლები, რომლის მიმართ ის არის გავლებული. იპოვეთ პარალელოგრამის დიაგონალებს შორის კუთხე.",
    options: [
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$",
      "$120^\\circ$",
      "შეუძლებელია დადგენა"
    ],
    correct: 3,
    solution: "$h_a = b\\sin\\gamma \\ge a$ და $h_b = a\\sin\\gamma \\ge b$. გადავამრავლოთ: $ab\\sin^2\\gamma \\ge ab$, ამიტომ $\\sin\\gamma = 1$, $\\gamma = 90^\\circ$.<br><br>მაშინ $b \\ge a$ და $a \\ge b$, ანუ $a = b$ — პარალელოგრამი კვადრატია, დიაგონალები მართობულია.<br><br><strong>პასუხი:</strong> დ) $90^\\circ$.",
    tags: [],
    area: "geometry",
    topics: ["parallelogram"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //20
  {
    question: "$ABC$ სამკუთხედში $\\angle B = 90^\\circ$ გავლებულია $BM$ მედიანა. $ABM$ და $BMC$ სამკუთხედებში გავლებულია შესაბამისად $MD$ და $ME$ ბისექტრისები. $DE$ მონაკვეთი $BM$ მედიანას $K$ წერტილში გადაკვეთს. იპოვეთ $ABC$ სამკუთხედის ფართობი, თუ $S_{\\triangle DBK} = 8$.",
    options: ["$16$", "$24$", "$32$", "$48$", "$56$", "$64$"],
    correct: 5,
    solution: "მართკუთხა სამკუთხედში $MA = MB = MC$. ბისექტრისის თვისებით $\\dfrac{AD}{DB} = \\dfrac{MA}{MB} = 1$ — $D$ არის $AB$-ს შუა წერტილი; ანალოგიურად $E$ — $BC$-სი.<br><br>$DE$ შუახაზია, $S_{DBE} = \\dfrac{1}{4}S_{ABC}$, ხოლო $K$ არის $DE$-ს შუა წერტილი (შუახაზი მედიანას შუაზე კვეთს), ამიტომ $S_{DBK} = \\dfrac{1}{8}S_{ABC}$.<br><br>$S_{ABC} = 8 \\cdot 8 = 64$.<br><br><strong>პასუხი:</strong> ვ) $64$.",
    tags: [],
    area: "geometry",
    topics: ["cevians"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  //21
  {
    question: "მოცემულია $f_1(x) = a_1\\sqrt[3]{x^2} + b_1\\sqrt[4]{x^3} + c_1\\sqrt{x}$ და $f_2(x) = a_2\\sqrt[3]{x} + b_2\\sqrt[4]{x}$ ფუნქციები, $a_1; b_1; c_1; a_2; b_2$ რაციონალურ რიცხვებს ვუწოდოთ ფუნქციის კოეფიციენტები. ცნობილია, რომ $a_1 + b_1 + c_1 = 1$ და $a_2 + b_2 = 1$. იპოვეთ $f(x) = f_1(x) \\cdot f_2(x)$ ფუნქციის კოეფიციენტების ჯამი.",
    options: ["$0$", "$1$", "$2$", "$3$", "$8$", "$27$"],
    correct: 1,
    solution: "გამრავლებისას კოეფიციენტები ერთმანეთზე მრავლდება, ამიტომ კოეფიციენტების ჯამი ფუნქციის მნიშვნელობაა $x = 1$-ზე.<br><br>$f(1) = f_1(1) \\cdot f_2(1) = (a_1 + b_1 + c_1)(a_2 + b_2) = 1$.<br><br><strong>პასუხი:</strong> ბ) $1$.",
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

  //22
  {
    question: "თუ $y = \\sqrt{x + 1}$ და $y = x^2 - 1$, სადაც $x > 0$, მაშინ აუცილებლად:",
    options: [
      "$y = x - 1$",
      "$y - x = 1$",
      "$y = 2x$",
      "$y - x = 0$",
      "$y = 2x - 1$",
      "$2y - x = 1$"
    ],
    correct: 3,
    solution: "$\\sqrt{x + 1} = x^2 - 1 = (x - 1)(x + 1)$. ავიყვანოთ კვადრატში და გავყოთ $x + 1 > 0$-ზე: $1 = (x - 1)^2(x + 1)$, $x^3 - x^2 - x = 0$, $x^2 - x - 1 = 0$ ($x > 0$).<br><br>მაშინ $x^2 = x + 1$ და $y = x^2 - 1 = x$.<br><br><strong>პასუხი:</strong> დ) $y - x = 0$.",
    tags: [],
    area: "algebra",
    topics: ["quadratic-ineq","quadratic-func"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //23
  {
    question: "იპოვეთ $|2x^2 + 1 - x^4| + |x^4 - 2x^2 + 2| = 7$ განტოლების ამონახსნთა ნამრავლი.",
    options: ["$12$", "$-14$", "$-3$", "$4$", "$-7$", "$8$"],
    correct: 2,
    solution: "$t = x^4 - 2x^2 \\ge -1$: $|1 - t| + |t + 2| = 7$. $[-2; 1]$-ზე მარცხენა მხარე $3$-ია, ამიტომ $t > 1$: $(t - 1) + (t + 2) = 7$, $t = 3$.<br><br>$x^4 - 2x^2 - 3 = 0$, $x^2 = 3$, $x = \\pm\\sqrt{3}$. ნამრავლი $-3$.<br><br><strong>პასუხი:</strong> გ) $-3$.",
    tags: [],
    area: "algebra",
    topics: ["abs-eq","quadratic-eq"],
    grade: 9,
    difficulty: 3,
    type: ["solve"],
    method: ["absolute"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //24
  {
    question: "$ABCD$ მართკუთხა ტრაპეციაში $AB$ სიმაღლე $BC$ და $AD$ ფუძეების ჯამის ტოლია. $ABC$ კუთხის ბისექტრისა $AD$ გვერდის გაგრძელებას $N$ წერტილში გადაკვეთს. იპოვეთ $ABCD$ ტრაპეციისა და $ABN$ სამკუთხედის ფართობების შეფარდება.",
    options: ["$1 : 2$", "$2 : 1$", "$3 : 2$", "$4 : 1$", "$2 : 3$", "$1 : 1$"],
    correct: 5,
    solution: "$AB \\perp$ ფუძეებს, ამიტომ $\\angle ABC = 90^\\circ$ და ბისექტრისა $AB$-სთან $45^\\circ$-ს ქმნის. $ABN$ ტოლფერდა მართკუთხა სამკუთხედია: $AN = AB$, $S_{ABN} = \\dfrac{AB^2}{2}$.<br><br>$S_{ABCD} = \\dfrac{BC + AD}{2} \\cdot AB = \\dfrac{AB^2}{2}$.<br><br>შეფარდება $1 : 1$.<br><br><strong>პასუხი:</strong> ვ) $1 : 1$.",
    tags: [],
    area: "geometry",
    topics: ["trapezoid","area-ratios"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //25
  {
    question: "ამოზნექილ $ABCD$ ოთკუთხედში $K$ დიაგონალების გადაკვეთის წერტილია. ცნობილია, რომ $S_{\\triangle ABK} = S_{\\triangle DCK} = 1$, $S_{ABCD} \\leq 4$, $AD = 6$. გამოთვალეთ $BC$.",
    options: ["$2$", "$2{,}5$", "$3$", "$4$", "$4{,}5$", "$6$"],
    correct: 5,
    solution: "$S_{ABK} = S_{DCK}$-დან $S_{ABD} = S_{ACD}$, ანუ $B$ და $C$ თანაბრად არიან დაშორებული $AD$-ს, $BC \\parallel AD$.<br><br>$S_{BKC} \\cdot S_{AKD} = S_{ABK} \\cdot S_{DCK} = 1$. თუ $S_{BKC} = x$: $S_{ABCD} = 2 + x + \\dfrac{1}{x} \\ge 4$, ტოლობა $x = 1$-ზე. პირობით $S \\le 4$, ამიტომ $S_{BKC} = S_{AKD}$.<br><br>მსგავსი $BKC$ და $DKA$ სამკუთხედების ფართობები ტოლია, ამიტომ $BC = AD = 6$.<br><br><strong>პასუხი:</strong> ვ) $6$.",
    tags: [],
    area: "algebra",
    topics: ["linear-ineq"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];
