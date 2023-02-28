<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../image/iconMario.png"/>
    <title>Accueil</title>
    <link rel="stylesheet" href="../css/accueil.css">
</head>
<body><!-- Page d'accueuil du jeu -->

<div id="barre">
        <!-- <div id="login-container" class="option-container">
            <div id="btnLogin" class="option-bouton" onclick="affiche('divLogin')">
                <button class="button">S'enregistrer</button>
            </div>
            <div id="divLogin">
                <form id="login" method="post" action="#">
                    <label for="prenom"></label>
                    <input id="prenom" type="text" placeholder="Prenom" name="prenom">
                    <label for="nom"></label>
                    <input id="nom" type="text" placeholder="Nom" name="nom">
                    <label for="pseudo"></label>
                    <input id="pseudo" type="text" placeholder="Pseudo" name="pseudo">
                    <input id="envoiLogin" type="submit" name="submit" value="Enregistrer">
                </form>
            </div>  
        </div> -->
        <div id="regles-container" class="option-container">
            <div id="btnRegles" class="option-bouton" onclick="affiche('corpsRegles')">
                <button class="button">Règles</button>
            </div>
        </div>
        <div id="hof-container" class="option-container">
            <a id="btnHOF" class="option-bouton" href="hof.php">Hall of Fame</a>
        </div>
    </div>

    <div id=corpsJouer class="corps">
        <div id="middle">
            <div id="btnJouer-container">
                <form id=formJouer method="post" action="../html/perso.html">
                    <input id="btnJouer" type="submit" value="COMMENCER L'AVENTURE">
                </form>
            </div>
        </div>
    </div>

    <div id="corpsRegles" class="corps">
        <h1>Règles</h1>
        <p>Il n'y en a pas.</p>
        <p>Tout est permis.</p>
    </div>

    <div id="corpsHOF" classe="corps">
        <h1>Hall of Fame<h1>
        <div></div>
    </div>
 
    <script src="../js/accueil.js" charset="UTF-8"></script>
    
</body>
</html>




