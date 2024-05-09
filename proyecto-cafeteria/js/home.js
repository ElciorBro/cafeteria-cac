window.addEventListener('scroll', function() {
    var divPrincipalContent = document.getElementById('principal-content');
    var divPos = divPrincipalContent.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
  
    // Agregar la clase de animación cuando el div esté visible en pantalla
    if (divPos < screenHeight * 0.75) { // Cambia 0.75 por el porcentaje que desees
      divPrincipalContent.classList.add('animacion-in');
      divPrincipalContent.classList.remove('animacion-out')
    } else {
      divPrincipalContent.classList.remove('animacion-in');
      divPrincipalContent.classList.add('animacion-out')
    }
});

// funcion para frase

window.addEventListener('scroll', function() {
    var divFrase = document.getElementById('frase');
    var divFrasePos = divFrase.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (divFrasePos < screenHeight *0.75) {
        divFrase.classList.add('aparecer');
        divFrase.classList.remove('desaparecer');
    } else {
        divFrase.classList.remove('aparecer');
        divFrase.classList.add('desaparecer');
    }
})

