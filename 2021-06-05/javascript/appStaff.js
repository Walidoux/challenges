const reminderPopUp = document.querySelector('.reminder-popup')
const firstTimeUser = localStorage.getItem('first_time');
const progressBar = document.querySelector(".popup-progress_bar");

if (!firstTimeUser) {
    console.log("tefe");
    localStorage.setItem('first_time','1');
    runProgressBar();
    setTimeout(() => { reminderPopUp.classList.add('active'); }, 1000);
}

function runProgressBar() {
    let i = 0;
    if (i == 0) {
        i = 1;
        let width = 0;
        let id = setInterval(frame, 100);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                reminderPopUp.classList.remove('active');
                i = 0;
        } else {
                width++;
                progressBar.style.width = width + "%";
            }
        }
    }
}