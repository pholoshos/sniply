<script>
  import { Button } from "flowbite-svelte";
  import { GearSolid } from "flowbite-svelte-icons";

  export let onConfig = () => {};
</script>

<div class="container">
  <div class="toolbar">
    <Button on:click={onConfig} class="Button" size="xs" color="alternative"
      ><GearSolid size="xs" /></Button
    >
  </div>
</div>

<style>
  .container:hover .toolbar {
    opacity: 1;
    visibility: visible;
  }

  .toolbar {
    opacity: 0;
    visibility: hidden;
    pointer-events: auto;
    transition: opacity 0.3s, visibility 0.3s; /* Add a transition for smooth fade-in/out */
  }

  .toolbar .Button {
    margin-right: 10px;
  }
</style>
