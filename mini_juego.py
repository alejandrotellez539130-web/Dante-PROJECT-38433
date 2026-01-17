import random

def reto_bibliotecaria(nodo_binario):
    with open('nodos_bibliomancia.json', 'r', encoding='utf-8') as f:
        libreria = json.load(f)
    
    data = libreria[nodo_binario]
    frase = data['frase']
    autor_correcto = data['autor']
    
    print("\n" + "!"*50)
    matrix_print(">>> ¡ALERTA! ACCESO RESTRINGIDO POR EL JUEZ DE HIERRO")
    matrix_print(f"FRASE RECIBIDA: \"{frase}\"")
    print("!"*50)
    
    intento = input("\033[32mIDENTIFIQUE AL ARQUITECTO DE ESTA IDEA (AUTOR): \033[0m")
    
    if intento.lower() in autor_correcto.lower():
        matrix_print(f">>> IDENTIDAD CONFIRMADA. {autor_correcto} te otorga el paso.")
        return True
    else:
        matrix_print(">>> ERROR. FRECUENCIA INCOMPATIBLE. Vuelve cuando hayas leído más.")
        return False