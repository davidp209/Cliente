window.onload=function(){

class Persona{
    constructor(_nombre,_edad,_genero){

        this.nombre= _nombre;
        this.edad= _edad;
        this.genero=_genero;

    }
obtenerDetalles(){

    return (this.nombre + " tiene ")  ;
}



}
let pesoan = new Persona("david",12,"masculino");

console.log(pesoan.obtenerDetalles());


class Estudiante extends Persona{
    constructor(_curso, _grupo){
        super(_nombre,_edad,_genero);//en el super hay que poner los atributos de super 
        this.curso = _curso;
        this.grupo = _grupo;



    }
}

class Profesor extends Persona{

    constructor(){
        super();
        this.asignatura = "cliente";
        this.nivel = "2"
    }
}
let alu1 = new Estudiante("antonio",12, "hombre", "Daw", "segundo");

}