function darkMode(){
    document.body.classList.toggle("dark");
    // Added if/else condiditon to change the color of past event heading, faq heading and header wave 
    if((document.getElementById("p-heading").style.color==="white") && (document.getElementById("f-heading").style.color==="white") || (document.getElementById("h-wave").style.fill==="#292c35")){
        document.getElementById("p-heading").style.color="black";
        document.getElementById("f-heading").style.color="black";
        document.getElementById("h-wave").style.fill="#ffffff";
    }
    else{
        document.getElementById("p-heading").style.color="white";
        document.getElementById("f-heading").style.color="white";
        document.getElementById("h-wave").style.fill="#292c35";
    }
}
const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
});

//Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

