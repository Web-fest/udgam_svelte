<script>
    import { onMount } from "svelte";
    import { userLoginStore } from "../lib/userLoginStore";
    import logoSrc from "$lib/assets/images/logo.webp"; // Ensure the path is correct

    let name;
    let logoLoaded = false; // Flag to check if the logo is loaded

    userLoginStore.subscribe((val) => {
        console.log(val);
        name = val;
    });

    function navbarAnimation() {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");
        const navLinks = document.querySelectorAll(".nav-links li");
        const navLinksHighlight = document.querySelectorAll(".nav-links a");
        const highlight = document.createElement("span");
        highlight.classList.add("highlight");
        document.querySelector(".nav-links").appendChild(highlight);

        burger.addEventListener("click", () => {
            nav.classList.toggle("nav-active");
            navLinks.forEach((link, index) => {
                link.style.animation = link.style.animation
                    ? ""
                    : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            });
            burger.classList.toggle("toggle");
        });

        function moveHighlight(e) {
            const linkWidth = e.target.getBoundingClientRect().width;
            const linkLeft = e.target.getBoundingClientRect().left;
            const containerLeft = e.target
                .closest(".nav-links")
                .getBoundingClientRect().left;
            const highlightPosition = linkLeft - containerLeft;
            highlight.style.width = `${linkWidth}px`;
            highlight.style.transform = `translateX(${highlightPosition}px)`;
        }

        function removeHighlight() {
            highlight.style.width = "0";
        }

        navLinksHighlight.forEach((link) => {
            link.addEventListener("mouseenter", moveHighlight);
            link.addEventListener("focus", moveHighlight);
            link.addEventListener("mouseleave", removeHighlight);
            link.addEventListener("blur", removeHighlight);
        });
    }

    onMount(() => {
        navbarAnimation();

        // Lazy load the logo when it comes into view
        const logoElement = document.getElementById("navbar-logo");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    logoLoaded = true; // Set the flag to true when in view
                    observer.unobserve(entry.target); // Stop observing
                    console.log("Logo is now loaded"); // Debug log
                }
            });
        });

        observer.observe(logoElement); // Start observing the logo element
    });
</script>

<header>
    <nav>
        <div class="logo">
            <a href="/">
                <img
                    id="navbar-logo"
                    src={logoLoaded ? logoSrc : ""}
                    alt="College Fest Logo"
                    loading="lazy"
                    style="opacity: {logoLoaded
                        ? 1
                        : 0}; transition: opacity 0.5s ease;"
                />
            </a>
        </div>
        <ul class="nav-links">
            <li><a href="/about">About us</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="../frontend_udgam/Sponsors.html">Our Sponsors</a></li>
            <li><a href="/past">Past Glimpses</a></li>
            <li><a href="/team">Core Team</a></li>
            <li><a href="">OUR FICs</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li>
                {#if $userLoginStore === undefined}
                    <a href="/login"><div>Login</div></a>
                {:else}
                    <div>{name}</div>
                {/if}
            </li>
        </ul>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
</header>
