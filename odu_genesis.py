import json
import itertools

# --- INPUT: ADN BASE (Los 16 Padres/Mejis) ---
# Cada uno representa 4 bits (una pata del Ifá)
base_dna = {
    "Ogbe":    {"bits": "1111", "func": "Conciencia",   "buff": "Claridad",      "nerf": "Inflación"},
    "Oyekun":  {"bits": "0000", "func": "Inconsciente", "buff": "Profundidad",   "nerf": "Vacío"},
    "Iwori":   {"bits": "0110", "func": "Intelecto",    "buff": "Análisis",      "nerf": "Rumiación"},
    "Odi":     {"bits": "1001", "func": "Control",      "buff": "Autocontrol",   "nerf": "Bloqueo"},
    "Irosun":  {"bits": "0101", "func": "Energía",      "buff": "Creatividad",   "nerf": "Impulsividad"},
    "Owonrin": {"bits": "1010", "func": "Cambio",       "buff": "Adaptación",    "nerf": "Caos"},
    "Obara":   {"bits": "0111", "func": "Lenguaje",     "buff": "Comunicación",  "nerf": "Manipulación"},
    "Okanran": {"bits": "1000", "func": "Voluntad",     "buff": "Valentía",      "nerf": "Violencia"},
    "Ogunda":  {"bits": "1110", "func": "Acción",       "buff": "Determinación", "nerf": "Brutalidad"},
    "Osa":     {"bits": "0100", "func": "Emoción",      "buff": "Sensibilidad",  "nerf": "Ansiedad"},
    "Ika":     {"bits": "1100", "func": "Estrategia",   "buff": "Astucia",       "nerf": "Paranoia"},
    "Oturupon":{"bits": "0011", "func": "Resistencia",  "buff": "Resiliencia",   "nerf": "Victimismo"},
    "Otura":   {"bits": "1011", "func": "Aprendizaje",  "buff": "Evolución",     "nerf": "Dogma"},
    "Irete":   {"bits": "0010", "func": "Estructura",   "buff": "Orden",         "nerf": "Control Excesivo"},
    "Ose":     {"bits": "1000", "func": "Vínculo",      "buff": "Empatía",       "nerf": "Dependencia"},
    "Ofun":    {"bits": "0001", "func": "Síntesis",     "buff": "Sabiduría",     "nerf": "Disociación"}
}

def alquimia_de_datos():
    print("⚗️ INICIANDO PROCESO DE ALQUIMIA DE DATOS...")
    full_matrix = {}
    padres = list(base_dna.keys())
    count = 0

    # Iteración 16x16 (Padre A + Padre B)
    for padre_a in padres:
        for padre_b in padres:
            # Extracción de Genes
            dna_a = base_dna[padre_a]
            dna_b = base_dna[padre_b]

            # 1. Fusión de Nombre (Ej: Ogbe-Yekun)
            # Nota: Si son iguales (Ej: Ogbe-Ogbe) se suele llamar "Meji", 
            # pero aquí usaremos el compuesto para mantener la lógica.
            nombre_compuesto = f"{padre_a}-{padre_b}"
            if padre_a == padre_b:
                nombre_compuesto = f"{padre_a} Meji (Puro)"

            # 2. Fusión Binaria (4 bits + 4 bits = 8 bits)
            binario_8bit = dna_a["bits"] + dna_b["bits"]

            # 3. Alquimia Conceptual (Buff)
            # Ej: Claridad + Profundidad
            sintesis_buff = f"{dna_a['buff']} guiada por {dna_b['buff']}"
            if padre_a == padre_b:
                sintesis_buff = f"{dna_a['buff']} Absoluta (Potenciada)"

            # 4. Alquimia de Sombra (Nerf)
            # Ej: Inflación + Vacío
            sintesis_nerf = f"{dna_a['nerf']} alimentando a {dna_b['nerf']}"
            if padre_a == padre_b:
                sintesis_nerf = f"{dna_a['nerf']} Total (Colapso)"

            # Creación del Objeto Hijo
            full_matrix[binario_8bit] = {
                "nombre": nombre_compuesto,
                "padres": [padre_a, padre_b],
                "virtud_fusión": sintesis_buff,
                "defecto_fusión": sintesis_nerf,
                "funcion_resultante": f"Intersección entre {dna_a['func']} y {dna_b['func']}"
            }
            count += 1

    # Guardado en JSON
    filename = "dante_full_matrix_256.json"
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(full_matrix, f, indent=4, ensure_ascii=False)

    print(f"✨ ¡ÉXITO! Se han generado {count} Arquetipos Únicos.")
    print(f"📂 Archivo guardado: {filename}")
    print(">> El sistema ahora puede 'imaginar' el significado de cualquier combinación.")

if __name__ == "__main__":
    alquimia_de_datos()