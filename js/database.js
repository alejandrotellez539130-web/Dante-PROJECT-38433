// [js/database.js]
export const LIBRERIA_DANTE = {
    "1110": {
        autor: "Friedrich Nietzsche",
        libro: "Así habló Zaratustra",
        frase: "El hombre es algo que debe ser superado.",
        oraculo: "Vaya... por fin despertaste. El sistema detecta que traes la frecuencia del SUPERHOMBRE."
    },
    "0000": {
        autor: "Edgar Allan Poe",
        libro: "El Cuervo",
        frase: "Nada más.",
        oraculo: "Hola, viajero de la noche. El Sistema Dante te reconoce como un Arquitecto de Sombras."
    },
    "default": {
        autor: "LA MÁQUINA",
        libro: "Registro Akáshico",
        frase: "Conócete a ti mismo.",
        oraculo: "Conexión establecida. Tu señal es débil, inténtalo de nuevo."
    }
};

// Relleno de seguridad para que no falle
const keys = ["0001","0010","0011","0100","0101","0110","0111","1000","1001","1010","1011","1100","1101","1111"];
keys.forEach(k => {
    if (!LIBRERIA_DANTE[k]) LIBRERIA_DANTE[k] = LIBRERIA_DANTE["default"];
});
