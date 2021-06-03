// imports

import personajes from "./personajes.js";

console.log(personajes);

const listaPersonajes = document.querySelector(".personajes");

// Iteración array personajes

for (const {
  nombre,
  familia,
  edad,
  arma,
  destreza,
  anyosReinado,
  pelotismo,
  asesorado,
  sirveA,
} of personajes) {
  const elementoPersonaje = listaPersonajes
    .querySelector(".personaje-dummy")
    .cloneNode(true);

  elementoPersonaje.classList.remove("personaje-dummy");

  const nombrePersonaje = elementoPersonaje.querySelector(".nombre");
  nombrePersonaje.textContent = nombre;
  const edadPersonaje = elementoPersonaje.querySelector(".edad");
  edadPersonaje.textContent = edad;
  if (anyosReinado) {
    const anyosReinadoPersonaje =
      elementoPersonaje.querySelector(".anyos-reinado");
    anyosReinadoPersonaje.classList.remove("sinInfo");
    anyosReinadoPersonaje.textContent = `Años Reinado: ${anyosReinado}`;
    const iconoPersonaje = elementoPersonaje.querySelector(".emoji");
    iconoPersonaje.textContent = "👑";
  }
  if (arma) {
    const armaPersonaje = elementoPersonaje.querySelector(".arma");
    armaPersonaje.classList.remove("sinInfo");
    armaPersonaje.textContent = `Arma: ${arma}`;
    const iconoPersonaje = elementoPersonaje.querySelector(".emoji");
    iconoPersonaje.textContent = "🗡️";
  }
  if (destreza) {
    const destrezaPersonaje = elementoPersonaje.querySelector(".destreza");
    destrezaPersonaje.classList.remove("sinInfo");
    destrezaPersonaje.textContent = `Destreza: ${destreza}`;
  }
  if (pelotismo >= 0) {
    const pelotismoPersonaje = elementoPersonaje.querySelector(".peloteo");
    pelotismoPersonaje.classList.remove("sinInfo");
    pelotismoPersonaje.textContent = `Peloteo: ${pelotismo}`;
    const iconoPersonaje = elementoPersonaje.querySelector(".emoji");
    iconoPersonaje.textContent = "🛡️";
  }
  if (asesorado) {
    const asesorDePersonaje = elementoPersonaje.querySelector(".asesorDe");
    asesorDePersonaje.classList.remove("sinInfo");
    asesorDePersonaje.textContent = `Asesor de: ${asesorado.nombre}`;
    const iconoPersonaje = elementoPersonaje.querySelector(".emoji");
    iconoPersonaje.textContent = "🎓";
  }
  if (sirveA) {
    const sirvienteDePersonaje = elementoPersonaje.querySelector(".sirveA");
    sirvienteDePersonaje.classList.remove("sinInfo");
    sirvienteDePersonaje.textContent = `Sirve a: ${sirveA.nombre}`;
  }
  const imgPersonaje = elementoPersonaje.querySelector(".imgPersonaje");
  imgPersonaje.src = `img/${nombre}.jpg`;
  imgPersonaje.alt = `${nombre} de ${familia}`;

  listaPersonajes.append(elementoPersonaje);
}
