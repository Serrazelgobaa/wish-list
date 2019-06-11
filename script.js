//créer une fonction "ajouterSouhait"
//la fonction récupère la valeur du formulaire SI ELLE N'EST PAS NULLE
//la met entre balises <li></li> 
//et la concatène dans une grosse variable contenant toute la liste

//à chaque fois qu'on clique sur le bouton, la fonction est exécutée
//si l'on clique sur le bouton "oups" ça exécute une fonction qui efface toute la liste "effacerListe"

let liste = "";
let souhaitBalise = "";

const ajouterSouhait = () => {
	let nouveauSouhait = document.getElementById('souhait').value;
	souhaitBalise = "<li>" + nouveauSouhait + "</li>";

	liste += souhaitBalise;

	document.getElementById('liste_souhaits').innerHTML = liste;
	document.getElementById('souhait').value = "";
};

const supprimerListe = () => {
	document.getElementById('liste_souhaits').innerHTML = "";
	liste = "";
};

document.getElementById('envoyer').addEventListener('click', ajouterSouhait);
document.getElementById('supprimer').addEventListener('click', supprimerListe);