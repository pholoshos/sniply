<script>
  import ConfigurationTab from "$lib/ConfigurationTab/ConfigurationTab.svelte";
  import DraggableComponent from "$lib/DraggableComponent/DraggableComponent.svelte";
  import AppNavbar from "$lib/navbar/AppNavbar.svelte";
  import { Button } from "flowbite-svelte";
  import { DownloadSolid } from "flowbite-svelte-icons";

  export let backgroundColor = "white";

</script>

<DraggableComponent>
  <div class="w-screen h-full" style="background-color: {backgroundColor};">
    <AppNavbar />
    <div class=" h-screen w-screen">
      <slot />
    </div>
  </div>
</DraggableComponent>
