//------------Accordion functionality
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//------------Back to top button
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//---------------Form validation and submission
document.getElementById("submit").onclick = function () {
  errorMessage();
};

function errorMessage() {
  var name_error = document.getElementById("errorName");
  if (document.getElementById("name").value == "") {
    // Changing HTML to draw attention
    name_error.innerHTML =
      "<span style='color: red;'>" + "Please enter your name.</span>";
      document.getElementById("name").classList.add("error");
  } else {
    name_error.innerHTML = "";
  }
  var email_error = document.getElementById("errorEmail");
  if (document.getElementById("email").value == "") {
    // Changing HTML to draw attention
    email_error.innerHTML =
      "<span style='color: red;'>" + "Please enter your email.</span>";
    document.getElementById("email").classList.add("error");
  } else {
    email_error.innerHTML = "";
  }
  var phone_error = document.getElementById("errorPhone");
  if (document.getElementById("phone").value == "") {
    // Changing HTML to draw attention
    phone_error.innerHTML =
      "<span style='color: red;'>" + "Please enter your phone number.</span>";
    document.getElementById("phone").classList.add("error");
  } else {
    phone_error.innerHTML = "";
  }

  if ($("input").not(".error")){
    const axios = require("axios").default;

    axios({
      url: "https://formspree.io/f/xnqolzkq",
      method: "post",
      headers: { Accept: "application/json" },
      data: { email: "a.visitor@email.com", message: "Hello!" },
    }).then((response) => {
      console.log(response);
    });
  }

}

