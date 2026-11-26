---
id: antiderivative
title: პირველადი, ინტეგრების ხერხები
area: calculus
group: calc
grades: [11]
prerequisites: [derivative]
next: [definite-integral]
reviewed: true
---

## მთავარი იდეა

ინტეგრება გაწარმოების შებრუნებული მოქმედებაა: ვეძებთ $F$ ფუნქციას, რომლის წარმოებულია მოცემული $f$. ასეთი $F$ უამრავია — ისინი ერთმანეთისგან მუდმივით განსხვავდება, ამიტომ ვწერთ $+C$.

გაწარმოებისგან განსხვავებით, ინტეგრებას „წესი ყველა შემთხვევისთვის“ არ აქვს. ვიყენებთ ცხრილს და ორ მთავარ ხერხს: **ჩასმას** (ცვლადის შეცვლას) და **ნაწილობით ინტეგრებას**.

## განმარტებები და ფორმულები

:::definition
$F$ არის $f$-ის **პირველადი** შუალედზე, თუ $F'(x)=f(x)$. ყველა პირველადის სიმრავლე — **განუსაზღვრელი ინტეგრალი**: $\displaystyle\int f(x)\,dx=F(x)+C$.
:::

:::formula ცხრილი
| $f(x)$ | $\int f\,dx$ | $f(x)$ | $\int f\,dx$ |
|---|---|---|---|
| $x^n\ (n\ne-1)$ | $\frac{x^{n+1}}{n+1}$ | $\sin x$ | $-\cos x$ |
| $\frac1x$ | $\ln\lvert x\rvert$ | $\cos x$ | $\sin x$ |
| $e^x$ | $e^x$ | $\frac{1}{\cos^2x}$ | $\operatorname{tg}x$ |
| $a^x$ | $\frac{a^x}{\ln a}$ | $\frac{1}{1+x^2}$ | $\operatorname{arctg}x$ |
:::

:::formula ხერხები
- წრფივობა: $\int(af+bg)=a\int f+b\int g$.
- წრფივი არგუმენტი: $\int f(kx+b)\,dx=\dfrac1kF(kx+b)+C$.
- ჩასმა: $\int f(g(x))\,g'(x)\,dx=F(g(x))+C$.
- ნაწილობით: $\int u\,dv=uv-\int v\,du$.
:::

## დამტკიცება

**ყველა პირველადი $F+C$-ია.** თუ $F'=G'=f$, მაშინ $(G-F)'=0$. ლაგრანჟის თეორემით ფუნქცია ნულოვანი წარმოებულით მუდმივია შუალედზე: $G=F+C$. $\blacksquare$

**ნაწილობით ინტეგრება** ნამრავლის წესიდან: $(uv)'=u'v+uv'$, ამიტომ $uv=\int u'v\,dx+\int uv'\,dx$.

## ამოხსნილი მაგალითები

:::example მარტივი
იპოვეთ $\displaystyle\int(3x^2-4x+1)\,dx$ და $\displaystyle\int\cos3x\,dx$.
:::solution
$x^3-2x^2+x+C$; $\dfrac{\sin3x}{3}+C$.

**პასუხი:** იხ. ზემოთ.
:::
:::

:::example საშუალო
იპოვეთ $f(x)=2x+\sin x$-ის პირველადი, რომლისთვისაც $F(0)=3$. იპოვეთ $\displaystyle\int xe^{x^2}\,dx$.
:::solution
$F=x^2-\cos x+C$, $F(0)=-1+C=3$, $C=4$: $F=x^2-\cos x+4$.

ჩასმა $t=x^2$, $dt=2x\,dx$: $\displaystyle\int xe^{x^2}dx=\frac12\int e^t\,dt=\frac12e^{x^2}+C$.

**პასუხი:** $x^2-\cos x+4$; $\dfrac12e^{x^2}+C$.
:::
:::

:::example რთული
იპოვეთ $\displaystyle\int x\ln x\,dx$ და $\displaystyle\int x\sin x\,dx$.
:::solution
1) $u=\ln x$, $dv=x\,dx$: $du=\dfrac{dx}{x}$, $v=\dfrac{x^2}{2}$.
$$\int x\ln x\,dx=\frac{x^2}{2}\ln x-\int\frac{x^2}{2}\cdot\frac1x\,dx=\frac{x^2}{2}\ln x-\frac{x^2}{4}+C.$$

2) $u=x$, $dv=\sin x\,dx$: $v=-\cos x$.
$$\int x\sin x\,dx=-x\cos x+\int\cos x\,dx=-x\cos x+\sin x+C.$$

**პასუხი:** იხ. ზემოთ.
:::
:::

## გავრცელებული შეცდომები

- **$+C$-ის დავიწყება.** განუსაზღვრელი ინტეგრალი ფუნქციების ოჯახია.
- **$\int\frac1x=\frac{x^0}{0}$.** $n=-1$ გამონაკლისია: $\int\frac{dx}{x}=\ln|x|+C$.
- **წრფივი არგუმენტის კოეფიციენტი.** $\int\cos3x\,dx=\dfrac13\sin3x$, არა $3\sin3x$.

## შეამოწმე თავი

:::check
იპოვეთ $\displaystyle\int\frac{dx}{2x+1}$.
:::answer
$\dfrac12\ln|2x+1|+C$.
:::
:::

:::check
იპოვეთ $\displaystyle\int\sin^2x\,dx$.
:::answer
$\sin^2x=\dfrac{1-\cos2x}{2}$: $\dfrac x2-\dfrac{\sin2x}{4}+C$.
:::
:::

:::check
შეამოწმეთ გაწარმოებით, რომ $\displaystyle\int\ln x\,dx=x\ln x-x+C$.
:::answer
$(x\ln x-x)'=\ln x+1-1=\ln x$.
:::
:::
