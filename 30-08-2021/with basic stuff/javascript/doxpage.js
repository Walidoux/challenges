const asideTools = document.querySelectorAll("#asideTool");
const asideTextareaInput = document.getElementById("asideTextareaInput");
const passwordVisiblity = document.getElementById("passwordVisiblity");

for (const tool of asideTools) {
  tool.addEventListener("click", () => {
    switch (tool.value) {
      case "imageTag":
        handleTagsGeneration("[img][/img]");
        break;
      case "stuff":
        handleTagsGeneration("[stuff][/stuff]");
        break;
    }
  });
}

function handleTagsGeneration(output) {
  asideTextareaInput.value += output;
}

function handlePasswordVisibility() {
  passwordVisiblity.classList.toggle("allowed");
  passwordVisiblity.disabled = !passwordVisiblity.disabled;
}
