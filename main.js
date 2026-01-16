// ===============================
// DANTE :: Sistema de Resonancia
// main.js (BOOTSTRAP)
// ===============================

// Elementos del DOM
const startButton = document.getElementById("start");
const output = document.getElementById("output");

// Verificación básica (evita que el juego no corra)
startButton.addEventListener("click", () => {
  const vectorU = generarVectorU();
  const vectorHijo = generarVectorHijo(vectorU);

  output.textContent = mensajeInicial(vectorU) + `

[SISTEMA]: Vector hijo generado.
Pulso interno: ${vectorHijo.pulso.toFixed(3)}
Nivel de colapso: ${vectorHijo.intensidad.toFixed(3)}

La Burbuja Roja ha sido activada.
`;

  dibujarBurbuja(
    canvas.width / 2,
    canvas.height / 2,
    30 + vectorHijo.pulso * 40,
    vectorHijo.intensidad
  );
});
}

// Vector U — estado mínimo del observador
function generarVectorU() {
  return {
    timestamp: Date.now(),
    ciclo: new Date().getHours(),
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
