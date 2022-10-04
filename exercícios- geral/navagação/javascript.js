const transition = document.querySelector(".hamburguer");
const navmenu = document.querySelector(".nav-menu");

transition.addEventListener("click", () => {
    transition.classList.toggle('active');
    navmenu.classList.toggle('active');
})