document.addEventListener("DOMContentLoaded", () => {
    // Botão de tema
    const toggleButton = document.getElementById("theme-toggle-menu");
    const html = document.documentElement;

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

    // Inicializa tema: preferência manual em localStorage (expira em 2 dias) > preferência do sistema dark > horário (6h–18h = dia)
    const savedTheme = localStorage.getItem("theme");
    const savedTimestamp = localStorage.getItem("themeTimestamp");
    const expireMs = 2 * 24 * 60 * 60 * 1000; // 2 dias em ms
    let initialTheme;
    let validSaved = false;
    if (savedTheme && savedTimestamp) {
        const age = Date.now() - parseInt(savedTimestamp, 10);
        if (age < expireMs) {
            validSaved = true;
        } else {
            localStorage.removeItem("theme");
            localStorage.removeItem("themeTimestamp");
        }
    }
    if (validSaved) {
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
        if (!localStorage.getItem('theme')) {
            let newTheme;
            if (e.matches) {
                newTheme = 'dark';
            } else {
                const hour = new Date().getHours();
                newTheme = (hour >= 6 && hour < 18) ? 'light' : 'dark';
            }
            body.setAttribute('data-theme', newTheme);
            updateThemeIcon();
        }
    });

    toggleButton.addEventListener("click", () => {
        const currentTheme = html.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        html.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        // Salvar timestamp para expirar preferência em 2 dias
        localStorage.setItem("themeTimestamp", Date.now().toString());
        updateThemeIcon();
    });
});
