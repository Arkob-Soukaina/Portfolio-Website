// Reload the page when the logo is clicked
document.getElementById('refreshLogo').addEventListener('click', function() {
    location.reload();
});

// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle tab switching
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Side menu functionality
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// Submit form data using fetch
const scriptURL = 'https://script.google.com/macros/s/AKfycbwJoB6IMx2OaDUokApPcaB6oOBeJUd6B1LyH3BAPkz_uv7oVds8ddjngZ0nHD2ljGEj8g/exec';
const form = document.forms['contactForm'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message));
});

// JavaScript to handle smooth scrolling
document.addEventListener('DOMContentLoaded', function () {
    // Select the "Projects" button
    var projectsButton = document.querySelector('.projects');

    // Select the target section ("portfolio")
    var portfolioSection = document.getElementById('portfolio');

    // Add click event listener to the button
    projectsButton.addEventListener('click', function (event) {
        // Prevent the default behavior of the link
        event.preventDefault();

        // Scroll to the portfolio section
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
    });
});
