const pizza = [
  fetch("indienne.JSON"),
  fetch("a_4_fromage.JSON"),
  fetch("bolognaise.JSON"),
  fetch("carnivore.JSON"),
  fetch("la_reine.JSON"),
  fetch("mama_maglione.JSON"),
  fetch("orientale.JSON"),
  fetch("margherita.JSON"),
];
console.log(pizza);

Promise.all(pizza.map((p) => p.then((response) => response.json()))).then(
  (pizzaData) => {
    pizzaData.forEach(affichageMenu);
  }
);

function affichageMenu(pizza) {
  const articleMenu = document.getElementById("menu");
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const nomPizza = document.createElement("h2");
  nomPizza.textContent = pizza.nom;

  const descriptionPizza = document.createElement("p");
  descriptionPizza.textContent = pizza.description;

  const prixPizza = document.createElement("h6");
  prixPizza.textContent = `Prix: ${pizza.prix}€`;

  const ingredientsPizza = document.createElement("li");
  ingredientsPizza.textContent = `Ingrédients: ${pizza.ingredients.join(", ")}`;

  const selectQuantity = document.createElement("select");
  const quantities = [1, 2, 3, 4, 5];
  quantities.forEach((qty) => {
    const option = document.createElement("option");
    option.value = qty;
    option.textContent = `Quantité: ${qty}`;
    selectQuantity.appendChild(option);
  });

  const Button = document.createElement("button");
  Button.textContent = "Ajouter";

  const imagePizza = document.createElement("img");
  imagePizza.src = pizza.img;
  imagePizza.alt = pizza.nom;
  imagePizza.classList.add("pizza-img");

  menu.appendChild(imagePizza);
  menu.appendChild(nomPizza);
  menu.appendChild(descriptionPizza);
  menu.appendChild(ingredientsPizza);
  menu.appendChild(prixPizza);
  menu.appendChild(selectQuantity);
  menu.appendChild(Button);

  articleMenu.appendChild(menu);

  Button.addEventListener("click", () => panier(pizza, selectQuantity.value));
}

function panier(pizza, quantity) {
  const panierContainer = document.getElementById("panier");
  const prixTotal = pizza.prix * quantity;

  const commandeItem = document.createElement("div");
  commandeItem.classList.add("commande-item");

  const nomPizza = document.createElement("h3");
  nomPizza.textContent = `${pizza.nom} x ${quantity}`;

  const prixItem = document.createElement("p");
  prixItem.textContent = `Prix total: ${prixTotal}€`;

  commandeItem.appendChild(nomPizza);
  commandeItem.appendChild(prixItem);

  panierContainer.appendChild(commandeItem);

  showPopUp(pizza.nom, quantity, prixTotal);
}

function showPopUp(nomPizza, quantity, prixTotal) {
  const popUp = document.getElementById("popup");
  const popupContent = document.getElementById("popup-content");

  popupContent.innerHTML = `
    <h2>Résumé de la commande</h2>
    <p><strong>Pizza:</strong> ${nomPizza} x ${quantity}</p>
    <p><strong>Prix total:</strong> ${prixTotal}€</p>
    <button id="close-popup">Fermer</button>
  `;

  popUp.style.display = "block";

  document.getElementById("close-popup").addEventListener("click", () => {
    popUp.style.display = "none";
  });
}
