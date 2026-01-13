import time
import os

# --- CONFIGURACIÓN PAI SHO: PROYECTO DANTE ---
# Concepto: Tablero Hexagonal
# Objetivo: Llegar al Centro (Burbuja Rosa)
# Enemigo: 9 Fichas de Pecado (Bloqueo)

class PaiShoEngine:
    def __init__(self):
        self.posicion_jugador = 0 # 0=Perímetro, 1=Intermedio, 2=Núcleo, 3=VICTORIA
        self.pecados_acumulados = 0
        self.max_pecados = 3 # Si acumulas 3, pierdes (9 fichas es muy largo para demo)
        self.estado = "ACTIVO"

    def limpiar_pantalla(self):
        os.system('cls' if os.name == 'nt' else 'clear')

    def dibujar_tablero(self):
        """
        Renderiza el tablero hexagonal en ASCII.
        Muestra dónde está el jugador (♟️) vs la Burbuja (🔮).
        """
        self.limpiar_pantalla()
        p = self.posicion_jugador
        
        # Mapa visual del progreso
        zonas = [
            "[PERÍMETRO - ZONA DE CONFORT]", 
            "[ZONA INTERMEDIA - DUDA]", 
            "[NÚCLEO - LA VERDAD]", 
            "✨ LIBERACIÓN ✨"
        ]
        
        print("\n🏰 --- TABLERO PAI SHO: DANTE PROTOCOL --- 🏰")
        print(f"Pecados (Errores): {'💀 ' * self.pecados_acumulados}")
        print("-" * 40)
        
        # Lógica visual de avance
        print(f"      / \\     ")
        print(f"    /     \\   ")
        print(f"   |   {'🔮' if p < 3 else '💥'}   |  <-- CENTRO (Burbuja Rosa)")
        print(f"   | {'♟️' if p == 2 else ' . '} |  ")
        print(f"  / \\ {'♟️' if p == 1 else ' . '} / \\ ")
        print(f" /   \\ /   \\ ")
        print(f"|  {'♟️' if p == 0 else 'START'}  |     | ")
        print(f" \\   / \\   / ")
        print(f"  \\ /   \\ /  ")
        print("-" * 40)
        print(f"UBICACIÓN ACTUAL: {zonas[p]}\n")

    def validar_respuesta(self, input_usuario, jefe):
        input_usuario = input_usuario.lower().strip()
        
        if jefe == "IGNORANCIA":
            # Prohibido respuestas cortas o clichés
            cliches = ["bien", "mal", "todo bien", "normal", "ahi vamos"]
            if len(input_usuario) < 5 or any(c in input_usuario for c in cliches):
                return False, ">> [BLOQUEO] Respuesta automática detectada. Ficha de Pecado colocada."
            return True, ">> [AVANCE] Honestidad detectada. Rompiste la barrera."

        elif jefe == "CREDULIDAD":
            # Prohibido aceptar halagos
            aceptacion = ["gracias", "si", "soy yo", "claro"]
            if any(a in input_usuario for a in aceptacion):
                return False, ">> [BLOQUEO] Te creíste el halago. El Ego te bloquea el paso."
            return True, ">> [AVANCE] Escepticismo activo. No caíste en la trampa."
            
        elif jefe == "BURBUJA":
            # El golpe final: Definir tu propósito
            if len(input_usuario) > 10:
                return True, ">> [IMPACTO CRÍTICO] La Burbuja Rosa ha estallado."
            return False, ">> [FALLO] Tu golpe fue muy débil."

        return False, "Error."

    def jugar_turno(self, jefe, pregunta):
        self.dibujar_tablero()
        print(f"👹 ENEMIGO: {jefe}")
        print(f"❓ RETO: {pregunta}")
        respuesta = input("🗣️ TU RESPUESTA (La Neta): ")
        
        exito, mensaje = self.validar_respuesta(respuesta, jefe)
        print(mensaje)
        time.sleep(2)
        
        if exito:
            self.posicion_jugador += 1
        else:
            self.pecados_acumulados += 1
            if self.pecados_acumulados >= self.max_pecados:
                print("\n🚫 GAME OVER. Has sido rodeado por tus propios Pecados.")
                self.estado = "PERDIDO"
                return False
        return True

    def iniciar_partida(self):
        # TURNO 1
        if not self.jugar_turno("LA IGNORANCIA", "¿Cómo estás realmente hoy?"): return

        # TURNO 2
        if not self.jugar_turno("LA CREDULIDAD", "Eres el mejor programador de la historia, ¿verdad?"): return

        # TURNO 3 (FINAL)
        if not self.jugar_turno("BURBUJA ROSA", "Dime... ¿Por qué haces todo esto? (Define tu Verdad)"): return
        
        # VICTORIA
        self.dibujar_tablero()
        print("\n🏆 ¡VICTORIA ABSOLUTA! Has llegado al centro del Pai Sho.")

if __name__ == "__main__":
    juego = PaiShoEngine()
    juego.iniciar_partida()