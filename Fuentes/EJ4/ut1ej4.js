window.onload = function () {


    


    let proyectosFiltrados = proyectos.filter(proyecto => 
        proyecto.participantes.includes("Andrea Guardia"));//utilizo el filert qeu hace una iteracion de los elementos
        //y me los filtra por los participantes que se llaman asi.
    
    
    
    


    console.log("Datos iniciales");
	console.table(proyectos);
	
	console.log("Datos modificados");
    console.table(proyectosFiltrados)
	 




}