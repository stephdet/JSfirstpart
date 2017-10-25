// var body =document.querySelector('body');
//
// body.classList.remove('bg-aqua');
// body.classList.add('bg-olive');

document.body.classList.remove('bg-aqua');
document.body.classList.add('bg-maroon');



//- sélectioner first-paragraph
//- lui retirer les classes 'bg-lime' et 'gray'
//- lui ajouter la class 'aqua'


document.getElementById('first-paragraph').classList.remove('bg-lime','gray');
document.getElementById('first-paragraph').classList.add('aqua');



/* sélectionner tous les éléments qui ont la classe 'bg-silver'
- modifier tout ces éléments en leurs ajoutant la classe 'bg-teal'
- modifier tout ces éléments en leurs supprimant la classe 'bg-silver'*/

document.querySelectorAll('bg-silver').forEach((element)  => {
  element.classList.add('bg-teal');
  element.classList.remove('bg-silver');
});


// - sélectionne tous les éléments de type 'blockquote'
// - modifier tout ces éléments en leurs ajoutant la classe 'bg-white'


document.querySelectorAll('blockquote').forEach((element)  => {
  element.classList.add('bg-white');
});

//Exercice2


document.querySelectorAll('#my-table').forEach((element)  => {
  element.classList.add("bg-purple");
});


document.querySelectorAll('.container').forEach((element)  => {
  element.classList.add('shadow');
});


document.querySelectorAll('pre').forEach((element)  => {

  element.style.Color = '#01FF70';
  element.style.color = '#F012BE';
  element.style.backgroundColor = '#85144B';
  element.style.borderTop = "3px solid red";
  element.style.borderBottom = "3px solid red";
});




//   var allparagrap=document.querySelectorALL("p");=> {
//   console.log(allparagrap);
//   longueur =allparagrap.lenght;
//   for (i = 0; i < longueur; i++)
//   {
//       var allparagrap= document.querySelectorALL("p")[i].setAttribute("class","green");
//   }
// }



document.querySelector('h3').innerHTML="<em>Itelic title ! yeah !</em>";

document.querySelector('h2').innerHTML="<strong>HTML doens't work !</strong>";


// EXERCICE 4 : Création et suppression de plusieurs éléments

var Newli=document.createElement('li');
element.innerHTML="Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
document.querySelector('ul').appendChild(Newli);
LiNew.querySelector('a').style.color:'#FF3333';




var ol=document.querySelector('ol');
[...ol.children].forEach((child) =>ol.removeChild(child));
var myArray=["Silent Teacher","Code Monkey","CodeCombat"]
//faire une boucle sur tous les enfants du tableau précédement crée
for (var i = 0; i <myArray.length; i++) {
  var element = document.createElement("li");
  element.innerHTML=MyArray[i];
  ol.appendChild(element);
}
