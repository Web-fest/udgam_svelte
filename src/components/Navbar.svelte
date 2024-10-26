
<header>
    <nav>
        <div class="logo">
            <a href="">
            <img src="../frontend_udgam/images/LOGO FINAL.png" alt="College Fest Logo">
            </a>
        </div>
        <ul class="nav-links">
            <li>
                <a href="#home">About us</a>
                <div class="highlight"></div>
            </li>
            <li>
                <a href="../frontend_udgam/Events.html">Events</a>
                <div class="highlight"></div>
            </li>
            <li>
                <a href="../frontend_udgam/Sponsors.html">Our Sponsors</a>
                <div class="highlight"></div>
            </li>
            <li>
                <a href="#sponsors">Past Glimpses</a>
                <div class="highlight"></div>
            </li>
            <li><a href="../frontend_udgam/Core.html">Core Team</a>
            </li>
            <li><a href="../frontend_udgam/contact.html">Contact Us</a></li>
        </ul>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Writing effect for UDGAM'2024
    const udgamTitle = document.getElementById('udgam-title');
    udgamTitle.style.width = '0';
    setTimeout(() => {
        udgamTitle.style.width = '100%';
        // Remove the border (cursor) after the animation is complete
        setTimeout(() => {
            udgamTitle.style.borderRight = 'none';
        }, 3000); // 3000ms = 3s, the duration of the writeText animation
    }, 500);

    // Add sliding highlight effect to navbar links
    const navLinksHighlight = document.querySelectorAll('.nav-links a');
    const highlight = document.createElement('span');
    highlight.classList.add('highlight');
    document.querySelector('.nav-links').appendChild(highlight);

    function moveHighlight(e) {
        const linkWidth = e.target.getBoundingClientRect().width;
        const linkLeft = e.target.getBoundingClientRect().left;
        const containerLeft = e.target.closest('.nav-links').getBoundingClientRect().left;
        const highlightPosition = linkLeft - containerLeft;

        highlight.style.width = `${linkWidth}px`;
        highlight.style.transform = `translateX(${highlightPosition}px)`;
    }

    function removeHighlight() {
        highlight.style.width = '0';
    }

    navLinksHighlight.forEach((link) => {
        link.addEventListener('mouseenter', moveHighlight);
        link.addEventListener('focus', moveHighlight);
        link.addEventListener('mouseleave', removeHighlight);
        link.addEventListener('blur', removeHighlight);
    });

    // Initialize Swiper
    var swiper = new Swiper(".swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        speed: 600,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        loop: true,
    });
});

    </script>
</header>
