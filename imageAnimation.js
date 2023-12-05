$(document).ready(function() {

    $("#movingImage").css({
        'height': '50%', // replace with your desired height
        'width': '50%' // replace with your desired width
    });
    function animateImage() {
        $("#movingImage").animate({ left: '100%' }, 3000, function() {
            $(this).animate({ left: '0' }, 3000, function() {
                animateImage(); // Call the function recursively
            });
        });
    }

    // Start the animation when the image is loaded
    $("#movingImage").on('load', function() {
        animateImage();
    });

    // If the image is cached and the load event doesn't fire, start the animation immediately
    if($("#movingImage").complete) {
        animateImage();
    }
});