const popup = document.querySelectorAll('.popup_messages');
const popupContent = document.querySelectorAll('.popup_content');
const closePopupButton = document.querySelectorAll('.popup_message-closeButton');

closePopupButton.forEach((buttonElement => {
    buttonElement.addEventListener('click', () => {
        popup.forEach((popupElement) => {
            popupElement.classList.toggle('active');
            popupContent.forEach((popupContentElement) => {
                popupElement.childNodes[1].classList.toggle('active');
            });
        });
    });
}));