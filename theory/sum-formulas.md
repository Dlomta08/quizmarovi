---
id: sum-formulas
title: ჯამის, ორმაგი კუთხის ფორმულები
area: algebra
group: trigonometry
grades: [10]
prerequisites: [trig-identities, reduction]
next: [product-sum, trig-eq]
reviewed: false
---

## მთავარი იდეა

ტრიგონომეტრიული ფუნქცია ჯამზე არ „იშლება“: $\sin(\alpha+\beta)\neq\sin\alpha+\sin\beta$. სამაგიეროდ არსებობს ზუსტი ფორმულა, რომელიც ჯამის სინუსს და კოსინუსს შესაკრებების სინუსებით და კოსინუსებით გამოსახავს. მისგან ერთი ნაბიჯით გამოდის ორმაგი და ნახევარი კუთხის ფორმულები. ეს არის ტრიგონომეტრიული გამოთვლების და განტოლებების მთავარი იარაღი.

## განმარტებები და ფორმულები

:::formula შეკრების ფორმულები
$$\cos(\alpha\mp\beta)=\cos\alpha\cos\beta\pm\sin\alpha\sin\beta,$$
$$\sin(\alpha\pm\beta)=\sin\alpha\cos\beta\pm\cos\alpha\sin\beta,$$
$$\operatorname{tg}(\alpha\pm\beta)=\frac{\operatorname{tg}\alpha\pm\operatorname{tg}\beta}{1\mp\operatorname{tg}\alpha\operatorname{tg}\beta}.$$
:::

:::formula ორმაგი კუთხე
$$\sin2\alpha=2\sin\alpha\cos\alpha,\qquad \operatorname{tg}2\alpha=\frac{2\operatorname{tg}\alpha}{1-\operatorname{tg}^2\alpha},$$
$$\cos2\alpha=\cos^2\alpha-\sin^2\alpha=2\cos^2\alpha-1=1-2\sin^2\alpha.$$
:::

:::formula ხარისხის დაწევა (ნახევარი კუთხე)
$$\cos^2\alpha=\frac{1+\cos2\alpha}2,\qquad \sin^2\alpha=\frac{1-\cos2\alpha}2.$$
:::

:::formula დამხმარე კუთხე
$$a\sin x+b\cos x=\sqrt{a^2+b^2}\,\sin(x+\varphi),$$
სადაც $\cos\varphi=\frac{a}{\sqrt{a^2+b^2}}$, $\sin\varphi=\frac{b}{\sqrt{a^2+b^2}}$. აქედან: $|a\sin x+b\cos x|\le\sqrt{a^2+b^2}$.
:::

## დამტკიცება

**$\cos(\alpha-\beta)$.** ერთეულოვან წრეწირზე $P_\alpha(\cos\alpha;\sin\alpha)$ და $P_\beta(\cos\beta;\sin\beta)$. ვექტორების $\overrightarrow{OP_\alpha}$ და $\overrightarrow{OP_\beta}$ სიგრძე $1$-ია, მათ შორის კუთხე კი $\alpha-\beta$ (ან მისი დამატება $2\pi$-მდე — კოსინუსი იგივეა). სკალარული ნამრავლი ორნაირად:
$$\cos\alpha\cos\beta+\sin\alpha\sin\beta=1\cdot1\cdot\cos(\alpha-\beta).$$
**დანარჩენი.** $\beta\to-\beta$ იძლევა $\cos(\alpha+\beta)$-ს. $\sin(\alpha+\beta)=\cos\left(\frac\pi2-\alpha-\beta\right)=\cos\left(\left(\frac\pi2-\alpha\right)-\beta\right)$ — და ვიყენებთ უკვე დამტკიცებულს. ორმაგი კუთხე: $\beta=\alpha$. $\blacksquare$

## ამოხსნილი მაგალითები

:::example მარტივი
გამოთვალეთ $\sin75^\circ$.
:::solution
$\sin(45^\circ+30^\circ)=\frac{\sqrt2}2\cdot\frac{\sqrt3}2+\frac{\sqrt2}2\cdot\frac12=\frac{\sqrt6+\sqrt2}4$.
:::
:::

:::example საშუალო
$\sin\alpha=\dfrac35$, $\dfrac\pi2<\alpha<\pi$. იპოვეთ $\sin2\alpha$ და $\cos2\alpha$.
:::solution
$\cos\alpha=-\frac45$ (II მეოთხედი). $\sin2\alpha=2\cdot\frac35\cdot\left(-\frac45\right)=-\frac{24}{25}$. $\cos2\alpha=1-2\cdot\frac9{25}=\frac7{25}$.

**პასუხი:** $-\dfrac{24}{25}$ და $\dfrac7{25}$.
:::
:::

:::example რთული
გამოთვალეთ $\cos20^\circ\cos40^\circ\cos80^\circ$.
:::solution
გავამრავლოთ და გავყოთ $\sin20^\circ$-ზე და სამჯერ გამოვიყენოთ $2\sin x\cos x=\sin2x$:
$$\frac{8\sin20^\circ\cos20^\circ\cos40^\circ\cos80^\circ}{8\sin20^\circ}=\frac{4\sin40^\circ\cos40^\circ\cos80^\circ}{8\sin20^\circ}=\frac{2\sin80^\circ\cos80^\circ}{8\sin20^\circ}=\frac{\sin160^\circ}{8\sin20^\circ}.$$
$\sin160^\circ=\sin20^\circ$, ამიტომ პასუხია $\frac18$.

**პასუხი:** $\dfrac18$.
:::
:::

## გავრცელებული შეცდომები

- **„წრფივობა“.** $\sin2\alpha\neq2\sin\alpha$, $\cos(\alpha+\beta)\neq\cos\alpha+\cos\beta$.
- **ნიშანი კოსინუსის ფორმულაში.** $\cos(\alpha+\beta)$-ში **მინუსია**: $\cos\alpha\cos\beta-\sin\alpha\sin\beta$.
- **$\cos2\alpha$-ის ვარიანტის არჩევა.** სამი ფორმიდან ვირჩევთ იმას, რომელიც ერთ ფუნქციაზე დაიყვანს გამოსახულებას.
- **ნიშანი ნახევარი კუთხისას.** $\sin\frac\alpha2=\pm\sqrt{\frac{1-\cos\alpha}2}$ — ნიშანს $\frac\alpha2$-ის მეოთხედი წყვეტს.

## შეამოწმე თავი

:::check
გამოთვალეთ $\cos^2 15^\circ-\sin^2 15^\circ$.
:::answer
$\cos30^\circ=\frac{\sqrt3}2$.
:::
:::

:::check
იპოვეთ $3\sin x+4\cos x$-ის უდიდესი მნიშვნელობა.
:::answer
$\sqrt{9+16}=5$.
:::
:::

:::check
გამოთვალეთ $2\sin\dfrac{\pi}{12}\cos\dfrac{\pi}{12}$.
:::answer
$\sin\frac\pi6=\frac12$.
:::
:::
