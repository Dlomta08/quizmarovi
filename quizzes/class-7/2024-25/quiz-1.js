quizData = [
//1
{
  question: "ცნობილია, რომ $x = 7n + 3$ ($n$ რაიმე ნატურალური რიცხვია). რა ნაშთს მოგვცემს $7$-ზე გაყოფისას $3x - 5$?",
  options: ["$1$", "$2$", "$3$", "$4$", "$5$", "$6$"],
  correct: 3,
  solution: "$3x - 5 = 3(7n + 3) - 5 = 21n + 4 = 7 \\cdot 3n + 4$.<br><br>$7 \\cdot 3n$ იყოფა $7$-ზე, ამიტომ ნაშთი $4$-ია.<br><br><strong>პასუხი:</strong> დ) $4$.",
  tags: [],
  area: "algebra",
  topics: ["divisibility"],
  grade: 7,
  difficulty: 1,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//2
{
  question: "$AB$ მონაკვეთის შიგნით აღებულია $C$ წერტილი. $K$ წერტილი ისეა აღებული $AC$-ს შიგნით, რომ $AK$ ორჯერ მეტია $KC$-ზე. $P$ წერტილი კი ისეა აღებული $CB$-ს შიგნით, რომ $PB$ ორჯერ მეტია $CP$-ზე. რისი ტოლია $AB$ მონაკვეთის სიგრძე, თუ $KP = 4$ მ?",
  options: ["$4$ მ", "$6\\text{ მ}$", "$8\\text{ მ}$", "$10\\text{ მ}$", "$12\\text{ მ}$", "$14\\text{ მ}$"],
  correct: 4,
  solution: "$AK = 2KC$, ამიტომ $KC = \\dfrac{AC}{3}$. $PB = 2CP$, ამიტომ $CP = \\dfrac{CB}{3}$.<br><br>$KP = KC + CP = \\dfrac{AC + CB}{3} = \\dfrac{AB}{3} = 4$, საიდანაც $AB = 12$ მ.<br><br><strong>პასუხი:</strong> ე) $12$ მ.",
  tags: [],
  area: "algebra",
  topics: [],
  grade: 7,
  difficulty: 1,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//3
{
  question: "$BK$ წარმოადგენს $ABC$ კუთხის ბისექტრისას. $BD$ კი $KBC$ კუთხის ბისექტრისაა. რისი ტოლია $DBC$ კუთხის გრადუსული ზომა, თუ $ABD$ მართი კუთხეა?",
  options: ["$30°$", "$45°$", "$60°$", "$90°$", "$50°$", "$15°$"],
  correct: 0,
  solution: "ვთქვათ, $\\angle ABK = \\angle KBC = \\beta$. მაშინ $\\angle KBD = \\angle DBC = \\dfrac{\\beta}{2}$.<br><br>$\\angle ABD = \\beta + \\dfrac{\\beta}{2} = \\dfrac{3\\beta}{2} = 90^\\circ$, საიდანაც $\\beta = 60^\\circ$ და $\\angle DBC = 30^\\circ$.<br><br><strong>პასუხი:</strong> ა) $30°$.",
  tags: [],
  area: "geometry",
  topics: ["cevians"],
  grade: 7,
  difficulty: 1,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//4
{
  question: "ცნობილია, რომ $a ∎ b = \\dfrac{3a - 2b}{a + b}$. რისი ტოლია $(1 ∎ 0) ∎ 1$ გამოსახულების მნიშვნელობა?",
  options: ["$0{,}25$", "$0{,}5$", "$1{,}75$", "$1{,}25$", "$1$", "$2$"],
  correct: 2,
  solution: "$1 ∎ 0 = \\dfrac{3 \\cdot 1 - 0}{1 + 0} = 3$.<br><br>$3 ∎ 1 = \\dfrac{3 \\cdot 3 - 2 \\cdot 1}{3 + 1} = \\dfrac{7}{4} = 1{,}75$.<br><br><strong>პასუხი:</strong> გ) $1{,}75$.",
  tags: [],
  area: "algebra",
  topics: [],
  grade: 7,
  difficulty: 1,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//5
{
  question: "მოცემულია სამი სიმრავლე $A = \\{1; 2; 3; 4; 5\\}$, $B = \\{2; 4; 6; 8\\}$, $C = \\{0; 3; 6\\}$. რამდენ ელემენტიანია $(A \\Delta B) \\Delta C$ სიმრავლე? (სადაც $\\Delta$-ით აღნიშნულია სიმრავლეთა სიმეტრიული სხვაობა: $K \\Delta P = (K \\cup P) \\setminus (K \\cap P))$",
  options: ["$0$", "$1$", "$2$", "$3$", "$4$", "$5$"],
  correct: 4,
  solution: "$A \\cup B = \\{1; 2; 3; 4; 5; 6; 8\\}$, $A \\cap B = \\{2; 4\\}$, ამიტომ $A \\Delta B = \\{1; 3; 5; 6; 8\\}$.<br><br>$(A \\Delta B) \\cup C = \\{0; 1; 3; 5; 6; 8\\}$, $(A \\Delta B) \\cap C = \\{3; 6\\}$, ამიტომ $(A \\Delta B) \\Delta C = \\{0; 1; 5; 8\\}$ — $4$ ელემენტი.<br><br><strong>პასუხი:</strong> ე) $4$.",
  tags: [],
  area: "algebra",
  topics: ["sets"],
  grade: 7,
  difficulty: 1,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},
//6
{
  question: "$A$ ნატურალური რიცხვისთვის ცნობილია, რომ $A$ ⋮ $4$, $A$ ⋮ $9$, $A$ ⋮ $6$, $A$ ⋮ $12$ და $A$ ⋮ $18$. ჩამოთვლილთაგან რაზე გაიყოფა აუცილებლად უნაშთოდ $A$? ($M$ ⋮ $N$ ჩანაწერი გულისხმობს, რომ $M$ უნაშთოდ იყოფა $N$-ზე)",
  options: ["$48$", "$24$", "$108$", "$72$", "$216$", "$36$"],
  correct: 5,
  solution: "$A$ იყოფა ყველა მოცემულ რიცხვზე, ანუ მათ უმცირეს საერთო ჯერადზე: უ.ს.ჯ.$(4; 9; 6; 12; 18) = 36$.<br><br>დანარჩენ რიცხვებზე ($48, 24, 108, 72, 216$) გაყოფა აუცილებელი არ არის: მაგალითად, $A = 36$ არცერთ მათგანზე არ იყოფა.<br><br><strong>პასუხი:</strong> ვ) $36$.",
  tags: [],
  area: "algebra",
  topics: ["divisibility"],
  grade: 7,
  difficulty: 1,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//7
{
  question: "ორი პარალელური წრფის მესამეთი გადაკვეთისას მიღებული რვა კუთხიდან (არ იგულისხმება გაშლილი, ნულის ზომის ან გაშლილზე დიდი ზომის კუთხეები) რომელიღაც ორის ჯამი $160^\\circ$-ია. რისი ტოლია ამ რვა კუთხიდან უდიდესის ზომა?",
  options: ["$160^\\circ$", "$100^\\circ$", "$120^\\circ$", "$90^\\circ$", "$80^\\circ$", "$110^\\circ$"],
  correct: 1,
  solution: "რვა კუთხიდან ყველა უდრის ან $\\alpha$-ს, ან $180^\\circ - \\alpha$-ს. სხვადასხვა ზომის ორი კუთხის ჯამი $180^\\circ$-ია, ამიტომ $160^\\circ$ მიიღება მხოლოდ ორი ტოლი კუთხის ჯამად: $2\\alpha = 160^\\circ$, $\\alpha = 80^\\circ$.<br><br>დანარჩენი კუთხეები $180^\\circ - 80^\\circ = 100^\\circ$-ია, ესაა უდიდესი.<br><br><strong>პასუხი:</strong> ბ) $100^\\circ$.",
  tags: [],
  area: "geometry",
  topics: ["parallel-lines"],
  grade: 7,
  difficulty: 1,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//8
{
  question: "$AB$ მონაკვეთის შიგნით აღებულია $C$ და $D$ წერტილი ისე, რომ $AC : CB = 2 : 5$ და $AD : DB = 6 : 11$. რისი ტოლია $AB$-ს სიგრძე, თუ $CD$-ს სიგრძეა $8$?",
  options: ["$132$", "$120$", "$196$", "$119$", "$199$", "$148$"],
  correct: 3,
  solution: "$AC = \\dfrac{2}{7}AB$, $AD = \\dfrac{6}{17}AB$.<br><br>$CD = AD - AC = \\left(\\dfrac{6}{17} - \\dfrac{2}{7}\\right)AB = \\dfrac{42 - 34}{119}AB = \\dfrac{8}{119}AB = 8$, საიდანაც $AB = 119$.<br><br><strong>პასუხი:</strong> დ) $119$.",
  tags: [],
  area: "algebra",
  topics: ["proportion"],
  grade: 7,
  difficulty: 1,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//9
{
  question: "ნებისმიერი $a$ და $b$ განსხვავებული ნატურალური რიცხვებისათვის ($a > b$), რომელი ტოლობაა აუცილებლად ჭეშმარიტი?",
  options: [
    "უ.ს.გ.$(a; b) =$ უ.ს.გ.$(2a; b)$",
    "უ.ს.გ.$(a; b) =$ უ.ს.გ.$(a; 3b)$",
    "უ.ს.გ.$(a; b) =$ უ.ს.გ.$(2a; 3b)$",
    "უ.ს.გ.$(a; b) =$ უ.ს.გ.$(a - b; b)$",
    "უ.ს.გ.$(a; b) =$ უ.ს.გ.$(3a; 2b)$",
    "უ.ს.გ.$(a; b) =$ უ.ს.გ.$(3a; b)$"
  ],
  correct: 3,
  solution: "$a$-სა და $b$-ს ყოველი საერთო გამყოფი $a - b$-ის გამყოფიცაა, ხოლო $a - b$-სა და $b$-ს ყოველი საერთო გამყოფი $a = (a - b) + b$-ის გამყოფიცაა. ამიტომ წყვილებს $(a; b)$ და $(a - b; b)$ ერთი და იგივე საერთო გამყოფები აქვთ (ევკლიდეს ალგორითმი).<br><br>დანარჩენი ტოლობები ყოველთვის არ სრულდება: $a = 3$, $b = 2$ არღვევს ა), ბ) და გ)-ს (მარცხნივ $1$, მარჯვნივ $2$, $3$, $6$), ხოლო $a = 4$, $b = 3$ — ე) და ვ)-ს (მარცხნივ $1$, მარჯვნივ $6$ და $3$).<br><br><strong>პასუხი:</strong> დ) უ.ს.გ.$(a; b) =$ უ.ს.გ.$(a - b; b)$.",
  tags: [],
  area: "algebra",
  topics: [],
  grade: 7,
  difficulty: 1,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//10
{
  question: "ნატურალურ $n$ რიცხვს აქვს $5$ განსხვავებული ნატურალური გამყოფი. რომელი წინადადებაა აუცილებლად სამართლიანი?",
  options: [
    "$n$ არის რაიმე მარტივი რიცხვის მე-$4$ ხარისხი",
    "ასეთი $n$ არ მოიძებნება",
    "$n$ აუცილებლად კენტია",
    "$n$ აუცილებლად ლუწია",
    "$n$ აუცილებლად ორნიშნაა",
    "$n$ აუცილებლად ოთხნიშნაა"
  ],
  correct: 0,
  solution: "თუ $n = p_1^{k_1} \\cdots p_m^{k_m}$, გამყოფების რაოდენობაა $(k_1 + 1)\\cdots(k_m + 1)$. $5$ მარტივი რიცხვია, ამიტომ $n$-ს მხოლოდ ერთი მარტივი გამყოფი აქვს და $k_1 + 1 = 5$, ანუ $n = p^4$.<br><br>($n = 16$ ლუწია, $n = 81$ — კენტი, ამიტომ დანარჩენი წინადადებები აუცილებელი არ არის.)<br><br><strong>პასუხი:</strong> ა) $n$ არის რაიმე მარტივი რიცხვის მე-$4$ ხარისხი.",
  tags: [],
  area: "algebra",
  topics: ["prime-factor"],
  grade: 7,
  difficulty: 2,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},
//11
{
  question: "$AB$ მონაკვეთის შიგნით აღებულია $C$ და $D$ წერტილები ისე, რომ $AC : CD = 2 : 3$. დათვალეთ რისი ტოლია $AB$ მონაკვეთის სიგრძე, თუ $DB = 2{,}5$ და $AC$-ს სიგრძე $CD$-ს და $DB$-ს საშუალო არითმეტიკულია? (ორი რიცხვის საშუალო არითმეტიკულს მათი ჯამის ნახევარს უწოდებენ)",
  options: ["$7$", "$9$", "$11$", "$13$", "$15$", "$17$"],
  correct: 4,
  solution: "ვთქვათ, $AC = 2t$, $CD = 3t$. პირობით $AC = \\dfrac{CD + DB}{2}$: $2t = \\dfrac{3t + 2{,}5}{2}$, $4t = 3t + 2{,}5$, $t = 2{,}5$.<br><br>$AB = AC + CD + DB = 5 + 7{,}5 + 2{,}5 = 15$.<br><br><strong>პასუხი:</strong> ე) $15$.",
  tags: [],
  area: "prob-stats",
  topics: ["statistics"],
  grade: 7,
  difficulty: 2,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//12
{
  question: "რისი ტოლია ორი მოსაზღვრე კუთხის გრადუსულ ზომათა სხვაობა, თუ ერთ-ერთი მათგანის მესამედი მეორის ნახევრის ტოლია?",
  options: ["$24^\\circ$", "$30^\\circ$", "$36^\\circ$", "$42^\\circ$", "$48^\\circ$", "$60^\\circ$"],
  correct: 2,
  solution: "მოსაზღვრე კუთხეების ჯამია $180^\\circ$. $\\dfrac{\\alpha}{3} = \\dfrac{\\beta}{2}$, ამიტომ $\\alpha = 3k$, $\\beta = 2k$.<br><br>$5k = 180^\\circ$, $k = 36^\\circ$; სხვაობა $\\alpha - \\beta = k = 36^\\circ$.<br><br><strong>პასუხი:</strong> გ) $36^\\circ$.",
  tags: [],
  area: "geometry",
  topics: ["angle-pairs"],
  grade: 7,
  difficulty: 2,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//13
{
  question: "გამოიანგარიშეთ რისი ტოლია $−(−2)^2 \\cdot (−(−3 \\cdot (−2 − 1) + 3) + 1)$ გამოსახულების მნიშვნელობა?",
  options: ["$44$", "$-44$", "$52$", "$-52$", "$4$", "$-4$"],
  correct: 0,
  solution: "$-3 \\cdot (-2 - 1) = -3 \\cdot (-3) = 9$, ამიტომ $-(9 + 3) + 1 = -11$.<br><br>$-(-2)^2 = -4$, ამიტომ მნიშვნელობაა $-4 \\cdot (-11) = 44$.<br><br><strong>პასუხი:</strong> ა) $44$.",
  tags: [],
  area: "algebra",
  topics: [],
  grade: 7,
  difficulty: 2,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//14
{
  question: "რა ციფრით ბოლოვდება $2023^{2023}$?",
  options: ["$9$", "$5$", "$3$", "$3$", "$7$", "$2$"],
  correct: 4,
  solution: "ბოლო ციფრი დამოკიდებულია მხოლოდ $3^{2023}$-ის ბოლო ციფრზე. $3$-ის ხარისხების ბოლო ციფრები მეორდება: $3, 9, 7, 1, \\ldots$ (პერიოდი $4$).<br><br>$2023 = 4 \\cdot 505 + 3$, ამიტომ ბოლო ციფრი იგივეა, რაც $3^3 = 27$-ისა: $7$.<br><br><strong>პასუხი:</strong> ე) $7$.",
  tags: [],
  area: "algebra",
  topics: ["divisibility","powers"],
  grade: 7,
  difficulty: 2,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//15
{
  question: "წრფე სიბრტყეს ყოფს ორ ნახევარსიბრტყედ. ერთ ნახევარსიბრტყეში აღებულია სამი წერტილი, მეორეში — ოთხი. რამდენითაა იმ მონაკვეთების რაოდენობა მეტი, რომელთა ბოლოები განსხვავებულ ნახევარსიბრტყეშია, იმ მონაკვეთების რაოდენობისაგან, რომელთა ბოლოები ერთსა და იგივე ნახევარსიბრტყეშია?",
  options: ["$7$", "$8$", "$3$", "$9$", "$5$", "$6$"],
  correct: 2,
  solution: "სხვადასხვა ნახევარსიბრტყეში ბოლოებიანი მონაკვეთები: $3 \\cdot 4 = 12$.<br><br>ერთსა და იმავე ნახევარსიბრტყეში: $\\dfrac{3 \\cdot 2}{2} + \\dfrac{4 \\cdot 3}{2} = 3 + 6 = 9$.<br><br>სხვაობა: $12 - 9 = 3$.<br><br><strong>პასუხი:</strong> გ) $3$.",
  tags: [],
  area: "algebra",
  topics: [],
  grade: 7,
  difficulty: 2,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},
//16
{
  question: "$OA$ სხივზე აღებულია $B$ წერტილი ისე, რომ $OB$-ს სიგრძე მეტია $OA$-ს სიგრძეზე. $C$ წერტილი ისეა აღებული $AO$ სხივზე, რომ $CB$ მონაკვეთის სიგრძეა $10$. იპოვეთ რისი ტოლია $OC$ მონაკვეთის სიგრძე, თუ $OA$ მონაკვეთის სიგრძეა $15$ და $AB$-ს სიგრძე $7$-ია.",
  options: ["$32$", "$18$", "$16$", "$4$", "$10$", "$12$"],
  correct: 5,
  solution: "$OB > OA$, ამიტომ $B$ მდებარეობს $A$-ს იქით და $OB = OA + AB = 15 + 7 = 22$.<br><br>$C$ ძევს $AO$ სხივზე (ანუ $A$-დან $O$-ს მიმართულებით), ამიტომ $CB = 10$ ნიშნავს $OC = OB - CB = 22 - 10 = 12$ (შეამოწმეთ: $12 < 15$, ანუ $C$ მართლაც $AO$ სხივზეა).<br><br><strong>პასუხი:</strong> ვ) $12$.",
  tags: [],
  area: "algebra",
  topics: [],
  grade: 7,
  difficulty: 2,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//17
{
  question: "$AOB$ კუთხის გვერდებს შორის გავლებულია $OC$ სხივი. ცნობილია, რომ $BOC$ კუთხის ბისექტრისასა და $AOB$ კუთხის ბისექტრისას შორის კუთხე არის $70°$. დათვალეთ რისი ტოლია $AOC$ კუთხის ზომა?",
  options: ["$160°$", "$140°$", "$70°$", "$120°$", "$50°$", "$35°$"],
  correct: 1,
  solution: "ვთქვათ, $\\angle AOC = x$, $\\angle COB = y$. $OA$-დან ათვლით $BOC$-ს ბისექტრისა $x + \\dfrac{y}{2}$ კუთხითაა, $AOB$-ს ბისექტრისა კი $\\dfrac{x + y}{2}$ კუთხით.<br><br>მათ შორის კუთხე: $x + \\dfrac{y}{2} - \\dfrac{x + y}{2} = \\dfrac{x}{2} = 70^\\circ$, საიდანაც $x = 140^\\circ$.<br><br><strong>პასუხი:</strong> ბ) $140°$.",
  tags: [],
  area: "geometry",
  topics: ["cevians"],
  grade: 7,
  difficulty: 2,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//18
{
  image: "quizzes/class-7/images/image.25.png",
  question: "$AF$ წრფე პარალელურია $DC$ წრფის. $B$ წერტილი ისეა აღებული პარალელურ წრფეებს შორის, რომ $ABC$ კუთხე მართია. $AD$ წარმოადგენს $BAF$ კუთხის ბისექტრისას. ცნობილია, რომ $ADC$ კუთხის გრადუსული ზომაა $25°$. რისი ტოლია $BCD$ კუთხის ზომა?",
  options: ["$50°$", "$25°$", "$30°$", "$40°$", "$45°$", "$60°$"],
  correct: 3,
  solution: "$AF \\parallel DC$ და $AD$ მკვეთია, ამიტომ $\\angle FAD = \\angle ADC = 25^\\circ$ (შიგა ჯვარედინი კუთხეები). $AD$ ბისექტრისაა, ამიტომ $\\angle BAF = 50^\\circ$.<br><br>$B$ წერტილზე გავავლოთ პარალელური წრფეების პარალელური წრფე; ის $ABC$ კუთხეს ყოფს $\\angle BAF$-ისა და $\\angle BCD$-ს ტოლ ნაწილებად: $\\angle ABC = \\angle BAF + \\angle BCD$.<br><br>$\\angle BCD = 90^\\circ - 50^\\circ = 40^\\circ$.<br><br><strong>პასუხი:</strong> დ) $40°$.",
  tags: [],
  area: "geometry",
  topics: ["parallel-lines"],
  grade: 7,
  difficulty: 3,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//19
{
  image: "quizzes/class-7/images/image.26.png",
  question: "სამი წრფე ერთ წერტილში იკვეთება. სიბრტყე დაყოფილია $6$ მახვილ კუთხედ. ამ ექვსი კუთხიდან ერთი $50°$-იანია, ერთი $70°$-იანი, ერთიც $60°$-იანია. მაქსიმუმ რისი ტოლი შეიძლება იყოს დანარჩენებიდან უდიდესის ზომა?",
  options: ["$90°$", "$80°$", "$70°$", "$60°$", "$50°$", "$40°$"],
  correct: 2,
  solution: "ექვსი კუთხე იყოფა სამ წყვილად (ვერტიკალური კუთხეები ტოლია) და ერთი წყვილიდან თითო კუთხის ჯამი $180^\\circ$-ია.<br><br>$50^\\circ + 70^\\circ + 60^\\circ = 180^\\circ$, ანუ ეს სამი კუთხე სამივე წყვილიდანაა. დანარჩენი სამი კუთხე მათი ვერტიკალურია: $50^\\circ$, $70^\\circ$, $60^\\circ$; უდიდესია $70^\\circ$.<br><br><strong>პასუხი:</strong> გ) $70°$.",
  tags: [],
  area: "geometry",
  topics: [],
  grade: 7,
  difficulty: 3,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//20
{
  question: "$x$, $y$ და $z$ სამი ნატურალური რიცხვია, რომლებიც $n$-ზე (სადაც $n > 1$ და $n$ ნატურალურია) გაყოფისას ერთი და იგივე ნაშთს ტოვებენ. რისი ტოლია $n$, თუ ცნობილია, რომ $x - y = 52$ და $z - x = 39$?",
  options: ["$13$", "$29$", "$27$", "$41$", "$47$", "$10$"],
  correct: 0,
  solution: "ტოლი ნაშთების მქონე რიცხვების სხვაობა იყოფა $n$-ზე: $n \\mid 52$ და $n \\mid 39$.<br><br>უ.ს.გ.$(52; 39) = 13$, ხოლო $n > 1$, ამიტომ $n = 13$.<br><br><strong>პასუხი:</strong> ა) $13$.",
  tags: [],
  area: "algebra",
  topics: ["divisibility"],
  grade: 7,
  difficulty: 3,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},
//21
{
  question: "ისრებიანი საათი უჩვენებს $17:17$ (ჩვიდმეტი საათი და ჩვიდმეტი წუთი). რა უახლოეს დროში დაემთხვევა საათის და წუთების ისრები ერთმანეთს?",
  options: ["$6\\text{სთ}43\\text{წთ}$", "$10\\dfrac{1}{3}\\text{წთ}$", "$15\\text{წთ}$", "$23\\text{წთ}$", "$10\\text{წთ}$", "$10\\dfrac{3}{11}\\text{წთ}$"],
  correct: 5,
  solution: "$17{:}17$-ზე საათის ისარი $12$-დან $5 \\cdot 30^\\circ + 17 \\cdot 0{,}5^\\circ = 158{,}5^\\circ$-ზეა, წუთების ისარი — $17 \\cdot 6^\\circ = 102^\\circ$-ზე. წუთების ისარი ჩამორჩება $56{,}5^\\circ$-ით.<br><br>წუთების ისარი საათისას წუთში $6^\\circ - 0{,}5^\\circ = 5{,}5^\\circ$-ით უსწრებს, ამიტომ დაეწევა $\\dfrac{56{,}5}{5{,}5} = \\dfrac{113}{11} = 10\\dfrac{3}{11}$ წუთში.<br><br><strong>პასუხი:</strong> ვ) $10\\dfrac{3}{11}$წთ.",
  tags: [],
  area: "algebra",
  topics: ["proportion"],
  grade: 7,
  difficulty: 3,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//22
{
  question: "რისი ტოლია იმ უმცირესი $6$ ნიშნა რიცხვის პირველი ოთხი ციფრისგან შედგენილი რიცხვი, რომელიც უნაშთოდ იყოფა $396$-ზე?",
  options: ["$1003$", "$1005$", "$1004$", "$1002$", "$1000$", "$1001$"],
  correct: 5,
  solution: "$100000 : 396 \\approx 252{,}5$, ამიტომ უმცირესი ექვსნიშნა ჯერადია $396 \\cdot 253 = 100188$.<br><br>მისი პირველი ოთხი ციფრი: $1001$.<br><br><strong>პასუხი:</strong> ვ) $1001$.",
  tags: [],
  area: "algebra",
  topics: ["divisibility"],
  grade: 7,
  difficulty: 3,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//23
{
  question: "იპოვეთ რისი ტოლია სამი რიცხვის ჯამი, თუ პირველი რიცხვი დანარჩენი ორის ჯამის ნახევარია, მეორე — დანარჩენი ორის ჯამის მესამედი და მესამე რიცხვი კი $30$-ია?",
  options: ["$124$", "$84$", "$68$", "$72$", "$78$", "$96$"],
  correct: 3,
  solution: "ვთქვათ, ჯამია $S$. $a = \\dfrac{S - a}{2}$, საიდანაც $a = \\dfrac{S}{3}$; $b = \\dfrac{S - b}{3}$, საიდანაც $b = \\dfrac{S}{4}$.<br><br>$S = \\dfrac{S}{3} + \\dfrac{S}{4} + 30$, $\\dfrac{5S}{12} = 30$, $S = 72$.<br><br><strong>პასუხი:</strong> დ) $72$.",
  tags: [],
  area: "algebra",
  topics: [],
  grade: 7,
  difficulty: 3,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//24
{
  question: "რამდენ ელემენტიანია $A$ სიმრავლე, თუ მისი ყველა ქვესიმრავლის რაოდენობაა $32$?",
  options: ["$3$", "$4$", "$5$", "$6$", "$7$", "$8$"],
  correct: 2,
  solution: "$n$-ელემენტიან სიმრავლეს $2^n$ ქვესიმრავლე აქვს. $2^n = 32$, $n = 5$.<br><br><strong>პასუხი:</strong> გ) $5$.",
  tags: [],
  area: "algebra",
  topics: ["sets"],
  grade: 7,
  difficulty: 3,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
},

//25
{
  question: "გიამ, ნიამ და თეამ ერთმანეთისგან დამოუკიდებლად ჩაიფიქრეს მარტივი რიცხვის კუბები და შემდეგ დაწერეს დაფაზე. დათომ გადაამრავლა ეს სამი რიცხვი და დათვალა მიღებული რიცხვის გამყოფების რაოდენობა. რამდენი განსხვავებული პასუხი შეეძლო მიეღო დათოს?",
  options: ["$5$", "$6$", "$1$", "$2$", "$3$", "$4$"],
  correct: 4,
  solution: "ნამრავლი შეიძლება იყოს:<br>• სამივე რიცხვი ტოლია: $p^9$ — $10$ გამყოფი;<br>• ორი ტოლია: $p^6q^3$ — $7 \\cdot 4 = 28$ გამყოფი;<br>• სამივე განსხვავებულია: $p^3q^3r^3$ — $4^3 = 64$ გამყოფი.<br><br>სულ $3$ განსხვავებული პასუხი.<br><br><strong>პასუხი:</strong> ე) $3$.",
  tags: [],
  area: "algebra",
  topics: ["prime-factor"],
  grade: 7,
  difficulty: 3,
  type: ["compute"],
  method: [],
  source: {"book":"","section":"","number":null},
  tagsReviewed: false
}
];
