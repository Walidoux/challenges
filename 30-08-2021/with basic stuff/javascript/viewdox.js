const chatboxComments = document.getElementById("chatboxComments");
const mainChatBoxForm = document.getElementById("mainChatBoxForm");
const chatTextInput = document.getElementById("chatTextInput");

mainChatBoxForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = {
    image: "assets/images/profil.jpg",
    name: "Walid",
    description: chatTextInput.value,
  };
  chatTextInput.value = "";
  const comment = document.createElement("div");
  comment.classList.add("comment");
  comment.innerHTML = `
    <img src=${user.image} class="comment_userImage" alt="User Profile" />
    <div class="comment_rightContent">
        <p class="comment_rightContent-username">${user.name}</p>
        <p class="comment_rightContent-textinfo">${user.description}</p>
    </div>
  `;
  chatboxComments.append(comment);
});
