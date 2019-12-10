var txt;
var drops = [];
var lines;
function preload(){
  lines = loadStrings('edcomplete.txt');
}

function setup() {
  createCanvas(1200, 1200);

  txt = join(lines, '\n');
  y = height;
}

function draw() {
  background(0);

  fill(255);
  textSize(32);
  textAlign(CENTER);
  text(txt, 0, y, width, height*10);
  y--;
}
