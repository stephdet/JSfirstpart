//EXERCICE 1


//     window.prompt();
//     window.alert();
//     window.confirm();


var mot = ["B","O","N","J","O","U","R"];
var guessedLetter = ["-","-","-","-","-","-","-"];
var compteurVictoire =0;

var fenetre=confirm("Voulez-vous jouer au pendu?");
	if (fenetre == false) {
		alert("Aurevoir...");
		if (false) {
		fenetre.close();
	}
	}
	else {

function guessLetter() {
  var message=prompt("entrer une letter à deviner entre A et Z");
  var message =message.toUpperCase();

  if (message.lenght != 1) {
  console.log("Entrez seulementun caractère");
  }
  else{
    if (mot.indexOf(message)== -1) {
      console.log("Introuvable");
    }
      else {
          console.log("trouve");
          for (var i = 0; i < mot.length; i++) {
            if (message == mot[i]) {
              compteurVictoire ++;
              console.log("yeah ! j'ai trouvé ta lettre à l'index"+i);
               guessedLetter.slice(i,1,mot);
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
guessLetter();
  }
guessLetter();
}
