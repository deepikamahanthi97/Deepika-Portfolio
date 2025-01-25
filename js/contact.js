// Initialize EmailJS
emailjs.init("xrIbfWE2MgzAX3kQ-"); // Your public key

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("xrIbfWE2MgzAX3kQ-"); // Your public key
    
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Send form using EmailJS
        emailjs.sendForm("service_vouk90j", "template_c0muxfx", contactForm)
            .then(
                function (response) {
                    console.log("Email sent successfully!", response);
                    alert("Message sent successfully!");
                    contactForm.reset(); // Reset the form after successful submission
                },
                function (error) {
                    console.error("Failed to send email:", error);
                    alert("Failed to send message. Please try again.");
                }
            )
            .catch(function (error) {
                console.error("An unexpected error occurred while sending the email:", error);
            });
    });
});
