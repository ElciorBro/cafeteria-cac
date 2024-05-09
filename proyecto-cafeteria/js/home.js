const fadeAnimation = (elementId) => {
  var element = document.getElementById(elementId);
  var elementPos = element.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  // Agregar la clase de animación cuando el div esté visible en pantalla
  if (elementPos < screenHeight * 0.75) { // Cambia 0.75 por el porcentaje que desees
    element.classList.add('animacion-in');
    element.classList.remove('animacion-out')
  } else {
    element.classList.remove('animacion-in');
    element.classList.add('animacion-out')
  }
}

const moveRight = (elementId) => {
  var element = document.getElementById(elementId);
  var elementPos = element.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (elementPos < screenHeight *0.75) {
      element.classList.add('aparecer');
      element.classList.remove('desaparecer');
  } else {
      element.classList.remove('aparecer');
      element.classList.add('desaparecer');
  }
}

const cargar = () => {
  var element = document.getElementById('descripcion');
  element.classList.add('animacion-init')
}

// Funcion para temaios

window.addEventListener('scroll',() => {
  fadeAnimation('principal-content');
})

// funcion para frase

window.addEventListener('scroll', () => {
  moveRight('frase')
})

window.onload = cargar()