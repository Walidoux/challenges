const mainElement = document.getElementById("main");
const popupSearch = document.getElementById("popupSearch");
const searchInput = document.getElementById("searchInput");
const closeButton = document.getElementById("closeButton");
const outputSection = document.getElementById("outputSection");
const swipeUpButton = document.getElementById("swipeUpButton");
const mainContainers = document.querySelectorAll("main .container");
const tableInformations = document.querySelectorAll("#tableInformations");
const tablePopupContent = document.getElementById("tablePopupContent");

const handleAction = () => {
  popupSearch.classList.remove("active");
  searchInput.parentNode.classList.remove("active");
};

closeButton.addEventListener("click", () => handleAction());

window.addEventListener("keyup", (event) => {
  if (
    popupSearch.classList.contains("active") &&
    (event.code === "Escape" ||
      (event.code === "Enter" && popupSearch.validity))
  ) {
    handleAction();
  }
});

swipeUpButton.addEventListener("click", () => {
  outputSection.classList.toggle("shown");
  mainElement.classList.toggle("hidden");
});

mainContainers.forEach((container) => {
  container.addEventListener("click", () => {
    if (mainElement.children[0].classList.contains("hidden")) return;
    popupSearch.classList.toggle("active");
    setTimeout(() => {
      searchInput.focus();
      searchInput.parentNode.classList.toggle("active");
    }, 150);
  });
});

tableInformations.forEach((tableInf) => {
  tableInf.addEventListener("mousedown", (event) => {
    const position = { xCords: event.layerX, yCords: event.layerY };
    const rowElement = event.target.classList.contains("table_content")
      ? event.target.parentNode
      : event.target.parentNode.parentNode;
    const data = {
      username: rowElement.cells[0].innerText,
      passowrd: rowElement.cells[1].innerText,
      ip: rowElement.cells[2].innerText,
      email: rowElement.cells[3].innerText,
      id: rowElement.cells[4].innerText,
    };
    console.log(data);
    if (!tablePopupContent.classList.contains("shown")) {
      tablePopupContent.style.top = `${position.yCords}px`;
      tablePopupContent.style.left = `${position.xCords}px`;
    }
    switch (event.which) {
      case 1:
        tablePopupContent.classList.toggle("shown");
        break;
    }
  });
});
