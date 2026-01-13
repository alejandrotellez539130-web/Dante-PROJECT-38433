import time
import random
import sys
import os
import json

# --- CONFIGURACIÓN DE COLORES ---
class Colors:
    RESET = "\033[0m"
    VERDE = "\033[92m"   # Ignorancia
    ROSA = "\033[95m"    # Credulidad
    AZUL = "\033[94m"    # Ego
    AMARILLO = "\033[93m" # Virgilio
    ROJO = "\033[91m"

# --- EL CEREBRO (Base de Datos) ---
MATRIZ_FILE = "dante_full_matrix_256.json"

def cargar_matriz():
    """Carga los 256 Odus generados por la Alquimia."""
    if not os.path.exists(MATRIZ_FILE):
        return None
    with open(MATRIZ_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

# --- LA INTERFAZ (Virgilio) ---
class VirgilioAI:
    def __init__(self):
        self.name = "VIRGILIO"
    
    def hablar(self, mensaje, color=Colors.AMARILLO):
        print(f"{color}[{self.name}]: {mensaje}{Colors.RESET}")
        time.sleep(1.5)

    def analizar_input(self, texto):
        t = texto.lower()
        if any(x in t for x in ["no se", "duda", "miedo", "nose", "?"]): return "IGNORANCIA"
        if any(x in t for x in ["feliz", "amor", "luz", "bien", "gracias"]): return "CREDULIDAD"
        if any(x in t for x in ["poder", "yo soy", "dios", "mando", "control"]): return "EGO"
        return "IGNORANCIA"

# --- MOTOR PRINCIPAL ---
class DanteSystem:
    def __init__(self):
        self.virgilio = VirgilioAI()
        self.db = cargar_matriz()
        self.bosses = {
            "IGNORANCIA": {"dios": "Tezcatlipoca", "color": Colors.VERDE, "pecado": "Apatía"},
            "CREDULIDAD": {"dios": "Dionisio", "color": Colors.ROSA, "pecado": "Falsa Felicidad"},
            "EGO": {"dios": "Zeus", "color": Colors.AZUL, "pecado": "Soberbia"}
        }

    def obtener_odu_por_semilla(self, semilla):
        """Usa la fecha de nacimiento para encontrar TU signo exacto entre los 256."""
        if not self.db: return None
        
        # Convertimos la DB a una lista para poder elegir por índice
        llaves = list(self.db.keys())
        
        # La magia matemática: Tu fecha decide el índice
        random.seed(semilla)
        indice = random.randint(0, 255)
        odu_key = llaves[indice]
        
        return self.db[odu_key], odu_key

    def iniciar(self):
        os.system('cls' if os.name == 'nt' else 'clear')
        self.virgilio.hablar("Sistema Dante v2.0 - Conexión establecida.")
        
        if not self.db:
            self.virgilio.hablar("⚠️ ERROR CRÍTICO: No encuentro 'dante_full_matrix_256.json'.", Colors.ROJO)
            return

        # 1. Identificación
        fecha = input(f"{Colors.RESET}>> Ingresa tu Fecha de Nacimiento (YYYYMMDD) para escanear tu Alma: ")
        
        try:
            semilla = int(fecha)
            datos_odu, binario = self.obtener_odu_por_semilla(semilla)
            
            print(f"\n{Colors.AMARILLO}--- ANÁLISIS DE ADN ESPIRITUAL ---{Colors.RESET}")
            print(f"🆔 Odu Asignado: {datos_odu['nombre']}")
            print(f"🧬 Código Binario: {binario}")
            print(f"✨ Virtud (Tu Arma): {datos_odu['virtud_fusión']}")
            print(f"💀 Sombra (Tu Debilidad): {datos_odu['defecto_fusión']}")
            print(f"🔧 Función: {datos_odu['funcion_resultante']}")
            print("-" * 50)
            
            self.virgilio.hablar(f"Interesante... naciste bajo el signo de {datos_odu['nombre']}.")
            self.virgilio.hablar(f"Tu mayor peligro es caer en: '{datos_odu['defecto_fusión']}'.")
            
        except ValueError:
            self.virgilio.hablar("Fecha inválida. Reinicia el sistema.", Colors.ROJO)
            return

        # 2. El Reto
        self.virgilio.hablar("\nAhora dime... sabiendo esto, ¿cómo te sientes hoy?")
        resp = input(f"{Colors.RESET}>> ")
        
        zona = self.virgilio.analizar_input(resp)
        jefe = self.bosses[zona]
        
        print(f"\n{jefe['color']}!!! ALERTA DE SISTEMA: {jefe['dios']} TE HA CAPTURADO !!!{Colors.RESET}")
        self.virgilio.hablar(f"Caíste en la {jefe['pecado']}. Usa tu virtud ({datos_odu['virtud_fusión']}) para escapar.", Colors.ROJO)

if __name__ == "__main__":
    app = DanteSystem()
    app.iniciar()