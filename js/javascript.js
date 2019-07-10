// Use the DOM to select the canvas which has an ID of 'c'.
var c = document.querySelector("#c");
// Set the context to 2d
var ctx = c.getContext("2d");

// Constructor Function for Image
var image = new Image();

// Make a function that happens when the image is loaded
image.onload = function(){
  // Print a message that the message has loaded.
  console.log("Loaded image")
  // draw image in the top left corner that fills the canvas
  ctx.drawImage(image, 0 , 0 c.width, c.height);
  // Save image to
  var savedImage = c.toDataURL();
  // Open saved image
  window.open(savedImage);
}

image.src = "assets/badLuckBrian.jpeg";
