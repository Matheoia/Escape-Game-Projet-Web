/* Affiche la div demandée */
var middle = document.getElementById('middle');
var btnLogin = document.getElementById('btnLogin');
var divLogin = document.getElementById('divLogin');
var login = document.getElementById('login');
var btnJouer = document.getElementById('btnJouer');
var btnRegles = document.getElementById('btnRegles');
var corpsRegles = document.getElementById('corpsRegles');

function affiche(div) {

    var div = document.getElementById(div);

    if(div.style.visibility=="visible") {
        div.style.visibility="hidden";
    } else {
        div.style.visibility="visible";
    }
}

