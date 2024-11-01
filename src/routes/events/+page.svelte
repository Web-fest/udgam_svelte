
<script>
    import { onMount } from 'svelte';
    import EventCard from '../../components/EventCard.svelte';

    const events = [
        { title: 'Music Night', description: 'Experience electrifying performances by top artists', image: './images/fantasy-endless-hole-landscape.jpg', link: '#' },
        { title: 'Dance Competition', description: 'Showcase your moves and win exciting prizes', image: './images/fantasy-endless-hole-landscape.jpg', link: '#' },
        { title: 'Tech Expo', description: 'Explore cutting-edge innovations and gadgets', image: './images/fantasy-endless-hole-landscape.jpg', link: '#' },
        { title: 'Art Exhibition', description: 'Immerse yourself in a world of creativity and expression', image: 'event4.jpg', link: '#' },
        { title: 'Hackathon', description: 'Code your way to victory in this 24-hour coding marathon', image: 'event5.jpg', link: '#' },
        { title: 'Fashion Show', description: 'Strut your stuff on the runway and showcase your style', image: 'event6.jpg', link: '#' },
        { title: 'Debate Competition', description: 'Engage in intellectual discourse and sharpen your oratory skills', image: 'event7.jpg', link: '#' },
        { title: 'Sports Tournament', description: 'Compete in various sports and prove your athletic prowess', image: 'event8.jpg', link: '#' },
    ];

    // Countdown variables
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let countdownEnded = false;

    // Target date (November 7, 2024)
    const targetDate = new Date('2024-11-07T00:00:00').getTime();

    // Function to update the countdown timer
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft > 0) {
            days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        } else {
            countdownEnded = true;
            clearInterval(interval); // Stop the interval once the countdown is over
        }
    }

    // Start the countdown timer
    let interval;
    onMount(() => {
        updateCountdown(); // Initial call
        interval = setInterval(updateCountdown, 1000); // Update every second

        return () => clearInterval(interval); // Clear interval on component destroy
    });
</script>

<main>
    <h1 class="page-title main-title">Events</h1>

    <!-- Countdown Timer Section -->
    <section class="countdown">
        <h2>Countdown to Event Date</h2>
        <div class="timer">
            <div><span>{days}</span> Days</div>
            <div><span>{hours}</span> Hours</div>
            <div><span>{minutes}</span> Minutes</div>
            <div><span>{seconds}</span> Seconds</div>
        </div>
    </section>
    
    <!-- Events Section (Only visible after countdown ends) -->
    {#if countdownEnded}
        <section id="events">
            <div class="event-grid">
                {#each events as event}
                    <EventCard 
                        title={event.title} 
                        description={event.description} 
                        image={event.image} 
                        link={event.link} 
                    />
                {/each}
            </div>
        </section>
    {/if}
</main>

<style>
   .page-title {
      text-align: center;
      font-size: 36px;
      padding-top: 100px;
      color: #ff6b6b; /* Light color for the title */
      margin: 40px 0;
      font-family: 'Cinzel', serif; /* Fantasy-themed font */
    }
  
    /* Countdown Timer Styling */
    .countdown {
        text-align: center;
        margin: 30px 0;
        font-size: 1.5em;
    }

    .timer {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .timer div {
        text-align: center;
    }

    .timer span {
        font-size: 2em;
        font-weight: bold;
    }

    /* Event Grid Styling */
    .event-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        padding: 20px;
    }
</style>
