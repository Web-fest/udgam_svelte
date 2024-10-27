
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
<script>    // Writing effect for UDGAM'2024
    const udgamTitle = document.getElementById('udgam-title');
    udgamTitle.style.width = '0';
    setTimeout(() => {
        udgamTitle.style.width = '100%';
        // Remove the border (cursor) after the animation is complete
        setTimeout(() => {
            udgamTitle.style.borderRight = 'none';
        }, 3000); // 3000ms = 3s, the duration of the writeText animation
    }, 500);</script>
</div>
