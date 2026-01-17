import time
import sys

# BASE DE DATOS DE LOS 16 MEYIS (4 BITS)
MEYIS = {
    "Ogbe": "1111", "Yekun": "0000", "Iwori": "0110", "Odi": "0111",
    "Irosun": "1011", "Owanrin": "1101", "Obara": "0101", "Okanran": "1000",
    "Ogunda": "0011", "Osa": "1001", "Ika": "1100", "Oturupon": "0010",
    "Otura": "0100", "Irete": "1110", "Ose": "1010", "Ofun": "1111"
}

def validar_meyi(meyi):
    if meyi not in MEYIS:
        raise ValueError(f"Meyi desconocido: {meyi}")
    return MEYIS[meyi]

def escanear_frecuencia(meyi_base, meyi_actual):
    base_binario = validar_meyi(meyi_base)
    actual_binario = validar_meyi(meyi_actual)
    return base_binario + actual_binario

def determinar_zona(binario):
    unos = binario.count('1')
    if unos >= 7: return "EGO (Zeus) - ALTA TENSIÓN"
    if unos <= 2: return "IGNORANCIA (Tezcatlipoca) - BAJA FRECUENCIA"
    if '1111' in binario: return "CREDULIDAD (Dionisio) - RIESGO DE MANIPULACIÓN"
    return "NEUTRAL (Virgilio) - PUNTO DE EQUILIBRIO"

def matrix_print(text, delay=0.02):
    for char in text:
        sys.stdout.write(f"\033[32m{char}\033[0m")
        sys.stdout.flush()
        time.sleep(delay)
    print()

def obtener_raiz_astral(dia, mes, anio):
    # Sincronización con 5 de Marzo 1991 (Piscis)
    if dia == 5 and mes == 3 and anio == 1991:
        return "Yekun" 
    return "Ogbe"

# --- INICIALIZACIÓN DEL MOTOR ---
mi_dia, mi_mes, mi_anio = 5, 3, 1991
base_calculada = obtener_raiz_astral(mi_dia, mi_mes, mi_anio)

matrix_print(">>> SISTEMA DANTE v4.0 ONLINE...")
matrix_print(f">>> RAÍZ ASTRAL DETECTADA: {base_calculada} (Vector 0000)")
time.sleep(1)

# Simulación de entrada de usuario (Estado de ánimo actual)
# Aquí es donde el usuario "vibra"
actual = "Iwori" 

try:
    odu = escanear_frecuencia(base_calculada, actual)
    zona = determinar_zona(odu)

    print("-" * 50)
    matrix_print(f"ODU RESULTANTE: {base_calculada}{actual}")
    matrix_print(f"FIRMA BINARIA: [{odu}]")
    matrix_print(f"ESTADO DE FRECUENCIA: {zona}")
    print("-" * 50)

    if "Dionisio" in zona:
        matrix_print("!!! ALERTA DE MANIPULACIÓN: Activando Juez de Hierro.")

except ValueError as e:
    matrix_print(f"ERROR DE SISTEMA: {e}")