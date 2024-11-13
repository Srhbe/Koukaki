// Swiper

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });


  // Parallax des nuages 

  window.addEventListener('scroll', function () {

    const bigCloud = document.querySelector('.bigCloud');
    const littleCloud = document.querySelector('.littleCloud');
    const placeSection = document.querySelector('#place');

    // Récuperation de la position verticale (offsetTop) de la section "place" par rapport au haut de la page
    // ainsi que la position de défilement verticale actuelle de la fenêtre.

    const sectionOffsetTop = placeSection.offsetTop;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    
    if (scrollPosition >= sectionOffsetTop) { // Verification que l'effet de parallaxe ne commence qu'une fois que la section est visible.

        const parallaxValue = (scrollPosition - sectionOffsetTop) / 4; // ajuste l'intensité de l'effet de parallaxe
        const translationX = Math.min(parallaxValue, 800); // limiter le déplacement maximum

        // Utilisation de la propriété CSS transform pour modifier la position des nuages avec translateX
        // Le -translationX (distance de déplacement vers la gauche), 'px' pour utiliser le pixel.

        bigCloud.style.transform = 'translateX(' + (-translationX) + 'px)';
        littleCloud.style.transform = 'translateX(' + (-translationX) + 'px)';
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const modalOpenButtons = document.querySelectorAll(".modal-open");
  const modalContent = document.querySelector(".modal__content");
  const modalBurger = document.querySelector(".modal__burger");

  // Fermer complètement la modal au démarrage
  modalContent.style.display = "none"; // Masquer le menu avec display: none
  modalContent.classList.add("menu-hidden");

  modalOpenButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      toggleModal();
    });
  });

  document.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (modalContent.classList.contains("open")) {
        toggleModal();
      }
    });
  });

  function toggleModal() {
    if (modalContent.classList.contains("open")) {
      // Fermer le menu
      modalContent.classList.remove("open");
      modalContent.classList.add("menu-hidden");

      setTimeout(() => {
        modalContent.style.display = "none";
      }, 500); // 500ms correspond à la durée de l'animation
      modalBurger.classList.remove("close");
    } else {
      // Afficher le menu
      modalContent.style.display = "block";
      
      setTimeout(() => {
        modalContent.classList.add("open");
        modalContent.classList.remove("menu-hidden");
      }, 10); // Petit délai pour appliquer les animations
      modalBurger.classList.add("close");
    }
  }
});



// apparition titre au scroll

document.addEventListener("DOMContentLoaded", function() {
  const titlesToAnimate = document.querySelectorAll('.animate-title'); // Sélectionner les titres à animer

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view'); // Ajouter la classe qui déclenche l'animation
      }
    });
  }, {
    threshold: 0.1 // Déclenchement lorsque 10% de l'élément est visible
  });

  titlesToAnimate.forEach(title => {
    observer.observe(title);
  });
});


//paralax titre
let scrollPosition = window.scrollY || document.documentElement.scrollTop;
let currentPosMove = scrollPosition;


window.addEventListener('scroll', function () {
  let logo = document.querySelector('.slide-up');
  const video = document.querySelector('.banner__video');
  const placeSection = document.querySelector('#primary');

  const sectionOffsetTop = placeSection.offsetTop;
  const sectionOffsetBottom = video.offsetTop + video.offsetHeight;
  scrollPosition = window.scrollY || document.documentElement.scrollTop;
  console.log(placeSection);
  // Debug
  console.log('scrollPosition:', scrollPosition, 'sectionOffsetTop:', sectionOffsetTop, 'sectionOffsetBottom:', sectionOffsetBottom);
  if (scrollPosition >= sectionOffsetTop && scrollPosition >= currentPosMove) { // Verification que l'effet de parallaxe ne commence qu'une fois que la section est visible.

    const parallaxValue = (scrollPosition - sectionOffsetTop); // ajuste l'intensité de l'effet de parallaxe
    const translationY = Math.min(parallaxValue, 800); // limiter le déplacement maximum

    // Utilisation de la propriété CSS transform pour modifier la position des nuages avec translateX
    // Le -translationX (distance de déplacement vers la gauche), 'px' pour utiliser le pixel.

    logo.setAttribute('class', 'slide-up down');
  }
  if (scrollPosition <= sectionOffsetBottom && scrollPosition < currentPosMove) {
    const parallaxValue = (scrollPosition - sectionOffsetBottom); // ajuste l'intensité de l'effet de parallaxe
    const translationY = Math.min(parallaxValue, 800); // limiter le déplacement maximum

    // Utilisation de la propriété CSS transform pour modifier la position des nuages avec translateX
    // Le -translationX (distance de déplacement vers la gauche), 'px' pour utiliser le pixel.

    logo.setAttribute('class', 'slide-up up');
  }
  currentPosMove = scrollPosition;
  

});
