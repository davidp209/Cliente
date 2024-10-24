// UT2 geolocalización

window.onload = function() { 

   function verMapa (longitud_, latitud_) {
   
   
    // Creamos el mapa con las coordenadas y el nivel de zooom
    let mapa = L.map("mapa").setView([latitud_, longitud_], 15);	//el 15 es el zoom 

	//Añadimos un mapa base como tile layer, en este caso las imágenes de OSM
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
			{attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
			maxZoom: 38
			}).addTo(mapa);

// Diferentes tipos de mapas que podemos añadir http://leaflet-extras.github.io/leaflet-providers/preview/

// Mapa físico y político
 L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(mapa);

			
    // Marca con nuestra ubicación
	let miUbicación = L.marker([latitud_, longitud_]).addTo(mapa);

	miUbicación.bindPopup("<b>Hello world!</b><br>Por aquí ando más o menos.").openPopup();
   }


   // Función encargada de escribir en nuestro documento HTML la ubicación extraida 
   function obtenerCoordenadas (position) {
   
    document.getElementById("coordenadas").innerHTML = "Longitud = "  + position.coords.longitude + "<br>" +
										 			   "Latitud = "   + position.coords.latitude  + "<br>" +
													   "Altitud = "   + position.coords.altitude  + "<br>" + 
													   "Precisión = " + position.coords.acciracy  + "<br>" 
													   
													   
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


