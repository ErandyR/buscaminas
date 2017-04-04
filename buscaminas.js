var botonNumero = document.getElementsByClassName("numero");
var botonBomba = document.getElementsByClassName("bomba");
var botonCambiarColor = document.getElementsByClassName("vacio");

for(var i=0; i<botonNumero.length; i++){
  botonNumero[i].addEventListener("click", mostrarNumero);
  console.log(botonNumero);
}
for(var i=0; i<botonBomba.length; i++){
  botonBomba[i].addEventListener("click", mostrarBomba);
}
for(var i=0; i<botonCambiarColor.length; i++){
  botonCambiarColor[i].addEventListener("click", cambiarColor);
}

function mostrarNumero(){
this.innerText = "1";

}
function mostrarBomba(){
  var miImagen = document.createElement("img");
  miImagen.setAttribute("src", "assets/bomba.ico");
  miImagen.setAttribute("width","25px");
  miImagen.setAttribute("height","25px");
  this.appendChild(miImagen);
}
function cambiarColor(){

  this.style.backgroundColor = "#C3F3D7"
}
