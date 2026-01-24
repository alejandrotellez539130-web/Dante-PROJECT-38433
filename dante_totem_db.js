/* ===============================================
   DANTE TOTEM DATABASE (DB)
   Versión: 5.1 (The Full 16 Meyis)
   Descripción: Matriz completa de 64 arquetipos
   ===============================================
*/

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

const TOTEM_SYSTEM = {
    getEstadoTactico: (meyiInput, presion) => {
        const data = MAPA_TOTEMS_MEYI[meyiInput] || MAPA_TOTEMS_MEYI[1];
        const totem = data.totems.find(t => presion <= t.umbral) || data.totems[3];
        return {
            identity: data.nombre,
            manifestation: totem.animal,
            directive: totem.sentido.toUpperCase(),
            state: totem.estado,
            isCritical: presion > 0.618
        };
    }
};
