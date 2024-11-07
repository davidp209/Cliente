// UT4 - Animaciones

window.onload = function() { 

	const TOPEDERECHA = 473;
	const TOPIZQUIERDA = 0;
	const TOPEINFERIOR  = 485;
	const TOPESUPERIOR  = 0;


	let x=0;        // posición inicial x del rectángulo
	let y=0;      // posición inicial y del rectángulo
	let canvas;     // variable que referencia al elemento canvas del html
	let ctx;        // contexto de trabajo
	let idAnimacion, idBoca;   // id de la animación
	
	let xDerecha;
	let	xIzquierda,yArriba,yAbajo;

	let posicion=0;   // Posición del array 0, 1
	
	let miComecocos;
	let imagen;

	const movimientoDerecha =[[0,2],[32,2]];
	const moviminetoIzquierda =[[2,65],[33,65]];
	const movimientoAbajo =[[0,32],[32,32]];
	const movimientoArriba = [[0,97],[33,97]];
	
	function Comecocos (x_, y_) {
	
	  this.x = x_;
	  this.y = y_;
	  this.animacionComecocos = movimientoDerecha; // Posiciones del sprite donde recortar cada imagen 
			//con esto 
	  this.velocidad = 1.4;
	  this.tamañoX   = 30;
	  this.tamañoY   = 30;
	
	}
	
	Comecocos.prototype.generaPosicionDerecha = function() {

		this.x = this.x + this.velocidad;
		this.animacionComecocos = movimientoDerecha; 
		
		if (this.x > TOPEDERECHA) {
			
			// If at edge, reset ship position and set flag.
			this.x = TOPEDERECHA;   
			console.log("derecha " + this.x);			

		}		
	}	
	Comecocos.prototype.generarPosicionIzquierda = function(){
		
		this.x = this.x - this.velocidad;
		this.animacionComecocos = moviminetoIzquierda; // Posiciones del sprite donde recortar cada imagen


		if (this.x < TOPIZQUIERDA) this.x = TOPIZQUIERDA;	   

		console.log("izquierda " + this.x);			
	}
	

	Comecocos.prototype.generarPosicionAbajo = function() {
		
		this.y = this.y + this.velocidad;
		this.animacionComecocos = movimientoAbajo;

		if (this.y > TOPEINFERIOR) this.y = TOPEINFERIOR;	   
		
		console.log("abajo " + this.y);
	}	

	Comecocos.prototype.generarPosicionArriba = function() {
		
		this.y = this.y - this.velocidad;
		this.animacionComecocos = movimientoArriba;

		if (this.y < TOPESUPERIOR) this.y = TOPESUPERIOR;

		console.log("arriba " + this.y);
		
	}




	function pintaRectangulo() {
		
		// borramos el canvas
		ctx.clearRect(0, 0, 500, 500);		
		
		if (xDerecha) {
			
			miComecocos.generaPosicionDerecha();
	   
		}
		if (xIzquierda)  miComecocos.generarPosicionIzquierda();
		if (yArriba) miComecocos.generarPosicionArriba();
		if (yAbajo) miComecocos.generarPosicionAbajo();
		
 		// Pintamos el comecocos
		ctx.drawImage(miComecocos.imagen, // Imagen completa con todos los comecocos (Sprite)
					  miComecocos.animacionComecocos[posicion][0],    // Posicion X del sprite donde se encuentra el comecocos que voy a recortar del sprite para dibujar
					  miComecocos.animacionComecocos[posicion][1],	  // Posicion Y del sprite donde se encuentra el comecocos que voy a recortar del sprite para dibujar
					  miComecocos.tamañoX, 		    // Tamaño X del comecocos que voy a recortar para dibujar
					  miComecocos.tamañoY,	        // Tamaño Y del comecocos que voy a recortar para dibujar
					  miComecocos.x,                // Posicion x de pantalla donde voy a dibujar el comecocos recortado
					  miComecocos.y,				            // Posicion y de pantalla donde voy a dibujar el comecocos recortado
					  miComecocos.tamañoX,		    // Tamaño X del comecocos que voy a dibujar
					  miComecocos.tamañoY);         // Tamaño Y del comecocos que voy a dibujar					  
					  
	}
	
	function abreCierraBoca() {
		
		    posicion = (posicion + 1) % 2;  // Cargará posiciones 0 y 1 del array
			/* Esta es la alternativa
				posicion ++;
				if(posicion>=1) posicion =0;
			*/
		
	}
	
	function activaMovimiento(evt) {

        switch (evt.keyCode) {
			// Right arrow.
			case 39:
			  xDerecha = true;
			  break;
			  // left arrow.
			case 37:
				xIzquierda = true;
				break;
			
			  // Arriba
			case 38:
				yArriba = true;
				break;
  
				// Abajo.
			case 40:
				yAbajo = true;
				break;	
		}
	}

	function desactivaMovimiento(evt){

        switch (evt.keyCode) {


			// Right arrow 
			case 39:
			  xDerecha = false;
			  break;
		  // left arrow.
			case 37: 
			  xIzquierda = false;
			  break;
			  case 38:
				yArriba = false;
			  break;

			  // Abajo.
			case 40:
			  yAbajo = false;
			  break;
        }

	}	
	
	document.addEventListener("keydown", activaMovimiento, false);
	document.addEventListener("keyup", desactivaMovimiento, false);	
	
	// localizamos el canvas
	canvas = document.getElementById("miCanvas");
	
	// Generamos el contexto de trabajo
	ctx = canvas.getContext("2d");

	imagen = new Image();
	imagen.src="spriteComecocos.png";
	Comecocos.prototype.imagen = imagen;

	miComecocos = new Comecocos( x, y);		

	// Lanzamos la animación
	idAnimacion= setInterval(pintaRectangulo, 1000/50);	
	
	// Animación encargada de abrir y cerra la boca
	idBoca = setInterval(abreCierraBoca, 1000/8);


}


