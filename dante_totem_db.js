/* ===============================================
   DANTE TOTEM DATABASE (DB)
   Versión: 7.0 (The Bibliotheca Update)
   Descripción: 16 Meyis + Librería de Citas Maestras
   ===============================================
*/

// 1. MAPA TÁCTICO (ARQUETIPOS)
const MAPA_TOTEMS_MEYI = {
    1: { nombre: "ORIGEN (Ejiogbe)", totems: [ { animal: "Huevo", umbral: 0.25, estado: "virtud", sentido: "potencial puro" }, { animal: "Colibrí", umbral: 0.618, estado: "virtud", sentido: "inicio ligero" }, { animal: "Caballo", umbral: 0.85, estado: "sombra", sentido: "impulso sin forma" }, { animal: "Cometa", umbral: 1.0, estado: "sombra", sentido: "caos inicial" } ] },
    2: { nombre: "DUALIDAD (Oyeku)", totems: [ { animal: "Pez", umbral: 0.25, estado: "virtud", sentido: "adaptación" }, { animal: "Cisne", umbral: 0.618, estado: "virtud", sentido: "vínculo" }, { animal: "Pulpo", umbral: 0.85, estado: "sombra", sentido: "dependencia" }, { animal: "Sanguijuela", umbral: 1.0, estado: "sombra", sentido: "fusión tóxica" } ] },
    3: { nombre: "MOVIMIENTO (Iwori)", totems: [ { animal: "Lagartija", umbral: 0.25, estado: "virtud", sentido: "reacción" }, { animal: "Venado", umbral: 0.618, estado: "virtud", sentido: "desplazamiento" }, { animal: "Lobo", umbral: 0.85, estado: "sombra", sentido: "huida" }, { animal: "Tornado", umbral: 1.0, estado: "sombra", sentido: "fuga sin dirección" } ] },
    4: { nombre: "FORMA (Odi)", totems: [ { animal: "Concha", umbral: 0.25, estado: "virtud", sentido: "contención" }, { animal: "Tortuga", umbral: 0.618, estado: "virtud", sentido: "estructura" }, { animal: "Rinoceronte", umbral: 0.85, estado: "sombra", sentido: "rigidez" }, { animal: "Muralla", umbral: 1.0, estado: "sombra", sentido: "petrificación" } ] },
    5: { nombre: "RITMO (Irosun)", totems: [ { animal: "Grillo", umbral: 0.25, estado: "virtud", sentido: "pulso" }, { animal: "Gato", umbral: 0.618, estado: "virtud", sentido: "espera activa" }, { animal: "Búho", umbral: 0.85, estado: "sombra", sentido: "parálisis mental" }, { animal: "Reloj roto", umbral: 1.0, estado: "sombra", sentido: "tiempo muerto" } ] },
    6: { nombre: "CONFLICTO (Owonrin)", totems: [ { animal: "Escorpión", umbral: 0.25, estado: "virtud", sentido: "alerta" }, { animal: "Jaguar", umbral: 0.618, estado: "virtud", sentido: "confrontación" }, { animal: "Tiburón", umbral: 0.85, estado: "sombra", sentido: "agresión" }, { animal: "Guerra", umbral: 1.0, estado: "sombra", sentido: "destrucción" } ] },
    7: { nombre: "DIRECCIÓN (Obara)", totems: [ { animal: "Ganso", umbral: 0.25, estado: "virtud", sentido: "rumbo" }, { animal: "Águila", umbral: 0.618, estado: "virtud", sentido: "liderazgo" }, { animal: "León", umbral: 0.85, estado: "sombra", sentido: "dominio" }, { animal: "Dictador", umbral: 1.0, estado: "sombra", sentido: "control total" } ] },
    8: { nombre: "UNIÓN (Okanran)", totems: [ { animal: "Abeja", umbral: 0.25, estado: "virtud", sentido: "cooperación" }, { animal: "Perro", umbral: 0.618, estado: "virtud", sentido: "lealtad" }, { animal: "Pulpo gigante", umbral: 0.85, estado: "sombra", sentido: "absorción" }, { animal: "Colmena cerrada", umbral: 1.0, estado: "sombra", sentido: "anulación" } ] },
    9: { nombre: "CONTENCIÓN (Ogunda)", totems: [ { animal: "Ratón", umbral: 0.25, estado: "virtud", sentido: "ahorro" }, { animal: "Camello", umbral: 0.618, estado: "virtud", sentido: "resistencia" }, { animal: "Caracol", umbral: 0.85, estado: "sombra", sentido: "bloqueo" }, { animal: "Jaula", umbral: 1.0, estado: "sombra", sentido: "estancamiento" } ] },
    10: { nombre: "PRESENCIA (Osa)", totems: [ { animal: "Gallo", umbral: 0.25, estado: "virtud", sentido: "conciencia" }, { animal: "Ciervo", umbral: 0.618, estado: "virtud", sentido: "dignidad" }, { animal: "Pavo real", umbral: 0.85, estado: "sombra", sentido: "máscara" }, { animal: "Espejo roto", umbral: 1.0, estado: "sombra", sentido: "ego fracturado" } ] },
    11: { nombre: "FLUJO (Ika)", totems: [ { animal: "Pez koi", umbral: 0.25, estado: "virtud", sentido: "avance" }, { animal: "Delfín", umbral: 0.618, estado: "virtud", sentido: "armonía" }, { animal: "Medusa", umbral: 0.85, estado: "sombra", sentido: "dispersión" }, { animal: "Diluvio", umbral: 1.0, estado: "sombra", sentido: "desborde" } ] },
    12: { nombre: "CIERRE (Oturupon)", totems: [ { animal: "Ostra", umbral: 0.25, estado: "virtud", sentido: "recogimiento" }, { animal: "Oso", umbral: 0.618, estado: "virtud", sentido: "retiro" }, { animal: "Topo", umbral: 0.85, estado: "sombra", sentido: "negación" }, { animal: "Tumba", umbral: 1.0, estado: "sombra", sentido: "clausura total" } ] },
    13: { nombre: "MEMORIA (Otura)", totems: [ { animal: "Elefante", umbral: 0.25, estado: "virtud", sentido: "recuerdo vivo" }, { animal: "Cuervo", umbral: 0.618, estado: "virtud", sentido: "linaje" }, { animal: "Fantasma", umbral: 0.85, estado: "sombra", sentido: "apego" }, { animal: "Ruina", umbral: 1.0, estado: "sombra", sentido: "pasado muerto" } ] },
    14: { nombre: "PODER (Irete)", totems: [ { animal: "Toro", umbral: 0.25, estado: "virtud", sentido: "fuerza" }, { animal: "Dragón", umbral: 0.618, estado: "virtud", sentido: "autoridad" }, { animal: "Kraken", umbral: 0.85, estado: "sombra", sentido: "exceso" }, { animal: "Sol negro", umbral: 1.0, estado: "sombra", sentido: "consumo total" } ] },
    15: { nombre: "MEDIDA (Oshe)", totems: [ { animal: "Hormiga", umbral: 0.25, estado: "virtud", sentido: "proporción" }, { animal: "Cabra", umbral: 0.618, estado: "virtud", sentido: "humildad" }, { animal: "Gusano", umbral: 0.85, estado: "sombra", sentido: "sumisión" }, { animal: "Polvo", umbral: 1.0, estado: "sombra", sentido: "anulación" } ] },
    16: { nombre: "ENTUSIASMO (Ofun)", totems: [ { animal: "Chispa", umbral: 0.25, estado: "virtud", sentido: "alegría" }, { animal: "Mono", umbral: 0.618, estado: "virtud", sentido: "juego" }, { animal: "Fuego fatuo", umbral: 0.85, estado: "sombra", sentido: "euforia" }, { animal: "Explosión", umbral: 1.0, estado: "sombra", sentido: "pérdida total de control" } ] }
};

