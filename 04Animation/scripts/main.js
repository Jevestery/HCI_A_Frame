

// changing individual properties with code and using setInterval
var rotationSpeed = 0.02;
var makeBigger = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed;
  myOtherBox.object3D.rotation.y += rotationSpeed;
	myOtherBox.object3D.rotation.z -= rotationSpeed;
  myOtherBox.object3D.position.z += makeBigger;
}

function elongate() {



}

setInterval(spin, 16); //equivalent to 60 fps
// setInterval(elongate, 16); //equivalent to 60 fps
