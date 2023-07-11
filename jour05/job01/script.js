// script.js

// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Check if the current page is the registration page
    if (document.title === 'Inscription') {
      // Redirect to the login page after a successful registration
      const registerForm = document.querySelector('form');
      registerForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
  
        // Perform any necessary form validation before redirection
        // ...
  
        // Redirect to the login page
        window.location.href = 'connexion.php';
      });
    }
  
    // Check if the current page is the login page
    if (document.title === 'Connexion') {
      // Redirect to the home page after a successful login
      const loginForm = document.querySelector('form');
      loginForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
  
        // Perform any necessary form validation before redirection
        // ...
  
        // Redirect to the home page
        window.location.href = 'index.php';
      });
    }
  });
  
