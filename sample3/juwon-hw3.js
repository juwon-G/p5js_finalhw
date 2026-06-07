let eyeOffsetX = 0;
let eyeOffsetY = 0;

let leftBlink = 0;
let rightBlink = 0;

let sad = false;

let moveX = 0;
let speedX = 0;

let moveY = 0;
let speedY = 0;

let skyX = 500;
let skyY = 80;

function setup() {
  const container = document.getElementById('canvas-root');
  const canvas = createCanvas(container.clientWidth, container.clientHeight);
  canvas.parent('canvas-root');
}

function windowResized() {
  const container = document.getElementById('canvas-root');
  resizeCanvas(container.clientWidth, container.clientHeight);
}

function draw() {

  moveX += speedX;
  moveY += speedY;

  speedX *= 0.9;
  speedY *= 0.9;

  if(abs(speedX) < 0.1) speedX = 0;
  if(abs(speedY) < 0.1) speedY = 0;

  moveX = constrain(moveX, -150, 150);
  moveY = constrain(moveY, -100, 100);

  if(sad)background(120, 130, 150);
  else background(245, 235, 220);

  noStroke();

  if(sad){
    fill(220, 220, 240);
    ellipse(skyX, skyY, 40, 40);

    fill(120, 130, 150, 80);
    ellipse(skyX + 5, skyY + 5, 50, 50);
  }
  else {
    fill(255, 200, 60);
    ellipse(skyX, skyY, 50, 50);

    fill(255, 240, 120, 80);
    ellipse(skyX + 5, skyY + 5, 70, 70);
  }

  eyeOffsetX = map(mouseX, 0, width, -3, 3);
  eyeOffsetY = map(mouseY, 0, height, -2, 2);

  noStroke();
  fill(15);
  arc(300 + moveX, 400 + moveY, 280, 230, PI, TWO_PI, CHORD);

  fill(220, 180, 160);
  rect(286 + moveX, 248 + moveY, 28, 40);

  fill(232, 195, 170);
  ellipse(233 + moveX, 182 + moveY, 22, 38);
  ellipse(367 + moveX, 182 + moveY, 22, 38);

  ellipse(300 + moveX, 190 + moveY, 130, 175);

  fill(28, 31, 45);
  arc(300 + moveX, 145 + moveY, 130, 90, PI, TWO_PI, CHORD);

  fill(22, 25, 38);
  rect(235 + moveX, 145 + moveY, 130, 22);

  noFill();
  stroke(70, 50, 40);
  strokeWeight(2);
  arc(270 + moveX, 180 + moveY, 34, 10, PI + 0.2, TWO_PI - 0.2);
  arc(330 + moveX, 180 + moveY, 34, 10, PI + 0.2, TWO_PI - 0.2);

  if(leftBlink){
    noFill();
    stroke(85, 60, 45);
    strokeWeight(2);
    arc(270 + moveX, 198 + moveY, 26, 6, PI, TWO_PI);
  }
  else {
    noStroke();
    fill(255);
    ellipse(270 + moveX, 198 + moveY, 26, 10);

    fill(108, 74, 45);
    ellipse(270 + moveX + eyeOffsetX, 198 + moveY + eyeOffsetY, 8, 8);

    fill(30);
    ellipse(270 + moveX + eyeOffsetX, 198 + moveY + eyeOffsetY, 4, 4);

    fill(255);
    ellipse(268 + moveX + eyeOffsetX, 196 + moveY + eyeOffsetY, 2, 2);

    noFill();
    stroke(85, 60, 45);
    strokeWeight(2);
    arc(270 + moveX, 197 + moveY, 26, 10, PI + 0.2, TWO_PI - 0.2);
  }

  if(rightBlink){
    noFill();
    stroke(85, 60, 45);
    strokeWeight(2);
    arc(330 + moveX, 198 + moveY, 26, 6, PI, TWO_PI);
  }
  else {
    noStroke();
    fill(255);
    ellipse(330 + moveX, 198 + moveY, 26, 10);

    fill(108, 74, 45);
    ellipse(330 + moveX + eyeOffsetX, 198 + moveY + eyeOffsetY, 8, 8);

    fill(30);
    ellipse(330 + moveX + eyeOffsetX, 198 + moveY + eyeOffsetY, 4, 4);

    fill(255);
    ellipse(328 + moveX + eyeOffsetX, 196 + moveY + eyeOffsetY, 2, 2);

    noFill();
    stroke(85, 60, 45);
    strokeWeight(2);
    arc(330 + moveX, 197 + moveY, 26, 10, PI + 0.2, TWO_PI - 0.2);
  }

  stroke(145, 105, 90);
  strokeWeight(2);
  line(300 + moveX, 202 + moveY, 298 + moveX, 228 + moveY);
  arc(303 + moveX, 232 + moveY, 14, 8, 0, PI);

  noStroke();
  fill(120, 82, 70);
  ellipse(300 + moveX, 250 + moveY, 4, 4);

  noFill();
  stroke(126, 78, 76);
  strokeWeight(2);

  if(sad) arc(300 + moveX, 270 + moveY, 30, 15, PI, TWO_PI);
  else arc(300 + moveX, 260 + moveY, 30, 10, 0, PI);

  if(sad){

    for(let i = 0; i < 20; i++){

      let rx = random(0, width);
      let ry = random(0, height);

      stroke(180, 200, 255, 150);
      line(rx, ry, rx, ry + random(10, 20));

    }

  }
}

function mousePressed() {
  sad = true;
}

function mouseReleased() {
  sad = false;
}

function keyPressed() {
  if (key === 'q') leftBlink = 8;
  if (key === 'e') rightBlink = 8;
  if (key === 'g') saveGif("20213029_hw3", 10);
  if (key === 'a') speedX = -3;
  if (key === 'd') speedX = 3;
  if (key === 'w') speedY = -3;
  if (key === 's') speedY = 3;
  if (key === 'i') skyY -= 10;
  if (key === 'k') skyY += 10;
  if (key === 'j') skyX -= 10;
  if (key === 'l') skyX += 10;
}

function keyReleased() {
  if (key === 'q') leftBlink = 0;
  if (key === 'e') rightBlink = 0;
}