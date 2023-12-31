const buttonMenu = document.querySelector('.menu');

buttonMenu.addEventListener('click', () => {
    const body = document.querySelector('body');
    body.classList.toggle('active');
});

function showUnshow(element) {
    element.parentNode.classList.toggle('active');
}