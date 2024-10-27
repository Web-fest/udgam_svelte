<script>
    import "../app.css";
    import { userLoginStore } from "../lib/userLoginStore";

    let name;

    userLoginStore.subscribe((val) => {
        console.log(val);
        name = val;
    });
</script>

<header>
    <nav>
        <div class="logo">
            <a href="/">
                <img
                    src="../frontend_udgam/images/LOGO FINAL.png"
                    alt="College Fest Logo"
                />
            </a>
        </div>
        <ul class="nav-links">
            <li>
                <a href="#home">About us</a>
                <div class="highlight"></div>
            </li>
            <li>
                <a href="../frontend_udgam/Events.html">Events</a>
                <div class="highlight"></div>
            </li>
            <li>
                <a href="../frontend_udgam/Sponsors.html">Our Sponsors</a>
                <div class="highlight"></div>
            </li>
            <li>
                <a href="/past">Past Glimpses</a>
                <div class="highlight"></div>
            </li>
            <li>
                <a href="/team">Core Team</a>
                <div class="highlight"></div>
            </li>
            <li>
                <a href="../frontend_udgam/contact.html">Contact Us</a>
                <div class="highlight"></div>
            </li>
        </ul>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        {#if $userLoginStore === undefined}
            <a href="/login"><div>Login</div></a>
        {:else}
            <div>{name}</div>
        {/if}
    </nav>
</header>
