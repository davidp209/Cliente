// UT2 geolocalización

window.onload = function() { 

   // Función encargada de escribir en nuestro documento HTML la ubicación extraida 
   function obtenerCoordenadas (position) {
   
    document.getElementById("coordenadas").innerHTML = "Longitud = "  + position.coords.longitude + "<br>" +
										 			   "Latitud = "   + position.coords.latitude  + "<br>" +
													   "Altitud = "   + position.coords.altitude  + "<br>" + 
													   "Precisión = " + position.coords.accuracy  + "<br>" +
													   "Grados respecto al norte = " +	position.coords.heading + "<br>";
   }
   
   // Función encargada de gestionar los diferentes errores que se puede producir en el momento de la geolocalización
   function gestionError(error) {
   
	   switch (error.code) {
	   
		 case error.UNKNOWN_ERROR: document.getElementById("coordenadas").innerHTML       = "Error en la geolización"; break;
		 case error.PERMISSION_DENIED: document.getElementById("coordenadas").innerHTML    = "El usuario no ha autorizado el acceso a su posición"; break;
		 case error.POSITION_UNAVAILABLE: document.getElementById("coordenadas").innerHTML = "El usuario no puede ser geolizado"; break;
		 case error.TIMEOUT: document.getElementById("coordenadas").innerHTML              = "La geolización ha excedido el tiempo límite"; break;
	   
	   }
   }
   
   // Función encargada de lanzar el proceso de geolocalización con las opciones deseadas
   function generarLocalización() {
   
		let opciones = { enableHighAccuracy : true,
						 timeout : 6000,
						 maximumAge : 4500}
   
		navigator.geolocation.getCurrentPosition(obtenerCoordenadas, 
		                                         gestionError, 
												 opciones);
   }

   
   // Comprobamos si la geolocalización está permitida o no lo está.
   if (navigator.geolocation) {
   
	   document.getElementById("geolocaliza").innerHTML = "Geolocalización soportada";
	   
	   document.getElementById("coordenadasBoton").onclick = generarLocalización;
	   
   } else {
   
     document.getElementById("geolocaliza").innerHTML = "Geolocalización NO soportada";
   
   }

}


