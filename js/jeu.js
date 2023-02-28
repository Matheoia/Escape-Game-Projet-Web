/* ----- Map ----- */

// var map = L.map('map').setView([35.691155, 139.776815],12);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

var map = L.map('map').setView([48.84197, 2.590095],13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var popup = L.popup();


/* ----- Inventaire ----- */

var barre = document.getElementById('barre');
var suspects = document.getElementById('suspects');
var listeSuspets = document.getElementById('suspects-container');
var carte = document.getElementById('carte');
var backpack = document.getElementById('backpack');
var inventaire = document.getElementById('inventaire');

/* Inventaire à optimiser, surtout vu son utilité
   On pourrait surement factoriser
*/


barre.addEventListener('mouseenter', afficheBarre);
barre.addEventListener('mouseleave', enleveBarre);

function afficheBarre() {
    /* Affiche la barre contenant l'inventaire et la liste des suspects */ 
    barre.style.transition = '1s';
    barre.style.opacity = '1';
    barre.style.zIndex = "4";
}

function enleveBarre() {
    /* Enleve la barre contenant l'inventaire et la liste des suspects */ 
    barre.style.transition = '1s';
    barre.style.opacity = '0';
    barre.style.zIndex = "2";
}

suspects.addEventListener('click', afficheSuspects)
carte.addEventListener('click', enleveSuspects)

function afficheSuspects () {
    /* Affiche la liste des suspects */ 
    listeSuspets.style.transition = '1s';
    listeSuspets.style.opacity = '1';
    listeSuspets.style.zIndex = "5";
}

function enleveSuspects () {
    /* Enleve la liste des suspects */ 
    listeSuspets.style.transition = '1s';
    listeSuspets.style.opacity = '0';
    listeSuspets.style.zIndex = "0";
}

backpack.addEventListener('mouseenter', afficheInventaire);
inventaire.addEventListener('mouseleave', enleveInventaire);

function afficheInventaire() {
    /* Affiche l'inventaire' */ 
    barre.style.zIndex="2";
    inventaire.style.zIndex = "3";
    inventaire.style.transition = '1s';
    inventaire.style.opacity = '1';
    
}

function enleveInventaire() {
    /* Enlève l'inventaire' */ 
    inventaire.style.transition = '1s';
    inventaire.style.opacity = '0';
    inventaire.style.zIndex = "1";
}

/* ----- GRID ----- */

var suspectsContainer = document.getElementById("suspects-container");
var grid = document.getElementById('gridSuspects');
var suspectChoisi = document.getElementById('suspect-choisi');

function afficheCarte(id) {
    /* Affiche le suspect sélectionné dans la liste des suspects */ 
    let imgPerso = "<img src='../image/perso/"+id+".png' width=100% height=100%>";
    suspectChoisi.innerHTML = imgPerso;
}
    
function enleveCarte(id) {
    /* Enlève le suspect sélectionné dans la liste des suspects */ 
    suspectChoisi.innerHTML = "";
}

function ajouteCroix(id) {
    /* Ajoute ou enlève la croix pour éliminer un suspect dans la liste*/ 
    let croixPerso = document.getElementById('croix'+id);
    if(croixPerso.style.visibility=="visible") {
        croixPerso.style.visibility="hidden";
    } else {
        croixPerso.style.visibility="visible";
    }
}

/***************************************************************************************************** */
/* ----- Récupération du perso choisi ----- */

var persoList;
fetch('../php/perso.php')
.then(r=> {return r.json()})
.then(data=> {
        persoList = data;
}) 
.then(() => {
    /* Comme avec la page perso, on crée pour l'onglet des suspects la div qui contient les persos
       Avec des évènements mouseenter et click pour l'optimisation. Ainsi, le joueur peut suivre 
       les indices et éliminer peu à peu les suspects.
    */
    /* Initialisation de la liste des suspects */
    let str = "";
    persoList.forEach(element => {
        str += "<div id='" +element['nom']+ "' class='imgSus' style='min-height:100%;background-image: url("+ '"' +"../image/icon/" +element['nom']+ ".png"+'"'+")' onmouseenter='afficheCarte(id)' onmouseleave='enleveCarte(id)' onclick='ajouteCroix(id)'><div class='croix' id='croix" +element['nom']+ "'></div></div>";
    });
    let divAccueilSus = document.getElementById('gridSuspects');
    divAccueilSus.innerHTML = str;

    /* Récupération du perso choisi et génération du perso secondaire */
    const choixPerso = retireEspace(retrouvePerso());  
    let indexOfObject = persoList.findIndex(object=> {
        return object.nom === choixPerso;
      })
    const perso = persoList[indexOfObject];
    const persoSec = donnePersoSec(perso,persoList);

    /* Initialisation de l'intro du jeu */
    var endgame = document.getElementById('endgame');
    var dialogue= document.getElementById('dialogue');
    var p_dialogue= document.getElementById('p_dialogue');
    var main_caract = document.getElementById('main_caract');
    var ganon = document.getElementById('ganon');

    var img_main = document.createElement("img");
    var img_sec = document.createElement("img");
    var img_ganon = document.createElement("img");

    img_main.src="../image/personnage/"+perso['nom']+".png";
    img_main.style.opacity="0";
    img_main.id= "img_main";
    img_main.className = "imgEnd";
    main_caract.appendChild(img_main);

    img_sec.src="../image/personnage/"+persoSec['nom']+".png";
    img_sec.id = "img_sec";
    img_sec.style.visibility="hidden";
    img_sec.style.opacity="0";
    img_sec.className = "imgEnd";
    img_sec.style.transform="rotateY(180deg)";
    ganon.appendChild(img_sec);

    img_ganon.src="../image/personnage/ganon.png";
    img_ganon.id = "img_ganon";
    img_ganon.style.visibility="hidden";
    img_ganon.style.transform="rotateY(180deg)";
    img_ganon.className = "imgEnd";
    ganon.appendChild(img_ganon);

    map.addEventListener('zoom',function(){
        afficheSelonEtape(perso,persoSec);
    })

    let nb=1;

    endgame.style.zIndex="2";
    p_dialogue.innerHTML="Vous vous réveillez et comme chaque matin, allez admirer votre objet le plus précieux.<br><br><br>(cliquez sur la case pour passer)";
    
    img_main.style.transition = "1s";
    img_main.style.opacity ="1";
    img_main.style.transform='translateX(0%)';
    img_main.style.visibility="visible";

    dialogue.addEventListener('click',suite);
    
    function suite(){
        /* Fonction qui permet de passer le dialogue d'intro */
        nb+=1;
        if(nb==2){p_dialogue.innerHTML="!!! Votre objet a disparu !!! <br> Au même moment, quelqu'un sonne chez vous."}
        if(nb==3){
            p_dialogue.innerHTML="C'est votre meilleur ami <strong>"+ajouteEspace(persoSec['nom'])+"</strong>";
            img_sec.style.visibility="visible";
            img_sec.style.opacity="1";
        }
        if(nb==4){p_dialogue.innerHTML='"Qu\'est-ce qui ne va pas <strong>'+ajouteEspace(perso['nom'])+'</strong>?"';}
        if(nb==5){p_dialogue.innerHTML='"Oh non! Je pense avoir vu le voleur en arrivant! Il allait vers le <strong>château de Champs"';}
        if(nb==6){p_dialogue.innerHTML="Vous vous rendez donc au lieu indiqué afin de retrouver le voleur et votre objet.<br>(Cliquez sur les objets afin de les ramasser ou d'apprendre plus d'informations dessus.)";}
        if(nb==7){
            afficheBarre();
            p_dialogue.innerHTML="Durant l'histoire, vous pourrez accéder à votre inventaire ainsi qu'à votre bloc-note, où vous pourrez enlever les suspects potentiels en cliquant dessus."
        }
        if(nb==8){
            endgame.style.zIndex='0';
            img_sec.style.visibility="hidden";
            img_sec.style.opacity="0";
        }

    }
    }
);

function afficheSelonEtape(perso,persoSec){
    /* Affiche le chateau correspondant à l'étape à laquelle le joueur se trouve */
    if (etape <= 5){
        afficheChateau(etape,perso,persoSec);
    }
}

/* Quelques fonctions pour gérer le nom des perso qui contient un espace pour l'écrire 
   mais qui n'en a pas dans les bdd ou img pour que le code fonctionne
*/

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


function retireEspace(str) {
    let newStr = "";
    for(var i=0;i<str.length;i++) {
        if(str[i]==" ") {
            newStr += "_";
        } else {
            newStr += str[i];
        }
    } 
   return newStr;
};

function retrouvePerso() {
    /* Récupère le perso choisi grâce àl'url*/
    let choixPerso = "";
    for(var i=0;i<window.location.search.length;i++) {
        if(i>6) {
            if(window.location.search[i]=="+") {
                choixPerso += " ";
            } else {
                choixPerso += window.location.search[i];
            }
        }}
    return choixPerso;
};
    
function donnePersoSec(perso,persoList) {
    /* Génère le perso secondaire de manière aléatoire, seule impossibilité : le perso choisi*/
    let persosec = persoList[Math.floor(Math.random()*36)];
    while (persosec==perso){
        persosec = persoList[Math.floor(Math.random()*36)];
    }
    return persosec;
};


/* ------------------------------------------------------------------------------------------*/

/* Initialisation du jeu */

var etape = 0;
var score = 1000;
var nb=1;
var markersChateau = L.featureGroup().addTo(map);
var markersRecuperable = L.featureGroup().addTo(map);

var divScore = document.getElementById('score');

function loop() {
    /* Actualise le score */
    divScore.innerHTML = score;
    setTimeout(loop, 100);
}
loop();


function afficheChateau(etape,perso,persoSec) {
    /* Affiche le château */

    if(etape<=4){
        /* Pour les premiers châteaux, la fonction amène à accesChateau(...) */
    fetch('../php/chateau.php')
    .then(r=> {return r.json()})
    .then(r=> {       
        /* On crée pour chaque objet de la bdd un marker et récupère tout ce qui sera utile */
        let chateau = r[etape]['icon'];
        //let id = r[0]['id'];
        let texte = r[etape]['texte'];
        let lat = r[etape]['lat'];
        let lng = r[etape]['lng'];
        let zoom = r[etape]['zoom'];
        let indice = r[etape]['indice'];
        let typeChateau = r[etape]['type'];
        let reponse = r[etape]['reponse'];
        let asuivre = r[etape]['asuivre'];
        
        let chateauIcon = L.icon({
            iconUrl: "../image/chateau/" + chateau + ".png",
            iconSize: [80,80]}
        );

        if(map.getZoom()<zoom) {
            markersChateau.clearLayers();
        } else { 
            let chateauMarker = L.marker([lat,lng], {icon: chateauIcon})
            .addTo(markersChateau)
            .bindPopup(texte);
            /* Le texte dans les popup est mis ici au dessus. Il nous reste beaucoup de choses 
               à faire pour finir ce jeu mais régler le style des popup est déjà envisigeable
            */
            let popup = chateauMarker;
            accesChateau(chateau,popup,typeChateau,reponse,asuivre,indice,perso,persoSec,lat,lng);

        }
    })}

    else {
        /* Pour le dernier château, la fonction amène à endgame(...) */
        fetch('../php/chateau.php')
        .then(r=> {return r.json()})
        .then(r=> {       
        let chateau = r[etape]['icon'];
        let lat = r[etape]['lat'];
        let lng = r[etape]['lng'];
        let zoom = r[etape]['zoom'];
        
        let chateauIcon = L.icon({
            iconUrl: "../image/chateau/" + chateau + ".png",
            iconSize: [80,80]}
        );

        if(map.getZoom()<zoom) {
            markersChateau.clearLayers();
        } else { 
            let chateauMarker = L.marker([lat,lng], {icon: chateauIcon})
            .addTo(markersChateau)
            let popup = chateauMarker;
            endgame(popup,lat,lng,perso,persoSec);
        }
    })}
;}

function accesChateau(chateau,popup,typeChateau,reponse,asuivre,indice,perso,persoSec,lat,lng) {
/* Selon le type du château, affiche une popup avec un code à rentrer ou encore demande un objet pour accéder au château */

    popup.addEventListener('click', function(){
        map.fitBounds([[lat,lng]]);

        /* Le popup contient toujours un bouton indice payant pour aider le joueur
           et potentiellement uin form pour gérer les input, s'ils sont bien égales à la réponse.

           Pour la suite, deux types de châteaux
        */
        let btn_ind = document.getElementById('indice');
        if(btn_ind) {
            btn_ind.addEventListener('click',function(){
                btn_ind.innerText=indice;
                score-=1000;
                btn_ind.removeEventListener('click',function(){
                    btn_ind.innerText=indice;
                });
            });

        }

    if(typeChateau=="cle") {
        
        let divCle = document.getElementById(reponse);
        if (inventaire.contains(divCle)) {
            map.removeEventListener('zoom',afficheChateau);
            inventaire.removeChild(divCle);
            popup.setPopupContent(asuivre);
            /* Je gère ici les popup et les indices qui se mettent selon les caractéristiques du
               personnage secondaire. On actualise par ailleurs l'avancée du joueur avec la div indice 
               présente dans l'onglet des suspects. On innerHTML selon le nom du chateau et on place
               la vraie image du château et non la masquée.
            */
            let indiceGanonS = document.getElementById('indiceGanonS');
            if(indiceGanonS) {
                if(persoSec['sexe']=="homme") {
                    indiceGanonS.innerHTML= "<span id='indiceGanonS' style='font-weight: bold'> un homme </span>";
                    } else {
                    indiceGanonS.innerHTML = "<span id='indiceGanonS' style='font-weight: bold'> une femme </span>";
            }}
            let indiceGanonSang = document.getElementById('indiceGanonSang');
            if(indiceGanonSang) {
                indiceGanonSang.innerHTML = "<span id='indiceGanonSang' style='font-weight: bold'> "+persoSec['sang']+"</span>";
            } 
            let meilleurAmi = document.getElementById('meilleurAmi');
            if(meilleurAmi) {
                meilleurAmi.innerHTML = "<span id='meilleurAmi' style='font-weight: bold'> "+ajouteEspace(persoSec['nom'])+"</span>";
            }
            if(chateau=="champsSurMarne") {
                let indiceCsM = document.getElementById('indiceCsM');
                let imageNoirCsM = document.getElementById('imageNoirCsM');
                indiceCsM.innerHTML = "Vous faites ici la connaissance de votre nouvel ennemi. Prochaine Destination : château de Chambord.";
                imageNoirCsM.innerHTML = '<img src="../image/chateau/champsSurMarne.png">';
            }
            if(chateau=="versailles") {
                let indiceVersailles = document.getElementById('indiceVersailles');
                let imageNoirVersailles = document.getElementById('imageNoirVersailles');
                indiceVersailles.innerHTML = "Ici, vous en appreniez plus sur lui en trouvant son groupe sanguin. Prochaine Destination : château de Chantilly.";
                imageNoirVersailles.innerHTML = '<img src="../image/chateau/versailles.png">';
            }
            etape += 1;
            score += 500;

        }};

    if(typeChateau=="code") {
        
        let inpRep = document.getElementById('inputRep');
        let formrep = document.getElementById('formRep');
        
        if (inpRep){

        formrep.addEventListener('submit',function(event){
            event.preventDefault();
            if (inpRep.value == reponse){
                popup.setPopupContent(asuivre);

                let indiceGanonEspece = document.getElementById('indiceGanonEspece');
                if(indiceGanonEspece) {
                    if(persoSec['espece']=="humain") {
                        indiceGanonEspece.innerHTML = "<span id='indiceGanonEspece' style='font-weight: bold'> semble humain</span>";
                    } else {
                        indiceGanonEspece.innerHTML = "<span id='indiceGanonEspece' style='font-weight: bold'> ne semble pas humain</span>";
                    }
                } 
                let indiceGanonPoids = document.getElementById('indiceGanonPoids');
                    if(indiceGanonPoids) {
                        if(persoSec['poids']=="leger") {
                            indiceGanonPoids.innerHTML = "<span style='font-weight: bold'> fine </span>";
                        } 
                    if(persoSec['poids']=="moyen") {
                        indiceGanonPoids.innerHTML = "<span style='font-weight: bold'> moyenne</span>";
                    } 
                    if(persoSec['poids']=="lourd") {
                        indiceGanonPoids.innerHTML = "<span style='font-weight: bold'> imposante</span>";
                    }
                    } 
                let meilleurAmi = document.getElementById('meilleurAmi');
                if(meilleurAmi) {
                    meilleurAmi.innerHTML = "<span style='font-weight: bold'> "+ajouteEspace(persoSec['nom'])+"</span>";
                }
                if(chateau=="chambord") {
                    let indiceChambord = document.getElementById('indiceChambord');
                    let imageNoirChambord = document.getElementById('imageNoirChambord');
                    indiceChambord.innerHTML = "Ici, vous appreniez s'il était humain ou non. Prochaine Destination : château d'Angers.";
                    imageNoirChambord.innerHTML = '<img src="../image/chateau/chambord.png">';
                }
                if(chateau=="angers") {
                    let indiceAngers = document.getElementById('indiceAngers');
                    let imageNoirAngers = document.getElementById('imageNoirAngers');
                    indiceAngers.innerHTML = "Ici, vous apperceviez la corpulence de Ganon. Prochaine Destination : château de Versailles.";
                    imageNoirAngers.innerHTML = '<img src="../image/chateau/angers.png">';
                }
                if(chateau=="chantilly") {
                    let indiceChantilly = document.getElementById('indiceChantilly');
                    let imageNoirChantilly = document.getElementById('imageNoirChantilly');
                    indiceChantilly.innerHTML = "Et c'est ici que vous le croisez pour la première fois. Prochaine Destination : château d'Hyrule à Tokyo.";
                    imageNoirChantilly.innerHTML = '<img src="../image/chateau/chantilly.png">';
                }
                map.removeEventListener('zoom',afficheChateau);
                etape+=1;
                score+=500;
            } else {
                if(inpRep.value == "Yzernay") {
                    score += 2000;
                } else {
                    let rep = document.getElementById('reponse');
                    rep.innerHTML = "as-tu bien pensé à tout ?"; 
                    score-=200;
                }
                
            }
        })}}})};

function endgame(popup,lat,lng,perso,persoSec){ 
    /* Initialisation de la fin du jeu */
    
    var recupEndgame;
    fetch('../php/endgame.php')
    .then(r=> {return r.json()})
    .then(data=> {
        recupEndgame = data;
    }) 
    .then(() => {
        popup.addEventListener('click', function(){
            map.fitBounds([[lat,lng]]);

            /* Initialisation */
            var endgame = document.getElementById('endgame');
            var dialogue = document.getElementById('dialogue');
            var p_dialogue = document.getElementById('p_dialogue');
            document.getElementById('fond').style.backgroundImage="url('../image/fond_chateau.png')";
            recupEndgame[4]['reponse'] = ajouteEspace(persoSec['nom']).toUpperCase();

            endgame.style.zIndex = '2';

            if(nb==1){/* Si le joueur rentre dans le château pour la première fois */
                img_main.style.transition = "1s";
                img_main.style.opacity ="1";
                img_main.style.animation= "slide-in 0.75s ease-out forwards";
                img_main.style.visibility="visible";
                img_ganon.style.visibility='visible';
                p_dialogue.innerHTML= recupEndgame[0]['texte'];
                // let spanPersoPr = document.getElementById('persoPrincipal');
                // let spanObjPerso = document.getElementById('persoObj')
                // if(spanPersoPr) {spanPersoPr.innerHTML = "<span style='font-weight: bold'>"+ perso['nom']+"</span>";}
                // if(spanObjPerso) {spanObjPerso.innerHTML = "<span style='font-weight: bold'>"+ perso['description']+"</span>"}
                nb+=1;
            }
            if(nb==404){/* Si le joueur se trompe à une des questions, et retourne dans le endgame */
                p_dialogue.innerHTML= recupEndgame[12]['texte'];
                nb=2;
                img_main.style.transition = "1s";
                img_main.style.opacity ="1";
                img_main.style.animation= "slide-in 0.75s ease-out forwards";
                img_main.style.visibility="visible";
            }

            dialogue.addEventListener('click',suite);

            function suite(){
                /* Affiche le prochain dialogue */
                for(elem in recupEndgame){
                    if (recupEndgame[elem]["id"] == nb && nb>1 && nb<7){/* Les 4 premiers dialogues sont des énigmes à résoudre avec un input */
                        p_dialogue.innerHTML = recupEndgame[elem]['texte'];
                        let formRep= document.getElementById('formRep');
                        let inputRep= document.getElementById('inputRep');
                        dialogue.removeEventListener('click',suite);

                        formRep.addEventListener('submit',function(event){
                            event.preventDefault();

                            if(inputRep.value.toUpperCase() != recupEndgame[elem]["reponse"]){
                                if(elem<=3) {score -=200;}else {score -= 2000;}
                                dialogue.removeEventListener('submit',suite);
                                nb=404;
                                p_dialogue.innerHTML = recupEndgame[11]['texte'];
                                dialogue.addEventListener('click',suite);
                            } else {
                                if(elem==4){score+=1100;};
                                nb+=1;
                                if(nb<6){
                                    p_dialogue.innerHTML = recupEndgame[nb]['texte'];
                                    dialogue.addEventListener('submit',suite);
                                }
                                if (nb==6){
                                    p_dialogue.innerHTML = recupEndgame[nb-1]['texte'];
                    
                                    img_ganon.style.transition = "1s";
                                    img_ganon.style.transform= "translateX(200px)";
                                    img_ganon.style.visibility ="hidden";

                                    img_sec.style.transition='1s'
                                    img_sec.style.opacity="1";
                                    img_sec.style.visibility="visible";
                                    dialogue.addEventListener('click',suite);
                                }
                            }
                        }
                    );
                    break;
                }
                if (recupEndgame[elem]["idD"] == nb && nb>=6 && nb<10){/* Les 4 suivants sont juste une conversation à choix multiple */
                    dialogue.removeEventListener('click',suite);

                    if(nb<9){
                        var btn1 = document.getElementById('rep1');
                        var btn2 = document.getElementById('rep2');
                        btn1.addEventListener('click',next);
                        btn2.addEventListener('click',next);
                    }else{
                        var btn1 = document.getElementById('rep1');
                        var btn2 = document.getElementById('rep2');
                        btn1.addEventListener('click',happyEnd);
                        btn2.addEventListener('click',sadEnd);
                    }

                    function next(){
                        p_dialogue.innerHTML = recupEndgame[nb]['texte'];
                        nb+=1;
                        dialogue.addEventListener('click',suite);
                    }

                    function happyEnd(){
                        p_dialogue.innerHTML = recupEndgame[9]['texte'];
                        nb=300;
                        btn1.removeEventListener('click',happyEnd);
                        btn2.removeEventListener('click',sadEnd);
                        dialogue.addEventListener('click',suite);
                    }

                    function sadEnd(){
                        p_dialogue.innerHTML = recupEndgame[10]['texte'];
                        nb=300;
                        btn1.removeEventListener('click',happyEnd);
                        btn2.removeEventListener('click',sadEnd);
                        dialogue.addEventListener('click',suite);
                    }
                    break;
                }
                if(recupEndgame[elem]["id"] == nb && nb==404){/* Suite à une erreur, le endgame (div) disparaît */
                    endgame.style.zIndex="0";
                    img_main.style.opacity="0";
                    img_sec.style.opacity="0";
                    dialogue.addEventListener('click',suite);
                    break;
                }

                if(nb==300){/* Suite à une des fins du jeu, l'identification s'affiche */
                    dialogue.addEventListener('click',function(){
                        endgame.style.zIndex="0";
                        img_main.style.visibility="hidden";
                        img_main.style.transition="0s";

                        img_sec.style.visibility="hidden";
                        img_sec.style.transition="0s";

                        let formIdentification = document.getElementById('identification');
                        let form = document.getElementById('form');
                        formIdentification.style.visibility = "visible";
                        formIdentification.style.opacity = "1";
                        formIdentification.style.zIndex = "20";
                        formIdentification.style.transition="1s"

                        form['perso']['value'] = perso['nom'];
                        form['score']['value'] = score;
                        
                    })
                    break;

                }}}})})};
            
/* OBJETS RECUPERABLES ET ENVOIE DANS L'INVENTAIRE */

/* Mon idée est ici de récupérer tous les objets récupérables de la base donnée,*
   de les mettre dans recupList et ensuite d'écouter le zoom, pour que à chaque zoom,
   s'il est assez grand, je crée un marker pour chaque objet présent dans la liste.
   De plus, lors du click de l'utilisateur, on enlève l'objet cliqué de la liste pour 
   ne pas le réafficher. On crée ensuite une div qui va se loger dans l'inventaire 
   qui représente l'objet cliqué ; et lors d'un hover : affiche une petite description
   qui serait utile dans l'optique de rajout d'objet ou utile pour les énigmes */


var recupList;
fetch('../php/recuperable.php')
.then(r=> {return r.json()})
.then(data=> {
    recupList = data;
}) 
.then(() => {
    map.addEventListener('zoom',createMarker)
});

function createMarker() {
    /* Crée un marker(icon) pour chaque objet de la base de données */

    recupList.forEach(element => {

        if(element['visible']==0) {
            let id = element['id'];
            let lat = element['lat'];
            let lng = element['lng'];
            let zoom = element['zoom'];
            let icon = element['icon'];
            let hover = element['hover'];

            let recupIcon = L.icon({
            iconUrl: "../image/recuperable/" + icon + ".png",
            iconSize: [40,40]}
            )

            if(map.getZoom()<zoom) {
                markersRecuperable.clearLayers();
            } else { 
                let recupMarker = L.marker([lat,lng], {icon: recupIcon})
                .addTo(markersRecuperable);
                recupMarker.id = id;
                recupMarker.addEventListener('click', function() {
                    score+=200;
                    markersRecuperable.clearLayers();
                    let indexOfObject = recupList.findIndex(object=> {
                      return object.id === recupMarker.id;
                    })
                    recupList.splice(indexOfObject, 1);
                    let divCle = document.createElement("div");
                    divCle.id = icon;
                    divCle.style.margin="1%";
                    divCle.style.border="solid 1px";
                    divCle.style.width = "80px";
                    divCle.style.height = "80px";
                    divCle.style.scale = "1";
                    divCle.style.backgroundImage = 'url("../image/recuperable/'+icon+'.png")';
                    divCle.style.backgroundSize = 'cover';                      
                    divCle.style.backgroundRepeat = 'no-repeat';
                    inventaire.append(divCle);

                    let divHover = document.createElement('div');
                        divCle.append(divHover);
                        divHover.innerText = hover;
                        divHover.style.backgroundColor = "white";
                        divHover.style.color = "black";
                        divHover.style.visibility = "hidden";
                        divHover.style.fontSize = "smaller";
                        divHover.style.opacity = "0.5";

                    divCle.addEventListener('mouseenter', function() {
                        divHover.style.visibility = "visible";
                        divCle.addEventListener('mouseleave', function() {
                            divHover.style.visibility = "hidden";
                        })
                        
                    })
                });
        }}
    })
}

