<script>
  import { goto } from "$app/navigation";
  import { Alert, Button } from "@svelteuidev/core";
  import { page } from "$app/stores";


  let { company:companyCode } = $page.params;

  let username = "";
  let firstName = "";
  let lastName = "";
  let email = "";
  let phone = "";
  let password = "";
  let company = companyCode || 'none';
  let confirmPassword = "";
  let isLoading = false;
  let hasError = false;

  let error = "";

  async function register() {
    if (password !== confirmPassword) {
      error = "Passwords don't match.";
      return;
    }
    isLoading = true;

    const response = await fetch("https://ola-api.onrender.com/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        firstName,
        lastName,
        email,
        company,
        phone,
        password,
      }),
    });

    const data = await response.json();
    isLoading = false;
    if (response.ok) {
      // Registration successful, redirect to login or home page
      goto("/sign-in", { replaceState: true });
    } else {
      error = data.message || "Registration failed.";
    }
  }

  
</script>

<main class="flex justify-center items-center min-h-screen bg-gray-100">
  <div class="bg-white p-6 rounded-lg shadow-md w-96 my-8">
    <h1 class="text-2xl font-semibold mb-4">Create your ppd account</h1>
    {#if error}
      <Alert variant="filled" class="mb-2">{error}</Alert>
    {/if}
    <form on:submit|preventDefault={register}>
      <label class="block mb-4">
        <span class="text-gray-700">Username</span>
        <input
          type="text"
          class="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
          placeholder="Your username"
          bind:value={username}
        />
      </label>

      <label class="block mb-4">
        <span class="text-gray-700">Company Code(optional)</span>
        <input
          type="text"
          class="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
          placeholder="Your company code"
          bind:value={company}
        />
      </label>

      <label class="block mb-4">
        <span class="text-gray-700">First Name</span>
        <input
          type="text"
          class="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
          placeholder="Your first name"
          bind:value={firstName}
        />
      </label>

      <label class="block mb-4">
        <span class="text-gray-700">Last Name</span>
        <input
          type="text"
          class="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
          placeholder="Your last name"
          bind:value={lastName}
        />
      </label>
      <label class="block mb-4">
        <span class="text-gray-700">Email</span>
        <input
          type="email"
          class="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
          placeholder="Your email"
          bind:value={email}
        />
      </label>
      <label class="block mb-4">
        <span class="text-gray-700">Phone</span>
        <input
          type="text"
          class="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
          placeholder="Your phone number"
          bind:value={phone}
        />
      </label>
      <label class="block mb-4">
        <span class="text-gray-700">Password</span>
        <input
          type="password"
          class="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
          placeholder="Your password"
          bind:value={password}
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Confirm Password</span>
        <input
          type="password"
          class="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
          placeholder="Confirm password"
          bind:value={confirmPassword}
        />
      </label>

      <Button
        size="md"
        color="green"
        loading={isLoading}
        type="submit"
        class="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Create Account
      </Button>
    </form>
    <p class="mt-4 text-gray-600">
      Already have an account? <a href="/sign-in" class="text-green-500"
        >Log in</a
      >
    </p>
  </div>
</main>

<style>
  /* Add your global styles or overrides here */
</style>
