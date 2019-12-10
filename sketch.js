
var poem

function preload(){
  dickinson = loadStrings('edcomplete.txt');
  poe = loadStrings('poecomplete.txt');
}

function setup() {
  createCanvas(1200, 800);

  y = height;
}

function draw() {
  if (mouseIsPressed) {
  var poem = random(poe) + '\n' + random(dickinson) + '\n' + random(poe) + '\n' +random(dickinson)
  background(0);
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text(poem, 600, 400)
  }

  //define poem within mouseclick function txt = join(lines, '\n');
}
