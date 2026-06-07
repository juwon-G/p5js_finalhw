function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  noStroke();
  fill(15);
  arc(300, 400, 280, 230, PI, TWO_PI, CHORD);

  fill(220, 180, 160);
  rect(286, 248, 28, 40);

  fill(232, 195, 170);
  ellipse(233, 182, 22, 38);
  ellipse(367, 182, 22, 38);

  ellipse(300, 190, 130, 175);

  noStroke();
  fill(28, 31, 45);
  arc(300, 145, 130, 90, PI, TWO_PI, CHORD);

  fill(22, 25, 38);
  rect(235, 145, 130, 22);

  noFill();
  stroke(70, 50, 40);
  strokeWeight(2);
  arc(270, 180, 34, 10, PI + 0.2, TWO_PI - 0.2);
  arc(330, 180, 34, 10, PI + 0.2, TWO_PI - 0.2);

  noStroke();
  fill(255);
  ellipse(270, 198, 26, 10);
  fill(108, 74, 45);
  ellipse(270, 198, 8, 8);
  fill(30);
  ellipse(270, 198, 4, 4);
  fill(255);
  ellipse(268, 196, 2, 2);

  fill(255);
  ellipse(330, 198, 26, 10);
  fill(108, 74, 45);
  ellipse(330, 198, 8, 8);
  fill(30);
  ellipse(330, 198, 4, 4);
  fill(255);
  ellipse(328, 196, 2, 2);

  noFill();
  stroke(85, 60, 45);
  strokeWeight(2);
  arc(270, 197, 26, 10, PI + 0.2, TWO_PI - 0.2);
  arc(330, 197, 26, 10, PI + 0.2, TWO_PI - 0.2);

  stroke(145, 105, 90);
  strokeWeight(2);
  line(300, 202, 298, 228);
  arc(303, 232, 14, 8, 0, PI);

  noStroke();
  fill(120, 82, 70);
  ellipse(300, 250, 4, 4);

  noFill();
  stroke(126, 78, 76);
  strokeWeight(2);
  arc(300, 260, 30, 10, 0, PI);

}