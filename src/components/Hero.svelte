<script>
    import "../app.css";
    import { onMount } from "svelte";

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

    onMount(writingEffect);
</script>

<div>
    <section id="home" class="hero">
        <div class="hero-content">
            <h1 id="udgam-title">UDGAM'2k24</h1>
            <p id="rise-text"><span>RISE THROUGH THE CULTURE</span></p>
            <div class="cta-buttons">
                <a href="/register" class="cta-button primary">Register Now</a>
            </div>
        </div>
    </section>
</div>
