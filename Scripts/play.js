// <<<<< EL AHORCADO >>>>>
// Clásico Juego de adivinar una palabra al Azar.
//

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   Index   <<<<<<<<<<<<<<<<<<<<<<<<<<<<

//PENDIENTES:

// ACTIVAR O DESACTIVAR INPUTS Y BOTON INICIO
// ESTILOS

// DECLARACIONES:

class PalabraDisponible {
  constructor(palabra, pista) {
    this.palabra = palabra;
    this.pista = pista;
  }
}

//palabras para nivel FACIL:

let palabra_facil_uno = new PalabraDisponible(
  "blancanieves",
  'Es el nombre de una princesa de cuentos clásicos de niños'
);
let palabra_facil_dos = new PalabraDisponible(
  "Piano",
  'Instrumento musical de cuerda percutida formado por una serie de cuerdas metálicas de diferente longitud y diámetro, ordenadas de mayor a menor en una caja de resonancia, y una serie de teclas blancas y negras.'
);
let palabra_facil_tres = new PalabraDisponible(
  "Cesped",
  "Conjunto de plantas sin tronco con hojas de color verde, finas, cortas y tupidas, que se planta en jardines por motivos ornamentales y en terrenos deportivos para cubrir el suelo"
);
let palabra_facil_cuatro = new PalabraDisponible(
  "Escuela",
  "Institución destinada a la enseñanza, en especial la primaria, que proporciona conocimientos que se consideran básicos en la alfabetización."
);
let palabra_facil_cinco = new PalabraDisponible(
  "Clorofila",
  "Pigmento de color verde que se halla presente en las hojas y tallos de muchos vegetales y que es responsable del proceso de fotosíntesis; se emplea en farmacia y cosmética."
);
let palabra_facil_seis = new PalabraDisponible(
  "Argentina",
  "Nombre del país que obtuvo la última copa del mundo, tras ganarle a Francia por penales"
);

let palabrasNivelFacil = [
  palabra_facil_uno,
  palabra_facil_dos,
  palabra_facil_tres,
  palabra_facil_cuatro,
  palabra_facil_cinco,
  palabra_facil_seis,
];

//palabras para nivel MEDIO:

let palabra_medio_uno = new PalabraDisponible(
  "Conservatorio",
  "Establecimiento en el que se enseña música y otras artes relacionadas con ella."
);
let palabra_medio_dos = new PalabraDisponible(
  "Disparate",
  "Dicho o hecho totalmente absurdo, equivocado o carente de lógica o sentido"
);
let palabra_medio_tres = new PalabraDisponible(
  "Gaseoso",
  "Uno de los 3 estados del agua."
);
let palabra_medio_cuatro = new PalabraDisponible(
  "Tamesis",
  "Famoso río de Londres"
);
let palabra_medio_cinco = new PalabraDisponible(
  "Acallar",
  "Hacer que cesen los gritos, quejas, risas o llantos de una persona, o que ésta deje de producirlos"
);
let palabra_medio_seis = new PalabraDisponible(
  "Desconcierto",
  "Estado de confusión o desorientación en que queda una persona a causa de algo inesperado o sorprendente"
);

let palabrasNivelMedio = [
  palabra_medio_uno,
  palabra_medio_dos,
  palabra_medio_tres,
  palabra_medio_cuatro,
  palabra_medio_cinco,
  palabra_medio_seis,

];

//palabras para nivel DIFICIL:

let palabra_dificil_uno = new PalabraDisponible(
  "Epifania",
  "Manifestación repentina de una verdad"
);
let palabra_dificil_dos = new PalabraDisponible(
  "Viscocidad",
  "propiedad importante de los líquidos que describe la resistencia del líquido al flujo y está relacionada con la fricción interna en el líquido."
);
let palabra_dificil_tres = new PalabraDisponible(
  "mendacidad",
  "Sinónimo de falsedad, mentira."
);
let palabra_dificil_cuatro = new PalabraDisponible(
  "resiliencia",
  "capacidad de adaptación de un ser vivo frente a un agente perturbador  o situación adversa"
);
let palabra_dificil_cinco = new PalabraDisponible(
  "nefelibata",
  "dicho de una persona: soñadora, que no se apercibe de la realidad"
);
let palabra_dificil_seis = new PalabraDisponible(
  "Inefable",
  "Que no puede ser dicho, explicado o descrito con palabras, generalmente por tener cualidades excelsas o por ser muy sutil o difuso."
);

let palabrasNivelDificil = [
  palabra_dificil_uno,
  palabra_dificil_dos,
  palabra_dificil_tres,
  palabra_dificil_cuatro,
  palabra_dificil_cinco,
  palabra_dificil_seis
];

let nombreUsuario;
let palabra = ""; //palabra seleccionada por el usuario
let palabra1 = ""; //palabra del usuario convertida en array
let palabraOculta = ""; //array convertido en "#"
let palabraFinal = ""; //Se utiliza en caso de que el usuario agote la cantidad de intentos

