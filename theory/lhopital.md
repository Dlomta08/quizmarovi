---
id: lhopital
title: ლოპიტალის წესი
area: calculus
group: calc
grades: [11]
prerequisites: [derivative]
next: [monotonic-extrema, curve-sketching]
reviewed: true
---

## მთავარი იდეა

ლოპიტალის წესი $\dfrac00$ და $\dfrac\infty\infty$ განუზღვრელობებს ხსნის: ფუნქციების ფარდობის ზღვარი იმავეა, რაც მათი წარმოებულების ფარდობისა. ის ხშირად ცვლის შესანიშნავ ზღვრებსა და რთულ გარდაქმნებს.

სხვა განუზღვრელობები ($0\cdot\infty$, $\infty-\infty$, $1^\infty$, $0^0$, $\infty^0$) ჯერ ამ ორიდან ერთზე დაიყვანება — ფარდობად ჩაწერით ან ლოგარითმით.

## განმარტებები და ფორმულები

:::theorem ლოპიტალის წესი
თუ $f(x)\to0$ და $g(x)\to0$ (ან ორივე $\to\infty$), როცა $x\to a$, და არსებობს $\lim\dfrac{f'(x)}{g'(x)}$, მაშინ
$$\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f'(x)}{g'(x)}.$$
($a$ შეიძლება იყოს $\pm\infty$.) წესი შეიძლება რამდენჯერმე გამოვიყენოთ.
:::

:::formula სხვა განუზღვრელობები
- $0\cdot\infty$: $fg=\dfrac{f}{1/g}$.
- $\infty-\infty$: საერთო მნიშვნელამდე დაყვანა.
- $1^\infty$, $0^0$, $\infty^0$: $f^g=e^{g\ln f}$, ვითვლით $\lim g\ln f$-ს.
:::

:::formula ზრდის სიჩქარეები ($x\to+\infty$)
$$\ln x\ \ll\ x^\alpha\ \ll\ a^x\qquad(\alpha>0,\ a>1):\qquad \frac{\ln x}{x^\alpha}\to0,\quad \frac{x^\alpha}{a^x}\to0.$$
:::

## რატომ მუშაობს

მარტივ შემთხვევაში, როცა $f(a)=g(a)=0$ და $g'(a)\ne0$:
$$\frac{f(x)}{g(x)}=\frac{f(x)-f(a)}{g(x)-g(a)}=\frac{\dfrac{f(x)-f(a)}{x-a}}{\dfrac{g(x)-g(a)}{x-a}}\to\frac{f'(a)}{g'(a)}.$$
ანუ $a$-ს მახლობლად ორივე ფუნქცია თავის მხებს „ჰგავს“, და ფარდობა მხებების კუთხური კოეფიციენტების ფარდობაა. ზოგადი შემთხვევა კოშის თეორემით მტკიცდება.

## ამოხსნილი მაგალითები

:::example მარტივი
იპოვეთ $\lim\limits_{x\to0}\dfrac{e^x-1-x}{x^2}$.
:::solution
$\dfrac00$. ლოპიტალი: $\dfrac{e^x-1}{2x}$ — ისევ $\dfrac00$. კიდევ ერთხელ: $\dfrac{e^x}{2}\to\dfrac12$.

**პასუხი:** $\dfrac12$.
:::
:::

:::example საშუალო
იპოვეთ $\lim\limits_{x\to+\infty}\dfrac{x^2}{e^x}$ და $\lim\limits_{x\to0^+}x\ln x$.
:::solution
1) $\dfrac\infty\infty$, ორჯერ ლოპიტალი: $\dfrac{2x}{e^x}\to\dfrac{2}{e^x}\to0$.

2) $0\cdot\infty$: $\dfrac{\ln x}{1/x}$ — $\dfrac\infty\infty$. ლოპიტალი: $\dfrac{1/x}{-1/x^2}=-x\to0$.

**პასუხი:** $0$ და $0$.
:::
:::

:::example რთული
იპოვეთ $\lim\limits_{x\to0}\left(\dfrac{1}{\sin x}-\dfrac1x\right)$ და $\lim\limits_{x\to0^+}x^x$.
:::solution
1) $\infty-\infty$. საერთო მნიშვნელი: $\dfrac{x-\sin x}{x\sin x}$ — $\dfrac00$.
$$\frac{1-\cos x}{\sin x+x\cos x}\ \to\ \frac{\sin x}{2\cos x-x\sin x}\to\frac02=0.$$

2) $0^0$. $x^x=e^{x\ln x}$, და $x\ln x\to0$ (წინა მაგალითი). ამიტომ $x^x\to e^0=1$.

**პასუხი:** $0$ და $1$.
:::
:::

## გავრცელებული შეცდომები

- **განუზღვრელობის გარეშე.** $\lim\limits_{x\to0}\dfrac{x+1}{x}$ განუზღვრელობა არ არის — ლოპიტალის გამოყენება აქ არასწორ პასუხს მისცემს ($1$).
- **განაყოფის წარმოებული.** წესში ვაწარმოებთ მრიცხველს და მნიშვნელს **ცალ-ცალკე**, არა $\left(\dfrac fg\right)'$-ს.
- **წარმოებულების ფარდობის ზღვარი არ არსებობს.** $\dfrac{x+\sin x}{x}\to1$ ($x\to\infty$), თუმცა $\dfrac{1+\cos x}{1}$-ს ზღვარი არ აქვს. წესი მაშინ არაფერს ამბობს.

## შეამოწმე თავი

:::check
იპოვეთ $\lim\limits_{x\to+\infty}\dfrac{\ln x}{x}$.
:::answer
$\dfrac{1/x}{1}\to0$.
:::
:::

:::check
იპოვეთ $\lim\limits_{x\to0}\dfrac{x-\sin x}{x^3}$.
:::answer
სამჯერ ლოპიტალი: $\dfrac{1-\cos x}{3x^2}\to\dfrac{\sin x}{6x}\to\dfrac{\cos x}{6}\to\dfrac16$.
:::
:::

:::check
იპოვეთ $\lim\limits_{x\to0}(1+\sin x)^{1/x}$.
:::answer
$\dfrac{\ln(1+\sin x)}{x}\to\dfrac{\cos x}{1+\sin x}\to1$, ამიტომ ზღვარი $e$-ა.
:::
:::
