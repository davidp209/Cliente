window.onload=function(){

    
    let movimientos = 5;
   

    myWindow =  window.open("","","width=300, height=200" )//me habre una ventana nueva, valores son URL,name,specs,replace

    function moverMiventana() {

        if(movimientos>0){
            let num1 = Math.random() * (800 - 300);;
            let num2 = Math.random() * (800 - 300);;

            myWindow.moveTo(num1, num2);
            movimientos --;
            myWindow.document.body.innerHTML = `Coordenadas: (${num1}, ${num2})`;



        
        }else {
            myWindow.close();
            clearInterval(intervalo);
        }

    
    }

    const intervalo = setInterval(moverMiventana, 1000); // Llama a la función cada segundo




}