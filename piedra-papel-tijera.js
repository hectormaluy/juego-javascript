const inputPiedra = document.querySelector("#piedra");
const inputPapel = document.querySelector("#papel");
const inputTijera = document.querySelector("#tijera");
const textoResultado = document.querySelector("#textoResultado");
const maquinaResultado = document.querySelector("#maquinaResultado");
const jugadorResultado = document.querySelector("#jugadorResultado");

inputPiedra.addEventListener("click", obtenerValorUsuario);
inputPapel.addEventListener("click", obtenerValorUsuario);
inputTijera.addEventListener("click", obtenerValorUsuario);

function obtenerValorUsuario() {
  const jugada = this.innerText;
  jugar(jugada);
}

const valores = {0:"🌑", 1:"📃", 2:"✂"};

function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 3); 
}

function obtenerInputMaquina() {
  let index = generarNumeroAleatorio();
  let inputMaquina = valores[index];
  return inputMaquina;
}
    
function jugar(jugadaUsuario) {
  let valorUsuario = jugadaUsuario;
  let valorMaquina = obtenerInputMaquina();
  let resultado;    

  if(valorUsuario === valorMaquina) {
    resultado = "Empate";
    //----- valorUsuario tijera
    } else if((valorUsuario === "✂") && (valorMaquina === "🌑")) {
    resultado = "Gana la maquina";
    } else if((valorUsuario === "✂") && (valorMaquina === "📃")) {
    resultado = "Ganaste";
    }
    //-------- valorUsuario piedra
    else if((valorUsuario === "🌑") && (valorMaquina === "📃")) {
    resultado = "Gana la maquina";
    }
    else if((valorUsuario === "🌑") && (valorMaquina === "✂")) {
    resultado = "Ganaste";
    }
    //---------- valorUsuario papel
    else if((valorUsuario === "📃") && (valorMaquina === "🌑")) {
    resultado = "Ganaste";
    }
    else if((valorUsuario === "📃") && (valorMaquina === "✂")) {
    resultado = "Gana la maquina";
    }     
    
    if(valorUsuario === "✂") {
      jugadorResultado.style.color="green";
    }
    if(valorMaquina === "✂") {
      maquinaResultado.style.color="green";
    }
    if(resultado === "Gana la maquina") {
      textoResultado.classList.add("gana-maquina");
      textoResultado.classList.remove("gana-jugador");
    } 
    if (resultado === "Ganaste") {
      textoResultado.classList.add("gana-jugador");
      textoResultado.classList.remove("gana-maquina");
    } 
    if (resultado === "Empate") {
      textoResultado.classList.remove("gana-jugador");
      textoResultado.classList.remove("gana-maquina");
    }


    textoResultado.innerText = resultado;
    jugadorResultado.innerText = valorUsuario;
    maquinaResultado.innerText = valorMaquina;
  }
