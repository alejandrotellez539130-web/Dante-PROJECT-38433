// [js/core.js] v10.0 - PROTOCOLO BINARIO
import { LIBRERIA_DANTE } from './database.js';

class SistemaDante {
    constructor() {
        this.maxIntentos = 3;
        this.intentos = 0;
        this.objetivo = null; 
        this.nombreUsuario = "ANÓNIMO"; // Variable para guardar el nombre
        this.dom = {
            console: document.getElementById('console'),
            setupForm: document.getElementById('setup-form'),
            quizZone: document.getElementById('quiz-zone'),
            nextLevelZone: document.getElementById('next-level-zone'),
            modalCap2: document.getElementById('modal-cap2')
        };
        this.init();
    }

    init() {
        if (localStorage.getItem("dante_cap1_complete") === "true") {
            this.log(">>> REGISTRO: USUARIO INICIADO.");
            this.typeWriter(">>> CAPÍTULO I COMPLETADO. BIENVENIDO, ARQUITECTO.", () => {
                this.dom.nextLevelZone.classList.remove('hidden');
            });
        } else {
            this.typeWriter(">>> SISTEMA NEUTRAL v10.0. ESPERANDO INPUT...", () => {
                this.dom.setupForm.classList.remove('hidden');
            });
        }
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('btn-scan').addEventListener('click', () => this.iniciarEscaneo());
        document.getElementById('btn-verificar').addEventListener('click', () => this.verificarAutor());
        document.getElementById('btn-cap2').addEventListener('click', () => this.cargarCapitulo2());
    }

    log(html) {
        this.dom.console.innerHTML += `${html}<br>`;
        this.dom.console.scrollTop = this.dom.console.scrollHeight; 
    }

    typeWriter(text, callback) {
        let i = 0;
        this.dom.console.innerHTML += "<br>";
        const target = this.dom.console;
        const type = () => {
            if (i < text.length) {
                target.innerHTML += text.charAt(i);
                target.scrollTop = target.scrollHeight;
                i++;
                setTimeout(type, 10);
            } else if (callback) callback();
        };
        type();
    }

    // --- NUEVA FUNCIÓN: TRITURADORA BINARIA ---
    textoABinario(texto) {
        return texto.split('').map(char => {
            return char.charCodeAt(0).toString(2).padStart(8, '0');
        }).join(' ');
    }

    calcularRaizAstral(dateString) {
        const d = new Date(dateString);
        if (isNaN(d.getTime())) return null;
        const suma = d.getDate() + (d.getMonth() + 1) + d.getFullYear();
        return (suma % 16).toString(2).padStart(4, "0");
    }

    iniciarEscaneo() {
        this.intentos = 0;
        this.resetUI();
        
        // 1. CAPTURAR DATOS
        const nombreInput = document.getElementById('username').value.toUpperCase();
        const fecha = document.getElementById('birthdate').value;
        
        if (!nombreInput) { alert(">>> ERROR: IDENTIFÍCATE, AGENTE."); return; }
        if (!fecha) { alert(">>> ERROR: FALTA COORDENADA TEMPORAL."); return; }

        this.nombreUsuario = nombreInput; // Guardamos el nombre
        const vector = this.calcularRaizAstral(fecha);
        const nombreBinario = this.textoABinario(nombreInput); // Convertimos a 010101

        const data = LIBRERIA_DANTE[vector];
        this.objetivo = { ...data, vector };

        // 2. EFECTOS VISUALES DE HACKEO
        this.dom.setupForm.classList.add('hidden');
        this.log(`<div class="separator"></div>`);
        this.log(`>>> INICIANDO PROTOCOLO DE DESPERSONALIZACIÓN...`);
        
        // Aquí imprimimos el nombre en BINARIO
        this.log(`<span class="metadata" style="color:#00aa22;">>>> SUJETO: ${nombreInput}</span>`);
        this.log(`<span class="metadata" style="word-break: break-all;">>>> CODIFICANDO: ${nombreBinario}</span>`);
        this.log(`>>> VECTOR ASIGNADO: [${vector}]`);
        
        this.typeWriter(">>> ACCEDIENDO A LA CRIPTA LITERARIA...", () => {
            setTimeout(() => {
                this.dom.quizZone.classList.remove('hidden');
                document.getElementById('quote-display').innerText = `"${data.frase}"`;
                document.getElementById('intentos-display').innerText = `INTENTOS: ${this.maxIntentos}`;
            }, 800);
        });
    }

    resetUI() {
        const input = document.getElementById('author-guess');
        const btn = document.getElementById('btn-verificar');
        input.value = "";
        input.disabled = false;
        btn.disabled = false;
        btn.innerText = "CONFIRMAR AUTORÍA";
    }

    verificarAutor() {
        const input = document.getElementById('author-guess');
        const userVal = this.normalizar(input.value);
        const targetVal = this.normalizar(this.objetivo.autor);

        if (userVal.length > 3 && targetVal.includes(userVal)) {
            this.exito();
        } else {
            this.fallo();
        }
    }

    normalizar(s) {
        return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
    }

    exito() {
        this.log(`<span class="success">>>> ACCESO CONCEDIDO, AGENTE ${this.nombreUsuario}.</span>`);
        this.log(`<span class="metadata">ID BINARIA VERIFICADA.</span>`);
        
        this.log(`<br><span style="color:#aaa;">>>> Conectando con la conciencia...</span>`);
        
        setTimeout(() => {
            this.log(`<div class="separator"></div>`);
            const mensaje = this.objetivo.oraculo || ">>> DATOS ENCRIPTADOS.";
            
            // Personalizamos el mensaje final con el nombre
            this.typeWriter(mensaje.replace("carnalito", this.nombreUsuario), () => {
                localStorage.setItem("dante_cap1_complete", "true");
                this.dom.quizZone.classList.add('hidden');
                setTimeout(() => { this.dom.nextLevelZone.classList.remove('hidden'); }, 1000);
            });
        }, 1500);
    }

