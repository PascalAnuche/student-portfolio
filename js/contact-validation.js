// contact-validation.js — client-side validation for the contact form.
// Runs on submit (not on every keystroke): blocks empty fields, checks the
// email and phone formats, and shows an inline error next to each invalid
// field. On a valid submit it shows a simulated success message.

const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('contact-name');
const emailInput = document.getElementById('contact-email');
const phoneInput = document.getElementById('contact-phone');
const messageInput = document.getElementById('contact-message');
const successMessage = document.getElementById('form-success');

// Matches one-or-more non-space/@ chars, then "@", a domain, a dot, and a TLD.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Matches 7 to 15 digits and nothing else — letters, spaces, and symbols all fail.
const PHONE_PATTERN = /^\d{7,15}$/;

function validateName(value) {
  return value.trim() ? '' : 'Please enter your full name.';
}

function validateEmail(value) {
  const trimmed = value.trim();
  if (!trimmed) return 'Please enter your email address.';
  return EMAIL_PATTERN.test(trimmed)
    ? ''
    : 'That doesn’t look like a valid email — check for a missing "@" or domain.';
}

function validatePhone(value) {
  const trimmed = value.trim();
  if (!trimmed) return 'Please enter your phone number.';
  return PHONE_PATTERN.test(trimmed)
    ? ''
    : 'Phone number must be digits only (7–15 digits, no spaces or symbols).';
}

function validateMessage(value) {
  return value.trim() ? '' : 'Please write a short message.';
}

const fields = [
  { input: nameInput, validate: validateName },
  { input: emailInput, validate: validateEmail },
  { input: phoneInput, validate: validatePhone },
  { input: messageInput, validate: validateMessage }
];

function setFieldState(input, errorText) {
  const wrapper = input.closest('.form-field');
  const errorElement = wrapper.querySelector('.form-field__error');
  if (errorText) {
    wrapper.classList.add('form-field--error');
    wrapper.classList.remove('form-field--valid');
    errorElement.textContent = errorText;
    input.setAttribute('aria-invalid', 'true');
  } else {
    wrapper.classList.remove('form-field--error');
    wrapper.classList.add('form-field--valid');
    errorElement.textContent = '';
    input.removeAttribute('aria-invalid');
  }
}

function clearFieldState(input) {
  const wrapper = input.closest('.form-field');
  wrapper.classList.remove('form-field--error', 'form-field--valid');
  wrapper.querySelector('.form-field__error').textContent = '';
  input.removeAttribute('aria-invalid');
}

// Validates every field, marks each one, and returns the first invalid input
// (or null if the whole form is valid) so focus can be moved to the problem.
function validateForm() {
  let firstInvalid = null;
  fields.forEach(function (field) {
    const errorText = field.validate(field.input.value);
    setFieldState(field.input, errorText);
    if (errorText && !firstInvalid) {
      firstInvalid = field.input;
    }
  });
  return firstInvalid;
}

contactForm.addEventListener('submit', function (event) {
  // This is a static site with no backend, so the "send" is simulated —
  // but the validation and success flow behave like the real thing.
  event.preventDefault();
  successMessage.hidden = true;

  const firstInvalid = validateForm();
  if (firstInvalid) {
    firstInvalid.focus();
    return;
  }

  successMessage.hidden = false;
  contactForm.reset();
  fields.forEach(function (field) { clearFieldState(field.input); });
});

// Real-time feedback on the email field only, and only after it has been
// flagged on a submit, so the error clears the moment the address is fixed.
emailInput.addEventListener('input', function () {
  const wrapper = emailInput.closest('.form-field');
  if (wrapper.classList.contains('form-field--error')) {
    setFieldState(emailInput, validateEmail(emailInput.value));
  }
});
