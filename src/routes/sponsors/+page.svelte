<script>
    // Import paths from lib/assets/images
    import logo1 from '$lib/assets/images/sbi.webp';
    import logo2 from '$lib/assets/images/cisb.webp';
    import logo3 from '$lib/assets/images/nhpc.webp';
    import hospitality1 from '$lib/assets/images/alnus.webp';
    import hospitality2 from '$lib/assets/images/sarovar.webp';
    import hospitality3 from '$lib/assets/images/star.webp';

    // Define sponsor and hospitality partner data
    const sponsors = [
        { name: "SBI", logo: logo1, link: "https://sponsor1.com", title: "Bronze Sponsor" },
        { name: "CISB", logo: logo2, link: "https://sponsor2.com" },
        { name: "NHPC Rangitnagar", logo: logo3, link: "https://sponsor3.com" },
    ];

    const hospitalityPartners = [
        { name: " The Alnus, Rangvangla", logo: hospitality1, link: "https://hospitality1.com" },
        { name: "Sikkim Sarovar", logo: hospitality2, link: "https://hospitality2.com" },
        { name: "Ravangla Star", logo: hospitality3, link: "https://hospitality3.com" },
    ];
</script>

<main class="sponsors-page">
    <h1 class="page-title">Our Sponsors</h1>

    <!-- Sponsors Row with Title for First Sponsor -->
    <section class="sponsors-grid">
        {#each sponsors as { name, logo, link, title }, i}
            <a href={link} class="sponsor-card" target="_blank" rel="noopener noreferrer">
                {#if i === 0 && title}
                    <h3 class="sponsor-title">{title}</h3>
                {/if}
                <img src={logo} alt={name} class="sponsor-logo" />
                <h2 class="sponsor-name">{name}</h2>
            </a>
        {/each}
    </section>

    <!-- Hospitality Partners Row -->
    <h2 class="hospitality-title">Hospitality Partners</h2>
    <section class="sponsors-grid">
        {#each hospitalityPartners as { name, logo, link }}
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
        align-items: center;
        font-weight: bold;
        min-height: 100vh;
        padding: 2rem 1rem;
        font-family: 'Cinzel', serif;
        color: #f5d142;
        text-align: center;
    }

    .page-title {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        margin-top: 5rem;
        text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    }

    .sponsors-grid {
        display: flex;
        gap: 1.5rem;
        padding: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .sponsor-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 180px;
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

    .sponsor-title {
        font-size: 0.9rem;
        color: #c0a060;
        font-weight: bold;
        margin-bottom: 0.5rem;
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

    .hospitality-title {
        font-size: 1.8rem;
        font-weight: bold;
        color: #f5d142;
        margin: 3rem 0 1rem;
    }

    /* Responsive Adjustments */
    @media (max-width: 768px) {
        .page-title {
            font-size: 2rem;
        }

        .sponsors-grid {
            gap: 1rem;
        }

        .sponsor-card {
            width: 140px;
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
