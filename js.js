document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call it once to check the initial position

    function handleScroll() {
        var aboutSection = document.getElementById("aboutSection");
        var aboutContent = document.querySelector(".about-content");
        var aboutImage = document.querySelector(".about-image");
        var mainSection = document.querySelector(".main-section");

        // Adjust this value to set when the elements become visible
        var aboutTriggerPoint = aboutSection.offsetTop - window.innerHeight * 0.7;

        // Check if the about section is in the viewport
        if (isInViewport(aboutSection, aboutTriggerPoint)) {
            mainSection.classList.add("overlap"); // Add a class for overlap on scroll
            aboutContent.classList.add("visible");
            aboutImage.classList.add("visible");
        } else {
            mainSection.classList.remove("overlap"); // Remove the class if not in viewport
            aboutContent.classList.remove("visible");
            aboutImage.classList.remove("visible");
        }
    }

    function isInViewport(element, triggerPoint) {
        var rect = element.getBoundingClientRect();
        return rect.top <= triggerPoint;
    }
});

var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("modalImg");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open modal with clicked image
function openModal(imgSrc) {
    modal.style.display = "block";
    modalImg.src = imgSrc;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');
  
const validate = (e) => {
  e.preventDefault();
 
  if (name.value.length < 3) {
    errorElement.innerHTML = 'Your name should be at least 3 characters long.';
    return false;
  } 
  
  if (!(email.value.includes('.') && (email.value.includes('@')))) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  } 

  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  }

  if (message.value.length < 15) {
    errorElement.innerHTML = 'Please write a longer message.';
    return false;
  }

  errorElement.innerHTML = '';
  successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.'; 

  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = '';
    document.getElementById('contact-form').reset();
  }, 6000);

  return true;

}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);