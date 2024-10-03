window.onload = function () {
    let persona = {
        nombre: "david",
        apellidos: "paredes",
        edad: "19",

        jubilacion(edad) {
            resultado = 65 - 19;
            return resultado;
        },
    };


console.log( persona.nombre +" " +persona.apellidos+ " tiene "+ persona.edad +" años y le quedan "+ persona.jubilacion(persona.resultado)+ "años para jubilarse"
)

persona.estatura =20  ;

console.log( persona.nombre +" " +persona.apellidos+ " tiene "+ persona.edad +" años y mide "+ persona.estatura+ " centímetros")


Object.prototype.mensajeJubilacion = function(){

    return"Veremos a ver si no te jubilas a los 80";

}
console.log(persona.mensajeJubilacion())

};
