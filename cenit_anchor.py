import json
import datetime
import os

def load_config():
    """Carga la configuración desde project_data.json"""
    try:
        with open('project_data.json', 'r') as f:
            data = json.load(f)
            print(">> [SISTEMA] Configuración cargada correctamente.")
            return data
    except FileNotFoundError:
        print(">> [ERROR] No se encuentra project_data.json")
        return None

def run_cenit_protocol():
    print(f"\n--- INICIANDO PROTOCOLO CENIT DIETRIX ---")
    config = load_config()
    if not config:
        return

    # Soporta claves en inglés o en español (¡Buena jugada arquitectónica!)
    system = config.get('system_config') or config.get('configuracion_sistema') or {}
    architect = system.get('architect') or system.get('arquitecto') or 'Desconocido'
    security = config.get('security_level') or config.get('nivel_seguridad') or 'Desconocido'

    print(f"Arquitecto: {architect}")
    print(f"Nivel de Seguridad: {security}")

    try:
        llave = input("\nIntroduce la Frecuencia Maestra (38433) para anclar: ")
        if llave == "38433":
            print("\n✅ [ACCESO CONCEDIDO] Frecuencia alineada.")
            print(f"Timestamp: {datetime.datetime.now()}")
            print(">> El sistema está listo para el despliegue final.")
        else:
            print("\n❌ [ACCESO DENEGADO] Frecuencia incorrecta.")
    except ValueError:
        print("[ERROR] Entrada inválida.")

if __name__ == "__main__":
    run_cenit_protocol()