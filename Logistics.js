$(document).ready(function() {
    // This code will run after the DOM is ready, which is a good place to apply initial jQuery animations
    $("#mainImage").hide().fadeIn(2000); // First hide the image and then fade it in over 2 seconds
});

// This code will run after everything is loaded, including images and iframes
window.addEventListener('load', function() {
    console.log('All assets are loaded, including images');

    // Now you can perform additional checks or operations with your image here
    // If you want to use jQuery inside this event, you can do so as well
    $("#mainImage").animate({
        opacity: 1,
        left: "+=200px" // For this to work, the image's CSS must have `position: relative` or `position: absolute`
    }, 2000);
});
