const popup = document.querySelectorAll('.popup-link');
const close_popup = document.querySelectorAll('.popup');

popup.forEach(pop => {
    const popup_screen = pop.parentNode.parentNode;
    pop.addEventListener('click', () => {
        popup_screen.classList.toggle('active');
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            popup_screen.classList.remove('active');
        }
    });
});

close_popup.forEach(pop => {
    const popup_screen = pop.parentNode.parentNode;
    pop.addEventListener('click', () => {
        popup_screen.classList.remove('active');
    });
});