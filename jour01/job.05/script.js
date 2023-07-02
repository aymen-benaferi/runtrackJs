function afficherjourssemaines() {
    var jourssemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    var joursContainer = document.getElementById("jours-container");

    for (var i = 0; i < jourssemaines.length; i++) {
        var jourElement = document.createElement("p");
        jourElement.textContent = jourssemaines[i];
        joursContainer.appendChild(jourElement);
    }
}
