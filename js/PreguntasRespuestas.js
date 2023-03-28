// "use strict";

const preguntasRespuestasContador = () => {
  let contador = 0;
  const preguntasRespuestas = async (index) => {
    try {
      const response = await fetch(
        "https://gist.githubusercontent.com/bertez/2528edb2ab7857dae29c39d1fb669d31/raw/4891dde8eac038aa5719512adee4b4243a8063fd/quiz.json"
      );
      const body = await response.json();
      const { question, answers, correct } = body[index];
      const div = document.querySelector("div");
      const questionElement = document.createElement("p");
      const answersElement = document.createElement("ul");
      const span = document.createElement("span");

      questionElement.textContent = question;
      div.append(questionElement);
      div.append(answersElement);
      div.append(span);
      span.append(contador);

      for (const answer of answers) {
        const answerElement = document.createElement("li");
        answerElement.textContent = answer;
        answersElement.append(answerElement);
        answerElement.addEventListener("click", () => {
          if (answerElement.textContent === correct) {
            contador++;
            answerElement.remove();
          } else {
            answerElement.remove();
          }
          span.textContent = contador;
          div.innerHTML = "";

          if (index === body.length - 1) {
            const mensajeFinal = document.createElement("h2");
            mensajeFinal.textContent = `Fin del juego. Has acertado ${contador} preguntas.`;
            div.appendChild(mensajeFinal);

            const restartButton = document.createElement("button");
            restartButton.textContent = "Reiniciar juego";
            div.appendChild(restartButton);

            restartButton.addEventListener("click", () => {
              contador = 0;
              preguntasRespuestas(0);
              restartButton.remove();
              mensajeFinal.remove();
            });
          } else {
            preguntasRespuestas(index + 1);
          }
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  preguntasRespuestas(0);
};

export default preguntasRespuestasContador;
