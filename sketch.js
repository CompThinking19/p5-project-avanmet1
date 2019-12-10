
var txt;
var lines;
var poem

function preload(){
  lines = loadStrings('edcomplete.txt');
}

function setup() {
  createCanvas(1200, 800);

  y = height;
}

function draw() {
  background(0);

  fill(255);
  textSize(32);
  textAlign(CENTER);
  text(poem, 0, y, width, height*100);
  y-=10;
  //define poem within mouseclick function txt = join(lines, '\n'); 

}
