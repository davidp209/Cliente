window.onload = function() { 



	function ordenarFecha(a, b) {

        const fechaA = new Date(a.fechaConsecucion.split('/').reverse().join('-'));//split  Divide la cadena de fecha
        // en un arreglo usando el carácter / como delimitador.
        const fechaB = new Date(b.fechaConsecucion.split('/').reverse().join('-'));
       
        // Comparar las fechas en orden descendente
        return fechaB - fechaA;
        

    }


	console.log("Datos iniciales");
	console.table(reconocimientosAlumno);
	
	console.log("Datos modificados");
	console.table(reconocimientosAlumno.reconocimientos.toSorted(ordenarFecha));
	
	
}

