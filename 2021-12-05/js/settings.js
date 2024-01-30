if (document.cookie.length < 5) {
  document.cookie.split(";").forEach(function (c) {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
  createCookie("disableqrcode", "true", 3);
  createCookie("obfuscate", "false", 3);
  createCookie("injectNotify", "false", 3);
  createCookie("logoutNotify", "false", 3);
  createCookie("logoutmode", "instant", 3);
  createCookie("embedColor", "#0075FF", 3);
  createCookie("webhookProtect", "true", 3);
}
function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function ToBool(arg) {
  return arg == "true";
}
function eraseCookie(name) {
  createCookie(name, "", -1);
}

var disableqrcode = document.getElementById("disableQRAuth");
disableqrcode.checked = ToBool(readCookie("disableqrcode"));
disableqrcode.addEventListener("change", (event) => {
  createCookie("disableqrcode", event.currentTarget.checked, 3);
});

var obfuscate = document.getElementById("obfuscate");
obfuscate.checked = ToBool(readCookie("obfuscate"));
obfuscate.addEventListener("change", (event) => {
  createCookie("obfuscate", event.currentTarget.checked, 3);
});

var injectNotif = document.getElementById("injectNotify");
injectNotif.checked = ToBool(readCookie("injectNotify"));
injectNotif.addEventListener("change", (event) => {
  createCookie("injectNotify", event.currentTarget.checked, 3);
});

var logoutNotify = document.getElementById("logoutNotify");
logoutNotify.checked = ToBool(readCookie("logoutNotify"));
logoutNotify.addEventListener("change", (event) => {
  createCookie("logoutNotify", event.currentTarget.checked, 3);
});
var logoutmode = document.getElementById("logoutMode");
logoutmode.value = readCookie("logoutmode");
logoutmode.addEventListener("change", (event) => {
  createCookie("logoutmode", event.currentTarget.value, 3);
});

var colorembed = document.getElementById("embedColor");
colorembed.value = readCookie("embedColor");
colorembed.addEventListener("change", (event) => {
  createCookie("embedColor", event.currentTarget.value, 3);
});
var webhookProtect = document.getElementById("webhookProtect");
webhookProtect.checked = readCookie("webhookProtect");
webhookProtect.addEventListener("change", (event) => {
  createCookie("webhookProtect", event.currentTarget.checked, 3);
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
