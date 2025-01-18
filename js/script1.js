document.addEventListener("DOMContentLoaded", function () {
    let menuItem = document.querySelector(".menu-item");
    let megaMenu = document.querySelector(".mega-menu");

    menuItem.addEventListener("mouseenter", function () {
        megaMenu.style.display = "block";
    });

    menuItem.addEventListener("mouseleave", function () {
        megaMenu.style.display = "none";
    });
});