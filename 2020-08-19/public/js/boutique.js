const afficherOnglet = (a) => {
    const content = a.parentNode.parentNode.parentNode.parentNode;
    const li = a.parentNode;

    // Si on ne clique pas sur lien déjà actif on fait rien
    if (!(li.classList.contains("active"))) {
        // On retire la class active au lien actif
        content.querySelector(".tabs .active").classList.remove("active");
    
        // J'ajoute la classe active au lien actuel
        li.classList.add("active");

        // On retire la class active sur le contenu actif
        content.querySelector(".tab-content.active").classList.remove("active");
    
        // J'ajoute la class active sur le contenu correspondant au clique
        content.querySelector(a.getAttribute("href")).classList.add("active");
    }
};

const tabs = document.querySelectorAll(".content-links > li > a");
tabs.forEach((a) => {
    // Lorsqu'on clique sur le lien pour changer d'onglet
    a.addEventListener("click", (event) => {
        // event.target coresspond au lien qui vient d'être cliqué
        afficherOnglet(event.target);
    });
});