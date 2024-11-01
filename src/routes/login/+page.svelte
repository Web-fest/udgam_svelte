<script>
  let email = "";
  let password = "";
  let passwordInput, eyeIcon;

  function togglePassword() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.classList.replace("ri-eye-off-line", "ri-eye-line");
    } else {
      passwordInput.type = "password";
      eyeIcon.classList.replace("ri-eye-line", "ri-eye-off-line");
    }
  }
</script>

<body style="font-family: 'Cinzel';">
  <div class="login">
    <img src="/assets/login-bg.png" alt="" class="login__img" />
    <div class="login__box">Registrations coming soon!</div>

    <!-- <form action="/" method="post" class="container">
      <h1 class="login__title">Login</h1>

      <div class="login__content">
        <div class="login__box">
          <i class="ri-user-3-line login__icon"></i>

          <div class="login__box-input">
            <input
              type="email"
              name="email"
              required
              class="login__input"
              id="login-email"
              placeholder=" "
              bind:value={email}
            />
            <label for="login-email" class="login__label">Email</label>
          </div>
        </div>

        <div class="login__box">
          <i class="ri-lock-2-line login__icon"></i>

          <div class="login__box-input">
            <input
              type="password"
              name="password"
              required
              class="login__input"
              id="login-pass"
              placeholder=" "
              bind:value={password}
              bind:this={passwordInput}
            />
            <i
              class="ri-eye-off-line login__eye"
              bind:this={eyeIcon}
              on:click={togglePassword}
            ></i>
            <label for="login-pass" class="login__label">Password</label>
          </div>
        </div>

        <div class="login__box login__box-dropdown">
          <i class="ri-user-settings-line login__icon"></i>

          <div class="login__box-input">
            <select required class="login__input" id="userType" name="userType">
              <option value="" disabled selected hidden>Select User Type</option
              >
              <option value="student">Student/Scholars</option>
              <option value="faculty">Faculty</option>
              <option value="Coordinator">Coordinator</option>
              <option value="general">General</option>
            </select>
            <label for="userType" class="login__label"></label>
          </div>
        </div>
      </div>

      <div class="login__check">
        <div class="login__check-group">
          <input type="checkbox" class="login__check-input" id="login-check" />
          <label for="login-check" class="login__check-label">Remember me</label
          >
        </div>

        <a href="#" class="login__forgot">Forgot Password?</a>
      </div>

      <button type="submit" class="login__button">Login</button>

      <p class="login__register">
        Don't have an account? <a href="/register">Sign up</a>
      </p>
    </form> -->
  </div>
  <!-- <script>
    // Get the password input and eye icon elements
    // Get the password input and eye icon elements
    let passwordInput = document.getElementById("login-pass");
    const eyeIcon = document.getElementById("login-eye");

    // Add click event listener to the eye icon
    eyeIcon.addEventListener("click", function () {
      // Toggle password visibility
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("ri-eye-off-line");
        eyeIcon.classList.add("ri-eye-line");
      } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("ri-eye-line");
        eyeIcon.classList.add("ri-eye-off-line");
      }
    });
  </script> -->
</body>

