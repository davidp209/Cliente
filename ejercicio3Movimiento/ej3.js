// UT2 cookies

window.onload = function () {
	let listacuadrado = [];
	const numerodecuadrados = 5;

  class rectangulo {
    constructor() {
		this.color =  "#" + Math.floor(Math.random() * 16777215).toString(16);
      this.x = Math.random() * 575;
      this.y = 0;
      this.lado = 25;
      this.velocidad = 1 + Math.random();
      this.terminado = false;
    }
  }


  function crearListas() {
    for (let index = 0; index < numerodecuadrados; index++) {
      let rec1 = new rectangulo();

      listacuadrado.push(rec1)
    }
	//console.table(listacuadrado);
  }

  
 function generaAnimación() {

	let contador =0;

	ctx.clearRect(0, 0, 600, 400);

	listacuadrado.forEach(element => {
		let elementodelarray = element;
		ctx.fillStyle =  elementodelarray.color;
		ctx.fillRect(elementodelarray.x, elementodelarray.y, elementodelarray.lado, elementodelarray.lado);
		if (elementodelarray.y>=375) {
		 
			elementodelarray.terminado = true;
			contador++;
		}
		else elementodelarray.y=elementodelarray.y+elementodelarray.velocidad;

	});
	if (contador === numerodecuadrados) {
		clearInterval(id);
		console.log("terminado");
		
	}


}

  // Obtenemos una referencia al canvas
  canvas = document.getElementById("miCanvas");

  // Y a su contexto 2d
  ctx = canvas.getContext("2d");

  crearListas();

  let id = setInterval(generaAnimación, 1000 / 30);


  generaAnimación();
  

};
