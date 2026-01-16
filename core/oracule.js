// Oráculo Dante – base 256
export function revelarOdu() {
  const odu = Array.from({ length: 256 }, (_, i) => `Odu ${i + 1}`);
  const num = crypto.getRandomValues(new Uint8Array(1))[0];
  return {
    index: num,
    nombre: odu[num],
    superior: (num >> 4) & 0x0f,
    inferior: num & 0x0f
  };
}
