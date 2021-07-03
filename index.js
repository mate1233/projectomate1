const form = document.forms['registrar'];
let contenido = document.getElementById('text');
let opcion1 = document.getElementById('opcionEntrada');
let opcion2 = document.getElementById('opcionSalida');
let contador = null;
let continuar = false;
let salir = false;
let resultado = "";
let division = 0;
let resto = 0;

form.onsubmit = (event) => { //Si se preciona el boton enviar, se mostraran por consola lo que el usuario ingreso, junto con las opciones que se hayan elegido
  event.preventDefault();
  console.log(contenido.value);
  console.log(opcion1.value);
  console.log(opcion2.value);
}

document.getElementById('enviar').addEventListener("click",revisar); //En caso de que se precione un objeto con el id enviar, se iniciara una función llamada revisar

function revisar() { //Se inicia la función revisar, la cual permite ver si lo que ingreso el usuario corresponde con la base que se marco como primera opción, para luego transformarlo a la base según lo que se marco como segunda opción
  switch(opcion1.value){ //Se hara diversas acciones dependiendo de lo que el usuario marco como primera opción
    case "1": //Se verifica si el usuario solo ingreso caracteres correspondientes a la base Decimal
      contador = 0;
      for (let i = 0; i < contenido.value.length; i++) {
        if (contenido.value[i]==="0" || contenido.value[i]==="1" || contenido.value[i]==="2" || contenido.value[i]==="3" || contenido.value[i]==="4" || contenido.value[i]==="5" || contenido.value[i]==="6" || contenido.value[i]==="7" || contenido.value[i]==="8" || contenido.value[i]==="9") {
          contador += 1;
        }
      }
      if (contador === contenido.value.length){
        continuar = true;
      } else {
        alert("Ocurrio un error");
        continuar = false;
      }
      break;
    case "2": //Se verifica si el usuario solo ingreso caracteres correspondientes a la base Octal
      contador = 0;
      for (let i = 0; i < contenido.value.length; i++) {
        if (contenido.value[i]==="0" || contenido.value[i]==="1" || contenido.value[i]==="2" || contenido.value[i]==="3" || contenido.value[i]==="4" || contenido.value[i]==="5" || contenido.value[i]==="6" || contenido.value[i]==="7") {
          contador += 1;
        }
      }
      if (contador === contenido.value.length){
        continuar = true;
      } else {
        alert("Ocurrio un error");
        continuar = false;
      }
      break;
    case "3": //Se verifica si el usuario solo ingreso caracteres correspondientes a la base Binaria
      contador = 0;
      for (let i = 0; i < contenido.value.length; i++) {
        if (contenido.value[i]==="0" || contenido.value[i]==="1") {
          contador += 1;
        }
      }
      if (contador === contenido.value.length){
        continuar = true;
      } else {
        alert("Ocurrio un error");
        continuar = false;
      }
      break;
    case "4": //Se verifica si el usuario solo ingreso caracteres correspondientes a la base Hexadecimal
      contador = 0;
      for (let i = 0; i < contenido.value.length; i++) {
        if (contenido.value[i]==="0" || contenido.value[i]==="1" || contenido.value[i]==="2" || contenido.value[i]==="3" || contenido.value[i]==="4" || contenido.value[i]==="5" || contenido.value[i]==="6" || contenido.value[i]==="7" || contenido.value[i]==="8" || contenido.value[i]==="9" || contenido.value[i]==="A" || contenido.value[i]==="B" || contenido.value[i]==="C" || contenido.value[i]==="D" || contenido.value[i]==="E" || contenido.value[i]==="F") {
          contador += 1;
        }
      }
      if (contador === contenido.value.length){
        continuar = true;
      } else {
        alert("Ocurrio un error");
        continuar = false;
      }
      break;
    default:
      alert("Error");
      break;
  }
  if (opcion1.value == "1"){ //En caso de que se marque la base Decimal, se hara diversas acciones según lo que se marco como segunda opción
    switch(opcion2.value){ //Se hara diversas acciones dependiendo de lo que el usuario marco como primera opción
      case "5": //La trasformación no se realiza debido a que lo que ingreso el usuario ya esta en base Decimal
        if (continuar) {
          if (opcion1.value === "1") {
            alert("ya esta en esta base");
          }
        }
        break;
      case "6": //Se hace la transfomrción de lo que ingreso el usuario a base Octal
        if (continuar===true) {
          if (opcion1.value === "2") {
            alert("ya esta en esta base");
          } else {
            if (opcion1.value == "1"){
              salir = true;
              resultado = "";
              division = parseInt(contenido.value);
              resto = 0
              while (salir) {
                for (let h = 0; h < 8; h++) {
                  if (parseInt(division)===h) {
                    alert("termino");
                    salir = false;
                  }
                }
                resto = division%8;
                division = parseInt(division/8);
                resultado = resto+""+resultado;
              }
              console.log(resultado,division);
              alert(resultado,division);
            }
          }
        }
        break;
      case "7": //Se hace la transformación de lo que ingreso el usuario a base Binaria
        if (continuar===true) {
          if (opcion1.value === "3") {
            alert("ya esta en esta base");
          } else {
            if (opcion1.value == "1") {
              salir = true;
              resultado = "";
              division = parseInt(contenido.value);
              while (salir) {
                if (parseInt(division/2)===0) {
                  alert("termino");
                  salir = false;
                }
                if (division%2==0) {
                  resultado = "0"+resultado;
                  division = parseInt(division/2);
                } else {
                  resultado = "1"+resultado;
                  division = parseInt(division/2);
                }
              }
              console.log(resultado,division);
              alert(resultado,division);
            }
          }
        }
        break;
      case "8": //Se hace la transformación de lo que ingreso el usuario a base Hexadecimal
        if (continuar===true) {
          if (opcion1.value === "4") {
            alert("ya esta en esta base");
          } else {
            if (opcion1.value == "1") {
              salir = true;
              resultado = "";
              division = parseInt(contenido.value);
              let resto = 0;
              while (salir) {
                for (let j = 1; j < 16; j++) {
                  if (parseInt(division)===j) {
                    alert("termino");
                    salir = false;
                  }
                }
                resto = division%16;
                let letra = "";
                division = parseInt(division/16);
                switch (resto) {
                  case 10:
                    letra = "A";
                    resultado = letra+""+resultado;
                    break;
                  case 11:
                    letra = "B";
                    resultado = letra+""+resultado;
                    break;
                  case 12:
                    letra = "C";
                    resultado = letra+""+resultado;
                    break;
                  case 13:
                    letra = "D";
                    resultado = letra+""+resultado;
                    break;
                  case 14:
                    letra = "E";
                    resultado = letra+""+resultado;
                    break;
                  case 15:
                    letra = "F";
                    resultado = letra+""+resultado;
                    break;
                  default:
                    resultado = resto+""+resultado;
                    break;
                }
              }
              alert(resultado,division);
            }
          }
        }
        break;
      default:
        alert("Error");
        break;
    }
  }
  if (opcion1.value == "2"){ //En caso de que se marque la base Octal, se hara diversas acciones según lo que se marco como segunda opción
    switch(opcion2.value){
      case "5": //Se hace la transformación de lo que ingreso el usuario a base Decimal
        let suma = 0
        let multiplicar = 0
        if (continuar) {
          contador2 = 0;
          for (let jk = 0; jk < contenido.value.length; jk++) {
            multiplicar = 1;
            for (let t = 0; t < jk; t++){
              multiplicar = multiplicar * 8
            }
            suma = suma+(parseInt(contenido.value[contenido.value.length-jk-1])*multiplicar)
          }
        }
        alert(suma);
        break;
      case "6": //La trasformación no se realiza debido a que lo que ingreso el usuario ya esta en base Octal
        if (continuar===true) {
          alert("ya esta en esta base");
        }
        break;
      case "7": //Se hace la transformación de lo que ingreso el usuario a base Binaria
        if (continuar===true) {
          cero = "000";
          uno = "001";
          dos = "010";
          tres = "011";
          cuatro = "100";
          cinco = "101";
          seis = "110";
          siete = "111";
          valor = "";
          for (let jk = 0; jk < contenido.value.length; jk++) {
            switch (contenido.value[contenido.value.length-jk-1]) {
              case "0":
                valor = cero+valor
                break;
              case "1":
                valor = uno+valor
                break;
              case "2":
                valor = dos+valor
                break;
              case "3":
                valor = tres+valor
                break;
              case "4":
                valor = cuatro+valor
                break;
              case "5":
                valor = cinco+valor
                break;
              case "6":
                valor = seis+valor
                break;
              case "7":
                valor = siete+valor
                break;
              default:
                break;
            }
          }
          alert(parseInt(valor))
        }
        break;
      case "8": //Se hace la transformación de lo que ingreso el usuario a base Hexadecimal
        if (continuar===true) {
          cero = "000";
          uno = "001";
          dos = "010";
          tres = "011";
          cuatro = "100";
          cinco = "101";
          seis = "110";
          siete = "111";
          valor = "";
          for (let jk = 0; jk < contenido.value.length; jk++) {
            switch (contenido.value[contenido.value.length-jk-1]) {
              case "0":
                valor = cero+valor
                break;
              case "1":
                valor = uno+valor
                break;
              case "2":
                valor = dos+valor
                break;
              case "3":
                valor = tres+valor
                break;
              case "4":
                valor = cuatro+valor
                break;
              case "5":
                valor = cinco+valor
                break;
              case "6":
                valor = seis+valor
                break;
              case "7":
                valor = siete+valor
                break;
              default:
                break;
            }
          }
          continuar2 = true;
          while (continuar2) {
            if (valor.length%4 == 0){
              continuar2 = false;
            } else {
              valor = "0"+valor;
            }
          }
          contador3 = 0;
          cont = "";
          result = "";
          for (let d = 0; d < valor.length; d++) {
            contador3++;
            cont = cont + valor[d];
            resu = ""
            if (contador3%4==0) {
              switch (cont) {
                case "0000":
                  resu = "0";
                  break;
                case "0001":
                  resu = "1";
                  break;
                case "0010":
                  resu = "2";
                  break;
                case "0011":
                  resu = "3";
                  break;
                case "0100":
                  resu = "4";
                  break;
                case "0101":
                  resu = "5";
                  break;
                case "0110":
                  resu = "6";
                  break;
                case "0111":
                  resu = "7";
                  break;
                case "1000":
                  resu = "8";
                  break;
                case "1001":
                  resu = "9";
                  break;
                case "1010":
                  resu = "A";
                  break;
                case "1011":
                  resu = "B";
                  break;
                case "1100":
                  resu = "C";
                  break;
                case "1101":
                  resu = "D";
                  break;
                case "1110":
                  resu = "E";
                  break;
                case "1111":
                  resu = "F";
                  break;
                default:
                  break;
              }
              result = result + resu;
              cont = "";
            }
          }
          alert(result);
        }
        break;
      default:
        alert("Error");
        break;
    }
  }
  if (opcion1.value == "3"){ //En caso de que se marque la base Binaria, se hara diversas acciones según lo que se marco como segunda opción
    switch(opcion2.value){
      case "5": //Se hace la transformación de lo que ingreso el usuario a base Decimal
        if (continuar) {
          contador3 = 0
          suma = 0
          for (var i = 0; i < contenido.value.length; i++) {
            multiplicar = 1
            contador3 = contador3 + 1
            if (contenido.value[contenido.value.length-i-1] == "1") {
              if (contador != 1){
                for (var df = 0; df < contador3-1; df++) {
                  multiplicar = multiplicar * 2
                }
              }
              suma = suma + multiplicar
            }
          }
        }
        alert(suma);
        break;
      case "6": //Se hace la transfomrción de lo que ingreso el usuario a base Octal
        if (continuar===true) {
          valor = contenido.value;
          continuar4 = true;
          while (continuar4) {
            if (valor.length%3 == 0){
              continuar4 = false;
            } else {
              valor = "0"+valor;
            }
          }
          contador4 = 0;
          cont = "";
          result = "";
          for (let sd = 0; sd < valor.length; sd++) {
            contador4++;
            cont = cont + valor[sd];
            resu = ""
            if (contador4%3==0) {
              switch (cont) {
                case "000":
                  resu = "0";
                  break;
                case "001":
                  resu = "1";
                  break;
                case "010":
                  resu = "2";
                  break;
                case "011":
                  resu = "3";
                  break;
                case "100":
                  resu = "4";
                  break;
                case "101":
                  resu = "5";
                  break;
                case "110":
                  resu = "6";
                  break;
                case "111":
                  resu = "7";
                  break;
                default:
                  break;
              }
              result = result + resu;
              cont = "";
            }
          }
          alert(result);
        }
        break;
      case "7": //La trsformación no se realiza debido a que lo que ingreso el usuario ya esta en base Binaria
        if (continuar===true) {
            alert("ya esta en esta base");
          }
          alert(parseInt(valor))
        break;
      case "8": //Se hace la transformación de lo que ingreso el usuario a base Hexadecimal
        if (continuar===true) {
          valor = contenido.value;
          continuar5 = true;
          while (continuar5) {
            if (valor.length%4 == 0){
              continuar5 = false;
            } else {
              valor = "0"+valor;
            }
          }
          contador3 = 0;
          cont = "";
          result = "";
          for (let d = 0; d < valor.length; d++) {
            contador3++;
            cont = cont + valor[d];
            resu = ""
            if (contador3%4==0) {
              switch (cont) {
                case "0000":
                  resu = "0";
                  break;
                case "0001":
                  resu = "1";
                  break;
                case "0010":
                  resu = "2";
                  break;
                case "0011":
                  resu = "3";
                  break;
                case "0100":
                  resu = "4";
                  break;
                case "0101":
                  resu = "5";
                  break;
                case "0110":
                  resu = "6";
                  break;
                case "0111":
                  resu = "7";
                  break;
                case "1000":
                  resu = "8";
                  break;
                case "1001":
                  resu = "9";
                  break;
                case "1010":
                  resu = "A";
                  break;
                case "1011":
                  resu = "B";
                  break;
                case "1100":
                  resu = "C";
                  break;
                case "1101":
                  resu = "D";
                  break;
                case "1110":
                  resu = "E";
                  break;
                case "1111":
                  resu = "F";
                  break;
                default:
                  break;
              }
              result = result + resu;
              cont = "";
            }
          }
          alert(result);
        }
        break;
      default:
        alert("Error");
        break;
    }
  }
}
