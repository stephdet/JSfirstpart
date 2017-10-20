
// Exercice : Calculs
//
// Déclarez les variables suivantes :
//
//     Fonction qui fait des soustractions
//     Fonction qui fait des division
//     Fonction qui fait des multiplications
//     Fonction qui fait des calcule de pourcentages ( 2 arguments: valeur et pourcentage ) par exemple : "50% de 10 = 5";
//
//     Faire une fonction qui fait des calculs de vitesse (2 arguments : distance, temps en heure)
//     Le résultat doit être par exemple : '50km/h'
//

// var number1 =4;
// var number2 =5;
//
// function Soustarction() {
//   var result=number1 - number2 ;
//   return console.log(result);
// }
// Soustarction();
//


// var number1 =14;
// var number2 =7;
//
// function Division() {
//   var result=number1 / number2 ;
//   return console.log(result);
// }
// Division();
//
//
//

// var vitesse = geResults(distance,temps){
//    return  var result=distance/temps;
// }
//
//
// console.log(result);

var x = 10;

function créerFonction1() {
  var x = 20;
  return new Function("return x;"); // ici |x| fait référence au |x| global
}

function créerFonction2() {
  var x = 20;
  function f() {
    return x; // ici |x| fait référence au |x| local juste avant
  }
  return f;
}

var f1 = créerFonction1();
console.log(f1());          // 10
var f2 = créerFonction2();
console.log(f2());          // 20
