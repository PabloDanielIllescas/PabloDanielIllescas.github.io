var btnDesayuno = document.querySelector('.btn-tiempo-desayuno');
var btnAlmuerzo = document.querySelector('.btn-tiempo-almuerzo');
var btnCena = document.querySelector('.btn-tiempo-cena');
var volverDesayuno = document.querySelector('.volver-desayuno');
var volverAlmuerzo = document.querySelector('.volver-almuerzo');
var volverCena = document.querySelector('.volver-cena');
var contenidoDesayuno = document.querySelector('.contenido-desayuno');
var contenidoAlmuerzo = document.querySelector('.contenido-almuerzo');
var contenidoCena = document.querySelector('.contenido-cena');
var contenidoOriginal = document.querySelector('.contenidoOriginal');


btnDesayuno.addEventListener('click', mostrarDesayuno);
btnAlmuerzo.addEventListener('click', mostrarAlmuerzo);
btnCena.addEventListener('click', mostrarCena);
volverDesayuno.addEventListener('click', mostrarOriginal);
volverAlmuerzo.addEventListener('click', mostrarOriginal);
volverCena.addEventListener('click', mostrarOriginal);


function mostrarDesayuno() {
  
  contenidoDesayuno.classList.remove('oculto');
  contenidoAlmuerzo.classList.add('oculto');
  contenidoCena.classList.add('oculto');
  contenidoOriginal.classList.add('oculto');
}

function mostrarAlmuerzo() {
  
  contenidoDesayuno.classList.add('oculto');
  contenidoAlmuerzo.classList.remove('oculto');
  contenidoCena.classList.add('oculto');
  contenidoOriginal.classList.add('oculto');
  }

function mostrarCena() {
  
  contenidoDesayuno.classList.add('oculto');
  contenidoAlmuerzo.classList.add('oculto');
  contenidoCena.classList.remove('oculto');
  contenidoOriginal.classList.add('oculto');
}

function mostrarOriginal() {
  
    contenidoDesayuno.classList.add('oculto');
    contenidoAlmuerzo.classList.add('oculto');
    contenidoCena.classList.add('oculto');
    contenidoOriginal.classList.remove('oculto');
  }