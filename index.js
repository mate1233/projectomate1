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
        break;
      case "7":
        if (continuar===true) {
          if (opcion1.value === "3") {
            alert("ya esta en esta base");
          } else {
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
        break;
      case "8":
        if (continuar===true) {
          if (opcion1.value === "4") {
            alert("ya esta en esta base");
          } else {
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
              division = parseInt(division/16);
              resultado = resto+" "+resultado;
            }
            console.log(resultado,division);
            alert(resultado,division);
          }
        }
        break;
      default:
        alert("Error");
        break;
    }

}
