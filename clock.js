const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h2");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hours = date.getHours();
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();
}

init();