<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body,
  input,
  button {
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
  }

  body {
    color: hsl(0, 0%, 100%);
  }

  input,
  button {
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /*=============== LOGIN ===============*/
  .login {
    position: relative;
    height: 100vh;
    display: grid;
    align-items: center;
  }

  .login__img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .container {
    position: relative;
    background-color: hsla(0, 0%, 10%, 0.1);
    border: 2px solid white;
    margin-inline: 1.5rem;
    padding: 2.5rem 1.5rem;
    border-radius: 1rem;
    backdrop-filter: blur(10px);
  }

  .login__title {
    text-align: center;
    font-size: 1.75rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  .login__content,
  .login__box {
    display: grid;
  }

  .login__content {
    row-gap: 1.75rem;
    margin-bottom: 1.5rem;
  }

  .login__box {
    grid-template-columns: max-content 1fr;
    align-items: center;
    column-gap: 0.75rem;
    border-bottom: 2px solid hsl(0, 0%, 100%);
  }
  .login__box:last-child {
    border-bottom: none;
  }

  .login__icon,
  .login__eye {
    color: #000;
    font-size: 1.25rem;
  }

  .login__input {
    width: 100%;
    padding-block: 0.8rem;
    background: none;
    color: hsl(0, 0%, 100%);
    position: relative;
    z-index: 1;
  }

  .login__box-input {
    position: relative;
  }

  .login__label {
    position: absolute;
    left: 0;
    top: 13px;
    font-weight: 500;
    transition:
      top 0.3s,
      font-size 0.3s;
  }

  .login__eye {
    position: absolute;
    right: 0;
    top: 18px;
    z-index: 10;
    cursor: pointer;
  }

  .login__box:nth-child(2) input {
    padding-right: 1.8rem;
  }

  .login__check,
  .login__check-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .login__check {
    margin-bottom: 1.5rem;
  }

  .login__check-label,
  .login__forgot,
  .login__register {
    font-size: 0.813rem;
  }

  .login__check-group {
    column-gap: 0.5rem;
  }

  .login__check-input {
    width: 16px;
    height: 16px;
  }

  .login__forgot {
    color: hsl(0, 0%, 100%);
  }

  .login__forgot:hover {
    text-decoration: underline;
  }

  .login__button {
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: hsl(0, 0%, 100%);
    font-weight: 500;
    cursor: pointer;
    margin-bottom: 2rem;
    transition: all 0.3s ease;
  }

  .login__button:hover {
    background-color: #f23131d2;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .login__register {
    text-align: center;
  }

  .login__register a {
    color: hsl(0, 0%, 100%);
    font-weight: 500;
  }

  .login__register a:hover {
    text-decoration: underline;
    color: orangered;
  }

  .login__forgot,
  .login__register a {
    transition: color 0.3s ease;
  }

  .login__forgot:hover,
  .login__register a:hover {
    color: #ff1b1b;
  }

  /* Input focus move up label */
  .login__input:focus + .login__label {
    top: -12px;
    font-size: 0.813rem;
  }

  /* Input focus sticky top label */
  .login__input:not(:placeholder-shown).login__input:not(:focus)
    + .login__label {
    top: -12px;
    font-size: 0.813rem;
  }

  /*=============== BREAKPOINTS ===============*/
  /* For medium devices */
  @media screen and (min-width: 576px) {
    .login {
      justify-content: center;
    }

    .container {
      width: 400px;
      padding: 4rem 3rem 3.5rem;
      border-radius: 1.5rem;
    }

    .login__title {
      font-size: 2rem;
    }
  }

  .login__box-dropdown select.login__input {
    color: hsl(0, 0%, 100%);
  }

  /* Make buttons more responsive */
  @media (max-width: 768px) {
    .login__button {
      padding: 0.8rem 1.5rem;
      font-size: 0.9rem;
    }

    .login__forgot,
    .login__register a {
      font-size: 0.8rem;
    }
  }

  .hero {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  #hero-video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translateX(-50%) translateY(-50%);
    z-index: -1;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    padding-top: 40vh;
  }

  .hero h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    animation: fadeInUp 1s ease-out;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .parallax {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  #events {
    background-image: url("events-bg.jpg");
  }

  #schedule {
    background-image: url("schedule-bg.jpg");
  }

  .event-card {
    perspective: 1000px;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .event-card:hover {
    transform: rotateY(180deg);
  }

  .event-card-front,
  .event-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .event-card-back {
    background-color: var(--accent-1);
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--accent-1), var(--accent-2));
    opacity: 0.05;
    z-index: -1;
    animation: gradientShift 15s ease infinite;
  }

  @keyframes gradientShift {
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

  /* .login__box:last-child select.login__input {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  padding-right: 2rem;
  border: 2px solid white;
  border-radius: 0.5rem;
  background-color: transparent;
  color: white;  // Add this line to ensure text is white
  padding: 0.8rem;  // Add padding to match other inputs
} */

  /* Add these styles at the end of your existing CSS */

  /* Remove bottom border for dropdown */
  .login__box-dropdown {
    border-bottom: none;
  }

  /* Styles for the select dropdown */
  .login__box-dropdown {
    margin-top: 0.5rem; /* Add some space above the dropdown */
  }

  .login__box-dropdown select.login__input {
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    padding: 0.8rem 2rem 0.8rem 1rem; /* Increase padding for better appearance */
    border: 1px solid hsl(0, 0%, 100%);
    border-radius: 0.5rem;
    background-color: rgba(
      255,
      255,
      255,
      0.1
    ); /* Slight background for better visibility */
    color: hsl(0, 0%, 100%);
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .login__box-dropdown select.login__input:hover,
  .login__box-dropdown select.login__input:focus {
    background-color: rgba(
      255,
      255,
      255,
      0.2
    ); /* Darker background on hover/focus */
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.3); /* Subtle glow effect */
  }

  .login__box-dropdown .login__box-input {
    position: relative;
  }

  .login__box-dropdown .login__box-input::after {
    content: "\25BC";
    position: absolute;
    top: 50%;
    right: 1rem; /* Adjust arrow position */
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 0.8rem;
    color: hsl(0, 0%, 100%);
    transition: transform 0.3s ease;
  }

  .login__box-dropdown select.login__input:focus + .login__box-input::after {
    transform: translateY(-50%) rotate(180deg); /* Rotate arrow when dropdown is open */
  }

  /* Ensure the label moves up when an option is selected */
  .login__box-dropdown select.login__input:valid + .login__label,
  .login__box-dropdown select.login__input:focus + .login__label {
    top: -12px;
    font-size: 0.813rem;
    color: hsl(0, 0%, 100%);
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* Background for better readability */
    padding: 0 0.3rem;
    border-radius: 0.25rem;
  }

  /* Adjust dropdown options style */
  .login__box-dropdown select.login__input option {
    background-color: hsla(0, 0%, 10%, 0.9);
    color: hsl(0, 0%, 100%);
    padding: 0.5rem;
  }
</style>
