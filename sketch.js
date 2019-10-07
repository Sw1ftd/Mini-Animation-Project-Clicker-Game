let score = 0
let pPC = 1
let pPS = 0
let clicker
let upgrades = []
let upgrades2 = []
function setup() {
  createCanvas(700, 500);
  clicker = new Clicker()
  upgrades[0] = new Upgrade(0, 0, 10, "red", 1, 0)
  upgrades[1] = new Upgrade(0, 50, 100, "blue", 5, 0)
  upgrades[2] = new Upgrade(0, 100, 500, "green", 10, 0)
  upgrades[3] = new Upgrade(0, 150, 1500, "yellow", 25, 0)
  upgrades[4] = new Upgrade(0, 200, 5000, "purple", 50, 0)
  upgrades[5] = new Upgrade(0, 250, 12500, "orange", 100, 0)
  upgrades[6] = new Upgrade(0, 300, 50000, "white", 250, 0)
  upgrades[7] = new Upgrade(0, 350, 100000, "lightgray", 750, 0)
  upgrades[8] = new Upgrade(0, 400, 1000000, "darkgray", 2000, 0)
  upgrades[9] = new Upgrade(0, 450, 10000000, "gray", 10000, 0)
  upgrades2[0] = new Upgrade(width-150, 0, 50, "red", 1, 0)
  upgrades2[1] = new Upgrade(width-150, 50, 150, "blue", 5, 0)
  upgrades2[2] = new Upgrade(width-150, 100, 750, "green", 10, 5)
  upgrades2[3] = new Upgrade(width-150, 150, 2500, "yellow", 25, 5)
  upgrades2[4] = new Upgrade(width-150, 200, 7500, "purple", 50, 5)
  upgrades2[5] = new Upgrade(width-150, 250, 15000, "orange", 100, 10)
  upgrades2[6] = new Upgrade(width-150, 300, 75000, "white", 250, 10)
  upgrades2[7] = new Upgrade(width-150, 350, 500000, "lightgray", 500, 10)
  upgrades2[8] = new Upgrade(width-150, 400, 7500000, "darkgray", 1000, 15)
  upgrades2[9] = new Upgrade(width-150, 450, 25000000, "gray", 10000, 20)
}

function draw() {
  background(255);
  clicker.draw()
  for(let i = 0; i < upgrades.length; i++) {
    upgrades[i].draw()
    fill(0, 0, 0)
    textSize(20)
    textStyle(BOLD);
    text("Cost: " + Math.round(upgrades[i].cost), 0, 30+(i*50))
    textSize(10)
    textStyle(NORMAL);
    text("PPC increased by " + upgrades[i].boost, 150,28+(i*50))
  }
  for(let i = 0; i < upgrades2.length; i++) {
    upgrades2[i].draw()
    fill(0, 0, 0)
    textSize(20)
    textStyle(BOLD);
    text("Cost: " + Math.round(upgrades2[i].cost), width-150, 30+(i*50))
    textSize(10)
    textStyle(NORMAL);
    text("PPS increased by " + upgrades2[i].boost, width-240-upgrades2[i].space,28+(i*50))
  }
  textt()
  pps()
  
}

function mousePressed() {
  if(dist(mouseX, mouseY, clicker.x, clicker.y) <= 50) {
      score += pPC;
  }
  for(let i = 0; i < upgrades.length; i++) {
    if(pC(mouseX, mouseY, upgrades[i].x, upgrades[i].y, upgrades[i].width, upgrades[i].height) && upgrades[i].cost <= score) {
      score -= Math.round(upgrades[i].cost)
      pPC += upgrades[i].boost
      upgrades[i].cost = upgrades[i].cost*1.150
    }
  }
  for(let i = 0; i < upgrades2.length; i++) {
    if(pC(mouseX, mouseY, upgrades2[i].x, upgrades2[i].y, upgrades2[i].width, upgrades2[i].height) && upgrades2[i].cost <= score) {
      score -= Math.round(upgrades2[i].cost)
      pPS += upgrades2[i].boost
      upgrades2[i].cost = upgrades2[i].cost*1.250
    }
  }
}

function pps() {
  if(pPS > 0) {
    score += pPS/frameRate()
  }
}

function textt() {
  fill(0, 0, 0)
  textSize(20)
  textStyle(BOLDITALIC);
  text("Points: " + Math.round(score), 307, 20)
  textSize(18)
  textStyle(BOLD);
  text("PPC: " + pPC, 320, 40)
  textSize(10)
  textStyle(NORMAL);
  text("Tip: PPC -> Points Per Click", 290, 55)
  textSize(18)
  textStyle(BOLD);
  text("PPS: " + pPS, 320, 75)
  textSize(10)
  textStyle(NORMAL);
  text("Tip: PPS -> Points Per Second", 285, 90)
  
}

function pC(pointX, pointY, x, y, xW, yW) {
if (pointX >= x &&         // right of the left edge AND
    pointX <= x + xW &&    // left of the right edge AND
    pointY >= y &&         // below the top AND
    pointY <= y + yW) {    // above the bottom
        return true;
}
return false;
}