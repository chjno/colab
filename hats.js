var f1;
var f2;
var f3;
var f4;
var me;

function setup(){
  createCanvas(1000, 500);
  f1 = loadImage('images/hat1.png');
  f2 = loadImage('images/hat2.png');
  f3 = loadImage('images/hat3.png');
  f4 = loadImage('images/hat4.png');
  me = loadImage('images/me.jpg');
}

function draw(){
  if (mouseX < 250){
    background(200,255,255);
    image(me, 300, 100);
    image(f1, 400, 0);
  } else if (mouseX >= 250 && mouseX < 500){
    background(255,200,255);
    image(me, 300, 100);
    image(f2, 400, 30, 200, 200);

  } else if (mouseX >= 500 && mouseX < 750){
    background(255,255,200);
    image(me, 300, 100);
    image(f3, 400, 0, 200, 200);

  } else if (mouseX >= 750 && mouseX < 1000){
    background(200,255,200);
    image(me, 300, 100);
    image(f4, 360, 0, 250, 250);

  }
}
