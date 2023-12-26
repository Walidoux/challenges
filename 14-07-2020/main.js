const burger = document.querySelector('.burger-menu');
const navBar = document.querySelector('nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navBar.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (event.target !== navBar && event.target !== burger) {
        burger.classList.remove('active');
        navBar.classList.remove('active');
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        burger.classList.remove('active');
        navBar.classList.remove('active');
    }
});