<script>
    export let title = '';
    export let image = '';
    export let description = '';
    export let link = '#';
    let imageLoaded = false;
    const placeholderImage = 'https://via.placeholder.com/300'; // Use a valid placeholder URL
</script>

<div class="event-tile">
    <div class="event-tile-inner">
        <!-- Front Side -->
        <div class="event-card-front">
            <div class="event-image-container">
                <img
                    src={imageLoaded ? image : placeholderImage}
                    alt={title}
                    loading="lazy"
                    class:image-loaded={imageLoaded}
                    on:load={() => (imageLoaded = true)}
                    on:error={(e) => (e.target.src = placeholderImage)}
                />
            </div>
            <div class="event-tile-title">
                <h3>{title}</h3>
            </div>
        </div>

        <!-- Back Side -->
        <div class="event-card-back">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} class="event-register-btn">Register Now</a>
        </div>
    </div>
</div>

<style>
    /* Event Tile */
    .event-tile {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 600px;
        border: 3px solid #b8916d; /* Fantasy-style border */
        border-radius: 12px;
        padding: 10px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        perspective: 1000px;
        transition: transform 0.6s, box-shadow 0.3s ease;
    }

    .event-tile:hover {
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
        transform: translateY(-5px);
    }

    /* Flip Effect */
    .event-tile-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transform-style: preserve-3d;
        transition: transform 0.6s;
    }

    .event-tile:hover .event-tile-inner {
        transform: rotateY(180deg);
    }

    /* Card Sides */
    .event-card-front,
    .event-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    /* Front Card */
    .event-card-front {
        background-color: rgba(255, 255, 255, 0.1);
    }

    /* Back Card */
    .event-card-back {
        background-color: var(--primary-color);
        color: var(--text-color);
        transform: rotateY(180deg);
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    /* Image Styles */
    .event-image-container {
        flex: 1;
        overflow: hidden;
    }

    .event-image-container img {
        width: 100%;
        height: 100%;
        transition: opacity 0.5s ease-in-out;
        opacity: 0;
    }

    .event-image-container img.image-loaded {
        opacity: 1;
    }

    /* Title Below the Card */
    .event-tile-title {
        text-align: center;
        background-color: #1a1a2e;
        width: 100%;
        padding: 0.4rem 0;
        font-family: 'Cinzel', serif;
        font-weight: bold;
    }

    .event-tile-title h3 {
        font-size: 2rem;
        color: #fff;
        margin: 0;
    }

    /* Back Card Content */
    .event-card-back h3 {
        font-size: 2rem;
        font-family: 'Cinzel', serif;
        font-weight: bold;
        margin-bottom: 0.6rem;
    }

    .event-card-back p {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    /* Register Button */
    .event-register-btn {
        display: inline-block;
        padding: 0.8rem 1rem;
        background-color: #e6b700;
        color: #fff;
        text-decoration: none;
        border-radius: 50px;
        font-weight: bold;
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        position: relative;
        overflow: hidden;
    }

    .event-register-btn:before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.5), transparent);
        transition: all 0.8s ease;
    }

    .event-register-btn:hover {
        background-color: #ffca28;
        transform: translateY(-3px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
    }

    .event-register-btn:hover:before {
        left: 100%;
    }

    .event-register-btn:active {
        transform: translateY(-1px);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    }
    .event-tile-inner.flip {
        transform: rotateY(180deg);
    }

    @media screen and (max-width: 480px) {
        .event-tile {
            width: 100%;
            height: 400px;
        }

        .event-image-container img {
        overflow: hidden;
        object-fit: fill;
    }


        .event-card-back h3, .event-tile-title h3 {
            font-size: 1.2rem;
        }

        .event-card-back p {
            font-size: 1rem;
        }

        .event-register-btn {
            font-size: 1rem;
            padding: 0.5rem 0.7rem;
        }
    }
</style>

