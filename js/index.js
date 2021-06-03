// imports

import personajes from "./personajes.js";

console.log(personajes);

const listaPersonajes = document.querySelector(".personajes");

// Iteración array personajes

for (const { nombre } of personajes) {
  const elementoPersonaje = listaPersonajes
    .querySelector(".personaje-dummy")
    .cloneNode(true);

  elementoPersonaje.classList.remove("personaje-dummy");

  const nombrePersonaje = elementoPersonaje.querySelector(".nombre");
  nombrePersonaje.textContent = nombre;

  listaPersonajes.append(elementoPersonaje);
}
