$(document).ready(function() {
    // Move the subscription section next to the panel
    $('.subscription-section').detach().insertAfter('.col-lg-3');

    // Set the subscription section and col-lg-3 to display inline-flex
    $('.col-lg-3, .subscription-section').css('display', 'inline-flex');
});

window.addEventListener('load', function() 
{
    const navigation = document.querySelector('.info-section');
    navigation.classList.add('pop-out');
});


