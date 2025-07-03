document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("hamburger-menu");
    const menu = document.getElementById("menu");

    btn.addEventListener("click", () => {
        menu.classList.toggle("menu--open");
        btn.classList.toggle("is-active");
    });
});
