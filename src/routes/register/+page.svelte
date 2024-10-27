<script>
    import "../register/register.css";
</script>
<body>
    <div class="login">
       <img src="./images/fantasy-endless-hole-landscape.jpg" alt="register image" class="login__img">
 
       <form action="" class="container">
          <h1 class="login__title">Sign Up</h1>
 
          <div class="login__content">
             <div class="login__box">
                <i class="ri-user-3-line login__icon"></i>
 
                <div class="login__box-input">
                   <input type="text" required class="login__input" id="register-name" placeholder=" ">
                   <label for="register-name" class="login__label">Full Name</label>
                </div>
             </div>
 
             <div class="login__box">
                <i class="ri-hashtag login__icon"></i>
 
                <div class="login__box-input">
                   <input type="text" required class="login__input" id="register-roll" placeholder=" ">
                   <label for="register-roll" class="login__label">Roll Number</label>
                </div>
             </div>
             <div class="login__box">
                <i class="ri-mail-line login__icon"></i>
 
                <div class="login__box-input">
                   <input type="email" required class="login__input" id="register-email" placeholder=" ">
                   <label for="register-email" class="login__label">Email</label>
                </div>
             </div>
 
             <div class="login__box">
                <i class="ri-lock-2-line login__icon"></i>
 
                <div class="login__box-input">
                   <input type="password" required class="login__input" id="register-pass" placeholder=" ">
                   <label for="register-pass" class="login__label">Password</label>
                   <i class="ri-eye-off-line login__eye" id="register-eye"></i>
                </div>
             </div>
 
             <div class="login__box">
                <i class="ri-lock-line login__icon"></i>
 
                <div class="login__box-input">
                   <input type="password" required class="login__input" id="register-confirm-pass" placeholder=" ">
                   <label for="register-confirm-pass" class="login__label">Confirm Password</label>
                   <i class="ri-eye-off-line login__eye" id="register-confirm-eye"></i>
                </div>
             </div>
 
             <div class="login__box login__box-dropdown">
                <i class="ri-user-settings-line login__icon"></i>
 
                <div class="login__box-input">
                   <select required class="login__input" id="register-role">
                      <option value="" disabled selected hidden>Select Role</option>
                      <option value="student">Student/Scholars</option>
                      <option value="faculty">Faculty</option>
                      <option value="Coordinator">Coordinator</option>
                      <option value="general">General</option>
                   </select>
                   <label for="register-role" class="login__label"></label>
                </div>
             </div>
          </div>
 
      
 
          <button type="submit" class="login__button">Sign Up</button>
 
          <p class="login__register">
             Already have an account? <a href="/login">Login</a>
          </p>
       </form>
       
    </div>
    
    <!-- Add this script tag at the end of the body -->
    <script>
       // Function to toggle password visibility
       function togglePasswordVisibility(inputId, eyeId) {
          const input = document.getElementById(inputId);
          const eye = document.getElementById(eyeId);
          
          if (input.type === 'password') {
             input.type = 'text';
             eye.classList.replace('ri-eye-off-line', 'ri-eye-line');
          } else {
             input.type = 'password';
             eye.classList.replace('ri-eye-line', 'ri-eye-off-line');
          }
       }
 
       // Add click event listeners to both password eye icons
       document.getElementById('register-eye').addEventListener('click', () => {
          togglePasswordVisibility('register-pass', 'register-eye');
       });
 
       document.getElementById('register-confirm-eye').addEventListener('click', () => {
          togglePasswordVisibility('register-confirm-pass', 'register-confirm-eye');
       });
 
       // Function to toggle roll number field visibility
       function toggleRollNumberField() {
          const roleSelect = document.getElementById('register-role');
          const rollNumberBox = document.getElementById('register-roll').closest('.login__box');
 
          if (roleSelect.value === 'faculty' || roleSelect.value === 'general') {
             rollNumberBox.style.display = 'none';
             document.getElementById('register-roll').removeAttribute('required');
          } else {
             rollNumberBox.style.display = 'grid';
             document.getElementById('register-roll').setAttribute('required', '');
          }
       }
 
       // Add event listener to role select
       document.getElementById('register-role').addEventListener('change', toggleRollNumberField);
 
       // Call the function initially to set the correct state
       toggleRollNumberField();
    </script>
 </body>
 