// Smooth scroll for navigation
if ('scrollBehavior' in document.documentElement.style) {
    // Smooth scroll is natively supported
} else {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// Handle contact form submission
const form = document.getElementById('contactForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
        await fetch('YOUR_GOOGLE_SCRIPT_URL', {
            method: 'POST',
            body: JSON.stringify({ name, email, message }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        alert('Thank you for getting in touch! Your message has been sent.');
        form.reset();
    } catch (error) {
        alert('Something went wrong. Please try again.');
        console.error('Error:', error);
    }
});
