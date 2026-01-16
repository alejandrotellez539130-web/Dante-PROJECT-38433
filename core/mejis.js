// ===============================
// DANTE :: 16 MEYIS BASE
// Sistema binario 4-bit (0–15)
// ===============================

export const MEYIS = [
  { id: 0,  bin: "0000", nombre: "VACÍO",        virtud: "Potencial",    sombra: "Disolución" },
  { id: 1,  bin: "0001", nombre: "ORIGEN",       virtud: "Inicio",       sombra: "Avaricia" },
  { id: 2,  bin: "0010", nombre: "PRESIÓN",      virtud: "Resistencia",  sombra: "Crueldad" },
  { id: 3,  bin: "0011", nombre: "FLUJO",        virtud: "Vitalidad",    sombra: "Exceso" },
  { id: 4,  bin: "0100", nombre: "VIENTO",       virtud: "Movimiento",   sombra: "Miedo" },
  { id: 5,  bin: "0101", nombre: "VISIÓN",       virtud: "Claridad",     sombra: "Ilusión" },
  { id: 6,  bin: "0110", nombre: "LÓGICA",       virtud: "Orden",        sombra: "Duda" },
  { id: 7,  bin: "0111", nombre: "VOZ",          virtud: "Expresión",    sombra: "Mentira" },
  { id: 8,  bin: "1000", nombre: "JUSTICIA",     virtud: "Equilibrio",   sombra: "Ira" },
  { id: 9,  bin: "1001", nombre: "LIBERTAD",     virtud: "Autonomía",    sombra: "Bloqueo" },
  { id: 10, bin: "1010", nombre: "CAMBIO",       virtud: "Evolución",    sombra: "Caos" },
  { id: 11, bin: "1011", nombre: "VERDAD",       virtud: "Coherencia",   sombra: "Confusión" },
  { id: 12, bin: "1100", nombre: "PODER",        virtud: "Influencia",   sombra: "Dominio" },
  { id: 13, bin: "1101", nombre: "CONEXIÓN",     virtud: "Amor",         sombra: "Celos" },
  { id: 14, bin: "1110", nombre: "FUERZA",       virtud: "Determinación",sombra: "Violencia" },
  { id: 15, bin: "1111", nombre: "CLARIDAD",     virtud: "Conciencia",   sombra: "Ego" }
];

// Helper
export function obtenerMeyiPorId(id) {
  return MEYIS[id % 16];
   }
