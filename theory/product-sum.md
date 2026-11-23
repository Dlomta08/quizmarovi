---
id: product-sum
title: ნამრავლის ჯამად გარდაქმნა და პირიქით
area: algebra
group: trigonometry
grades: [10]
prerequisites: [sum-formulas]
next: [trig-eq, trig-ineq]
reviewed: true
---

## მთავარი იდეა

ტრიგონომეტრიულ განტოლებაში ჯამი ხშირად უნდა ვაქციოთ ნამრავლად — მაშინ „ნამრავლი ნულია“ წესით ის მარტივ განტოლებებად იშლება. პირიქით, ნამრავლის ჯამად გადაქცევა გამოთვლებსა და ჯამების შეჯამებას ამარტივებს. ორივე მიმართულების ფორმულები ჯამის ფორმულებიდან ერთი ნაბიჯით გამოდის.

## განმარტებები და ფორმულები

:::formula ჯამი → ნამრავლი
$$\sin\alpha+\sin\beta=2\sin\frac{\alpha+\beta}2\cos\frac{\alpha-\beta}2,\qquad \sin\alpha-\sin\beta=2\sin\frac{\alpha-\beta}2\cos\frac{\alpha+\beta}2,$$
$$\cos\alpha+\cos\beta=2\cos\frac{\alpha+\beta}2\cos\frac{\alpha-\beta}2,\qquad \cos\alpha-\cos\beta=-2\sin\frac{\alpha+\beta}2\sin\frac{\alpha-\beta}2.$$
:::

:::formula ნამრავლი → ჯამი
$$\sin\alpha\cos\beta=\frac12\big[\sin(\alpha+\beta)+\sin(\alpha-\beta)\big],$$
$$\cos\alpha\cos\beta=\frac12\big[\cos(\alpha-\beta)+\cos(\alpha+\beta)\big],$$
$$\sin\alpha\sin\beta=\frac12\big[\cos(\alpha-\beta)-\cos(\alpha+\beta)\big].$$
:::

:::note
ნამრავლი→ჯამი ფორმულები ხსნის „ტელესკოპურ“ ჯამებს: $2\sin\frac x2\cos kx=\sin\left(k+\frac12\right)x-\sin\left(k-\frac12\right)x$.
:::

## დამტკიცება

**ნამრავლი → ჯამი.** შევკრიბოთ
$$\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta,\qquad \sin(\alpha-\beta)=\sin\alpha\cos\beta-\cos\alpha\sin\beta.$$
მიიღება $\sin(\alpha+\beta)+\sin(\alpha-\beta)=2\sin\alpha\cos\beta$. ანალოგიურად კოსინუსებისთვის.

**ჯამი → ნამრავლი.** პირველ ფორმულაში ჩავსვათ $\alpha=\frac{x+y}2$, $\beta=\frac{x-y}2$ (მაშინ $\alpha+\beta=x$, $\alpha-\beta=y$):
$$2\sin\frac{x+y}2\cos\frac{x-y}2=\sin x+\sin y.\ \blacksquare$$

## ამოხსნილი მაგალითები

:::example მარტივი
გამოთვალეთ $\sin75^\circ+\sin15^\circ$.
:::solution
$2\sin45^\circ\cos30^\circ=2\cdot\frac{\sqrt2}2\cdot\frac{\sqrt3}2=\frac{\sqrt6}2$.
:::
:::

:::example საშუალო
ამოხსენით $\sin5x+\sin x=0$.
:::solution
$2\sin3x\cos2x=0$.
- $\sin3x=0$: $x=\dfrac{\pi k}3$.
- $\cos2x=0$: $2x=\frac\pi2+\pi n$, $x=\dfrac\pi4+\dfrac{\pi n}2$.

**პასუხი:** $x=\dfrac{\pi k}3$ ან $x=\dfrac\pi4+\dfrac{\pi n}2$, $k,n\in\mathbb Z$.
:::
:::

:::example რთული
დაამტკიცეთ: $\cos x+\cos3x+\cos5x=\dfrac{\sin6x}{2\sin x}$ ($\sin x\neq0$).
:::solution
გავამრავლოთ მარცხენა მხარე $2\sin x$-ზე და ყოველ შესაკრებს ვუსადაგოთ $2\sin x\cos kx=\sin(k+1)x-\sin(k-1)x$:
$$2\sin x\cos x=\sin2x,\qquad 2\sin x\cos3x=\sin4x-\sin2x,\qquad 2\sin x\cos5x=\sin6x-\sin4x.$$
ჯამი „ტელესკოპურად“ იკვეცება: $\sin6x$. ამიტომ მარცხენა მხარე $=\dfrac{\sin6x}{2\sin x}$. $\blacksquare$
:::
:::

## გავრცელებული შეცდომები

- **ნიშანი $\cos\alpha-\cos\beta$-ში.** წინ არის **მინუსი**: $-2\sin\frac{\alpha+\beta}2\sin\frac{\alpha-\beta}2$.
- **ნახევრების დავიწყება.** ჯამი→ნამრავლი ფორმულებში ნახევარჯამი და ნახევარსხვაობაა.
- **$\frac12$-ის დავიწყება** ნამრავლი→ჯამი ფორმულებში.
- **სერიების გაერთიანება.** პასუხში ორი სერია ცალ-ცალკე იწერება, თუ ისინი ერთმანეთს არ ფარავს.

## შეამოწმე თავი

:::check
გარდაქმენით ნამრავლად: $\cos3x+\cos x$.
:::answer
$2\cos2x\cos x$.
:::
:::

:::check
გამოთვალეთ $2\sin75^\circ\cos15^\circ$.
:::answer
$\sin90^\circ+\sin60^\circ=1+\frac{\sqrt3}2$.
:::
:::

:::check
გამოთვალეთ $\cos75^\circ-\cos15^\circ$.
:::answer
$-2\sin45^\circ\sin30^\circ=-\frac{\sqrt2}2$.
:::
:::
