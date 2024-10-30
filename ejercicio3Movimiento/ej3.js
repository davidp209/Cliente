// UT2 cookies

window.onload = function () {
	let listacuadrado = [];

  class rectangulo {
    constructor() {
      this.x = Math.random() * 575;
      this.y = 0;
      this.lado = 25;
      this.velocidad = 1 + Math.random();
      this.terminado = false;
    }
  }


  function crearListas() {
    for (let index = 0; index < 5; index++) {
      let rec1 = new rectangulo();

      listacuadrado.push(rec1)
    }
	//console.table(listacuadrado);
  }




 function generaAnimación() {


	ctx.clearRect(0, 0, 600, 400);

	listacuadrado.forEach(element => {
		let algo = element;
		ctx.fillStyle = "#FF0000";
		ctx.fillRect(algo.x, algo.y, algo.lado, algo.lado);
		if (algo.y>=375) {
		 
			algo.terminado = true;
		}
		else algo.y=algo.y+algo.velocidad
		;

	});
	


}

  // Obtenemos una referencia al canvas
  canvas = document.getElementById("miCanvas");

  // Y a su contexto 2d
  ctx = canvas.getContext("2d");

  crearListas();

  let id = setInterval(generaAnimación, 1000 / 30);


  generaAnimación();
  

};
