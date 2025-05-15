// 1. Button click changes its color randomly
const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', () => {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  colorBtn.style.backgroundColor = randomColor;
  colorBtn.textContent = 'Color changed!';
});

// Bonus: Double click resets the button text and color
colorBtn.addEventListener('dblclick', () => {
  colorBtn.style.backgroundColor = '';
  colorBtn.textContent = 'Click me to change color';
});

// 2. Image gallery click highlights image
const images = document.querySelectorAll('.gallery-img');
images.forEach(img => {
  img.addEventListener('click', () => {
    images.forEach(i => i.style.borderColor = 'transparent');
    img.style.borderColor = 'red';
  });
});

// 3. Tabs switching
const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    const tabNum = tab.dataset.tab;
    document.querySelector(`.tab-panel[data-tab="${tabNum}"]`).classList.add('active');
  });
});

// 4. Form validation
const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Reset errors
  emailError.textContent = '';
  passwordError.textContent = '';

  let valid = true;

  // Email validation: simple regex
  const emailValue = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    emailError.textContent = 'Please enter a valid email.';
    valid = false;
  }

  // Password validation
  if (passwordInput.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters.';
    valid = false;
  }

  if (valid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});

// Bonus: real-time feedback
emailInput.addEventListener('input', () => {
  emailError.textContent = '';
});
passwordInput.addEventListener('input', () => {
  passwordError.textContent = '';
});

// 5. Keypress detection - log key pressed to console
document.addEventListener('keypress', (e) => {
  console.log(`You pressed: ${e.key}`);
});

