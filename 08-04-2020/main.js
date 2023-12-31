const btn = document.querySelector('.box-burger');
let action = false;

btn.addEventListener('click', () => {
    if(!action) {
        btn.classList.add('open');
        action = true;
    } else {
        btn.classList.remove('open');
        action = false;
    }
});