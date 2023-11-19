<script>
    import { Label, Input } from 'flowbite-svelte';

    
    let inputValue = '';

  </script>

  <Input class="mb-6"  slot="input" bind:value={inputValue}  />