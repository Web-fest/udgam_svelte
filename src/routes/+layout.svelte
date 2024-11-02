<script>
    import "../app.css";
    import Navbar from "../components/Navbar.svelte";
    let Footer;

    import { onMount } from 'svelte';

    onMount(async () => {
        Footer = (await import('../components/Footer.svelte')).default;

        // Disable right-click context menu
        document.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        });

        // Prevent specific key combinations
        document.addEventListener("keydown", function (e) {
            // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, and Ctrl+U
            if (e.key === "F12" || 
                (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || 
                (e.ctrlKey && e.key === "U")) {
                e.preventDefault();
            }
        });
    });
</script>
<svelte:head>
  <title>UDGAM' 24</title>
</svelte:head>


<main>
    <Navbar />
    <slot />
</main>

{#if Footer}
    <svelte:component this={Footer} />
{/if}
