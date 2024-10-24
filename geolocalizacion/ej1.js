// UT2 geolocalización

window.onload = function() { 

   if (navigator.geolocation) {
   
	   document.getElementById("geolocaliza").innerHTML = "Geolocalización soportada";
   
   } else {
   
     document.getElementById("geolocaliza").innerHTML = "Geolocalización NO soportada";
   
   }

}


