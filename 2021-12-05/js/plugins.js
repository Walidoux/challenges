document.getElementById("balance").innerText = "1000 $tancredits";
/* if the using cookie doesn't exist, create it and give it a default value of "classicPirateStealer" */
if (document.cookie.indexOf("using") == -1) {
  document.cookie = "using=classicPirateStealer";
}

/* get the using cookie, and find the element with a plugin attribute, which has the cookie value as the value */
let using = document.cookie
  .split("; ")
  .find((cookie) => cookie.startsWith("using="));
let plugin = document.querySelector(`[plugin="${using.split("=")[1]}"]`);

/* if the plugin is found, add the class "using" and remove the "use" from the button found in "plugin_status" */
if (plugin) {
  plugin
    .querySelector(".plugin_status")
    .querySelector(".plugin_button")
    .classList.add("using");
  plugin
    .querySelector(".plugin_status")
    .querySelector(".plugin_button")
    .classList.remove("use");
  plugin
    .querySelector(".plugin_status")
    .querySelector(".plugin_button").innerText = "Using";
}

document.querySelectorAll(".use").forEach((x) => {
  x.addEventListener("click", () => {
    document.cookie = `using=${this.parentElement.parentElement.getAttribute(
      "plugin"
    )}`;
    location.reload();
  });
});

var yo = {
  "Classic PS Premium": "6",
  "Classic PS Canary": "16",
};

document.querySelectorAll(".buy").forEach((x) => {
  x.addEventListener("click", function () {
    document.querySelector(".modal-backdrop").classList.add("active");
    document
      .querySelector(".modal")
      .querySelector(".title")
      .querySelector(".normal").innerText =
      this.parentElement.parentElement.querySelector(".plugin_name").innerText;
    document
      .querySelector(".modal")
      .querySelector(".price")
      .querySelector(".normal").innerText =
      yo[
        this.parentElement.parentElement.querySelector(".plugin_name").innerText
      ] + " $tanCredit";
  });
});

document.querySelectorAll(".modal_button").forEach((x) => {
  x.addEventListener("click", () => {
    document.querySelector(".modal-backdrop").classList.remove("active");
  });
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 52,
      density: {
        enable: true,
        value_area: 631.3280775270874,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
