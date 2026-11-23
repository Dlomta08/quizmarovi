---
id: reduction
title: დაყვანის ფორმულები
area: algebra
group: trigonometry
grades: [10]
prerequisites: [radians, trig-identities]
next: [sum-formulas, trig-eq]
reviewed: true
---

## მთავარი იდეა

დაყვანის ფორმულები ნებისმიერი კუთხის ტრიგონომეტრიულ ფუნქციას მახვილი კუთხის ფუნქციამდე „აყვანს“. ათობით ფორმულის დამახსოვრება საჭირო არ არის — საკმარისია ერთი წესი, რომელიც ორ კითხვას პასუხობს: იცვლება თუ არა ფუნქციის სახელი და რა ნიშანი იწერება.

## განმარტებები და ფორმულები

:::formula ძირითადი ფორმულები
$$\sin(\pi-\alpha)=\sin\alpha,\qquad \cos(\pi-\alpha)=-\cos\alpha,$$
$$\sin(\pi+\alpha)=-\sin\alpha,\qquad \cos(\pi+\alpha)=-\cos\alpha,$$
$$\sin\left(\frac\pi2-\alpha\right)=\cos\alpha,\qquad \cos\left(\frac\pi2-\alpha\right)=\sin\alpha,$$
$$\sin\left(\frac\pi2+\alpha\right)=\cos\alpha,\qquad \cos\left(\frac\pi2+\alpha\right)=-\sin\alpha.$$
:::

:::theorem მნემონიკური წესი
$f\left(\frac{n\pi}{2}\pm\alpha\right)$-ის გამოსათვლელად:
1. **სახელი:** თუ $n$ კენტია ($\frac\pi2$, $\frac{3\pi}2$), ფუნქცია იცვლება „კო-ფუნქციით“ ($\sin\leftrightarrow\cos$, $\operatorname{tg}\leftrightarrow\operatorname{ctg}$). თუ $n$ ლუწია ($\pi$, $2\pi$) — სახელი რჩება.
2. **ნიშანი:** დავთვალოთ, რომ $\alpha$ მახვილია, დავადგინოთ რომელ მეოთხედშია $\frac{n\pi}2\pm\alpha$ და დავწეროთ **საწყისი** ფუნქციის ნიშანი ამ მეოთხედში.
:::

:::formula პერიოდულობა
$$\sin(\alpha+2\pi k)=\sin\alpha,\qquad \cos(\alpha+2\pi k)=\cos\alpha,\qquad \operatorname{tg}(\alpha+\pi k)=\operatorname{tg}\alpha.$$
:::

## დამტკიცება

**$\pi-\alpha$.** $P_{\pi-\alpha}$ არის $P_\alpha$-ს სიმეტრიული $Oy$ ღერძის მიმართ: ორდინატა იგივეა, აბსცისას ნიშანი ეცვლება. ამიტომ $\sin(\pi-\alpha)=\sin\alpha$, $\cos(\pi-\alpha)=-\cos\alpha$.

**$\pi+\alpha$.** $P_{\pi+\alpha}$ არის $P_\alpha$-ს სიმეტრიული სათავის მიმართ — ორივე კოორდინატა ნიშანს იცვლის.

**$\frac\pi2-\alpha$.** $P_{\frac\pi2-\alpha}$ არის $P_\alpha$-ს სიმეტრიული $y=x$ წრფის მიმართ, ამიტომ კოორდინატები ადგილებს ცვლის: $\cos\left(\frac\pi2-\alpha\right)=\sin\alpha$, $\sin\left(\frac\pi2-\alpha\right)=\cos\alpha$.

დანარჩენი ამ სამიდან მიიღება, მაგ. $\frac\pi2+\alpha=\pi-\left(\frac\pi2-\alpha\right)$. $\blacksquare$

## ამოხსნილი მაგალითები

:::example მარტივი
გამოთვალეთ $\cos\dfrac{5\pi}{6}$.
:::solution
$\cos\left(\pi-\frac\pi6\right)$: სახელი რჩება ($\pi$), II მეოთხედში კოსინუსი უარყოფითია: $-\cos\frac\pi6=-\frac{\sqrt3}2$.
:::
:::

:::example საშუალო
გაამარტივეთ $\sin\left(\dfrac{3\pi}2-\alpha\right)+\cos(\pi+\alpha)$.
:::solution
$\frac{3\pi}2$ — კენტი, სახელი იცვლება; $\frac{3\pi}2-\alpha$ III მეოთხედშია, სინუსი იქ უარყოფითია: $-\cos\alpha$.

$\cos(\pi+\alpha)=-\cos\alpha$.

**პასუხი:** $-2\cos\alpha$.
:::
:::

:::example რთული
გამოთვალეთ $\sin1^\circ\cdot\sin2^\circ\cdots\sin179^\circ$-ის ნიშანი და $\cos1^\circ+\cos2^\circ+\ldots+\cos179^\circ$.
:::solution
ყველა კუთხე $(0^\circ;180^\circ)$-შია, სადაც სინუსი დადებითია — ნამრავლი დადებითია.

ჯამში დავაწყვილოთ $k^\circ$ და $(180-k)^\circ$: $\cos(180^\circ-k^\circ)=-\cos k^\circ$, ამიტომ თითოეული წყვილის ჯამი $0$-ია. $k=1,\ldots,89$ — $89$ წყვილი, დარჩენილი $\cos90^\circ=0$.

**პასუხი:** ნამრავლი დადებითია, ჯამი $0$.
:::
:::

## გავრცელებული შეცდომები

- **ნიშანი ახალი ფუნქციის მიხედვით.** ნიშანი **საწყისი** ფუნქციისაა: $\sin\left(\frac{3\pi}2-\alpha\right)$-ში ვუყურებთ სინუსის ნიშანს III მეოთხედში.
- **სახელის შეცვლა $\pi$-თან.** $\pi$ და $2\pi$-ზე სახელი არ იცვლება.
- **$\operatorname{tg}$-ის პერიოდი.** $\operatorname{tg}$-ის პერიოდი $\pi$-ა, არა $2\pi$.
- **დიდი კუთხის დაყვანა.** ჯერ ვაკლებთ $2\pi$-ს ჯერადს: $\sin\frac{17\pi}6=\sin\left(2\pi+\frac{5\pi}6\right)=\sin\frac{5\pi}6=\frac12$.

## შეამოწმე თავი

:::check
გამოთვალეთ $\sin\dfrac{4\pi}3$.
:::answer
$\sin\left(\pi+\frac\pi3\right)=-\frac{\sqrt3}2$.
:::
:::

:::check
გაამარტივეთ $\operatorname{tg}(\pi-\alpha)$.
:::answer
$-\operatorname{tg}\alpha$ (II მეოთხედში ტანგენსი უარყოფითია).
:::
:::

:::check
გამოთვალეთ $\cos 300^\circ$.
:::answer
$\cos(360^\circ-60^\circ)=\cos60^\circ=\frac12$.
:::
:::
