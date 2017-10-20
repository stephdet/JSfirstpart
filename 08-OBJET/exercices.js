
  //  La valeur est égal au chiffre le plus petit dans l'enssemble suivant : 7, 5, -12, 6, 32, 18, 14, -2
  //  La valeur est égal au chiffre le plus grand dans l'enssemble suivant : -3, 9, 21, 36, 27, 54, 17, 35
  //  La valeur est égal a l'addition des deux précédentes variables
//
// var x = Math.min(7,5,-12,6,32,18,14,-2);
// var y = Math.max(-3,9,21,36,27,54,17,35);
// var sum =x + y;
// console.log(x);
// console.log(y);
// console.log(sum);


  //  Faire une variable floatBateau dont la valeur est 10.4
  //  Faire une variable couleBateau dont la valeur est floatBateau arrondie vers le bas
  //  Faire une variable voleBateau dont la valeur est floatBateau arrondie vers le haut



// var floatBateau =10.4;
// var voleBateau = Math.ceil(floatBateau);
// var couleBateau = Math.floor(floatBateau);




//Déclarez le  La valeur aléatoire entre 50 et 100
  //  La valeur aléatoire peut être seulement 0 ou 1
  //  La valeur aléatoire peut aller de 0 à 10 inclus

// Aleatoire 2
// function MyNumberarbitrary(min,max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
//

/*
console.log('hello');

var Firstresult = Math.floor(Math.random() *50)+50;
console.log(Firstresult);
var Secondresult= Math.round(Math.random());
console.log(Secondresult);
var Threeresult=Math.ceil(Math.random()*10);
console.log(Threeresult);
*/





var tab=["Goro", "Johnny Cago", "Kano","Liu Kano"," Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];
console.log(tab[Math.floor(Math.random()*tab.length)]);
