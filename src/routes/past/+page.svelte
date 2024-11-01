<!-- +page.svelte -->
<script>
    import PastGlimpseCard from '../../components/PastGlimpseCard.svelte';
    import g1 from '$lib/assets/images/glimpse_1.webp';
    import g2 from '$lib/assets/images/glimpse_2.webp';
    import g3 from '$lib/assets/images/glimpse_3.webp';
    import g4 from '$lib/assets/images/glimpse_4.webp';
    import g5 from '$lib/assets/images/glimpse_5.webp';
    import g6 from '$lib/assets/images/glimpse_6.webp';
    import g7 from '$lib/assets/images/glimpse_7.webp';
    import g8 from '$lib/assets/images/glimpse_8.webp';
    import g9 from '$lib/assets/images/glimpse_9.webp';
    import g10 from '$lib/assets/images/glimpse_10.webp';
    import g11 from '$lib/assets/images/glimpse_11.webp';
    import g12 from '$lib/assets/images/glimpse_12.webp';
    import g13 from '$lib/assets/images/glimpse_13.webp';
    import g14 from '$lib/assets/images/glimpse_14.webp';
    import g15 from '$lib/assets/images/glimpse_15.webp';
    import g16 from '$lib/assets/images/glimpse_16.webp';
    import g17 from '$lib/assets/images/glimpse_17.webp';
    import g18 from '$lib/assets/images/glimpse_18.webp';

    // Array of image paths for the past glimpses
    const images = [
        g2,g4,g5,g6,g7,g8,g9,g10,g1,g11,g3,g18,g17,g13,g14,g12,g15,g16
        // Add more images as needed
    ];
</script>

<main>
    <h1 class="page-title">Past Glimpses</h1>
    <section class="glimpse-gallery">
        {#each images as image}
            <PastGlimpseCard image={image} />
        {/each}
    </section>
</main>

<style>
    .page-title {
        text-align: center;
        font-size: 36px;
        color: #ff6b6b; /* Light color for the title */
        margin: 100px 0;
    
        font-family: 'Cinzel', serif; /* Fantasy-themed font */
    }

    .glimpse-gallery {
    
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px; /* Space between cards */
        padding: 20px; /* Padding around the gallery */
    }
</style>
