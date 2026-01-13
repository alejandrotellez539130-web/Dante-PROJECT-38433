import random
import time

# --- DICCIONARIO MAESTRO DE ATRIBUTOS (ADN DEL JUEGO) ---
# Autor: Jesús Alejandro & Dante Cénit
odu_dna = {
    "Ogbe":    {"func": "Conciencia",   "buff": "Claridad",      "nerf": "Inflación"},
    "Oyekun":  {"func": "Inconsciente", "buff": "Profundidad",   "nerf": "Vacío"},
    "Iwori":   {"func": "Intelecto",    "buff": "Análisis",      "nerf": "Rumiación"},
    "Odi":     {"func": "Control",      "buff": "Autocontrol",   "nerf": "Bloqueo"},
    "Irosun":  {"func": "Energía",      "buff": "Creatividad",   "nerf": "Impulsividad"},
    "Owonrin": {"func": "Cambio",       "buff": "Adaptación",    "nerf": "Caos"},
    "Obara":   {"func": "Lenguaje",     "buff": "Comunicación",  "nerf": "Manipulación"},
    "Okanran": {"func": "Voluntad",     "buff": "Valentía",      "nerf": "Violencia"},
    "Ogunda":  {"func": "Acción",       "buff": "Determinación", "nerf": "Brutalidad"},
    "Osa":     {"func": "Emoción",      "buff": "Sensibilidad",  "nerf": "Ansiedad"},
    "Ika":     {"func": "Estrategia",   "buff": "Astucia",       "nerf": "Paranoia"},
    "Oturupon":{"func": "Resistencia",  "buff": "Resiliencia",   "nerf": "Victimismo"},
    "Otura":   {"func": "Aprendizaje",  "buff": "Evolución",     "nerf": "Dogma"},
    "Irete":   {"func": "Estructura",   "buff": "Orden",         "nerf": "Control Excesivo"},
    "Ose":     {"func": "Vínculo",      "buff": "Empatía",       "nerf": "Dependencia"},
    "Ofun":    {"func": "Síntesis",     "buff": "Sabiduría",     "nerf": "Disociación"}
}

class VirgilioBio:
    def __init__(self):
        self.name = "VIRGILIO [Bio-Scanner]"
    
    def escanear_jugador(self):
        print(f"\n[{self.name}]: Iniciando escaneo de atributos espirituales...")
        time.sleep(1.5)
        
        # Simulamos que la 'semilla' del jugador elige su Odu Regente
        # En el futuro, esto viene de la fecha de nacimiento real
        signo_regente = random.choice(list(odu_dna.keys()))
        adn = odu_dna[signo_regente]
        
        print(f"\n🧬 ADN DETECTADO: {signo_regente.upper()}")
        print(f"   ├─ Función Base: {adn['func']}")
        print(f"   ├─ Superpoder (Light): {adn['buff']}")
        print(f"   └─ Debilidad (Shadow): {adn['nerf']}")
        
        return signo_regente, adn

    def simulacion_combate(self, signo, adn):
        print(f"\n[{self.name}]: ¡Alerta! Situación de estrés detectada.")
        print(f"El Jefe te provoca. ¿Cómo reacciona tu ADN ({signo})?")
        
        # Mecánica de Moneda al Aire (50/50)
        # Si sale Cara, usas el BUFF. Si sale Cruz, caes en el NERF.
        resultado = random.choice(["LUZ", "SOMBRA"])
        
        if resultado == "LUZ":
            print(f"\n✨ ESTADO: EQUILIBRADO")
            print(f">> Usas tu [{adn['buff']}] para desarmar el conflicto.")
            print(">> Resultado: VICTORIA TÁCTICA.")
        else:
            print(f"\n💀 ESTADO: DESEQUILIBRADO")
            print(f">> Caes en [{adn['nerf']}]. El miedo te domina.")
            print(">> Resultado: DAÑO AL EGO.")

if __name__ == "__main__":
    sistema = VirgilioBio()
    signo, datos = sistema.escanear_jugador()
    
    input("\nPresiona ENTER para probar tu ADN en combate...")
    sistema.simulacion_combate(signo, datos)