document.addEventListener("DOMContentLoaded", () => {
    initSubmenuSedes();
    initHamburgerMenu();
});

/* --- SUBMENÚ SEDES --- */
function initSubmenuSedes() {
    const toggle = document.getElementById("toggle-sedes");
    const liSubmenu = toggle?.closest(".submenu");

    if (!toggle || !liSubmenu) return;

    const open = () => {
        liSubmenu.classList.add("open");
        toggle.setAttribute("aria-expanded", "true");
        toggle.textContent = "Sedes ▲";
    };

    const close = () => {
        toggle.setAttribute("aria-expanded", "false");
        liSubmenu.classList.remove("open");
        toggle.textContent = "Sedes ▼";
    };

    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        liSubmenu.classList.contains("open") ? close() : open();
    });

    const menu = document.getElementById("sedes-menu");
    menu.addEventListener("click", (e) => e.stopPropagation());

    document.addEventListener("click", close);
}

/* --- MENÚ HAMBURGUESA --- */
function initHamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.getElementById("nav-links");

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        navLinks.classList.toggle("active");
    });

    document.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

    navLinks.addEventListener("click", (e) => e.stopPropagation());
}
