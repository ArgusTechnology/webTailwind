document.addEventListener("DOMContentLoaded", function() {
  const contestants = document.querySelectorAll('.contestant');

  function checkVisibility() {
      const windowHeight = window.innerHeight;

      contestants.forEach((contestant, index) => {
          const rect = contestant.getBoundingClientRect();

          if (rect.top < windowHeight && rect.bottom > 0) {
              // Mostrar concursante si está en la vista
              setTimeout(() => {
                  contestant.classList.add('show');
                  contestant.classList.remove('hide');
              }, index * 200); // Retardo entre la aparición de cada concursante
          } else {
              // Ocultar concursante si no está en la vista
              setTimeout(() => {
                  contestant.classList.add('hide');
                  contestant.classList.remove('show');
              }, index * 200); // Ocultar en orden
          }
      });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Verificar la visibilidad al cargar la página
});



/*window.addEventListener('load', function() {
    "use strict";

      setTimeout(function () {
        $('.loader_bg').addClass('fade-out');
        
        // Mostrar el contenido de la página después de la animación
        setTimeout(function() {
          $('.loader_bg').remove();
          $('#content').fadeIn('slow');
        }, 1000); // Duración de la animación
      }, 1800);
  });*/

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent!');
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

window.onscroll = function() {
    var header = document.getElementById('header');
    if (window.pageYOffset > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};


