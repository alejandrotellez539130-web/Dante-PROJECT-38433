import { DanteEngine } from "./core/engine.js";

const output = document.getElementById("output");
const start = document.getElementById("start");

start.addEventListener("click", () => {
    // 1. GENERAMOS EL VECTOR (El momento presente)
    // Esto estaba tirado afuera en tu código anterior
    const vector = {
        ciclo: new Date().getHours(),
        intencion: "consulta",
        ruido: Math.random()
    };

    // 2. IMPRIMIMOS EL MENSAJE INICIAL
    // Antes tenías la función pero nunca la llamabas ni la mostrabas
    output.innerText = mensajeInicial(vector);

    // 3. INICIAMOS EL MOTOR
    // Le pasamos el vector al motor por si lo necesita para calcular los Meyis
    const engine = new DanteEngine(output);
    engine.iniciar(vector); 
});

// Respuesta inicial del sistema Dante
function mensajeInicial(vector) {
    // Definimos la zona según la hora (lógica simple para empezar)
    let zona = "NEUTRAL (Virgilio)";
    if (vector.ciclo >= 0 && vector.ciclo < 6) zona = "CREDULIDAD (Dionisio)";
    if (vector.ciclo >= 6 && vector.ciclo < 12) zona = "EGO (Zeus)";
    if (vector.ciclo >= 12 && vector.ciclo < 18) zona = "IGNORANCIA (Tezcatlipoca)";
    
    return `
[SISTEMA DANTE :: INICIALIZACIÓN]

> Estado: ACTIVO
> Ciclo detectado: ${vector.ciclo} hrs
> Zona de Influencia: ${zona}
> Ruido del sistema: ${vector.ruido.toFixed(4)}

Esperando input del usuario...
No me hables con lástima.
`;
}
