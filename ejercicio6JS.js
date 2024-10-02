window.onload = function() {

    let nota1 = prompt("Introduce la nota del primer alumno");
    let nota2 = prompt("Introduce la nota del segundo alumno");
    let nota3 = prompt("Introduce la nota del tercer alumno");

    let promedio = (+nota1+(+nota2)+(+nota3))/3;

    if (promedio>=7){
        alert("Promociona");

    }else{
        alert("No promociona");


    }
}


