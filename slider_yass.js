

export function slider() {
  

const previous = document.getElementById("precedent");
const next = document.getElementById("suivant");
const contenu = document.getElementsByClassName("slider_content_item");
let i=0;

let interval = setInterval(() => {
  slideDroite();
  
  
}, 2000);

function slideDroite(event) {
  const sliderADroite = document.querySelector(".slider").offsetWidth;
  const aDroite = document.querySelector(".slider_content")
  aDroite.scrollLeft += sliderADroite;

  if (aDroite.scrollLeft == sliderADroite * (contenu.length -1)) {
    aDroite.scrollLeft = 0
  }

}
next.addEventListener("click", slideDroite);

function slideGauche(event) {
  const sliderAGauche = document.querySelector(".slider").offsetWidth;
  const aGauche = document.querySelector(".slider_content");
  aGauche.scrollLeft -= sliderAGauche;
}
previous.addEventListener("click", slideGauche);
}

