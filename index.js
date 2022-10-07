function darkMode() {
  document.body.classList.toggle("dark");
  // Added if/else condiditon to change the color of past event heading, faq heading and header wave
  if (
    (document.getElementById("p-heading").style.color === "white" &&
      document.getElementById("f-heading").style.color === "white") ||
    document.getElementById("h-wave").style.fill === "#292c35"
  ) {
    document.getElementById("p-heading").style.color = "black";
    document.getElementById("f-heading").style.color = "black";
    document.getElementById("achievement-heading").style.color = "black";
    document.getElementById("h-wave").style.fill = "#ffffff";
  } else {
    document.getElementById("p-heading").style.color = "white";
    document.getElementById("f-heading").style.color = "white";
    document.getElementById("achievement-heading").style.color = "white";
    document.getElementById("h-wave").style.fill = "#292c35";
  }
}
const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

//Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});



//Mouse Trail

   var dots = [],
   mouse = {
     x: 0,
     y: 0
   };

var Dot = function() {
 this.x = 0;
 this.y = 0;
 this.node = (function(){
   var n = document.createElement("div");
   n.className = "trail";
   document.body.appendChild(n);
   return n;
 }());
};

Dot.prototype.draw = function() {
 this.node.style.left = this.x + "px";
 this.node.style.top = this.y + "px";
};

for (var i = 0; i < 12; i++) {
 var d = new Dot();
 dots.push(d);
}

function draw() {
 var x = mouse.x,
     y = mouse.y;
 
 dots.forEach(function(dot, index, dots) {
   var nextDot = dots[index + 1] || dots[0];
   
   dot.x = x;
   dot.y = y;
   dot.draw();
   x += (nextDot.x - dot.x) * .6;
   y += (nextDot.y - dot.y) * .6;

 });
}

addEventListener("mousemove", function(event) {
 mouse.x = event.pageX;
 mouse.y = event.pageY;
});

function animate() {
 draw();
 requestAnimationFrame(animate);
}
animate();
