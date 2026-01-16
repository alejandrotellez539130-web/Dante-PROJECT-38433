import { DanteEngine } from "./core/engine.js";

const output = document.getElementById("output");
const start = document.getElementById("start");

start.addEventListener("click", () => {
  const engine = new DanteEngine(output);
  engine.iniciar();
});    ciclo: new Date().getHours(),
    intencion: "consulta",
    ruido: Math.random()
  };
}

// Respuesta inicial del sistema Dante
function mensajeInicial(vector) {
  return `
[SISTEMA DANTE :: INICIALIZACIÓN]

No has sido analizado.
El sistema solo ha registrado el momento en que miraste.

Ciclo del día: ${vector.ciclo}
Ruido del sistema: ${vector.ruido.toFixed(3)}

La lectura comienza cuando formules una pregunta.
Toda respuesta es una consecuencia, no una verdad.
`;
}

// Evento
