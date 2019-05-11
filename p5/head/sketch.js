function setup(){
  createCanvas(500, 500);
}

function draw(){
  background(100);

  strokeWeight(5);
  //head
  fill(200,200,200);
  ellipse(250,250,350,400);

  //eyes
  fill(100,20,100);
  ellipse(200,200,50,50);
  ellipse(300,200,50,50);

  //mouth
  line(200,300,300,300);

  //tongue
  fill(255,0,0);

  if (mouseY - 300 < 0){
    tongueY = 0;
  } else {
    tongueY = mouseY - 300;
  }
  rect(230,300,40,tongueY,0,0,30,30);

  // if (tongueY > 200){
  //   window.location.href = "../../2.html";
  // }

}

// function mousePressed(){
function keyPressed(){
  window.location.href = "/home/pi/Desktop/chino/myfolder/2.html";
}