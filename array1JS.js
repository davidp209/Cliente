window.onload=function(){

let tVector=[6,8,11,23,3]
let numMenor=tVector[0];


for(i=0; i<tVector.length; i++){
    
    if(numMenor>tVector[i]){

        numMenor=tVector[i];

    }

}

console.log(numMenor);
alert(numMenor);

}