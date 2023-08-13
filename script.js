window.addEventListener("DOMContentLoaded", () => {
  let change_win_img = () => {
    let window_Width = window.innerWidth;
    let body = document.querySelector("body");
    let new_img_url =
      window_Width < 375
        ? "images/bg-intro-mobile.png"
        : "images/bg-intro-desktop.png";

    body.style.backgroundImage = `url(${new_img_url})`;
  };

  change_win_img();

  window.addEventListener('resize', ()=>{
    change_win_img();
  })

  let first_name = document.getElementById("first_name");

  let last_name = document.getElementById("last_name");

  let email = document.getElementById("email");

  let password = document.getElementById("password");

  let form = document.querySelector("form");

  form.addEventListener("submit", (eve) => {
    let isValid = true;

    if (!first_name.value.trim()) {
      displayerror(first_name, "First Name can't be empty");
      isValid = false;
    } else {
      hideerror(first_name);
    }
    if (!last_name.value.trim()) {
      displayerror(last_name, "Last Name can't be empty");
      isValid = false;
    } else {
      hideerror(last_name);
    }

    if (!isValidEmail(email.value.trim())) {
      displayerror(email, "Looks like this is not a valid email");
      isValid = false;
    } else {
      hideerror(email);
    }

    if (password.value == "") {
      displayerror(password, "Password can't be empty");
      isValid = false;
    } else if (password.value.length < 8) {
      displayerror(password, "Password must at-least 8 Characters");
      isValid = false;
    } else {
      hideerror(password);
    }

    if (!isValid) {
      eve.preventDefault();
    }
  });

  let displayerror = (inputelement, errormsg) => {
    let smallElement = inputelement.nextElementSibling;
    smallElement.style.display = "flex";
    smallElement.style.color = "red";
    smallElement.textContent = errormsg;
  };

  let hideerror = (inputelement) => {
    let smallElement = inputelement.nextElementSibling;
    smallElement.textContent = "";
    smallElement.style.display = "none";
  };

  let isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
});
