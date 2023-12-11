
// JavaScript to handle dropdown visibility
const homeMenu = document.getElementById('home-menu');
const aboutMenu = document.getElementById('about-menu');
const contactMenu = document.getElementById('contact-menu');
const carriersMenu = document.getElementById('carriers-menu');
const healthyMenu = document.getElementById('healthy-menu');

// Function to toggle dropdown visibility
function toggleDropdown(menu) {
    const dropContent = menu.querySelector('.drop-content');

    menu.addEventListener('mouseenter', function () {
        dropContent.style.display = 'block';
    });

    menu.addEventListener('mouseleave', function () {
        dropContent.style.display = 'none';
    });
}

// Toggle dropdown for each menu item
toggleDropdown(homeMenu);
toggleDropdown(aboutMenu);
toggleDropdown(contactMenu);
toggleDropdown(carriersMenu);
toggleDropdown(healthyMenu);

document.addEventListener('DOMContentLoaded', function () {
    const loadingOverlay = document.getElementById('loadingOverlay');

    // Function to show loading overlay
    function showLoadingOverlay() {
        loadingOverlay.style.display = 'flex';
    }

    // Function to hide loading overlay
    function hideLoadingOverlay() {
        loadingOverlay.style.display = 'none';
    }

    // Attach click event to the menu items
    const menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', showLoadingOverlay);
    });

    // Hide loading overlay when the page is fully loaded
    window.addEventListener('load', hideLoadingOverlay);
});
// JavaScript for the fade-in animation
document.addEventListener('DOMContentLoaded', function () {
    const mainContent = document.querySelector('.main-content');
    mainContent.classList.add('fade-in');
});
