// <<<<< EL AHORCADO >>>>>
// Clásico Juego de adivinar una palabra al Azar.
//

// DECLARACIONES:

class PalabraDisponible {
  constructor(palabra, pista) {
    this.palabra = palabra;
    this.pista = pista;
  }
}


//palabras para nivel FACIL:

let palabra_facil_uno = new PalabraDisponible(
  "gato",
  'animal de 4 patas que dice "MIAU"'
);
let palabra_facil_dos = new PalabraDisponible(
  "perro",
  'animal de 4 patas que dice "GUAU"'
);
let palabra_facil_tres = new PalabraDisponible(
  "futbol",
  "deporte de 11 jugadores por equipo"
);

let palabrasNivelFacil = [
  palabra_facil_uno,
  palabra_facil_dos,
  palabra_facil_tres,
];

//palabras para nivel MEDIO:

let palabra_medio_uno = new PalabraDisponible(
  "Conservatorio",
  "Establecimiento en el que se enseña música y otras artes relacionadas con ella"
);
let palabra_medio_dos = new PalabraDisponible(
  "Tucuman",
  "Es la provincia más chica de Argentina"
);
let palabra_medio_tres = new PalabraDisponible(
  "Salvador",
  "Nombre del Famoso Pintor de Apellido Dalí"
);

let palabrasNivelMedio = [
  palabra_medio_uno,
  palabra_medio_dos,
  palabra_medio_tres,
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
  "Billete",
  "Papel impreso o grabado, generalmente emitido por el banco central de un país, al que se le asigna un valor pecuniario determinado y se emplea como medio legal de pago."
);

let palabrasNivelDificil = [
  palabra_dificil_uno,
  palabra_dificil_dos,
  palabra_dificil_tres,
];







let nombreUsuario;
let palabra = ""; //palabra seleccionada por el usuario
let palabra1 = ""; //palabra del usuario convertida en array
let palabraOculta = ""; //array convertido en "#"
let palabraFinal = ""; //Se utiliza en caso de que el usuario agote la cantidad de intentos

let letra = ""; //Utilizada para almacenar las letras que debe cargar el usuario para adivinar la palabra

let letrasSeleccionadas = "";
let vidas = 6;




//declaraciones DOM

//botones:

let botonInicio = document.getElementById("boton_inicio");
let botonArriesgar = document.getElementById("boton_arriesgar");

//textos:
let parrafoCantidadLetras = document.getElementById("p_cantidad_letras");
let parrafoPalabraOculta = document.getElementById("p_palabra_oculta");
let parrafoPista = document.getElementById("p_pista");
let parrafoLetrasIngresadas = document.getElementById("p_letras_ingresadas");
let parrafoMensajeAciertos = document.getElementById("p_mensajes_aciertos")
let parrafoMensajeOportunidades = document.getElementById("p_mensajes_oportunidades")
let spanVidas = document.getElementById("vidas");

// inputs
let input_letra = document.getElementById("letra_usuario");
let input_radios = document.getElementsByClassName("radios");

//Eventos

botonInicio.addEventListener("click", jugar);
botonArriesgar.addEventListener("click", adivinar);

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
    aux += "#";
  }
  palabraOculta = Array.from(aux);
  return palabraOculta;
}

function jugar() {
  //Da la bienvenida al usuario y llama a la funciona "ADIVINAR"

  let nivelDeJuego = seleccionarNivel();

  let seleccionRandom = elegirPalabraRandom(nivelDeJuego);

  palabra = nivelDeJuego[seleccionRandom].palabra;

  palabra = palabra.toUpperCase();

  palabra1 = convertirPalabraArray(palabra);
  palabraOculta = ocultarPalabra();

  parrafoCantidadLetras.innerText = `su palabra contiene ${palabra.length} letras`;
  parrafoPalabraOculta.innerText = `Su palabra se oculta aqui: ${palabraOculta}`;
  parrafoPista.innerText = `Aqui tienes una pista: ${nivelDeJuego[seleccionRandom].pista}`;

  // window.location.reload();  DEJAMOS ACÁ HASTA CREAR BOTON REINICIO <<<<<<<<<<<<<<<<<<<<<<<<<
}

function mensajeAciertos(a) {
  //Muestra mensajes en base a la letra seleccionada por el Usuario
  if (a > 1) {
    parrafoMensajeAciertos.innerText = `FELICITACIONES... la letra aparece más de una vez en la Palabra Oculta`;
    // alert(
    //   `FELICITACIONES... la letra aparece más de una vez en la Palabra Oculta`
    // );
  } else if (a == 1) {

    parrafoMensajeAciertos.innerText = `la letra pertenece a la Palabra Oculta`

    // alert(`la letra pertenece a la Palabra Oculta`);
  } else {

    parrafoMensajeAciertos.innerText = `la letra seleccionada NO pertenece a la Palabra Oculta`
    // alert(`la letra seleccionada NO pertenece a la Palabra Oculta`);
    restarVidas();
    spanVidas.innerText = vidas;
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

    letrasSeleccionadas += "[" + letra + "] ";

    parrafoLetrasIngresadas.innerText = "hasta el momento has seleccionado: " + letrasSeleccionadas;    

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
      alert("¡¡FELICITACIONES GANASTE!!");
      
    } else if (vidas > 0) {
      
      parrafoMensajeOportunidades.innerText = `te quedan ${vidas} oportunidad/es`

    } else if (vidas == 0) {
      palabraFinal = prompt(                                                
        "Te quedaste sin vidas, debes arriesgar una palabra"
      );
      palabraFinal = palabraFinal.toUpperCase();

      if (palabraFinal == palabra) {
        alert("¡¡FELICITACIONES GANASTE!!");
        
      } else {
        alert(`Intenta de nuevo! la palabra oculta era:
                    ${palabra}`);
        
      }
    }

    parrafoPalabraOculta.innerText = `Su palabra se oculta aqui: ${palabraOculta}`
    // alert(palabraOculta);
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
