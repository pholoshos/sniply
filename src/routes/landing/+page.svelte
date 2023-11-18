<script>
  import { goto } from "$app/navigation";

  let title = "Welcome to Splearn";

  let isMobileMenuOpen = false;

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  let selectedCompany = ""; // Initialize the selected company

  // List of companies (you can customize this list)
  let companies = [
    "Softmore Mo",
    "Nutag",
    "Afriven Data Group",
    // Add more companies as needed
  ];

  function handleCompanyChange(event) {
    selectedCompany = event.target.value; // Update the selected company when the dropdown changes
  }

  const getStarted = ()=>{
    if(selectedCompany){
      goto('/sign-up/'+selectedCompany);
    }
  
  }
</script>

<main
  class="bg-gray-100 min-h-screen flex flex-col items-center justify-center"
>
  <nav class="bg-white w-full p-4">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <div class="flex">
        <img alt="splearn" class="w-10 h-10" src="/logo.jpeg"> 
        <a class="text-2xl font-bold " href="https://splearn.co.za/landing">Splearn</a>
      </div>
      <div class="hidden md:flex space-x-4">
        <a href="/" class="hover:text-green-500">Home</a>
        <a href="/sign-in" class="hover:text-green-500">Login</a>
        <a href="/sign-up" class="hover:text-green-500">Register</a>
        <!-- Add more navigation links as needed -->
      </div>

      <div class="md:hidden">
        <button
          class="text-green-500 hover:text-green-600"
          on:click={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu (shown when isMobileMenuOpen is true) -->
      {#if isMobileMenuOpen}
        <div class="md:hidden">
          <div class="bg-white w-full py-2">
            <a href="#" class="block text-center py-2 hover:text-green-500"
              >Home</a
            >
            <a href="#" class="block text-center py-2 hover:text-green-500"
              >About</a
            >
            <a href="#" class="block text-center py-2 hover:text-green-500"
              >Features</a
            >
            <a href="#" class="block text-center py-2 hover:text-green-500"
              >Contact</a
            >
            <!-- Add more mobile menu links as needed -->
          </div>
        </div>
      {/if}
    </div>
  </nav>
  <div class="jumb w-full">
    <div class="text-center mt-10">
      <h1 class="text-4xl text-gray-900 font-bold mb-4">{title}</h1>
      <p class="text-lg text-gray-800 mb-8">Learn, explore and create</p>
      <a
        href="/sign-up"
        class="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
        >Get Started</a
      >
    </div>

    <!-- Add an image with floating animation -->
    <img
      src="/logo.jpeg"
      alt="Pola Rides"
      class="w-52 h-52 mx-auto animate-float mt-10"
    />
  </div>

  <!--  -->

  <section class="bg-white text-black py-16 px-8 w-full">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8">
        Choose one of our company partner's to join under
      </h2>
      <p>
        Welcome to SPLEARN, where your journey to enhanced education and
        professional growth begins. We are proud to offer our registered partner
        companies access to a diverse range of educational training and courses
        through strategic collaborations. Please choose your registered company
        from the list below to explore the benefits of our partnerships and
        start your learning journey:
      </p>

      <!-- Dropdown for Companies -->
      <select
        class="bg-gray-500 text-white p-3 rounded-lg"
        bind:value={selectedCompany}
        on:change={handleCompanyChange}
      >
        <option value="" disabled>Select a Partner</option>
        {#each companies as company}
          <option value={company}>{company}</option>
        {/each}
      </select>

      <!-- Get Started Button -->
      <button
        class="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full mt-4 transition-all duration-300 transform hover:scale-105"
        on:click={getStarted}
      >
        Get Started
      </button>

      <div
        class=" flex mt-4"
      >
        <div class="w-40 h-40 mx-auto  mt-10">
          <img class=" w-30 mx-2" alt="softmore" src="/softmorelogo.png" />
        </div>
        <div class="w-40 h-40 mx-auto  mt-10">
          <img class=" w-30 mx-2" alt="softmore" src="/afrivenlogo.jpg" />
        </div>
        <div class="w-40 h-40 mx-auto  mt-10">
          <img class=" w-30 mx-2" alt="softmore" src="/nutaglogo.jpg" />
        </div>
      </div>

      <p class="mt-2">
        If you do not see your company listed or have any questions, please
        contact your company support team. Thank you for choosing SPLEARN for
        your educational and professional development needs. We look forward to
        helping you reach new heights in your career. Let's embark on this
        journey together!
      </p>
    </div>
  </section>

  <!-- Feature Cards Section -->
  <section class="bg-white py-16 px-8 w-full">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8">Key Features</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Feature Card 1 -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-2xl font-semibold mb-4">
            Versatile Learning Coverage
          </h3>
          <p class="text-lg">
            SPLEARN offers a diverse range of subjects to cater to learners of
            all levels. Whether you're diving into the world of coding,
            unraveling the mysteries of mathematics, or exploring the
            intricacies of physics, our expert tutors are here to guide you.
          </p>
        </div>

        <!-- Feature Card 2 -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-2xl font-semibold mb-4">Online Flexibility</h3>
          <p class="text-lg">
            Our state-of-the-art virtual classroom is accessible anytime,
            anywhere. You can schedule sessions to fit your busy lifestyle,
            making learning more accessible than ever.
          </p>
        </div>

        <!-- Feature Card 3 -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-2xl font-semibold mb-4">Personalized Learning</h3>
          <p class="text-lg">
            At SPLEARN, we recognize that every student is unique. Our
            experienced tutors tailor their teaching approach to suit your
            specific needs, ensuring that you receive the personalized attention
            required to excel.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- About Us Section -->
  <section class="bg-white py-16 px-8 w-full">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">About Us</h2>
      <p class="text-lg leading-relaxed">
        At SPLEARN, we're not just in the business of education; we're in the
        business of empowering individuals to reach their fullest potential.
        Whether you're a student looking to boost your grades, a professional
        seeking new skills, or someone simply curious about the world, SPLEARN
        is your gateway to a brighter future. Enroll today and embark on a
        transformative educational adventure that will shape your success for
        years to come.
      </p>
    </div>
  </section>

  <!-- Download Button -->
  <section class="bg-green-500 py-16 px-8 w-full">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl text-white font-bold mb-6">
        Become a Splearn Partner
      </h2>
      <a
        href="/sign-up"
        class="bg-white text-green-500 hover:bg-white hover:text-green-500 text-xl font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
        >Register as a Partner</a
      >
    </div>
  </section>

  <!-- Contact Information -->
  <section class="bg-gray-200 py-16 px-8 w-full">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">Contact Us</h2>
      <p class="text-lg">
        Have questions or need assistance? Reach out to us at <a
          href="mailto:info@splearn.co.za"
          class="text-green-500">info@splearn.co.za</a
        >.
      </p>
    </div>
  </section>

  <!-- More Sections can be added here -->
</main>

<style>
  /* Add floating animation to the image */
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
</style>
