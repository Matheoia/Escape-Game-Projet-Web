/* Affiche dans le hall of fame les meilleurs joueurs */
var listMeilleurs = ["1","2","3","4","5"];
var accueilListMeilleurs = [];

for(var i=0;i<5;i++) {
    accueilListMeilleurs.push(document.getElementById(listMeilleurs[i]))
}

fetch('../php/afficheHoF.php')
.then(r => r.json())
.then(r => {


    for(var i=0;i<r.length;i++) {
        accueilListMeilleurs[i].innerHTML = "<img src='../image/icon/" +r[i]['perso']+ ".png'><span>"+r[i]['pseudo']+ " " +r[i]['score'] + "</span>";
    }
})

/* 
Pour la partie fetch rien de surprenant, 
on fait comme dans le jeu.js où l'on récupère les personnages jouables mais cette fois-ci, 
nos 5 meilleurs joueurs grâce au afficheHoF.php

Ensuite, cette manière plutôt intelligente trouvée sur internet pour remplir une liste 
va donc incrémenter chaque petit élement <li> puis l'accueillir dans une grande liste
pour les afficher ensemble.

Chaque élément li est du coup ensuite mis grâce à un innerHTML.

 */