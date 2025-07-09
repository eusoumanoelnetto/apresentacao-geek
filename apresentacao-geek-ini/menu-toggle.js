document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");

    // Fechar menu ao clicar fora
    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target)) {
            menu.classList.remove("menu-open");
        }
    });
});
