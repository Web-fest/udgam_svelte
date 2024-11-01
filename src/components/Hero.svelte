<script>
    import { onMount } from "svelte";
    import heroBg from "$lib/assets/images/hero-bg.webp"; // Import the WebP background image

    let isLoaded = false; // Flag to check if the image is loaded

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
        
        // Set up IntersectionObserver for lazy loading the background image
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
    <section
        id="home"
        class="hero"
        style="background-image: url({isLoaded ? heroBg : 'transparent'});"
    >
        <div class="hero-content">
            <h1 id="udgam-title">UDGAM'2k24</h1>
            <p id="rise-text"><span>RISE THROUGH THE CULTURE</span></p>
            <div class="cta-buttons">
                <a href="/register" class="cta-button primary">Register Now</a>
            </div>
        </div>
    </section>
</div>


