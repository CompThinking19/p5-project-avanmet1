var txt;
var lines;
var poem

function preload(){
  lines = loadStrings('edcomplete.txt');
}

function setup() {
  createCanvas(1200, 800);

  txt = join(lines, '\n');
  y = height;
}

function draw() {
  if (mouseIsPressed) {
  var poem = random(lines) + '\n' + random(lines)
  random(lines);
  background(0);
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text(poem, 600, 400)
  }

  //define poem within mouseclick function txt = join(lines, '\n');
}
