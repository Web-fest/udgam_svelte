<script>
    import { userLoginStore } from "../lib/userLoginStore";
    import { onMount } from 'svelte';
    import EventCard from '../components/EventCard.svelte'; // Adjust the path as necessary

    
    export let data;

    if (data && data.data) {
        userLoginStore.set(data.data.name);
    }

    let Hero;
    let isLoading = true;

    // Load Hero component dynamically
    onMount(async () => {
        try {
            const HeroComponent = await import('../components/Hero.svelte');
            Hero = HeroComponent.default;
        } catch (error) {
            console.error("Failed to load Hero component:", error);
        } finally {
            isLoading = false;
        }
    });

</script>

<body>
    <main style="padding-top: 5rem;">
        {#if isLoading}
            <p>Loading...</p>
        {:else if Hero}
            <svelte:component this={Hero} />
        {/if}

       
    </main>
</body>
