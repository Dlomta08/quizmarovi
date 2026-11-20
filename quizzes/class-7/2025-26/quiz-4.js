quizData = [
  // 1
  {
    question: "რომელი წერტილი ეკუთვნის $f(x) = (1 - x)(x^2 + x + 1)$ ფუნქციის გრაფიკს?",
    options: ["$(0;\\ -1)$", "$(1;\\ -1)$", "$(-2;\\ 11)$", "$(3;\\ 30)$", "$(2;\\ -7)$", "$(2;\\ -11)$"],
    correct: 4,
    tags: [],
    solution: "$f(x) = (1 - x)(x^2 + x + 1) = 1 - x^3$ (კუბების სხვაობის ფორმულა).<br><br>შევამოწმოთ: $f(0) = 1$, $f(1) = 0$, $f(-2) = 9$, $f(3) = -26$, $f(2) = 1 - 8 = -7$. გრაფიკს ეკუთვნის $(2;\\ -7)$.<br><br><strong>პასუხი:</strong> ე) $(2;\\ -7)$.",
    area: "algebra",
    topics: ["function-basics","special-products"],
    grade: 7,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 2
  {
    question: "საკოორდინატო სიბრტყეზე დახაზულია $x + y = 2$ და $2x - y = -5$ წრფეთა გრაფიკები. იპოვეთ მათი გადაკვეთის წერტილის კოორდინატების ნამრავლი.",
    options: ["$1$", "$-2$", "$4$", "$-1$", "$5$", "$-3$"],
    correct: 5,
    tags: [],
    solution: "შევკრიბოთ განტოლებები: $3x = -3$, $x = -1$; მაშინ $y = 2 - x = 3$.<br><br>კოორდინატების ნამრავლი: $-1 \\cdot 3 = -3$.<br><br><strong>პასუხი:</strong> ვ) $-3$.",
    area: "algebra",
    topics: ["linear-systems","linear-func"],
    grade: 7,
    difficulty: 1,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 3
  {
    question: "იპოვეთ $OY$ ღერძის და იმ წრფის გადაკვეთის წერტილის კოორდინატები, რომელიც გადის $A(-1;\\ 3)$ და $B(2;\\ 0)$ წერტილებზე.",
    options: ["$(1;\\ 0)$", "$(0;\\ -2)$", "$(0;\\ 2)$", "$(0;\\ -3)$", "$(0;\\ 1)$", "$(0;\\ -1)$"],
    correct: 2,
    tags: [],
    solution: "წრფე $y = kx + b$: $k = \\dfrac{0 - 3}{2 - (-1)} = -1$. $B(2;\\ 0)$-დან: $0 = -2 + b$, $b = 2$. წრფეა $y = -x + 2$.<br><br>$OY$ ღერძთან ($x = 0$) გადაკვეთა: $(0;\\ 2)$.<br><br><strong>პასუხი:</strong> გ) $(0;\\ 2)$.",
    area: "algebra",
    topics: ["linear-func"],
    grade: 7,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 4
  {
    question: "სიბრტყეზე დახაზულია ორი წრეწირი, რომელთა რადიუსები $7$-ის და $2$-ის ტოლია. ჩამოთვლილთაგან რისი ტოლი არ შეიძლება იყოს ამ ორი წრეწირის ცენტრებს შორის მანძილი, თუ მათ ერთი საერთო წერტილი მაინც აქვთ?",
    options: ["$5$", "$6{,}2$", "$8$", "$7{,}5$", "$9$", "$4{,}5$"],
    correct: 5,
    tags: [],
    solution: "ორ წრეწირს საერთო წერტილი აქვს მაშინ და მხოლოდ მაშინ, როცა ცენტრებს შორის მანძილი $d$ აკმაყოფილებს $R - r \\le d \\le R + r$, ანუ $5 \\le d \\le 9$.<br><br>$4{,}5 < 5$, ამიტომ ეს მანძილი შეუძლებელია.<br><br><strong>პასუხი:</strong> ვ) $4{,}5$.",
    area: "geometry",
    topics: ["chords-tangents"],
    grade: 7,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 5
  {
    question: "მართკუთხა სამკუთხედში ჩახაზული და შემოხაზული წრეწირების რადიუსები შესაბამისად $7$-ის და $13$-ის ტოლია. იპოვეთ ამ სამკუთხედის კათეტების ჯამი.",
    options: ["$40$", "$36$", "$42$", "$39$", "$20$", "$41$"],
    correct: 0,
    tags: [],
    solution: "მართკუთხა სამკუთხედში შემოხაზული წრეწირის ცენტრი ჰიპოტენუზის შუაწერტილია: $c = 2R = 26$.<br><br>ჩახაზული წრეწირის რადიუსი: $r = \\dfrac{a + b - c}{2}$ (შეხების წერტილებამდე მანძილების თვისებით). $7 = \\dfrac{a + b - 26}{2}$, საიდანაც $a + b = 40$.<br><br><strong>პასუხი:</strong> ა) $40$.",
    area: "geometry",
    topics: ["inscribed-circum","right-triangle"],
    grade: 7,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 6
  {
    question: "წრფივი ფუნქცია მოცემულია ცხრილის სახით:<br><table style=\"border-collapse:collapse;margin:.5rem 0;text-align:center\"><tr><td style=\"border:1px solid currentColor;padding:.25rem .75rem\">$x$</td><td style=\"border:1px solid currentColor;padding:.25rem .75rem\">$0$</td><td style=\"border:1px solid currentColor;padding:.25rem .75rem\">$2$</td><td style=\"border:1px solid currentColor;padding:.25rem .75rem\">$-1$</td></tr><tr><td style=\"border:1px solid currentColor;padding:.25rem .75rem\">$f(x)$</td><td style=\"border:1px solid currentColor;padding:.25rem .75rem\">$1$</td><td style=\"border:1px solid currentColor;padding:.25rem .75rem\">$7$</td><td style=\"border:1px solid currentColor;padding:.25rem .75rem\">$-2$</td></tr></table>იპოვეთ ამ ფუნქციის გრაფიკის $Ox$ ღერძთან გადაკვეთის წერტილის კოორდინატები.",
    options: ["$(1;\\ 0)$", "$\\left(-\\dfrac{1}{3};\\ 0\\right)$", "$(-1;\\ 0)$", "$\\left(\\dfrac{1}{2};\\ 0\\right)$", "$(2;\\ 0)$", "$\\left(-\\dfrac{1}{2};\\ 0\\right)$"],
    correct: 1,
    tags: [],
    solution: "$f(x) = kx + b$. $f(0) = 1$, ამიტომ $b = 1$; $f(2) = 7$: $2k + 1 = 7$, $k = 3$. შემოწმება: $f(-1) = -3 + 1 = -2$.<br><br>$Ox$ ღერძთან გადაკვეთა: $3x + 1 = 0$, $x = -\\dfrac{1}{3}$.<br><br><strong>პასუხი:</strong> ბ) $\\left(-\\dfrac{1}{3};\\ 0\\right)$.",
    area: "algebra",
    topics: ["linear-func"],
    grade: 7,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 7
  {
    question: "იპოვეთ, რა ნაშთს მოგვცემს $987654321$ ცხრანიშნა რიცხვი $11$-ზე გაყოფისას.",
    options: ["$1$", "$3$", "$5$", "$7$", "$8$", "$9$"],
    correct: 2,
    tags: [],
    solution: "$11$-ზე გაყოფის ნიშანი: რიცხვი და მისი ციფრების მონაცვლეობითი ჯამი (ბოლოდან) $11$-ზე გაყოფისას ერთსა და იმავე ნაშთს იძლევა.<br><br>$1 - 2 + 3 - 4 + 5 - 6 + 7 - 8 + 9 = 5$.<br><br><strong>პასუხი:</strong> გ) $5$.",
    area: "algebra",
    topics: ["divisibility"],
    grade: 7,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 8
  {
    question: "თუ $A(x_1;\\ y_1)$ წერტილი საკოორდინატო სიბრტყის მეორე მეოთხედში მდებარეობს, მაშინ $B(7 - x_1;\\ -y_1 - 13)$ წერტილი რომელ მეოთხედში მდებარეობს?",
    options: ["I", "II", "III", "IV", "I ან II", "II ან III"],
    correct: 3,
    tags: [],
    solution: "მეორე მეოთხედში $x_1 < 0$, $y_1 > 0$.<br><br>$7 - x_1 > 7 > 0$ და $-y_1 - 13 < 0$. დადებითი აბსცისა და უარყოფითი ორდინატა — IV მეოთხედი.<br><br><strong>პასუხი:</strong> დ) IV.",
    area: "algebra",
    topics: ["function-basics"],
    grade: 7,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 9
  {
    question: "რას უდრის $AO$ და $BO$ წრფეებს შორის კუთხე, თუ $\\angle C = 110^\\circ$, ხოლო $O$ წერტილი $ABC$ სამკუთხედში ჩახაზული წრეწირის ცენტრია?",
    options: ["$65^\\circ$", "$45^\\circ$", "$25^\\circ$", "$35^\\circ$", "$70^\\circ$", "$55^\\circ$"],
    correct: 3,
    tags: [],
    solution: "$\\angle A + \\angle B = 180^\\circ - 110^\\circ = 70^\\circ$. $O$ ბისექტრისების გადაკვეთის წერტილია, ამიტომ $AOB$ სამკუთხედში $\\angle OAB + \\angle OBA = 35^\\circ$ და $\\angle AOB = 145^\\circ$.<br><br>წრფეებს შორის კუთხე მახვილი კუთხეა: $180^\\circ - 145^\\circ = 35^\\circ$.<br><br><strong>პასუხი:</strong> დ) $35^\\circ$.",
    area: "geometry",
    topics: ["inscribed-circum","cevians"],
    grade: 7,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 10 (the original has a small sketch of the circle with points M, N, K)
  {
    question: "წრეწირზე აღებულია $M$, $N$ და $K$ წერტილები ისე, რომ $\\overset{\\frown}{MN} : \\overset{\\frown}{NK} : \\overset{\\frown}{MK} = 1 : 2 : 3$, ხოლო $MN + MK = 9{,}6$. იპოვეთ წრეწირის დიამეტრი.",
    options: ["$7{,}2$", "$4{,}8$", "$9{,}6$", "$2{,}4$", "$3{,}6$", "$6{,}4$"],
    correct: 5,
    tags: [],
    solution: "რკალები $1 : 2 : 3$ შეფარდებით: $60^\\circ$, $120^\\circ$, $180^\\circ$. მაშასადამე, $MK$ დიამეტრია ($\\overset{\\frown}{MK} = 180^\\circ$).<br><br>ჩახაზული კუთხეები: $\\angle MKN = \\dfrac{60^\\circ}{2} = 30^\\circ$, $\\angle MNK = 90^\\circ$. მართკუთხა $MNK$ სამკუთხედში $30^\\circ$-ის მოპირდაპირე კათეტი $MN = \\dfrac{MK}{2}$.<br><br>$MN + MK = \\dfrac{3}{2}MK = 9{,}6$, $MK = 6{,}4$.<br><br><strong>პასუხი:</strong> ვ) $6{,}4$.",
    area: "geometry",
    topics: ["circle-angles"],
    grade: 7,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 11
  {
    question: "$y = kx + b$ არის წრფივი ფუნქცია, რომლის გრაფიკი მართობულია $A(5;\\ -4)$ და $B(-7;\\ 2)$ წერტილებზე გამავალი წრფის. იპოვეთ $k$-ს მნიშვნელობა.",
    options: ["$2$", "$1$", "$-0{,}5$", "$3$", "$-1$", "$0{,}5$"],
    correct: 0,
    tags: [],
    solution: "$AB$ წრფის კუთხური კოეფიციენტი: $\\dfrac{2 - (-4)}{-7 - 5} = -\\dfrac{1}{2}$.<br><br>მართობული წრფეების კუთხური კოეფიციენტების ნამრავლი $-1$-ია: $k \\cdot \\left(-\\dfrac{1}{2}\\right) = -1$, $k = 2$.<br><br><strong>პასუხი:</strong> ა) $2$.",
    area: "algebra",
    topics: ["linear-func"],
    grade: 7,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 12
  {
    question: "$a$ ისეთი ნატურალური რიცხვია, რომ $a^2 + 20a + 107$ უნაშთოდ იყოფა $7$-ზე. იპოვეთ, რა ნაშთს მოგვცემს $a$ რიცხვი $7$-ზე გაყოფისას.",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 3,
    tags: [],
    solution: "$20 = 21 - 1$ და $107 = 105 + 2$, ამიტომ $a^2 + 20a + 107$ და $a^2 - a + 2$ ერთსა და იმავე ნაშთს იძლევა $7$-ზე გაყოფისას.<br><br>შევამოწმოთ $a$-ს ნაშთები $r = 0, 1, \\ldots, 6$: $r^2 - r + 2 = 2, 2, 4, 8, 14, 22, 32$. $7$-ზე იყოფა მხოლოდ $14$ ($r = 4$).<br><br><strong>პასუხი:</strong> დ) $4$.",
    area: "algebra",
    topics: ["divisibility"],
    grade: 7,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 13
  {
    question: "$y = kx + b$ არის წრფივი ფუნქცია, რომლის გრაფიკი გადის $y = x - 5$ და $y = -2x + 1$ წრფივი ფუნქციების გადაკვეთის წერტილზე და $4x - y = 1$ განტოლებით მოცემული ფუნქციის გრაფიკის პარალელურია. იპოვეთ $b$-ს მნიშვნელობა.",
    options: ["$-7$", "$2$", "$-9$", "$1$", "$-11$", "$8$"],
    correct: 4,
    tags: [],
    solution: "გადაკვეთის წერტილი: $x - 5 = -2x + 1$, $x = 2$, $y = -3$.<br><br>$4x - y = 1 \\Leftrightarrow y = 4x - 1$; პარალელური წრფეებისთვის $k = 4$.<br><br>$-3 = 4 \\cdot 2 + b$, $b = -11$.<br><br><strong>პასუხი:</strong> ე) $-11$.",
    area: "algebra",
    topics: ["linear-func"],
    grade: 7,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 14
  {
    question: "ქორდა წრეწირს ყოფს $4 : 11$ შეფარდებით. იპოვეთ ამ ქორდის ბოლოებზე გავლებულ მხებებს შორის კუთხის გრადუსული ზომა.",
    options: ["$66^\\circ$", "$48^\\circ$", "$72^\\circ$", "$88^\\circ$", "$56^\\circ$", "$84^\\circ$"],
    correct: 5,
    tags: [],
    solution: "ქორდა წრეწირს ყოფს $\\dfrac{4}{15} \\cdot 360^\\circ = 96^\\circ$-იან და $264^\\circ$-იან რკალებად.<br><br>ქორდის ბოლოებზე გავლებული მხებები და რადიუსები ქმნიან ოთხკუთხედს, რომელშიც ორი კუთხე მართია, ხოლო ცენტრთან კუთხე $96^\\circ$-ია. მხებებს შორის კუთხე: $360^\\circ - 90^\\circ - 90^\\circ - 96^\\circ = 84^\\circ$.<br><br><strong>პასუხი:</strong> ვ) $84^\\circ$.",
    area: "geometry",
    topics: ["chords-tangents","circle-angles"],
    grade: 7,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 15
  {
    question: "წრეწირის დიამეტრს ამავე წრეწირის ქორდა $A$ წერტილში გადაკვეთს $60^\\circ$-იანი კუთხით და მათი გადაკვეთის წერტილით ეს ქორდა $6$-ის და $10$-ის ტოლი სიგრძის მონაკვეთებად იყოფა. იპოვეთ წრეწირის ცენტრიდან $A$ წერტილამდე მანძილი.",
    options: ["$2{,}4$", "$3$", "$4$", "$6{,}4$", "$8$", "$10$"],
    correct: 2,
    tags: [],
    solution: "ქორდის სიგრძეა $6 + 10 = 16$. ცენტრიდან ქორდაზე დაშვებული მართობი $OH$ ქორდას შუაზე ყოფს, ამიტომ ქორდის შუაწერტილიდან $A$-მდე მანძილი $AH = 8 - 6 = 2$.<br><br>$OHA$ მართკუთხა სამკუთხედში $\\angle OAH = 60^\\circ$, ე.ი. $\\angle AOH = 30^\\circ$ და $AH = \\dfrac{OA}{2}$. აქედან $OA = 4$.<br><br><strong>პასუხი:</strong> გ) $4$.",
    area: "geometry",
    topics: ["chords-tangents"],
    grade: 7,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 16
  {
    question: "<strong>მეოთხე</strong> მეოთხედში მდებარე $A(2a + b;\\ 3b - a)$ წერტილი $Ox$ და $Oy$ ღერძებიდან თანაბარ მანძილზეა დაშორებული. რას უდრის $a + b$, თუ ეს დაშორება $7$-ის ტოლია?",
    options: ["$-2$", "$3$", "$0$", "$2$", "$-5$", "$1$"],
    correct: 1,
    tags: [],
    solution: "IV მეოთხედში $x > 0$, $y < 0$; ღერძებიდან მანძილი $7$-ია, ამიტომ $x = 7$, $y = -7$.<br><br>$2a + b = 7$ და $3b - a = -7$. მეორიდან $a = 3b + 7$; ჩავსვათ: $6b + 14 + b = 7$, $b = -1$, $a = 4$.<br><br>$a + b = 3$.<br><br><strong>პასუხი:</strong> ბ) $3$.",
    area: "algebra",
    topics: ["function-basics"],
    grade: 7,
    difficulty: 2,
    type: ["compute"],
    method: ["absolute"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 17
  {
    question: "ცნობილია, რომ $\\dfrac{n - 13}{3n + 8}$ წილადი $n$-ის რომელიღაც ნატურალური მნიშვნელობებისთვის $m$ ნატურალურ რიცხვზე იკვეცება ($m \\ne 1$). რისი ტოლი შეიძლება იყოს $m$ რიცხვის ციფრთა ჯამი?",
    options: ["$11$", "$9$", "$12$", "$8$", "$13$", "$7$"],
    correct: 0,
    tags: [],
    solution: "თუ $m$ ყოფს $n - 13$-ს და $3n + 8$-ს, მაშინ ყოფს $(3n + 8) - 3(n - 13) = 47$-საც. $47$ მარტივია, ამიტომ $m = 47$ (მაგალითად, $n = 13 + 47 = 60$: $\\dfrac{47}{188} = \\dfrac{1}{4}$).<br><br>ციფრთა ჯამი: $4 + 7 = 11$.<br><br><strong>პასუხი:</strong> ა) $11$.",
    area: "algebra",
    topics: ["divisibility"],
    grade: 7,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 18 (options ა and ე are the same in the original)
  {
    question: "თუ $y = kx + b$ წრფივი ფუნქციის კოეფიციენტებისთვის $k \\cdot b > 0$, მაშინ რომელ მეოთხედებში გაივლის აუცილებლად მისი გრაფიკი?",
    options: ["I და III", "II და IV", "I და IV", "II და III", "I და III", "III და IV"],
    correct: 3,
    tags: [],
    solution: "$k \\cdot b > 0$ ნიშნავს, რომ $k$ და $b$ ერთი ნიშნისაა.<br><br>$k > 0$, $b > 0$: გრაფიკი გადის I, II, III მეოთხედებში.<br>$k < 0$, $b < 0$: გრაფიკი გადის II, III, IV მეოთხედებში.<br><br>ორივე შემთხვევაში აუცილებლად გადის II და III მეოთხედებში.<br><br><strong>პასუხი:</strong> დ) II და III.",
    area: "algebra",
    topics: ["linear-func"],
    grade: 7,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 19
  {
    question: "$ABC$ მახვილკუთხა სამკუთხედში $AC$ გვერდი სამკუთხედზე შემოხაზული წრეწირის ცენტრიდან მოჩანს $140^\\circ$-იანი კუთხით. იპოვეთ, რა კუთხით ჩანს ეს გვერდი ამავე სამკუთხედში ჩახაზული წრეწირის ცენტრიდან.",
    options: ["$140^\\circ$", "$135^\\circ$", "$125^\\circ$", "$160^\\circ$", "$110^\\circ$", "$105^\\circ$"],
    correct: 2,
    tags: [],
    solution: "სამკუთხედი მახვილკუთხაა, ამიტომ შემოხაზული წრეწირის ცენტრი სამკუთხედის შიგნითაა და ცენტრალური კუთხე ჩახაზულზე ორჯერ მეტია: $\\angle B = \\dfrac{140^\\circ}{2} = 70^\\circ$.<br><br>ჩახაზული წრეწირის ცენტრი $I$ ბისექტრისების გადაკვეთაა: $\\angle AIC = 180^\\circ - \\dfrac{\\angle A + \\angle C}{2} = 180^\\circ - \\dfrac{110^\\circ}{2} = 125^\\circ$.<br><br><strong>პასუხი:</strong> გ) $125^\\circ$.",
    area: "geometry",
    topics: ["inscribed-circum","circle-angles"],
    grade: 7,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 20
  {
    question: "$ABC$ მართკუთხა სამკუთხედში $AB = 10$, $BC = 6$ და $AC = 8$. ამ სამკუთხედში ჩახაზული წრეწირის მხები კვეთს სამკუთხედის $AB$ და $AC$ გვერდებს შესაბამისად $M$ და $K$ წერტილებში. იპოვეთ $AMK$ სამკუთხედის პერიმეტრი.",
    options: ["$9$", "$12$", "$15$", "$16$", "$18$", "$21$"],
    correct: 1,
    tags: [],
    solution: "$A$ წვეროდან ჩახაზულ წრეწირამდე გავლებული მხებების სიგრძეა $p - BC$, სადაც $p = \\dfrac{10 + 6 + 8}{2} = 12$ ნახევარპერიმეტრია: $12 - 6 = 6$.<br><br>$MK$ მხები წრეწირს ეხება $T$ წერტილში: $MT = M$-დან $AB$-ზე შეხების წერტილამდე მანძილს, $KT = K$-დან $AC$-ზე შეხების წერტილამდე მანძილს. ამიტომ $AM + MK + KA = (AM + MT) + (TK + KA) = 6 + 6 = 12$.<br><br><strong>პასუხი:</strong> ბ) $12$.",
    area: "geometry",
    topics: ["inscribed-circum"],
    grade: 7,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 21
  {
    question: "$A$ და $B$ ქალაქებიდან ერთმანეთის შესახვედრად ერთდროულად გამოვიდა ორი ავტომობილი და ერთმანეთს შეხვდა $5$ საათის შემდეგ. თუ $A$-დან გამოსული ავტომობილის სიჩქარე იქნებოდა $30\\%$-ით მეტი, ხოლო $B$-დან გამოსულის $15\\%$-ით მეტი, მაშინ შეხვედრა მოხდებოდა $4$ საათის შემდეგ. რომელი ავტომობილის სიჩქარეა მეტი და რამდენჯერ?",
    options: ["$B$-დან გამოსულის, $1{,}2$-ჯერ", "$A$-დან გამოსულის, $1{,}5$-ჯერ", "$B$-დან გამოსულის, $2$-ჯერ", "$A$-დან გამოსულის, $2$-ჯერ", "$B$-დან გამოსულის, $2{,}5$-ჯერ", "$A$-დან გამოსულის, $1{,}2$-ჯერ"],
    correct: 3,
    tags: [],
    solution: "ვთქვათ, სიჩქარეებია $u$ ($A$-დან) და $v$ ($B$-დან). მანძილი: $5(u + v) = 4(1{,}3u + 1{,}15v)$.<br><br>$5u + 5v = 5{,}2u + 4{,}6v$, $0{,}4v = 0{,}2u$, $u = 2v$.<br><br><strong>პასუხი:</strong> დ) $A$-დან გამოსულის, $2$-ჯერ.",
    area: "algebra",
    topics: ["word-problems"],
    grade: 7,
    difficulty: 3,
    type: ["word"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 22
  {
    question: "რამდენი ორნიშნა $N$ ნატურალური რიცხვი არსებობს, რომელთათვისაც $(N^3 - N)$ იყოფა $150$-ზე?",
    options: ["$5$", "$11$", "$7$", "$12$", "$8$", "$10$"],
    correct: 5,
    tags: [],
    solution: "$N^3 - N = (N - 1)N(N + 1)$ — სამი მომდევნო რიცხვის ნამრავლი, ის ყოველთვის იყოფა $2$-ზე და $3$-ზე. $150 = 6 \\cdot 25$, ამიტომ საჭიროა $25$-ზე გაყოფა.<br><br>სამი მომდევნო რიცხვიდან მხოლოდ ერთი შეიძლება იყოფოდეს $5$-ზე, ამიტომ ერთ-ერთი მათგანი უნდა იყოფოდეს $25$-ზე: $N - 1$, $N$ ან $N + 1$ არის $25$-ის ჯერადი.<br><br>ორნიშნა $N$: $24, 25, 26, 49, 50, 51, 74, 75, 76, 99$ — სულ $10$.<br><br><strong>პასუხი:</strong> ვ) $10$.",
    area: "algebra",
    topics: ["divisibility"],
    grade: 7,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 23
  {
    question: "იპოვეთ $3x + 5y = 11$ განტოლების მთელ ამონახსნთა $(x;\\ y)$ იმ წყვილების რაოდენობა, რომელთა ნამრავლის მოდული $15$-ს არ აღემატება.",
    options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
    correct: 2,
    tags: [],
    solution: "ერთ-ერთი ამონახსნია $(2;\\ 1)$. ყველა მთელი ამონახსნი: $x = 2 + 5t$, $y = 1 - 3t$, $t \\in \\mathbb{Z}$.<br><br>$t = 0$: $(2;\\ 1)$, $|xy| = 2$ ✓;<br>$t = -1$: $(-3;\\ 4)$, $|xy| = 12$ ✓;<br>$t = 1$: $(7;\\ -2)$, $|xy| = 14$ ✓;<br>$t = -2$: $(-8;\\ 7)$, $|xy| = 56$; $t = 2$: $(12;\\ -5)$, $|xy| = 60$; შემდეგ $|xy|$ კიდევ იზრდება.<br><br>სულ $3$ წყვილი.<br><br><strong>პასუხი:</strong> გ) $3$.",
    area: "algebra",
    topics: ["diophantine"],
    grade: 7,
    difficulty: 3,
    type: ["solve"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 24
  {
    question: "წრეწირზე აღებულია $A$, $B$, $C$ და $D$ წერტილები ისე, რომ $AB$ და $CD$ ქორდები $M$ წერტილში იკვეთებიან და $AC$ და $BD$ რკალები ტოლია. იპოვეთ $AB$ ქორდის სიგრძე, თუ $\\angle AMD = 120^\\circ$, $MC = 6$ და $M$ წერტილიდან $AD$ ქორდამდე მანძილი $8$-ის ტოლია.",
    options: ["$18$", "$24$", "$28$", "$20$", "$22$", "$16$"],
    correct: 4,
    tags: [],
    solution: "$\\overset{\\frown}{AC} = \\overset{\\frown}{BD}$, ამიტომ ამ რკალებზე დაყრდნობილი ჩახაზული კუთხეები ტოლია: $\\angle ADC = \\angle DAB$, ე.ი. $AMD$ სამკუთხედში $\\angle MDA = \\angle MAD$ და $MA = MD$. ანალოგიურად $\\angle MCB = \\angle MBC$ და $MB = MC = 6$.<br><br>$AMD$ ტოლფერდა სამკუთხედში $\\angle M = 120^\\circ$, ფუძესთან კუთხეები $30^\\circ$-ია. $M$-დან $AD$-მდე მანძილი (სიმაღლე) $8$-ია, ის $30^\\circ$-ის მოპირდაპირე კათეტია, ამიტომ $MA = 16$.<br><br>$AB = AM + MB = 16 + 6 = 22$.<br><br><strong>პასუხი:</strong> ე) $22$.",
    area: "geometry",
    topics: ["circle-angles","chords-tangents"],
    grade: 7,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  // 25
  {
    question: "ორი არატოლი წრეწირი ერთმანეთს გარედან ეხება $A$ წერტილში. მცირე წრეწირის $B$ წერტილში გავლებული მხები მეორე წრეწირს გადაკვეთს $C$ და $D$ წერტილებში ($C \\in BD$). იპოვეთ $\\angle CAD$, თუ $\\angle CAB = 68^\\circ$.",
    options: ["$48^\\circ$", "$54^\\circ$", "$22^\\circ$", "$44^\\circ$", "$62^\\circ$", "$32^\\circ$"],
    correct: 3,
    tags: [],
    solution: "გავავლოთ წრეწირების საერთო მხები $A$ წერტილში; ის $BD$ წრფეს კვეთს $T$ წერტილში ($B$-სა და $C$-ს შორის). $TA = TB$ (ერთი წერტილიდან მცირე წრეწირზე გავლებული მხებები), ამიტომ $\\angle TAB = \\angle TBA$.<br><br>დიდ წრეწირში მხებსა და ქორდას შორის კუთხე ჩახაზული კუთხის ტოლია: $\\angle TAC = \\angle ADC$.<br><br>მაშასადამე, $\\angle BAC = \\angle TAB + \\angle TAC = \\angle ABD + \\angle ADB$.<br><br>$ABD$ სამკუთხედში: $\\angle ABD + \\angle ADB + \\angle BAD = 180^\\circ$, ანუ $\\angle BAC + (\\angle BAC + \\angle CAD) = 180^\\circ$.<br><br>$\\angle CAD = 180^\\circ - 2 \\cdot 68^\\circ = 44^\\circ$.<br><br><strong>პასუხი:</strong> დ) $44^\\circ$.",
    area: "geometry",
    topics: ["chords-tangents","circle-angles"],
    grade: 7,
    difficulty: 3,
    type: ["compute"],
    method: ["aux-construct"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  }
];
