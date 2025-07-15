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

    // Inicializa tema: preferêncial manual em localStorage > preferência do sistema dark > horário (6h–18h = dia) e não salva tema automático
    const savedTheme = localStorage.getItem("theme");
    let initialTheme;
    if (savedTheme) {
        initialTheme = savedTheme;
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            initialTheme = 'dark';
        } else {
            const hour = new Date().getHours();
            initialTheme = (hour >= 6 && hour < 18) ? 'light' : 'dark';
        }
    }
    body.setAttribute("data-theme", initialTheme);
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
