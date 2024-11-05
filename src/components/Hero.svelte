<script>
    import { onMount } from "svelte";
    import heroBgVideo from "$lib/assets/videos/hero-bg.webm"; // Import the WebM video

    let isLoaded = false; // Flag to check if the video is loaded

    function writingEffect() {
        const udgamTitle = document.getElementById("udgam-title");
        udgamTitle.style.width = "0";
        setTimeout(() => {
            udgamTitle.style.width = "100%";
            setTimeout(() => {
                udgamTitle.style.borderRight = "none";
            }, 3000); // Duration of the animation
        }, 500);
    }

    onMount(() => {
        writingEffect();

        // Set up IntersectionObserver for lazy loading the video background
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    isLoaded = true; // Set the flag to true when in view
                    observer.unobserve(entry.target); // Stop observing
                }
            });
        });

        const heroSection = document.getElementById("home");
        observer.observe(heroSection); // Start observing the hero section
    });
</script>

<div>
    <section id="home" class="hero">
        {#if isLoaded}
            <!-- Dynamically load and display video background once in view -->
            <video autoplay muted loop playsinline class="hero-video">
                <source src={heroBgVideo} type="video/webm" />
            </video>
        {/if}

        <div class="hero-content">
            <h1 id="udgam-title">UDGAM'2k24</h1>
            <p id="rise-text" style="font-family: 'Cinzel', serif;"><span>RISE THROUGH THE CULTURE</span></p>
            <div class="cta-buttons">
                <a href="/register" class="cta-button primary">Register Now</a>
            </div>
        </div>
    </section>
</div>

<style>
    .hero {
        position: relative;
        overflow: hidden;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--background-color); /* Fallback color */
    }

    .hero-video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
    }

    .hero-content {
        position: relative;
        z-index: 1;
        color: var(--text-color);
    }
</style>
