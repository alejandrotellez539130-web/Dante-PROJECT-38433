import time
import sys

# NODOS DE IDENTIDAD (Mapeo de Frecuencia de 4 bits)
# Nombres universales para que nadie sospeche la raíz tradicional.
NODOS = {
    "EXPANSION_TOTAL": "1111",   # Ogbe
    "VACIO_ABSOLUTO": "0000",    # Yekun
    "LOGICA_PARADOJICA": "0110", # Iwori
    "UMBRAL_PUERTA": "0111",     # Odi
    "ESTRUCTURA_LIMITANTE": "1011", # Irosun
    "FLUJO_CAOTICO": "1101",     # Owanrin
    "IDENTIDAD_PROPIA": "0101",  # Obara
    "PUNTO_DE_QUIEBRE": "1000",  # Okanran
    "ACCION_DIRECTA": "0011",    # Ogunda
    "MOVIMIENTO_OSCILANTE": "1001", # Osa
    "RESTRICCION_SISTEMICA": "1100", # Ika
    "FUNDAMENTO_SOLIDO": "0010", # Oturupon
    "VISION_CLARA": "0100",      # Otura
    "CONSOLIDACION": "1110",     # Irete
    "DINAMICA_EMOCIONAL": "1010", # Ose
    "PERFECCION_SISTEMICA": "1111" # Ofun
}

def matrix_print(text, delay=0.02):
    """Efecto de terminal Matrix 90s"""
    for char in text:
        sys.stdout.write(f"\033[32m{char}\033[0m")
        sys.stdout.flush()
        time.sleep(delay)
    print()

def escanear_vector(origen, actual):
    """Genera la Firma Cuántica de 8 bits"""
    return NODOS[origen] + NODOS[actual]

def clasificar_frecuencia(firma):
    """Analiza la zona de operación del usuario"""
    bits_activos = firma.count('1')
    if bits_activos >= 7: return "ZONA ZEUS (Saturación de Ego)"
    if bits_activos <= 2: return "ZONA TEZCATLIPOCA (Vacío de Información)"
    if '1111' in firma: return "ZONA DIONISIO (Vulnerabilidad Crítica)"
    return "ZONA VIRGILIO (Punto de Equilibrio)"

# --- INICIALIZACIÓN DEL SISTEMA ---
# Sincronización con el 05/03/1991
# Tu raíz por defecto es el Abismo/Vacío (Yekun)
MI_ORIGEN = "VACIO_ABSOLUTO" 

matrix_print(">>> ACCEDIENDO AL SERVIDOR DANTE v4.0...")
time.sleep(1)
matrix_print(f">>> HUELLA DETECTADA: {MI_ORIGEN} [0000]")

# Simulación de estado actual: Supongamos que hoy te sientes analítico
MI_ESTADO_ACTUAL = "LOGICA_PARADOJICA" 

try:
    firma_q = escanear_vector(MI_ORIGEN, MI_ESTADO_ACTUAL)
    zona = clasificar_frecuencia(firma_q)

    print("\n" + "="*50)
    matrix_print(f"FIRMA CUANTICA: [{firma_q}]")
    matrix_print(f"ESTADO DE RED: {zona}")
    print("="*50 + "\n")

    if "DIONISIO" in zona:
        matrix_print("!!! ALERTA: Detectada manipulación externa en el puerto emocional.")
    elif "VIRGILIO" in zona:
        matrix_print(">>> Sincronía perfecta. El usuario tiene el control total.")

except Exception as e:
    print(f"ERROR EN EL NODO: {e}")