// Rover Object Goes Here
// ======================
var rover = {
  direction: "N";
  positions: ["N","S","E","W"];
  coord: [a,b];
}
// ======================
function turnLeft(rover){
  switch(rover.direction) {
    case N:
      rover.direction = "W";
      breack;
    case S:
      rover.direction = "E";
      breack;
    case W:
      rover.direction = "S";
      breack;
    case E:
      rover.direction = "N";
      breack;
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}

function moveBack(rover) {
  console.log("moveForward was called")
}

var = testzone 