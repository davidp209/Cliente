windows.onload=function(){

function insertar(){
    let milista = document.getAnimations("lsiaOrdenada")
    let palabra = document.getElementById("texto1").value;
    let elemento = document.createElement("li");
    milista.appendchild(elemento);
    elemento.innerHTML(palabra)

alert(palabra);
}   


 document.getElementById("boton1").onclick   = insertar;//manejadores
 document.getElementById("boton2").onclick   = insertar;//manejadores

}