<script>
    export let small = false; // Prop to control the size and margin for the footer
  </script>
  
  <footer
    class={`${
      small ? 'mx-auto max-w-md' : 'mx-0 w-full'
    } bg-opacity-20 bg-black text-center p-6`}
  >
    <!-- Logo Section -->
    <div class="logo-container flex justify-center items-center mb-4">
      <img src="/path/to/logo.png" alt="Logo" class="h-10 w-auto object-contain" />
    </div>
  
    <!-- Navbar Links -->
    <nav class="nav-links flex justify-center mb-4 space-x-6">
      <a href="/home" class="text-white text-sm hover:text-primary transition-colors">Home</a>
      <a href="/about" class="text-white text-sm hover:text-primary transition-colors">About</a>
      <a href="/events" class="text-white text-sm hover:text-primary transition-colors">Events</a>
      <a href="/contact" class="text-white text-sm hover:text-primary transition-colors">Contact</a>
    </nav>
  
    <!-- Social Links -->
    <div class="social-links flex justify-center mb-4 space-x-4">
      <a href="https://facebook.com" target="_blank" class="text-white text-xl hover:text-primary transition-colors">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="https://twitter.com" target="_blank" class="text-white text-xl hover:text-primary transition-colors">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://instagram.com" target="_blank" class="text-white text-xl hover:text-primary transition-colors">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" class="text-white text-xl hover:text-primary transition-colors">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="mailto:your-email@example.com" class="text-white text-xl hover:text-primary transition-colors">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
    
    <!-- Copyright Text -->
    <p class="text-white text-sm opacity-75">
      © 2024 UDGAM. All rights reserved.
    </p>
  </footer>
  