---
id: trig-eq
title: ტრიგონომეტრიული განტოლებები
area: algebra
group: trigonometry
grades: [10]
prerequisites: [inverse-trig, sum-formulas, quadratic-eq]
next: [trig-ineq, product-sum]
reviewed: false
---

## მთავარი იდეა

ყოველი ტრიგონომეტრიული განტოლება ბოლოს უმარტივეს განტოლებებზე დადის: $\sin x=a$, $\cos x=a$, $\operatorname{tg}x=a$. მათ უსასრულოდ ბევრი ამონახსნი აქვთ, რომლებიც ერთი ფორმულით — სერიით — იწერება. ძირითადი ხერხებია: ერთ ფუნქციაზე დაყვანა და ჩანაცვლება, მამრავლებად დაშლა და ერთგვაროვან განტოლებაში $\cos^2x$-ზე გაყოფა.

## განმარტებები და ფორმულები

:::formula უმარტივესი განტოლებები ($k\in\mathbb Z$)
$$\sin x=a\ (|a|\le1):\quad x=(-1)^k\arcsin a+\pi k;$$
$$\cos x=a\ (|a|\le1):\quad x=\pm\arccos a+2\pi k;$$
$$\operatorname{tg}x=a:\quad x=\operatorname{arctg}a+\pi k.$$
თუ $|a|>1$, $\sin x=a$ და $\cos x=a$ ამონახსნი არ აქვს.
:::

:::formula კერძო შემთხვევები
$$\sin x=0\iff x=\pi k,\qquad \sin x=\pm1\iff x=\pm\frac\pi2+2\pi k,$$
$$\cos x=0\iff x=\frac\pi2+\pi k,\qquad \cos x=1\iff x=2\pi k,\qquad \cos x=-1\iff x=\pi+2\pi k.$$
:::

:::formula ხერხები
1. **ერთ ფუნქციაზე დაყვანა:** მაგ., $\cos^2x=1-\sin^2x$, შემდეგ $t=\sin x$, $|t|\le1$.
2. **მამრავლებად დაშლა:** $f\cdot g=0\iff f=0$ ან $g=0$ (განსაზღვრის არის გათვალისწინებით).
3. **ერთგვაროვანი:** $a\sin^2x+b\sin x\cos x+c\cos^2x=0$ — თუ $\cos x=0$ ამონახსნი არ არის, ვყოფთ $\cos^2x$-ზე და ვიღებთ კვადრატულს $\operatorname{tg}x$-ის მიმართ.
4. **დამხმარე კუთხე:** $a\sin x+b\cos x=c$.
:::

## დამტკიცება

**$\sin x=a$-ს სერია.** $[-\frac\pi2;\frac\pi2]$-ზე ამონახსნია $x_0=\arcsin a$. ერთეულოვან წრეწირზე იგივე ორდინატა აქვს $P_{\pi-x_0}$ წერტილსაც. ამიტომ ერთ ბრუნზე ამონახსნებია $x_0$ და $\pi-x_0$, ხოლო ყველა ამონახსნი:
$$x=x_0+2\pi n\quad\text{ან}\quad x=\pi-x_0+2\pi n.$$
ლუწი $k=2n$-ისთვის $(-1)^kx_0+\pi k=x_0+2\pi n$, კენტი $k=2n+1$-ისთვის $-x_0+\pi+2\pi n$ — ორივე სერია ერთ ფორმულაშია. $\blacksquare$

## ამოხსნილი მაგალითები

:::example მარტივი
ამოხსენით $2\cos x=\sqrt3$.
:::solution
$\cos x=\frac{\sqrt3}2$, $x=\pm\frac\pi6+2\pi k$, $k\in\mathbb Z$.
:::
:::

:::example საშუალო
ამოხსენით $2\sin^2x+3\cos x=0$.
:::solution
$2(1-\cos^2x)+3\cos x=0\iff2\cos^2x-3\cos x-2=0$. $t=\cos x$: $t=2$ ან $t=-\frac12$. $t=2$ შეუძლებელია ($|t|\le1$).

$\cos x=-\frac12$: $x=\pm\frac{2\pi}3+2\pi k$.

**პასუხი:** $x=\pm\dfrac{2\pi}3+2\pi k$, $k\in\mathbb Z$.
:::
:::

:::example რთული
ამოხსენით $\sin^2x-3\sin x\cos x+2\cos^2x=0$.
:::solution
თუ $\cos x=0$, მაშინ $\sin^2x=1$ და განტოლება იძლევა $1=0$ — ასეთი ამონახსნი არ არის. ამიტომ შეგვიძლია გავყოთ $\cos^2x$-ზე:
$$\operatorname{tg}^2x-3\operatorname{tg}x+2=0\iff\operatorname{tg}x=1\ \text{ან}\ \operatorname{tg}x=2.$$
**პასუხი:** $x=\dfrac\pi4+\pi k$ ან $x=\operatorname{arctg}2+\pi k$, $k\in\mathbb Z$.
:::
:::

## გავრცელებული შეცდომები

- **ერთი ამონახსნის დაწერა.** $\cos x=\frac12$-ის პასუხი არ არის მხოლოდ $\frac\pi3$ — საჭიროა მთელი სერია $\pm\frac\pi3+2\pi k$.
- **$|t|\le1$-ის დავიწყება.** $\cos x=2$ ამონახსნს არ იძლევა.
- **$\cos x$-ზე გაყოფა შემოწმების გარეშე.** ჯერ ვამოწმებთ, არის თუ არა $\cos x=0$ ამონახსნი, თორემ ფესვებს დავკარგავთ.
- **$\operatorname{tg}$-ის პერიოდი.** $\operatorname{tg}x=a$-ში $+\pi k$, არა $+2\pi k$.

## შეამოწმე თავი

:::check
ამოხსენით $\sin x=-1$.
:::answer
$x=-\frac\pi2+2\pi k$.
:::
:::

:::check
ამოხსენით $\operatorname{tg}2x=1$.
:::answer
$2x=\frac\pi4+\pi k$, $x=\frac\pi8+\frac{\pi k}2$.
:::
:::

:::check
რამდენი ამონახსნი აქვს $\sin x=0{,}5$-ს $[0;2\pi]$-ზე?
:::answer
ორი: $\frac\pi6$ და $\frac{5\pi}6$.
:::
:::
