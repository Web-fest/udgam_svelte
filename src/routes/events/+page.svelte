<script>
    import { onMount } from "svelte";
    import EventCard from "../../components/EventCard.svelte";
    import bg from '$lib/assets/images/3436.webp';

    const events = [
        { title: "Music Night", description: "Experience electrifying performances by top artists", image: "./images/fantasy-endless-hole-landscape.jpg", link: "#" },
        // Other events...
    ];

    let days = 0, hours = 0, minutes = 0, seconds = 0, countdownEnded = false;
    let isBgVisible = false; // New variable to control visibility
    const targetDate = new Date("2024-11-07T00:00:00").getTime();

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
            clearInterval(interval);
        }
    }

    onMount(() => {
        updateCountdown();
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    isBgVisible = true;
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        const bgSection = document.querySelector(".bg-image");
        if (bgSection) observer.observe(bgSection);

        interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    });
</script>


<main class="events-background">
    <!-- Background Image -->
    {#if isBgVisible}
        <img src={bg} alt="Background" class="bg-image" loading="lazy" />
    {/if}

    <!-- Countdown Timer Section -->
    <section class="countdown flex justify-center items-center">
        <div class="timer">
            <h1 class="page-title main-title">Events</h1>
            <h2 class="subtitle text-[1.5rem] mb-4">Countdown to Event Date</h2>
            <div class="flex timer-flex">
                <div class="timer-box"><span>{days}</span> Days</div>
                <div class="timer-box"><span>{hours}</span> Hours</div>
                <div class="timer-box"><span>{minutes}</span> Minutes</div>
                <div class="timer-box"><span>{seconds}</span> Seconds</div>
            </div>
        </div>
    </section>

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
    .events-background {
        min-height: 100vh;
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        transition: background-image 0.5s ease-in-out;
        background-image: none;
    }
    :global(.events-background[isBgLoaded]) {
        background-image: url('$lib/assets/images/3436.webp');
    }
    .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.bg-image.loaded {
    opacity: 1;
}
    .page-title {
        text-align: center;
        font-size: 4rem;
        padding-top: 80px;
        color: #ff6b6b;
        margin: 20px 0;
        font-family: "Cinzel", sans-serif;
    }

    /* Countdown Timer Styling */
    .countdown {
        text-align: center;
        margin: 120px 0;
        font-size: 1.4rem;
        letter-spacing: 0.05rem;
        color: #f5d142;
        font-weight: bold;
        font-family: "Cinzel", serif;
        text-shadow: 0px 0px 2px #e60073;
    }

    .timer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        background: rgba(0, 0, 0, 0.2);
        padding: 20px;
        border-radius: 15px;
        border: 2px solid #ff6b6b;
        box-shadow: 0 0 20px #ff6b6b;
        backdrop-filter: blur(8px);
    }

    .timer-flex {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }

    .timer-box {
        text-align: center;
        padding: 10px;
        min-width: 80px;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.1);
        border-color: red;

    }

    .timer span {
        display: block;
        font-size: 2rem;
        font-weight: bold;
        color: #f5d142;
    }

    /* Glow Animation */
    @keyframes glow {
        from {
            text-shadow: 0px 0px 10px #ff3f3f, 0px 0px 20px #ff3f3f;
        }
        to {
            text-shadow: 0px 0px 20px #ff6b6b, 0px 0px 40px #ff6b6b;
        }
    }

    /* Event Grid Styling */
    .event-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        padding: 20px;
    }

    /* Responsive Styles */
    @media (max-width: 768px) {
        .page-title {
            font-size: 1.5rem;
            padding-top: 50px;
            margin: 10px 0;
        }
        .subtitle{
            font-size: 1.2rem;
        }
        .timer span {
            font-size: 1rem;
        }
        .countdown {
            font-size: 0.9rem;
            margin-top: 100px;
        }
        .timer-flex {
            gap: 10px;
        }
    }

    @media (max-width: 480px) {
        .countdown{
            margin-top: 100px;
        }
        .page-title {
            font-size: 1.5rem;
            margin: 0;
        }
        .timer span {
            font-size: 1.2rem;
        }
        .timer-box {
            min-width: 60px;
            padding: 8px;
        }
        .timer {
            padding: 15px;
        }
        .event-grid {
            gap: 15px;
            padding: 15px;
        }
    }
</style>
