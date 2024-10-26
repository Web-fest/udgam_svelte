<script>
    import '../app.css';

</script>
<body>
    <main>

        <section id="home" class="hero">
            <div class="hero-content">
                <h1 id="udgam-title">UDGAM'2k24</h1>
                <p id="rise-text"><span>RISE THROUGH THE CULTURE</span></p>
                <div class="cta-buttons">
                    <a href="../frontend_udgam/login.html" class="cta-button primary">Register Now</a>
                </div>
        </section>

        <section id="events">
            <h2>Featured Events</h2>
            <div class="event-grid">
                <div class="event-card">
                    <div class="event-card-inner">
                        <div class="event-card-front">
                            <img src="./static/assets/tranquil-scene-sunset-forest-mysterious-beauty-nature-generated-by-artificial-intelligence.jpg" alt="Event 1">
                            <h3>Music Night</h3>
                        </div>
                        <div class="event-card-back">
                            <h3>Music Night</h3>
                            <p>Experience electrifying performances by top artists</p>
                            <a href="#" class="event-register-btn">Register Now</a>
                        </div>
                    </div>
                </div>
                <div class="event-card">
                    <div class="event-card-inner">
                        <div class="event-card-front">
                            <img src="event2.jpg" alt="Event 2">
                            <h3>Dance Competition</h3>
                        </div>
                        <div class="event-card-back">
                            <h3>Dance Competition</h3>
                            <p>Showcase your moves and win exciting prizes</p>
                            <a href="#" class="event-register-btn">Register Now</a>
                        </div>
                    </div>
                </div>
                <div class="event-card">
                    <div class="event-card-inner">
                        <div class="event-card-front">
                            <img src="event3.jpg" alt="Event 3">
                            <h3>Tech Expo</h3>
                        </div>
                        <div class="event-card-back">
                            <h3>Tech Expo</h3>
                            <p>Explore cutting-edge innovations and gadgets</p>
                            <a href="#" class="event-register-btn">Register Now</a>
                        </div>
                    </div>
                </div>
                <!-- Add more event cards here as needed -->
            </div>
        </section>

        <!-- Add this new section -->
        <section id="past-glimpses">
            <h2>Past Glimpses</h2>
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" style="background-image: url('img1.jpg')"></div>
                    <div class="swiper-slide" style="background-image: url('img2.jpg')"></div>
                    <div class="swiper-slide" style="background-image: url('img3.jpg')"></div>
                    <div class="swiper-slide" style="background-image: url('img4.jpg')"></div>
                    <div class="swiper-slide" style="background-image: url('img5.jpg')"></div>
                    <div class="swiper-slide" style="background-image: url('img6.jpg')"></div>
                    <div class="swiper-slide" style="background-image: url('img7.jpg')"></div>
                    <div class="swiper-slide" style="background-image: url('img8.jpg')"></div>
                </div>
            </div>
        </section>

        <section id="schedule">
            <h2>Event Schedule</h2>
            <div class="schedule-container">
                <div class="schedule-day">
                    <h3>Day 1</h3>
                    <ul>
                        <li><span>10:00 AM</span> Opening Ceremony</li>
                        <li><span>2:00 PM</span> Tech Expo</li>
                        <li><span>7:00 PM</span> Music Night</li>
                    </ul>
                </div>
                <div class="schedule-day">
                    <h3>Day 2</h3>
                    <ul>
                        <li><span>11:00 AM</span> Dance Competition</li>
                        <li><span>3:00 PM</span> Fashion Show</li>
                        <li><span>8:00 PM</span> Stand-up Comedy</li>
                    </ul>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <div class="social-links">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
            <p>&copy; 2023 Your College Fest. All rights reserved.</p>
        </div>
    </footer>
    
    <script>document.addEventListener('DOMContentLoaded', () => {
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
</body>
