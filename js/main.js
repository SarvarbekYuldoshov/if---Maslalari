//----------------------------------------------------- shart operatorlari if--------------------------------------

// if1. Butun son berilgan. Agar berilgan son musbat bo`lsa, 1 ga oshiring,
//  aks holda 2 ga kamaytiring. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.

// # Foydalanuvchidan butun son kiritishni so'raymiz

// son=prompt("Istalgam soni kiriting")
// # Berilgan sonni tekshiramiz va natijani hisoblaymiz
// if (son > 0)
//     natija = son + 1
// else{
//     natija = son - 2
// }
//     {
// console.log("natija:", natija)
// }

// if2. Uchta butun son berilgan.
//  Shu sonlar orasidan nechta musbat va manfiy son borligini aniqlovchi programma tuzilsin.
// son1 = prompt("Birinchi butun sonni kiriting: ")
// son2 = prompt("Ikkinchi butun sonni kiriting: ")
// son3 = prompt("Uchinchi butun sonni kiriting: ")

// musbat_sonlar = 0
// manfiy_sonlar = 0

// if (son1 > 0)
//     musbat_sonlar +=1
// else (son1 < 0)
//     manfiy_sonlar -= 1

// if (son2 > 0)
//     musbat_sonlar += 1
// else (son2 < 0)
//     manfiy_sonlar -= 1

// if (son3 > 0)
//     musbat_sonlar += 1
// else (son3 < 0)
//     manfiy_sonlar -= 1
// console.log("musbat_sonlar:", musbat_sonlar);
// console.log("manfiy_sonlar:", manfiy_sonlar);

// if3. Uchta son berilgan. Shu sonlarni avval kichigini keyin kattasini ekranga chiqaruvchi programma tuzilsin.
// son1 =prompt("Birinchi sonni kiriting: ")
// son2 =prompt("Ikkinchi sonni kiriting: ")
// son3 =prompt("Uchinchi sonni kiriting: ")

// kichik = min(son1, son2, son3)
// katta = max(son1, son2, son3)


// console.log("Kichik son:", kichik)
// console.log("Katta son:", katta)

// if4. Uchta butun son berilgan. Shu sonlarni ikkitasi o`zaro teng, qolgan bittasini tartib raqami aniqlansin.

// son1 = prompt("Birinchi sonni kiriting: ")
// son2 = prompt("Ikkinchi sonni kiriting: ")
// son3 = prompt("Uchinchi sonni kiriting: ")

// if (son1 == son2)
//     console.log("{son1} and {son2} sonlari bir biriga teng");
//     tartib_raqami = son3
// else_ (son1 == son3)
//     console.log("{son1} va {son3} sonlari bir biriga teng.");
//     tartib_raqami = son2
// else_ (son2 == son3)
//     console.log("{son2} va {son3} sonlari bir biriga teng.");
//     tartib_raqami = son1
// else_
//     console.log("Hech qaysi ikki son bir biriga teng emas.")
//     if ("son1 > son2 and son1 > son3")
//         tartib_raqami = son1
//     else_ ("son2 > son1 and son2 > son3")
//         tartib_raqami = son2
//     else_
//      ("tartib_raqami = son3")

// console.log("Tartib raqami:", tartib_raqami)


// if5. x haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.
// agar x < -2 yoki x > 2 bo’lsa 2 * x 
// aks holda -3 * x;

// x = parseInt(prompt("x:"))
// if(-2>x||x>2)
// console.log(2*x);
// else console.log(-3*x);

// if6. Butun son berilgan. Berilgan sonni "musbat toq",
//  "musbat juft", "nol", “manfiy juft”, “manfiy toq” ekranga yozadigan programma tuzilsin.
// x = parseInt(prompt("x:"))
// if(x>0&&x%2==1)console.log("musbat toq son");
// if(x<0&&x%2==-1)console.log("manfiy toq son");
// if(x>0&&x%2==0)console.log("musbat juft son");
// if(x<0&&x%2==0)console.log("manfiy juft son");
// if(x==0) console.log("nol");



// uyga vazefa
// if1. Butun son berilgan. Agar, berilgan son musbat bo`lsa,
// 1 ga oshirilsin, aks holda o`zgartirilmasin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.
// x = parseInt(prompt("x:"))
// if(x>0)console.log(x+1);
// else console.log(x);

// if2. Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshiring, agar manfiy bo`lsa 2 ga kamaytiring.
//  Agar 0 ga teng bo`lsa, 10 ni o`zlashtirsin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.

// a = parseInt(prompt("a Kiriting;"));
// if(a>0)a++;
// if(a<0)a-=2;
// if(a==0)a=10;
// console.log("a=",a);

// if3. Uchta butun son berilgan. Shu sonlar orasidan nechta musbat son borligini aniqlovchi programma tuzilsin.
// a=parseInt(prompt("a="))
// b=parseInt(prompt("b="))
// c=parseInt(prompt("c="))
// let d=0;
// if(a>0) d++
// if(b>0) d++
// if(c>0) d++
// console.log(d);

// if4. Ikkita butun son berilgan. Shu sonlarning kattasini aniqlovchi programma tuzilsin.
// a=parseInt(prompt("a="))
// b=parseInt(prompt("b="))
// if(a>b)
// console.log(a);
// else
// console.log(b);

// if5. Ikkita butun son berilgan. Shu sonlarning kichigini tartib raqamini aniqlovchi programma tuzilsin.
// a=parseInt(prompt("a="))
// b=parseInt(prompt("b="))
// if(a>b)
// console.log("kichik sonni tartib raqami 2");
// else 
// console.log("kichik sonni tartib raqami 1");

// if6. Ikkita butun son berilgan. 
// Shu sonlarning avval kattasini keyin kichigini ekranga chiqaruvchi programma tuzilsin.

// a=parseInt(prompt("a="))
// b=parseInt(prompt("b="))
// if(a>b)
// console.log(a,b);
// else
// console.log(b,a);

// if7. A va B haqiqiy sonlari berilgan. Shu sonlarni shunday
//  o'zgartirish kerakki, A son kichik B son katta bo`lsin. A va B ning qiymati ekranga chiqarilsin.

// a = parseInt(prompt("a:"))
// b = parseInt(prompt("b:"))
// if(a<b)console.log(a,b);
// else console.log(a);

// if8. A va B butun sonlari berilgan. 
// Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B o`zgaruvchilari ularning yig'indisini o`zlashtirsin.
// Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin.

// a=parseInt(prompt("a:"))
// b=parseInt(prompt("b:"))
// if(a==b)
// console.log("0","0");
// console.log(a+b,a+b);

// if9. A va B butun sonlari berilgan.
// Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B bu sonlarning kattasini o`zlashtirsin.
// Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin.

// a = parseInt(prompt("a:"))
// b = parseInt(prompt("b:"))
// if(a==b)console.log("0","0");
// else if(a>b)console.log(a,a);
// else console.log(b,b);