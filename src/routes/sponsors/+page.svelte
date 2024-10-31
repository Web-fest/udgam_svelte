<script>
    // Import paths from lib/assets/images
    import logo1 from '$lib/assets/images/temp.webp';
    import logo2 from '$lib/assets/images/temp.webp';
    import logo3 from '$lib/assets/images/temp.webp';

    // Define an array of sponsor data with imported images
    const sponsors = [
        { name: "Sponsor One", logo: logo1, link: "https://sponsor1.com" },
        { name: "Sponsor Two", logo: logo2, link: "https://sponsor2.com" },
        { name: "Sponsor Three", logo: logo3, link: "https://sponsor3.com" },
    ];
</script>

<main class="sponsors-page">
    <h1 class="page-title">Our Sponsors</h1>

    <section class="sponsors-grid">
        {#each sponsors as { name, logo, link }}
            <a href={link} class="sponsor-card" target="_blank" rel="noopener noreferrer">
                <img src={logo} alt={name} class="sponsor-logo" />
                <h2 class="sponsor-name">{name}</h2>
            </a>
        {/each}
    </section>
</main>

<style>
    .sponsors-page {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 2rem 1rem;
        text-align: center;
        font-family: 'Cinzel', serif;
        color: #f5d142;
    }

    .page-title {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        margin-top: 5rem;
        text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    }

    .sponsors-grid {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        padding: 1rem;
        justify-items: center;
    }

    .sponsor-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 200px;
        padding: 1rem;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transition: transform 0.25s ease, box-shadow 0.25s ease;
        text-decoration: none;
        color: inherit;
    }

    .sponsor-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
    }

    .sponsor-logo {
        width: 80%;
        height: auto;
        max-height: 100px;
        object-fit: contain;
        margin-bottom: 0.75rem;
    }

    .sponsor-name {
        font-size: 1.1rem;
        color: #ff6b6b;
        text-align: center;
        margin-top: 0.5rem;
    }

    /* Responsive Design Adjustments */
    @media (max-width: 768px) {
        .page-title {
            font-size: 2rem;
        }

        .sponsors-grid {
            gap: 1rem;
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        }

        .sponsor-card {
            max-width: 160px;
        }

        .sponsor-name {
            font-size: 1rem;
        }
    }

    @media (max-width: 480px) {
        .page-title {
            font-size: 1.8rem;
        }

        .sponsor-logo {
            max-height: 80px;
        }

        .sponsor-name {
            font-size: 0.9rem;
        }
    }
</style>
