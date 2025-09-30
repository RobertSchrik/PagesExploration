const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// GameManager
let player = new Player(100, 100);

function update() {
  player.update();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.draw(ctx);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();