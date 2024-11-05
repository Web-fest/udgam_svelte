<script>
  export let small = false; // Prop to control the size and margin for the footer
  import logoSrc from "$lib/assets/images/logo.webp"; // Import the Udgam logo
  import nitlogo from "$lib/assets/images/nit.svg";
  import brochure from "$lib/assets/documents/brochure.pdf";
</script>

<footer
  class={`${
    small ? 'mx-auto max-w-md' : 'mx-0 w-full'
  } bg-opacity-20 bg-blue text-center p-4`} 
>
  <!-- Institute Logo and Udgam Logo Section -->
  <div class="flex justify-center items-center mb-4 space-x-4">
    <img src={nitlogo} alt="Institute Logo" class="h-16 w-auto object-contain" />


    <img
      src={logoSrc}
      alt="Udgam Logo"
      class="h-16 w-auto object-contain" 
    />
  </div>

  <!-- Quick Links -->
  <div class="footer-links text-white font-semibold text-sm mb-2">
    <a href="/" class="footer-link hover:underline">Home</a> | 
    <a href="https://abhiyantran.nitsikkim.ac.in/" class="footer-link hover:underline">Abhiyantran</a> | 
    <!-- <a href="/download-app" class="footer-link hover:underline">Download Udgam App</a> |  -->
    <a href={brochure}  download class="footer-link hover:underline">Download Brochure</a>
  </div>

  <!-- Social Media Icons -->
  <div class="social-icons flex justify-center space-x-6 mt-2">
    <a href="https://www.youtube.com/@NITSikkimUdgam/featured" target="_blank" rel="noopener noreferrer" class="text-white text-lg hover:text-red-600 transition-colors">
      <i class="fab fa-youtube"></i>
    </a>
    <a href="https://www.instagram.com/udgam_nitsikkim" target="_blank" rel="noopener noreferrer" class="text-white text-lg hover:text-pink-500 transition-colors">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="mailto:udgam@nitsikkim.ac.in" class="text-white text-lg hover:text-yellow-400 transition-colors">
      <i class="fas fa-envelope"></i>
    </a>
    <a href="https://www.linkedin.com/school/national-institute-of-technology-sikkim/" target="_blank" rel="noopener noreferrer" class="text-white text-lg hover:text-blue-600 transition-colors">
      <i class="fab fa-linkedin"></i>
    </a>
  </div>

  <!-- Copyright and Credits -->
  <div class="mt-4 text-xs text-gray-300">
    <p>&copy; 2023 National Institute of Technology Sikkim. All rights reserved.</p>
    <p>Designed with love by the Udgam Web Dev Team</p>
  </div>
</footer>

<style>
  footer {
    font-family: 'Poppins', sans-serif;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 1rem 2%;
    text-align: center;
    border-radius: 0.5rem;
  }

  /* Local styling for footer links */
  .footer-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
  .footer-link {
    font-size: 0.9rem;
    color: #ffffff;
  }

  .social-icons a {
    font-size: 1.2rem; /* Adjust social media icon size */
  }

  .text-xs {
    font-size: 0.75rem;
  }

  /* Responsive adjustments */
  @media (max-width: 640px) {
    .footer-link {
      font-size: 0.8rem;
    }
    .social-icons a {
      font-size: 1rem;
    }
  }
</style>
