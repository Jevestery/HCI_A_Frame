

// changing individual properties with code and using setInterval
var rotationSpeed = 0.02;
var move = 0.01;
var makeBigger = 0.1;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed;
  myOtherBox.object3D.rotation.y += rotationSpeed;
	myOtherBox.object3D.rotation.z -= rotationSpeed;

  elongate();
}

function elongate() {
  myOtherBox.object3D.position.z += move;
  myOtherBox.object3D.width += makeBigger;
}

setInterval(spin, 16); //equivalent to 60 fps