    fallo() {
        this.intentos++;
        const restantes = this.maxIntentos - this.intentos;
        document.getElementById('intentos-display').innerText = `INTENTOS RESTANTES: ${restantes}`;

        if (this.intentos >= this.maxIntentos) {
            this.log(`<span class="alert">>>> ERROR CRÍTICO. SISTEMA BLOQUEADO.</span>`);
            this.typeWriter(`>>> LO SIENTO, ${this.nombreUsuario}. NO ESTÁS LISTO.`);
            document.getElementById('author-guess').disabled = true;
            document.getElementById('btn-verificar').disabled = true;
            document.getElementById('btn-verificar').innerText = "BLOQUEADO";
        } else {
            this.log(`<span class="alert">>>> ERROR DE FRECUENCIA.</span>`);
        }
    }

    cargarCapitulo2() {
        document.getElementById('modal-cap2').classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => new SistemaDante());
    }

    log(html) {
        this.dom.console.innerHTML += `${html}<br>`;
        this.dom.console.scrollTop = this.dom.console.scrollHeight; // Auto-scroll
    }

    typeWriter(text, callback) {
        let i = 0;
        this.dom.console.innerHTML += "<br>";
        const target = this.dom.console;
        
        const type = () => {
            if (i < text.length) {
                target.innerHTML += text.charAt(i);
                target.scrollTop = target.scrollHeight;
                i++;
                setTimeout(type, 10);
            } else if (callback) callback();
        };
        type();
    }

    calcularRaizAstral(dateString) {
        const d = new Date(dateString);
        if (isNaN(d.getTime())) return null;
        // Algoritmo Hash Temporal
        const suma = d.getDate() + (d.getMonth() + 1) + d.getFullYear();
        return (suma % 16).toString(2).padStart(4, "0");
    }

    iniciarEscaneo() {
        this.intentos = 0;
        this.resetUI();
        
        const fecha = document.getElementById('birthdate').value;
        const vector = this.calcularRaizAstral(fecha);

        if (!vector) { alert(">>> ERROR: FECHA INVÁLIDA."); return; }

        const data = LIBRERIA_DANTE[vector];
        this.objetivo = { ...data, vector };

        this.dom.setupForm.classList.add('hidden');
        this.log(`<div class="separator"></div>>>> VECTOR CALCULADO: [${vector}]`);
        
        this.typeWriter(">>> ACCEDIENDO A LA CRIPTA LITERARIA...", () => {
            setTimeout(() => {
                this.dom.quizZone.classList.remove('hidden');
                document.getElementById('quote-display').innerText = `"${data.frase}"`;
                document.getElementById('intentos-display').innerText = `INTENTOS: ${this.maxIntentos}`;
            }, 800);
        });
    }

    resetUI() {
        const input = document.getElementById('author-guess');
        const btn = document.getElementById('btn-verificar');
        input.value = "";
        input.disabled = false;
        btn.disabled = false;
        btn.innerText = "CONFIRMAR AUTORÍA";
    }

    verificarAutor() {
        const input = document.getElementById('author-guess');
        const userVal = this.normalizar(input.value);
        const targetVal = this.normalizar(this.objetivo.autor);

        if (userVal.length > 3 && targetVal.includes(userVal)) {
            this.exito();
        } else {
            this.fallo();
        }
    }

    normalizar(s) {
        return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
    }

    exito() {
        // 1. Confirmación visual
        this.log(`<span class="success">>>> ACCESO CONCEDIDO.</span>`);
        this.log(`>>> AUTOR: ${this.objetivo.autor}`);
        this.log(`>>> LIBRO: ${this.objetivo.libro}`);
        this.log(`<span class="metadata">HASH: ${this.objetivo.vector}-ORACULO-OPEN</span>`);
        
        // 2. LA REVELACIÓN (Aquí está lo que pedías)
        this.log(`<div class="separator"></div>`);
        this.log(`<span style="color:#00ffff;">>>> DESENCRIPTANDO MENSAJE DEL ORÁCULO...</span>`);
        
        // Usamos un timeout pequeño para dar dramatismo
        setTimeout(() => {
            // Imprime el texto del oráculo que pusimos en database.js
            this.typeWriter(this.objetivo.oraculo || ">>> DATOS CORRUPTOS EN LA MATRIZ.", () => {
                
                // 3. Cuando termine de escribir, muestra el botón del Cap 2
                localStorage.setItem("dante_cap1_complete", "true");
                this.dom.quizZone.classList.add('hidden');
                this.dom.nextLevelZone.classList.remove('hidden');
            });
        }, 1000);
    }

    fallo() {
        this.intentos++;
        const restantes = this.maxIntentos - this.intentos;
        document.getElementById('intentos-display').innerText = `INTENTOS RESTANTES: ${restantes}`;

        if (this.intentos >= this.maxIntentos) {
            this.log(`<span class="alert">>>> ERROR CRÍTICO. SISTEMA BLOQUEADO.</span>`);
            this.typeWriter(">>> VAYA A LEER UN LIBRO Y REGRESE MAÑANA.");
            document.getElementById('author-guess').disabled = true;
            document.getElementById('btn-verificar').disabled = true;
            document.getElementById('btn-verificar').innerText = "BLOQUEADO";
        } else {
            this.log(`<span class="alert">>>> ERROR DE FRECUENCIA.</span>`);
        }
    }

    cargarCapitulo2() {
        this.dom.modalCap2.classList.remove('hidden');
    }
}

// Inicialización segura al cargar el DOM
document.addEventListener('DOMContentLoaded', () => new SistemaDante());
