<script>
  import { Button } from "flowbite-svelte";
  import {
    DownloadOutline,
    GearSolid,
    TrashBinOutline,
  } from "flowbite-svelte-icons";

  /**
   * @type {(() => void) | null | undefined}
   */
  export let onConfig = null;
  /**
   * @type {(() => void) | null | undefined}
   */
  export let onDelete = null;
  /**
   * @type {(() => void) | null | undefined}
   */
  export let onDownload = null;
</script>

<div class="container">
  <div class="toolbar">
    {#if onConfig}
      <Button on:click={onConfig} class="Button" size="xs" color="alternative"
        ><GearSolid size="xs" /></Button
      >
    {/if}

    {#if onDownload}
      <Button
        on:click={onDownload}
        class="Button"
        size="xs"
        color="alternative"
      >
        <DownloadOutline />
      </Button>
    {/if}

    {#if onDelete}
      <Button on:click={onDelete} class="Button" size="xs" color="alternative"
        ><TrashBinOutline size="xs" /></Button
      >
    {/if}
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
