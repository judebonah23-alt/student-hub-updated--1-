/* ---------- 1. Get Started button (JavaScript + DOM) ---------- */
document.getElementById("getStartedBtn").addEventListener("click", function () {
  document.getElementById("heroMessage").textContent =
    "Welcome! Explore our student resources below.";
});

/* ---------- 2. Service buttons (DOM manipulation) ---------- */
function showServiceMessage(event, message) {
  event.preventDefault(); // stop the "#" link from jumping to the top
  const box = document.getElementById("serviceMessage");
  box.textContent = message;
  box.classList.remove("d-none"); // make the message visible
}

document.getElementById("studyBtn").addEventListener("click", function (event) {
  showServiceMessage(event, "Study resources are coming soon!");
});
document.getElementById("toolsBtn").addEventListener("click", function (event) {
  showServiceMessage(event, "Online tools are coming soon!");
});
document.getElementById("eventsBtn").addEventListener("click", function (event) {
  showServiceMessage(event, "Upcoming events are coming soon!");
});

/* ---------- 3. Contact form (JavaScript) ---------- */
document.getElementById("sendBtn").addEventListener("click", function (event) {
  event.preventDefault(); // prevent the page from refreshing

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  formMessage.classList.remove("d-none", "alert-success", "alert-danger");

  if (name === "" || email === "" || message === "") {
    formMessage.classList.add("alert-danger");
    formMessage.textContent = "Please complete all required fields.";
  } else {
    formMessage.classList.add("alert-success");
    formMessage.textContent = "Thank you, " + name + "! Your message has been sent.";
    document.getElementById("contactForm").reset(); // clear the fields
  }
});

/* ---------- 4. jQuery: hide/show contact information ---------- */
$("#toggleContactBtn").click(function () {
  $("#contactInfo").toggle();

  if ($("#contactInfo").is(":visible")) {
    $(this).text("Hide Contact Information");
  } else {
    $(this).text("Show Contact Information");
  }
});

/* ---------- 5. jQuery: highlight a service card ---------- */
$(".service-card").click(function () {
  $(".service-card").removeClass("border-primary border-2");
  $(this).addClass("border-primary border-2"); // $(this) = the card that was clicked
});
