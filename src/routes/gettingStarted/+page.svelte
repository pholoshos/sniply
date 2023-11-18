<script>
  import { goto } from '$app/navigation';
    import { Button } from '@svelteuidev/core';
import { onMount } from 'svelte';
  
    onMount(() => {
      document.title = 'Getting Started | splearn';
    });
  </script>
  
  <main class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded shadow-md w-full sm:max-w-md">
      <h2 class="text-2xl font-semibold mb-4 text-gray-800">Getting Started with splearn</h2>
      <p class="text-gray-600 mb-4">
        Welcome to splearn! Follow these steps to get started:
      </p>
      <ol class="list-decimal pl-6 text-gray-600 mb-6">
        <li class="mb-2">Create a user account. <Button class={'mb-4'} color='green' on:click={()=>goto('/sign-up')}>User account</Button></li>
        <li class="mb-2">Create a company account by providing company details. <Button color='green' class={'mb-4'} on:click={()=>goto('/company')}>Add Company</Button></li>
        <li class="mb-2">After creating a company, set up a creator account for managing content. <Button color='green' class={'mb-4'} on:click={()=>goto('/creator')}>Add Creator</Button></li>
        <li class="mb-2">Once your creator account is ready, start adding projects and courses.</li>
      </ol>
      <p class="text-gray-600">
        Start your coding journey with splearn today!
      </p>
    </div>
  </main>
  
  <style>
    /* Custom styles can be added here */
  </style>
  