// Menu Toggle for Mobile
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            document.querySelector('nav ul').classList.toggle('visible');
        });
    }
});

// Basic Form Validation
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;

    if (name === "" || email === "") {
        alert("Name and email must be filled out");
        return false;
    }
    return true;
}
