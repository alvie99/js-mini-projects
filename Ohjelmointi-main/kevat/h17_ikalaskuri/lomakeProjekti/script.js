// Main screen sections
const formView = document.querySelector("#formView");
const ticketView = document.querySelector("#ticketView");

// Main form elements
const ticketForm = document.querySelector("#ticketForm");
const uploadBox = document.querySelector("#uploadBox");
const avatarInput = document.querySelector("#avatar");
const uploadIcon = document.querySelector(".upload-icon");
const uploadBoxText = document.querySelector(".upload-box p");
const fullNameInput = document.querySelector("#fullName");
const emailInput = document.querySelector("#email");
const githubInput = document.querySelector("#github");

// Places where validation messages will be shown
const avatarError = document.querySelector("#avatarError");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const githubError = document.querySelector("#githubError");

// Ticket text and image targets
const ticketNameHeading = document.querySelector("#ticketNameHeading");
const ticketEmailHeading = document.querySelector("#ticketEmailHeading");
const ticketAvatar = document.querySelector("#ticketAvatar");
const ticketNameCard = document.querySelector("#ticketNameCard");
const ticketGithubCard = document.querySelector("#ticketGithubCard");
const ticketNumber = document.querySelector("#ticketNumber");
const ticketCard = document.querySelector(".ticket-card");
const downloadButton = document.querySelector("#downloadTicket");

// Extra selectors used in several places
const submitButton = document.querySelector(".submit-btn");
const formGroups = document.querySelectorAll(".form-group");
const errorMessages = document.querySelectorAll(".error-message");
const heroTitles = document.querySelectorAll(".hero h1, .hero h2");

// Validation rules for the form fields
const nameRegex = /^[A-Za-zÅÄÖåäö]+(?:[ '-][A-Za-zÅÄÖåäö]+)*$/u;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const githubRegex = /^@?[A-Za-z\d](?:[A-Za-z\d-]{0,37}[A-Za-z\d])?$/;
const allowedAvatarTypes = ["image/jpeg", "image/png"];
const maxAvatarSize = 500 * 1024;

// This stores the current temporary image URL
let currentAvatarPreviewUrl = "";

// Group related fields together to keep the code cleaner
const formFields = {
  avatarInput,
  fullNameInput,
  emailInput,
  githubInput,
};

// Group related error elements together
const formErrors = {
  avatarError,
  nameError,
  emailError,
  githubError,
};

// Group ticket elements together for future updates
const ticketElements = {
  ticketNameHeading,
  ticketEmailHeading,
  ticketAvatar,
  ticketNameCard,
  ticketGithubCard,
  ticketNumber,
};

// Clear every visible error message
function clearErrors() {
  Object.values(formErrors).forEach((errorElement) => {
    errorElement.textContent = "";
  });
}

// Show one error message in the given place
function showError(errorElement, message) {
  errorElement.textContent = message;
}

// Put the upload box back to its default state
function resetAvatarPreview() {
  if (currentAvatarPreviewUrl) {
    URL.revokeObjectURL(currentAvatarPreviewUrl);
    currentAvatarPreviewUrl = "";
  }

  uploadIcon.innerHTML = "Icon";
  uploadBoxText.textContent = "Drag and drop or click to upload";
}

// Show the selected image inside the upload box
function renderAvatarPreview(file) {
  if (currentAvatarPreviewUrl) {
    URL.revokeObjectURL(currentAvatarPreviewUrl);
  }

  currentAvatarPreviewUrl = URL.createObjectURL(file);
  uploadIcon.innerHTML = "";

  const previewImage = document.createElement("img");
  previewImage.src = currentAvatarPreviewUrl;
  previewImage.alt = "Selected avatar preview";
  previewImage.classList.add("upload-preview-image");

  uploadIcon.append(previewImage);
  uploadBoxText.textContent = file.name;
}

// Check if the uploaded image is allowed
function validateAvatarFile(file) {
  if (!file) {
    showError(avatarError, "Please upload an avatar.");
    return false;
  }

  if (!allowedAvatarTypes.includes(file.type)) {
    showError(avatarError, "Please upload a JPG or PNG image.");
    resetAvatarPreview();
    return false;
  }

  if (file.size > maxAvatarSize) {
    showError(
      avatarError,
      "File too large. Please upload a photo under 500KB.",
    );
    resetAvatarPreview();
    return false;
  }

  return true;
}

// Check if the name field is valid
function validateName() {
  const trimmedName = fullNameInput.value.trim();

  if (!trimmedName) {
    showError(nameError, "Please fill your name.");
    return false;
  }

  if (!nameRegex.test(trimmedName)) {
    showError(nameError, "Please enter a valid name.");
    return false;
  }

  return true;
}

// Check if the email field is valid
function validateEmail() {
  const trimmedEmail = emailInput.value.trim();

  if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
    showError(emailError, "Please fill a valid email address.");
    return false;
  }

  return true;
}

// Check if the GitHub username is valid
function validateGithub() {
  const trimmedGithub = githubInput.value.trim();

  if (!trimmedGithub) {
    showError(githubError, "Please enter your GitHub username.");
    return false;
  }

  if (!githubRegex.test(trimmedGithub)) {
    showError(githubError, "Please enter a valid GitHub username.");
    return false;
  }

  return true;
}

// Handle the selected file from click or drag and drop
function handleSelectedAvatar(file, fileList) {
  clearErrors();

  if (!file) {
    resetAvatarPreview();
    return;
  }

  if (!validateAvatarFile(file)) {
    avatarInput.value = "";
    return;
  }

  if (fileList) {
    avatarInput.files = fileList;
  }

  renderAvatarPreview(file);
}

// Build one object with all validated form values
function generateTicketNumber() {
  return `#${Math.floor(10000 + Math.random() * 90000)}`;
}

// Build one object with all validated form values
function collectFormData() {
  const trimmedName = fullNameInput.value.trim();
  const trimmedEmail = emailInput.value.trim();
  const trimmedGithub = githubInput.value.trim();

  return {
    fullName: trimmedName,
    email: trimmedEmail,
    github: trimmedGithub.startsWith("@") ? trimmedGithub : `@${trimmedGithub}`,
    avatarUrl: currentAvatarPreviewUrl,
    ticketNumber: generateTicketNumber(),
  };
}

// Put the collected data into the ticket layout
function renderTicket(data) {
  ticketNameHeading.textContent = data.fullName;
  ticketEmailHeading.textContent = data.email;
  ticketNameCard.textContent = data.fullName;
  ticketGithubCard.textContent = data.github;
  ticketAvatar.src = data.avatarUrl;
  ticketNumber.textContent = data.ticketNumber;
}

// Hide the form and show the finished ticket
function showTicketView() {
  formView.classList.add("hidden");
  ticketView.classList.remove("hidden");
}

// Open the file picker when the upload box is clicked
uploadBox.addEventListener("click", () => {
  avatarInput.click();
});

// Make the upload box usable with keyboard as well
uploadBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    avatarInput.click();
  }
});

