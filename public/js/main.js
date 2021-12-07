document.querySelector(".menu-btn").addEventListener("click", () =>{
    document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-cards', {delay: 250});
ScrollReveal().reveal('.banner', {delay: 250});
ScrollReveal().reveal('.social', {delay: 250});
