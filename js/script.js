// Mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Current year in footer
document.querySelectorAll('#year').forEach(el => {
    el.textContent = new Date().getFullYear();
});

// Demo contact form
const contactForm = document.querySelector('#contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = contactForm.querySelector('#name').value.trim();
        const email = contactForm.querySelector('#email').value.trim();
        const subject = contactForm.querySelector('#subject').value.trim();
        const message = contactForm.querySelector('#message').value.trim();
        const emailDetails = new URLSearchParams({
            subject,
            body: `Name: ${name}\nEmail: ${email}\n\n${message}`
        });

        window.location.href = `mailto:prosperousroberts077669@gmail.com?${emailDetails}`;
    });
}
