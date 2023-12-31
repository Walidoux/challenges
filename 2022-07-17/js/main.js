const formContainer = document.getElementById("formContainer");
const formUserContainer = document.getElementById("formUserContainer");
const formSpawnContainer = document.getElementById("formSpawnContainer");

const usersInfo = document.querySelectorAll("#userInfo");
const confirmSelectButton = document.getElementById("confirmSelectButton");
const outputPopup = document.getElementById("outputPopup");

const [emailInput, passwordInput] = [
  document.getElementById("emailInput"),
  document.getElementById("passwordInput"),
];
const [errorEmailMessage, errorPasswordMessage] = [
  document.getElementById("errorEmail"),
  document.getElementById("errorPassword"),
];

let auth_fails = 0;
const userDataCharacter = {};

window.addEventListener("load", () => {
  usersInfo.forEach((userInfo) => {
    if (userInfo.classList.contains("selected"))
      return confirmSelectButton.removeAttribute("disabled");
  });
});

formContainer.addEventListener("submit", (event) => {
  event.preventDefault();
  axios
    .post("http://127.0.0.1:3000/auth", {
      data: { email: emailInput.value, password: passwordInput.value },
    })
    .then((res) => {
      if (res.data.message.email === "AUTH_EMAIL_OK") {
        errorEmailMessage.classList.remove("visible");
        emailInput.parentElement.classList.remove("incorrect");
      } else {
        errorEmailMessage.classList.add("visible");
        emailInput.parentElement.classList.add("incorrect");
      }

      if (res.data.message.password === "AUTH_PASSWORD_OK") {
        errorPasswordMessage.classList.remove("visible");
        passwordInput.parentElement.classList.remove("incorrect");
      } else {
        errorPasswordMessage.classList.add("visible");
        passwordInput.parentElement.classList.add("incorrect");
      }

      if (
        !(res.data.message.email === "AUTH_EMAIL_OK") ||
        !(res.data.message.password === "AUTH_PASSWORD_OK")
      ) {
        auth_fails++;
        if (auth_fails === 3) {
          handleBlockUserAccount();
        }
      }

      if (
        res.data.message.email === "AUTH_EMAIL_OK" &&
        res.data.message.password === "AUTH_PASSWORD_OK"
      ) {
        outputPopup.classList.add("visible", "success");
        outputPopup.innerText = "Connexion réussie !";

        setTimeout(() => {
          outputPopup.classList.remove("visible");
          formContainer.classList.add("hidden");

          setTimeout(() => {
            formUserContainer.classList.add("visible");
          }, 250);
        }, 1000);
      }
    })
    .catch((err) => console.log(err));
});

const handleBlockUserAccount = () => {
  outputPopup.innerText = "Compte bloqué suite à 3 tentatives consécutives.";
  outputPopup.classList.add("visible", "error");
  setTimeout(() => {
    outputPopup.classList.remove("visible", "error");
  }, 10000);
  axios.post("http://127.0.0.1:3000/auth", { message: "ACCOUNT_BLOCKED" });
  auth_fails = 0;
};

usersInfo.forEach((userInfo) => {
  userInfo.addEventListener("click", () => {
    if (!userInfo.classList.contains("blocked"))
      usersInfo.forEach((userInfo) => {
        userInfo.classList.remove("selected");
      });

    if (!userInfo.classList.contains("blocked")) {
      userInfo.classList.toggle("selected");
    }

    confirmSelectButton.removeAttribute("disabled");
  });
});

formUserContainer.addEventListener("submit", (event) => {
  event.preventDefault();
  usersInfo.forEach((userInfo) => {
    if (
      !userInfo.classList.contains("selected") &&
      userInfo.classList.contains("blocked")
    ) {
      const userData = userInfo.childNodes[3].children;
      [...userData].map((data) => {
        const dataKey = data.children[0].dataset.key;
        const dataValue = data.children[1].textContent;
        console.log(data.children[1]);
        userDataCharacter[dataKey] = dataValue;
      });
    }
  });

  if (!confirmSelectButton.hasAttribute("disabled")) {
    /* axios.post("http://127.0.0.1:3000/auth", { character_selected: "Jean_Rose" }); */
    console.log("oui", userDataCharacter);
    window.close();
    /* setTimeout(() => {
      formUserContainer.classList.remove("visible");
      formSpawnContainer.classList.add("visible");
    }, 300); */
  }
});
