// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });


  //const dodger = document.getElementById("dodger");

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");  // Get current left position
  const left = parseInt(leftNumbers, 10);  // Convert it to an integer

  if (left < 360) {  // Ensure the dodger doesn't move off the screen (assuming the container width is 400px)
    dodger.style.left = `${left + 1}px`;  // Move dodger 1px to the right
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {  // Listen for the right arrow key press
    moveDodgerRight();  // Call the function to move dodger
  }
});
