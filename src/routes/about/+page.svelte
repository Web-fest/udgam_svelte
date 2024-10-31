<script>
    export let festName = "UDGAM 2024";
    export let collegeName = "National Institute of Technology Sikkim";
    const bgImage = "/images/fest-background.jpg"; // Path to your chosen background image
</script>

<main style="padding-top: 4rem;">
    <div class="about-page" style="background-image: url({bgImage})">
        <div class="overlay">
            <div class="content-wrapper">
                <!-- Main Content -->
                <div class="text-content">
                    <h1>About {festName}</h1>
                    <p>
                        {festName} is an annual cultural extravaganza celebrating
                        art, culture, and creativity. This year’s theme, rooted in
                        fiction and fantasy, transforms our campus into a realm of
                        enchantment, offering students a platform to showcase their
                        talents, engage in competitions, and enjoy an immersive experience
                        filled with vibrant performances and mesmerizing visuals.
                    </p>
                    <p>
                        Hosted by {collegeName}, the fest brings together
                        students from across disciplines, celebrating diversity,
                        creativity, and unity through the transformative power
                        of culture. Join us in this journey through fantastical
                        landscapes and unforgettable memories!
                    </p>
                </div>

                <!-- Image Containers (for placing backgroundless images) -->
                <div class="image-container">
                    <img
                        src="/path-to-image1.jpg"
                        alt="Event Highlights 1"
                        class="bg-image"
                    />
                    <img
                        src="/path-to-image2.jpg"
                        alt="Event Highlights 2"
                        class="bg-image"
                    />
                    <img
                        src="/path-to-image3.jpg"
                        alt="Event Highlights 3"
                        class="bg-image"
                    />
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    .about-page {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-size: cover;
        background-position: center;
        position: relative;
        padding: 2rem;
    }

    .overlay {
        background-color: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content-wrapper {
        display: flex;
        flex-direction: row;
        max-width: 1200px;
        gap: 2rem;
        padding: 1rem;
    }

    .text-content {
        color: #fff;
        max-width: 500px;
        font-family: "Cinzel", serif;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #e6b700;
        text-align: left;
    }

    p {
        font-size: 1.25rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
        text-align: left;
    }

    .image-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .bg-image {
        width: 300px;
        height: auto;
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    }
</style>
