function setup() {
  createCanvas(1200, 1200);
  String[] lines = loadStrings(“aquarius.txt”);
  txt = join(line, “\n”);
  Y = height;
}

function draw() {
  background(0);

  fill(255);
  textSize(32);
  textAlign(CENTER);
  text(txt, 0, y, width, height*10);

  y--;
}
