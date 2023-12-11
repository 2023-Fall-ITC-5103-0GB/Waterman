document.addEventListener('DOMContentLoaded', () => {
    const $ = (selector) => document.querySelector(selector);
    const processEntries = (event) => {
      // Prevent the default form submission
      event.preventDefault();
  
      // get id s from html page
      const order = $('#oid');
      var output = $('#or');
      var output1 = $('#cu');
      var output2 = $('#co');
      var output3 = $('#ord');
      var output4 = $('#li');
      var output5 = $('#am');
      var output6 = $('#ar');
      // creating arrays to store details of customers so that it can be print out later
    const name=['RONY','SIA','RUBY','JACK','SAMUEL','LILLY'];
    const contactDet=['+1 164537892','+1 748254014','+1768243900','+1653458192','+1 673425104'];
    const date=['AUG 6,2023','OCT 5,2023','OCT 28,2023'];
    const items=['xxxx,xxx,xxx','xxx,xxx,xxx,xxx','xxx','xxxxx,xxxxx,xxxx,xxx'];
    const amount=['$56','$789','$120','$90','$200'];
    const arrivalDate=['AUG 6,2023','OCT 5,2023','OCT 28,2023'];
  
      // check user entries and displays error messages for no input
      let isValid = true;
      if (order.value === '') {
        order.nextElementSibling.textContent = '* This field is required.';
        order.nextElementSibling.style.color='red';
        isValid = false;
      } else {
        order.nextElementSibling.textContent = '';
      }
  
      // submit the form if the field are valid
      if (isValid) {
        // calling function and store it in a variable
        var numOfCircles=calculateCircle(order);
        // calling function
        changeColor(numOfCircles);
        // using condition to display the details of Customer
        if(numOfCircles){
        output.innerHTML='<span style="padding-left: 70px;">' + order.value + '</span>';
        output.style.color='white';

        var randomIndex1 = Math.floor(Math.random() * name.length);
        output1.innerHTML ='<span style="padding-left: 60px;">'+ name[randomIndex1]+ '</span>';
        output1.style.color='white';

        var randomIndex2 = Math.floor(Math.random() * contactDet.length);
        output2.innerHTML ='<span style="padding-left: 70px;">'+ contactDet[randomIndex2]+ '</span>';
        output2.style.color='white';

        var randomIndex3 = Math.floor(Math.random() * date.length);
        output3.innerHTML ='<span style="padding-left: 60px;">'+ date[randomIndex3]+ '</span>';
        output3.style.color='white';

        var randomIndex4 = Math.floor(Math.random() * items.length);
        output4.innerHTML ='<span style="padding-left: 60px;">'+ items[randomIndex4]+ '</span>';
        output4.style.color='white';

        var randomIndex5 = Math.floor(Math.random() * amount.length);
        output5.innerHTML ='<span style="padding-left: 60px;">'+ amount[randomIndex5]+ '</span>';
        output5.style.color='white';
          if(numOfCircles!=3){
            var randomIndex6 = Math.floor(Math.random() * arrivalDate.length);
            output6.innerHTML ='<span style="padding-left: 60px;">'+ arrivalDate[randomIndex6]+ '</span>';
            output6.style.color='white';
          }
          else{
            output6.innerHTML ='<span style="padding-left: 50px;">PRODUCT RECEIVED</span>';
          }
        }
      }
    };
    //function to return a random number ,that is,0,1,2,3
    function calculateCircle(order){
        return Math.floor(Math.random() * 4);
    }
    //function to change the color of circle according to the value from calculateCircle() function
    function changeColor(numOfCircles){
        var circles = document.getElementsByClassName('circle');
        for (var i = 0; i < circles.length; i++) {
          circles[i].style.backgroundColor = i < numOfCircles ? 'green' : '#ccc';
        }
    }
  
    // Add submit event listener to the form
    $('#f3').addEventListener('submit', processEntries);

  });
  