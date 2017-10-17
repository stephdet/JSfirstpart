//EXERCICE 1

//
// var enfant=5;
// var nom="Véronique";
// var pays="Suisse";
// var metier="journaliste";
//
//
// console.log("Vous serez "+metier+ "et habiterez "+pays+ "et marié "+nom+" avec "+enfant+" enfants ")
//
//
//
// var year=2017;
// var myyear=1969;
// var age=year - myyear;
//
// console.log("l'age de la personne est "+age)
//
//
// var monage=47;
// var agemax=100;
// var denree="pain";
// var consomation=2;
//
//
// var timelife=((agemax - monage)*365)*2;
//
// console.log("il vous reste "+timelife+ "de "+denree+"avant d'atteindre lagede "+agemax+ "ans")
//
// var result = (1 + 2) * 3 + 4 / 2;
/* parenthespriorit
var result = 3 * 3 + 4 / 2;
multiplication
var result = 9 + 4 / 2;
division
var result = 9 + 2;
addition
var result =11;

*/
// //EXERCICE 2
// var lang="fr";
// var msg="";
//
// var lang=prompt("choose....");
//
//
// if(lang == "fr"){
//   msg = "Bonjour tout le monde";
// }
// else if(lang == "es"){
//   msg="Holla el mundo";
// }
// else if(lang == "uk"){
//   msg="Hello everybo";
// }
//
//
// console.log(msg);




/*Exercice : Affichage des scores

    Crée une variable qui contient un score
    Crée une variable qui contiendra le resultat
    Faire des conditions pour pour etablir les rang selon le score

    Message :Vous avez le rang A si vous avez un score égal ou supérieur a 90
    Vous avez le rang B si vous avez un score inférieur a 90
    Vous avez le rang C si vous avez un score inférieur ou égal a 50
*/


// var score=prompt("choose....");
// var resultat="";
//
//
// if (score>=90) {
//   resultat="Vous avez le rang A";
// }
//   else if (resultat<90) {
//     resultat="Vous avez le rang B";
//   }
//   else if (resultat<=90) {
//     resultat="Vous avez le rang C";
//   }
//
//   console.log(resultat);
//
//
//(var i = (( this % i + i) % i;
	// return m < 0 ? m + Math.abs(n) : m;




/*  Exercice : Mettre au pluriel

      Crée une variable contenant un mot au singulier
      crée une variable qui contient le nombre dont tu en dispose
      crée une variable qui contiendra le résultat(var i = (( this % i + i) % i;
	return m < 0 ? m + Math.abs(n) : m;
      Faire une condition pour savoir si il faut rajouter un "s" ou pas

  Le résultat doit être par exemple : "Je possède 4 pommes"
*/


// var mot="vache";
// var nombre=4;
// var resultat="";
//
//
// if (nombre>1) {
//     resultat=mot +"s";
//   }
//
// console.log(resultat);


//
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


/*les boucles*/


// for(var i=0;i<6;i++) {
//   if (i % 2 == 0)   {
//     console.log(i+"est pair");
//   }
// }
//


//
// for(var i=0;i<10;i++) {
//   if(i == 2) {
//     console.log(i+"*9=18");
//   }
// }
//
//
//
// for(var i=0;i<100;i++){
// console.log(i);
//   switch (i) {
//     case  i >90 :
//     console.log("le grade est A");
//     break;
//     case  i >80 :
//     console.log("le grade est B");
//     break;
//     case  i >70 :
//     console.log("le grade est C");
//     break;
//     case  i >65 :
//     console.log("le grade est D");
//     break;
//     default:
//     console.log("le grade est F");
//   }
// }
// console.log("Pour 82 points vous avez le grade B");
//
//

// for(var i=0;i<5;i++) {
//   console.log("*".repeat(i));
// }
//
//
//

// Écrire une boucle qui va itérer de 0 à 100
// Écrire une fonction qui va retourner des grades selon les scores reçu
//     si le score au dessus de 90 le grade est A
//     si le score au dessus de 80 le grade est B
//     si le score au dessus de 70 le grade est C
//     si le score au dessus de 65 le grade est D
//     si le score n'entre pas dans ces catégories le grade est F
//
// afficher dans la console le résultat par exemple : "Pour 82 points vous avez le grade B".







// Exercice : addition
//     crée un tableau qui contient les valeurs suivantes : 1, 2, 3, 4, 5, 6, 7, 8, 9
//     faire une boucle qui permet d'additioner toutes ces valeurs
//
//  let Montableau =[1,2,3,5,6,7,8,9];
// for (i = 0; i < Montableau.length; i++) {
// tot+=Number(tab_cout[i]);
// }


//
// var Montableau = new Array(1,2,3,4,5,6,7,8,9);
// Montableau.length =9;
// Montableau[4]=[3];
// print(Montableau.length);


//
// var Myframe = new Array(1,2,3,4,5,6,7,8,9);
// var add = 0;
// console.log(Myframe);
// for(var i=0;i<Myframe.length;i++) {
//  add = add + Myframe[i];
// }
//
// console.log(add);
//
// // j'ai créer une variable add pour ajouter le résultat obtenu cad addition en récupérant l'index du tableau
// //console.log avec résultat de la boucle


// var Mypeople = ["Depardieu","Almeric","Lindon"];
// var Nombre =[1,2,3];
// console.log(Mypeople);
// for(var i = 0; i < Mypeople.length; i++){
// console.log("le numéro"+ Nombre[i]+ "est"+Mypeople[i]);
// }
//
// Exercice : clone
//
//     crée un tableau qui contetient les valeurs suivantes : "Mario", "Luigi", "Peach"
//     dupliquer le tableau et y ajouter "Bowser"

var Mytable =["Mario","Luigi","Peach"];
var Mytable2= [];
for (var i = 0; i < Mytable.length; i++) {
var clone = Mytable[i]; Mytable2.push(clone);
}
Mytable2.push('Bowser');
console.log(Mytable);
console.log(Mytable2);
