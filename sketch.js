

var s;
var slider;
var blocks = 1;
var scl = 20;
var counter = 0;
var song;
var song1;
var song2;
var button1;
var score = 0;
var rand ;
var song_num = 2;


function preload(){
  



    song = loadSound("bob.mp3");
  song1 = loadSound("peppa.mp3");
  song2 = loadSound("thomas.mp3");
}

function setup() {

  createCanvas(600, 600);
  s = new Snake();
  slider = createSlider(0,2,0.25,0.01)
  button1 = createButton(" Change Song");
  button1.mousePressed(Changesong);
  frameRate(10);
  pickLocation();
  song.play();
  rand = Math.round(random(1-3));
    
}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
 // s.total++;
}

function draw() {
  background(51);
  
  song.setVolume(slider.value());
  
  
  

  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();


  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
  
  textSize(12);
  fill("red")
  text("Score = " + score, 520,20)
  text("Blocks = " + blocks, 520,35)
  

}





function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}

  function Changesong(){
    song_num = Math.round(random(2, 3));
    console.log(song_num)
  if (song_num === 1) {
    song.stop();
    song2.stop();
    song1.stop();
    song.play();
  } else if (song_num === 2) {
    song.stop();
    song1.stop();
    song2.stop();
    song1.play();
  } else if (song_num === 3) {
    song.stop();
    song2.stop();
    song2.play();
    song1.stop();
  }

}