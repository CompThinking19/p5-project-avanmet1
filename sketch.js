String txt;
var drops = [];

function setup() {
  createCanvas(1200, 1200);
  String[] lines = loadStrings(“aquarius.txt”);
  txt = join(line, “\n”);
  y = height;
  for (var i = 0; i < 500; i++) {
   drops[i] = new Drop();
   }
}

function draw() {
  background(0);

  fill(255);
  textSize(32);
  textAlign(CENTER);
  text(txt, 0, y, width, height*10);
  y--;
  for (var i = 0; i < drops.length; i++) {
  drops[i].fall();
  drops[i].show();
  }
}
