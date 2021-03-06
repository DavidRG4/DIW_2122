console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 300;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Coordenadas del objeto
let x = 0;
let y = 10;

//-- Velocidades del objeto
let velx = 3;
let vely = 1;
let num =0;
//-- Funcion principal de animacion
function update() 
{
  console.log("test");
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posicion del  elemento
  //-- (física del movimiento rectilineo uniforme)

   //-- Condicion de rebote en extremos verticales del canvas
   if (x < 0 || x >= (canvas.width - 20) ) {
    if (num==5) {
      num=0;
    }
    velx = -velx;
    num+=1;
  }

  //-- Condición de rebote en extremos horizontales del canvas
  if (y <= 0 || y > canvas.height - 20) {
    if (num==5) {
      num=0;
    }
    vely = -vely;
    num+=1;
  }

  //-- Actualizar la posición
  x = x + velx;
  y = y + vely;

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.rect(x, y, 20, 20);

    //-- Dibujar
    if (num == 1) {
      ctx.fillStyle = 'red';
    }else if (num == 2){
      ctx.fillStyle = 'black';
    }else if (num == 3){
      ctx.fillStyle = 'green';
    }else if (num == 4){
      ctx.fillStyle = 'yellow';
    }else if (num == 5){
      ctx.fillStyle = 'blue';
    }

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}

//-- ¡Que empiece la función!
update();