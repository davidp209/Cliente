// UT2 Eventos

window.onload = function() { 

var resultado = document.getElementById("Resultado");


  // Bubbling. Del más específico al menos específico
  // Capturing. Del menos específico al más específico

function escribir(event) {
	
	console.log("ESCRIBIR");
	console.log(event.currentTarget.id);
	
	
}


// MANEJADOR DEL EVENTO
function muestraMensaje(evento) {

	
	if (evento.currentTarget.id == "Botonera")
   		resultado.innerHTML+= "Botonera";
	if (evento.currentTarget.id == "boton1") 
		resultado.innerHTML+= "Hola";
	if (evento.currentTarget.id == "boton2") 
		resultado.innerHTML+= "Adios";
	if (evento.currentTarget.id == "cuerpo") 
		resultado.innerHTML+= "Body";
	
	console.log(evento.type);
	console.log(evento.currentTarget.id);



}

//escribir(3);


// por defecto bubbling este va de dentro hacia afuera
/*
document.getElementById("boton1").onclick   = muestraMensaje;
document.getElementById("boton2").onclick   = muestraMensaje;
document.getElementById("Botonera").onclick = muestraMensaje;
document.getElementById("cuerpo").onclick   = muestraMensaje;
*/

/* bubbling dentro hacia afuera

document.getElementById("boton1").addEventListener("click", muestraMensaje, false);
document.getElementById("boton2").addEventListener("click", muestraMensaje, false);
document.getElementById("Botonera").addEventListener("click", muestraMensaje, false);
document.getElementById("cuerpo").addEventListener("click", muestraMensaje, false);

*/

/* capturing fuera hacia adentro
*/
document.getElementById("boton1").addEventListener("click", muestraMensaje, true);
document.getElementById("boton2").addEventListener("click", muestraMensaje, true);
document.getElementById("Botonera").addEventListener("click", muestraMensaje, true);
document.getElementById("cuerpo").addEventListener("click", muestraMensaje, true);

}















