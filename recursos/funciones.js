/* ===================================================
   1. MENÚ TÁCTIL / DESPLEGABLE MÓVIL
   =================================================== */
window.addEventListener('load', iniciarMenu);

function iniciarMenu() {
    const btnHamburguesa = document.getElementById('btnHamburguesa');
    const columnaLateral = document.getElementById('columnaLateral');
    const btnCerrar = document.getElementById('btnCerrar');

    if (columnaLateral) {
        const enlacesMenu = columnaLateral.querySelectorAll('a');

        if (btnHamburguesa) {
            btnHamburguesa.addEventListener('click', () => {
                columnaLateral.classList.toggle('activo');
            });
        }

        if (btnCerrar) {
            btnCerrar.addEventListener('click', () => {
                columnaLateral.classList.remove('activo');
            });
        }

        enlacesMenu.forEach(enlace => {
            enlace.addEventListener('click', () => {
                columnaLateral.classList.remove('activo');
            });
        });
    }
}

/* ===================================================
   2. VALIDACIÓN DE FORMULARIO DE CONTACTO
   =================================================== */
window.addEventListener('load', ValidacionContacto);

function ValidacionContacto() {
    const formulario = document.querySelector('.Pantalla-Final form');

    if (formulario) {
        const campos = formulario.querySelectorAll('input, textarea');

        campos.forEach(campo => {
            ['input', 'change'].forEach(evento => {
                campo.addEventListener(evento, () => {
                    validarCampo(campo);
                });
            });
        });
    }

    function validarCampo(campo) {
        if (campo.type === 'submit') return;

        if (!campo.checkValidity() || (campo.value.trim() === '' && campo.hasAttribute('required'))) {
            campo.classList.add('campo-error');
            campo.classList.remove('campo-valido');
        } else {
            campo.classList.remove('campo-error');
            
            if (campo.value.trim() !== '') { 
                campo.classList.add('campo-valido');
            } else {
                campo.classList.remove('campo-valido');
            }
        }
    }
}

/* ===================================================
   3. SIMULADOR INTERACTIVO DE CATÁSTROFES
   =================================================== */

window.addEventListener('load', iniciarSimulador);

