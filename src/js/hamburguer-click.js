const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu")

hamburger.addEventListener("click",() =>{
menu.classList.toggle("active");
hamburger.classList.toggle("active")
});
