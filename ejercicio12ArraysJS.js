window.onload = function() {


  let x=prompt("introduce un numero del 1 al 10");
  const tVector=[5,4,2,6];
  let resultado=-1;


  for(let i=0; i<tVector.length; i++){

    if (+x===tVector[i]){

        resultado=[i];
        break;
   
    }
  }
  console.log(resultado);
    




  
    }
    