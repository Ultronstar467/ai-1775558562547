```javascript
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = navMenu.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times'); // Changes icon to 'X'
    });

    // Close nav menu when a link is clicked (for single-page navigation)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // Optional: Add scroll-to-top button functionality if desired
    // const scrollToTopBtn = document.createElement('button');
    // scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    // scrollToTopBtn.classList.add('scroll-to-top');
    // document.body.appendChild(scrollToTopBtn);

    // window.addEventListener('scroll', () => {
    //     if (window.scrollY > 300) {
    //         scrollToTopBtn.classList.add('show');
    //     } else {
    //         scrollToTopBtn.classList.remove('show');
    //     }
    // });

    // scrollToTopBtn.addEventListener('click', () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // });
});
```