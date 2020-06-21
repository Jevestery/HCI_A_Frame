

// changing individual properties with code and using setInterval
var rotationSpeed = 0.02;
var move = 0.1;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed;
  myOtherBox.object3D.rotation.y += rotationSpeed;
	myOtherBox.object3D.rotation.z -= rotationSpeed;

  myOtherBox.object3D.position.x += move;
  myOtherBox.object3D.position.y += move;

  if (myOtherBox.object3D.position.y > 4) {
    move = -0.1;
  }
}

setInterval(spin, 16); //equivalent to 60 fps
