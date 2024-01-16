

document.addEventListener("DOMContentLoaded", function () {
    const seeMoreBtn = document.getElementById("see-more-btn");
    const additionalProjects = document.querySelectorAll(".additional-work");
    // Function to show the additional projects
    function showAdditionalProjects() {
        additionalProjects.forEach(function (project) {
            project.style.display = "block";
        });
        seeMoreBtn.removeEventListener("click", showAdditionalProjects);
    }
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
  
function opentab(tabname) {
    // Get all tab links and contents
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    
    var selectedTabContent = document.getElementById(tabname);
    
    for (let tablink of tablinks) {
        if (tablink.textContent.toLowerCase() === tabname.toLowerCase()) {
            tablink.classList.add("active-link");
        }
    }
    if (selectedTabContent) {
        selectedTabContent.classList.add("active-tab");
    }
}

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
            messageElement.textContent = 'Thank you for your message!';
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

document.addEventListener('DOMContentLoaded', function () {
// Select the "Projects" button
var projectsButton = document.querySelector('.projects');

// Select the target section ("portfolio")
var portfolioSection = document.getElementById('portfolio');

projectsButton.addEventListener('click', function (event) {
event.preventDefault();

// Scroll to the portfolio section
portfolioSection.scrollIntoView({ behavior: 'smooth' });
});
});
