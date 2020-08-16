const NAME_FORM = document.querySelector(".js-name");
const NAME_INPUT = NAME_FORM.querySelector("input");

const UserName = "";

function saveNameLS(NAME) {
  localStorage.setItem("UserName", NAME);
}

function handleSubmit(event) {
  const NAME = NAME_INPUT.value;
  saveNameLS(NAME);
}

function init() {
  const UserName = localStorage.getItem("UserName");

  if (UserName === null) {
    NAME_FORM.addEventListener("submit", handleSubmit);
  } else {
    NAME_FORM.innerHTML = `<span class="js-username">Hi, ${UserName}!!</span>`;
  }
}

init();
