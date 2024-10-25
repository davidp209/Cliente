// UT2 cookies

window.onload = function() { 


	let canvas;
	
	let ctx, x, x2, y, y2;
	let primero, segundo;
	
		function generaDatos() {
	
		// Y a su contexto 2d
		ctx = canvas.getContext('2d');
	
		primero = false;
		segundo = false;
		
		// Generamos las coordenadas iniciales
		x = Math.random()*575;
		x2 = Math.random()*575;
		y = 0;
		y2 = 0;
		vel1 = 1 + Math.random();
		vel2 = 1 + Math.random();
		}
	
		function generaAnimación() {
			
			  // aproximadamente a 24 frames por segundo (fps)
			  // Limpiamos el canvas, eliminando el contenido
			  // desde el punto (0, 0) al punto (600, 400)
			  ctx.clearRect(0, 0, 600, 400);
	
			  // Generamos nuevas coordenadas
			  // Que basicamente representan un desplazamiento lineal
				// Y dibujamos nuestra figura
			  ctx.fillStyle = "#FF0000";
			  ctx.fillRect(x, y, 25, 25);
			  
			  ctx.fillStyle = "#000000";
			  ctx.fillRect(x2, y2, 25, 25);
			   
			   if (y>=375) {
				   
				   primero = true;
			   }
			   else y=y+vel1 
			   ;
	
			   if (y2>=375) {
				   
				   segundo = true;
			   }
			   
			   else y2=y2+vel2;
	
			   if ((primero) && (segundo)) {
	
				   clearInterval(id);
			   
			   }
	
		}
	
		// Obtenemos una referencia al canvas
		canvas = document.getElementById('miCanvas');
	
		// Y a su contexto 2d
		ctx = canvas.getContext('2d');
	
		generaDatos();
		
		let id = setInterval(generaAnimación, 1000/30);
	
		generaAnimación();
	
	
	
	
	}
	
	
	