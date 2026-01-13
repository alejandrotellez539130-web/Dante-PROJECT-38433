import time
import random
import sys
import os

# --- CONFIGURACIÓN DE COLORES (Capa Sensorial) ---
# Códigos ANSI para pintar la terminal real
class Colors:
    RESET = "\033[0m"
    VERDE_MATRIX = "\033[92m" # Ignorancia
    ROSA_NEON = "\033[95m"    # Credulidad
    AZUL_ELECTRICO = "\033[94m" # Ego
    AMARILLO_LUZ = "\033[93m" # Odu/Virgilio
    ROJO_ALERTA = "\033[91m"

# --- CAPA 4: EL GUÍA (INTEGRACIÓN IA) ---
class VirgilioAI:
    def __init__(self):
        self.name = "Virgilio v1.0"
        # AQUÍ IRÍA TU API KEY EN EL FUTURO
        # self.api_key = "TU_CLAVE_DE_GOOGLE_O_OPENAI"

    def analizar_alma(self, texto_usuario):
        """
        Simula el análisis de la IA. 
        En el futuro, aquí se hace la llamada a la API real.
        """
        texto = texto_usuario.lower()
        
        # Lógica de Detección de Patrones (NLP Básico)
        if any(x in texto for x in ["no se", "duda", "miedo", "oscuridad", "caos"]):
            return "IGNORANCIA", "Veo confusión en tu alma. Tezcatlipoca te espera."
        
        elif any(x in texto for x in ["feliz", "amor", "bonito", "perfecto", "genial"]):
            return "CREDULIDAD", "Sientes un falso éxtasis. Dionisio te ofrece vino."
        
        elif any(x in texto for x in ["yo soy", "poder", "dios", "mando", "mejor", "mortal"]):
            return "EGO", "Tu espíritu brilla con soberbia. Zeus te desafía."
        
        else:
            return "IGNORANCIA", "Tu silencio es confuso. Empezaremos por el principio."

# --- CAPA 1 & 2: EL MOTOR (Binario y Jefes) ---
class DanteSystem:
    def __init__(self):
        self.virgilio = VirgilioAI()
        
        # Base de Datos de Odus (Binario 8-bits)
        self.odu_matrix = {
            "00000000": {"name": "Oyekun (Vacío Absoluto)", "energia": "Oscuridad"},
            "11111111": {"name": "Ejiogbe (Luz Pura)", "energia": "Verdad"},
            "01010101": {"name": "Odi (El Nudo)", "energia": "Bloqueo"},
            "10101010": {"name": "Irosun (El Fuego)", "energia": "Pasión"}
        }
        
        # Configuración de Jefes
        self.bosses = {
            "IGNORANCIA": {"dios": "Tezcatlipoca", "color": Colors.VERDE_MATRIX, "hz": "Ruido Blanco"},
            "CREDULIDAD": {"dios": "Dionisio", "color": Colors.ROSA_NEON, "hz": "432Hz (Dulce)"},
            "EGO": {"dios": "Zeus", "color": Colors.AZUL_ELECTRICO, "hz": "528Hz (Poder)"}
        }

    def efecto_escribir(self, texto, velocidad=0.03):
        for char in texto:
            sys.stdout.write(char)
            sys.stdout.flush()
            time.sleep(velocidad)
        print()

    def generar_odu(self):
        # Genera un byte aleatorio y busca si tiene significado
        byte = "".join([str(random.randint(0,1)) for _ in range(8)])
        # Si no está en la base, usamos uno genérico
        info = self.odu_matrix.get(byte, {"name": f"Odu-{random.randint(1,256)}", "energia": "Latente"})
        return byte, info

    def iniciar_secuencia(self):
        os.system('cls' if os.name == 'nt' else 'clear')
        print(f"{Colors.AMARILLO_LUZ}⚡ CONECTANDO CON LA MATRIZ DE MEMORIA... ⚡{Colors.RESET}")
        time.sleep(1)
        
        # 1. Entrada del Usuario
        print("\n[SISTEMA]: Describe tu estado actual. ¿Qué buscas aquí?")
        respuesta = input(f"{Colors.AMARILLO_LUZ}>> {Colors.RESET}")

        # 2. Virgilio Analiza (La IA decide a dónde vas)
        print(f"\n[{self.virgilio.name}]: Analizando patrones de voz...")
        time.sleep(1.5)
        zona_destino, mensaje_guia = self.virgilio.analizar_alma(respuesta)

        # 3. Cargar Datos de la Zona
        jefe = self.bosses[zona_destino]
        color_zona = jefe["color"]
        
        # 4. Renderizado Sensorial (Visual y Datos)
        byte_code, odu_data = self.generar_odu()
        
        print(f"\n{color_zona}" + "="*50)
        print(f"⚠️  DESTINO TRAZADO: {zona_destino}")
        print(f"👁️  DEIDAD REINANTE: {jefe['dios']}")
        print(f"🔊  FRECUENCIA AUDIO: {jefe['hz']}")
        print("="*50 + f"{Colors.RESET}")

        print(f"\n{Colors.AMARILLO_LUZ}[VIRGILIO]: {mensaje_guia}{Colors.RESET}")
        
        print(f"\n💾 DATOS DEL SISTEMA:")
        print(f"   >> Código Binario Generado: {byte_code}")
        print(f"   >> Odu Ifá Correlacionado: {odu_data['name']}")
        print(f"   >> Tipo de Energía: {odu_data['energia']}")

        # 5. El Reto Final
        print(f"\n{color_zona}[{jefe['dios']}]: ¿Crees que puedes pasar mi prueba con ese código binario?{Colors.RESET}")
        input("\n(Presiona ENTER para iniciar el combate...)")
        # Aquí conectaría con el tablero Pai Sho en la siguiente versión

if __name__ == "__main__":
    app = DanteSystem()
    app.iniciar_secuencia()