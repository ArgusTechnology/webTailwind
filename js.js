window.addEventListener('load', function() {
    "use strict";

      setTimeout(function () {
        $('.loader_bg').addClass('fade-out');
        
        // Mostrar el contenido de la página después de la animación
        setTimeout(function() {
          $('.loader_bg').remove();
          $('#content').fadeIn('slow');
        }, 1000); // Duración de la animación
      }, 1800);
  });

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


