class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 40;
    this.speed = 4;
    this.color = "lime";
  }

  update() {
    if (keys["ArrowUp"]) this.y -= this.speed;
    if (keys["ArrowDown"]) this.y += this.speed;
    if (keys["ArrowLeft"]) this.x -= this.speed;
    if (keys["ArrowRight"]) this.x += this.speed;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}