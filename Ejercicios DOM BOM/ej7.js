window.onload= function(){
    
  
    function abrir(){

       const casilla = document.getElementsByName('ciudad');

       let ciudad;

       casilla.forEach(element => {
        if(element.checked){

            ciudad = element.value;

        }
       });
       alert(ciudad);
    }


     document.getElementById('consultar').onclick= abrir;

    



}