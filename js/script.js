// ==========================================
// Business Collateral
// Mobile Navigation
// ==========================================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}