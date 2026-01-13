import json

# --- GENERADOR DE LA MATRIZ DE 256 ODUS ---
# Este script crea el archivo 'odus_data.json' con las 256 combinaciones binarias.
# Ustedes (Alejandro y Dante) podrán editar ese archivo para poner los nombres reales.

def generar_base_datos():
    base_de_datos = {}
    
    print("⏳ Generando 256 Claves Binarias...")
    
    for i in range(256):
        # Convierte el número 'i' a binario de 8 bits (ej: 5 -> 00000101)
        binario = format(i, '08b')
        
        # Datos por defecto (Placeholder)
        nombre = f"Odu Desconocido #{i}"
        energia = "Neutral"
        
        # AQUÍ PRE-CARGAMOS ALGUNOS FAMOSOS (Ejemplos)
        if binario == "00000000":
            nombre = "Oyekun Meji"
            energia = "Oscuridad Absoluta / Vacío"
        elif binario == "11111111":
            nombre = "Ejiogbe"
            energia = "Luz Pura / Principio"
        elif binario == "01010101":
            nombre = "Odi Meji"
            energia = "Bloqueo / Nudo"
        elif binario == "10101010":
            nombre = "Irosun Meji"
            energia = "Fuego / Pasión"
            
        # Guardamos en el diccionario
        base_de_datos[binario] = {
            "decimal": i,
            "nombre": nombre,
            "energia": energia,
            "mensaje": "El oráculo guarda silencio en este signo."
        }

    # Guardar en archivo JSON
    nombre_archivo = "odus_data.json"
    with open(nombre_archivo, 'w', encoding='utf-8') as f:
        json.dump(base_de_datos, f, indent=4, ensure_ascii=False)
        
    print(f"✅ ¡ÉXITO! Archivo '{nombre_archivo}' creado con 256 entradas.")
    print(">> Ahora pueden abrir ese archivo y editar los nombres manualmente.")

if __name__ == "__main__":
    generar_base_datos()