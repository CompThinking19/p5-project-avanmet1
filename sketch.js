function setup() {
  createCanvas(400, 400);
  y = height;
}

function draw() {
  background(0);

  fill(255);
  textSize(32);
  textAlign(CENTER);
  text('txt', 0, y, width, height*10);

  y--;
}
