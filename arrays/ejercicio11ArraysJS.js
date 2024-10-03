window.onload = function() {

const tVector=[4,6,2,8];

let numeroMinimo=Infinity;

for(i=0; i<tVector.length; i++){

    if(numeroMinimo>tVector[i])
numeroMinimo=tVector[i];

}

console.log(numeroMinimo);




}


