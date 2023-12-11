
document.addEventListener('DOMContentLoaded', () => {
  const $ = (selector) => document.querySelector(selector);

  const processEntries = (event) => {
    // Prevent the default form submission
    event.preventDefault();

    // get form controls to check for validity
    const fname = $('#fname');
    const lname = $('#lname');
    const email = $('#emailid');
    const mob = $('#mnumber');
    const issue = $('#textarea');
    const file = $('#myFile');

    

    // check user entries and displays error messages for no input
    let isValid = true;
    if (fname.value === '') {
      fname.nextElementSibling.textContent = '* This field is required.';
      fname.nextElementSibling.style.color='red';
      isValid = false;
    } else {
      fname.nextElementSibling.textContent = '';
    }

    if (lname.value === '') {
      lname.nextElementSibling.textContent = '*This field is required.';
      lname.nextElementSibling.style.color='red';
      isValid = false;
    } else {
      lname.nextElementSibling.textContent = '';
    }

    if (email.value === '') {
      email.nextElementSibling.textContent = '* This field is required.';
      email.nextElementSibling.style.color='red';
      isValid = false;
    } else {
      email.nextElementSibling.textContent = '';
    }

    if (mob.value === '') {
      mob.nextElementSibling.textContent = '* This field is required.';
      mob.nextElementSibling.style.color='red';
      isValid = false;
    } else {
      mob.nextElementSibling.textContent = '';
    }

    if (issue.value === '') {
      issue.nextElementSibling.textContent = '* This field is required.';
      issue.nextElementSibling.style.color='red';
      console.log('New color:', issue.nextElementSibling.style.color);
      isValid = false;
    } else {
      issue.nextElementSibling.textContent = '';
    }

    if (file.value === '') {
      file.nextElementSibling.textContent = '* Please select a file.';
      file.nextElementSibling.style.color='red';
      isValid = false;
    } else {
      file.nextElementSibling.textContent = '';
    }

    // submit the form if all fields are valid
    if (isValid) {
      event.target.submit();
      alert("You are successfully submitted Service Request Form.We will contact you within 24 hrs.");
    }
  };

  // Add submit event listener to the form
  $('#f1').addEventListener('submit', processEntries);
});




//function to upload customer reviews
function review() {
  var rating = document.getElementsByName('rating');
  var outputRating;
//looping through radio buttons to get the value
  for (var i = 0; i < rating.length; i++) {
    if (rating[i].checked) {
      outputRating = rating[i].value;
    }
  }

  printStars(outputRating);
}
//function to print the stars
function printStars(num) {
  var stars = '';
  for (var i = 0; i < num; i++) {
    stars += '⭐';
  }

  var opinion = document.getElementById("textarea1").value;
  var outputRating1 = document.getElementById("customer1");
  //printing output in the webpage
  outputRating1.innerHTML =" \" "+ opinion +" \" "+"<br>"+"<p>Rating: " +stars;
}

