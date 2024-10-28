<script>
    import { userLoginStore } from "../lib/userLoginStore";
    import { onMount } from 'svelte';
    import EventCard from '../components/EventCard.svelte'; // Adjust the path as necessary

    export let data;

    // Update the user login status if data is provided
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

    // Define your event data
    const events = [
        {
            title: 'Music Night',
            image: './static/assets/tranquil-scene-sunset-forest-mysterious-beauty-nature-generated-by-artificial-intelligence.jpg',
            description: 'Experience electrifying performances by top artists',
            link: '#',
        },
        {
            title: 'Dance Competition',
            image: 'event2.jpg',
            description: 'Showcase your moves and win exciting prizes',
            link: '#',
        },
        {
            title: 'Tech Expo',
            image: 'event3.jpg',
            description: 'Explore cutting-edge innovations and gadgets',
            link: '#',
        },
        // Add more events as needed
    ];
</script>

<body>
    <main>
        {#if isLoading}
            <p>Loading...</p>
        {:else if Hero}
            <svelte:component this={Hero} />
        {/if}
        
        <section id="events">
            <h2>Featured Events</h2>
            <div class="event-grid">
                {#each events as event}
                    <EventCard 
                        title={event.title} 
                        image={event.image} 
                        description={event.description} 
                        link={event.link} 
                    />
                {/each}
            </div>
        </section>
    </main>
</body>

