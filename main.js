// ===============================
// DANTE :: Sistema de Resonancia
// main.js (BOOTSTRAP)
// ===============================

// Elementos del DOM
const startButton = document.getElementById("start");
const output = document.getElementById("output");

// Verificación básica (evita que el juego no corra)
if (!startButton || !output) {
  throw new Error("DANTE ERROR: Elementos HTML no encontrados.");
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
