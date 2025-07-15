document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".modern-toggle");
    const body = document.body;
    const themeMenuButton = document.getElementById("theme-toggle-menu");

    function updateThemeIcon() {
        const currentTheme = body.getAttribute("data-theme");
        if (themeMenuButton) {
            if (currentTheme === "dark") {
                themeMenuButton.innerHTML = '<i class="fas fa-sun"></i> Dia';
            } else {
                themeMenuButton.innerHTML = '<i class="fas fa-moon"></i> Noite';
            }
        }
    }

    // Carregar tema salvo no localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    body.setAttribute("data-theme", savedTheme);
    updateThemeIcon();

    toggleButton.addEventListener("click", () => {
        const currentTheme = body.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";

        // Atualizar atributo de tema
        body.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeIcon();
    });
});
