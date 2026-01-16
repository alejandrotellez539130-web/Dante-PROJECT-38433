export function vectorHijo(odu) {
  return {
    conciencia: odu.superior,
    sombra: odu.inferior,
    decision: odu.superior >= odu.inferior ? "expansión" : "repliegue"
  };
}
