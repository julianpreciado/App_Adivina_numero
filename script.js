let numeroRandom = Math.floor(Math.random() * 100) + 1 // numero aleatorio

let numeroIngresado = document.getElementById('numeroEntrada') // numero ingresado por usuario

let mensaje = document.getElementById('mensaje') // muestra el mensaje
let intento = document.getElementById('intento')
let intentos = 0 // iniciamos la variable intentos en 0

function chequearResultado() {
    intentos++ // se van sumando los intentos realizados, un contador
    intento.textContent = intentos // asi lo mostramos en el index, ya que intento viene del html
    let numeroEntrado = parseInt(numeroIngresado.value) // para volverlo entero y poner el .value aca no en la variable de arriba, no funciona

    if (numeroEntrado < 1 || numeroEntrado > 100 || isNaN(numeroEntrado)) { // isNan es que no es un numero lo ingresado
        mensaje.textContent = 'Por favor ingresa un valor entre 1 y 100';
        mensaje.style.color = 'black';
        // el return aparece cuando no se cumple la condicion el return te saca de la funcion
    } else if (numeroEntrado === numeroRandom) {
        mensaje.textContent = 'Felicitaciones ! atinaste :)';
        mensaje.style.color = 'green';
        numeroIngresado.disabled = true; // no puedes ingresar mas nmueros por que ganaste, debes refrescar la pagina
    } else if (numeroEntrado < numeroRandom) {
        mensaje.textContent = 'el numero es mayor al que dijiste ! :(';
        mensaje.style.color = 'red'; // de ese color aparece el mensaje
    } else {
        mensaje.textContent = 'el numero es menor al que dijiste ! :(';
        mensaje.style.color = 'red';
    }
}