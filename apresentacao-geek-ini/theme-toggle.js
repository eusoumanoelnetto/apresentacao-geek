document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".modern-toggle");
    const body = document.body;

    // Carregar tema salvo no localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    body.setAttribute("data-theme", savedTheme);

    toggleButton.addEventListener("click", () => {
        const currentTheme = body.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";

        // Atualizar atributo de tema
        body.setAttribute("data-theme", newTheme);

        // Salvar tema no localStorage
        localStorage.setItem("theme", newTheme);
    });
});
