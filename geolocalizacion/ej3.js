// UT2 geolocalización

window.onload = function() { 

   function verMapa (longitud_, latitud_) {
   
	let posicion = new google.maps.LatLng(latitud_, longitud_);//crea una posicion del mapa a traves de la longitud y la latitud
	
	// Opciones del mapa
	let opciones = { zoom : 30,
	                 center: posicion,
					 myTypeId : google.maps.MapTypeId.ROADMAP //tipo se puede cambiar 
	                };//meter los parametros que quereemso 
   
    // Mapa
	let mapa = new google.maps.Map(document.getElementById("mapa"), opciones);//con esto se crea el mapa 
	
	
	// Marcador de ubicación
	let miUbicacion = new google.maps.Marker({	//con esto la chincheta
	   position : posicion,
	   map      : mapa,
	   title    : "Usted se encuentra aquí"
	
	});
   
   }


   // Función encargada de escribir en nuestro documento HTML la ubicación extraida 
   function obtenerCoordenadas (position) {
   
    document.getElementById("coordenadas").innerHTML = "Longitud = "  + position.coords.longitude + "<br>" +
										 			   "Latitud = "   + position.coords.latitude  + "<br>" +
													   "Altitud = "   + position.coords.altitude  + "<br>" + 
													   "Precisión = " + position.coords.accuracy  + "<br>" 
													   
													   
    verMapa(position.coords.longitude, position.coords.latitude);													   
													   
   }
   
   // Función encargada de gestionar los diferentes errores que se puede producir en el momento de la geolocalización
   function gestionError(error) {
   
	   switch (error.code) {
	   
		 case error.UNKNOWON_ERROR: document.getElementById("coordenadas").innerHTML       = "Error en la geolización"; break;
		 case error.PERMISSION_DENIED: document.getElementById("coordenadas").innerHTML    = "El usuario no ha autorizado el acceso a su posición"; break;
		 case error.POSITION_UNAVAILABLE: document.getElementById("coordenadas").innerHTML = "El usuario no puede ser geolización"; break;
		 case error.TIMEOUT: document.getElementById("coordenadas").innerHTML              = "La geolización ha excedido el tiempo límite"; break;
	   
	   }
   }
   
   // Función encargada de lanzar el proceso de geolocalización con las opciones deseadas
   function generarLocalización() {
   
		let opciones = { enableHighAccuracy : true,
						 timeout : 6000,
						 maximumAge : 4500}
   
		navigator.geolocation.getCurrentPosition(obtenerCoordenadas, gestionError, opciones);
   }

   // Comprobamos si la geolocalización está permitida o no lo está.
   if (navigator.geolocation) {
   
	   document.getElementById("geolocaliza").innerHTML = "Geolocalización soportada";
	   
	   document.getElementById("coordenadasBoton").onclick = generarLocalización;
	   
   } else {
   
     document.getElementById("geolocaliza").innerHTML = "Geolocalización NO soportada";
   
   }

}


