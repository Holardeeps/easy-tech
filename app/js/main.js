const hamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
// const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

hamburger.addEventListener("click", function(){
    console.log("open hamburger")

    if(header.classList.contains("open")){
        header.classList.remove("open");
        body.classList.remove("noscroll");
        fadeElems.forEach(function(e){
            e.classList.remove("fadeIn");
            e.classList.add("fadeOut");
        })
    } else {
        body.classList.add("noscroll");
        header.classList.add("open");
        fadeElems.forEach(function(e){
            e.classList.remove("fadeOut");
            e.classList.add("fadeIn");
        });
    };
})