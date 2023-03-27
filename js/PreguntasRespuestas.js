"use strict";

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
      questionElement.textContent = question;
      div.append(questionElement);

      const answersElement = document.createElement("ul");
      div.append(answersElement);

      const span = document.createElement("span");
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

          div.innerHTML = "";
          if (index + 1 === body.length) {
            const finalScore = document.createElement("p");
            finalScore.textContent = `Tu puntuación final es: ${contador}`;
            div.append(finalScore);
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
