document.addEventListener("DOMContentLoaded", () => {
    // Botão de tema
    const toggleButton = document.getElementById("theme-toggle-menu");
    const html = document.documentElement;

    function updateThemeIcon() {
        const currentTheme = html.getAttribute("data-theme");
        if (themeMenuButton) {
            if (currentTheme === "dark") {
                toggleButton.innerHTML = '<i class="fas fa-sun"></i> Dia';
            } else {
                toggleButton.innerHTML = '<i class="fas fa-moon"></i> Noite';
            }
        }
    }

    // Inicializa tema: preferência manual em sessionStorage > preferência do sistema > horário
    const savedTheme = sessionStorage.getItem("theme");
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
    html.setAttribute("data-theme", initialTheme);
    updateThemeIcon();
    // Atualiza tema automaticamente quando a preferência do sistema mudar
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', e => {
        if (!sessionStorage.getItem('theme')) {
            let newTheme;
            if (e.matches) {
                newTheme = 'dark';
            } else {
                const hour = new Date().getHours();
                newTheme = (hour >= 6 && hour < 18) ? 'light' : 'dark';
            }
            html.setAttribute('data-theme', newTheme);
            updateThemeIcon();
        }
    });

    toggleButton.addEventListener("click", () => {
        const currentTheme = html.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        html.setAttribute("data-theme", newTheme);
        sessionStorage.setItem("theme", newTheme);
        updateThemeIcon();
    });
});
