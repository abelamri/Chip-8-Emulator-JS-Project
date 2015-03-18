<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
include_once ("database.php");
$retour = array(
	'succes' => true,
	'message' => "Vous avez bien été enregistré"
    );
Database::connect();
$pseudo = $_POST['pseudo'];
$mdp = $_POST['mdp'];
$connect = $_POST['connect'];
$register = $_POST['register'];


if (isset($_POST['connect']))
{
    $query = Database::$PDO->prepare('SELECT * FROM USER WHERE pseudo = :pseudo AND mdp = :mdp');
    $result = $query->execute(array(':pseudo' => $pseudo, ':mdp' => $mdp));
    if($result->fetch()){
     session_start();
     $_SESSION['pseudo'] = $pseudo;
     echo "Success";        
 }
        else{ // Sinon

            echo "Failed";
        }
    }
    else if (isset($_POST['register']))
    {
        $query = Database::$PDO->prepare('SELECT * FROM USER WHERE pseudo = :pseudo AND mdp = :mdp');
        $result = $query->execute(array(':pseudo' => $pseudo, ':mdp' => $mdp));
        if (!($result>fetch()))
        {
           $query = Database::$PDO->prepare("INSERT INTO `USER`(`pseudo`, `mdp`) VALUES (:pseudo,:mdp)");
           if ($query->execute(array(':pseudo' => $pseudo, ':mdp' => $mdp)))
            echo json_encode($retour);
        else
            echo "Fail";
    }
    else {
        echo "Nickname already used";   
    }


}
echo "kaka";