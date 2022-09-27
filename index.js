const unreadCounter = document.querySelector(".unread-counter");
const unreadNotifications = document.querySelectorAll("[data-unread]");

const markAllAsRead = () => {
  unreadNotifications.forEach((notif) => {
    notif.setAttribute("data-unread", false);
  });

  unreadCounter.innerText = "0";
};
