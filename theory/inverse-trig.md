---
id: inverse-trig
title: არკსინუსი, არკკოსინუსი, არკტანგენსი
area: algebra
group: trigonometry
grades: [10]
prerequisites: [radians, function-props]
next: [trig-eq, trig-ineq]
reviewed: false
---

## მთავარი იდეა

განტოლებას $\sin x=a$ უსასრულოდ ბევრი ამონახსნი აქვს, რადგან სინუსი პერიოდულია. რომ ერთი „მთავარი“ ამონახსნი მივიღოთ, ვიღებთ შუალედს, სადაც სინუსი მონოტონურია და ყველა მნიშვნელობას ზუსტად ერთხელ იღებს. ამ შუალედზე ამონახსნს **არკსინუსი** ეწოდება. ანალოგიურად განიმარტება არკკოსინუსი და არკტანგენსი.

## განმარტებები და ფორმულები

:::definition
$a\in[-1;1]$-სთვის:
- $\arcsin a$ არის ისეთი რიცხვი $\left[-\frac\pi2;\frac\pi2\right]$-დან, რომლის სინუსი $a$-ა;
- $\arccos a$ არის ისეთი რიცხვი $[0;\pi]$-დან, რომლის კოსინუსი $a$-ა.

ნებისმიერი $a$-სთვის $\operatorname{arctg}a$ არის ისეთი რიცხვი $\left(-\frac\pi2;\frac\pi2\right)$-დან, რომლის ტანგენსი $a$-ა.
:::

:::formula თვისებები
$$\arcsin(-a)=-\arcsin a,\qquad \arccos(-a)=\pi-\arccos a,\qquad \operatorname{arctg}(-a)=-\operatorname{arctg}a,$$
$$\arcsin a+\arccos a=\frac\pi2.$$
:::

:::formula შედგენილი გამოსახულებები
$\sin(\arcsin a)=a$ ყოველი $a\in[-1;1]$-სთვის, მაგრამ $\arcsin(\sin x)=x$ მხოლოდ $x\in\left[-\frac\pi2;\frac\pi2\right]$-სთვის.
$$\cos(\arcsin a)=\sqrt{1-a^2},\qquad \sin(\arccos a)=\sqrt{1-a^2}.$$
:::

## დამტკიცება

**$\arccos(-a)=\pi-\arccos a$.** ვთქვათ $t=\arccos a\in[0;\pi]$. მაშინ $\pi-t\in[0;\pi]$ და $\cos(\pi-t)=-\cos t=-a$. $[0;\pi]$-ზე კოსინუსი კლებადია, ამიტომ ეს რიცხვი ერთადერთია და ის არის $\arccos(-a)$.

**$\cos(\arcsin a)=\sqrt{1-a^2}$.** ვთქვათ $t=\arcsin a$. $\cos^2t=1-\sin^2t=1-a^2$. $t\in\left[-\frac\pi2;\frac\pi2\right]$, სადაც კოსინუსი არაუარყოფითია, ამიტომ ფესვი „$+$“ ნიშნით იწერება.

**$\arcsin a+\arccos a=\frac\pi2$.** $\frac\pi2-\arcsin a\in[0;\pi]$ და $\cos\left(\frac\pi2-\arcsin a\right)=\sin(\arcsin a)=a$. ერთადერთობით ეს $\arccos a$-ა. $\blacksquare$

## ამოხსნილი მაგალითები

:::example მარტივი
გამოთვალეთ $\arcsin\dfrac12+\arccos\left(-\dfrac{\sqrt2}2\right)+\operatorname{arctg}\sqrt3$.
:::solution
$\frac\pi6+\left(\pi-\frac\pi4\right)+\frac\pi3=\frac\pi6+\frac{3\pi}4+\frac\pi3=\frac{2\pi+9\pi+4\pi}{12}=\frac{5\pi}4$.
:::
:::

:::example საშუალო
გამოთვალეთ $\operatorname{tg}\left(\arcsin\dfrac35\right)$.
:::solution
$t=\arcsin\frac35$, $\sin t=\frac35$, $\cos t=\sqrt{1-\frac9{25}}=\frac45$ (დადებითია, რადგან $t\in\left[-\frac\pi2;\frac\pi2\right]$). $\operatorname{tg}t=\frac34$.
:::
:::

:::example რთული
გამოთვალეთ $\arcsin\left(\sin\dfrac{5\pi}7\right)$.
:::solution
$\frac{5\pi}7$ არ ეკუთვნის $\left[-\frac\pi2;\frac\pi2\right]$-ს, ამიტომ პასუხი $\frac{5\pi}7$ **არ არის**. დაყვანით $\sin\frac{5\pi}7=\sin\left(\pi-\frac{5\pi}7\right)=\sin\frac{2\pi}7$, და $\frac{2\pi}7\in\left[-\frac\pi2;\frac\pi2\right]$.

**პასუხი:** $\dfrac{2\pi}7$.
:::
:::

## გავრცელებული შეცდომები

- **$\arccos(-a)=-\arccos a$.** არასწორია: არკკოსინუსი უარყოფითი ვერ იქნება. სწორია $\pi-\arccos a$.
- **$\arcsin(\sin x)=x$ ყოველთვის.** მხოლოდ $\left[-\frac\pi2;\frac\pi2\right]$-ზე.
- **$\arcsin2$.** არ არსებობს: $|a|\le1$.
- **$\arcsin a$ — „კუთხე გრადუსებში“.** ის რიცხვია (რადიანი); $\arcsin\frac12=\frac\pi6$.

## შეამოწმე თავი

:::check
გამოთვალეთ $\arccos\left(-\dfrac12\right)$.
:::answer
$\pi-\frac\pi3=\frac{2\pi}3$.
:::
:::

:::check
გამოთვალეთ $\arcsin0{,}3+\arccos0{,}3$.
:::answer
$\frac\pi2$.
:::
:::

:::check
გამოთვალეთ $\sin\left(\arccos\dfrac{5}{13}\right)$.
:::answer
$\sqrt{1-\frac{25}{169}}=\frac{12}{13}$.
:::
:::
