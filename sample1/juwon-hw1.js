function setup() {
  const container = document.getElementById('canvas-root');
  const w = container.offsetWidth;
  const h = container.offsetHeight;
  const canvas = createCanvas(w, h);
  canvas.parent('canvas-root');
  noLoop();
}

function draw() {
  background(255, 0, 0);

  noStroke();
  fill(0);
  ellipse(300, 450, 800, 500);

  fill(255);
  ellipse(300, 100, 100, 100);

  fill(255, 220, 0);
  triangle(120, 90, 135, 80, 150, 90);
  triangle(150, 90, 165, 80, 180, 90);

  fill(50, 150, 255);
  triangle(420, 70, 435, 60, 450, 70);
  triangle(450, 70, 465, 60, 480, 70);

  fill(100, 255, 120);
  triangle(260, 180, 275, 170, 290, 180);
  triangle(290, 180, 305, 170, 320, 180);
  
  stroke(255, 255, 255);
  strokeWeight(2);
  line(115, 95, 100, 100);
  line(120, 100, 105, 105);

  line(415, 75, 400, 80);
  line(420, 80, 405, 85);

  line(255, 185, 240, 190);
  line(260, 190, 245, 195);

  noStroke();
  
  fill(255, 80, 80);
  rect(100, 245, 15, 15);

  fill(80, 150, 255);
  rect(130, 235, 12, 12);

  fill(255, 220, 0);
  rect(200, 240, 14, 14);

  fill(100, 255, 120);
  rect(260, 230, 13, 13);

  fill(180, 100, 255);
  rect(300, 245, 12, 12);

  fill(255, 180, 100);
  rect(330, 235, 10, 10);

  fill(200, 50, 255);
  rect(370, 240, 12, 12);

  fill(50, 255, 200);
  rect(430, 230, 15, 15);

  fill(255, 120, 50);
  rect(500, 245, 12, 12);
}