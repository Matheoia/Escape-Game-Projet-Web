<?php 
//Récupère dans la base de données les dialogues du endgame
$link = mysqli_connect('localhost','root','root','escape_game');
$requete = "SELECT * FROM endgame"; 

if($result = mysqli_query($link, $requete)) {
    foreach($result as $key => $elem) {
        $tab[] = $elem;     
      }
}
echo json_encode($tab, JSON_NUMERIC_CHECK);
?>
