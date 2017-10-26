
let rq = new XMLHttpRequest();
rq.open ('GET', ' https://raw.githubusercontent.com/becodeorg/Lovelace-promo-2/master/Parcours/JavaScript/11-AJAX/files/data.json ');
rq.onload = function() {
let data = JSON.parse(rq.responseText);

/*
//console.log(data); // en objets
 let data_with_scores = data.map(function (objet) {
   random_nb = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
   objet.score = random_nb;
   return objet;
 });
 //console.log(data_with_scores); // avec une propriété score (random)
 let data_sorted = data_with_scores.sort(function (a, b) {
   return a.score - b.score;
 });
 //console.log(data_sorted); // triés par score
 let tab_a = [],
     tab_b = [],
     tab_c = [];
 data_with_scores.forEach(function(objet) {
   if (objet.score < 500) {
     tab_c.push(objet);
   }
   else if (objet.score < 750) {
     tab_b.push(objet);
   }
   else if (objet.score >= 750) {
     tab_a.push(objet);
   }
 });
 //console.log(tab_a);
 //console.log(tab_b);  // classés par score
 //console.log(tab_c);
 data_filtered = data.filter(function (objet) {
   return objet.country == "Bahrain";
 });
 //console.log(data_filtered); // avec un filtre (pays)
 //console.log(data.length);
 //console.log(data_sorted[0]);
 //console.log(data_sorted[99]);
}
rq.send();

*/
