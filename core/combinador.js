// ===============================
// DANTE :: Combinador de Meyis
// Genera Vector Hijo (8 bits)
// ===============================

import { obtenerMeyiPorId } from "./meyis.js";

export function generarVectorHijo(seed) {
  // Seed observable (tiempo + ruido)
  const a = (seed.timestamp + Math.floor(seed.ruido * 1000)) % 16;
  const b = seed.ciclo % 16;

  const padreA = obtenerMeyiPorId(a);
  const padreB = obtenerMeyiPorId(b);

  const hijoId = (padreA.id << 4) | padreB.id; // 8 bits
  const binario = padreA.bin + padreB.bin;

  return {
    id: hijoId,
    bin: binario,
    padres: [padreA.nombre, padreB.nombre],
    virtud: `${padreA.virtud} + ${padreB.virtud}`,
    sombra: `${padreA.sombra} + ${padreB.sombra}`
  };
}
