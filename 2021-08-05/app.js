AOS.init();

const parallaxEffect = document.querySelectorAll("#parallaxEffect");
window.addEventListener("scroll", () => {
  const offset = window.pageYOffset;
  for (const currentElement of parallaxEffect) {
    currentElement.style = `transform: translateY(${offset * 0.2 + "px"})`;
  }
});
