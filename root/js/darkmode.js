document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-dark-mode");
    const themeClair = document.getElementById("theme-clair");
    const themeSombre = document.getElementById("theme-sombre");

    function setTheme(theme) {
        const isDark = theme === "sombre";
        themeSombre.disabled = !isDark;
        themeClair.disabled = isDark;
        localStorage.setItem("theme", theme);
    }

    const savedTheme = localStorage.getItem("theme") || "clair";
    setTheme(savedTheme);


    toggleBtn.addEventListener("click", () => {
        const currentTheme = themeSombre.disabled ? "sombre" : "clair";
        setTheme(currentTheme);
    });
});