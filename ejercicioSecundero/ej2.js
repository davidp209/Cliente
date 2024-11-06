// UT2 cookies

window.onload = function() { 
	let canvas, ctx;
	let secundero =1;


		function generaAnimación() {
			
			
			  ctx.clearRect(0, 0, 600, 400);
	
			 
			  ctx.font = "30px Arial";
			  ctx.fillStyle = "black";

			  ctx.fillText(secundero,  Math.random()*575,Math.random()*375);

			  secundero ++;
			  
				if (secundero === 60) {
					secundero =1;
					
				
				}
			   
			  
	
		}
	
		// Obtenemos una referencia al canvas
		canvas = document.getElementById('miCanvas');
	
		// Y a su contexto 2d
		ctx = canvas.getContext('2d');

	setInterval(generaAnimación, 1000);
	
	
	
	
	
	}
	
	
	