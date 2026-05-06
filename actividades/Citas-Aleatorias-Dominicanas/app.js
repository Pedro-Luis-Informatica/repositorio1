let botonClick = document.getElementById('boton-cambiar-cita');
let cita = document.getElementById('cita');
let autor = document.getElementById('autor');
let imgAutor = document.getElementById('img-autor');

function generarOrdenAleatorio(minimo, maximo){
  minimo = Math.ceil(minimo)
  maximo = Math.floor(maximo)
  return Math.floor(Math.random() * (maximo - minimo) + minimo)
}

function cambiarCita() {

  cita.classList.add('fade-out');
  autor.classList.add('fade-out');
  imgAutor.classList.add('fade-out');

  setTimeout(() => {
    let indiceAleatorio = generarOrdenAleatorio(0, citas.length) 
    let citaOriginal = citas[indiceAleatorio]

    cita.textContent = `${citaOriginal.texto}`
    autor.textContent = `${citaOriginal.autor}`
    imgAutor.src = `${citaOriginal.imagen}`

    setTimeout(() => {
      cita.classList.add('fade-in');
      autor.classList.add('fade-in');
      imgAutor.classList.add('fade-in');
    }, 500);

  }, 500);
}

window.addEventListener('DOMContentLoaded', () =>{
  cambiarCita();
});

botonClick.addEventListener('click', cambiarCita)