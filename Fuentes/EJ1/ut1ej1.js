window.onload = function() { 



	function ordenarPorNombre(a, b) {//ordena por cada elemento alfabeticamente 

		if (a.tutor > b.tutor) return -1;
		else if (a.tutur<b.tutor) return 1;
		else return 0;
	}
	

	console.log("Datos iniciales");
	console.table(proyectos);
	
	console.log("Datos modificados");
	console.table(proyectos.toSorted(ordenarPorNombre));//ordena crando un array nuevo 
	
	
}


