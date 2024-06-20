var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", function (d) {
  cursor.style.left = d.x+"px"
  cursor.style.top = d.y+"px"
});
