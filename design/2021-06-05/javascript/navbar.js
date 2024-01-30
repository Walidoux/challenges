const navLinksList = document.querySelector('.nav-links_list');
const menuBurger = document.querySelector('.menu');
menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('opened');
    navLinksList.classList.toggle('opened');
    document.body.classList.toggle('active');
});