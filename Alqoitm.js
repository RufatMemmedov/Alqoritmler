// ! 1-ci mesele
// const eded1 = parseFloat(prompt("Birinci ədədi daxil edin:"))
// const eded2 = parseFloat(prompt("Ikinci ədədi daxil edin:"))
// const eded3 = parseFloat(prompt("Üçüncü ədədi daxil edin:"))

// function edediOrtaHesabati (eded1, eded2, eded3,){
//     return (eded1+ eded2+ eded3) / 3;
// }

// const edediOrta = edediOrtaHesabati (eded1, eded2, eded3);
// console.log("Rəqəmələrin ədədi ortası:" + edediOrta);


// ! 2-ci mesele
// const ilkNetice = parseFloat(prompt("Giriş balınızı qeyd edin:"))
// const ikinciNetice = parseFloat(prompt("Yekun ikmtahan nəticənizi qeyd edin"))

// function  kecidHesabati(ilkNetice, ikinciNetice){
//     return ilkNetice + ikinciNetice;
// }

// function kecidQerari(netice){
//     if (netice >= 51 && ilkNetice >= 40 && ikinciNetice >= 60){
//         return "Imtahandan uğular keçdiniz.";
//     } 
//     else {
//         return "Imtahandan uğurla keçə bilmədiniz.";
//     }
// }
// const netice = kecidHesabati(ilkNetice, ikinciNetice);
// console.log("Yekun nəticəniz:", netice);
// console.log(kecidQerari(netice));

// ! 3-cu mesele
// ?FOR ILE
// for (let i = 0; i<7; i++){
//     console.log("MƏN JAVASCRIPTDƏ MASTER OLACAM1");
// }
// ?While ile
// let deyisen = 1
// while ( deyisen < 10){
//     console.log("MƏN JAVASCRIPTDƏ MASTER OLACAM2");
//     deyisen++;
// }
// ?Do while ile
// let deyisen = 333
// do{
//     console.log("MƏN JAVASCRIPTDƏ MASTER OLACAM3");
//     deyisen++;
// } while ( deyisen < 334);

// ! 4-cu mesele
// let cemi = 0
// let i = 1
// while (i <= 100){
//     cemi += i;
//     i++;
// }
// console.log("100 ədədin cəmi:", cemi);

// ! 5-ci mesele
// let cavab = '';
// for (let i = 1; i <= 10; i++){
//     cavab += i;
//     if(i < 10) {
//         cavab += ', ';
//     }
// }
// console.log(cavab);

// ! 6-ca mesele
//  const reqem = parseFloat(prompt("Rəqəmi daxil edin:"));
 
//  function Hesabla(reqem){
//     if(reqem < 0 ){
//         return " Zəhmət olmasa müsbət ədəd daxil edin:";
//     } else if ( reqem === 0 || reqem === 1){
//         return 1;
//     } else {
//             let faktorial = 1;
//             for (let i = 2; i <= reqem; i++){
//                 faktorial *= i;
//             }
//             return faktorial;
//     }       
//  }
 
//   console.log(`${reqem}! = ${Hesabla(reqem)}`);

// !7-ci mesele
// const x = parseFloat(prompt("Zəhmət olmasa X-i daxil edin:"));
// const y = parseFloat(prompt("Zəhmət olmasa Y-i daxil edin:"));

// function Hesabat(x, y){
//       if ( x > 0 && y < 0){
//         return 4 * x + 2 * y + 4;
//       } else if ( x > 0 && y === 0){
//         return 2 * x - y + 3;
//       } else if  (x < 0 && y > 0){
//         return 3 * x + 4 * y + 3;
//       } else {
//         return "Xəta baş verdi. Yenidən yoxlayın."
//       }
// }
// const  cavab = Hesabat(x, y);
// console.log("Cavab:", cavab);

// !8-ci mesele
const eded = parseFloat(prompt("Zəhmət olmasa əqəmi daxil edin:"))

function vurmaHesabati(eded){
    let cedvel = "";
    for ( let i = 1; i <= eded; i++) {
        for ( let k = 1; k <= 10; k++) {
            cedvel += ( i * k) + "\t";
        }
        cedvel += "\n";
    }
    return cedvel;
}
 console.log(vurmaHesabati(eded));

// !9-cu mesele(Kodunu yalandan yazmadim. Prinsipini anlamamışam)

