"use strict";
import preguntasRespuestasContador from "./preguntasRespuestas.js";
import cargarSonido from "./musica.js";
//botón comenzar
const start = document.createElement("h1");
const header = document.querySelector("header");
header.append(start);
start.textContent = "Comenzar";
start.addEventListener("click", () => {
  preguntasRespuestasContador();
  start.remove();
});
//botón reiniciar
const reset = document.createElement("h2");
const footer = document.querySelector("footer");
footer.append(reset);
reset.textContent = "🔁";
reset.addEventListener("click", () => {
  window.location.reload();
});
