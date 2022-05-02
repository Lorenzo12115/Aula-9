var box



function setup() {
  createCanvas(400, 400);
  box = createSprite (200, 200, 30, 30)
}

function draw() {
  background(220);
  if (keyDown("right_arrow")) {
  box.position.x = box.position.x + 5
  }
  if (keyDown("left_arrow")) {
    box.position.x = box.position.x - 5
  }
  if (keyDown("down_arrow")) {
    box.position.y = box.position.y + 5
  }
  if (keyDown("up_arrow")) {
    box.position.y = box.position.y - 5
  }
  drawSprites();
}