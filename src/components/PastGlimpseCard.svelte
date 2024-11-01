<!-- PastGlimpseCard.svelte -->
<script>
    export let image;
</script>

<div class="glimpse-card">
    <img src={image} alt="Past Glimpse" loading="lazy" class="glimpse-image" />
</div>

<style>
    .glimpse-card {
        display: inline-block;
        padding: 10px;
        border: 2px solid #ff6b6b; /* Simple border with rounded corners */
        border-radius: 15px;
        box-shadow: 0 0 10px rgba(255, 107, 107, 0.5);
        overflow: hidden;
        transition: transform 0.2s; /* Optional hover effect */
        min-width: 150px; /* Minimum width of the card */
        min-height: 150px; /* Minimum height of the card */
        max-width: 250px; /* Maximum width of the card */
        max-height: 250px; /* Maximum height of the card */
    }

    .glimpse-card:hover {
        transform: scale(1.05); /* Slightly enlarge on hover */
    }

    .glimpse-image {
        display: block;
        max-width: 100%;
        max-height: 100%; /* Ensures image fits within the card limits */
        height: auto;
        border-radius: 12px;
        object-fit: cover; /* Ensures the image covers the area proportionately */
    }
</style>
