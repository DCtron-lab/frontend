const menuBtn = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", (e) => {
    menuBtn.classList.toggle("open");
    menu.classList.toggle("open");
});