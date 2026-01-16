// ===============================
// DANTE :: Engine (PaiSho JS)
// ===============================

import { obtenerEco, guardarRecuerdo } from "./memory.js";
import { validarRespuesta } from "./zones.js";
import { dibujarTablero } from "./board.js";

export class DanteEngine {
  constructor(output) {
    this.posicion = 0;
    this.pecados = 0;
    this.maxPecados = 3;
    this.output = output;
  }

  async jugarTurno(jefe, arquetipo, pregunta) {
    dibujarTablero(this.posicion, this.pecados);

    let texto = `👹 JEFE: ${jefe} (${arquetipo})\n\n`;

    const eco = obtenerEco(jefe);
    if (eco) {
      texto += `🗣️ ECO DEL SISTEMA:\n"${eco}"\n\n`;
    }

    texto += `❓ RETO:\n${pregunta}\n\n`;
    texto += `✍️ Escribe tu respuesta y presiona ENTER.\n`;

    this.output.textContent = texto;

    return new Promise((resolve) => {
      const input = document.createElement("input");
      input.style.width = "100%";
      this.output.appendChild(input);
      input.focus();

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
