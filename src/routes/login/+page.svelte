<script>
   import "../login/login.css";

   let email = undefined;
   let password = undefined;
</script>

<body style="font-family: 'Cinzel';">
   <div class="login">
      <img src="/assets/login-bg.png" alt="" class="login__img" />

      <form action="/" method="post" class="container">
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
                  />
                  <label for="login-pass" class="login__label">Password</label>
                  <i class="ri-eye-off-line login__eye" id="login-eye"></i>
               </div>
            </div>

            <div class="login__box login__box-dropdown">
               <i class="ri-user-settings-line login__icon"></i>

               <div class="login__box-input">
                  <select
                     required
                     class="login__input"
                     id="userType"
                     name="userType"
                  >
                     <option value="" disabled selected hidden
                        >Select User Type</option
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
               <input
                  type="checkbox"
                  class="login__check-input"
                  id="login-check"
               />
               <label for="login-check" class="login__check-label"
                  >Remember me</label
               >
            </div>

            <a href="#" class="login__forgot">Forgot Password?</a>
         </div>

         <button type="submit" class="login__button">Login</button>

         <p class="login__register">
            Don't have an account? <a href="/register">Sign up</a>
         </p>
      </form>
   </div>
   <script>
      // Get the password input and eye icon elements
      // Get the password input and eye icon elements
      const passwordInput = document.getElementById("login-pass");
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
   </script>
</body>
