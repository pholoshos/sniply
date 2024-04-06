<script>
  import DraggableComponent from "$lib/DraggableComponent/DraggableComponent.svelte";
  import AppNavbar from "$lib/navbar/AppNavbar.svelte";

  export let backgroundColor = "white";
  export let appName = "sniply";
  /**
   * @type {any}
   */
   export let pages = null;

</script>

<DraggableComponent>
  <div class="w-screen h-full" style="background-color: {backgroundColor};">
    <AppNavbar pages={pages} appName={appName} />
    <div class=" h-screen w-screen">
      <slot />
    </div>
  </div>
</DraggableComponent>
