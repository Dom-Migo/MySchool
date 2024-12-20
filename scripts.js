const menuToggle = document.querySelector('.navbar-toggler');
const navList = document.querySelector('.navbar-nav');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});
