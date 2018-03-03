<?php
	require('fonctions.php');
	$listePersonne = findPersonne();
?>
<table border="1">
	<thead>
		<th>Nom</th>
		<th>Prénom</th>
		<th>Description</th>
		<th>Date de naissance</th>
		<th>Age</th>
	</thead>
	<tbody>
		<?php foreach ($listePersonne as $personne) { ?>
			<tr>
				<td><?php echo $personne['nom']; ?></td>
				<td><?php echo $personne['prenom']; ?></td>
				<td><?php echo $personne['description']; ?></td>
				<td><?php echo $personne['dateNaissance']; ?></td>
				<td><?php echo $personne['age']; ?></td>
			</tr>
		<?php } ?>
	</tbody>
</table>