const dismissBtn = document.querySelector(".js-dismiss-btn");
const form = document.querySelector(".js-form");
const email = document.querySelector(".js-email");
const errorText = document.querySelector(".js-error-text");
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid = email.value.length === 0 || emailRegExp.test(email.value);

  if (!isValid || email.value.length === 0) {
    handleInValid();
  } else {
    handleValid();
  }
});

dismissBtn.addEventListener("click", function () {
  handleDismiss();
});

function handleDismiss() {
  document.querySelector(".js-main").classList.remove("inactive");
  document.querySelector(".js-sub-content").classList.add("inactive");
  email.value = "";
}

function handleInValid() {
  email.classList.add("invalied");
  errorText.textContent = "Valid email required";
  errorText.classList.add("error");
  errorText.classList.remove("inactive");
}

function handleValid() {
  document.querySelector(".js-main").classList.add("inactive");
  document.querySelector(".js-sub-content").classList.remove("inactive");
  document.querySelector(".js-confirm-email").textContent = email.value;
}
