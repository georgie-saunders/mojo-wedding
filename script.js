function rsvp() {
  let response = document.querySelector("button");
  response.innerHTML = "Thank you! You have RSVP'd.";
}

let rsvpButton = document.querySelector("button");
rsvpButton.addEventListener("click", rsvp);
