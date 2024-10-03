window.onload=function(){

let numeros = [1,2,3,4,5,6,7,8,9];
let pares=[];
let impares=[];

for(i=0; i<numeros.length; i++){

if(numeros[i]%2==0){
pares+=numeros[i];

}else{
impares+=numeros[i];
}
}

for (i=0; i<pares.length; i++){
console.log(pares[i]);
}

//console.log(pares);
console.log(impares);

}