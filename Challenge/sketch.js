function setup() {
  createCanvas(400, 400)
  background(0, 0, 0)
}

var brushSize = 80;

function draw() {

  if (keyIsPressed) {
    // Code for the colours
    if (key == 'r') {
      fill(255, 0, 0)
    }
    if (key == 'g') {
      fill(0, 255, 0)
    }
    if (key == 'b') {
      fill(0, 0, 255)
    }
    if (key == 'w') {
      fill(255, 255, 255)
    }


    // Code for the shapes tingz    
    if (key == 'e') {
      ellipse(mouseX, mouseY, brushSize, brushSize)
    }
    if (key == 't') {
      triangle(mouseX, mouseY - (brushSize / 2), mouseX + (brushSize / 2), mouseY + (brushSize / 2), mouseX - (brushSize / 2), mouseY + (brushSize / 2))
    }
    if (key == 's') {
      rect(mouseX - (brushSize / 2), mouseY - (brushSize / 2), brushSize, brushSize);
    }


    // Code for brush sizes
    if (key == '=') {
      brushSize++
    }
    if (key == '-' && brushSize > 0) {
      brushSize--
    }

  }

}