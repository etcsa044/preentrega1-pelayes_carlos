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

// ESTA SECCION ESTÁ COMENTADA SOLO PORQUE VA A TENER SENTIDO EN LA VERSION FINAL, DONDE DE NO MEDIAR INCONVENIENTES, PODRÍA SER UNA APP MULTIJUGADOR

// class PalabraOculta {
//   constructor(palabra, pista) {
//     this.palabra = palabra;
//     this.pista = pista;
//   }
// }

// class Usuario {
//   constructor(nombre, vidas) {
//     this.nombre = nombre;
//     this.vidas = vidas;
//   }
// }

// FIN SECCIÓN EN CONSTRUCCION.

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

let nombreUsuario;
let palabra = ""; //palabra seleccionada por el usuario
let palabra1 = ""; //palabra del usuario convertida en array
let palabraOculta = ""; //array convertido en "#"
let palabraFinal = ""; //Se utiliza en caso de que el usuario agote la cantidad de intentos
let letra = ""; //Utilizada para almacenar las letras que debe cargar el usuario para adivinar la palabra
let letrasSeleccionadas = "";
let vidas = 6;

let botonInicio = document.getElementById("botonInicio");



//FUNCIONES:

function ocultarPalabra() {
  //genera un array que muestra con # la cantidad de letras que tiene la palabra:
  let aux = "";

  for (i = 0; i < palabra.length; i++) {
    aux += "#";
  }
  palabraOculta = Array.from(aux);
  console.log(palabraOculta);
  return palabraOculta;
}

function jugar() {
  //Da la bienvenida al usuario y llama a la funciona "ADIVINAR"
  nombreUsuario = prompt("ingrese su nombre: ");

  alert(`bienvenido ${nombreUsuario}`);

  let nivelDeJuego = seleccionarNivel();

  let seleccionRandom = elegirPalabraRandom(nivelDeJuego);

  
  palabra = nivelDeJuego[seleccionRandom].palabra;

  palabra = palabra.toUpperCase();

  palabra1 = convertirPalabraArray(palabra);
  palabraOculta = ocultarPalabra();

  alert(`su palabra contiene ${palabra.length} letras:      ${palabraOculta}`);

  alert(`Aqui tienes una pista: ${nivelDeJuego[seleccionRandom].pista}`);

  adivinar();
  window.location.reload();
}

function mensajeAciertos(a, b, c, d) {
  //Muestra mensajes en base a la letra seleccionada por el Usuario
  if (a > 1) {
    alert(
      `FELICITACIONES... la letra aparece más de una vez en la Palabra Oculta`
    );
  } else if (a == 1) {
    alert(`la letra pertenece a la Palabra Oculta`);
  } else {
    alert(`la letra seleccionada NO pertenece a la Palabra Oculta`);
    restarVidas();
  }
}

function compararArrays(a, b) {
  //Funcion que compara en cada interación si la palabra formada por el usuario coincide o no con la palabra oculta.
  let aux = 0;
  for (let k = 0; k < a.length; k++) {
    if (a[k] == b[k]) {
      aux += 1;
    }
  }
  if (aux == a.length) {
    return true;
  } else {
    return false;
  }
}

function convertirPalabraArray(a) {
  //Convierte el String inicial en un Array de Strings.
  palabra1 = Array.from(a);
  return palabra1;
}

function restarVidas() {
  vidas -= 1;
  return vidas;
}

function adivinar() {
  //Función encargada de la logica del del juego, una vez que inicia, inicia un doble for, el primero pedirá
  //una letra al Usuario, el segundo compara la letra ingresada con todas las que forman el array
  //evaluando las que corresponden o no a la Palabra Oculta.

  let contadorAux = 0;
  let contadorAux_2 = 0;
  let contadorAciertos = 0;
  
  while (vidas > 0) {
     

    letra = prompt("Selecciona una letra: ");
    letra = letra.toUpperCase();

    letrasSeleccionadas += "[" + letra + "] ";

    alert("hasta el momento has seleccionado: " + letrasSeleccionadas);
    
    for (i = 0; i <= palabra.length; i++) {
      if (palabra1[i] == letra) {
        palabraOculta[i] = letra;

        contadorAciertos += 1;
      } else {
        contadorAux += 1;
        contadorAux_2 += 1;
      }
    }

    mensajeAciertos(
      contadorAciertos,
      contadorAux,
      contadorAux_2,
      palabra.length
    );

    contadorAux = 0;
    contadorAux_2 = 0;
    contadorAciertos = 0;

    console.log(palabraOculta);
    console.log(palabra1);

    let prueba = compararArrays(palabra1, palabraOculta);

    if (prueba) {
      alert("¡¡FELICITACIONES GANASTE!!");
      break;
    } else if (vidas > 0) {
      alert(`te quedan ${vidas} oportunidad/es`);
    } else if (vidas == 0) {
      palabraFinal = prompt(
        "Te quedaste sin vidas, debes arriesgar una palabra"
      );
      palabraFinal = palabraFinal.toUpperCase();

      if (palabraFinal == palabra) {
        alert("¡¡FELICITACIONES GANASTE!!");
        break;
      } else {
        alert(`Intenta de nuevo! la palabra oculta era:

                    ${palabra}`);
        break;
      }
    }

    alert(palabraOculta);
  }
}

function elegirPalabraRandom(a) {
  let auxMin = 0;
  let auxMax = a.length;

  let resultado = Math.floor(Math.random() * (auxMax - auxMin + 1) + auxMin);

  return resultado;
}

function seleccionarNivel() {
  let aux = prompt("ingrese 1 para nivel facil o 2 para nivel medio");
  while (aux != 1 && aux != 2) {
    alert("Debe seleccionar 1 o 2");
    aux = prompt("ingrese 1 para nivel facil o 2 para nivel medio");
  }
  if (aux == 1) {
    return palabrasNivelFacil;
  } else if (aux == 2) {
    return palabrasNivelMedio;
  }
}

//INICIO:

//Inicia desde boton Inicio.
