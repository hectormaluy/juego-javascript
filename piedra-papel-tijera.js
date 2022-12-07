const valores = {0:"piedra", 1:"papel", 2:"tijera"};
    function generarNumeroAleatorio() {
      return Math.floor(Math.random() * 3); //Esta formulita la saque del w3schools para ser honesto.
    }

    function obtenerInputUsuario() {
      var inputUsuario = document.getElementById("valor").value.toLowerCase().trim();
      return inputUsuario;
    }

    function obtenerInputMaquina() {
      let index = generarNumeroAleatorio();
      let inputMaquina = valores[index];
      return inputMaquina;
    }
    
    function validarData() {
      var inputUsuario = obtenerInputUsuario();
           
      if(inputUsuario === "") {
        return {error: true,
                tipo: "vacio",
                descripcion: "Error: Campo vacio.<br>Debe seleccionar un valor, lea las instrucciones."
              };
      } 
      if((inputUsuario !== "piedra") && (inputUsuario !== "papel") && (inputUsuario !== "tijera")) {
        return {error: true,
                tipo: "incorrecto",
                descripcion: "Error: valor incorrecto.<br>Lea las instrucciones."
              };
      }
      return {error: false,
              tipo: null,
              descripcion: null
              };
    }

    function jugar() {
      let valorUsuario = obtenerInputUsuario();
      let valorMaquina = obtenerInputMaquina();
      let resultado;
      let veredicto = validarData();

      if(veredicto.error) {
        switch(veredicto.tipo) {
          case 'vacio': document.getElementById("presultado").innerHTML = veredicto.descripcion;
                        window.alert("Error: Campo vacio.");
                        return;
          case 'incorrecto': document.getElementById("presultado").innerHTML = veredicto.descripcion;
                             window.alert("Error: valor incorrecto.");
                             return;
          default: break;

        }
      }

      if(valorUsuario === valorMaquina) {
        resultado = "Empate";
      //----- valorUsuario tijera
       } else if((valorUsuario === "tijera") && (valorMaquina === "piedra")) {
        resultado = "Gana la maquina!";
       } else if((valorUsuario === "tijera") && (valorMaquina === "papel")) {
        resultado = "Ganaste!";
       }
       //-------- valorUsuario piedra
       else if((valorUsuario === "piedra") && (valorMaquina === "papel")) {
        resultado = "Gana la maquina!";
       }
       else if((valorUsuario === "piedra") && (valorMaquina === "tijera")) {
        resultado = "Ganaste!";
       }
       //---------- valorUsuario papel
       else if((valorUsuario === "papel") && (valorMaquina === "piedra")) {
        resultado = "Ganaste!";
       }
       else if((valorUsuario === "papel") && (valorMaquina === "tijera")) {
        resultado = "Gana la maquina!";
       }     

       document.getElementById("presultado").innerHTML = `${resultado} <br>Valor usuario: 
       ${valorUsuario} <br>Valor maquina: ${valorMaquina}`;
    }
