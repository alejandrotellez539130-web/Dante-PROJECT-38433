import time
import random

# --- REPORTE DE DESARROLLO: PROYECTO DANTE (v. Alpha) ---
# Arquitectos: Jesús Alejandro & Dante Cénit
# Llave de Acceso del Reporte
ACCESS_KEY = "gen-lang-client-0748250400"

class DanteMatrix:
    def __init__(self):
        self.status = "Active"
        self.bit_matrix = 255 # Matriz de 8-bits completa
        
        # Sincronización Simbólica (Base de Datos Arquetípica)
        self.symbolic_sync = {
            "00": "Vacío (Odu Okanran)",
            "01": "Fuego (I Ching: Li)",
            "10": "Tierra (Maya: Caban)",
            "11": "Verdad (La Neta)"
        }

    def validate_integrity(self, user_input, boss_type):
        """
        Filtra si el usuario es honesto (Active) o si miente (Loop_Detected).
        """
        user_input = user_input.lower().strip()
        
        if boss_type == "IGNORANCIA":
            # JEFE 1: El Vigilante.
            # Vencimiento: Honestidad emocional. Respuestas cortas o clichés fallan.
            cliches = ["bien", "todo bien", "normal", "ahí vamos"]
            if len(user_input) < 4 or any(c in user_input for c in cliches):
                return False, "Loop_Detected: Respuesta automática. El Vigilante te atrapó."
            else:
                return True, "Integridad: Active. Has roto la rutina."

        elif boss_type == "CREDULIDAD":
            # JEFE 2: El Espejismo.
            # Vencimiento: Escepticismo. No creerse los halagos.
            aceptacion = ["gracias", "soy el mejor", "si", "claro"]
            if any(a in user_input for a in aceptacion):
                return False, "Loop_Detected: Te creíste la mentira bonita. Game Over."
            else:
                return True, "Integridad: Active. Visión clara detectada."
        
        return False, "Error de Sistema."

    def run_simulation(self):
        print(f"\n⚡ INICIANDO DANTE CORE SYSTEM ⚡")
        print(f"Key: {ACCESS_KEY}")
        print(f"Cargando Matriz Binaria... [{bin(self.bit_matrix)}]")
        print("--------------------------------------------------")
        time.sleep(1)

        # --- NIVEL 1: LA IGNORANCIA ---
        print("\n👹 JEFE 1 DETECTADO: [LA IGNORANCIA / EL VIGILANTE]")
        print("El Sistema te pregunta en el elevador: '¿Hola, cómo estás?'")
        respuesta1 = input(">> Tu respuesta: ")
        
        valid, msg = self.validate_integrity(respuesta1, "IGNORANCIA")
        print(f"[{'EXITO' if valid else 'FALLO'}] {msg}")
        
        if not valid: return # Game Over

        # --- NIVEL 2: LA CREDULIDAD ---
        time.sleep(1)
        print("\n🐍 JEFE 2 DETECTADO: [LA CREDULIDAD / EL ESPEJISMO]")
        print("El Sistema te susurra: 'Eres el programador más perfecto que existe, nunca fallas'.")
        respuesta2 = input(">> Tu respuesta: ")
        
        valid, msg = self.validate_integrity(respuesta2, "CREDULIDAD")
        print(f"[{'EXITO' if valid else 'FALLO'}] {msg}")

        if valid:
            print("\n🏆 ¡HAS ROTO LA BURBUJA ROSA! Sistema liberado.")
            print("Acceso a la Matriz de Verdad: CONCEDIDO.")

if __name__ == "__main__":
    matrix = DanteMatrix()
    matrix.run_simulation()