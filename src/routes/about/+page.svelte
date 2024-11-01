<script>
    export let festName = "UDGAM 2024";
    export let collegeName = "National Institute of Technology Sikkim";
    const bgImage = "/images/fest-background.jpg"; // Path to your chosen background image
</script>

<main class="about-page" style="background-image: url({bgImage})">
    <div class="overlay">
        <div class="content-wrapper">
            <!-- Main Content -->
            <div class="text-content">
                <h1>About {festName}</h1>
                <p>
                    {festName} is an annual cultural extravaganza celebrating art,
                    culture, and creativity. This year’s theme, rooted in fiction
                    and fantasy, transforms our campus into a realm of enchantment,
                    offering students a platform to showcase their talents, engage
                    in competitions, and enjoy an immersive experience filled with
                    vibrant performances and mesmerizing visuals.
                </p>
                <p>
                    Hosted by {collegeName}, the fest brings together students
                    from across disciplines, celebrating diversity, creativity,
                    and unity through the transformative power of culture. Join
                    us in this journey through fantastical landscapes and
                    unforgettable memories!
                </p>
            </div>
        </div>
    </div>
</main>

<style>
    .about-page {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        padding: 0;
    }

    .overlay {
        background-color: rgba(0, 0, 0, 0.6);
        width: 100%;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }

    .content-wrapper {
        max-width: 800px;
        text-align: center;
        color: #fff;
        font-family: "Cinzel", serif;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #e6b700;
    }

    p {
        font-size: 1.25rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2rem;
        }
        p {
            font-size: 1.1rem;
        }
    }
</style>
