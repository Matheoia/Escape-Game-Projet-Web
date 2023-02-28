var persoList;
fetch('../php/perso.php')
.then(r=> {return r.json()})
.then(data=> {
        persoList = data;
}) 
.then(() => {
    /* On récupère la liste des persos et pour chaque, on crée un élément html à intégrer dans la div 
       qui les regroupe. A chaque étape, on vient ajouter à l'élément str l'image du prochain personnage
    */
    let strPerso = "";
    let strPersoChoisi = "";
    
    persoList.forEach(element => {
        let nom = element['nom'];
        strPerso += "<img id='"+ nom + "' src='../image/icon/"+nom+".png' onclick='affichePersoChoisi(id," +'"'+"carte" +nom+ '"' + ")'></div>";
    });
    let divAccueilSus = document.getElementById('perso-container');
    divAccueilSus.innerHTML = strPerso;

    /* On fait pareil pour créer les élements cartes de tous les joueurs, 
       En parallèle, le css les met en invisible.
       A noter que pour chaque un élément onClick est associé et permet d'afficher la bonne carte 
       et enlève celui d'avant
    */

    persoList.forEach(element=> {
        strPersoChoisi += "<div id='carte" +element['nom']+ "'><img src='../image/perso/"+ element['nom'] +".png'></div>";
    });
    let divPersoChoisi = document.getElementById('perso-choisi');
    divPersoChoisi.innerHTML += strPersoChoisi;
});

function ajouteEspace(id) {
    let newId = "";
    for(var i=0;i<id.length;i++) {
        if(id[i]=="_") {
            newId += " ";
        } else {
            newId += id[i];
        }
    }
    return newId;
};


function affichePersoChoisi(id,carteId) {
    /* Initialise la sélection des personages jouables */
    /* Pour chaque carte représentant un personnage, on set leur visibility à hidden
       puis on cherche la carte à afficher vu l'id du personnage sur lequel on clique
       Finalement, il y a un bouton avec le nom du personnage choisi en value,
       déjà pour l'afficher et ensutie l'envoyer dans l'url et donc le récupérer dans jeu.js  
    */

    let newId = ajouteEspace(id);


    let form = document.getElementById('formValidation');
    let persos = document.getElementsByClassName('choix');
    let carte = document.getElementById(carteId);
    let nom = document.getElementById(carte['id']);
    let label = document.querySelector('label');

    for(var i=0; i<persos['perso-choisi']['children'].length;i++) {
        let divPerso = document.getElementById(persos["perso-choisi"]["children"][i]["id"]);
        divPerso.style.visibility = 'hidden';
    }
    nom.style.visibility = 'visible';
    form.style.visibility = "visible";

    let boutonJouer = document.createElement('input');
    label.append(boutonJouer);
    boutonJouer.style.position = "absolute";
    boutonJouer.style.top = "88%";
    boutonJouer.style.left = "50%";
    boutonJouer.style.transform ="translate(-50%)";
    boutonJouer.style.width = "50%";
    boutonJouer.style.height = "8%";
    boutonJouer.style.border = "solid white 3px";
    boutonJouer.style.backgroundColor = "black";
    boutonJouer.style.color = "white";
    boutonJouer.style.textAlign = "center";
    boutonJouer.type = "submit";
    boutonJouer.name = "choix"
    boutonJouer.value = newId;
}

