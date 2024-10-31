<!-- +page.svelte -->
<script>
     import ayush from '$lib/assets/images/ayush.webp';
    import PastGlimpseCard from '../../components/PastGlimpseCard.svelte';

    // Array of image paths for the past glimpses
    const images = [
        ayush,
        './images/past-event-2.jpg',
        './images/past-event-3.jpg',
        './images/past-event-4.jpg',
        './images/past-event-5.jpg',
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
        margin: 40px 0;
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
