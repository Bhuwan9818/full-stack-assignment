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

document.addEventListener("DOMContentLoaded", function () {
    let icon = document.querySelector(".icon");
    let menuHidden = document.querySelector(".collapse");

    icon.addEventListener("click", function () {
        menuHidden.classList.toggle("showData");
        console.log(menuHidden);
    });
});
