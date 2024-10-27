<script>
    import "../app.css";
    import Hero from "../components/Hero.svelte";
    import EventCard from "../components/EventCard.svelte";

</script>
<body>
    <main>
        <Hero />
        <EventCard />
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
</body>
