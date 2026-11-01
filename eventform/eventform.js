const form = document.querySelector("#eventForm");
const ticketType = document.querySelector("#ticketType");
const dynamicFieldContainer = document.querySelector("#dynamicFieldContainer");
const dynamicLabel = document.querySelector("#dynamicLabel");
const dynamicInput = document.querySelector("#dynamicInput");
const output = document.querySelector("#output");

// Toggle dynamic input based on Type selection
function updateDynamicField() {
  const selectedType = ticketType.value;

  if (selectedType === "student") {
    dynamicFieldContainer.hidden = false;
    dynamicLabel.textContent = "Student I#";
    dynamicLabel.setAttribute("for", "dynamicInput");
    dynamicInput.value = "";
    dynamicInput.focus();
  } else if (selectedType === "guest") {
    dynamicFieldContainer.hidden = false;
    dynamicLabel.textContent = "Access Code";
    dynamicLabel.setAttribute("for", "dynamicInput");
    dynamicInput.value = "";
    dynamicInput.focus();
  } else {
    dynamicFieldContainer.hidden = true;
    dynamicInput.value = "";
  }
}

ticketType.addEventListener("change", updateDynamicField);

// Date comparison helper (must be strictly after today)
function isNotFutureDate(dateString) {
  if (!dateString) return true;

  // Split YYYY-MM-DD to avoid timezone shifting
  const [year, month, day] = dateString.split("-").map(Number);
  const selectedDate = new Date(year, month - 1, day);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return selectedDate <= today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.innerHTML = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = ticketType.value;
  const eventDate = form.eventDate.value;
  const dynamicVal = dynamicInput.value.trim();

  const errors = [];

  // Required basic field checks
  if (!firstName) errors.push("Please enter a first name.");
  if (!lastName) errors.push("Please enter a last name.");
  if (!email) errors.push("Please enter an email address.");
  if (!type) errors.push("Please select a ticket type.");

  // Date validation
  if (!eventDate || isNotFutureDate(eventDate)) {
    errors.push("Please choose a date later than today.");
  }

  // Type-specific validation
  if (type === "student") {
    const nineDigitPattern = /^\d{9}$/;
    if (!nineDigitPattern.test(dynamicVal)) {
      errors.push("Student I# must be 9 digits");
    }
  } else if (type === "guest") {
    if (dynamicVal !== "EVENT131") {
      errors.push("Access Code must be EVENT131");
    }
  }

  // Render errors below form if any fail
  if (errors.length > 0) {
    errors.forEach((err) => {
      const p = document.createElement("p");
      p.className = "error-message";
      p.textContent = err;
      output.appendChild(p);
    });
    return;
  }

  // Success: Render ticket details matching reference
  output.innerHTML = `
    <div class="ticket-display">
      <h2>Ticket Created</h2>
      <p>${firstName} ${lastName}</p>
      <p>${type}</p>
      <p>${eventDate}</p>
    </div>
  `;

  // Reset form and UI state
  form.reset();
  updateDynamicField();
});