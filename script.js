// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const barsIcon = document.querySelector('.bars i');
    const menuBar = document.querySelector('.menu-bar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu on hamburger icon click
    barsIcon.addEventListener('click', function() {
        menuBar.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            menuBar.classList.remove('active');
            
            // Smooth scroll to section
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Form Validation - Banner Search Form
    const bannerForm = document.querySelector('.banner form');
    if (bannerForm) {
        bannerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const destination = this.querySelector('input[type="text"]').value.trim();
            const when = this.querySelector('select[name="when"]').value;
            const type = this.querySelector('select[name="select-type"]').value;

            if (!destination) {
                alert('Please enter a destination');
                return;
            }
            if (when === 'when') {
                alert('Please select when to travel');
                return;
            }
            if (type === 'select-type') {
                alert('Please select a travel type');
                return;
            }

            alert(`Searching for trips to ${destination} - ${when} - ${type}`);
            // Here you can add API call to backend
        });
    }

    // Form Validation - Newsletter Form
    const newsletterForm = document.querySelector('.newslater-form form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = this.querySelectorAll('input[type="text"]');
            const name = inputs[0].value.trim();
            const email = inputs[1].value.trim();

            if (!name) {
                alert('Please enter your name');
                return;
            }
            if (!email) {
                alert('Please enter your email');
                return;
            }
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }

            alert(`Thank you ${name}! You've been subscribed.`);
            this.reset();
            // Here you can add API call to backend
        });
    }

    // Email Validation Function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Destination Card Interaction
    const destinationCards = document.querySelectorAll('.img-container');
    destinationCards.forEach(card => {
        card.addEventListener('click', function() {
            const destination = this.querySelector('p').textContent;
            alert(`You selected: ${destination}. Redirecting to destination page...`);
            // You can add actual navigation here
        });

        // Add hover effect
        card.style.cursor = 'pointer';
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add Click Handler to "Read More" Button
    const readMoreBtn = document.querySelector('.tours-disc .btn-primary');
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function() {
            alert('Loading more popular tours...');
            // Add functionality to load more tours
        });
    }

    // Add Click Handler to "See More" Button
    const seeMoreBtns = document.querySelectorAll('.simple-perfect-container .btn-primary');
    if (seeMoreBtns.length > 0) {
        seeMoreBtns[0].addEventListener('click', function() {
            alert('Loading more travel experiences...');
            // Add functionality to load more content
        });
    }

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Add active state to nav links on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section, header');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Add feedback for button clicks
    const allButtons = document.querySelectorAll('.btn-primary');
    allButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (e.target.tagName === 'BUTTON' && !e.target.closest('form')) {
                this.style.backgroundColor = '#FF5400';
                setTimeout(() => {
                    this.style.backgroundColor = '';
                }, 200);
            }
        });
    });

    console.log('Timeless Travels website is now fully functional!');
});
