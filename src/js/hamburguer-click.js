const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuBlur = document.querySelector(".menu-blur");
const languageOptions = document.querySelectorAll(".language-option");

function toggleMenu(isOpen) {
    menu.classList.toggle("active", isOpen);
    menuBlur.classList.toggle("active", isOpen);
    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    document.body.classList.toggle("menu-open", isOpen);
}

hamburger.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("active");

    toggleMenu(isOpen);
});

menuBlur.addEventListener("click", () => {
    toggleMenu(false);
});

languageOptions.forEach((option) => {
    option.addEventListener("click", () => {
        languageOptions.forEach((item) => item.classList.remove("active"));
        option.classList.add("active");
        document.documentElement.lang = option.dataset.lang === "en" ? "en" : "pt-br";
    });
});
