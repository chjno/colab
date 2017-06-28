var f1;
var f2;
var f3;
var f4;
var f5;
var f6;
var friends;
var music;

function setup(){
  f1 = loadImage('images/friend1.jpeg');
  f2 = loadImage('images/friend2.jpeg');
  f3 = loadImage('images/friend3.jpeg');
  f4 = loadImage('images/friend4.jpeg');
  f5 = loadImage('images/friend5.jpeg');
  f6 = loadImage('images/friend6.jpeg');
  friends = loadImage('images/friends.jpg');
  music = loadSound('images/vengabus.mp3', init);
}

function init(){
  checkbox = createCheckbox('party with my friends!', false);
  checkbox.changed(checked);
  createCanvas(1200, 600);
  frameRate(3);
  stopTheParty();
}

function draw(){
  if (partying){
    background(random(0,255),random(0,255),random(0,255));
    image(f1, random(0,1200), random(0,600));
    image(f2, random(0,1200), random(0,600));
    image(f3, random(0,1200), random(0,600));
    image(f4, random(0,1200), random(0,600));
    image(f5, random(0,1200), random(0,600));
    image(f6, random(0,1200), random(0,600));
  }
}

function stopTheParty(){
  background(255,255,255);
  image(friends);
  noLoop();
}

var partying = false;
function checked(){
  if (this.checked()){
    loop();
    music.play();
    partying = true;
  } else {
    noLoop();
    music.pause();
    partying = false;
    stopTheParty();
  }
}