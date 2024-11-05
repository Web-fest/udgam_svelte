<script>
    import { onMount } from 'svelte';
    import EventCard from '../../components/EventCard.svelte';
    import artful from '$lib/assets/posters/artful.webp';
    import balloon from '$lib/assets/posters/balloon.webp';
    import bgmi from '$lib/assets/posters/bgmi.webp';
    import canvas from '$lib/assets/posters/canvas.webp';
    import drishya from '$lib/assets/posters/drishya.webp';
    import flashmob from '$lib/assets/posters/flashmob.webp';
    import hammer from '$lib/assets/posters/hammer.webp';
    import jabardast from '$lib/assets/posters/jabardast.webp';
    import khana from '$lib/assets/posters/khana.webp';
    import max from '$lib/assets/posters/max.webp';
    import melody from '$lib/assets/posters/melody.webp';
    import mobile from '$lib/assets/posters/mobile.webp';
    import movie from '$lib/assets/posters/movie.webp';
    import otakucon from '$lib/assets/posters/otakucon.webp';
    import rangrej from '$lib/assets/posters/rangrej.webp';
    import rubiks from '$lib/assets/posters/rubiks.webp';
    import spoil from '$lib/assets/posters/spoil.webp';
    import step from '$lib/assets/posters/step.webp';
    import story from '$lib/assets/posters/story.webp';
    import strut from '$lib/assets/posters/strut.webp';
    import survival from '$lib/assets/posters/survival.webp';
    import swragani from '$lib/assets/posters/swragani.webp';
    import talash from '$lib/assets/posters/talash.webp';
    import tamasha from '$lib/assets/posters/tamasha.webp';
    import tied from '$lib/assets/posters/tied.webp';
    import tune from '$lib/assets/posters/tune.webp';
    import valorant from '$lib/assets/posters/valorant.webp';


    const events = [
        { title: "Movie Mela", description: "Show Your Filmy Keeda", image: movie, link: "#" },
    { title: "Story Express", description: "Magic In Every Moment", image: story, link: "#" },
    { title: "Drishya", description: "Captured Moments", image: drishya, link: "#" },
{ title: "Canvas Chronicles", description: "Painting The Future", image: canvas, link: "#" },
{ title: "Talash 2.0", description: "Uncover The Secrets", image: talash, link: "#" },
{ title: "Rangrej", description: "Collage Of Colours", image: rangrej, link: "#" },
{ title: "Tune Tussle", description: "Bas Bajna Chahiye Gana", image: tune, link: "#" },
{ title: "Step Symphony", description: "Feel The Beat", image: step, link: "#" },
{ title: "Max Clash", description: "Dominate The Battlefield!", image: max, link: "#" },
{ title: "Bgmi", description: "Battle, Survive, Conquer!", image: bgmi, link: "#" },
{ title: "Valorant", description: "Unleash Your Inner Agent!", image: valorant, link: "#" },
{ title: "Mobile Legends", description: "Unleash Your Legend!", image: mobile, link: "#" },
// { title: "Cinemabaaz", description: "Sholay Ke Chole", image: cinemabaaz, link: "#" },
{ title: "Artful Faces", description: "Transforming Smiles Into Masterpieces!", image: artful, link: "#" },
{ title: "Swragani", description: "Aap Mumbai Aa Skte Ho", image: swragani, link: "#" },
{ title: "Survival Trials", description: "Red Light Green Light", image: survival, link: "#" },
{ title: "Hammer House", description: "7 Crore", image: hammer, link: "#" },
{ title: "Spoil The T-shirt", description: "Wear Your Attitude!", image: spoil, link: "#" },
{ title: "Jabardast Zayka", description: "Taste The Joy!", image: jabardast, link: "#" },
{ title: "Strut And Style", description: "Fashion Ka Hai Jalwa", image: strut, link: "#" },
{ title: "Tamasha", description: "Street Stories Unfold!", image: tamasha, link: "#" },
{ title: "Otakucon", description: "Show Off Your Manga Knowledge", image: otakucon, link: "#" },
{ title: "Melody Masters", description: "Play Your Heart Out!", image: melody, link: "#" },
{ title: "Khana Khazana", description: "Eat Big, Win Bigger!", image: khana, link: "#" },
{ title: "Tied for Victory", description: "Tangle Up and Dash!", image: tied, link: "#" },
{ title: "Balloon Bash", description: "Burst the Fun!", image: balloon, link: "#" },
{ title: "Rubik's Challenge", description: "Twist, Turn, and Triumph!", image: rubiks, link: "#" }
  ];

    // Countdown variables
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let countdownEnded = false;

    // Target date (November 7, 2024)
    const targetDate = new Date('2024-11-07T00:00:00').getTime();

    // Function to update the countdown timer
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft > 0) {
            days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        } else {
            countdownEnded = true;
            clearInterval(interval); // Stop the interval once the countdown is over
        }
    }

    // Start the countdown timer
    let interval;
    onMount(() => {
        updateCountdown(); // Initial call
        interval = setInterval(updateCountdown, 1000); // Update every second

        return () => clearInterval(interval); // Clear interval on component destroy
    });

    let currentSlide = 0;
    let isAnimating = false;

    // Modify the nextSlide function for infinite loop
    function nextSlide() {
        if (isAnimating) return;
        isAnimating = true;
        
        // Create infinite loop effect
        if (currentSlide >= events.length - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        
        setTimeout(() => isAnimating = false, 500); // Reduced animation time for smoother loop
    }

    // Modify the prevSlide function for infinite loop
    function prevSlide() {
        if (isAnimating) return;
        isAnimating = true;
        
        if (currentSlide <= 0) {
            currentSlide = events.length - 1;
        } else {
            currentSlide--;
        }
        
        setTimeout(() => isAnimating = false, 500);
    }

    function goToSlide(index) {
        if (isAnimating) return;
        isAnimating = true;
        currentSlide = index;
        setTimeout(() => isAnimating = false, 1000);
    }

    onMount(() => {
        // ... existing countdown code ...

        const autoSlideInterval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => {
            clearInterval(interval);
            clearInterval(autoSlideInterval);
        };
    });

    // Calculate transform with spacing
    $: containerStyle = `transform: translateX(calc((var(--slide-size) + var(--slide-spacing)) * ${-currentSlide}))`;

   // Calculate the maximum number of visible slides based on the events array length
const maxVisibleSlides = Math.min(events.length, 30); // Ensuring you consider up to 30 events

// Adjusted center index based on maxVisibleSlides
const centerIndex = Math.floor(maxVisibleSlides / 2);

// Function to get slide style
$: getSlideStyle = (index) => {
    const diff = (index - currentSlide + events.length) % events.length;
    let position = diff - centerIndex;
    
    // Style adjustments
    const rotation = position * 5; 
    const zIndex = maxVisibleSlides - Math.abs(position);
    const scale = 1 - Math.abs(position) * 0.15;
    const opacity = 1 - Math.abs(position) * 0.2;
    const translateX = position * 110;

    return `
        transform: translateX(${translateX}%) rotateY(${rotation}deg) scale(${scale});
        z-index: ${zIndex};
        opacity: ${opacity};
        visibility: ${Math.abs(position) >= centerIndex + 2 ? 'hidden' : 'visible'};
    `;
};

// You may also want to add a function to handle the current slide change if not done already
const changeSlide = (direction) => {
    currentSlide = (currentSlide + direction + events.length) % events.length;
};
    // Add keyboard navigation for the carousel
    function handleKeydown(event) {
        switch (event.key) {
            case 'ArrowLeft':
                prevSlide();
                break;
            case 'ArrowRight':
                nextSlide();
                break;
            case 'Home':
                goToSlide(0);
                break;
            case 'End':
                goToSlide(events.length - 1);
                break;
        }
    }

    onMount(() => {
        // ... existing mount code ...
        
        // Add keyboard event listener
        window.addEventListener('keydown', handleKeydown);
        
        return () => {
            // ... existing cleanup ...
            window.removeEventListener('keydown', handleKeydown);
        };
    });
</script>
<main>
    <h1 class="page-title main-title">Events</h1>
    <!-- Countdown Timer Section -->
    {#if !countdownEnded}
    <section class="countdown">
        <h2>Countdown to Event Date</h2>
        <div class="timer">
            <div><span>{days}</span> Days</div>
            <div><span>{hours}</span> Hours</div>
            <div><span>{minutes}</span> Minutes</div>
            <div><span>{seconds}</span> Seconds</div>
        </div>
    </section>
    {/if}
    
    <!-- Events Slider Section (only visible after countdown ends) -->
    {#if countdownEnded}
    <div class="carousel-wrapper">
        <div class="carousel-container">
            <div class="carousel">
                {#each events.slice(0, maxVisibleSlides) as event, i}
                    <button class="carousel-slide" style={getSlideStyle(i)}>
                        <EventCard {...event} />
                    </button>
                {/each}
            </div>

            <button 
                class="nav-button prev" 
                on:click={prevSlide}
                aria-label="Previous slide"
            >
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </button>
            <button 
                class="nav-button next" 
                on:click={nextSlide}
                aria-label="Next slide"
            >
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </button>
        </div>

        <div class="carousel-dots" role="tablist" aria-label="Slide navigation">
            {#each events as event, i}
                <button 
                    class="dot" 
                    class:active={i === currentSlide}
                    on:click={() => goToSlide(i)}
                    role="tab"
                    aria-selected={i === currentSlide}
                    aria-label={`Go to slide ${i + 1}: ${event.title}`}
                    tabindex={i === currentSlide ? 0 : -1}
                >
                    <img src={event.image} alt="" />
                </button>
            {/each}
        </div>
    </div>
    {/if}
</main>

<style>
     .page-title {
        text-align: center;
        font-size: 36px;
        padding-top: 100px;
        color: #ff6b6b; /* Light color for the title */
        margin: 40px 0;
        font-family: 'Cinzel', serif; /* Fantasy-themed font */
    }
 .countdown {
    text-align: center;
    margin: 30px 0;
    font-size: 1.5em;
    color: #fff; /* Make text white for better contrast */
}

.timer {
    display: flex;
    justify-content: center;
    gap: 20px;
    font-family: 'Cinzel', serif; /* Match your website theme */
}

.timer div {
    text-align: center;
}

.timer span {
    font-size: 2em;
    font-weight: bold;
    color: #ffcc00; /* Add a gold color for emphasis */
}

.ended {
    font-size: 2em;
    color: #ff0000; /* Highlighted color for ended state */
    font-weight: bold;
}

    .carousel-wrapper {
        width: 100%;
        max-width: 100vw;
        height: 120vh;
        padding: 2rem 0;
        overflow: hidden;
        position: relative;
        margin-bottom: 200px;
        margin-top: -300px;
    }

    .carousel-container {
        position: relative;
        height: 80vh;
        perspective: 2000px;
        overflow: visible;
        padding: 2rem 0;
        max-width: 1800px;
        margin-top: -20px; /* Negative margin for additional upward adjustment */
    }

    .carousel {
        position: relative;
        height: 100%;
        transform-style: preserve-3d;
        transition: transform 0.5s ease-out;
    }

    .carousel-slide {
        position: absolute;
        width: 400px; /* Fixed width */
        height: 600px; /* Fixed height */
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%); /* Center the slide */
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        padding: 0;
        border: none;
        background: none;
        overflow: visible;
    }

    .carousel-slide:focus-visible {
        outline: 3px solid #fff;
        outline-offset: 3px;
    }

    .carousel-slide.active .slide-overlay,
    .carousel-slide:hover .slide-overlay {
        opacity: 0.7;
    }

    .carousel-slide:hover img {
        transform: scale(1.05);
    }

    .carousel-slide.active .slide-info,
    .carousel-slide:hover .slide-info {
        opacity: 1;
        transform: translateY(0);
    }

    .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid rgba(255, 255, 255, 0.3);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 100;
    }

    .nav-button:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-50%) scale(1.1);
    }

    .nav-button:focus-visible {
        outline: 3px solid #fff;
        outline-offset: 3px;
        background: rgba(255, 255, 255, 0.2);
    }

    .prev { left: 5%; }
    .next { right: 5%; }

    .carousel-dots {
        position: absolute;
        bottom: -150px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 15px;
        z-index: 2000;
        padding: 20px 0;
        width: 100%;
        justify-content: center;
        pointer-events: all;
    }

    .dot {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        padding: 0;
        border: 3px solid rgba(255, 255, 255, 0.8);
        overflow: hidden;
        cursor: pointer;
        transition: all 0.3s ease;
        z-index: 2001;
        position: relative;
    }

    .dot img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .dot.active {
        transform: scale(1.2);
        border-color: #FF6B6B;
        box-shadow: 0 0 15px rgba(255, 107, 107, 0.7);
    }

    .dot:focus-visible {
        outline: 3px solid #fff;
        outline-offset: 3px;
    }

    @media (max-width: 1440px) {
        .carousel-slide {
            width: 400px; /* Keep fixed width */
            height: 300px; /* Keep fixed height */
        }
    }

    @media (max-width: 1024px) {
        .carousel-slide {
            width: 400px; /* Keep fixed width */
            height: 300px; /* Keep fixed height */
        }
        
        .prev { left: 2%; }
        .next { right: 2%; }
    }

    @media (max-width: 768px) {
        .carousel-slide {
            width: 100%; /* Full width on mobile */
            height: 300px; /* Keep fixed height */
            left: 0; /* Align to left */
            transform: none; /* Remove twisting effect */
        }
        
        .carousel-container {
            height: 60vh;
        }

        .carousel-dots {
            bottom: -200px;
            gap: 10px;
        }

        .dot {
            width: 35px;
            height: 35px;
        }
        .timer {
        flex-direction: column; /* Stack timer elements on smaller screens */
    }

    .timer div {
        font-size: 1.2em; /* Smaller font for mobile */
    }
    }

   

    .carousel-slide.active .register-button,
    .carousel-slide:hover .register-button {
        opacity: 1;
        transform: translateY(0);
    }
</style>
