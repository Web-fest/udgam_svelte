<script>
    import { userLoginStore } from "../lib/userLoginStore";
    import { onMount } from 'svelte';
    import EventCard from '../components/EventCard.svelte'; // Adjust the path as necessary
    import musicNight from '$lib/assets/images/music.jpg';
    import danceCompetition from '$lib/assets/images/dance.jpeg';
    import photo from '$lib/assets/images/photo.png';
    
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

    const events = [
        {
            title: 'Music Night',
            image: musicNight, // Imported image
            description: 'Experience electrifying performances by top artists',
            link: '#',
        },
        {
            title: 'Dance Competition',
            image: danceCompetition, // Imported image
            description: 'Showcase your moves and win exciting prizes',
            link: '#',
        },
        {
            title: 'Photography Competition',
            image: photo, // Imported image
            description: 'Click the best photo ever',
            link: '#',
        },
    ];
</script>

<body>
    <main style="padding-top: 5rem;">
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
