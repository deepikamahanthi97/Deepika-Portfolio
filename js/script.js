/*======================================= toggle icon navbar===============================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
};



/*======================================= Scroll Section Active link===============================*/


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height) {
         navLinks.forEach(links => {
           links.classList.remove('active');
           document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
         });
      };
   });
   /*======================================= Sticky navbar===============================*/
   
   let header = document.querySelector('header');
   
   header.classList.toggle('sticky', window.scrollY > 100);

   /*======================================= remove toggle icon and navbar when click navbar link(scroll)===============================*/

   menuIcon.classList.remove('bx-x');
   navbar.classList.remove('active');
};


   /*======================================= scroll reveal ===============================*/

   ScrollReveal({
      // reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
   });

   ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
   ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
   ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
   ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

   /*======================================= typed js (typescript - I am ' ') ===============================*/

  const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'Data Analyst', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });


// =============================== Email JS ===================================== //

// Attach a submit event listener to the contact form
// document.addEventListener("DOMContentLoaded", function () {
//    // Initialize EmailJS with your public key
//    emailjs.init("xrIbfWE2MgzAX3kQ-");
 
//    const contactForm = document.getElementById("contact-form");
 
//    contactForm.addEventListener("submit", function (event) {
//      event.preventDefault(); // Prevent default form submission behavior
 
//      // Send form data to EmailJS
//      emailjs
//        .sendForm("service_vouk90j", "template_c0muxfx", this)
//        .then(
//          function () {
//            alert("Message sent successfully!");
//            contactForm.reset(); // Clear the form after submission
//          },
//          function (error) {
//            alert("Failed to send message. Please try again.");
//            console.error("Error:", error);
//          }
//        );
//    });
//  });
 
 
 



