// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // JavaScript to trigger the fade-in animation
document.addEventListener("DOMContentLoaded", function() {
    // Get the element to fade in
    var fadeElement = document.querySelector(".fade-in");
  
    // Add the active class to trigger the animation
    fadeElement.classList.add("active");
  });

  const button = document.getElementById('myButton');
const tooltip = document.getElementById('tooltip');

// Show the tooltip when the button is hovered
button.addEventListener('mouseover', function() {
  tooltip.classList.remove('hidden');
});

// Hide the tooltip when the mouse leaves the button
button.addEventListener('mouseout', function() {
  tooltip.classList.add('hidden');
});

// Position the tooltip relative to the mouse cursor
button.addEventListener('mousemove', function(event) {
  tooltip.style.top = (event.pageY + 10) + 'px';
  tooltip.style.left = (event.pageX + 10) + 'px';
});


const contactForm = document.getElementById('contactForm');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popupText');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Perform input validation
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  if (nameInput.value === '') {
    displayPopup('Please enter your name');
  } else if (emailInput.value === '') {
    displayPopup('Please enter your email');
  } else if (!isValidEmail(emailInput.value)) {
    displayPopup('Please enter a valid email');
  } else if (messageInput.value === '') {
    displayPopup('Please enter your message');
  } else {
    // Form inputs are valid, you can proceed with form submission or other actions
    displayPopup('Form submitted successfully');
    contactForm.reset();
  }
});

function displayPopup(message) {
  popupText.textContent = message;
  popup.classList.remove('hidden');
  setTimeout(function() {
    popup.classList.add('hidden');
  }, 3000); // Hide the popup after 3 seconds
}

function isValidEmail(email) {
  // Basic email validation regex
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}
