window.onload = function () {


    function ordenarFecha(a, b) {

        const fechaA = new Date(a.fechaConsecucion.split('/').reverse().join('-'));
        const fechaB = new Date(b.fechaConsecucion.split('/').reverse().join('-'));

        
        return fechaA - fechaB;


    }

    let Ordenados = alumnosReconocidos.toSorted(ordenarFecha);

   
    let final=[];//este es el array que vamso a mostrar


    Ordenados.forEach(element => {
        //forEach en reconocimientosOrdenados, cada element es uno de los objetos que han sido ordenados.
        // Así que, dentro de la función forEach,
        // element se refiere a uno de esos objetos y tiene acceso a todas sus propiedades, incluyendo nombre.
        final.push({nombre: element.nombre, total: element.alumnos.length})
        // cuenta cuántos alumnos hay en la propiedad alumnos del mismo objeto.
        
    }
    );


    console.log("Datos iniciales");
	console.table(alumnosReconocidos);
	
	console.log("Datos modificados");
    console.table(final);
	 




}