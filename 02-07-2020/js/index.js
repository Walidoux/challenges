const dropList = document.querySelectorAll('header nav ul li.drop > a');
const nav_links = document.querySelector("header nav ul.nav-links");
const mobile_menu = document.querySelector(".mobile-menu-btn .mobile-menu");

const burger = document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    nav_links.classList.toggle('nav-active');
    mobile_menu.classList.toggle('active');
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        nav_links.classList.remove('nav-active');
        mobile_menu.classList.remove('active');
    }
});

document.addEventListener('click', (event) => {
    if (event.target !== nav_links && event.target !== mobile_menu) {
        nav_links.classList.remove('nav-active');
        mobile_menu.classList.remove('active');
    }
});

dropList.forEach((drop) => {
    const dropdown = drop.parentElement.childNodes[3];
    drop.addEventListener('click', (_event) => {
        dropdown.classList.toggle('active');
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            dropdown.classList.remove('active');
        }
    });

    document.addEventListener('click', (event) => {
        if (event.target !== drop) {
            dropdown.classList.remove('active');
        }
    });
});