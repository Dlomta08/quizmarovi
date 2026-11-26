---
id: func-limit
title: ფუნქციის ზღვარი, შესანიშნავი ზღვრები
area: calculus
group: calc
grades: [11]
prerequisites: [seq-limit, function-props]
next: [continuity, lhopital]
reviewed: true
---

## მთავარი იდეა

$\lim\limits_{x\to a}f(x)=A$ ნიშნავს: როცა $x$ უახლოვდება $a$-ს (მაგრამ $a$-ს არ უდრის), $f(x)$ უახლოვდება $A$-ს. თავად $f(a)$ შეიძლება არც არსებობდეს.

ზღვრები ყველაზე საინტერესოა განუზღვრელობებში, როგორიცაა $\dfrac00$. მათ ვხსნით გამარტივებით (შეკვეცა, შეუღლებული) ან ორი **შესანიშნავი ზღვრით**.

## განმარტებები და ფორმულები

:::definition
$\lim\limits_{x\to a}f(x)=A$, თუ ნებისმიერი $\varepsilon>0$-ისთვის არსებობს $\delta>0$, რომ $0<|x-a|<\delta$-დან გამომდინარეობს $|f(x)-A|<\varepsilon$. **ცალმხრივი** ზღვრები: $x\to a^-$ (მარცხნიდან) და $x\to a^+$ (მარჯვნიდან). ზღვარი არსებობს ⟺ ორივე ცალმხრივი არსებობს და ტოლია.
:::

:::formula პირველი შესანიშნავი ზღვარი
$$\lim_{x\to0}\frac{\sin x}{x}=1.$$
შედეგები: $\dfrac{\operatorname{tg}x}{x}\to1$, $\dfrac{\arcsin x}{x}\to1$, $\dfrac{1-\cos x}{x^2}\to\dfrac12$.
:::

:::formula მეორე შესანიშნავი ზღვარი
$$\lim_{x\to\infty}\left(1+\frac1x\right)^x=e,\qquad \lim_{x\to0}(1+x)^{1/x}=e.$$
შედეგები: $\dfrac{\ln(1+x)}{x}\to1$, $\dfrac{e^x-1}{x}\to1$ ($x\to0$).
:::

## დამტკიცება

**$\dfrac{\sin x}{x}\to1$.** ერთეულოვან წრეში $0<x<\dfrac\pi2$-ისთვის ფართობები შევადაროთ: სამკუთხედი $\subset$ სექტორი $\subset$ მხების სამკუთხედი:
$$\frac{\sin x}{2}<\frac x2<\frac{\operatorname{tg}x}{2}.$$
გავყოთ $\dfrac{\sin x}{2}$-ზე და შევაბრუნოთ: $\cos x<\dfrac{\sin x}{x}<1$. $\cos x\to1$, ორი პოლიციელის თეორემით $\dfrac{\sin x}{x}\to1$. უარყოფითი $x$-ისთვის ფუნქცია ლუწია. $\blacksquare$

**$\dfrac{1-\cos x}{x^2}$.** $1-\cos x=2\sin^2\dfrac x2$, ამიტომ $\dfrac{1-\cos x}{x^2}=\dfrac12\left(\dfrac{\sin(x/2)}{x/2}\right)^2\to\dfrac12$.

## ამოხსნილი მაგალითები

:::example მარტივი
იპოვეთ $\lim\limits_{x\to2}\dfrac{x^2-4}{x-2}$.
:::solution
$\dfrac00$. შევკვეცოთ: $\dfrac{(x-2)(x+2)}{x-2}=x+2\to4$.

**პასუხი:** $4$.
:::
:::

:::example საშუალო
იპოვეთ $\lim\limits_{x\to0}\dfrac{\sin5x}{\operatorname{tg}3x}$.
:::solution
$$\frac{\sin5x}{\operatorname{tg}3x}=\frac{\sin5x}{5x}\cdot\frac{3x}{\operatorname{tg}3x}\cdot\frac53\to1\cdot1\cdot\frac53.$$

**პასუხი:** $\dfrac53$.
:::
:::

:::example რთული
იპოვეთ $\lim\limits_{x\to\infty}\left(1+\dfrac3x\right)^{2x}$ და $\lim\limits_{x\to0}\dfrac{e^{3x}-1}{\ln(1+2x)}$.
:::solution
1) $t=\dfrac x3$: $\left(1+\dfrac1t\right)^{6t}=\left(\left(1+\frac1t\right)^t\right)^6\to e^6$.

2) $$\frac{e^{3x}-1}{\ln(1+2x)}=\frac{e^{3x}-1}{3x}\cdot\frac{2x}{\ln(1+2x)}\cdot\frac32\to\frac32.$$

**პასუხი:** $e^6$ და $\dfrac32$.
:::
:::

## გავრცელებული შეცდომები

- **$f(a)$-ს ჩასმა $\dfrac00$-ის შემთხვევაში.** $\dfrac00$ რიცხვი არ არის — ჯერ გაამარტივეთ.
- **$\dfrac{\sin x}{x}\to1$ ნებისმიერ წერტილში.** ეს მხოლოდ $x\to0$-ისთვისაა. $x\to\infty$-ზე $\dfrac{\sin x}{x}\to0$.
- **ცალმხრივი ზღვრების დავიწყება.** $\dfrac{|x|}{x}$-ს $0$-ში ზღვარი არ აქვს: მარცხნიდან $-1$, მარჯვნიდან $1$.

## შეამოწმე თავი

:::check
იპოვეთ $\lim\limits_{x\to1}\dfrac{x^3-1}{x-1}$.
:::answer
$x^2+x+1\to3$.
:::
:::

:::check
იპოვეთ $\lim\limits_{x\to0}\dfrac{\sqrt{1+x}-1}{x}$.
:::answer
შეუღლებულით: $\dfrac{1}{\sqrt{1+x}+1}\to\dfrac12$.
:::
:::

:::check
იპოვეთ $\lim\limits_{x\to0}\dfrac{1-\cos4x}{x^2}$.
:::answer
$\dfrac{1-\cos4x}{(4x)^2}\cdot16\to\dfrac12\cdot16=8$.
:::
:::
