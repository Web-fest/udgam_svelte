<!-- EventCard.svelte -->
<script>
    export let title = ''; // Title of the event
    export let image = ''; // Image URL for the event
    export let description = ''; // Description for the event
    export let link = '#'; // Registration link for the event
  </script>
  
  <div class="event-card">
    <div class="event-card-inner">
      <div class="event-card-front">
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </div>
      <div class="event-card-back">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} class="event-register-btn">Register Now</a>
      </div>
    </div>
  </div>
  
