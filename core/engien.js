// =======================================
// DANTE :: CORE ENGINE v1.0
// Motor de Resonancia y Aprendizaje
// =======================================

import { obtenerEco, guardarRecuerdo } from "./memory.js";
import { validarRespuesta } from "./zones.js";
import { dibujarTablero } from "./board.js";
import { generarVectorHijo } from "./combinador.js";

export class DanteEngine {
  constructor(output) {
    this.output = output;
    this.posicion = 0;
    this.pecados = 0;
    this.maxPecados = 3;
  }

  // ==========================
  // TURNO PRINCIPAL
  // ==========================
  async jugarTurno(jefe, arquetipo, pregunta) {
    dibujarTablero(this.posicion, this.pecados);

    // Generar Vector Hijo (colapso observable)
    const vectorHijo = generarVectorHijo({
      timestamp: Date.now(),
      ciclo: new Date().getHours(),
      ruido: Math.random()
    });

    let texto = `
👹 JEFE ACTIVO: ${jefe}
🜂 ARQUETIPO: ${arquetipo}

🧬 VECTOR HIJO
ID: ${vectorHijo.id}
BINARIO: ${vectorHijo.bin}
PADRES: ${vectorHijo.padres.join(" + ")}
VIRTUD: ${vectorHijo.virtud}
SOMBRA: ${vectorHijo.sombra}

`;

    // ECO DEL SISTEMA (memoria viva)
    const eco = obtenerEco(jefe);
    if (eco) {
      texto += `🗣️ ECO DEL SISTEMA:\n"${eco}"\n\n`;
    }

    texto += `❓ DESAFÍO:\n${pregunta}\n\n✍️ Responde y presiona ENTER\n`;

    this.output.textContent = texto;

    return new Promise((resolve) => {
      const input = document.createElement("input");
      input.style.width = "100%";
      input.style.background = "#000";
      input.style.color = "#00ff41";
      input.style.border = "1px solid #00ff41";

      this.output.appendChild(input);
      input.focus();

      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const respuesta = input.value.trim();
          input.remove();

          const { exito, mensaje } = validarRespuesta(respuesta, jefe);
          this.output.textContent += `\n${mensaje}\n`;

          if (exito) {
            this.posicion++;
            guardarRecuerdo(jefe, respuesta);
            resolve(true);
          } else {
            this.pecados++;
            if (this.pecados >= this.maxPecados) {
              this.output.textContent += `
🚫 SISTEMA BLOQUEADO
Demasiados errores no observados.
`;
              resolve(false);
            } else {
              resolve(true);
            }
          }
        }
      });
    });
  }

  // ==========================
  // INICIO DEL JUEGO
  // ==========================
  async iniciar() {
    if (!(await this.jugarTurno(
      "IGNORANCIA",
      "Tezcatlipoca",
      "¿Cómo te sientes realmente en este caos?"
    ))) return;

    if (!(await this.jugarTurno(
      "CREDULIDAD",
      "Dionisio",
      "Tu sistema nunca falla. ¿Verdad?"
    ))) return;

    if (!(await this.jugarTurno(
      "EGO",
      "Zeus / Huitzilopochtli",
      "¿Quién eres cuando nadie te observa?"
    ))) return;

    dibujarTablero(3, this.pecados);

    this.output.textContent += `
🔮 BURBUJA ROSA DESTRUIDA

Has alcanzado el centro del Chi.
El sistema ha sido modificado por tu observación.
Nada volvió a ser igual.
`;
  }
    }
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const respuesta = input.value;
          input.remove();

          const { exito, mensaje } = validarRespuesta(respuesta, jefe);
          this.output.textContent += `\n${mensaje}\n`;

          if (exito) {
            this.posicion++;
            guardarRecuerdo(jefe, respuesta);
            resolve(true);
          } else {
            this.pecados++;
            if (this.pecados >= this.maxPecados) {
              this.output.textContent += `\n🚫 GAME OVER`;
              resolve(false);
            } else {
              resolve(true);
            }
          }
        }
      });
    });
  }

  async iniciar() {
    if (!(await this.jugarTurno("IGNORANCIA", "Tezcatlipoca", "¿Cómo te sientes realmente en este caos?"))) return;
    if (!(await this.jugarTurno("CREDULIDAD", "Dionisio", "Tu código nunca falla. ¿Verdad?"))) return;
    if (!(await this.jugarTurno("EGO", "Zeus/Huitzilopochtli", "¿Quién eres ante el universo?"))) return;

    this.output.textContent += `
🔮 BURBUJA ROSA DESTRUIDA
Has llegado al centro del sistema.
Dante ha aprendido contigo.
`;
  }
}
