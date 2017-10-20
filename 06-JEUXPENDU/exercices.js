//EXERCICE 1

var mot = ["B","O","N","J","O","U","R"];
var guessedLetter = ["-","-","-","-","-","-","-"];
var compteurVictoire =0;
function guessLetter() {
  var message=prompt("entrer une letter à deviner");
  message =message.toUpperCase();
  console.log(message);
  if (message.lenght != 1) {
    console.log("trop de caratcère"+message.lenght+"caractere");
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
              console.log("yeah ! j'ai trouvé ta lettre à l'index"+i);
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
