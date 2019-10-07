class Upgrade {
  constructor(x, y, cost, color, boost, space) {
    this.x = x
    this.y = y
    this.width = 150
    this.height = 50
    this.cost = cost
    this.color = color
    this.boost = boost
    this.space = space
    
  }
  
  draw() {
    fill(this.color)
    rect(this.x, this.y, this.width, this.height)
  }
}