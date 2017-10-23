// var compteur=0;
// var valMin=20;
// var valMax=80;
// function Mymumber (){
// return Math.floor(Math.random()*(valMax-valMin))+valMin;
// }
// const result=Mymumber();
// //créer la fonction
// function mychaine () {
//   //ce queje vais tapper
// const Mychiffer=window.prompt("taper le chiffre entre 20 et 80");
//  if(+Mychiffer=== result){
//    reussi();
//  }
//  else if (Mychiffer < result) {
//    window.alert("c'est plus");
//    compteur ++;
//    mychaine();
//  }
// else if (Mychiffer > result) {
//   window.alert("c'est moins");
//   compteur ++;
//   mychaine();
// }
//
//
//  function reussi() {
//      window.alert("Tu as réussi en " + essais + " essais !");
//     }
// }
// mychaine();

var cpt = 0;

function randomNbr(a,b) {
  return Math.floor(Math.random()*(b-a)+a);
}

function testNbr(a) {
  let inputNbr = parseInt(prompt("Entrer un nombre: "));
  if (inputNbr < a) {
    cpt++;
    console.log("C'est plus");
  } else if (inputNbr > a) {
    console.log("C'est moins");
    cpt++;
  }

  if (inputNbr != a) {
    testNbr(a);
  }

  return cpt;
}

var nbr = randomNbr(20,80)
console.log("C'est juste tu as trouvé en " + testNbr(nbr) + " coup(s)");
