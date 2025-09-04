document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle-sedes");
    const liSubmenu = toggle.closest(".submenu");

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

    // Evita que un click dentro del menú lo cierre
    const menu = document.getElementById("sedes-menu");
    menu.addEventListener("click", (e) => e.stopPropagation());

    // Cierra al hacer click fuera
    document.addEventListener("click", close);
});
