<script>
    import "./contact.css";

    const teamMembers = [
        {
            name: "Sahil Kumar",
            position: "President",
            image: "https://plus.unsplash.com/premium_photo-1689568158814-3b8e9c1a9618",
            instagram: "#",
            linkedin: "#",
            email: "mailto:example@email.com",
            phone: "tel:+1234567890", // Add phone number with tel: prefix
        },
        {
            position: "Vice President",
            image: "https://plus.unsplash.com/premium_photo-1689568158814-3b8e9c1a9618",
            instagram: "#",
            linkedin: "#",
            email: "mailto:example2@email.com",
            phone: "tel:+1234567890",
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
        <h1 class="main-title">Contact Us</h1>
        <div class="card__container">
            {#each teamMembers as member}
                <article class="card__article">
                    <img
                        src={member.image}
                        alt={member.name}
                        class="card__img"
                    />
                    <div class="card__data">
                        <span class="card__description member-name"
                            >{member.name}</span
                        >
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
</style>
