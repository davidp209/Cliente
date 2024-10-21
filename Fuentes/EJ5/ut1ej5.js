window.onload = function(){

    function numProyectos (valor){

        return valor.tutor.includes("Víctor");//cuenta los proyectos que su tutuor es victor


    }

    console.log("Datos iniciales");
	console.table(proyectos);

    console.log("Proyectos del tutor Víctor")
    console.table(proyectos.filter(numProyectos).length);//lo filtra a traves de la funcion 

}