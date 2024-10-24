// UT2 Eventos

window.onload = function() { 


function setCookie(cname,cvalue,exdays) {
	
  // Función que crea la cookie. Recibe como parámetro
  //
  //	cname  : Nombre de la cookie
  //    cvalue : Valor de la cookie
  //    exdays : Número de días que tendrá vigencia la cookie
  //
  
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  
}

function getCookie(cname) {
	
  // Función que recupera el valor de una cookie. Recibe como parámetro
  //
  //	cname : Nombre de la cookie
  //
  //    Funcionamiento
  //    
  //	1. Transformamos la cadena de cookies para quitar los posibles caracteres de escape existentes ($, /, ...)
  //    2. Transforma la cadena de cookies decodificada en un array de cookies
  //    3. Recorremos el array de cookies 
  //         3.1. Quitamos posibles espacios al comienzo de cada una de ellas
  //         3.2. Buscamos el nombre de la cookie buscada("username") con las cookies existentes (username=xxxxx ), usamos IndexOf
  //         3.3. Devolvemos el valor de la cookie (username=xxxxx), hacemos para ello un substring de la cadena desde
  //              el tamaño del nombre hasta el tamaño de la cadena completa, en nuestro caso  desde 8 (tamaño de "username") hasta
  //              hasta el final.
  
  var name = cname + "=";
  console.log(document.cookie);
  // 1.
  var decodedCookie = decodeURIComponent(document.cookie);
  console.log(decodedCookie);
  // 2.
  var ca = decodedCookie.split(';');
  console.log(ca);
  // 3.
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
	console.log(c);
    // 3.1.
	while (c.charAt(0) == ' ') {
      c = c.substring(1);
	  console.log("T " + c);
    }
	// 3.2.
    if (c.indexOf(name) == 0) {
	  // 3.3.
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  
  // Función que chequea el estado de la cookie "username"
  //
  // 	Funcionamiento
  //
  //	1. Comprueba si la coookie existe llamando a la función getCookie.
  //	2. Si la función devuelve un valor es porque la cookie existe y por tanto muestra su valor
  //    3. Si la función NO devuelve ningún valor es porque la cookie no existe, por tanto solicita al 
  //    usuario un valor para la cookie y la crea llamando a la función setCookie.
  
	
  // 1. 
  var user=getCookie("username");
  
  // 2.
  if (user != "") {
    alert("Welcome again " + user);
  
  // 3.
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}



// Lanzamos el proceso
document.getElementById("Botonera").onclick = checkCookie;



}


