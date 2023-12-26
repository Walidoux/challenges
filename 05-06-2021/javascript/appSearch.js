const closeButton = document.querySelectorAll('.popup-close_button');
closeButton.forEach(element => {
    element.addEventListener('click', () => {
        const mainElement = element.parentNode;
        mainElement.classList.toggle('removed');
        setTimeout(() => { mainElement.remove(mainElement); }, 225); // 0,225s
    });
});