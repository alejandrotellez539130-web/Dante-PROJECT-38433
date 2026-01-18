// [js/database.js] v9.0
export const LIBRERIA_DANTE = {
    // EJEMPLO: Tu resultado fue 1110 (Nietzsche)
    "1110": {
        autor: "Friedrich Nietzsche", 
        libro: "Así habló Zaratustra",
        frase: "El hombre es algo que debe ser superado.", 
        oraculo: ">>> ANÁLISIS DE FRECUENCIA: VECTOR 1110 (IRETE-MEYI)\n\nESTADO: PRESIÓN Y GENIO.\nTu vibración actual indica una tensión creativa insoportable. Estás pisando el terreno del 'Superhombre'. El sistema detecta que quieres destruir viejos ídolos para crear nuevos. \n\nADVERTENCIA: Cuidado con la soledad de la cima. Tu arrogancia es tu combustible, pero también tu veneno."
    },
    "0000": {
        autor: "Edgar Allan Poe", 
        libro: "El Cuervo",
        frase: "Nada más.", 
        oraculo: ">>> ANÁLISIS DE FRECUENCIA: VECTOR 0000 (YEKUN-MEYI)\n\nESTADO: VACÍO PRIMORDIAL.\nLa oscuridad no es mala, es el lienzo donde pintas. Estás en un momento de finalización absoluta. Algo ha muerto en tu vida (metafóricamente) y te niegas a dejarlo ir.\n\nCONSEJO: Deja de tocar la puerta. Nadie va a abrir. Tienes que construir tu propia casa."
    },
    // ... (El sistema usará estos textos por defecto si no encuentra uno específico, para que no falle)
    "default": {
        autor: "SISTEMA",
        libro: "Archivo Central",
        frase: "La ignorancia es atrevida.",
        oraculo: ">>> DATOS INSUFICIENTES.\nEl sistema detecta una vibración, pero el oráculo está nublado. Intenta concentrarte más en la siguiente consulta."
    }
    // NOTA: Tienes que llenar los otros 14 vectores con tus textos sagrados cuando tengas tiempo.
    // Por ahora, si sale otro número, usa la lógica del código para no romperlo.
};

// Relleno rápido para que no falle ningún número (puedes borrar esto cuando llenes los 16 reales)
["0001","0010","0011","0100","0101","0110","0111","1000","1001","1010","1011","1100","1101","1111"].forEach(k => {
    if (!LIBRERIA_DANTE[k]) LIBRERIA_DANTE[k] = LIBRERIA_DANTE["1110"]; // Copia temporal
});
