// UT2 localStorage vs sessionStorage

// Crea un campo textarea que “autoguarde” sus valores en cada cambio. Si el usuario cierra 
// accidentalmente la página y la abre de nuevo, encontrará su entrada inacabada en su lugar.

// Hecho con ambos métodos de almacenaje para ver las diferencias

window.onload = function() { 

	// *** funciones localStorage ----------------------------------------------
    function recuperarDatoLocal() {		
		
		// Devuelve el valor almacenado en el item "area"
		return localStorage.getItem("area");		
	}

	function almacenarDatoLocal() {
		
		// Almacena un valor en el item "area"
		localStorage.setItem("area", document.getElementById("areaL").value);		
	}

	// ---------------------------------------------------------------------------

	// *** funciones sessionStorage ----------------------------------------------
	
    function recuperarDatoSesion() {		
		
		// Devuelve el valor almacenado en el item "area"
		return sessionStorage.getItem("area");		
	}

	function almacenarDatoSesion() {
		
		// Almacena un valor en el item "area"
		sessionStorage.setItem("area", document.getElementById("areaS").value);		
	}

	//------------------------------------------------------------------------------

	function resetearDatos() {
		
		// Elimina el item de almacenamiento "area"
		localStorage.removeItem("area");		
		sessionStorage.removeItem("area");		
	}




	// Recuperamos el datos que pudiera estar almacenado en el text area
	document.getElementById("areaL").value = recuperarDatoLocal();
	document.getElementById("areaS").value = recuperarDatoSesion();

	// Vamos almacenando el valor del campo conforme lo vamos introduciendo
	document.getElementById("areaL").oninput = almacenarDatoLocal;
	document.getElementById("areaS").oninput = almacenarDatoSesion;

	// Reseteamos el localStorage
	document.getElementById("boton").onclick = resetearDatos;



}


