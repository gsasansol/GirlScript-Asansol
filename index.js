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
    document.querySelector(".big-circle").style.setProperty("---primary-contactus-circle-after-bg", "white");
    const cardList = document.querySelectorAll(".card");
    for(const element of cardList){
      element.style.backgroundColor = "white";
      element.style.color = "black";
      element.style.borderTop = "2px solid black";
      element.style.borderRight = "2px solid black";
    }
  } else {
    document.getElementById("p-heading").style.color = "white";
    document.getElementById("f-heading").style.color = "white";
    document.getElementById("achievement-heading").style.color = "white";
    document.getElementById("h-wave").style.fill = "#242425";
    document.getElementById("h1-aboutus-section-1").style.color = "white";
    document.getElementById("p-aboutus-section-1").style.color = "white";
    document.getElementById("h1-aboutus-section-2").style.color = "white";
    document.getElementById("p-aboutus-section-2").style.color = "white";
    document.querySelector(".big-circle").style.setProperty("---primary-contactus-circle-after-bg", "#212529");
    const cardList = document.querySelectorAll(".card");
    for(const element of cardList){
      element.style.backgroundColor = "black";
      element.style.color = "white";
      element.style.borderTop = "2px solid white";
      element.style.borderRight = "2px solid white";
    }
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
  cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;");
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

//Scroll-to -top
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

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
function sendMail() {
  var link = "mailto:girlscriptasansol@gmail.com"
    + "?subject=" + encodeURIComponent("Contact Us: From " + document.getElementById('contactName').value)
    + encodeURIComponent(" <" + document.getElementById('contactEmail').value + ">")
    + "&body=" + encodeURIComponent(document.getElementById('contactText').value);
  window.location.href = link;
}

async function postFormDataAsJson({ url, formData }) {
  const plainFormData = Object.fromEntries(formData.entries());
  const formDataJsonString = JSON.stringify(plainFormData);
  //console.log(formDataJsonString);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: formDataJsonString,
    mode: "cors",
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response.json();
}

async function handleFormSubmit() {
  const username = prompt("Enter your Discord username");
  //console.log(username);
  const form = document.getElementById("discord-form");
  //console.log(form);
  try {
    const formData = new FormData(form);
    formData.append("Discord", username);
    //console.log(formData);
    const url = "http://localhost:3000/cweb/contactus";
    const responseData = await postFormDataAsJson({ url, formData });
  } catch (err) {
    console.log(err);
  }
}

// for Swiper used in past events 
var swiper = new Swiper(".past-events-slide-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});