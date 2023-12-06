$(document).ready(function() {
    // Hide one of the images initially
    $('#image2').hide();

    function toggleImages() {
        $('#image1').toggle(1000);
        $('#image2').toggle(1000);
    }

    // Call toggleImages initially
    toggleImages();

    // Repeat the toggleImages function every 4 seconds
    setInterval(toggleImages, 4000);
});