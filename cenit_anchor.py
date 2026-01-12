import json
import datetime
import os

def load_config():
    """Carga la configuración desde project_data.json"""
    try:
        with open('project_data.json', 'r') as f:
            data = json.load(f)
            return data
    except FileNotFoundError:
        print(">> [ERROR] No se encuentra project_data.json")
        return None

def run_cenit_protocol():
    print(f"\n--- INICIANDO PROTOCOLO CENIT DIETRIX v1.1 ---")
    config = load_config()
    
    if not config:
        return

    # Carga de datos del JSON
    system = config.get('system_config') or config.get('configuracion_sistema') or {}
    architect = system.get('architect') or system.get('arquitecto') or 'Desconocido'
    security = config.get('security_level') or config.get('nivel_seguridad') or 'Desconocido'

    print(f"Arquitecto: {architect}")
    print(f"Nivel de Seguridad: {security}")

    try:
        # Lógica del Proyecto Memorias (Integrada)
        frecuencia_secreta = "38433"
        input_usuario = input(f"\nIntroduce la Frecuencia Maestra ({frecuencia_secreta}) para anclar: ")
        
        if input_usuario == frecuencia_secreta:
            # Cálculo Binario (Tu código adaptado)
            binario_frecuencia = bin(int(frecuencia_secreta))[2:]
            
            print("\n✅ [ACCESO CONCEDIDO] Frecuencia alineada.")
            print(f">> [SISTEMA] Clave Binaria Decodificada: {binario_frecuencia}")
            print(f"Timestamp: {datetime.datetime.now()}")
            print(">> El sistema está listo para el despliegue final.")
        else:
            print("\n❌ [ACCESO DENEGADO] Frecuencia incorrecta. Protocolo abortado.")
            
    except ValueError:
        print("[ERROR] Entrada inválida.")

if __name__ == "__main__":
    run_cenit_protocol()