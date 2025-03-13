document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

function toggleMenu() {
    const dropdown = document.querySelector(".dropdown-menu");
    const aboutSection = document.querySelector("#about");
    const mainContent = document.querySelector("main");
    const isMenuOpen = dropdown.style.display === "block";

    if (isMenuOpen) {
        dropdown.style.display = "none";
        document.body.style.overflow = "auto";
        aboutSection.classList.remove("dropdown-menu-open");
        mainContent.classList.remove("shifted-content");
    } else {
        dropdown.style.display = "block";
        document.body.style.overflow = "hidden";
        aboutSection.classList.add("dropdown-menu-open");
        mainContent.classList.add("shifted-content");
    }
    
}
