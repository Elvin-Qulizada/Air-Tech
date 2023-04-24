let nav = document.querySelector("nav"),
navLinks = document.querySelector(".nav__links"),
navLanguage = document.querySelector(".nav__language"),
hamburgerBtn = document.querySelector(".hamburger_btn"),
hamburgerContent = document.querySelector(".hamburger-content");
document.addEventListener("scroll",function(){
    nav.classList.toggle("sticky",window.scrollY > 0);
    navLinks.classList.toggle("sticky__nav__links",window.scrollY > 0);
    navLanguage.classList.toggle("sticky__nav__language",window.scrollY > 0);
})
hamburgerBtn.addEventListener("click",function(){
    hamburgerContent.classList.toggle("hamburger-open")
})