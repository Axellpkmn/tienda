const boton = document.getElementById('botonMenu');
const menu = document.getElementById('miMenu');
const overlay = document.getElementById('overlay');
let abierto = false;

function toggleMenu() {
  if (!abierto) {
    menu.classList.add('open');
    boton.classList.add('open');
    overlay.style.display = 'block';
    abierto = true;
  } else {
    menu.classList.remove('open');
    boton.classList.remove('open');
    overlay.style.display = 'none';
    abierto = false;
  }
}

overlay.addEventListener('click', () => {
  menu.classList.remove('open');
  boton.classList.remove('open');
  overlay.style.display = 'none';
  abierto = false;
});
