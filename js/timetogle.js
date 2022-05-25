/***************************8 toggle menu **************/
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
    nav.classList.toggle("open");
});

/************************** toggle times ************* */
const toggler = document.querySelector(".toggleTimes");
const toggler2 = document.querySelector(".toggleTimes2");
const toggler3 = document.querySelector(".toggleTimes3");
const toggler4 = document.querySelector(".toggleTimes4");
const toggler5 = document.querySelector(".toggleTimes5");

const times = document.querySelector(".The-times");
const times2 = document.querySelector(".The-times2");
const times3 = document.querySelector(".The-times3");
const times4 = document.querySelector(".The-times4");
const times5 = document.querySelector(".The-times5");

toggler.addEventListener("click", () => {
    times.classList.toggle("open");
});

toggler2.addEventListener("click", () => {
    times2.classList.toggle("open");
});

toggler3.addEventListener("click", () => {
    times3.classList.toggle("open");
});

toggler4.addEventListener("click", () => {
    times4.classList.toggle("open");
});

toggler5.addEventListener("click", () => {
    times5.classList.toggle("open");
});


