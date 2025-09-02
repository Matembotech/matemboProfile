const toggle = document.querySelector(".theme-toggle");
const lightIcon = document.querySelector(".light-icon");
const darkIcon = document.querySelector(".dark-icon");
const body = document.body;

// Check kama kuna theme imehifadhiwa
const savedTheme = localStorage.getItem("data-theme") || "light";
body.setAttribute("data-theme", savedTheme);

// show icons kulingana na theme iliyohifandiwa
if (savedTheme === "dark") {
    lightIcon.style.display = "inline";
    darkIcon.style.display = "none";

} else {
    lightIcon.display = "none";
    darkIcon.display = "inline";
}


// toggle theme kwa click
toggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute("data-theme");

    if (currentTheme === "light") {
        body.setAttribute("data-theme", "dark");
        lightIcon.style.display = "inline";
        darkIcon.style.display = "none";

        //save kwenye localstorage
        localStorage.setItem("data-theme", "dark");
       
    }
     else {
        body.setAttribute("data-theme", "light");
        lightIcon.style.display = "none";
        darkIcon.style.display = "inline";

        //save kwenye localstorage
        localStorage.setItem("data-theme", "light");
        
     }
});

