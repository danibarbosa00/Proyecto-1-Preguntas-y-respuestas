"use strict";
import preguntasRespuestasContador from "./preguntasRespuestas.js";

//botón comenzar
const start = document.createElement("h1");
const header = document.querySelector("header");

header.append(start);
start.textContent = "Start";
start.addEventListener("click", () => {
  preguntasRespuestasContador();
  start.remove();
});

//Botón música
const audio = document.getElementById("audio");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    toggleBtn.innerText = "🔊";
  } else {
    audio.pause();
    toggleBtn.innerText = "🔇";
  }
});