// 2. LIBRERÍA DE CITAS (AUTORIDAD CULTURAL)
const LIBRERIA_CITAS = {
    1: { luz: { autor: "LAO-TSÉ", cita: "Un viaje de mil millas comienza con un solo paso." }, sombra: { autor: "NIETZSCHE", cita: "Es preciso tener un caos dentro de sí para dar a luz a una estrella danzante." } },
    2: { luz: { autor: "SAINT-EXUPÉRY", cita: "Amar no es mirarse el uno al otro; es mirar juntos en la misma dirección." }, sombra: { autor: "SARTRE", cita: "El infierno son los otros." } },
    3: { luz: { autor: "GALILEO", cita: "Eppur si muove (Y sin embargo, se mueve)." }, sombra: { autor: "TOLKIEN", cita: "No todos los que vagan están perdidos, pero tú sí." } },
    4: { luz: { autor: "MARCO AURELIO", cita: "La felicidad de tu vida depende de la calidad de tus pensamientos." }, sombra: { autor: "KAFKA", cita: "Quien construye muros termina siendo prisionero de su propia obra." } },
    5: { luz: { autor: "BORGES", cita: "El tiempo es la sustancia de la que estoy hecho." }, sombra: { autor: "LEWIS CARROLL", cita: "¡Llego tarde! ¡Llego tarde! A una cita muy importante." } },
    6: { luz: { autor: "SUN TZU", cita: "La suprema excelencia consiste en romper la resistencia del enemigo sin luchar." }, sombra: { autor: "NIETZSCHE", cita: "Quien lucha con monstruos debe tener cuidado de no convertirse en uno." } },
    7: { luz: { autor: "SÉNECA", cita: "No hay viento favorable para el que no sabe a qué puerto va." }, sombra: { autor: "ORWELL", cita: "Todos los animales son iguales, pero algunos son más iguales que otros." } },
    8: { luz: { autor: "JOHN DONNE", cita: "Ningún hombre es una isla, completo en sí mismo." }, sombra: { autor: "KIERKEGAARD", cita: "La multitud es la mentira." } },
    9: { luz: { autor: "SÉNECA", cita: "No es pobre el que tiene poco, sino el que mucho desea." }, sombra: { autor: "KAFKA", cita: "Una jaula salió en busca de un pájaro." } },
    10: { luz: { autor: "OSCAR WILDE", cita: "Sé tú mismo; todos los demás puestos ya están ocupados." }, sombra: { autor: "ALAN MOORE", cita: "Llevamos máscaras tanto tiempo que olvidamos quiénes somos debajo." } },
    11: { luz: { autor: "BRUCE LEE", cita: "Vacía tu mente, sé amorfo, moldeable, como el agua." }, sombra: { autor: "HERÁCLITO", cita: "Ningún hombre puede cruzar el mismo río dos veces." } },
    12: { luz: { autor: "LAO-TSÉ", cita: "Aquello que la oruga llama el fin del mundo, el maestro lo llama mariposa." }, sombra: { autor: "T.S. ELIOT", cita: "Así es como termina el mundo: no con una explosión, sino con un gemido." } },
    13: { luz: { autor: "SANTAYANA", cita: "Los que no pueden recordar el pasado están condenados a repetirlo." }, sombra: { autor: "GARCÍA MÁRQUEZ", cita: "La vida no es la que uno vivió, sino la que uno recuerda." } },
    14: { luz: { autor: "VOLTAIRE", cita: "Un gran poder conlleva una gran responsabilidad." }, sombra: { autor: "ORWELL", cita: "El poder no es un medio, es un fin." } },
    15: { luz: { autor: "DARWIN", cita: "No es la especie más fuerte la que sobrevive, sino la que mejor se adapta." }, sombra: { autor: "CARL SAGAN", cita: "Somos polvo de estrellas... y al polvo volveremos." } },
    16: { luz: { autor: "EINSTEIN", cita: "La creatividad es la inteligencia divirtiéndose." }, sombra: { autor: "THE DARK KNIGHT", cita: "Algunos hombres solo quieren ver el mundo arder." } }
};

// 3. MOTOR DE INFERENCIA ACTUALIZADO
const TOTEM_SYSTEM = {
    getEstadoTactico: (meyiInput, presion) => {
        // Fallback robusto
        const id = MAPA_TOTEMS_MEYI[meyiInput] ? meyiInput : 1;
        const data = MAPA_TOTEMS_MEYI[id];
        
        // Búsqueda del Tótem
        const totem = data.totems.find(t => presion <= t.umbral) || data.totems[3];
        
        // Selección de Cita (Luz vs Sombra)
        const tipoEstado = totem.estado; // "virtud" o "sombra"
        const citaObj = (tipoEstado === "virtud") ? LIBRERIA_CITAS[id].luz : LIBRERIA_CITAS[id].sombra;

        return {
            identity: data.nombre,
            manifestation: totem.animal,
            directive: totem.sentido.toUpperCase(),
            state: totem.estado,
            isCritical: presion > 0.618,
            // Nuevos campos de autoridad
            quote: citaObj.cita,
            author: citaObj.autor
        };
    }
};
