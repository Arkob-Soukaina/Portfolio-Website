

document.addEventListener("DOMContentLoaded", function () {
    // Get the "See more" button and additional projects
    const seeMoreBtn = document.getElementById("see-more-btn");
    const additionalProjects = document.querySelectorAll(".additional-work");

    // Function to show the additional projects
    function showAdditionalProjects() {
        additionalProjects.forEach(function (project) {
            project.style.display = "block";
        });

        // Disable the "See more" button after showing projects
        seeMoreBtn.removeEventListener("click", showAdditionalProjects);
    }

    // Add click event listener to the "See more" button
    seeMoreBtn.addEventListener("click", function (event) {
        event.preventDefault();
        showAdditionalProjects();
    });
});




    document.addEventListener('DOMContentLoaded', function() {
    // Reload the page when the logo is clicked
    document.getElementById('refreshLogo').addEventListener('click', function() {
    location.reload();
    });
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



// Show/hide the scroll-to-top button based on the scroll position
window.onscroll = function () {
    showScrollToTopButton();
  };
  
  function showScrollToTopButton() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }
  
  // Scroll to the top when the button is clicked
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
  


// Define opentab function in the global scope
function opentab(tabname) {
    // Get all tab links and contents
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    // Remove "active-link" class from all tab links
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    // Remove "active-tab" class from all tab contents
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Find the clicked tab content by ID
    var selectedTabContent = document.getElementById(tabname);

    // Add "active-link" class to the clicked tab link
    for (let tablink of tablinks) {
        if (tablink.textContent.toLowerCase() === tabname.toLowerCase()) {
            tablink.classList.add("active-link");
        }
    }

    // Add "active-tab" class to the corresponding tab content
    if (selectedTabContent) {
        selectedTabContent.classList.add("active-tab");
    }
}


var sidemenu; // Define sidemenu in a wider scope

window.onload = function () {
    sidemenu = document.getElementById("sidemenu");

    function openmenu() {
        sidemenu.style.right = 0;
        // Add event listener to close the menu when clicking anywhere on the website
        document.addEventListener('mouseup', closeOutsideMenu);
    }

    function closemenu() {
        sidemenu.style.right = "-200px";
        // Remove the event listener when the menu is closed
        document.removeEventListener('mouseup', closeOutsideMenu);
    }

    function closeOutsideMenu(event) {
        // Check if the clicked element is not inside the menu
        if (!sidemenu.contains(event.target) && event.target !== sidemenu) {
            closemenu();
        }
    }
};


// The openmenu and closemenu functions are defined globally, so they can be used in the HTML onclick attribute
function openmenu() {
    console.log("Open menu called");
    sidemenu.style.right = 0;
}

function closemenu() {
    console.log("Close menu called");
    sidemenu.style.right = "-200px";
}


document.addEventListener('DOMContentLoaded', (event) => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwJoB6IMx2OaDUokApPcaB6oOBeJUd6B1LyH3BAPkz_uv7oVds8ddjngZ0nHD2ljGEj8g/exec';
    const form = document.forms['contactForm'];
    const messageElement = document.getElementById('message');

    form.addEventListener('submit', e => {
      e.preventDefault();

      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          if (response.ok) {
            messageElement.textContent = 'Message sent successfully!';
          } else {
            messageElement.textContent = 'Error sending message.';
          }
        })
        .catch(error => {
          console.error('Error!', error.message);
          messageElement.textContent = 'Error sending message.';
        });
    });
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
