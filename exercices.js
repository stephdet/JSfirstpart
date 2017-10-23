var compteur=0;
var valMin=20;
var valMax=80;
function Mymumber (){
return Math.floor(Math.random()*(valMax-valMin))+valMin;
}
const result=Mymumber();
//créer la fonction
function mychaine () {
  //ce queje vais tapper
const Myletterprompt=window.prompt("taper le chiffre entre 20 et 80");
 if(+Myletterpromp=== result){
   reussi();
 }
 else if (Myletterpromp < result) {
   window.alert("c'est plus");
   compteur ++;
   mychaine();
 }
else if (Myletterpromp > result) {
  window.alert("c'est moins");
  compteur ++;
  mychaine();
}


 function reussi() {
     window.alert("Tu as réussi en " + essais + " essais !");
    }
}
mychaine();
