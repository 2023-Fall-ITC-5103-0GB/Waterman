$(document).ready(function () {
    $('.slick-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});
// Your existing dropdown toggle function
function toggleDropdown(menu) {
    const dropContent = menu.querySelector('.drop-content');

    menu.addEventListener('mouseenter', function () {
        dropContent.style.display = 'block';
    });

    menu.addEventListener('mouseleave', function () {
        dropContent.style.display = 'none';
    });
}

// Function to handle package selection
function selectPackage(packageId) {
    const packages = document.querySelectorAll('.package');
    packages.forEach(packageElement => {
        packageElement.classList.remove('selected');
    });

    const selectedPackage = document.getElementById(packageId);
    selectedPackage.classList.add('selected');

    
}
 // Function to show loading overlay
 function showLoadingOverlay() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'flex';
}

// Function to hide loading overlay
function hideLoadingOverlay() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'none';
}

// Toggle dropdown for each menu item
const homeMenu = document.getElementById('home-menu');
const aboutMenu = document.getElementById('about-menu');
const contactMenu = document.getElementById('contact-menu');
const carriersMenu = document.getElementById('carriers-menu');
const healthyMenu = document.getElementById('healthy-menu');

toggleDropdown(homeMenu);
toggleDropdown(aboutMenu);
toggleDropdown(contactMenu);
toggleDropdown(carriersMenu);
toggleDropdown(healthyMenu);

// Add event listeners to show loading overlay when a menu item is clicked
homeMenu.addEventListener('click', showLoadingOverlay);
aboutMenu.addEventListener('click', showLoadingOverlay);
contactMenu.addEventListener('click', showLoadingOverlay);
carriersMenu.addEventListener('click', showLoadingOverlay);
healthyMenu.addEventListener('click', showLoadingOverlay);

// Add event listener to hide loading overlay when the page is fully loaded
window.addEventListener('load', hideLoadingOverlay); 