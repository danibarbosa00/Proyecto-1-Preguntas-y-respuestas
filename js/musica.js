const cargarSonido = function (fuente) {
  const sonido = document.createElement("audio");
  sonido.src = fuente;
  sonido.setAttribute("preload", "autoplay", "loop");
  sonido.setAttribute("controls", "none");

  document.body.appendChild(sonido);
  return sonido;
};

const sonido = cargarSonido("musica/musica-zero_project_Ilotana.mp3");

export default cargarSonido;
