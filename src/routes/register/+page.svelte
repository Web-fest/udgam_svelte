<script>
   import Footer from "../../components/Footer.svelte";
   import { redirect } from "@sveltejs/kit";

   let email = undefined;
   let name = undefined;
   let rollno = undefined;
   let password = undefined;
   let usertype = undefined;
   let specialid = undefined;

   const onregister = async (
      name,
      rollno,
      email,
      specialid,
      password,
      usertype,
   ) => {
      let data = {
         name: name,
         rollNumber: rollno,
         email: email,
         specialId: specialid,
         password: password,
         userType: usertype.toLowerCase(),
      };
      console.log(data);

      const response = await fetch(
         "http://129.154.255.30:8081/api/v1/auth/register",
         {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
               "Content-Type": "application/json",
            },
         },
      );
      if (!response.status === 201) {
         redirect(302, "/");
         return;
      } else {
         redirect(301, "/");
         return;
      }
   };
</script>

<body style="font-family: 'Cinzel';">
   <div class="login">
      <img src="/assets/register.jpg" alt="" class="login__img" />

      <form action="" class="container">
         <h1 class="login__title">
            <span style="font-family: 'Cinzel';">Sign Up</span>
         </h1>

         <div class="login__content">
            <div class="login__box">
               <i class="ri-user-3-line login__icon"></i>

               <div class="login__box-input">
                  <input
                     type="text"
                     required
                     class="login__input"
                     id="register-name"
                     placeholder=" "
                     bind:value={name}
                  />
                  <label for="register-name" class="login__label"
                     >Full Name</label
                  >
               </div>
            </div>

            <div class="login__box">
               <i class="ri-hashtag login__icon"></i>

               <div class="login__box-input">
                  <input
                     type="text"
                     required
                     class="login__input"
                     id="register-roll"
                     placeholder=" "
                     bind:value={rollno}
                  />
                  <label for="register-roll" class="login__label"
                     >Roll Number</label
                  >
               </div>
            </div>
            <div class="login__box">
               <i class="ri-hashtag login__icon"></i>

               <div class="login__box-input">
                  <input
                     type="text"
                     required
                     class="login__input"
                     id="register-id"
                     placeholder=" "
                     bind:value={specialid}
                  />
                  <label for="register-uuid" class="login__label"
                     >Special UUID</label
                  >
               </div>
            </div>
            <div class="login__box">
               <i class="ri-mail-line login__icon"></i>

               <div class="login__box-input">
                  <input
                     type="email"
                     required
                     class="login__input"
                     id="register-email"
                     placeholder=" "
                     bind:value={email}
                  />
                  <label for="register-email" class="login__label">Email</label>
               </div>
            </div>

            <div class="login__box">
               <i class="ri-lock-2-line login__icon"></i>

               <div class="login__box-input">
                  <input
                     type="password"
                     required
                     class="login__input"
                     id="register-pass"
                     placeholder=" "
                     bind:value={password}
                  />
                  <label for="register-pass" class="login__label"
                     >Password</label
                  >
                  <i class="ri-eye-off-line login__eye" id="register-eye"></i>
               </div>
            </div>

            <div class="login__box">
               <i class="ri-lock-line login__icon"></i>

               <div class="login__box-input">
                  <input
                     type="password"
                     required
                     class="login__input"
                     id="register-confirm-pass"
                     placeholder=" "
                     bind:value={password}
                  />
                  <label for="register-confirm-pass" class="login__label"
                     >Confirm Password</label
                  >
                  <i
                     class="ri-eye-off-line login__eye"
                     id="register-confirm-eye"
                  ></i>
               </div>
            </div>

            <div class="login__box login__box-dropdown">
               <i class="ri-user-settings-line login__icon"></i>

               <div class="login__box-input">
                  <select
                     required
                     class="login__input"
                     id="register-role"
                     bind:value={usertype}
                  >
                     <option value="" disabled selected hidden
                        >Select Role</option
                     >
                     <option value="student">Student/Scholars</option>
                     <option value="faculty">Faculty</option>
                     <option value="Coordinator">Coordinator</option>
                     <option value="general">General</option>
                  </select>
                  <label for="register-role" class="login__label"></label>
               </div>
            </div>
         </div>

         <button
            type="submit"
            class="login__button"
            style="color:black; font-family:'Cinzel';"
            on:click={onregister(
               name,
               rollno,
               email,
               specialid,
               password,
               usertype,
            )}>Sign Up</button
         >

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

         if (input.type === "password") {
            input.type = "text";
            eye.classList.replace("ri-eye-off-line", "ri-eye-line");
         } else {
            input.type = "password";
            eye.classList.replace("ri-eye-line", "ri-eye-off-line");
         }
      }

      // Add click event listeners to both password eye icons
      document.getElementById("register-eye").addEventListener("click", () => {
         togglePasswordVisibility("register-pass", "register-eye");
      });

      document
         .getElementById("register-confirm-eye")
         .addEventListener("click", () => {
            togglePasswordVisibility(
               "register-confirm-pass",
               "register-confirm-eye",
            );
         });

      // Function to toggle roll number field visibility
      function toggleRollNumberField() {
         const roleSelect = document.getElementById("register-role");
         const rollNumberBox = document
            .getElementById("register-roll")
            .closest(".login__box");

         if (roleSelect.value === "faculty" || roleSelect.value === "general") {
            rollNumberBox.style.display = "none";
            document
               .getElementById("register-roll")
               .removeAttribute("required");
         } else {
            rollNumberBox.style.display = "grid";
            document
               .getElementById("register-roll")
               .setAttribute("required", "");
         }
      }

      function toggleSpecialIDField() {
         const roleSelect = document.getElementById("register-role");
         const sepcialIdField = document
            .getElementById("register-id")
            .closest(".login__box");

         if (roleSelect.value !== "Coordinator") {
            sepcialIdField.style.display = "none";
            document.getElementById("register-id").removeAttribute("required");
         } else {
            sepcialIdField.style.display = "grid";
            document.getElementById("register-id").setAttribute("required", "");
         }
      }

      // Add event listener to role select
      document
         .getElementById("register-role")
         .addEventListener("change", toggleRollNumberField);
      document
         .getElementById("register-role")
         .addEventListener("change", toggleSpecialIDField);

      // Call the function initially to set the correct state
      toggleRollNumberField();
      toggleSpecialIDField();
   </script>
</body>
<Footer />

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
   }

   body {
      font-family: "Cinzel";
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

   .login__icon,
   .login__eye {
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
      .login__eye {
         transition: all 0.3s ease;
      }
      .login__input {
         transition: color 0.3s ease;
      }
   }

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
