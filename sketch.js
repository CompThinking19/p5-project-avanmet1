//Functionally, I am very pleased with how this project turned out, at least for what I have. I wanted this project to be a lot prettier but I ran out of time because I didn't have ideas soon enough.
//The inspiration behind the project is exactly the same as my python project.  The execution is not as polished as I would have like, but given the short amount of time I gave myself, it is what it is.
//In the version of this product that I envisioned in my head, I wanted to have much larger text where each letter displayed some sort of graphic that would change based on user input. I also wanted to have a background that I made myself with an animated rainfall effect.
//The custom background and the rainfall I actually got working in the first version of the project that just printed scrolling text. I modified some code that I found online and had a fairly convincing rainfall animation, but once I added the user interaction to the random generation, the rain stopped working as intended and I ran out of time to fix it.
//The hardest part was actually using the random function.  I searched online for how to pull a single random selection from an array in JS and I had so much trouble getting any of the solutions that I found on stackoverflow to work.  I came kept coming close and then hitting a dead end before giving up and moving to the next solution I could find.
//I completely overlooked that the random function on p5 reference could pull text from an array.  By the time I found this information, I had spent hours of my afternoon trying to find a complex solution to a simple problem.
//It still felt extremely rewarding when I finally got the program to perform the action I wanted it to. Unfortunately, I was running out of time and was not able to make it look prettier or more interactive so I finished my formatting and removed the code for the rainfall effect and called it a day.

var bg //saves variable for setting an image as the background
var poem //saves variable 'poem' for later
var stanza1
var stanza2

function preload(){
  dickinson = loadStrings('edcomplete.txt');
  poe = loadStrings('poecomplete.txt');
}
//reads in both txt files as seperate arrays

function setup() {
  bg = loadImage('backgroundtest3.jpg');//loads image in repository as background
  createCanvas(1332, 850); //size of the canvas has to match the size of the image in order for it to be used as backgroun
}

function draw() {
  if (mouseIsPressed) {
  //the following variables make random selections from two text files split into arrays. each random selection is one line long
  var stanza1 = random(poe) + '\n' + random(dickinson) + '\n' + random(poe) + '\n' +random(dickinson) + '\n'
  var stanza2 = random(poe) + '\n' + random(dickinson) + '\n' + random(poe) + '\n' +random(dickinson)
  var poem = stanza1 + '\n' + stanza2
  background(bg)// loads in an image in place of a solid background
  fill(255); //white text
  textSize(32); //text size
  textAlign(CENTER); //centers text
  text(poem, 650, 310); //prints randomized text to specified coordinates on mouse press
  }

}
