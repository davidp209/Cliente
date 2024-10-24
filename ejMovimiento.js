window.onload = function () {
  let x = 0; //horizonral
  let y = 0; //vertical
  let canvas;
  let ctx;//Su significado es contexto
  let id;
  let direcccion = false;
  function pintaRectangulo() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = "#FF0000";
   // ctx.fillRect(x, y, 5, 15);
   ctx.arc(95, 50, 40, 0, 2 * Math.PI)   ;
    if (direcccion === false) {
      x++;
      y++;
      if (x === 485) {
        direcccion = true;
      }
    } else if (direcccion === true) {
      x--;
      y--;
      if (x === 0) {
        direcccion = false;
        ctx.fillStyle()
      }
    }
  }
  canvas = document.getElementById("miCanvas");
  ctx = canvas.getContext("2d");
  ctx.fillStyle = "#F44444";//borde
  id = setInterval(pintaRectangulo,  24/1000);
};
