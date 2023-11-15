// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        var formData = {
            name: name,
            email: email,
            message: message
        };

        
        fetch('https://example.com/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            
            alert("Form submitted successfully!");
            console.log(data);
        })
        .catch(error => {
            
            alert("Error submitting the form. Please try again later.");
            console.error('Error:', error);
        });

        
        contactForm.reset();
    });
});
