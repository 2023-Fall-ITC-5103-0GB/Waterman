$(document).ready(function() {
    function showMessage(message, isSuccess) {
      $('#popupMessage').text(message).prepend(isSuccess ? '👍 ' : '⚠️ ');
      $('#popup').fadeIn(400).delay(2500).fadeOut(400);
    }
  
    $('#signupBtn').on('click', function() {
      var name = $('#name').val().trim();
      var email = $('#email').val().trim();
      var password = $('#password').val();
  
      if (name && email && password) {
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        showMessage('Signup Successful!', true);
        
        // Clear the form
        $('#name').val('');
        $('#email').val('');
        $('#password').val('');
        
        // Redirect to home page after a delay
        setTimeout(function() {
        //   window.location.href = 'home.html'; // Replace 'home.html' with your home page URL
        }, 3000);
      } else {
        showMessage('All fields are required!', false);
      }
    });
  
    $('#loginBtn').on('click', function() {
      var email = $('#email').val().trim();
      var password = $('#password').val();
  
      var storedEmail = localStorage.getItem('email');
      var storedPassword = localStorage.getItem('password');
  
      if (email === storedEmail && password === storedPassword) {
        // Redirect to home page
        window.location.href = 'home.html'; // Replace 'home.html' with your home page URL
      } else {
        showMessage('Failed to login!', false);
      }
    });
  });
