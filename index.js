const form = document.forms['registrar'];
let contenido = document.getElementById('text');
let opcion1 = document.getElementById('opcionEntrada');
let opcion2 = document.getElementById('opcionSalida');

form.onsubmit = (event) => {
  event.preventDefault();
  console.log(contenido.value);
  console.log(opcion1.value);
  console.log(opcion2.value);
}

let caracteres = ["!",'"',"#","$"];

switch(opcion1){
  case "Decimal":
    break;
  case "Octal":
    break;
  case "Binaria":
    for (let i = 0; i < contenido.length; i++) {
      if (contenido[i]==="0") {
        alert("0");
      }
    }
    break;
  case "Hexadecimal":
    break;
  default:
    alert("Error");
}

switch(opcion2){
  case "Decimal":
    break;
  case "Octal":
    break;
  case "Binaria":
    break;
  case "Hexadecimal":
    break;
  default:
    alert("Error");
}
