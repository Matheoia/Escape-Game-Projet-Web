<?php 
// Récupère dans la base de données les meilleurs joueurs 

$link = mysqli_connect('localhost','root','root','escape_game');


$requete = "SELECT * FROM joueurs ORDER BY score DESC LIMIT 5"; 


if($result = mysqli_query($link, $requete)) {
    foreach($result as $key => $elem) {
        $tab[] = $elem;     
      }
}
echo json_encode($tab, JSON_NUMERIC_CHECK);

?>