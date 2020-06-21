

// changing individual properties with code and using setInterval
var rotationSpeed = 0.02;
var makeBigger = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed;
  myOtherBox.object3D.rotation.y -= rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
}

function elongate() {
  if (myOtherBox.object3D.width <= 1) {
    myOtherBox.object3D.width += makeBigger;
  } else if (myOtherBox.object3D.width >= 5) {
    myOtherBox.object3D.width -= makeBigger;
  }
}

setInterval(spin, 16); //equivalent to 60 fps
setInterval(elongate, 16); //equivalent to 60 fps
