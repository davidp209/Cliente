window.onload=function(){


let nodoHtml1 = document.childNodes[0];
//let nodoHtml1 = document.children[0];
//let nodoHtml1 = document.firstchild;
//let nodoHtml1 = document.getElementsByTagName("html");
//let nodoHtml1 = document.querySelector("html");
//let nodoHtml1 = document.documentElement;





//para mostrar se hace asi 
console.log("a");
console.log(nodoHtml1);
//acceso al nodo body

let nodobody = document.getElementsByTagName("body")

console.log("b");
console.log(nodobody[0])


//c
//let primernodo = document.getElementsByTagName("p");
let primernodo = document.body.getElementsByTagName("p");


console.log("c");
console.log(primernodo[0]);

//d
// Acceso al segundo nodo P desde Document 

let segudnoelemento = document.getElementsByTagName("p")

console.log("d");
console.log(segudnoelemento[1])

//e
//Acceso al primer hijo de document (Html), desde éste accedemos a su último hijo (body) y desde éste accedemos al tercer nodo

let primerhijo = document.firstChild;
let ultimohijo = document.lastChild;
let tercernodo = document.getElementById("TextoExcitante")


console.log("e");
console.log(primerhijo);
console.log(ultimohijo);
console.log(tercernodo);


//f
//Acceso a todos los párrafos
console.log("f");
let todosLosParrafos = document.getElementsByTagName("p");
console.log(todosLosParrafos);



}