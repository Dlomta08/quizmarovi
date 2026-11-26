---
id: vectors
title: ვექტორები, მოქმედებები ვექტორებზე
area: geometry
group: vectors-coords
grades: [9]
prerequisites: [parallelogram, midline]
next: [dot-product, line-circle-eq]
reviewed: false
---

## მთავარი იდეა

ვექტორი არის მიმართული მონაკვეთი: მას აქვს სიგრძე და მიმართულება, მაგრამ არა ფიქსირებული ადგილი. ვექტორები შეიძლება შევკრიბოთ და რიცხვზე გავამრავლოთ, კოორდინატებში კი ეს მოქმედებები უბრალოდ რიცხვებზე სრულდება.

ვექტორებით ბევრი გეომეტრიული თეორემა ალგებრულ გამოთვლად იქცევა: შუაწერტილი, შუახაზი, მედიანები, პარალელურობა.

## განმარტებები და ფორმულები

:::definition
$\overrightarrow{AB}$ ვექტორის სიგრძე $|\overrightarrow{AB}|=AB$-ია. ვექტორები **კოლინეარულია**, თუ ისინი ერთ წრფეზე ან პარალელურ წრფეებზე დევს. ორი ვექტორი **ტოლია**, თუ ისინი თანამიმართულია და სიგრძეები ტოლი აქვთ.
:::

:::theorem შეკრება
**სამკუთხედის წესი:** $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$. **პარალელოგრამის წესი:** $ABCD$ პარალელოგრამში $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$. სხვაობა: $\overrightarrow{OB}-\overrightarrow{OA}=\overrightarrow{AB}$.
:::

:::definition რიცხვზე გამრავლება
$k\vec a$ ვექტორის სიგრძე $|k|\cdot|\vec a|$-ია; ის $\vec a$-ს თანამიმართულია, თუ $k>0$, და საწინააღმდეგოდ მიმართულია, თუ $k<0$. $\vec a$ და $\vec b\ne\vec0$ კოლინეარულია ⟺ $\vec a=k\vec b$.
:::

:::formula კოორდინატებში
- $A(x_1,y_1)$, $B(x_2,y_2)$: $\overrightarrow{AB}=(x_2-x_1,\ y_2-y_1)$.
- $\vec a=(x,y)$: $|\vec a|=\sqrt{x^2+y^2}$.
- $\vec a\pm\vec b=(x_1\pm x_2,\ y_1\pm y_2)$, $k\vec a=(kx,ky)$.
- კოლინეარობა: $\dfrac{x_1}{x_2}=\dfrac{y_1}{y_2}$ (ანუ $x_1y_2-x_2y_1=0$).
:::

:::formula შუაწერტილი და სიმძიმის ცენტრი
$$\overrightarrow{OM}=\frac{\overrightarrow{OA}+\overrightarrow{OB}}{2},\qquad \overrightarrow{OG}=\frac{\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}}{3}.$$
თუ $P\in AB$ და $AP:PB=m:n$, მაშინ $\overrightarrow{OP}=\dfrac{n\overrightarrow{OA}+m\overrightarrow{OB}}{m+n}$.
:::

## დამტკიცება

**შუაწერტილი.** $\overrightarrow{OM}=\overrightarrow{OA}+\overrightarrow{AM}=\overrightarrow{OA}+\dfrac12\overrightarrow{AB}=\overrightarrow{OA}+\dfrac12(\overrightarrow{OB}-\overrightarrow{OA})=\dfrac{\overrightarrow{OA}+\overrightarrow{OB}}{2}$.

**შუახაზი.** $M$, $N$ — $AB$-ს და $AC$-ს შუაწერტილები:
$$\overrightarrow{MN}=\overrightarrow{AN}-\overrightarrow{AM}=\frac12\overrightarrow{AC}-\frac12\overrightarrow{AB}=\frac12\overrightarrow{BC}.$$
ე.ი. $MN\parallel BC$ და $MN=\dfrac{BC}{2}$. $\blacksquare$

## ამოხსნილი მაგალითები

:::example მარტივი
$A(1,2)$, $B(4,6)$. იპოვეთ $\overrightarrow{AB}$, მისი სიგრძე და $AB$-ს შუაწერტილი.
:::solution
$\overrightarrow{AB}=(3,4)$, $|\overrightarrow{AB}|=5$, შუაწერტილი $\left(\dfrac52,\ 4\right)$.

**პასუხი:** $(3,4)$, $5$, $(2.5;\ 4)$.
:::
:::

:::example საშუალო
$ABCD$ პარალელოგრამია, $A(1,1)$, $B(4,2)$, $C(6,5)$. იპოვეთ $D$. რისი ტოლია $k$, თუ $(2,k)$ და $(3,6)$ კოლინეარულია?
:::solution
$\overrightarrow{AD}=\overrightarrow{BC}=(2,3)$, ამიტომ $D=(3,4)$.

$\dfrac23=\dfrac k6$, $k=4$.

**პასუხი:** $D(3,4)$, $k=4$.
:::
:::

:::example რთული
დაამტკიცეთ, რომ ნებისმიერი ოთხკუთხედის გვერდების შუაწერტილები პარალელოგრამის წვეროებია.
:::solution
$ABCD$-ს გვერდების შუაწერტილები იყოს $K\in AB$, $L\in BC$, $M\in CD$, $N\in DA$. რომელიმე $O$ წერტილიდან:
$$\overrightarrow{KL}=\frac{\vec B+\vec C}{2}-\frac{\vec A+\vec B}{2}=\frac{\vec C-\vec A}{2},\qquad \overrightarrow{NM}=\frac{\vec C+\vec D}{2}-\frac{\vec D+\vec A}{2}=\frac{\vec C-\vec A}{2}.$$
$\overrightarrow{KL}=\overrightarrow{NM}$ — ორი მოპირდაპირე გვერდი ტოლი და პარალელურია, ამიტომ $KLMN$ პარალელოგრამია. $\blacksquare$
:::
:::

## გავრცელებული შეცდომები

- **სიგრძეების შეკრება.** $|\vec a+\vec b|\ne|\vec a|+|\vec b|$, თუ ვექტორები თანამიმართული არ არის. ვკრებთ **კოორდინატებს**, არა სიგრძეებს.
- **$\overrightarrow{AB}$ და $\overrightarrow{BA}$.** $\overrightarrow{AB}=B-A$ (ბოლოს მინუს სათავე). $\overrightarrow{BA}=-\overrightarrow{AB}$.
- **ტოლი ვექტორები ერთ ადგილას.** ტოლ ვექტორებს შეიძლება სხვადასხვა სათავე ჰქონდეს — მნიშვნელოვანია მხოლოდ სიგრძე და მიმართულება.

## შეამოწმე თავი

:::check
იპოვეთ $\vec a=(3,-4)$-ის სიგრძე.
:::answer
$5$.
:::
:::

:::check
$A(2,3)$, $AB$-ს შუაწერტილია $M(5,7)$. იპოვეთ $B$.
:::answer
$B=2M-A=(8,11)$.
:::
:::

:::check
$\vec a=(1,2)$, $\vec b=(3,-1)$. იპოვეთ $2\vec a-\vec b$.
:::answer
$(2-3,\ 4+1)=(-1,5)$.
:::
:::
