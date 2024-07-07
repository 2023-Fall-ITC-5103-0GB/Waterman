
// function submitForm() {
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var phone = document.getElementById('phone').value;
//     var texta = document.getElementsByClassName('textarea').value;

//     let isValid = true;

//     // Clear previous messages
//     document.getElementById('nameError').textContent = '';
//     document.getElementById('emailError').textContent = '';
//     document.getElementById('phoneError').textContent = '';
//     document.getElementById('textError').textContent = '';

//     // Check and display error message for each field
//     if (!name) {
//         document.getElementById('nameError').textContent = 'This field is required.';
//         isValid = false;
//     }
//     // if (!email) {
//     //     document.getElementById('emailError').textContent = 'This field is required.';
//     //     isValid = false;
//     // }

//     const email = 'example@example.com';

//     if (!isValidEmail(email)) {
//     console.log('Valid email');
//     document.getElementById('emailError').textContent = 'This field is required valid email.';
//     } else {
//     console.log('Invalid email');
//     document.getElementById('emailError').textContent = '';
//     submitForm();
//     }

//     if (!phone) {
//         document.getElementById('phoneError').textContent = 'This field is required.';
//         isValid = false;
//     }

//     if (!texta) {
//         document.getElementById('textError').textContent = 'This field is required.';
//         isValid = false;
//     }


//     if (!isValid) {
//         return ;
//     }

//     else {
//         displayMessage();        
//     }
// }

// function displayThanksMessage() {
//     // Display the "Thanks for your feedback" message
//     alert('Thanks for your feedback');
// }

// function isValidEmail(email) {
//     // Regular expression for basic email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var texta = document.querySelector('textarea').value; // Use querySelector for textarea

    let isValid = true;

    // Clear previous messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('textError').textContent = '';

    // Check and display error message for each field
    if (!name) {
        document.getElementById('nameError').textContent = 'This field is required.';
        isValid = false;
    }

    if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
        isValid = false;
    }

    if (!phone) {
        document.getElementById('phoneError').textContent = 'This field is required.';
        isValid = false;
    }

    if (!texta) {
        document.getElementById('textError').textContent = 'This field is required.';
        isValid = false;
    }

    if (isValid) {
        displayThanksMessage();
    }
}

function displayThanksMessage() {
    // Display the "Thanks for your feedback" message
    alert('Thanks for your feedback');
}

function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Get the phone input element
const phoneInput = document.getElementById('phone');

// Add event listener for input to allow only numeric values
phoneInput.addEventListener('input', function(event) {
    const inputValue = event.target.value;
    // Remove non-numeric characters using a regular expression
    const numericValue = inputValue.replace(/\D/g, '');
    // Update the input field value to only contain numeric characters
    event.target.value = numericValue;
});

