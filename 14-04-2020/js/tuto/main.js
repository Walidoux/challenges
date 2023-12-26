
const faq1 = document.querySelector('#faq1');
const faq2 = document.querySelector('#faq2');
const faq3 = document.querySelector('#faq3');
const reply1 = document.querySelector('#reply1');
const reply2 = document.querySelector('#reply2');
const reply3 = document.querySelector('#reply3');

faq1.addEventListener('click', () => {
    faq1.classList.toggle('active');
    reply1.classList.toggle('active');
});
faq2.addEventListener('click', () => {
    faq2.classList.toggle('active');
    reply2.classList.toggle('active');
});
faq3.addEventListener('click', () => {
    faq3.classList.toggle('active');
    reply3.classList.toggle('active');
});