document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-principal");
    const menu = document.querySelector(".menu");

    toggle.addEventListener("click", function () {
        menu.classList.toggle("show");
    });
});
