function setup() {
    createCanvas(400, 400);
    background("purple")
}

  function draw() {
    stroke("red");
    fill("yellow");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
