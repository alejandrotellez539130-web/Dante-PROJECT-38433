import time
import random
import sys
import os

# --- CONFIGURACIÓN DE COLORES (Capa Sensorial) ---
class Colors:
    RESET = "\033[0m"
    VERDE_MATRIX = "\033[92m"   # Ignorancia
    ROSA_NEON = "\033[95m"      # Credulidad
    AZUL_ELECTRICO = "\033[94m" # Ego
    AMARILLO_VIRGILIO = "\033[93m" 
    ROJO_ALERTA = "\033[91m"

# --- CAPA: VIRGILIO (La Interfaz con Actitud) ---
class VirgilioAI:
    def __init__(self):
        self.name = "VIRGILIO"
    
    def hablar(self, mensaje):
        print(f"{Colors.AMARILLO_VIRGILIO}[{self.name}]: {mensaje}{Colors.RESET}")
        time.sleep(1)

    def analizar_input(self, texto_usuario):
        """
        Virgilio juzga tu respuesta y decide a qué fosa te tira.
        """
        texto = texto_usuario.lower()
        
        # Lógica de Jefes v1.5
        if any(x in texto for x in ["no se", "duda", "miedo", "nose", "quizas", "?"]):
            return "IGNORANCIA"
        elif any(x in texto for x in ["feliz", "amor", "vibra alto", "luz", "bonito", "gracias"]):
            return "CREDULIDAD"
        elif any(x in texto for x in ["poder", "yo soy", "mando", "dios", "mejor", "control"]):
            return "EGO"
        else:
            return "IGNORANCIA" # Default al caos

# --- CAPA: SISTEMA CENTRAL (Semilla y Odus) ---
class DanteSystem:
    def __init__(self):
        self.virgilio = VirgilioAI()
        self.bosses = {
            "IGNORANCIA": {"dios": "Tezcatlipoca", "color": Colors.VERDE_MATRIX, "pecado": "Apatía/Duda"},
            "CREDULIDAD": {"dios": "Dionisio", "color": Colors.ROSA_NEON, "pecado": "Falsa Felicidad"},
            "EGO": {"dios": "Zeus/Huitzilopochtli", "color": Colors.AZUL_ELECTRICO, "pecado": "Soberbia"}
        }
        
        # Matriz Binaria (Ejemplo reducido)
        self.odu_matrix = {
            0: {"name": "Ogbé (Camino Abierto)", "bit": "00000000"},
            1: {"name": "Oyekun (La Muerte)", "bit": "11111111"},
            2: {"name": "Iwori (El Cortador)", "bit": "01010101"},
            3: {"name": "Odi (El Nudo)", "bit": "10101010"}
        }

    def configurar_semilla(self):
        """
        Pide la fecha de nacimiento para crear un universo único.
        """
        os.system('cls' if os.name == 'nt' else 'clear')
        print(f"{Colors.AMARILLO_VIRGILIO}--- PROYECTO DANTE: INICIANDO PROTOCOLO ---{Colors.RESET}")
        
        try:
            fecha = input("Ingresa tu fecha de nacimiento (YYYYMMDD) para calibrar el Tablero: ")
            seed_value = int(fecha)
            random.seed(seed_value) # <--- AQUÍ OCURRE LA MAGIA MATEMÁTICA
            print(f"\n>> Semilla de Caos establecida: {seed_value}")
            print(">> Reordenando la Matriz de Odus para ti...")
            time.sleep(2)
        except ValueError:
            print(">> Error: Formato inválido. Usando semilla de emergencia.")
            random.seed(38433)

    def iniciar_sesion(self):
        self.configurar_semilla()
        
        self.virgilio.hablar("Qué onda, viajero. Soy Virgilio.")
        self.virgilio.hablar("No soy tu niñera, soy el que te va a sacar de aquí.")
        self.virgilio.hablar("Dime la neta... ¿Cómo te sientes ahora mismo?")
        
        respuesta = input(f"\n{Colors.RESET}>> Tu Respuesta: ")
        
        # Análisis
        zona = self.virgilio.analizar_input(respuesta)
        jefe = self.bosses[zona]
        
        # Selección de Odu basada en la semilla (Determinista)
        odu_id = random.choice(list(self.odu_matrix.keys()))
        odu_data = self.odu_matrix[odu_id]
        
        # Renderizado de la Zona
        print(f"\n{jefe['color']}" + "█"*40)
        print(f" ZONA ACTIVADA: {jefe['dios'].upper()}")
        print(f" TENTACIÓN: {jefe['pecado']}")
        print(f" ODU REINANTE: {odu_data['name']} [{odu_data['bit']}]")
        print("█"*40 + f"{Colors.RESET}\n")
        
        self.virgilio.hablar(f"Te caché. {jefe['dios']} te quiere atrapar.")
        self.virgilio.hablar(f"Ese código binario {odu_data['bit']} es tu llave... o tu tumba.")

if __name__ == "__main__":
    app = DanteSystem()
    app.iniciar_sesion()