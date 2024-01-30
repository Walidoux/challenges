const page = document.querySelector('body');
const rightSideContent = document.querySelectorAll('.right-side_content');
const leftSideForms = document.querySelectorAll('form');
const buttonEffect =  document.querySelectorAll('.onClickButton');

buttonEffect.forEach(buttonElement => {
    buttonElement.addEventListener('click', () => {
        page.classList.toggle('active');
        leftSideForms.forEach(sideFormsContent => (sideFormsContent.classList.toggle('clicked')));
        rightSideContent.forEach(sideContentElement => (sideContentElement.classList.toggle('clicked')));
    });
});