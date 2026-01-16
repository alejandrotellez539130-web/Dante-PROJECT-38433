export function renderChi(canvasId, odu) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#ff0044";

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const r = 80;

  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.stroke();

  ctx.fillText(`Chi: ${odu.nombre}`, cx - 40, cy);
}
