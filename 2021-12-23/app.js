const container = document.getElementById("container");
const notifications = document.getElementById("notifs");

const handleNotificationsToggler = () => {
  container.classList.toggle("blurred");
  notifications.classList.toggle("shown");
};

setTimeout(() => {
  handleNotificationsToggler();
}, 1000);
