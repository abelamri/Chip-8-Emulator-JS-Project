<?php

$retour = array(
	'succes' => true,
	'message' => "Vous avez bien été enregistré"
);

    $username = "Sdz";
    $password = "salut";

    if( isset($_POST['username']) && isset($_POST['password']) ){

        if($_POST['username'] == $username && $_POST['password'] == $password){ // Si les infos correspondent...
            session_start();
            $_SESSION['user'] = $username;
            echo "Success";        
        }
        else{ // Sinon
            echo "Failed";
        }

    }

echo json_encode($retour);