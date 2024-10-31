window.onload = function () {
    let listacuadrado = [];
    const numerodecuadrados = 5;
    
    class Rectangulo {
    constructor() {
    this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.x = Math.random() * 575;
    this.y = 0;
    this.lado = 25;
    this.velocidad = 3 * Math.random() + 1;
    this.terminado = false;
    }
    }
    
    function crearListas() {
    for (let index = 0; index < numerodecuadrados; index++) {
    let rec1 = new Rectangulo();
    listacuadrado.push(rec1);
    }
    }
    
    function generaAnimación() {
    let contador = 0;
    
    ctx.clearRect(0, 0, 600, 400);
    
    listacuadrado.forEach((element, indice) => {
    ctx.fillStyle = element.color;
    ctx.fillRect(element.x, element.y, element.lado, element.lado);
    
    if (element.y >= 375) {
    element.terminado = true;
    contador++;
    listacuadrado.splice(indice, 1);
    } else {
    element.y = element.y + element.velocidad;
    if (element.y > 375) {
    element.y = 375; // Ajuste para alinearlos al final
    }
    }
    });
    
    if (contador === numerodecuadrados) {
    clearInterval(id);
    console.log("terminado");
    }
    }
    
    const canvas = document.getElementById("miCanvas");
    const ctx = canvas.getContext("2d");
    
    crearListas();
    let id = setInterval(generaAnimación, 50);
    generaAnimación();
    };