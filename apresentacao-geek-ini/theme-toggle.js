document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".modern-toggle");
    const body = document.body;
    const themeMenuButton = document.getElementById("theme-toggle-menu");

    function updateThemeIcon() {
        const currentTheme = body.getAttribute("data-theme");
        // Atualiza botão do menu móvel
        if (themeMenuButton) {
            if (currentTheme === "dark") {
                themeMenuButton.innerHTML = '<i class="fas fa-sun"></i> Dia';
            } else {
                themeMenuButton.innerHTML = '<i class="fas fa-moon"></i> Noite';
            }
        }
        // Atualiza botão principal (desktop) com mesmo comportamento
        if (toggleButton) {
            if (currentTheme === "dark") {
                toggleButton.innerHTML = '<i class="fas fa-sun"></i> Dia';
            } else {
                toggleButton.innerHTML = '<i class="fas fa-moon"></i> Noite';
            }
        }
    }

    // Carregar tema salvo ou usar preferência do sistema e fallback por hora
    const savedTheme = localStorage.getItem("theme");
    let initialTheme;
    if (savedTheme) {
        initialTheme = savedTheme;
    } else {
        // Se o sistema está em dark, prioriza dark
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            initialTheme = "dark";
        } else {
            // Fallback: considera noite das 18h às 6h
            const hour = new Date().getHours();
            initialTheme = (hour >= 18 || hour < 6) ? "dark" : "light";
        }
        // Não salva no localStorage para permitir reavaliação futura
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
