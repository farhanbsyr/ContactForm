document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll(".radio-button");

  radioButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Ambil input radio di dalam radio-button yang diklik
      const radioInput = this.querySelector('input[type="radio"]');

      // Set properti checked dari input yang sesuai
      radioInput.checked = true;

      // Hilangkan kelas 'selected' dari semua radio-button
      document.querySelectorAll(".radio-button").forEach((btn) => {
        btn.classList.remove("selected");
      });

      // Tambahkan kelas 'selected' ke radio-button yang sedang dipilih
      this.classList.add("selected");

      // Ubah warna background saat diklik
    });
  });

  const form = document.querySelector("form");
  const firstNameInput = form.elements.firstname;
  const lastNameInput = form.elements.lastname;
  const emailInput = form.elements.email;
  const queryInputs = form.querySelectorAll('input[name="query"]');
  const messageInput = form.elements.message;
  const consentCheckbox = form.elements.consent;

  // Function to validate first name
  const validateFirstName = () => {
    const firstName = firstNameInput.value.trim();
    const errorElement = document.getElementById("usernameValidation2");

    if (firstName === "") {
      errorElement.innerText = "First Name is required";
      return false;
    } else {
      errorElement.innerText = "";
      return true;
    }
  };

  // Function to validate last name
  const validateLastName = () => {
    const lastName = lastNameInput.value.trim();
    const errorElement = document.getElementById("usernameValidation");

    if (lastName === "") {
      errorElement.innerText = "Last Name is required";
      return false;
    } else if (lastName.length < 10) {
      errorElement.innerText = "Last Name must be at least 10 characters long";
      return false;
    } else {
      errorElement.innerText = "";
      return true;
    }
  };

  // Function to validate email
  const validateEmail = () => {
    const email = emailInput.value.trim();
    const errorElement = document.getElementById("emailValidation");

    if (email === "") {
      errorElement.innerText = "Email Address is required";
      return false;
    } else if (!isValidEmail(email)) {
      errorElement.innerText = "Please enter a valid email address";
      return false;
    } else {
      errorElement.innerText = "";
      return true;
    }
  };

  // Function to validate radio buttons
  const validateQueryType = () => {
    const errorElement = document.getElementById("queryValidation");

    let isChecked = false;
    queryInputs.forEach((input) => {
      if (input.checked) {
        isChecked = true;
      }
    });

    if (!isChecked) {
      errorElement.innerText = "Please select a Query Type";
      return false;
    } else {
      errorElement.innerText = "";
      return true;
    }
  };

  // Function to validate message
  const validateMessage = () => {
    const message = messageInput.value.trim();
    const errorElement = document.getElementById("messageValidation");

    if (message === "") {
      errorElement.innerText = "Message is required";
      return false;
    } else {
      errorElement.innerText = "";
      return true;
    }
  };

  // Function to validate consent checkbox
  const validateConsent = () => {
    const errorElement = document.getElementById("consentValidation");

    if (!consentCheckbox.checked) {
      errorElement.innerText =
        "To submite this form, please consent to be contacted";
      return false;
    } else {
      errorElement.innerText = "";
      return true;
    }
  };

  // Helper function to validate email format
  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Event listeners for blur events
  firstNameInput.addEventListener("blur", validateFirstName);
  lastNameInput.addEventListener("blur", validateLastName);
  emailInput.addEventListener("blur", validateEmail);
  queryInputs.forEach((input) => {
    input.addEventListener("change", validateQueryType);
  });
  queryInputs.forEach((input) => {
    input.addEventListener("blur", validateQueryType);
  });
  messageInput.addEventListener("blur", validateMessage);
  consentCheckbox.addEventListener("change", validateConsent);
  consentCheckbox.addEventListener("blur", validateConsent);

  // Form submission handler
  form.addEventListener("submit", function (event) {
    // Prevent form submission
    event.preventDefault();

    // Run all validation functions
    const isValidFirstName = validateFirstName();
    const isValidLastName = validateLastName();
    const isValidEmailInput = validateEmail();
    const isValidQueryType = validateQueryType();
    const isValidMessage = validateMessage();
    const isValidConsent = validateConsent();

    // If all inputs are valid, submit the form (for demonstration purposes)
    if (
      isValidFirstName &&
      isValidLastName &&
      isValidEmailInput &&
      isValidQueryType &&
      isValidMessage &&
      isValidConsent
    ) {
      alert("Form submitted successfully!"); // Replace with your submission logic
      form.reset(); // Reset the form after successful submission
    } else {
      alert("Please fill out the form correctly."); // Replace with your error handling logic
    }
  });
});
