<script>
  import sahil from "$lib/assets/images/sahil.webp";
  import sid from "$lib/assets/images/siddharth.webp";
  import banani from "$lib/assets/images/banani.webp";
  import harshit from "$lib/assets/images/harshit.webp";

  const teamMembers = [
    {
      name: "Sahil Kumar",
      image: sahil,
      phone: "+917076448001",
      instagram:
        "https://www.instagram.com/sahil_srgm/profilecard/?igsh=cjEwNWlna2hkbmd5",
      position: "President",
      linkedin: "https://www.linkedin.com/in/sahil-kumar-827410283/",
      email: "b220063@nitsikkim.ac.in",
    },
    {
      name: "Banani Das",
      image: banani,
      phone: "+917679169195",
      instagram:
        "https://www.instagram.com/banani._.27?utm_source=qr&igsh=d3Z4ZnYydHI1OXg2",
      linkedin:
        "https://www.linkedin.com/in/banani-das-238611300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
      position: "Vice-President",
      email: "b220047@nitsikkim.ac.in",
    },
    {
      name: "Harshit Vyas",
      image: harshit,
      phone: "+919509355025",
      instagram:
        "https://www.instagram.com/harshit_vyas27/profilecard/?igsh=MWg1YWRhaXBydjJwZg==",
      linkedin:
        "https://www.linkedin.com/in/harshit-vyas-330066257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

      position: "General Secretary",
      email: "b220014@nitsikkim.ac.in",
    },
    {
      name: "Siddharth",
      image: sid,
      phone: "+919835273753",
      instagram:
        "https://www.instagram.com/thessiddharth?igsh=ZTJ6eWtvcHpsdHQ1&utm_source=qr",
      linkedin:
        "https://www.linkedin.com/in/siddharth-choudhary-77483228b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",

      position: "Treasurer",
      email: "b220034@nitsikkim.ac.in",
    },

    // Add more team members here
  ];
</script>

<svelte:head>
  <!-- Add Font Awesome CDN -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />
</svelte:head>

