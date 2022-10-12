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
    document.getElementById("h1-aboutus-section-1").style.color = "black";
    document.getElementById("p-aboutus-section-1").style.color = "black";
    document.getElementById("h1-aboutus-section-2").style.color = "black";
    document.getElementById("p-aboutus-section-2").style.color = "black";
    document
      .querySelector(".big-circle")
      .style.setProperty("---primary-contactus-circle-after-bg", "white");
  } else {
    document.getElementById("p-heading").style.color = "white";
    document.getElementById("f-heading").style.color = "white";
    document.getElementById("achievement-heading").style.color = "white";
    document.getElementById("h-wave").style.fill = "#242425";
    document.getElementById("h1-aboutus-section-1").style.color = "white";
    document.getElementById("p-aboutus-section-1").style.color = "white";
    document.getElementById("h1-aboutus-section-2").style.color = "white";
    document.getElementById("p-aboutus-section-2").style.color = "white";
    document
      .querySelector(".big-circle")
      .style.setProperty("---primary-contactus-circle-after-bg", "#212529");
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

//Scroll-to -top
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Contact-Us-Send-Buttom
const contactHyperlink = document.querySelector(".contact-hyperlink");

function sendMail() {
  var link =
    "mailto:girlscriptasansol@gmail.com" +
    "?subject=" +
    encodeURIComponent(
      "Contact Us: From " + document.getElementById("contactName").value
    ) +
    encodeURIComponent(
      " <" + document.getElementById("contactEmail").value + ">"
    ) +
    "&body=" +
    encodeURIComponent(document.getElementById("contactText").value);
  window.location.href = link;
}
