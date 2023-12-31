function toggleClasses(HTMLChildrenElement) {
    Array.from(HTMLChildrenElement)
        .forEach((element) => {
            element.classList.toggle('active');
        });
}

const boxOptionsLI = document.querySelectorAll('.box-options > ul > li');
boxOptionsLI.forEach((boxOptionsLiElement) => {
    boxOptionsLiElement.addEventListener('click', (_event) => {
        const ulBox = boxOptionsLiElement.parentNode;
        const priceElements = ulBox.parentNode.children[1];
        toggleClasses(ulBox.children);
        toggleClasses(priceElements.children);
    });
});