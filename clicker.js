class Clicker {
  constructor() {
    this.x = 350
    this.y = 250
    this.color = "Black"
  }
  
  draw() {
    fill(this.color)
    ellipse(this.x, this.y, 100, 100)
    fill("red")
    ellipse(this.x, this.y, 50, 50)
  }
}