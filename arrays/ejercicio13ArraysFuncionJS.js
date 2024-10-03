window.onload=function(){


    let numeros = [1,2,3,4,5,6,7,8,9];
   // let pares=[];
   // let impares=[];
   
    /*
    function pares(value, index, array){

        return numeros%2==0;
    }

    console.log(numeros.filter(pares);
*/

    function pares(value){

        return value%2==0;
    }

    console.log(numeros.filter(pares));

    function impares(value){

        return value%2!==0;
    }

    console.log(numeros.filter(impares));



}