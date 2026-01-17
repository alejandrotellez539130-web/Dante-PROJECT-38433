// [js/core.js]
import { LIBRERIA_DANTE } from './database.js';

class SistemaDante {
    constructor() {
        this.maxIntentos = 3;
        this.intentos = 0;
        this.objetivo = null; // {autor, libro, vector}
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
            this.typeWriter(">>> SISTEMA NEUTRAL v8.0. ESPERANDO INPUT...", () => {
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
        this.log(`<span class="success">>>> ACCESO CONCEDIDO.</span>`);
        this.log(`>>> AUTOR: ${this.objetivo.autor}`);
        this.log(`>>> LIBRO: ${this.objetivo.libro}`);
        this.log(`<span class="metadata">HASH: ${this.objetivo.vector}-CAP1-OK</span>`);
        
        this.typeWriter(">>> FILTRO SUPERADO. NIVEL DE CONCIENCIA: 1.", () => {
            localStorage.setItem("dante_cap1_complete", "true");
            this.dom.quizZone.classList.add('hidden');
            this.dom.nextLevelZone.classList.remove('hidden');
        });
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
