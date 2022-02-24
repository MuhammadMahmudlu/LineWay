
// All Operators
// --------------------------------------------------------------------------------------------------
// Assignment Operators (Daxil Etmə operatorları) Start
// =
// +=
// -=
// *=
// /=
// %=
// **=

// var Nicat = 17;
// var Ibrahim = 3;
// Nicat **= Ibrahim;
// document.write(Nicat);
// Assignment Operators (Daxil Etmə operatorları) End
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// Arithmetic Operators (Riyazi operatorlar) Start
// +    Toplama
// -    Çıxma
// *    Vurma
// /    Bölmə
// %    Qalıq
// **   Üstü
// ++   Bir artırma
// --   Bir əksiltmə
// var infoNumbSt = 5; 
// var infoNumbNd = 10; 

// var infoNumbRd = 5;
//     // infoNumbRd++;
// infoNumbRd--;

// document.write(infoNumbSt + infoNumbNd + "<br>");
// document.write(infoNumbSt - infoNumbNd + "<br>");
// document.write(infoNumbSt * infoNumbNd + "<br>");
// document.write(infoNumbSt / infoNumbNd + "<br>");
// document.write(infoNumbSt %  infoNumbNd + "<br>");
// document.write(infoNumbSt ** infoNumbNd + "<br>");
// document.write(infoNumbRd + "<br>");


// Arithmetic Operators (Riyazi operatorlar) End
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// Comparison Operators(Qarşılaşdırma operatorları) Start
// ==   (qoşa bərabər)
// ===  (üçlü bərabər)
// !=   (nida tək bərabər)
// !==  (nida qoşa bərabər)
// <    (kiçikdir)
// <=   (kiçik bərabərdir)
// >    (böyükdür)
// >=   (böyük bərabərdir)

// var infoCompaSt     =  7;
// var infoCompaNd     =  10;

// if(infoCompaSt >= infoCompaNd){
//     document.write(true);
// }else{
//     document.write(false);
// }
// document.write("<br>");


// Logical Operators (Məntiqi operatorlar) Start

// && (və) true && true = true # true && false = false # true && true && false = false # true && true && true = true 

// || (və ya) true || true = true # true || false = true # true || false || false = true # true || true || true = true 

// ! (deyil)  !(true) = false # !(false) = true


// var infoLogiSt = 5 ;
// var infoLogiNd = 7;

// if(infoLogiSt!==infoLogiNd){   //default true
//     document.write(true);
// }else{
//     document.write(false);}

// const a = 1<100;
// if (!a) //default true
//         console.log("1true");
// else
//     console.log("1false");

// var infoStriSt = 5;
// var infoStriNd = 1;
// // infoNumbSt =+ infoCompaNd;
// // console.log(infoStriSt+infoStriNd);

// document.write(infoStriSt =+ infoStriNd)




// String  Operators (Mətn operatorları) End
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// Other (Special) Operators (Xüsusi operatorlar) Start

// ,            (vergül)(kodları bir-birindən ayırmaq və sintaksis qanun uyğunluqları icra etmək üçündür )
// \            (tərs slash)(Qaçındırma operatorudur)
const aJ = "Hello" ,bJ = ' \'JavaScript';
console.log(aJ+bJ);
console.log(typeof(aJ));

// console.log(void(aJ));

// typeof       (tip üçün)(datanın tipini təyin etmək üçündür)


5>10 ? console.log(true): console.log(false);

// ?:           (sual üst-üstə qoşa nöqtə)((şərt) ? ifadə1 : ifadə2)
// 5>10 ? console.log(true): console.log(false);
// (5 >= 10) ? document.write("Hi") : document.write("Bye");
// şərt            ? true                 : false


// void         (dəyişkənin dəyərini undefined etmək üçündür)
// delete       (objectin dəyərini silmək üçündür)
// new          (yeni dəyər yaratməq üçündür)
// this         (mövcud dəyəri işarələmək üçündür)
// in           (dəyişkənin(object) daxilində dəyərin olub olmamasını yoxlamaq üçündür)
// instanceof   (dəyişkənin(objectin xüsusiyyətinin) içində xüsusiyyət olub olmamasını yoxlamaq üçündür)





    

// Other (Special) Operators (Xüsusi operatorlar) End
// --------------------------------------------------------------------------------------------------



// const aJf =(name)=>{
//         this.name = name;
// }