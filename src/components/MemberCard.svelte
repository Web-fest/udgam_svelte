<script>
  export let name = "Unknown Member"; // Default value
  export let image;
  export let phone;
  export let email;
  export let linkedin;
  export let instagram;

  // State for mobile touch interaction
  let isHovered = false;

  // Touch event handlers
  function handleTouchStart() {
    isHovered = true;
  }

  function handleTouchEnd() {
    isHovered = false;
  }
</script>

<style>
  :root {
    --card-bg-color: #2a2a2a;
    --border-color: #5c3c82;
    --icon-color: #c0c0c0;
    --icon-hover-color: #a0d0e0;
  }

  .member-card {
    position: relative;
    width: 300px;
    height: 350px; /* Increased height */
    background-color: var(--card-bg-color);
    border-radius: 15px;
    border: 4px solid var(--border-color);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin: 10px;
    font-family: 'Garamond', serif;
  }

  .member-card:hover,
  .member-card.hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.8);
  }

  img {
    width: 100%;
    height: 100%; /* Maintain aspect ratio */
    object-fit: cover; /* Allow the full image to be visible */
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 10px;
    box-sizing: border-box;
  }

  .member-card:hover .overlay,
  .member-card.hover .overlay {
    opacity: 1;
  }

  .name {
    font-style: italic;
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  .contact-icons {
    display: flex;
    gap: 10px;
  }

  .contact-icons a {
    color: var(--icon-color);
    font-size: 24px;
    transition: color 0.3s;
  }

  .contact-icons a:hover {
    color: var(--icon-hover-color);
  }
</style>

<div
  class="member-card {isHovered ? 'hover' : ''}"
  on:touchstart={handleTouchStart}
  on:touchend={handleTouchEnd}
>
  <img src={image} alt={`${name}'s profile picture`} loading="lazy" />

  <div class="overlay">
    <div class="name">{name}</div>
    <div class="contact-icons">
      <a href={`tel:${phone}`} title="Phone" aria-label="Call">
        <i class="fa-solid fa-phone"></i>
      </a>
      <a href={`mailto:${email}`} title="Email" aria-label="Email">
        <i class="fa-solid fa-envelope"></i>
      </a>
      <a href={linkedin} title="LinkedIn" aria-label="LinkedIn Profile">
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href={instagram} title="Instagram" aria-label="Instagram Profile">
        <i class="fa-brands fa-instagram"></i>
      </a>
    </div>
  </div>
</div>
