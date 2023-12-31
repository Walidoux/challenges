
function mod() {
    const checkbox = document.querySelector('#mod');
    const body = document.querySelector('body');
    if(checkbox.checked == true) {
        body.classList.toggle('active');
    } else {
        body.classList.toggle('active');
    }
}
