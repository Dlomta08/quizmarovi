---
id: acute-trig
title: მახვილი კუთხის ტრიგონომეტრიული ფუნქციები
area: geometry
group: triangles
grades: [8]
prerequisites: [pythagoras]
next: [law-cos-sin, trig-identities]
reviewed: false
---

## მთავარი იდეა

მართკუთხა სამკუთხედში გვერდების ფარდობები დამოკიდებულია მხოლოდ მახვილ კუთხეზე და არა სამკუთხედის ზომაზე. ამ ფარდობებს სინუსი, კოსინუსი, ტანგენსი და კოტანგენსი ჰქვია.

მათი საშუალებით კუთხე და ერთი გვერდი საკმარისია, რომ დანარჩენი გვერდები ვიპოვოთ — და პირიქით: ორი გვერდით კუთხეს ვპოულობთ.

## განმარტებები და ფორმულები

:::definition
მართკუთხა სამკუთხედში $\alpha$ მახვილი კუთხისთვის:
$$\sin\alpha=\frac{\text{მოპირდაპირე კათეტი}}{\text{ჰიპოტენუზა}},\qquad \cos\alpha=\frac{\text{მიმდებარე კათეტი}}{\text{ჰიპოტენუზა}},$$
$$\operatorname{tg}\alpha=\frac{\text{მოპირდაპირე კათეტი}}{\text{მიმდებარე კათეტი}},\qquad \operatorname{ctg}\alpha=\frac{\text{მიმდებარე კათეტი}}{\text{მოპირდაპირე კათეტი}}.$$
:::

:::formula ძირითადი კავშირები
$$\sin^2\alpha+\cos^2\alpha=1,\qquad \operatorname{tg}\alpha=\frac{\sin\alpha}{\cos\alpha},\qquad \operatorname{tg}\alpha\cdot\operatorname{ctg}\alpha=1,$$
$$\sin(90^\circ-\alpha)=\cos\alpha,\qquad \cos(90^\circ-\alpha)=\sin\alpha.$$
:::

:::formula ცხრილი
| $\alpha$ | $30^\circ$ | $45^\circ$ | $60^\circ$ |
|---|---|---|---|
| $\sin\alpha$ | $\frac12$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$ |
| $\cos\alpha$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac12$ |
| $\operatorname{tg}\alpha$ | $\frac{\sqrt3}{3}$ | $1$ | $\sqrt3$ |
:::

:::note
$0<\sin\alpha<1$ და $0<\cos\alpha<1$, რადგან კათეტი ჰიპოტენუზაზე მოკლეა. როცა $\alpha$ იზრდება, $\sin\alpha$ და $\operatorname{tg}\alpha$ იზრდება, $\cos\alpha$ კი მცირდება.
:::

## დამტკიცება

$\sin^2\alpha+\cos^2\alpha=\dfrac{a^2}{c^2}+\dfrac{b^2}{c^2}=\dfrac{a^2+b^2}{c^2}=1$ — პითაგორას თეორემით.

ცხრილი: $30^\circ,60^\circ,90^\circ$ სამკუთხედის გვერდებია $1,\sqrt3,2$, ამიტომ $\sin30^\circ=\dfrac12$, $\cos30^\circ=\dfrac{\sqrt3}{2}$ და ა.შ. $45^\circ,45^\circ,90^\circ$ სამკუთხედის გვერდებია $1,1,\sqrt2$, ამიტომ $\sin45^\circ=\cos45^\circ=\dfrac1{\sqrt2}=\dfrac{\sqrt2}{2}$.

$\sin(90^\circ-\alpha)=\cos\alpha$: ერთი სამკუთხედის მეორე მახვილი კუთხე $90^\circ-\alpha$-ა, და მისთვის მოპირდაპირე კათეტი $\alpha$-ს მიმდებარეა.

## ამოხსნილი მაგალითები

:::example მარტივი
მართკუთხა სამკუთხედის კათეტებია $BC=3$, $AC=4$. იპოვეთ $\sin A$, $\cos A$, $\operatorname{tg}A$.
:::solution
$AB=5$. $A$-ს მოპირდაპირე კათეტია $BC=3$, მიმდებარე — $AC=4$.

**პასუხი:** $\sin A=\dfrac35$, $\cos A=\dfrac45$, $\operatorname{tg}A=\dfrac34$.
:::
:::

:::example საშუალო
$\alpha$ მახვილი კუთხეა, $\sin\alpha=\dfrac{5}{13}$. იპოვეთ $\cos\alpha$ და $\operatorname{tg}\alpha$.
:::solution
$\cos^2\alpha=1-\dfrac{25}{169}=\dfrac{144}{169}$. $\alpha$ მახვილია, $\cos\alpha>0$: $\cos\alpha=\dfrac{12}{13}$.

$\operatorname{tg}\alpha=\dfrac{5/13}{12/13}=\dfrac{5}{12}$.

**პასუხი:** $\dfrac{12}{13}$ და $\dfrac{5}{12}$.
:::
:::

:::example რთული
გეომეტრიული აგებით იპოვეთ $\operatorname{tg}15^\circ$.
:::solution
ავიღოთ $ABC$, $\angle C=90^\circ$, $\angle B=30^\circ$, $AC=1$. მაშინ $AB=2$, $BC=\sqrt3$.

$CB$ გავაგრძელოთ $B$-ს იქით და ავიღოთ $D$, რომ $BD=BA=2$. $ABD$ ტოლფერდაა, მისი გარე კუთხე $\angle ABC=30^\circ$ ორი ტოლი კუთხის ჯამია: $\angle D=15^\circ$.

$ACD$ მართკუთხა სამკუთხედში $CD=\sqrt3+2$:
$$\operatorname{tg}15^\circ=\frac{AC}{CD}=\frac{1}{2+\sqrt3}=\frac{2-\sqrt3}{(2+\sqrt3)(2-\sqrt3)}=2-\sqrt3.$$

**პასუხი:** $2-\sqrt3$.
:::
:::

## გავრცელებული შეცდომები

- **მოპირდაპირე და მიმდებარე.** კათეტი „მოპირდაპირეა“ ან „მიმდებარე“ მხოლოდ კონკრეტული კუთხის მიმართ: $A$-ს მოპირდაპირე კათეტი $B$-ს მიმდებარეა.
- **$\sin30^\circ$ და $\sin60^\circ$-ის არევა.** დაიმახსოვრეთ: მცირე კუთხეს მცირე სინუსი აქვს, $\sin30^\circ=\dfrac12<\dfrac{\sqrt3}{2}=\sin60^\circ$.
- **ნიშნის დავიწყება.** $\cos\alpha=\pm\sqrt{1-\sin^2\alpha}$; მახვილი კუთხისთვის ვიღებთ დადებითს.

## შეამოწმე თავი

:::check
გამოთვალეთ $\cos60^\circ+\sin30^\circ$.
:::answer
$\dfrac12+\dfrac12=1$.
:::
:::

:::check
$\operatorname{tg}\alpha=1$, $\alpha$ მახვილია. იპოვეთ $\alpha$.
:::answer
$45^\circ$: კათეტები ტოლია.
:::
:::

:::check
მართკუთხა სამკუთხედის ჰიპოტენუზა $10$-ია, ერთი კუთხე $30^\circ$. იპოვეთ კათეტები.
:::answer
$10\sin30^\circ=5$ და $10\cos30^\circ=5\sqrt3$.
:::
:::
