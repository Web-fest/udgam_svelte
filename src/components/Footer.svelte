<script>
  export let small = false; // Prop to control the size and margin for the footer
  import logoSrc from "$lib/assets/images/logo.webp"; // Import the logo
</script>

<footer
  class={`${
    small ? 'mx-auto max-w-md' : 'mx-0 w-full'
  } bg-opacity-20 bg-blue text-center p-8`} 
>
  <!-- Logo Section -->
  <div class="logo-container flex justify-center items-center mb-6">
    <img
      src={logoSrc}
      alt="Logo"
      class="h-20 w-auto object-contain" 
    />
  </div>

  <!-- Navbar Links -->
  <nav class="nav-links flex justify-center mb-6 space-x-8">
    <a href="/home" class="text-white text-lg hover:text-primary transition-colors">Home</a>
    <a href="/about" class="text-white text-lg hover:text-primary transition-colors">About</a>
    <a href="/events" class="text-white text-lg hover:text-primary transition-colors">Events</a>
    <a href="/contact" class="text-white text-lg hover:text-primary transition-colors">Contact</a>
  </nav>

  <!-- Social Media Icons -->
  <div class="social-icons flex justify-center space-x-8 mt-4">
    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" class="text-white text-xl hover:text-red-600 transition-colors">
      <i class="fab fa-youtube"></i>
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="text-white text-xl hover:text-pink-500 transition-colors">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="mailto:your-email@example.com" class="text-white text-xl hover:text-yellow-400 transition-colors">
      <i class="fas fa-envelope"></i>
    </a>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" class="text-white text-xl hover:text-blue-600 transition-colors">
      <i class="fab fa-linkedin"></i>
    </a>
  </div>
</footer>
