<!-- src/Login.svelte -->
<script>
  // @ts-nocheck

  import { goto } from "$app/navigation";
  import user from "../../store/user";
  import { api, loginApi } from "../../utils";
  import { setAuthToken, storeData } from "../../utils/localStorage";
  import { Alert, Button } from "@svelteuidev/core";

  let email = "";
  let password = "";
  let isLoading = false;
  let hasError = false;

  const updateUser = (data) => {
    user.update(() => {
      return { user: data.user, token: data.token };
    });
  };

  const handleSubmit = async () => {
    // Handle login logic here
    isLoading = true;
    hasError= false;
    loginApi
      .post("/auth/login", { username: email, password: password })
      .then((res) => {
        if (res.ok) {
          const { token } = res.data;
          updateUser(res.data);
          storeData("user", JSON.stringify(res.data.user));
          api.setHeader("Authorization", `Bearer ${token}`);
          setAuthToken(token);
          goto("/", { replaceState: true });
        } else {
          hasError = true;
        }
        isLoading = false;
      }).catch(()=>{
        hasError = true
      })
  };
</script>

<div class="flex justify-center items-center h-screen bg-gray-100">
  
  <div class="bg-white p-8 rounded-lg shadow-md w-96">
    <img  class='mx-auto rounded-lg' width="80" src="/pdd.png" alt="ppd"/>
    <h1 class="text-2xl text-center font-semibold mb-4 text-gray-800">
      Sign in to ppd
    </h1>

    {#if hasError}
      <Alert class='mb-4' variant='filled'>Failed to login</Alert>
    {/if} 
    <form on:submit|preventDefault={handleSubmit}>
      <input
        class="mb-4 p-2 border rounded w-full text-gray-700"
        type="text"
        placeholder="Username or email"
        bind:value={email}
      />
      <p class="mt-4  text-gray-500">
        <a href="/reset-password" class="text-orange-500 hover:underline"
          >Forgot password?</a
        >
      </p>

      <input
        class="mb-6 p-2 border rounded w-full text-gray-700"
        type="password"
        placeholder="Password"
        bind:value={password}
      />
      <Button loading={isLoading} color="orange" size="md" type="submit">
        Sign In
      </Button>
    </form>
    <p class="mt-4 text-center text-gray-500">
      New to ppd? <a href="/sign-up" class="text-orange-500 hover:underline"
        >Create an account</a
      >.
    </p>


  </div>
</div>
