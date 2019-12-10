
var bg
var poem //saves variable 'poem' for later
var stanza1
var stanza2

function preload(){
  dickinson = loadStrings('edcomplete.txt');
  poe = loadStrings('poecomplete.txt');
}
//reads in both txt files

function setup() {
  bg = loadImage('backgroundtest3.jpg');
  createCanvas(1332, 850);
  y = height;
}

function draw() {
  if (mouseIsPressed) {
  var stanza1 = random(poe) + '\n' + random(dickinson) + '\n' + random(poe) + '\n' +random(dickinson) + '\n'
  var stanza2 = random(poe) + '\n' + random(dickinson) + '\n' + random(poe) + '\n' +random(dickinson)
  var poem = stanza1 + '\n' + stanza2
  background(bg)
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text(poem, 650, 310);
  }

}
