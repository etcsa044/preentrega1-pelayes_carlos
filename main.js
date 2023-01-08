// <<<<< EL AHORCADO >>>>>
// Clásico Juego donde un jugador elige una palabra al Azar, para que otro usuario Adivine.
// 




// DECLARACIONES:

let nombreUsuario;
let palabra = "";                 //palabra seleccionada por el usuario
let palabra1 = "";                //palabra del usuario convertida en array
let palabraOculta = "";           //array convertido en "#"
let palabraFinal = "";            //Se utiliza en caso de que el usuario agote la cantidad de intentos
let letra = "";                   //Utilizada para almacenar las letras que debe cargar el usuario para adivinar la palabra
let letrasSeleccionadas = "";
let vidas = 6;

let botonInicio = document.getElementById("botonInicio");

f = 0;

//FUNCIONES:


function ocultarPalabra() {                                                 //genera un array que muesta con # la cantidad de letras que tiene la palabra:
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

  palabra = prompt("ingrese la palabra a Adivinar: ");

  palabra = palabra.toUpperCase();

  palabra1 = convertirPalabraArray(palabra);
  palabraOculta = ocultarPalabra();

  alert(`su palabra contiene ${palabra.length} letras:      ${palabraOculta}`);
  adivinar();
}



function mensajeAciertos(a, b, c, d) {                                     //Muestra mensajes en base a la letra seleccionada por el Usuario
  if (a > 1) {
    alert(
      `FELICITACIONES... la letra aparece más de una vez en la Palabra Oculta`
    );
  } else if (a == 1) {
    alert(`la letra pertenece a la Palabra Oculta`);
  } else{
    alert(`la letra seleccionada NO pertenece a la Palabra Oculta`);
  }
}



function compararArrays(a, b) {                                             //Funcion que compara en cada interación si la palabra formada por el usuario coincide o no con la palabra oculta.
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



function convertirPalabraArray(a) {                                       //Convierte el String inicial en un Array de Strings.
  palabra1 = Array.from(a);
  return palabra1;
}

function adivinar() {                                                     //Función encargada de la logica del del juego, una vez que inicia, inicia un doble for, el primero pedirá
                                                                          //una letra al Usuario, el segundo compara la letra ingresada con todas las que forman el array
                                                                          //evaluando las que corresponden o no a la Palabra Oculta. 
 
  let contadorAux = 0;                                                        
  let contadorAux_2 = 0;
  let contadorAciertos = 0;

  for (let j = 0; j < 6; j++) {
    letra = prompt("Selecciona una letra: ");
    letra = letra.toUpperCase();

    letrasSeleccionadas += "[" + letra + "]";

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

    vidas -= 1;

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
window.location.reload()

//INICIO: 

//Inicia desde boton Inicio.






