//this is the same as before
function setup() {
  createCanvas(400, 400)
  background(0, 0, 0)
}


function draw() {
 // background (25, 25, 25)
  fill (0, 0, 255)        //this sets the colour of the elipse
  stroke(255, 0, 0)     //this sets the border colour of the elipse
  ellipse(mouseX, mouseY, 30, 30)
  //triangle(mouseX, mouseY, mouseY, mouseX, 200, 200)


  /*
  For ellipses:
  first input sets x coordinate
  second input sets y coordinate
  third input sets x dimension
  fourth input sets y dimension
  */

  
}
