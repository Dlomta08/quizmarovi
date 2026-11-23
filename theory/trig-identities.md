---
id: trig-identities
title: ტრიგონომეტრიული იგივეობები
area: algebra
group: trigonometry
grades: [10]
prerequisites: [radians, identities]
next: [reduction, sum-formulas, trig-eq]
reviewed: true
---

## მთავარი იდეა

ერთი და იმავე კუთხის სინუსი, კოსინუსი, ტანგენსი და კოტანგენსი ერთმანეთთან მჭიდროდაა დაკავშირებული. ძირითადი კავშირია $\sin^2\alpha+\cos^2\alpha=1$ — ეს პითაგორას თეორემაა ერთეულოვან წრეწირზე. ერთი ფუნქციის მნიშვნელობით (და მეოთხედის ცოდნით) დანარჩენი სამი ცალსახად გამოითვლება.

## განმარტებები და ფორმულები

:::theorem ძირითადი ტრიგონომეტრიული იგივეობა
$$\sin^2\alpha+\cos^2\alpha=1.$$
:::

:::formula შედეგები
$$\operatorname{tg}\alpha\cdot\operatorname{ctg}\alpha=1,\qquad 1+\operatorname{tg}^2\alpha=\frac1{\cos^2\alpha},\qquad 1+\operatorname{ctg}^2\alpha=\frac1{\sin^2\alpha}.$$
(იქ, სადაც ყველა გამოსახულება განსაზღვრულია.)
:::

:::formula ლუწ-კენტობა
$$\sin(-\alpha)=-\sin\alpha,\qquad \cos(-\alpha)=\cos\alpha,\qquad \operatorname{tg}(-\alpha)=-\operatorname{tg}\alpha.$$
:::

:::formula შეზღუდულობა
$-1\le\sin\alpha\le1$, $-1\le\cos\alpha\le1$. $\operatorname{tg}\alpha$ და $\operatorname{ctg}\alpha$ ნებისმიერ ნამდვილ მნიშვნელობას იღებს.
:::

## დამტკიცება

$P_\alpha(\cos\alpha;\sin\alpha)$ ერთეულოვან წრეწირზე დევს, ანუ მისი მანძილი სათავემდე $1$-ია:
$$\cos^2\alpha+\sin^2\alpha=1.$$
გავყოთ ორივე მხარე $\cos^2\alpha\neq0$-ზე:
$$\operatorname{tg}^2\alpha+1=\frac1{\cos^2\alpha}.$$
$\sin^2\alpha$-ზე გაყოფით მიიღება მესამე ფორმულა.

ლუწ-კენტობა: $P_{-\alpha}$ არის $P_\alpha$-ს სიმეტრიული $Ox$ ღერძის მიმართ — აბსცისა იგივეა, ორდინატას ნიშანი ეცვლება. $\blacksquare$

## ამოხსნილი მაგალითები

:::example მარტივი
გაამარტივეთ $(1-\sin\alpha)(1+\sin\alpha)$.
:::solution
$1-\sin^2\alpha=\cos^2\alpha$.

**პასუხი:** $\cos^2\alpha$.
:::
:::

:::example საშუალო
$\sin\alpha=-\dfrac35$ და $\pi<\alpha<\dfrac{3\pi}2$. იპოვეთ $\cos\alpha$ და $\operatorname{tg}\alpha$.
:::solution
$\cos^2\alpha=1-\frac9{25}=\frac{16}{25}$. III მეოთხედში $\cos\alpha<0$, ამიტომ $\cos\alpha=-\frac45$. $\operatorname{tg}\alpha=\frac{-3/5}{-4/5}=\frac34$.

**პასუხი:** $\cos\alpha=-\dfrac45$, $\operatorname{tg}\alpha=\dfrac34$.
:::
:::

:::example რთული
$\sin\alpha+\cos\alpha=\dfrac12$. იპოვეთ $\sin\alpha\cos\alpha$ და $\sin^3\alpha+\cos^3\alpha$.
:::solution
ავიყვანოთ კვადრატში: $\sin^2\alpha+2\sin\alpha\cos\alpha+\cos^2\alpha=\frac14$, ანუ $1+2\sin\alpha\cos\alpha=\frac14$, საიდანაც $\sin\alpha\cos\alpha=-\frac38$.

კუბების ჯამი:
$$\sin^3\alpha+\cos^3\alpha=(\sin\alpha+\cos\alpha)(1-\sin\alpha\cos\alpha)=\frac12\cdot\frac{11}8=\frac{11}{16}.$$
**პასუხი:** $-\dfrac38$ და $\dfrac{11}{16}$.
:::
:::

## გავრცელებული შეცდომები

- **ნიშნის დავიწყება.** $\cos\alpha=\pm\sqrt{1-\sin^2\alpha}$ — ნიშანს მეოთხედი წყვეტს.
- **$\sin^2\alpha$ და $\sin\alpha^2$.** პირველი $(\sin\alpha)^2$-ია, მეორე — კვადრატის სინუსი.
- **$\sin(\alpha+\beta)=\sin\alpha+\sin\beta$.** არასწორია — იხ. ჯამის ფორმულები.
- **განსაზღვრის არე.** $\operatorname{tg}\alpha$ არ არსებობს, როცა $\cos\alpha=0$; იგივეობები მხოლოდ იქ მოქმედებს, სადაც ყველაფერი განსაზღვრულია.

## შეამოწმე თავი

:::check
გაამარტივეთ $\dfrac{1}{\cos^2\alpha}-\operatorname{tg}^2\alpha$.
:::answer
$1$.
:::
:::

:::check
შეიძლება თუ არა, რომ $\sin\alpha=\dfrac35$ და $\cos\alpha=\dfrac35$ ერთდროულად?
:::answer
არა: $\frac9{25}+\frac9{25}\neq1$.
:::
:::

:::check
$\operatorname{tg}\alpha=2$. იპოვეთ $\dfrac{\sin\alpha+\cos\alpha}{\sin\alpha-\cos\alpha}$.
:::answer
გავყოთ $\cos\alpha$-ზე: $\frac{\operatorname{tg}\alpha+1}{\operatorname{tg}\alpha-1}=\frac31=3$.
:::
:::