<main style="padding-top: 5rem;">
  <div class="container">
    <h1 class="main-title">
      <span style="font-family: 'Cinzel', serif;">Contact Us</span>
    </h1>
    <div class="card__container">
      {#each teamMembers as member}
        <article class="card__article">
          <img src={member.image} alt={member.name} class="card__img" />
          <div class="card__data">
            <span class="card__description member-name">{member.name}</span>
            <h2 class="card__title">{member.position}</h2>
            <div class="social-buttons">
              <a href={member.instagram} class="card__button">
                <i class="fab fa-instagram"></i>
              </a>
              <a href={member.linkedin} class="card__button">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href={member.email} class="card__button">
                <i class="far fa-envelope"></i>
              </a>
              <a href={member.phone} class="card__button">
                <i class="fas fa-phone"></i>
              </a>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</main>

<style>
  .member-name {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  :root {
    /*========== Colors ==========*/
    /*Color mode HSL(hue, saturation, lightness)*/
    --first-color: hsl(200, 33%, 2%);
    --title-color: #ff6b6b;
    --text-color: hsl(0, 47%, 34%);
    --body-color: hsl(60, 83%, 52%);
    --container-color: hsl(0, 11%, 76%);

    /*========== Font and typography ==========*/
    /*.5rem = 8px | 1rem = 16px ...*/
    --body-font: "Cinzel", serif;
    --h2-font-size: 1.25rem;
    --small-font-size: 0.813rem;
  }

  /*========== Responsive typography ==========*/
  @media screen and (min-width: 1120px) {
    :root {
      --h2-font-size: 1.5rem;
      --small-font-size: 0.875rem;
    }
  }

  /*=============== BASE ===============*/
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /*=============== CARD ===============*/
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-inline: 1.5rem;
    padding-block: 3rem;
    border-radius: 1rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  .main-title {
    font-size: 2.5rem;
    color: #f5d142;
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .card__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
    padding: 1rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .card__article {
    position: relative;
    overflow: hidden;
    z-index: 1;
    border-radius: 0.75rem;
    height: 400px; /* Increased from 180px to 250px */
    width: 100%;
  }

  .card__img {
    width: 100%;
    height: 400px; /* Increased from 180px to 250px to match article height */
    /* object-fit: cover;  */
    border-radius: 0.75rem;
    transition: transform 0.3s ease;
  }

  /* .card__data {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1rem 0.75rem;
  box-shadow: 0 8px 24px hsla(0, 0%, 0%, .15);
  border-radius: 0.75rem 0.75rem 0 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-inline: auto;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s ease;
  z-index: 2;
  backdrop-filter: blur(5px);
  text-align: center;
} */

  .card__description {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
    color: var(--text-color);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: center;
  }

  .card__title {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--title-color);
    margin-bottom: 0.75rem;
    text-align: center;
  }

  .card__button {
    text-decoration: none;
    font-size: 1rem;
    color: var(--first-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border: 2px solid var(--first-color);
    border-radius: 50%;
    transition: all 0.3s ease;
    background-color: transparent;
    padding: 0; /* Remove default padding */
  }

  .card__button:hover {
    background-color: var(--first-color);
    color: rgb(27, 168, 255);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(215, 208, 208, 0.1);
  }

  /* Style for Font Awesome icons */
  .fab,
  .far,
  .fas {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }

  /* Specific styling for phone icon */
  .fa-phone {
    transform: rotate(90deg);
  }

  .card__button:hover .fa-phone {
    transform: rotate(90deg) scale(1.1);
  }

  /* Hover effects for icons */
  .card__button:hover .fab,
  .card__button:hover .far,
  .card__button:hover .fas {
    transform: scale(1.1);
  }

  /* Card animation */
  @keyframes show-data {
    to {
      bottom: 0;
      opacity: 1;
    }
  }

  /*=============== BREAKPOINTS ===============*/
  /* For small devices */
  @media screen and (max-width: 340px) {
    .container {
      margin-inline: 1rem;
    }

    .card__data {
      width: 250px;
      padding: 1rem;
    }
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    .card__container {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    .card__article {
      height: 280px; /* Slightly larger on tablets */
    }

    .card__img {
      height: 400px;
    }
  }

  /* For large devices */
  @media screen and (min-width: 1120px) {
    .container {
      height: 100vh;
    }

    .card__img {
      width: 100%;
    }
    .card__data {
      width: 100%;
      padding-inline: 2rem;
    }
  }

  /* For extra small devices */
  @media screen and (max-width: 480px) {
    .card__container {
      grid-template-columns: repeat(1, 1fr);
      gap: 1rem;
    }

    .card__article {
      height: 300px; /* Larger on mobile for better visibility */
    }

    .card__img {
      height: 300px;
    }
  }

  /* Update media queries */
  @media screen and (max-width: 1200px) {
    .card__container {
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }
  }

  @media screen and (max-width: 992px) {
    .card__container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (max-width: 768px) {
    .card__container {
      grid-template-columns: repeat(2, 1fr);
    }

    .card__article {
      height: 280px; /* Slightly larger on tablets */
    }

    .card__img {
      height: 280px;
    }
  }

  /* Add these new styles for social buttons */
  .social-buttons {
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    margin-top: 0.75rem;
    padding: 0.25rem;
  }

  /* Adjust spacing for mobile */
  @media screen and (max-width: 768px) {
    .social-buttons {
      gap: 0.6rem;
    }

    .card__button {
      width: 32px;
      height: 32px;
      font-size: 0.9rem;
    }
  }

  /* Add these hover effect styles */
  .card__article:hover .card__data {
    opacity: 1;
    transform: translateY(0);
  }

  .card__article:hover .card__img {
    transform: scale(1.1);
    filter: brightness(0.8);
  }

  /* Optional: Add a smooth transition for the image */
  /* .card__img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: all 0.3s ease; 
} */

  /* Update card data transition */
  .card__data {
    width: 100%;
    background-color: rgba(146, 162, 207, 0.903);
    padding: 1rem 0.75rem;
    box-shadow: 0 8px 24px hsla(0, 0%, 0%, 0.15);
    border-radius: 0.75rem 0.75rem 0 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-inline: auto;
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.3s ease; /* Ensure transition is properly set */
    z-index: 2;
    backdrop-filter: blur(5px);
    text-align: center;
  }
</style>
