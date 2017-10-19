//EXERCICE 1



var mot = ["B","O","N","J","O","U","R"];
var guessedLetter = ["","","","","","",""];
var compteurVictoire =0;
function guessLetter() {
  var message=prompt("entrer une letter à deviner");
  message =message.toUppercase();
  console.log(message);
  if (message.lenght != 1) {
    console.log("trop de caratcère" +message.lenght+"caractere");
    console.log(message.lenght);
  }else{
    if (mot.indexOf(message)== -1) {
      console.log("Introuvable");
    }
      else {
          console.log("trouve");
          for (var i = 0; i < mot.length; i++) {
            if (message == mot[i]) {
              compteurVictoire ++;
              console.log("yeah ! j'ai trouvé ta lettreà l'index"+i);
               guessedLetter.splice(i,1,message);
               console.log(guessedLetter);

            }

          }
      }

  }
  if(compteurVictoire == mot.lenght) {
    console.log("win");
  }
  else {
  guessLetter();
//fonction recursive
}
}
guessLetter();

//on met la fonction comme launch


// function guessLetter(firstTab,secondTab) {
//   var end = true;
//   var cpt = 0;
//   console.log("Bienvenu dans la partie de pendu de votre vie!!!");
//
//   while (end) {
//     var testLetter = prompt("Quel lettre voulez-vous tester?");
//     var letterFound = "";
//     var letterNotFound = 0;
//
//     for (let I = 0; I <firstTab.length; I++) {
//       if (firstTab[I] == testLetter) {
//         secondTab[I] = firstTab[I];
//       } else {
//         letterNotFound += 1;
//       }
//       letterFound += secondTab[I];
//     }
//
//     if (letterNotFound == 7) {
//       console.log("Cette lettre n'est pas dans le mot.");
//       cpt += 1;
//     }
//
//     if (letterFound == "BONJOUR") {
//       end = false;
//     }
//
//     console.log(letterFound);
//   }
//
//   return ("Félicitation vous avez gagné avec " + cpt + " erreurs.");
// }
//
// console.log(guessLetter(letter,guessedLetter));
//
//