let letra = ""; //Utilizada para almacenar las letras que debe cargar el usuario para adivinar la palabra

let letrasSeleccionadas = "";
let vidas = 6;

let validador = /[a-zA-ZñÑ]/; //expresión regular para filtrado en input de letra y palabra

let apiKey = "ecbcea15ede599f958862fb6e051c123";
let latitud = 0;
let longitud = 0;

//declaraciones DOM

//contenedores:

let div_contenedor_letra = document.getElementById(
  "contenedor_arriesgar_letra"
);
let div_contenedor_nivel = document.getElementById("contenedor_nivel");

//botones:

let btn_inicio = document.getElementById("btn_inicio");
let btn_arriesgarLetra = document.getElementById("btn_arriesgar_letra");
let btn_arriesgarPalabra = document.getElementById("btn_arriesgar_palabra");

//textos:
let h1_mensajes = document.getElementById("h1_mensajes");
// let h3_mensajes = document.getElementById("h3_mensajes");
let p_cantidadLetras = document.getElementById("p_cantidad_letras");
let p_palabraOculta = document.getElementById("p_palabra_oculta");
let p_pista = document.getElementById("p_pista");
let p_letrasIngresadas = document.getElementById("p_letras_ingresadas");
let p_latitud = document.getElementById("p_latitud");
let p_longitud = document.getElementById("p_longitud");
// inputs
let input_letra = document.getElementById("letra_usuario");
let input_palabra = document.getElementById("palabra_usuario");
let input_radios = document.getElementsByClassName("radios");

//img:
let img_ahorcado = document.getElementById("img_ahorcado");
let img_clima = document.getElementById("contenedor_apis");

//form:
let fieldset_nivel = document.getElementById("form_nivel");

//Eventos
btn_arriesgarLetra.addEventListener("click", adivinar);
btn_arriesgarPalabra.addEventListener("click", arriesgarPalabra);
btn_inicio.addEventListener("click", jugar);

//FUNCIONES:

function convertirPalabraArray(a) {
  //Convierte el String inicial en un Array de Strings.
  palabra1 = Array.from(a);
  return palabra1;
}

function ocultarPalabra() {
  //genera un array que muestra con # la cantidad de letras que tiene la palabra:
  let aux = "";
  for (i = 0; i < palabra.length; i++) {
    aux += "_";
  }
  palabraOculta = Array.from(aux);
  return palabraOculta;
}

function jugar() {
  //Da la bienvenida al usuario y llama a la funciona "ADIVINAR"

  deshabilitarElemento(fieldset_nivel);
  deshabilitarElemento(btn_inicio);
  habilitarElemento(btn_arriesgarLetra);
  habilitarElemento(btn_arriesgarPalabra);
  agregarClase(btn_inicio);

  let nivelDeJuego = seleccionarNivel();

  let seleccionRandom = elegirPalabraRandom(nivelDeJuego);

  palabra = nivelDeJuego[seleccionRandom].palabra;

  palabra = palabra.toUpperCase();

  palabra1 = convertirPalabraArray(palabra);
  palabraOculta = ocultarPalabra();

  p_cantidadLetras.innerText = `su palabra contiene ${palabra.length} letras.`;
  p_palabraOculta.innerText = palabraOculta;
  p_pista.innerText = `Aquí tienes una pista: ${nivelDeJuego[seleccionRandom].pista}`;
}

function mensajeAciertos(a) {
  //Muestra mensajes en base a la letra seleccionada por el Usuario
  if (a > 1) {
    h1_mensajes.innerText = `FELICITACIONES... la letra aparece más de una vez en la Palabra Oculta.`;
  } else if (a == 1) {
    h1_mensajes.innerText = `la letra pertenece a la Palabra Oculta.`;
  } else {
    h1_mensajes.innerText = `la letra seleccionada NO pertenece a la Palabra Oculta.`;

    restarVidas();
    imgSegunVidas(vidas);
  }
}

function compararArrays(a, b) {
  //Funcion que compara en cada interación si la palabra formada por el usuario coincide o no con la palabra oculta.
  let aux = 0;
  for (let k = 0; k < a.length; k++) {
    if (a[k] == b[k]) {
      aux++; // OPERADOR AVANZADO
    }
  }
  if (aux == a.length) {
    return true;
  } else {
    return false;
  }
}

function restarVidas() {
  vidas--; // OPERADOR AVANZADO
  return vidas;
}

