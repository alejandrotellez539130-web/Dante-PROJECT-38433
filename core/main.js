import { DanteEngine } from "./core/engine.js";

const output = document.getElementById("output");
const start = document.getElementById("start");

start.addEventListener("click", () => {
  const engine = new DanteEngine(output);
  engine.iniciar();
});
