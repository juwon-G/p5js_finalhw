function setup() {
  const container = document.getElementById('canvas-root');
  const canvas = createCanvas(container.clientWidth, container.clientHeight);
  canvas.parent('canvas-root');
  colorMode(HSB, 360, 100, 100, 100);
}

function windowResized() {
  const container = document.getElementById('canvas-root');
  resizeCanvas(container.clientWidth, container.clientHeight);
}

function draw() {
  let t = frameCount;

  background((t * 0.5) % 360, 90, 90);

  noStroke();
  fill(0, 0, 0);
  ellipse(300, 450, 800, 500);

  let sunSize = 100 + sin(t * 0.05) * 20;
  fill(0, 0, 100);
  ellipse(300, 100, sunSize, sunSize);

  drawBirds(t);
  drawAnimals(t);
}

function drawBirds(t) {
  let birds = [
    { x: 120, y: 90, hue: 50 },
    { x: 420, y: 70, hue: 200 },
    { x: 260, y: 180, hue: 120 }
  ];

  for (let i = 0; i < birds.length; i++) {
    let b = birds[i];

    let moveX = sin(t * 0.04 + i) * 20;
    let moveY = cos(t * 0.04 + i) * 10;
    let changingHue = (t * 2 + b.hue) % 360;
    let wingSize = 15 + sin(t * 0.08 + i) * 3;

    drawOneBird(b.x + moveX, b.y + moveY, wingSize, changingHue);
  }
}

function drawOneBird(x, y, size, hueValue) {
  fill(hueValue, 80, 100);

  triangle(x, y, x + size, y - 10, x + size * 2, y);
  triangle(x + size * 2, y, x + size * 3, y - 10, x + size * 4, y);

  stroke(0, 0, 100);
  strokeWeight(2);
  line(x - 5, y + 5, x - 20, y + 10);
  line(x, y + 10, x - 15, y + 15);

  noStroke();
}

function drawAnimals(t) {
  let animals = [
    { x: 100, y: 245, hue: 0 },
    { x: 130, y: 235, hue: 210 },
    { x: 200, y: 240, hue: 50 },
    { x: 260, y: 230, hue: 120 },
    { x: 300, y: 245, hue: 270 },
    { x: 330, y: 235, hue: 30 },
    { x: 370, y: 240, hue: 290 },
    { x: 430, y: 230, hue: 170 },
    { x: 500, y: 245, hue: 20 }
  ];

  for (let i = 0; i < animals.length; i++) {
    let a = animals[i];

    let moveY = sin(t * 0.05 + i) * 8;
    let changingHue = (t * 2 + a.hue) % 360;
    let animalSize = 12 + sin(t * 0.08 + i) * 5;

    drawOneAnimal(a.x, a.y + moveY, animalSize, changingHue);
  }
}

function drawOneAnimal(x, y, size, hueValue) {
  fill(hueValue, 80, 100);
  rect(x, y, size, size);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('20213029_hw4', 5);
  }
}