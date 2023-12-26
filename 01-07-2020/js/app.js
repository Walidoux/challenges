const checkbox = document.getElementById('checkbox');
const prices = document.querySelectorAll('.annuel');

checkbox.addEventListener('click', () => {
    prices.forEach(price => {
        const priceElement = price.parentNode;
        priceElement.classList.toggle('active');
    });
});