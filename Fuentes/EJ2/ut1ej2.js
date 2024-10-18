window.onload = function() { 



	function ordenarFecha(a, b) {

        const fechaA = new Date(a.fechaConsecucion.split('/').reverse().join('-'));
        const fechaB = new Date(b.fechaConsecucion.split('/').reverse().join('-'));
       
        // Comparar las fechas en orden descendente
        return fechaB - fechaA;
        

    }


	console.log("Datos iniciales");
	console.table(reconocimientosAlumno);
	
	console.log("Datos modificados");
	console.table(reconocimientosAlumno.reconocimientos.toSorted(ordenarFecha));
	
	
}

