const UUID = document.getElementById("UUID");
const editPasswordButton = document.getElementById("editPasswordButton");
const textClipboard = document.getElementById("textClipboard");
const formChanges = document.getElementById("formChanges");
const closeButton = document.getElementById("closeButton");

UUID.addEventListener("click", () => {
  const clipboard = navigator.clipboard;
  clipboard.writeText(UUID.innerText);
  textClipboard.classList.add("active");
  setTimeout(() => {
    textClipboard.classList.remove("active");
  }, 700);
});

const handleFormToggling = () => {
  formChanges.classList.toggle("shown");
};

editPasswordButton.addEventListener("click", handleFormToggling);
closeButton.addEventListener("click", handleFormToggling);
window.addEventListener("keyup", (event) => {
  if (event.key === "Escape" && formChanges.classList.contains("shown"))
    handleFormToggling();
});
