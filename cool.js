var me;
var glasses;

function setup(){
  createCanvas(360, 422);
  me = loadImage('images/me2.jpeg');
  glasses = loadImage('images/sunglasses.png');
}

function draw(){
  image(me);
  image(glasses, mouseX, mouseY, 240, 37.5);
  console.log(mouseX, mouseY);

  if (mouseX > 28 && mouseX < 43 && mouseY > 152 && mouseY < 159){
    textSize(50);
    fill(255, 0, 0);
    text('COOL', 100, 400);
  }
}

function mousePressed(){
  if (mouseX > 28 && mouseX < 43 && mouseY > 152 && mouseY < 159){
    window.location.href = 'why.html';
  }
}