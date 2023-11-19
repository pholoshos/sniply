<!-- ConfigurationTab.svelte -->
<script>
    export let title = 'Configuration Tab';
  </script>
  
  <div class="fixed top-0 right-0 w-1/4 h-full bg-gray-200 p-4 shadow-md z-50">
    <h1 class="text-2xl mb-4">{title}</h1>
    <slot></slot>
  </div>
  