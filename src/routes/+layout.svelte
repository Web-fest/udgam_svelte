<script>
    import "../app.css";
    import Navbar from "../components/Navbar.svelte";
    let Footer;

    import { onMount } from 'svelte';

    onMount(async () => {
        Footer = (await import('../components/Footer.svelte')).default;
    });
</script>



<main>
    <Navbar />
    <slot />
</main>

{#if Footer}
    <svelte:component this={Footer} />
{/if}
