import { revelarOdu } from "./core/oracle.js";
import { renderChi } from "./core/chi.js";
import { vectorHijo } from "./core/vectors.js";

document.getElementById("start").onclick = () => {
  const odu = revelarOdu();
  const vector = vectorHijo(odu);

  document.getElementById("output").innerText =
    `Oráculo: ${odu.nombre}\nVector: ${vector.decision}`;

  renderChi("chiCanvas", odu);
};
