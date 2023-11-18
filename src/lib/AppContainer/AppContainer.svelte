<script>
  import DraggableComponent from "$lib/DraggableComponent/DraggableComponent.svelte";
  import AppNavbar from "$lib/navbar/AppNavbar.svelte";

</script>
<DraggableComponent>
    <div class="w-screen ">
        <AppNavbar></AppNavbar>
        <div class=" h-screen w-screen">
            <slot></slot>
        </div>
    </div>
</DraggableComponent>