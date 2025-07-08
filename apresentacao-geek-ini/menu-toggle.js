document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("hamburger-menu");
    const menu = document.getElementById("menu");

    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("menu-open");
        btn.classList.toggle("is-active");
    });

    // Fechar menu ao clicar fora
    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.remove("menu-open");
            btn.classList.remove("is-active");
        }
    });
});
