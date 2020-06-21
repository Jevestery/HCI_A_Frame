

// changing individual properties with code and using setInterval
var rotationSpeed = 0.02;
var move = 0.1;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed;
  myOtherBox.object3D.rotation.y += rotationSpeed;
	myOtherBox.object3D.rotation.z -= rotationSpeed;

  move();
}

function move() {
  if (myOtherBox.object3D.position.z <= -3) {
    myOtherBox.object3D.position.z += move;
  } else if (myOtherBox.object3D.position.z >= 2) {
    myOtherBox.object3D.position.z -= move;
  }
  if (myOtherBox.object3D.position.y <= -1) {
    myOtherBox.object3D.position.z += move;
  } else if (myOtherBox.object3D.position.z >= 2) {
    myOtherBox.object3D.position.z -= move;
  }
}

setInterval(spin, 16); //equivalent to 60 fps
