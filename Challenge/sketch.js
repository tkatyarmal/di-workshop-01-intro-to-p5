function setup() {
  createCanvas(4000, 40 00)
  background(0, 0, 0)
}


var drawing = false;





function draw() {

  
  if (keyIsPressed) {
    if (key == 'r') {
      fill(255, 0, 0) 
    }
    if (key == 'g') {
      fill(0, 255, 0)
    }
    if (key =='b'){
      fill(0, 0, 255)
    }
  


// Code for the shapes tingz    
    if (key == 'e') {
    ellipse(mouseX, mouseY, 30, 30)
  }
    if (key == 't') {
    triangle(mouseX, mouseY -20, mouseX + 20, mouseY +20, mouseX -20, mouseY +20)
  }

  if (key == 's') {
    rect(40, 120, 120, 40);
  }


  
  }

  
  
}