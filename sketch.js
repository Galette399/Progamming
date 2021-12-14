var front=117;
//The setup function only happens once
function setup() {
createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
background(82,158,255); //an RGB color for the canvas' background
//circle
stroke(255,255,127); // an RGB color for the circle's border
strokeWeight(4);
fill(254,141,253); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
ellipse(width/2,height/2,20,20); // center of canvas, 20px dia

strokeWeight(4);
fill (49,179,4);
ellipse (random(height),random(width),30,30);

  from = color(255, 0, 0, 0.2 * 255);
  to = color(0, 0, 255, 0.2 * 255);
  c1 = lerpColor(from, to, 0.33);
  c2 = lerpColor(from, to, 0.66);
  for (let i = 0; i < 15; i++) {
    fill(from);
    quad(
      random(-40, 220), random(height),
      random(-40, 220), random(height),
      random(-40, 220), random(height),
      random(-40, 220), random(height)
    );
    fill(c1);
    quad(
      random(140, 380), random(height),
      random(140, 380), random(height),
      random(140, 380), random(height),
      random(140, 380), random(height)
    );
    fill(c2);
    quad(
      random(320, 580), random(height),
      random(320, 580), random(height),
      random(320, 580), random(height),
      random(320, 580), random(height)
    );
    fill(to);
    quad(
      random(500, 760), random(height),
      random(500, 760), random(height),
      random(500, 760), random(height),
      random(500, 760), random(height)
    );
  }
  frameRate(5);

//Roof
stroke(0);
fill(7,192,125);
triangle(75,150,327,152,200,40);

//Wall
fill(226,front,255);
rect(75,150,250,250);

//Door
fill(254,212,72);
rect(150,250,75,150);

//Door Knob
fill(19,0,255);
noStroke();
ellipse(160,330,10,10);

//House Outline
line(60,60,35,45);
stroke(5);
strokeWeight(12);
  }

  function mousePressed(){
  front=475;
  }