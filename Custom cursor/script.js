var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", function (d) {
  cursor.style.left = d.x+"px"
  cursor.style.top = d.y+"px"
});

function checkWidth() {
    // Get the actual width of the main element in pixels
    var mainWidth = main.offsetWidth;
    // Get the width of the window in pixels
    var windowWidth = window.innerWidth;
  
    // If main's width is greater than 100% of the window width, hide the cursor
    if (mainWidth > windowWidth) {
      cursor.style.display = 'none';
    } else {
      cursor.style.display = 'block';
    }
  }
  
  // Check the width on load
  checkWidth();
  
  // Optionally, check the width on window resize
  window.addEventListener('resize', checkWidth);
  