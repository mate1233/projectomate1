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

form.onsubmit = (event) => {
  event.preventDefault();
  console.log(contenido.value);
  console.log(opcion1.value);
  console.log(opcion2.value);
}

let caracteres = ["!",'"',"#","$"];

document.getElementById('enviar').addEventListener("click",revisar);

function revisar() {
  switch(opcion1.value){
    case "1":
      contador = 0;
      for (let i = 0; i < contenido.value.length; i++) {
        if (contenido.value[i]==="0" || contenido.value[i]==="1" || contenido.value[i]==="2" || contenido.value[i]==="3" || contenido.value[i]==="4" || contenido.value[i]==="5" || contenido.value[i]==="6" || contenido.value[i]==="7" || contenido.value[i]==="8" || contenido.value[i]==="9") {
          contador += 1;
        }
      }
      if (contador === contenido.value.length){
        alert("Siga");
        continuar = true;
      } else {
        alert("Pare");
        continuar = false;
      }
      break;
    case "2":
      contador = 0;
      for (let i = 0; i < contenido.value.length; i++) {
        if (contenido.value[i]==="0" || contenido.value[i]==="1" || contenido.value[i]==="2" || contenido.value[i]==="3" || contenido.value[i]==="4" || contenido.value[i]==="5" || contenido.value[i]==="6" || contenido.value[i]==="7") {
          contador += 1;
        }
      }
      if (contador === contenido.value.length){
        alert("Siga");
        continuar = true;
      } else {
        alert("Pare");
        continuar = false;
      }
      break;
    case "3":
      contador = 0;
      for (let i = 0; i < contenido.value.length; i++) {
        if (contenido.value[i]==="0" || contenido.value[i]==="1") {
          contador += 1;
        }
      }
      if (contador === contenido.value.length){
        alert("Siga");
        continuar = true;
      } else {
        alert("Pare");
        continuar = false;
      }
      break;
    case "4":
      contador = 0;
      for (let i = 0; i < contenido.value.length; i++) {
        if (contenido.value[i]==="0" || contenido.value[i]==="1" || contenido.value[i]==="2" || contenido.value[i]==="3" || contenido.value[i]==="4" || contenido.value[i]==="5" || contenido.value[i]==="6" || contenido.value[i]==="7" || contenido.value[i]==="8" || contenido.value[i]==="9" || contenido.value[i]==="A" || contenido.value[i]==="B" || contenido.value[i]==="C" || contenido.value[i]==="D" || contenido.value[i]==="E" || contenido.value[i]==="F") {
          contador += 1;
        }
      }
      if (contador === contenido.value.length){
        alert("Siga");
        continuar = true;
      } else {
        alert("Pare");
        continuar = false;
      }
      break;
    default:
      alert("Error");
      break;
  }
  if (opcion1.value == "1"){
    switch(opcion2.value){
      case "5":
        if (continuar) {
          if (opcion1.value === "1") {
            alert("ya esta en esta base");
          }
        }
        break;
      case "6":
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
      case "7":
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
      case "8":
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
  if (opcion1.value == "2"){
    switch(opcion2.value){
      case "5":
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
      case "6":
        if (continuar===true) {
          alert("ya esta en esta base");
        }
        break;
      case "7":
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
      case "8":
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
  if (opcion1.value == "3"){
    switch(opcion2.value){
      case "5":
        if (continuar) {
          contador3 = 0
          suma = 0
          for (var i = 0; i < contenido.value.length; i++) {
            multiplicar = 1
            contador3 = contador3 + 1
            if (contenido.value[contenido.value.length-i-1] == "1") {
              if (contador != 1){
                for (var df = 0; df < contador3; df++) {
                  multiplicar = multiplicar * 2
                }
              }
              suma = suma + multiplicar
            }
          }
        }
        alert(suma);
        break;
      case "6":
        if (continuar===true) {

        }
        break;
      case "7":
        if (continuar===true) {

          }
          alert(parseInt(valor))
        break;
      case "8":
        if (continuar===true) {

        }
        break;
      default:
        alert("Error");
        break;
    }
  }
}
