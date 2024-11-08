document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple alert to show form data
    alert(`Thank you, ${name}! Your message has been received.\nEmail: ${email}\nMessage: ${message}`);

    // Optionally, clear the form
    document.getElementById('contactForm').reset();
});
