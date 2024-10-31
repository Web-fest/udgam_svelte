<script>
    import MemberCard from '../../components/MemberCard.svelte';
    import navnit from '$lib/assets/images/shibu.webp'; // Make sure this path is correct

    // Define a single team member's data
    const member = {
        name: "Sahil Kumar",
        image: navnit, // Ensure this image exists in src/lib/assets/images
        phone: "+1234567890",
        instagram: "#",
        linkedin: "#",
        email: "sahil@example.com"
    };
</script>

<style>
    .member-container {
        display: flex;
        justify-content: center; /* Center the MemberCard */
        margin-top: 50px; /* Spacing from the top */
    }
</style>

<main>
    <div class="member-container">
        <MemberCard {...member} />
    </div>
</main>
