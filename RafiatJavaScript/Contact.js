// function sub() {
//   var email = document.getElementById('email1').value;
//   let isValidEmail = true;
//   if (isValidEmail = true) {
//     return subscription();
// }


//   document.getElementById('emailError').textContent = '';
//   if (!email) {
//     document.getElementById('emailError').textContent = 'This field is required.';
//     isValidEmail = false;
// }
// }

function validateSubscription() {
var email = document.getElementById('email1').value;
if (!isValidEmail(email)) {
    document.getElementById('emailError').textContent = 'This field is required.';
} else {
     document.getElementById('emailError').textContent = '';
    subscription();
}
}

function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function subscription() {
    let name1 = document.getElementById('email1').value;
    console.log('Thanks for subscribing!' + name1);
    document.getElementById('email1').value = '';

    let message = document.createElement('div');
    message.textContent = 'Thanks for subscribing! ' + name1;
    document.querySelector('.response').appendChild(message);

    message.style.color = 'navy';
    message.style.fontSize = 'x-large';
    message.style.fontFamily = 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif';

    // Hide the message after 3 seconds
    setTimeout(function() {
        message.style.display = 'none';
    }, 5000);
  }


//      //html example
// <form onsubmit="return validateSubscription()">
//     <input type="email" placeholder="Enter email address" required id="email1">
//     <span id="emailError" style="display: none; color: red;"></span>
//     <button type="submit" class="button_1">Subscribe</button>
// </form>
// <br>
// <div class="response"></div>

//      //javascript example
// function validateSubscription() {
//     var email = document.getElementById('email1').value;

//     if (!email || !isValidEmail(email)) {
//         document.getElementById('emailError').textContent = 'Please enter a valid email.';
//         document.getElementById('emailError').style.display = 'block';
//         return false; // Prevent form submission
//     } else {
//         document.getElementById('emailError').style.display = 'none';
//         subscription();
//         return false; // Prevent form submission
//     }
// }

// function isValidEmail(email) {
//     // Regular expression for basic email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// function subscription() {
//     let name1 = document.getElementById('email1').value;
//     console.log('Thanks for subscribing!' + name1);
//     document.getElementById('email1').value = '';

//     let message = document.createElement('div');
//     message.textContent = 'Thanks for subscribing! ' + name1;
//     document.querySelector('.response').appendChild(message);

//     message.style.color = 'navy';
//     message.style.fontSize = 'x-large';
//     message.style.fontFamily = 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif';
// }
