// <<<<< EL AHORCADO >>>>>
// Clásico Juego de adivinar una palabra al Azar.
//

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   Loggin   <<<<<<<<<<<<<<<<<<<<<<<<<<<<

//DECALARACIONES:

class Usuario {
  constructor(nombre_usuario, pass) {
    this.nombre_usuario = nombre_usuario;
    this.pass = pass;
  }
}

// Arrays:

let usuariosRegistrados = [];


usuariosRegistrados = recuperacionAutomatica();

// usuariosRegistrados.forEach(element => {
//   console.log(element.nombre_usuario);
//   console.log(element.pass);
// });;

// Declaraciones DOM:

// botones:

let btn_ingresar = document.getElementById("btn_ingresar");
let btn_registrar = document.getElementById("btn_registrar");

//inputs:

let input_usuario = document.getElementById("input_usuario");
let input_pass = document.getElementById("input_pass");

let frm_input_usuario = document.getElementById("frm_input_usuario");
let frm_input_pass = document.getElementById("frm_input_pass");

// Eventos:

btn_ingresar.addEventListener("click", ingresar);
btn_registrar.addEventListener("click", registrarUsuario);

// Funciones:

function recuperacionAutomatica() {
  let datos_recuperados = localStorage.getItem("usuarios");

  datos_recuperados = JSON.parse(datos_recuperados);

  if (datos_recuperados != null) {
    return datos_recuperados;
  } else {
    return [];
  }
}

function registrarUsuario() {
  let usuarioNuevo = new Usuario();

  usuarioNuevo.nombre_usuario = frm_input_usuario.value;
  usuarioNuevo.pass = frm_input_pass.value;

  if(validarCargaUsuario(usuarioNuevo)){
    alert("Usuario Creado correctamente")
    usuariosRegistrados.push(usuarioNuevo)
  } 

  let usuariosRegistrados_json = JSON.stringify(usuariosRegistrados);

  localStorage.setItem("usuarios", usuariosRegistrados_json);
}

function ingresar() {
  let usuarioNuevo = new Usuario();
  let aux = 0;

  usuarioNuevo.nombre_usuario = input_usuario.value;
  usuarioNuevo.pass = input_pass.value;

  let usuarios_recuperados = localStorage.getItem("usuarios");

  console.log(usuarios_recuperados);

  usuarios_recuperados = JSON.parse(usuarios_recuperados);

  if (usuarios_recuperados != null) {
    usuarios_recuperados.forEach((element) => {
      if (usuarios_recuperados != []) {
      } //Función Orden Superior
      if (
        usuarioNuevo.nombre_usuario == element.nombre_usuario &&
        usuarioNuevo.pass == element.pass
      ) {
        aux++;
      }
    });
    if (aux == 1) {
      location.href = "./views/play.html";
    } else {
      alert("Primero debes registrarte!");
    }
  } else {
    alert("Primero debes registrarte!");
  }
}

function validarCargaUsuario(a) {

  let validaccionExitosa;
  
  let validacionNombreDuplicado;

  let validacionPass = a.pass.length > 5 ? true : alert("el password debe tener al menos 6 caracteres");


  validacionNombreDuplicado = usuariosRegistrados.some(
    (e) => e.nombre_usuario == a.nombre_usuario
  );

  validacionNombreDuplicado ? alert("El nombre no está disponible, Seleccione otro por favor"):false;


  return validaccionExitosa = !(validacionNombreDuplicado) && validacionPass;
  
}