document.addEventListener("DOMContentLoaded", () => {
  const ajouterCommandeBtn = document.getElementById("ajouterCommande");
  const commandeInput = document.getElementById("commandeInput");

  const listEnCours = document.getElementById("listEnCours");
  const listFini = document.getElementById("listFini");
  const listLivree = document.getElementById("listLivree");

  function deplacerCommande(commandeElement, nouvelleSection) {
    nouvelleSection.appendChild(commandeElement);
  }

  function creerCommandeElement(commandeTexte) {
    const li = document.createElement("li");
    li.textContent = commandeTexte;

    const boutonTerminer = document.createElement("button");
    boutonTerminer.textContent = "Terminer";

    boutonTerminer.addEventListener("click", () => {
      deplacerCommande(li, listFini);
    });

    const boutonLivrer = document.createElement("button");
    boutonLivrer.textContent = "Livrer";
    boutonLivrer.addEventListener("click", () => {
      deplacerCommande(li, listLivree);
    });

    li.appendChild(boutonTerminer);
    li.appendChild(boutonLivrer);

    return li;
  }

  ajouterCommandeBtn.addEventListener("click", () => {
    const commandeTexte = commandeInput.value.trim();
    if (commandeTexte !== "") {
      const commandeElement = creerCommandeElement(commandeTexte);
      listEnCours.appendChild(commandeElement);
      commandeInput.value = "";
    }
  });

  commandeInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      ajouterCommandeBtn.click();
    }
  });
});
