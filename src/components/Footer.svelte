<script>
  export let small = false; // Prop to control the size and margin for the footer
  import logoSrc from "$lib/assets/images/logo.webp"; // Import the logo
</script>

<footer
  class={`${
    small ? 'mx-auto max-w-md' : 'mx-0 w-full'
  } bg-opacity-20 bg-blue text-center p-4`} 
>
  <!-- Logo Section -->
  <div class="logo-container flex justify-center items-center mb-4">
    <img
      src={logoSrc}
      alt="Logo"
      class="h-16 w-auto object-contain" 
    />
  </div>

  <!-- Navbar Links -->
    
  <!-- Social Media Icons -->
  <div class="social-icons flex justify-center space-x-6 mt-2">
    <a href="https://www.youtube.com/@NITSikkimUdgam/featured" target="_blank" rel="noopener noreferrer" class="text-white text-lg hover:text-red-600 transition-colors">
      <i class="fab fa-youtube"></i>
    </a>
    <a href="https://www.instagram.com/udgam_nitsikkim?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" class="text-white text-lg hover:text-pink-500 transition-colors">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="udgam@nitsikkim.ac.in" class="text-white text-lg hover:text-yellow-400 transition-colors">
      <i class="fas fa-envelope"></i>
    </a>
    <a href="https://www.linkedin.com/school/national-institute-of-technology-sikkim/" target="_blank" rel="noopener noreferrer" class="text-white text-lg hover:text-blue-600 transition-colors">
      <i class="fab fa-linkedin"></i>
    </a>
  </div>
</footer>

<style>
  footer {
    font-family: 'Poppins', sans-serif;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 1rem 2%;
    text-align: center;
  }

  .logo-container img {
    height: 50px; /* Adjust logo height */
  }

  .nav-links a {
    font-size: 0.8rem; /* Decrease link font size */
  }

  .social-icons a {
    font-size: 1.2rem; /* Adjust social media icon size */
  }
</style>
