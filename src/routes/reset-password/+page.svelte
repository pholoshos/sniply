<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { Alert,Button } from "@svelteuidev/core";
  import { loginApi } from "../../utils";

  let newPassword = "";
  let confirmPassword = "";
  let email = "";
  let token = $page.url.searchParams.get("token");
  let hasError = false;
  let isLoading = false;
  let isSuccess = false;

  function handleSubmit() {
    isLoading = true;
    if (!!token) {
      hasError = false;

      loginApi
        .post("/auth/reset-password", {
          token: token,
          newPassword: newPassword,
        })
        .then((res) => {
          if (res.ok) {
            goto("/sign-in", { replaceState: true });
          } else {
            hasError = true;
          }
          isLoading = false;
        })

        .catch(() => {
          hasError = true;
          isLoading = false;
        });
    }
  }

  function onEmailSubmit (){
    isLoading = true;

      hasError = false;

      loginApi
        .post("/auth/forgot-password", {
          email: email,
          
        })
        .then((res) => {
          if (res.ok) {
            isSuccess = true;
          } else {
            hasError = true;
          }
          isLoading = false;
        })

        .catch(() => {
          hasError = true;
          isLoading = false;
        });
    

  }
</script>

<main class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="bg-white p-8 rounded shadow-md w-96 sm:w-96">
    <h2 class="text-2xl font-semibold mb-4">Reset Password</h2>
    {#if hasError}
      <Alert>Failed to reset password</Alert>
    {/if}
    {#if isSuccess}
    <Alert class='mb-2' color='green'>A reset email has been sent to {email}</Alert>
  {/if}

    <form on:submit|preventDefault={onEmailSubmit}>
   
        <div class="mb-6">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email Address</label
          >
          <input
            type='email'
            bind:value={email}
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-green-200 focus:border-green-300"
          />
        </div>
        <Button
          loading={isLoading}
          color='green'
          type="submit"
          class="w-full py-2 px-4 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50"
        >
          Submit
      </Button>
      </form>
<!-- 
    <form on:submit|preventDefault={handleSubmit}>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700"
          >New Password</label
        >
        <input
          type="password"
          bind:value={newPassword}
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-green-200 focus:border-green-300"
        />
      </div>
      <div class="mb-6">
        <label for="confirm" class="block text-sm font-medium text-gray-700"
          >Confirm Password</label
        >
        <input
          type="password"
          bind:value={confirmPassword}
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-green-200 focus:border-green-300"
        />
      </div>
      <Button
        loading={isLoading}
        color='green'
        type="submit"
        class="w-full py-2 px-4 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50"
      >
        Reset Password
    </Button>
    </form> -->
  </div>
</main>
