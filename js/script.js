
function afficherHeure() {
    const date = new Date();
    const heures = date.getHours();
    const minutes = date.getMinutes();
    const secondes = date.getSeconds();

    document.getElementById('heure').innerHTML = heures + ":" + minutes + ":" + secondes;
}

setInterval(afficherHeure, 1000); // Actualiser toutes les secondes

var texte = "Je suis un enseignant et informaticien burkinabè. Mes domaines de compétences sont: La conception graphique, la conception et la réalisation des logiciels de bureau et d’application mobiles.";
    var index = 0;
    var interval;

    function afficherTexte() {
    interval = setInterval(function() {
        document.getElementById("texte").textContent = texte.slice(0, index);
        index++;
        if (index > texte.length) {
            clearInterval(interval);
            index = 0; // Réinitialiser l'index pour recommencer l'animation
            setTimeout(afficherTexte, 2000); // Attendre 2 secondes avant de recommencer
        }
    }, 50); // vitesse de frappe en millisecondes
    }

    // Démarrer l'animation
    afficherTexte();