function adivinar() {
  //Función encargada de la logica del del juego, una vez que inicia, inicia un doble for, el primero pedirá
  //una letra al Usuario, el segundo compara la letra ingresada con todas las que forman el array
  //evaluando las que corresponden o no a la Palabra Oculta.

  let contadorAciertos = 0;

  letra = input_letra.value;
  letra = letra.toUpperCase();

  let pausa = validarInputsUsuario(letra);

  if (pausa == 1) {
    letrasSeleccionadas += "[" + letra + "] ";

    p_letrasIngresadas.innerText = "ingresaste: " + letrasSeleccionadas;

    for (i = 0; i <= palabra.length; i++) {
      if (palabra1[i] == letra) {
        palabraOculta[i] = letra;
        contadorAciertos += 1;
      }
    }

    input_letra.value = "";

    mensajeAciertos(contadorAciertos);

    contadorAciertos = 0;

    console.log(palabraOculta);
    console.log(palabra1);

    let prueba = compararArrays(palabra1, palabraOculta);

    if (prueba) {
      h1_mensajes.innerText = "Felicitaciones Ganaste!!";
      img_ahorcado.src = "../img/ahorcadoLibre.svg";
      setTimeout(reiniciar, 5000);
    }
    // else if (vidas > 0) {
    // h3_mensajes.innerText = `te quedan ${vidas} oportunidad/es`;
    else if (vidas == 0) {
      h1_mensajes.innerText =
        "Te quedaste sin vidas, sólo puedes arriesgar la palabra.";
      deshabilitarElemento(btn_arriesgarLetra);
    }

    p_palabraOculta.innerText = palabraOculta;

    letra = "";
  } else if (pausa == 5) {
    h1_mensajes.innerText = "La letra ya se ingresó.";
  } else {
    h1_mensajes.innerText = "ud debe ingresar letras de la A a la Z.";
  }
}

function elegirPalabraRandom(a) {
  let auxMin = 0;
  let auxMax = a.length;

  let resultado = Math.floor(Math.random() * (auxMax - auxMin + 1) + auxMin);

  return resultado;
}

function seleccionarNivel() {
  if (input_radios[0].checked) {
    return palabrasNivelFacil;
  } else if (input_radios[1].checked) {
    return palabrasNivelMedio;
  } else if (input_radios[2].checked) {
    return palabrasNivelDificil;
  }
}

function arriesgarPalabra() {
  deshabilitarElemento(btn_arriesgarLetra);

  palabraFinal = input_palabra.value;
  palabraFinal = palabraFinal.toUpperCase();

  let aux = validarInputsUsuario(palabraFinal);

  if (aux == 1) {
    if (palabraFinal == palabra) {
      deshabilitarElemento(btn_arriesgarLetra);
      deshabilitarElemento(btn_arriesgarPalabra);
      h1_mensajes.innerText = "Felicitaciones Ganaste!!";
      img_ahorcado.src = "../img/ahorcadoLibre.svg";
      setTimeout(reiniciar, 5000);
    } else {
      deshabilitarElemento(btn_arriesgarLetra);
      deshabilitarElemento(btn_arriesgarPalabra);
      h1_mensajes.innerText = `Intenta de nuevo! la palabra oculta era: ${palabra}`;
      img_ahorcado.src = "../img/ahorcadoMuerto.svg";
      setTimeout(reiniciar, 5000);
    }
    palabraFinal = "";
    setTimeout(reiniciar, 5000);
  } else {
    palabraFinal = "";
    h1_mensajes.innerText = "Debe ingresar caractéres válidos";
  }
}

function validarInputsUsuario(a) {
  let aux = 0;

  let validadorLetras = /[a-zA-ZñÑ]/;
  let validadorNumeros = /[0-9]/;
  let validadorLetraIngresada = 0;

  Array.from(letrasSeleccionadas).forEach((element) => {
    if (element == a) {
      validadorLetraIngresada++;
    }
  });

  if (validadorLetraIngresada == 0) {
    let resultado1 = validadorLetras.test(a);
    let resultado2 = validadorNumeros.test(a);

    if (resultado1 == true) {
      aux++;
    } else if (resultado2 == true) {
      aux--;
    }
  } else {
    aux = 5;
  }

  return aux;
}

function deshabilitarElemento(a) {
  a.setAttribute("disabled", "disabled");
}

function habilitarElemento(a) {
  a.removeAttribute("disabled");
}

function agregarClase(a){
  a.classList.add("animate__hinge");
}

function reiniciar() {
  window.location.reload();
}

function imgSegunVidas(a) {
  let NombreBase = "../img/ahorcado";
  let extension = ".svg";
  let indice = a;
  let src = NombreBase + indice + extension;
  img_ahorcado.src = src;
}

//Api

navigator.geolocation.getCurrentPosition(obtenerPosicion);

function obtenerPosicion(posicion) {
  latitud = posicion.coords.latitude;
  longitud = posicion.coords.longitude;
}


function obtenerTiempo() {  
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((datos) => {
      console.log(datos);
      p_latitud.innerHTML = `${datos.name}  `;
      p_longitud.innerText = `  ${datos.main.temp}°C`;      
    });
}

setTimeout(obtenerTiempo, 5000);


