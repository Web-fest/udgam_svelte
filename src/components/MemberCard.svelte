<script>
    export let name;
    export let role;
    export let image;
    export let links; // Array of { icon: 'fab fa-linkedin', href: 'link' }
  </script>
  
  <div class="member-card">
    <img src={image} alt="{name}" class="member-image" loading="lazy" />
    <div class="member-details">
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
    <div class="contact-icons">
      {#each links as { icon, href }}
        <a href={href} target="_blank" rel="noopener noreferrer">
          <i class={icon}></i>
        </a>
      {/each}
    </div>
  </div>
  
  <style>
    .member-card {
      /* Card styling */
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      transition: transform 0.3s;
    }
    .contact-icons {
      display: flex;
      gap: 10px;
      visibility: hidden;
    }
    .member-card:hover .contact-icons {
      visibility: visible;
    }
  </style>
  