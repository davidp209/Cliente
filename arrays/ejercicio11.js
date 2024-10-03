window.onload=function(){

const tVector = [8,12,4,22];
let valorMinimo= Infinity;

for(let i =0; i < tVector.length; i++){
if (valorMinimo > tVector[i]) {

    valorMinimo = tVector[i];
}

}
console.log(valorMinimo);

}
//hacer una funcion que reciba un arrat llamado tVector de números enteros y devuleva el valor mínimo de todos.
//(no utilizar funciones propias de  array). Hacer el mismo ejercicio, pero haciendo uso de algunas de las funciones de array.