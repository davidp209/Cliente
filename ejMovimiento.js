window.onload = function () {
  let x = 0; //horizonral
  let y = 0; //vertical
  let canvas;
  let ctx;
  let id;
  let direcccion = false;
  function pintaRectangulo() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x, y, 15, 15);
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
      }
    }
  }
  canvas = document.getElementById("miCanvas");
  ctx = canvas.getContext("2d");
  ctx.fillStyle = "#F44444";
  id = setInterval(pintaRectangulo, 1 / 1000);
};
