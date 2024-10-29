<script>
    export let title = '';
    export let image = '';
    export let description = '';
    export let link = '#';
    let imageLoaded = false;
    const placeholderImage = 'https://via.placeholder.com/300'; // Use a valid placeholder URL
  
    console.log('EventCard props:', { title, image, description, link }); // Debugging log
  </script>
  
  <div class="event-card">
    <div class="event-card-inner">
      <div class="event-card-front">
        <!-- Use IntersectionObserver to lazy-load the image -->
        <img
          src={imageLoaded ? image : placeholderImage}
          alt={title}
          loading="lazy"
          class:image-loaded={imageLoaded}
          on:load={() => (imageLoaded = true)}
          on:error={(e) => (e.target.src = placeholderImage)}
        />
        <h3>{title}</h3>
      </div>
      <div class="event-card-back">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} class="event-register-btn">Register Now</a>
      </div>
    </div>
  </div>
  
  <style>
    .event-card {
        background-color: transparent;
        width: 100%;
        height: 300px;
        perspective: 1000px;
        box-shadow: 0 4px 8px rgba(135, 125, 125, 0.1);
        border-radius: 10px;
        transition: box-shadow 0.3s ease, transform 0.6s;
    }
  
    .event-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }
  
    .event-card:hover .event-card-inner {
        transform: rotateY(180deg);
    }
  
    .event-card-front,
    .event-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 10px;
        overflow: hidden;
    }
  
    .event-card-front {
        background-color: rgba(255, 255, 255, 0.1);
    }
  
    .event-card-back {
        background-color: var(--primary-color);
        color: var(--text-color);
        transform: rotateY(180deg);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1.5rem;
    }
  
    .event-card img {
        width: 100%;
        height: 80%;
        object-fit: cover;
        transition: opacity 0.5s ease-in-out;
        opacity: 0;
    }
  
    .event-card img.image-loaded {
        opacity: 1;
    }
  
    .event-card h3 {
        font-size: 1.5rem;
        font-family: 'Cinzel', serif; /* Event title font */
        margin-bottom: 0.5rem;
    }
  
    .event-card p {
        font-size: 1rem;
        margin-bottom: 1rem;
    }
  
    .event-register-btn {
        display: inline-block;
        padding: 0.8rem 0.4rem;
        background-color: var(--secondary-color);
        color: var(--background-color);
        text-decoration: none;
        border-radius: 50px;
        font-weight: 600;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
        background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
        );
        transition: all 0.8s ease;
    }
  
    .event-register-btn:hover {
        background-color: var(--primary-color);
        color: var(--text-color);
        transform: translateY(-3px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
  
    .event-register-btn:hover:before {
        left: 100%;
    }
  
    .event-register-btn:active {
        transform: translateY(-1px);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    }
  </style>
  