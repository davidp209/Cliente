window.onload=function(){
let persona = new Object();
persona.nombre = "David";
persona.apellido = "Paredes";
persona.edad = 19;

persona.jubilacion= function() {
    resultado = 65 - this.edad;
    return resultado;
};

console.log( persona.nombre +" " +persona.apellido+ " tiene "+ persona.edad +" años y le quedan "+ persona.jubilacion(persona.resultado)+ " años para jubilarse"
);
persona.estatura = 19;
console.log( persona.nombre +" " +persona.apellido+ " tiene "+ persona.edad +" años y mide "+ persona.estatura+ " centímetros")

Object.prototype.mensajeJubilacion = function(){

    return"Veremos a ver si no te jubilas a los 80";

}
console.log(persona.mensajeJubilacion())

}