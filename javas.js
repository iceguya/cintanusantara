document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const navLinks = document.getElementById("nav-links");

    if (burgerMenu) {
        burgerMenu.addEventListener("click", function () {
            console.log("Burger menu clicked!"); // Tes apakah event terdeteksi
            navLinks.classList.toggle("active");
        });
    } else {
        console.error("Burger menu element not found!");
    }
});
