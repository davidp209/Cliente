window.onload = function () {


    function ordenarFecha(a, b) {//ordeno por fecha de consecucion, de esta manera voy comparando cada
        //fecha qeu hay en el mok 

        const fechaA = new Date(a.fechaConsecucion.split('/').reverse().join('-'));
        const fechaB = new Date(b.fechaConsecucion.split('/').reverse().join('-'));

        
        return fechaA - fechaB;


    }

    let Ordenados = alumnosReconocidos.toSorted(ordenarFecha);

   
    let final=[];//este es el array que vamso a mostrar


    Ordenados.forEach(element => {
       
        final.push({nombre: element.nombre, total: element.alumnos.length})
        //con este foreach en cada iteracion lo que hago es que me meta un elemento nuevo
        //al array que he creado anteriormente 
    }
    );


    console.log("Datos iniciales");
	console.table(alumnosReconocidos);
	
	console.log("Datos modificados");
    console.table(final);
	 




}