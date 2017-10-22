

// let Character ={
// "name":"Stephane",
// "age":48,
// }
// //Mon tableau
// let items_to_give = ["livre","portable","livre","didactic"];
// //on va dans crer une fonction pour aller chercher la liste
// let fullCharater={};
//   for(let i in Character){
// fullCharater[i]=Character[i];
//   }
// console.log(fullCharater.name);
// console.log(fullCharater.age);


//Exercice 1
//je crée ma function pour donner une valeur de façon aléatoire
//
// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
//
// var Character ={
//   "name":"Stephane",
//   "age":48,
//   items_to_give:["livre","portable","livre","didactic"],
// //je cree la fonction qui va permettre à lobjet de retourner les valeurs du tableau garace à la function getRndInteger
// //et avec la profondeur du tablau
//   giveItem:function () {
//     return this.items_to_give[getRndInteger(0,this.items_to_give.lenght-1)];
// },
// };

// var
//   for (let i in Character) {
//     fullCharater[i]=Character[i];
//   console.log(i);
// }
//

// // Array.prototype.arrCustom = function (){};
//  let items_to_give=["livre","portable","livre","didactic"];
// for (let i in items_to_give) {
//   console.log(items_to_give[i]);
// }


//Exercice 2

//faire le tbleau avec les caractéristiques de chaque objet :

function  ShowAvailableItems() {
  itemshop.forEach(function(element) {
  if (element.available) console.log(element.title);
});
}


var itemshop =[{
  title:"épée",
  physic:12,
  magic:8,
  minLevel:5,
  available:true,
},{
  title: 'Hache',
  physic: 30,
  magic: 0,
  minLevel: 10,
  available: false,
},{
  title: 'Sceptre',
  physic: 0,
  magic: 20,
  minLevel: 5,
  available: true,
}];












// let gun=["épée", "hache","sceptre"];
//
//
// let databody={
//   "title":"hache";
//   physic:40;
//   magic:23;
//   minLevel:87;
//   available:true;
// }
//
//
// //creer une boucle et associer les objets du tableau avec les valeurs de l'objet
//
// let gun{};
//   for(let i in databody){
//     gun[i]=databody[i];
//   }
//   console.log(gun.title);
// }
