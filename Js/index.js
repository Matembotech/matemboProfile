const toggle = document.querySelector(".theme-toggle");
const lightIcon = document.querySelector(".light-icon");
const darkIcon = document.querySelector(".dark-icon");
const body = document.body;

// default theme
body.setAttribute("data-theme", "light");

toggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute("data-theme");

    if (currentTheme === "light") {
        body.setAttribute("data-theme", "dark");
        lightIcon.style.display = "inline";
        darkIcon.style.display = "none";
    }
     else {
        body.setAttribute("data-theme", "light");
        lightIcon.style.display = "none";
        darkIcon.style.display = "inline";
     }
});