// Handle normal file selection from the file picker
avatarInput.addEventListener("change", () => {
  handleSelectedAvatar(avatarInput.files[0]);
});

// Highlight the upload box while a file is dragged over it
uploadBox.addEventListener("dragover", (event) => {
  event.preventDefault();
  uploadBox.classList.add("drag-active");
});

// Remove highlight when the dragged file leaves the box
uploadBox.addEventListener("dragleave", () => {
  uploadBox.classList.remove("drag-active");
});

// Handle a file dropped on the upload box
uploadBox.addEventListener("drop", (event) => {
  event.preventDefault();
  uploadBox.classList.remove("drag-active");
  handleSelectedAvatar(event.dataTransfer.files[0], event.dataTransfer.files);
});

// Validate the form and then build the ticket
ticketForm.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();

  const selectedFile = avatarInput.files[0];
  const isAvatarValid = validateAvatarFile(selectedFile);
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isGithubValid = validateGithub();

  if (!isAvatarValid || !isNameValid || !isEmailValid || !isGithubValid) {
    return;
  }

  const submittedData = collectFormData();

  renderTicket(submittedData);
  showTicketView();
});

// Save the visible ticket as an image file
downloadButton.addEventListener("click", async () => {
  if (typeof html2canvas !== "function") {
    console.error("html2canvas is not loaded.");
    return;
  }

  const originalBackground = ticketCard.style.background;
  const originalBackdropFilter = ticketCard.style.backdropFilter;
  const originalWebkitBackdropFilter = ticketCard.style.webkitBackdropFilter;

  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    ticketCard.style.background =
      "linear-gradient(90deg, rgba(45, 28, 88, 0.96) 0%, rgba(89, 58, 140, 0.92) 100%)";
    ticketCard.style.backdropFilter = "none";
    ticketCard.style.webkitBackdropFilter = "none";

    const canvas = await html2canvas(ticketCard, {
      backgroundColor: null,
      scale: 2,
      useCORS: true,
    });

    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");

    link.href = image;
    link.download = "coding-conf-ticket.png";
    link.click();
  } catch (error) {
    console.error("Ticket download failed:", error);
  } finally {
    ticketCard.style.background = originalBackground;
    ticketCard.style.backdropFilter = originalBackdropFilter;
    ticketCard.style.webkitBackdropFilter = originalWebkitBackdropFilter;
  }
});
