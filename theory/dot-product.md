---
id: dot-product
title: სკალარული ნამრავლი
area: geometry
group: vectors-coords
grades: [9]
prerequisites: [vectors, law-cos-sin]
next: [line-circle-eq]
reviewed: true
---

## მთავარი იდეა

ორი ვექტორის სკალარული ნამრავლი რიცხვია: სიგრძეების ნამრავლი გამრავლებული მათ შორის კუთხის კოსინუსზე. კოორდინატებში ის ძალიან მარტივად ითვლება: $x_1x_2+y_1y_2$.

ამიტომ სკალარული ნამრავლი არის ხიდი კოორდინატებსა და კუთხეებს შორის. მისი მთავარი გამოყენება: მართობულობის შემოწმება ($\vec a\cdot\vec b=0$) და კუთხის პოვნა.

## განმარტებები და ფორმულები

:::definition
$$\vec a\cdot\vec b=|\vec a|\,|\vec b|\cos\varphi,$$
სადაც $\varphi$ ვექტორებს შორის კუთხეა ($0^\circ\le\varphi\le180^\circ$).
:::

:::formula კოორდინატებში
$\vec a=(x_1,y_1)$, $\vec b=(x_2,y_2)$:
$$\vec a\cdot\vec b=x_1x_2+y_1y_2,\qquad \cos\varphi=\frac{x_1x_2+y_1y_2}{\sqrt{x_1^2+y_1^2}\,\sqrt{x_2^2+y_2^2}}.$$
:::

:::theorem თვისებები
- $\vec a\cdot\vec a=|\vec a|^2$.
- $\vec a\perp\vec b\iff\vec a\cdot\vec b=0$.
- $\vec a\cdot\vec b>0$ ⟺ კუთხე მახვილია; $<0$ ⟺ ბლაგვია.
- $\vec a\cdot\vec b=\vec b\cdot\vec a$, $(\vec a+\vec b)\cdot\vec c=\vec a\cdot\vec c+\vec b\cdot\vec c$, $(k\vec a)\cdot\vec b=k(\vec a\cdot\vec b)$.
:::

:::note
ფრჩხილები იხსნება ჩვეულებრივად: $|\vec a+\vec b|^2=|\vec a|^2+2\vec a\cdot\vec b+|\vec b|^2$.
:::

## დამტკიცება

**კოორდინატული ფორმულა.** სამკუთხედი $\vec a$, $\vec b$ და $\vec a-\vec b$ გვერდებით. კოსინუსების თეორემით
$$|\vec a-\vec b|^2=|\vec a|^2+|\vec b|^2-2|\vec a||\vec b|\cos\varphi.$$
კოორდინატებში მარცხენა მხარე $(x_1-x_2)^2+(y_1-y_2)^2=x_1^2+y_1^2+x_2^2+y_2^2-2(x_1x_2+y_1y_2)$-ია. შევადაროთ: $|\vec a||\vec b|\cos\varphi=x_1x_2+y_1y_2$. $\blacksquare$

## ამოხსნილი მაგალითები

:::example მარტივი
$\vec a=(1,2)$, $\vec b=(3,-1)$. იპოვეთ $\vec a\cdot\vec b$ და მათ შორის კუთხის კოსინუსი.
:::solution
$\vec a\cdot\vec b=3-2=1$. $|\vec a|=\sqrt5$, $|\vec b|=\sqrt{10}$.
$$\cos\varphi=\frac{1}{\sqrt{50}}=\frac{\sqrt2}{10}.$$

**პასუხი:** $1$ და $\dfrac{\sqrt2}{10}$.
:::
:::

:::example საშუალო
რისი ტოლი უნდა იყოს $k$, რომ $(2,k)$ და $(3,-6)$ ურთიერთმართობული იყოს? დაამტკიცეთ, რომ რომბის დიაგონალები ურთიერთმართობულია.
:::solution
$6-6k=0$, $k=1$.

რომბში $\vec a=\overrightarrow{AB}$, $\vec b=\overrightarrow{AD}$, $|\vec a|=|\vec b|$. დიაგონალებია $\vec a+\vec b$ და $\vec b-\vec a$:
$$(\vec a+\vec b)\cdot(\vec b-\vec a)=|\vec b|^2-|\vec a|^2=0.$$

**პასუხი:** $k=1$; დიაგონალები მართობულია.
:::
:::

:::example რთული
ვექტორებით დაამტკიცეთ, რომ სამკუთხედის სიმაღლეები (ან მათი გაგრძელებები) ერთ წერტილში იკვეთება.
:::solution
ნებისმიერი $H$ წერტილისთვის მართებულია იგივეობა (გახსენით ფრჩხილები):
$$(\vec H-\vec A)\cdot(\vec B-\vec C)+(\vec H-\vec B)\cdot(\vec C-\vec A)+(\vec H-\vec C)\cdot(\vec A-\vec B)=0.$$
$\vec H$-იანი წევრები ბათილდება ($\vec B-\vec C+\vec C-\vec A+\vec A-\vec B=\vec 0$), დანარჩენიც: $-\vec A\cdot\vec B+\vec A\cdot\vec C-\vec B\cdot\vec C+\vec B\cdot\vec A-\vec C\cdot\vec A+\vec C\cdot\vec B=0$.

ვთქვათ $H$ არის $A$ და $B$ წვეროებიდან გავლებული სიმაღლეების გადაკვეთა. მაშინ პირველი ორი წევრი $0$-ია, ამიტომ მესამეც: $\overrightarrow{CH}\perp\overrightarrow{AB}$. ე.ი. $H$ მესამე სიმაღლეზეც მდებარეობს. $\blacksquare$
:::
:::

## გავრცელებული შეცდომები

- **ნამრავლი ვექტორია.** სკალარული ნამრავლი **რიცხვია**, არა ვექტორი.
- **$\vec a\cdot\vec b=0$ ნიშნავს, რომ ერთ-ერთი ნულია.** არა — ის ნიშნავს მართობულობას.
- **ვექტორებს შორის კუთხე.** კუთხე იზომება ერთი სათავიდან გადაზომილ ვექტორებს შორის. $\overrightarrow{AB}$ და $\overrightarrow{BC}$ შორის კუთხე არ არის $\angle B$, არამედ $180^\circ-\angle B$.

## შეამოწმე თავი

:::check
ურთიერთმართობულია თუ არა $(3,4)$ და $(4,-3)$?
:::answer
კი: $12-12=0$.
:::
:::

:::check
$|\vec a|=2$, $|\vec b|=3$, მათ შორის კუთხე $60^\circ$. იპოვეთ $\vec a\cdot\vec b$.
:::answer
$2\cdot3\cdot\dfrac12=3$.
:::
:::

:::check
$|\vec a|=3$, $|\vec b|=4$, $\vec a\perp\vec b$. იპოვეთ $|\vec a+\vec b|$.
:::answer
$|\vec a+\vec b|^2=9+0+16=25$, $|\vec a+\vec b|=5$.
:::
:::
