import json
import time

def ejecutar_bibliomancia(binario_final):
    with open('nodos_bibliomancia.json', 'r', encoding='utf-8') as f:
        libreria = json.load(f)
    
    # Dividimos el Odu (8 bits) en dos Nodos (4 bits cada uno)
    nodo_base = binario_final[:4]
    nodo_actual = binario_final[4:]
    
    res_base = libreria[nodo_base]
    res_actual = libreria[nodo_actual]
    
    print("\n" + "="*50)
    print(">>> SINCRONIZACIÓN LITERARIA COMPLETADA")
    print(f"ORIGEN ({res_base['autor']}): \"{res_base['frase']}\"")
    print(f"ESTADO ACTUAL ({res_actual['autor']}): \"{res_actual['frase']}\"")
    print("="*50 + "\n")

# Ejemplo: Si eres Yekun (0000) y estás en Iwori (0110)
ejecutar_bibliomancia("00000110")