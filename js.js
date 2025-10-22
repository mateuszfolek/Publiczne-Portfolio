document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.onclick = e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
});

BurgerIcon = document.getElementById("burger");
BurgerIcon.addEventListener('click', function() {
    const dropdown = document.querySelector(".dropdown-menu");
    const ShiftSection = document.querySelector("#main");
    const isMenuOpen = dropdown.style.display === "block";

    if (isMenuOpen) {
        dropdown.style.display = "none";
        ShiftSection.classList.remove("dropdown-menu-open");
    } else {
        dropdown.style.display = "block";
        ShiftSection.classList.add("dropdown-menu-open");
    }
    ShiftSection.classList.add("dropdown-menu-anim");

    document.querySelectorAll(".dropdown-menu .dropdown-a").forEach(option => {
        option.addEventListener("click", function() {
            dropdown.style.display = "none";
            ShiftSection.classList.remove("dropdown-menu-open");
        });
    });
})


const elements = document.querySelectorAll('h2, .skill-row, .skill-row-reverse');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
});

elements.forEach(element => {
    observer.observe(element);
});


disclaimer = document.getElementById("overlay");
disclaimer.addEventListener('click', function(){
    disclaimer.classList.add("overlay-alternative")
});