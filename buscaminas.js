var botonNumero = document.getElementById("numero");
//var botonBomba = document.getElementsByClassName("bomba");
//var botonCambiarColor = document.getElementsByClassName("vacio");

botonNumero.addEventListener("click", mostrarNumero);


console.log(botonNumero);
function mostrarNumero(){
botonNumero.innerHTML = "1";
}
