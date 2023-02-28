<?php 
//<!-- Récupère les différents personnages jouables -->
$link = mysqli_connect('localhost','root','root','escape_game');
$requete = "SELECT * FROM perso"; 

if($result = mysqli_query($link, $requete)) {
    foreach($result as $key => $elem) {
        $tab[] = $elem;     
      }
}
echo json_encode($tab, JSON_NUMERIC_CHECK);
?>
