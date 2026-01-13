import json
from datetime import datetime

# --- CONFIGURACIÓN CENIT ---
# Frecuencia base del proyecto Fantekey2026
FRECUENCIA_SECRETA = 38433
BINARIO_FRECUENCIA = bin(FRECUENCIA_SECRETA)[2:] # 1001011000100001
REPO_NAME = "Fantekey2026"

def validar_frecuencia(input_usuario):
    """
    Verifica si el usuario tiene la llave maestra (38433).
    """
    try:
        val = int(input_usuario)
        if val == FRECUENCIA_SECRETA:
            return True, f"Acceso Concedido. Frecuencia alineada: {BINARIO_FRECUENCIA}"
        else:
            return False, "Error de Frecuencia: Acceso Denegado."
    except ValueError:
        return False, "Error: Entrada no numérica."

def generar_log_cenit(status="Standby"):
    """
    Genera el log de acceso para el repositorio.
    Program ID 193 = Odu Irosun Okanran (Fuego y Vacío).
    """
    timestamp = datetime.now().isoformat()
    return {
        "cenit_status": status,
        "last_check": timestamp,
        "repo": REPO_NAME,
        "integrity_check": True,
        "program_id": 193, 
        "message": "Protocolo de Anclaje Activo"
    }

# --- EJECUCIÓN DEL ANCLAJE ---
def run_cenit_protocol():
    print(f"--- INICIANDO PROTOCOLO CENIT EN {REPO_NAME} ---")
    
    # 1. Verificación de Llave
    try:
        llave = input("Introduce la Frecuencia Maestra para anclar: ")
        acceso, mensaje = validar_frecuencia(llave)
        print(mensaje)
        
        if acceso:
            # 2. Generación del Log
            log = generar_log_cenit(status="Active")
            print("\n[SUCCESS] Anclaje exitoso. Generando reporte JSON...")
            print(json.dumps(log, indent=4))
            print("\n--- SISTEMA LISTO PARA GITHUB ---")
        else:
            print("\n[FAILURE] No se pudo anclar.")
            
    except ValueError:
        print("\n[ERROR] Entrada inválida.")

if __name__ == "__main__":
    run_cenit_protocol()