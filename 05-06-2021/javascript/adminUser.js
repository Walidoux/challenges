const inputSelector = document.querySelectorAll('.input_selector');
inputSelector.forEach(selectorElement => {
    selectorElement.addEventListener('click', () => {
        const iconList = selectorElement.children[0].children[1];
        selectorElement.classList.toggle('active');
        iconList.classList.toggle('active');
    });
});

const options = document.querySelectorAll('.options');
options.forEach((element => {
    element.addEventListener('click', (e) => {
        const list = e.target.parentNode.parentNode;
        list.children[0].children[0].innerHTML = e.target.textContent;
        list.parentNode.children[1].value = e.target.textContent;
        list.children[1].children[1].classList.remove('active');
    });
}));

const plusCalc = document.querySelectorAll('#plus');
const minusCalc = document.querySelectorAll('#minus');
plusCalc.forEach(element => {
    element.addEventListener('click', (e) => {
        const valueElement = e.target.parentNode.parentNode.children[1];
        valueElement.value++;
    });
});
minusCalc.forEach(element => {
    element.addEventListener('click', (e) => {
        const valueElement = e.target.parentNode.parentNode.children[1];
        if (valueElement.value <= 0) {
            return null;
        } else {
            valueElement.value--;
        }
    });
});

const checkboxButton = document.querySelectorAll('.checkbox_input');
checkboxButton.forEach(element  => {
    element.addEventListener('click', (e) => {
        const container = e.target.parentNode;
        container.classList.toggle('active');
    });
});

const validation = document.querySelector('.validation');
validation.addEventListener('click', (e) => {
    const element = e.target.parentNode.parentNode.children[2]
    element.classList.toggle('active');
});