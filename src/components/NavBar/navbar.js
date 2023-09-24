const nav = document.querySelector("nav");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    lastScrollY = window.scrollY;

    if (lastScrollY > 380) {
        nav.classList.add("nav-down");
    }else {
        nav.classList.remove("nav-down");
    }
})