function iniciarSimulador() {

    const catastrofesHistoricas = [

        // ===================================================
        // TAMBORA
        // ===================================================
        {
            //Datos de selector de catastrofes naturales del monte tambora
            id: "tambora",
            nombre: "Erupción del Monte Tambora (1815)",

            tiempoMax: 72,
            unidadTiempo: "horas",

            // Estimación histórica total
            victimasMaximas: 60000,

            obtenerNivel: function(tiempo) {

                if (tiempo < 12) {

                    return {
                        escala: "Actividad volcánica intensa",
                        descripcion: "La actividad eruptiva aumenta rápidamente y comienzan las grandes emisiones de ceniza.",
                        factorVictimas: 0.01
                    };

                } else if (tiempo < 24) {

                    return {
                        escala: "VEI 7 - Super-Colosal",
                        descripcion: "La erupción alcanza su fase paroxística y comienzan enormes emisiones y flujos piroclásticos.",
                        factorVictimas: 0.08
                    };

                } else if (tiempo < 48) {

                    return {
                        escala: "VEI 7 - Super-Colosal",
                        descripcion: "Los flujos piroclásticos y la caída de cenizas provocan una devastación generalizada.",
                        factorVictimas: 0.25
                    };

                } else {

                    return {
                        escala: "VEI 7 - Super-Colosal",
                        descripcion: "Finaliza la fase eruptiva principal. Las consecuencias posteriores provocan una grave crisis alimentaria.",
                        factorVictimas: 1.0
                    };
                }
            }
        },


        // ===================================================
        // LITUYA
        // ===================================================
        {
            id: "lituya",
            nombre: "Megatsunami de Bahía Lituya (1958)",

            tiempoMax: 30,
            unidadTiempo: "minutos",

            victimasMaximas: 5,

            obtenerNivel: function(tiempo) {

                if (tiempo < 5) {

                    return {
                        escala: "Sismo inicial",
                        descripcion: "Un terremoto de aproximadamente magnitud 7.8 sacude la falla de Fairweather.",
                        factorVictimas: 0
                    };

                } else if (tiempo < 12) {

                    return {
                        escala: "Desprendimiento masivo",
                        descripcion: "Una enorme masa de roca cae a la bahía provocando el desplazamiento repentino del agua.",
                        factorVictimas: 0
                    };

                } else if (tiempo < 20) {

                    return {
                        escala: "Grado VI (Desastroso)",
                        descripcion: "La gigantesca ola se propaga por la bahía alcanzando un run-up récord de aproximadamente 524 metros.",
                        factorVictimas: 0.50
                    };

                } else {

                    return {
                        escala: "Devastación máxima",
                        descripcion: "El megatsunami arrasa sectores de la bahía. Se registraron entre 2 a 5 víctimas mortales.",
                        factorVictimas: 1.0
                    };
                }
            }
        },


        // ===================================================
        // VALDIVIA
        // ===================================================
        {
            id: "valdivia",
            nombre: "Terremoto de Valdivia (1960)",

            tiempoMax: 10,
            unidadTiempo: "minutos",

            // Cifra de referencia para las víctimas en Chile
            victimasMaximas: 1600,

            obtenerNivel: function(tiempo) {

                if (tiempo < 2) {

                    return {
                        escala: "Inicio de la ruptura",
                        descripcion: "Comienza la ruptura de la zona de subducción y se producen fuertes movimientos del terreno.",
                        factorVictimas: 0.02
                    };

                } else if (tiempo < 7) {

                    return {
                        escala: "Mw 9.5 - Ruptura principal",
                        descripcion: "La enorme falla se rompe a lo largo de cientos de kilómetros provocando un movimiento sísmico extremo.",
                        factorVictimas: 0.35
                    };

                } else if (tiempo < 10) {

                    return {
                        escala: "Mw 9.5 - Máxima intensidad",
                        descripcion: "La liberación de energía alcanza niveles extraordinarios y causa graves daños en el sur de Chile.",
                        factorVictimas: 0.75
                    };

                } else {

                    return {
                        escala: "Tsunamis posteriores",
                        descripcion: "El terremoto genera un tsunami que se propaga por el océano Pacífico y aumenta el número de víctimas.",
                        factorVictimas: 1.0
                    };
                }
            }
        },


        // ===================================================
        // HURACÁN GILBERT
        // ===================================================
        {
            id: "gilbert_huracan",
            nombre: "Huracán Gilbert (1988)",

            tiempoMax: 12,
            unidadTiempo: "días",

            victimasMaximas: 318,

            obtenerNivel: function(tiempo) {

                if (tiempo < 2) {

                    return {
                        escala: "Formación tropical",
                        descripcion: "El sistema tropical comienza a organizarse y gana fuerza sobre el océano.",
                        factorVictimas: 0
                    };

                } else if (tiempo < 4) {

                    return {
                        escala: "Categoría 3 - Huracán Mayor",
                        descripcion: "Gilbert se intensifica rápidamente y alcanza la categoría de huracán mayor.",
                        factorVictimas: 0.10
                    };

                } else if (tiempo < 6) {

                    return {
                        escala: "Categoría 5 - Catastrófico",
                        descripcion: "Alcanza una presión extremadamente baja de 888 hPa y vientos sostenidos cercanos a 295 km/h.",
                        factorVictimas: 0.45
                    };

                } else if (tiempo < 9) {

                    return {
                        escala: "Categoría 5 - Catastrófico",
                        descripcion: "Gilbert toca tierra en la península de Yucatán provocando daños severos e inundaciones.",
                        factorVictimas: 0.80
                    };

                } else {

                    return {
                        escala: "Impacto final",
                        descripcion: "El huracán continúa avanzando sobre México y sus remanentes provocan nuevos efectos.",
                        factorVictimas: 1.0
                    };
                }
            }
        },


        // ===================================================
        // INCENDIOS DE AUSTRALIA
        // ===================================================
        {
            id: "australia_incendios",
            nombre: "Incendios Forestales de Australia (1974-1975)",

            tiempoMax: 150,
            unidadTiempo: "días",

            victimasMaximas: 6,

            obtenerNivel: function(tiempo) {

                if (tiempo < 30) {

                    return {
                        escala: "Primeros focos",
                        descripcion: "Las condiciones ambientales favorecen la aparición y expansión de numerosos incendios.",
                        factorVictimas: 0
                    };

                } else if (tiempo < 70) {

                    return {
                        escala: "Propagación rápida",
                        descripcion: "Los incendios se extienden rápidamente por grandes áreas rurales y de vegetación.",
                        factorVictimas: 0.17
                    };

                } else if (tiempo < 110) {

                    return {
                        escala: "Megaincendios regionales",
                        descripcion: "Los frentes de fuego se vuelven extremadamente difíciles de controlar y consumen millones de hectáreas.",
                        factorVictimas: 0.50
                    };

                } else {

                    return {
                        escala: "Devastación histórica",
                        descripcion: "La temporada alcanza aproximadamente 117 millones de hectáreas quemadas.",
                        factorVictimas: 1.0
                    };
                }
            }
        }
    ];


    // ===================================================
    // ELEMENTOS DEL HTML
    // ===================================================

    const selectCatastrofe = document.getElementById('selectCatastrofe');

    const sliderTiempo = document.getElementById('sliderTiempo');

    const lblTiempo = document.getElementById('lblTiempo');

    const simNombreEvento = document.getElementById('simNombreEvento');

    const simEscala = document.getElementById('simEscala');

    const simEstado = document.getElementById('simEstado');

    const simVictimas = document.getElementById('simVictimas');

    const barraProgresoVictimas = document.getElementById('barraProgresoVictimas');


    // ===================================================
    // CARGAR LAS CATÁSTROFES EN EL SELECT
    // ===================================================

    if (selectCatastrofe && sliderTiempo) {

        for (let i = 0; i < catastrofesHistoricas.length; i++) {

            const opcion = document.createElement('option');

            opcion.value = catastrofesHistoricas[i].id;

            opcion.textContent = catastrofesHistoricas[i].nombre;

            selectCatastrofe.appendChild(opcion);
        }

        // Cambio de catástrofe
        selectCatastrofe.addEventListener('change', actualizarSimulador);

        // Movimiento de la barra
        sliderTiempo.addEventListener('input', actualizarSimulador);

        // Iniciar simulador
        actualizarSimulador();
    }


    // ===================================================
    // ACTUALIZAR SIMULADOR
    // ===================================================

    function actualizarSimulador() {

        const idSeleccionado = selectCatastrofe.value;


        // El valor puede representar minutos,
        // horas o días dependiendo del evento.

        const tiempoActual = parseInt(sliderTiempo.value);


        // Buscar la catástrofe seleccionada

        let eventoActual = null;

        for (let i = 0;i < catastrofesHistoricas.length;i++) {

            if (
                catastrofesHistoricas[i].id ===idSeleccionado
            ) {
                eventoActual =catastrofesHistoricas[i];
                break;
            }
        }


        if (!eventoActual) return;


        // ===================================================
        // CAMBIAR MÁXIMO DE LA BARRA
        // ===================================================


        sliderTiempo.max = eventoActual.tiempoMax;

        if (tiempoActual > eventoActual.tiempoMax) {
            sliderTiempo.value = eventoActual.tiempoMax;
        }

        // ===================================================
        // MOSTRAR TIEMPO Y UNIDAD
        // ===================================================


        lblTiempo.textContent = sliderTiempo.value + " " + eventoActual.unidadTiempo;

        // ===================================================
        // OBTENER ESTADO ACTUAL
        // ===================================================


        const resultado = eventoActual.obtenerNivel(tiempoActual);

        // ===================================================
        // CALCULAR VÍCTIMAS
        // ===================================================


        const victimasCalculadas = Math.round(eventoActual.victimasMaximas * resultado.factorVictimas);

        // ===================================================
        // ACTUALIZAR INFORMACIÓN
        // ===================================================


        simNombreEvento.textContent = eventoActual.nombre;

        simEscala.textContent = resultado.escala;

        simEstado.textContent = resultado.descripcion;

        simVictimas.textContent = victimasCalculadas.toLocaleString("es-AR");

        // ===================================================
        // ACTUALIZAR BARRA DE VÍCTIMAS
        // ===================================================


        const porcentajeBarra =Math.round(resultado.factorVictimas * 100);

        barraProgresoVictimas.style.width =porcentajeBarra + "%";
    }
}