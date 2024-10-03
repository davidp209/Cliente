window.onload = function() {

let array1=[2,5,4,2,2,3,6,6,6,3];
let array2=[3,2,4,1,2];



function patron(arrayA){
let repeticiones=1;

for (i=1; i<arrayA.length; i++){

    if(arrayA[i]===arrayA[i-1]){
        repeticiones++;
    }
}
return repeticiones;
}

console.log(patron(array1));
console.log(patron(array2));


}