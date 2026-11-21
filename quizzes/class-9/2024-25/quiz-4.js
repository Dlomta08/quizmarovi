quizData = [
  //1
  {
    question: "ცნობილია, რომ $P(A) = 0{,}8$; $P(B) = 0{,}7$; ხოლო $A$ და $B$ ხდომილობების სხვაობის ალბათობაა $P(A\\backslash B) = 0{,}2$. იპოვეთ რისი ტოლია $A$ და $B$ ხდომილობების გაერთიანება $P(A \\cup B) =?$",
    options: ["$0{,}75$", "$0{,}9$", "$0{,}85$", "$0{,}5$", "$0{,}95$", "$0{,}6$"],
    correct: 1,
    solution: "$P(A \\backslash B) = P(A) - P(A \\cap B)$, ამიტომ $P(A \\cap B) = 0{,}8 - 0{,}2 = 0{,}6$.<br><br>$P(A \\cup B) = 0{,}8 + 0{,}7 - 0{,}6 = 0{,}9$.<br><br><strong>პასუხი:</strong> ბ) $0{,}9$.",
    tags: [],
    area: "prob-stats",
    topics: ["probability","sets"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //2
  {
    question: "მოცემულია $b_n = \\frac{2^n}{256}$ გეომეტრიული პროგრესია. იპოვეთ $n$-ის ის უდიდესი მნიშვნელობა, რომლისთვისაც $b_n \\leq 7$.",
    options: ["$7$", "$8$", "$9$", "$10$", "$11$", "$12$"],
    correct: 3,
    solution: "$\\dfrac{2^n}{256} \\le 7 \\Leftrightarrow 2^n \\le 1792$. $2^{10} = 1024 \\le 1792 < 2048 = 2^{11}$.<br><br><strong>პასუხი:</strong> დ) $10$.",
    tags: [],
    area: "algebra",
    topics: ["geometric-prog"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //3
  {
    question: "მოცემულია რვა ცალი ისეთი მომდევნო რიცხვი, რომლებიც $4$ -ზე გაყოფისას ნაშთს $3$ გვაძლევენ. მათი საშუალო $17$-ით მეტია ამ რიცხვების გაბნევის დიაპაზონზე. იპოვეთ ამ რიცხვების საშუალო.",
    options: ["$12$", "$24$", "$35$", "$42$", "$45$", "$56$"],
    correct: 4,
    solution: "რიცხვებია $x, x + 4, \\ldots, x + 28$ — გაბნევის დიაპაზონი $28$, საშუალო $x + 14$.<br><br>საშუალო $= 28 + 17 = 45$.<br><br><strong>პასუხი:</strong> ე) $45$.",
    tags: [],
    area: "algebra",
    topics: ["divisibility"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //4
  {
    question: "იპოვეთ $n$, თუ $\\vec{a}(2; n + 4)$ და $\\vec{b}(12; 8)$ ვექტორები მართობულია.",
    options: ["$-7$", "$-4$", "$-3$", "$1$", "$5$", "$12$"],
    correct: 0,
    solution: "მართობულობის პირობა: $\\vec a \\cdot \\vec b = 2 \\cdot 12 + 8(n + 4) = 0$, $n + 4 = -3$, $n = -7$.<br><br><strong>პასუხი:</strong> ა) $-7$.",
    tags: [],
    area: "geometry",
    topics: ["vectors"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: ["vectors","coordinates"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //5
  {
    question: "იპოვეთ მანძილი $(2; -2)$ წერტილიდან $3x - 4y + 6 = 0$ წრფემდე.",
    options: ["$1$", "$2$", "$4$", "$6$", "$8$", "$9$"],
    correct: 2,
    solution: "$d = \\dfrac{|3 \\cdot 2 - 4 \\cdot (-2) + 6|}{\\sqrt{3^2 + 4^2}} = \\dfrac{20}{5} = 4$.<br><br><strong>პასუხი:</strong> გ) $4$.",
    tags: [],
    area: "algebra",
    topics: [],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //6
  {
    question: "ჩამოთვლილთაგან რისი ტოლია $a_n = 3n - 199$ არითმეტიკული პროგრესიის პირველი $197$ წევრის ჯამი?",
    options: ["$199 \\cdot 197$", "$180 \\cdot 197$", "$64 \\cdot 197$", "$72 \\cdot 197$", "$19 \\cdot 197$", "$98 \\cdot 197$"],
    correct: 5,
    solution: "$a_1 = -196$, $a_{197} = 3 \\cdot 197 - 199 = 392$.<br><br>$S_{197} = \\dfrac{-196 + 392}{2} \\cdot 197 = 98 \\cdot 197$.<br><br><strong>პასუხი:</strong> ვ) $98 \\cdot 197$.",
    tags: [],
    area: "algebra",
    topics: ["arithmetic-prog"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //7
  {
    question: "გამოთვალეთ  $8 + 2 + \\frac{1}{2} + \\frac{1}{8} + \\cdots + \\frac{1}{2^{2n-3}}$ უსასრულო ჯამი.",
    options: ["$11 \\frac{1}{3}$", "$14 \\frac{1}{3}$", "$12 \\frac{2}{3}$", "$10 \\frac{2}{3}$", "$8 \\frac{1}{3}$", "$9 \\frac{2}{3}$"],
    correct: 3,
    solution: "ეს უსასრულოდ კლებადი გეომეტრიული პროგრესიაა, $b_1 = 8$, $q = \\dfrac{1}{4}$.<br><br>$S = \\dfrac{8}{1 - \\frac{1}{4}} = \\dfrac{32}{3} = 10\\dfrac{2}{3}$.<br><br><strong>პასუხი:</strong> დ) $10 \\frac{2}{3}$.",
    tags: [],
    area: "algebra",
    topics: ["powers"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //8
  {
    question: "ალბათობა იმისა, რომ ოთხი გასროლიდან ერთი მაინც მოხვდება მიზანს არის $0{,}9984$. იპოვეთ ერთი გასროლით მიზანში მოხვედრის ალბათობა.",
    options: ["$0{,}8$", "$0{,}2$", "$0{,}0016$", "$0{,}5$", "$0{,}16$", "$0{,}4$"],
    correct: 0,
    solution: "ვთქვათ, აცდენის ალბათობაა $q$. ოთხივე აცდენის ალბათობა $q^4 = 1 - 0{,}9984 = 0{,}0016$, $q = 0{,}2$.<br><br>მოხვედრის ალბათობა: $1 - 0{,}2 = 0{,}8$.<br><br><strong>პასუხი:</strong> ა) $0{,}8$.",
    tags: [],
    area: "prob-stats",
    topics: ["probability"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //9
  {
    question: "ჩამოთვლილთაგან რისი ტოლია $m$, თუ $\\vec{a}(m; 2m - 1)$ ვექტორი $\\vec{b} = 6i + 10j$ ვექტორის კოლინეარულია.",
    options: ["$20$", "$2$", "$11$", "$17$", "$3$", "$12$"],
    correct: 4,
    solution: "კოლინეარობა: $\\dfrac{m}{6} = \\dfrac{2m - 1}{10}$, $10m = 12m - 6$, $m = 3$.<br><br><strong>პასუხი:</strong> ე) $3$.",
    tags: [],
    area: "geometry",
    topics: ["vectors"],
    grade: 9,
    difficulty: 1,
    type: ["compute"],
    method: ["vectors"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //10
  {
    question: "$M$ წერტილი $ABC$ სამკუთხედის $BC$ გვერდს ყოფს შეფარდებით $2:5$ ($B$ წვეროს მხრიდან). ცნობილია, რომ $\\vec{AB} = \\vec{a}$ და $\\vec{AC} = \\vec{b}$. იპოვეთ $\\vec{AM}$ ვექტორი.",
    options: ["$5\\vec{a} - 2\\vec{b}$", "$5\\vec{b} - 2\\vec{a}$", "$\\frac{5}{7}\\vec{a} + \\frac{2}{7}\\vec{b}$", "$\\frac{3}{5}\\vec{a} + \\frac{2}{5}\\vec{b}$", "$\\frac{2}{7}\\vec{a} - \\frac{5}{7}\\vec{b}$", "$5\\vec{a} + 2\\vec{b}$"],
    correct: 2,
    solution: "$BM : MC = 2 : 5$, ამიტომ $\\vec{AM} = \\vec{AB} + \\dfrac{2}{7}\\vec{BC} = \\vec a + \\dfrac{2}{7}(\\vec b - \\vec a) = \\dfrac{5}{7}\\vec a + \\dfrac{2}{7}\\vec b$.<br><br><strong>პასუხი:</strong> გ) $\\frac{5}{7}\\vec{a} + \\frac{2}{7}\\vec{b}$.",
    tags: [],
    area: "geometry",
    topics: ["vectors"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: ["vectors"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
  
  //11
  {
    question: "მოცემულია არითმეტიკული პროგრესიის ორი წევრი $a_1 = 17{,}9$; $a_3 = 16{,}5$. იპოვეთ $n$-ის მნიშვნელობა, თუ $a_n$ არის ამ პროგრესიის უდიდესი უარყოფითი წევრი.",
    options: ["$7$", "$18$", "$27$", "$34$", "$45$", "შეუძლებელია განსაზღვრა"],
    correct: 2,
    solution: "$d = \\dfrac{16{,}5 - 17{,}9}{2} = -0{,}7$, $a_n = 17{,}9 - 0{,}7(n - 1)$.<br><br>$a_n < 0 \\Leftrightarrow n - 1 > 25{,}57$, ანუ $n \\ge 27$. პროგრესია კლებადია, ამიტომ უდიდესი უარყოფითი წევრია $a_{27} = -0{,}3$.<br><br><strong>პასუხი:</strong> გ) $27$.",
    tags: [],
    area: "algebra",
    topics: ["arithmetic-prog"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //12
  {
    question: "სპორტულ შეჯიბრებაში მხოლოდ სამი სახის მედალი გათამაშდა. ოქრო იყო მედლების $20\\%$, ვერცხლი - $35\\%$, დანარჩენი კი ბრინჯაო. იპოვეთ წრიულ დიაგრამაზე ბრინჯაოს მედლების შესაბამისი სექტორის კუთხე.",
    options: ["$30^\\circ$", "$45^\\circ$", "$132^\\circ$", "$234^\\circ$", "$178^\\circ$", "$162^\\circ$"],
    correct: 5,
    solution: "ბრინჯაო: $100\\% - 20\\% - 35\\% = 45\\%$.<br><br>$0{,}45 \\cdot 360^\\circ = 162^\\circ$.<br><br><strong>პასუხი:</strong> ვ) $162^\\circ$.",
    tags: [],
    area: "geometry",
    topics: ["circle-segments","percent"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //13
  {
    question: "მოსწავლის მიერ გამოცდაზე მათემატიკის ჩაბარების ალბათობა $0{,}9$-ის ტოლია, ხოლო მათემატიკისგან დამოუკიდებლად ფიზიკის ჩაბარების ალბათობა კი $0{,}8$-ის ტოლია. რა არის ალბათობა იმისა, რომ ეს მოსწავლე ამ ორი გამოცდიდან ერთ-ერთს მაინც ჩააბარებს?",
    options: ["$1{,}7$", "$0{,}1$", "$0{,}98$", "$0{,}89$", "$0{,}72$", "$0{,}28$"],
    correct: 2,
    solution: "ორივე გამოცდის ჩაჭრის ალბათობა: $0{,}1 \\cdot 0{,}2 = 0{,}02$.<br><br>ერთის მაინც ჩაბარება: $1 - 0{,}02 = 0{,}98$.<br><br><strong>პასუხი:</strong> გ) $0{,}98$.",
    tags: [],
    area: "prob-stats",
    topics: ["probability"],
    grade: 9,
    difficulty: 2,
    type: ["word"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //14
  {
    question: "ჩამოთვლილთაგან რისი ტოლია $n$, თუ $a$, $a_n$ და $an^2$ სამკუთხედის გვერდებია.",
    options: ["$\\frac{3}{2}$", "$\\frac{17}{10}$", "$\\frac{18}{7}$", "$\\frac{7}{3}$", "$\\frac{11}{2}$", "$\\frac{9}{5}$"],
    correct: 0,
    solution: "გვერდებია $a$, $an$, $an^2$. თუ $n > 1$, უდიდესია $an^2$: $a + an > an^2$, ანუ $n^2 - n - 1 < 0$, $n < \\dfrac{1 + \\sqrt{5}}{2} \\approx 1{,}618$.<br><br>ჩამოთვლილთაგან ამ პირობას აკმაყოფილებს მხოლოდ $\\dfrac{3}{2}$ (დანარჩენები $1{,}618$-ზე მეტია).<br><br><strong>პასუხი:</strong> ა) $\\frac{3}{2}$.",
    tags: [],
    area: "geometry",
    topics: [],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //15
  {
    question: "ჩამოთვლილთაგან რისი ტოლია $\\vec{a}(1; 3)$ ვექტორსა და $2x + y + 3 = 0$ წრფის პარალელურ ვექტორს შორის კუთხის კოსინუსი.",
    options: ["$\\frac{1}{3}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{1}{\\sqrt{3}}$", "$\\frac{2}{3}$", "$\\frac{1}{\\sqrt{2}}$", "$\\frac{1}{\\sqrt{5}}$"],
    correct: 4,
    solution: "წრფის მიმმართველი ვექტორია $\\vec m(1; -2)$ (ნორმალი $(2; 1)$-ის მართობული).<br><br>$\\cos\\varphi = \\dfrac{|1 \\cdot 1 + 3 \\cdot (-2)|}{\\sqrt{10} \\cdot \\sqrt{5}} = \\dfrac{5}{5\\sqrt{2}} = \\dfrac{1}{\\sqrt{2}}$.<br><br><strong>პასუხი:</strong> ე) $\\frac{1}{\\sqrt{2}}$.",
    tags: [],
    area: "geometry",
    topics: ["vectors"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: ["vectors","coordinates"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //16
  {
    question: "ცნობილია, რომ არითმეტიკულ პროგრესიაში $a_4 = 2$; ჩამოთვლილთაგან რისი ტოლია $a_5 \\cdot a_3 + a_1 \\cdot a_3 + a_1 \\cdot a_5$ გამოსახულების უდიდესი მნიშვნელობა?",
    options: ["$32$", "$44$", "$48$", "$56$", "$64$", "$72$"],
    correct: 2,
    solution: "$a_1 = 2 - 3d$, $a_3 = 2 - d$, $a_5 = 2 + d$.<br><br>$a_5a_3 + a_1a_3 + a_1a_5 = (4 - d^2) + (4 - 8d + 3d^2) + (4 - 4d - 3d^2) = 12 - 12d - d^2 = 48 - (d + 6)^2$.<br><br>უდიდესი მნიშვნელობა $48$ ($d = -6$-ზე).<br><br><strong>პასუხი:</strong> გ) $48$.",
    tags: [],
    area: "algebra",
    topics: ["arithmetic-prog"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //17
  {
    question: "პირველ ყუთში $1$ თეთრი და $5$ შავი ბურთულაა. მეორეში $8$ თეთრი და $4$ შავი ბურთულა. თითოეული ყუთიდან ამოიღეს თითო-თითო ბურთულა. რა არის ალბათობა იმისა, რომ ამოღებული ბურთულებიდან ერთი თეთრია და ერთი შავი?",
    options: ["$\\frac{1}{9}$", "$\\frac{2}{5}$", "$\\frac{9}{17}$", "$\\frac{11}{18}$", "$\\frac{7}{20}$", "$\\frac{2}{15}$"],
    correct: 3,
    solution: "$P = \\dfrac{1}{6} \\cdot \\dfrac{4}{12} + \\dfrac{5}{6} \\cdot \\dfrac{8}{12} = \\dfrac{4 + 40}{72} = \\dfrac{11}{18}$ (თეთრი პირველიდან და შავი მეორედან, ან პირიქით).<br><br><strong>პასუხი:</strong> დ) $\\frac{11}{18}$.",
    tags: [],
    area: "prob-stats",
    topics: ["probability"],
    grade: 9,
    difficulty: 2,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //18
  {
    question: "მოცემულია ნატურალურ რიცხვთა მიმდევრობა $a$; $b$; $c$; $d$; $7$; $2$; $9$. ჩამოთვლილთაგან რისი ტოლია მოდისა და მედიანის ჯამი თუ ცნობილია, რომ მოდა $2$-ით ნაკლებია მედიანაზე.",
    options: ["$4$", "$11$", "$14$", "$15$", "$18$", "$23$"],
    correct: 0,
    solution: "შვიდ რიცხვში მედიანა მე-$4$ რიცხვია. მაგალითად, $a = b = 1$, $c = 3$, $d = 4$: დალაგებით $1, 1, 2, 3, 4, 7, 9$ — მოდა $1$, მედიანა $3$; ჯამი $4$.<br><br>სხვა ვარიანტები ($14$: მოდა $6$, მედიანა $8$; $18$: მოდა $8$, მედიანა $10$) შეუძლებელია: მედიანა $8$ ან $10$ მოითხოვს, რომ ოთხი რიცხვი იყოს მასზე არანაკლები, მაგრამ მოცემული $2$ და $7$ მასზე ნაკლებია და $6$ მოდად ორჯერ უნდა შეგვხვდეს.<br><br><strong>პასუხი:</strong> ა) $4$.",
    tags: [],
    area: "prob-stats",
    topics: ["statistics"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //19
  {
    question: "იპოვეთ $ABCD$ ამოზნექილი ოთხკუთხედის $AB$ და $CD$ გვერდების შუა წერტილების შემაერთებელი $MN$ მონაკვეთის სიგრძე, თუ $AD = 3$, $BC = 5$, ხოლო $\\vec{BC}$ და $\\vec{AD}$ ვექტორებს შორის კუთხე $60^{\\circ}$-ია.",
    options: ["$3$", "$4$", "$5$", "$\\frac{7}{2}$", "$\\frac{9}{2}$", "$\\frac{8}{3}$"],
    correct: 3,
    solution: "ოთხკუთხედის გვერდების შუა წერტილებისთვის $\\vec{MN} = \\dfrac{1}{2}(\\vec{AD} + \\vec{BC})$.<br><br>$|\\vec{MN}|^2 = \\dfrac{1}{4}(9 + 25 + 2 \\cdot 3 \\cdot 5 \\cdot \\cos 60^\\circ) = \\dfrac{49}{4}$, $MN = \\dfrac{7}{2}$.<br><br><strong>პასუხი:</strong> დ) $\\frac{7}{2}$.",
    tags: [],
    area: "geometry",
    topics: ["polygon-basics","vectors"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: ["vectors"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //20
  {
    question: "$R = \\sqrt{5}$ რადიუსის წრეწირი $x - 2y - 1 = 0$ წრფეს ეხება $A(3; 1)$ წერტილში. ჩამოთვლილთაგან რისი ტოლია ამ წრეწირის ცენტრის კოორდინატები?",
    options: ["$(5; 1)$", "$(-2; 0)$", "$(4; 1)$", "$(1; 2)$", "$(2; 3)$", "$(1; 3)$"],
    correct: 4,
    solution: "ცენტრი ძევს $A$-ზე გამავალ მართობზე, მიმართულებით $(1; -2)$ (წრფის ნორმალი), მისგან $\\sqrt{5}$ მანძილზე: $(3; 1) \\pm (1; -2)$.<br><br>ცენტრი: $(4; -1)$ ან $(2; 3)$. ჩამოთვლილთა შორისაა $(2; 3)$.<br><br><strong>პასუხი:</strong> ე) $(2; 3)$.",
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

  //21
  {
    question: "გეომეტრიული პროგრესიის მეორე წევრია $12$, ხოლო მეხუთე $324$. იპოვეთ მეექვსე წევრი.",
    options: ["$412$", "$972$", "$524$", "$632$", "$1024$", "$824$"],
    correct: 1,
    solution: "$q^3 = \\dfrac{b_5}{b_2} = \\dfrac{324}{12} = 27$, $q = 3$.<br><br>$b_6 = 324 \\cdot 3 = 972$.<br><br><strong>პასუხი:</strong> ბ) $972$.",
    tags: [],
    area: "algebra",
    topics: ["geometric-prog"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //22
  {
    question: "$k_n$ მიმდევრობა შედგება $50$ განსხვავებული ნატურალური რიცხვისგან, მათ შორის $25$ წევრი არ აღემატება $50$-ს, ხოლო დანარჩენი მეტია $50$-ზე, მაგრამ არ აღემატება $100$-ს. ამასთან $k_p - k_m \\neq 50$ (ნებისმიერი $m$ და $p$ რიცხვებისათვის). ჩამოთვლილთაგან რისი ტოლია ამ მიმდევრობის ყველა წევრის ჯამი.",
    options: ["$1225$", "$2525$", "$2550$", "$2750$", "$3025$", "$3500$"],
    correct: 1,
    solution: "დავაწყვილოთ $k$ და $k + 50$ ($k = 1, \\ldots, 50$) — $50$ წყვილი. ყოველი წყვილიდან მაქსიმუმ ერთი რიცხვი შეიძლება ავიღოთ, ხოლო $50$ რიცხვია, ამიტომ ყოველი წყვილიდან ზუსტად ერთია აღებული, მათგან $25$ — დიდი.<br><br>ჯამი: $(1 + 2 + \\ldots + 50) + 50 \\cdot 25 = 1275 + 1250 = 2525$.<br><br><strong>პასუხი:</strong> ბ) $2525$.",
    tags: [],
    area: "algebra",
    topics: [],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //23
  {
    question: "მოცემულია მიმდევრობა $1 \\cdot 7$; $2 \\cdot 7^2$; $3 \\cdot 7^3$; $\\cdots$ $n \\cdot 7^n$. ჩამოთვლილთაგან რისი ტოლია ამ მიმდევრობის პირველი $12$ წევრის ჯამი?",
    options: ["$\\frac{71 \\cdot 7^{13} + 7}{36}$", "$\\frac{48 \\cdot 7^{12} + 7}{18}$", "$\\frac{12 \\cdot 7^{13} + 7}{48}$", "$\\frac{53 \\cdot 7^{12} + 7}{64}$", "$12 \\cdot 7^{13} + 7$", "$7^{14} + 7$"],
    correct: 0,
    solution: "$S = \\sum_{k=1}^{n} kx^k = \\dfrac{x\\left(1 - (n + 1)x^n + nx^{n+1}\\right)}{(1 - x)^2}$ (მიიღება $S - xS$-ის განხილვით).<br><br>$x = 7$, $n = 12$: $S = \\dfrac{7 - 13 \\cdot 7^{13} + 12 \\cdot 7^{14}}{36} = \\dfrac{7^{13}(84 - 13) + 7}{36} = \\dfrac{71 \\cdot 7^{13} + 7}{36}$.<br><br><strong>პასუხი:</strong> ა) $\\frac{71 \\cdot 7^{13} + 7}{36}$.",
    tags: [],
    area: "algebra",
    topics: ["powers"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: [],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //24
  {
    question: "ჩამოთვლილთაგან რომლის მართობულია $\\vec{c}$ ვექტორი სიბრტყეზე მდებარე ნებისმიერი სამი $\\vec{a}$, $\\vec{b}$ და $\\vec{c}$ ვექტორისათვის?",
    options: ["$(\\vec{b} \\cdot \\vec{c})\\vec{a} - (\\vec{a} \\cdot \\vec{b})\\vec{c}$", "$2\\vec{a} + \\vec{b}$", "$(\\vec{b} \\cdot \\vec{c})\\vec{a} - (\\vec{a} \\cdot \\vec{c})\\vec{b}$", "$(\\vec{a} \\cdot \\vec{b})\\vec{c} + \\vec{c}$", "$(\\vec{b} \\cdot \\vec{c})\\vec{a} + (\\vec{a} \\cdot \\vec{b})\\vec{c}$", "$(\\vec{b} \\cdot \\vec{c})\\vec{a} + \\vec{c}$"],
    correct: 2,
    solution: "$\\vec c \\cdot \\left((\\vec b \\cdot \\vec c)\\vec a - (\\vec a \\cdot \\vec c)\\vec b\\right) = (\\vec b \\cdot \\vec c)(\\vec a \\cdot \\vec c) - (\\vec a \\cdot \\vec c)(\\vec b \\cdot \\vec c) = 0$ ნებისმიერი ვექტორებისთვის.<br><br><strong>პასუხი:</strong> გ) $(\\vec{b} \\cdot \\vec{c})\\vec{a} - (\\vec{a} \\cdot \\vec{c})\\vec{b}$.",
    tags: [],
    area: "geometry",
    topics: ["vectors"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: ["vectors"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },

  //25
  {
    question: "მახვილკუთხა $ABC$ სამკუთხედში, რომლის გვერდებია $AB = c$, $BC = a$ და $AC = b$ შემოხაზულია $R$ რადიუსის მქონე წრეწირი, რომლის ცენტრია $O$. $D$ წერტილი $O$ წერტილის სიმეტრიულია $AB$ გვერდის მიმართ. ჩამოთვლითაგან რისი ტოლია $\\vec{CD}^ 2$.",
    options: ["$R^2 + a^2 - b^2 + c^2$", "$R^2 + a^2 + b^2 - c^2$", "$R^2 - a^2 + b^2 + c^2$", "$2R^2 + a^2 - b^2 - c^2$", "$2R^2 + a^2 + b^2 + c^2$", "$2R^2 - a^2 - b^2 + c^2$"],
    correct: 1,
    solution: "ავიღოთ სათავე $O$-ში: $|\\vec A| = |\\vec B| = |\\vec C| = R$. $D$ არის $O$-ს სიმეტრიული $AB$-ს მიმართ, ამიტომ $\\vec D = \\vec A + \\vec B$ და $\\vec{CD} = \\vec A + \\vec B - \\vec C$.<br><br>$\\vec A \\cdot \\vec B = R^2 - \\dfrac{c^2}{2}$, $\\vec A \\cdot \\vec C = R^2 - \\dfrac{b^2}{2}$, $\\vec B \\cdot \\vec C = R^2 - \\dfrac{a^2}{2}$.<br><br>$\\vec{CD}^2 = 3R^2 + 2\\vec A\\vec B - 2\\vec A\\vec C - 2\\vec B\\vec C = R^2 + a^2 + b^2 - c^2$.<br><br><strong>პასუხი:</strong> ბ) $R^2 + a^2 + b^2 - c^2$.",
    tags: [],
    area: "geometry",
    topics: ["vectors"],
    grade: 9,
    difficulty: 3,
    type: ["compute"],
    method: ["vectors"],
    source: {"book":"","section":"","number":null},
    tagsReviewed: false
  },
];
