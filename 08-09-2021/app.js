AOS.init();

const navigationButton = document.getElementById("navigationButton");
const navigationBar = document.getElementById("navigationBar");
navigationButton.addEventListener("click", handleToggleElements);

window.addEventListener("keydown", (event) => {
  if (navigationBar.classList.contains("active") && event.key === "Escape") {
    handleToggleElements();
  }
});

function handleToggleElements() {
  navigationButton.classList.toggle("active");
  navigationBar.classList.toggle("active");
  document.body.classList.toggle("active");
}
