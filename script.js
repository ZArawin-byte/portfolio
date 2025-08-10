document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in animations on scroll
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Milestone interactivity
    const milestoneCards = document.querySelectorAll('.milestone-card');
    const milestoneDetails = document.querySelectorAll('.milestone-detail');

    milestoneCards.forEach(card => {
        card.addEventListener('click', () => {
            const milestone = card.getAttribute('data-milestone');
            
            // Remove active class from all details
            milestoneDetails.forEach(detail => detail.classList.remove('active'));
            
            // Add active class to the clicked milestone's details
            const activeDetail = document.querySelector(`.milestone-detail[data-milestone="${milestone}"]`);
            if (activeDetail) {
                activeDetail.classList.add('active');
            }
        });
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
});

// Parallax scroll effect for plane
window.addEventListener('scroll', () => {
    const plane = document.querySelector('.animated-plane');
    const scrollY = window.scrollY;
    plane.style.transform = `translateY(${scrollY * 0.2}px) translateX(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`;
});
