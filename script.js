// All input variables
const first_name = document.getElementById("first_name");
const password = document.getElementById("password");
const email = document.getElementById("email");
const txt_box = document.getElementById("txt_area");

// All Error variables

const name_error = document.getElementById("name_error");
const password_error = document.getElementById("password_error");
const email_error = document.getElementById("email_error");
const txt_error = document.getElementById("txt_error");

// submit_btn

const submit_btn = document.getElementById("submit_btn");

// For showing and hiding password

const Show_hide_btn = document.getElementById("show_hide_btn");

Show_hide_btn.onclick = (e) => {
  e.preventDefault();
  if (password.type === "password") {
    password.type = "text";
    Show_hide_btn.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    password.type = "password";
    Show_hide_btn.classList.replace("fa-eye", "fa-eye-slash");
  }
};

// Name validation

let validator_name = "";
first_name.addEventListener("input", () => {
  let regex = /^[A-Za-z]+\s[A-Za-z]+$/;

  if (first_name.value === "") {
    name_error.textContent = "";

    name_error.style.visibility = "hidden";

    first_name.nextElementSibling.style.visibility = "hidden";

    return (validator_name = false);
  } else if (!first_name.value.match(/[A-Za-z]+ /)) {
    name_error.textContent = "Valid Name Required";

    name_error.style.visibility = "visible";

    first_name.nextElementSibling.style.visibility = "visible";

    return (validator_name = false);
  } else if (!first_name.value.match(regex)) {
    name_error.textContent = "Full Name Required";

    name_error.style.visibility = "visible";
    first_name.nextElementSibling.classList.remove("green");

    first_name.nextElementSibling.classList.replace(
      "fa-circle-check",
      "fa-circle-exclamation"
    );

    first_name.nextElementSibling.style.visibility = "visible";

    return (validator_name = false);
  } else if (first_name.value.match(regex)) {
    name_error.textContent = "";

    name_error.style.visibility = "hidden";
    first_name.nextElementSibling.classList.replace(
      "fa-circle-exclamation",
      "fa-circle-check"
    );

    first_name.nextElementSibling.classList.add("green");

    first_name.nextElementSibling.style.visibility = "visible";

    return (validator_name = true);
  }
});

first_name.addEventListener("blur", () => {
  name_error.textContent = "";
  name_error.style.visibility = "hidden";
  first_name.nextElementSibling.style.visibility = "hidden";
});

var valid_email = "";
email.addEventListener("input", () => {
  let regex = /[A-Za-z0-9]+\@[a-z]{5}\.[a-z]{3,}/;
  if (email.value === "") {
    email_error.textContent = "";
    email_error.style.visibility = "hidden";
    email.nextElementSibling.style.visibility = "hidden";
    return (valid_email = false);
  }
  if (!email.value.match(regex)) {
    email_error.textContent = "Valid Email Required";
    email_error.style.visibility = "visible";
    email.nextElementSibling.style.visibility = "visible";
    email.nextElementSibling.classList.replace(
      "fa-circle-check",
      "fa-circle-exclamation"
    );
    email.nextElementSibling.classList.remove("green");
    return (valid_email = false);
  } else {
    email_error.textContent = "";
    email_error.style.visibility = "hidden";
    email.nextElementSibling.classList.replace(
      "fa-circle-exclamation",
      "fa-circle-check"
    );
    email.nextElementSibling.classList.add("green");
    email.nextElementSibling.style.visibility = "visible";
    return (valid_email = true);
  }
});

email.addEventListener("blur", () => {
  email_error.textContent = "";
  email_error.style.visibility = "hidden";
  email.nextElementSibling.style.visibility = "hidden";
});

var valid_txt = "";
txt_box.addEventListener("input", () => {
  let len = 30;
  let left_msg = len - txt_box.value.length;
  if (left_msg > 0) {
    txt_error.textContent = `${left_msg} More word Required`;
    txt_error.style.visibility = "visible";
    txt_box.nextElementSibling.style.visibility = "visible";
    return (valid_txt = false);
  } else {
    txt_error.style.visibility = "hidden";
    txt_error.textContent = ``;
    txt_box.nextElementSibling.style.visibility = "hidden";
    return (valid_txt = true);
  }
});

txt_box.addEventListener("blur", () => {
  txt_error.style.visibility = "hidden";
  txt_error.textContent = ``;
  txt_box.nextElementSibling.style.visibility = "hidden";
});

submit_btn.onclick = (e) => {
  if (valid_email !== true || validator_name !== true || valid_txt !== true) {
    e.preventDefault();
    alert("Fill all inputs with Rules");
  }
};
