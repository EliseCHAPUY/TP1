$(document).ready(function() {

    function nav() {
      $('.nav-toggle').click(function() {
        $('.nav').toggleClass('open');
      });
    }
  
    nav();
  
    // Fonction pour gérer le défilement fluide
    function smoothScroll(target) {
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 800); 
    }
  
    // Gestionnaire d'événements pour chaque lien du menu
    $('.nav a').click(function(event) {
      event.preventDefault(); 
  
      var targetId = $(this).attr('href');
  
      smoothScroll(targetId);
    });


  });
 
// Variables globales
let compteur = 0 // Compteur qui permettra de savoir sur quelle slide nous sommes
let timer, elements, slides, slideWidth;

  // On récupère le conteneur principal du diaporama
const diapo = document.querySelector("#full-slide");

// On récupère le conteneur de tous les éléments
elements = document.querySelector(".banner");

// On récupère un tableau contenant la liste des diapos
slides = Array.from(elements.children);

// On récupère les deux flèches
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

// On calcule la largeur visible du diaporama
slideWidth = diapo.getBoundingClientRect().width;

// On met en place les écouteurs d'évènements sur les flèches
next.addEventListener("click", slideNext);
prev.addEventListener("click", slidePrev);

/**
 * Cette fonction fait défiler le diaporama vers la droite
 */
function slideNext(){
  // On incrémente le compteur
  compteur++;

  // Si on dépasse la fin du diaporama, on "rembobine"
  if(compteur == slides.length){
      compteur = 0;
  }

  // On calcule la valeur du décalage
  let decal = -slideWidth * compteur;
  elements.style.transform = `translateX(${decal}px)`;
}

/**
* Cette fonction fait défiler le diaporama vers la gauche
*/
function slidePrev(){
  // On décrémente le compteur
  compteur--;

  // Si on dépasse le début du diaporama, on repart à la fin
  if(compteur < 0){
      compteur = slides.length - 1;
  }

  // On calcule la valeur du décalage
  let decal = -slideWidth * compteur;
  elements.style.transform = `translateX(${decal}px)`;

// Débogage : Afficher le compteur actuel dans la console
console.log("Compteur après slideNext :", compteur);

// Débogage : Afficher le compteur actuel dans la console
console.log("Compteur après slidePrev :", compteur);
}


const map = L.map('map').setView([46.813878, -71.207981], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


