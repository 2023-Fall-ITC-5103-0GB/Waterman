
function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var texta = document.getElementsByClassName('textarea').value;

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
    if (!email) {
        document.getElementById('emailError').textContent = 'This field is required.';
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


    if (!isValid) {
        return;
    }

    // var resultList = document.getElementById('resultList');
    // resultList.innerHTML = `
    //     <li>Name: ${name}</li>
    //     <li>Email: ${email}</li>
    //     <li>Insurance Type: ${insurance}</li>
    // `;
    // resultList.style.display = 'block';
}