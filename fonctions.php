<?php
	header('Content-Type: text/html; charset=UTF-8'); 
	function dbconnect(){
		//echo '--------------------------------------------------------Dans dbConnect-------------------------------------------------------';
		$PARAM_hote='192.168.1.102'; // le chemin vers le serveur
		$PARAM_port='3306';
		$PARAM_nom_bd='projetCluster'; // le nom de votre base de données
		$PARAM_utilisateur='cluster'; // nom d'utilisateur pour se connecter
		$PARAM_mot_passe='cluster'; // mot de passe de l'utilisateur pour se connecter
		$dbm = new PDO('mysql:host='.$PARAM_hote.';port='.$PARAM_port.';dbname='.$PARAM_nom_bd,$PARAM_utilisateur, $PARAM_mot_passe);
		return $dbm;
	}
	
	function insertEnBoucle($nombre){
		$connection = dbConnect();
		$today = "2018-03-03";
		for($compteur=0;$compteur<$nombre;$compteur++){
			$nom = "Nom".$compteur;
			$prenom = "Prenom".$compteur;
			$description = "Ceci est sensé être la description de la personne, mon travail est de faire en sorte que la valeur de ce champ soit le plus long possible. Ce description appartient à l''élément numero ".$compteur." de la boucle.";
			date_default_timezone_set ('Africa/Nairobi');
			$dateNaissance = date('d-m-Y', strtotime($today.' + 1 DAY'));
			insertSolo($connection,$nom,$prenom,$description,$dateNaissance,$compteur);
		}
		$connection = null;
	}
	function insertSolo($connection,$nom,$prenom,$description,$dateNaissance,$age){
		$query = "Insert into personne values('".$nom."','".$prenom."','".$description."','".$dateNaissance."',".$age.")";
		//echo $query;
		$connection->query($query);
	}
	function findPersonne(){
		$connection = dbConnect();
		$query = "Select * from Personne";
		$listePersonne = $connection->query($query);
		$connection = null;
		return $listePersonne;
	}
?>