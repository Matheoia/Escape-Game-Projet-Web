<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fin</title>
    <link rel="stylesheet" href="../css/accueil.css">
    <link rel="stylesheet" href="../css/hof.css">
    
</head>
<body><!-- Page de fin du jeu -->

<?php

$conn = mysqli_connect("localhost", "root", "root", "escape_game");
 
$perso =  $_POST['perso'];
$pseudo = $_POST['pseudo'];
$score =  $_POST['score'];

echo $_POST['pseudo'];

$sql = "INSERT INTO joueurs(pseudo,perso,score) VALUES ('$pseudo','$perso','$score')";
 
$run = mysqli_query($conn, $sql);

$query = "SELECT * from joueurs WHERE score > '$score'";

$result = mysqli_query($conn, $query); 
$rang = mysqli_num_rows($result);

?>
    
    <div id="barre">
        <div id="jeu-container" class="option-container">
            <a id="btnRetourAuJeu" class="option-bouton" href="accueil.php">Retour au Jeu</a>
        </div>
        <div id="hof-container" class="option-container">
        <a id="btnHOF" class="option-bouton" href="hof.php">Hall of Fame</a>
        </div>
    </div>

    <div id=corpsHOF class="corps">
        <h1><?php echo $pseudo; ?></h1>
        <p>Voici votre score : <?php echo $score; ?></p>
        <p><?php 
        if($rang==0) {
            echo "Vous êtes officiellement le meilleur au joueur au monde";
        } else {
            $pos = $rang + 1;
            echo "Vous pouvez faire mieux..." + $pos + "ème";
        }
        ?>
    </div>
    
</body>
</html>