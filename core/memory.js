const KEY = "DANTE_MEMORY";

function cargar() {
  return JSON.parse(localStorage.getItem(KEY)) || {
    IGNORANCIA: [],
    CREDULIDAD: [],
    EGO: []
  };
}

export function guardarRecuerdo(jefe, texto) {
  const mem = cargar();
  if (!mem[jefe].includes(texto)) {
    mem[jefe].push(texto);
    localStorage.setItem(KEY, JSON.stringify(mem));
  }
}

export function obtenerEco(jefe) {
  const mem = cargar();
  if (mem[jefe].length > 0) {
    return mem[jefe][Math.floor(Math.random() * mem[jefe].length)];
  }
  return null;
}
