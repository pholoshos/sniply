<script>
  import { Button, Modal } from "flowbite-svelte";
  import { CloseSolid } from "flowbite-svelte-icons";

  export let isOpen = false;
  export let onClose = () => {};
</script>

<Modal  on:close={()=>onClose()} open={isOpen}>
  <div>
    <h1>App Context</h1>
  </div>
  <svelte:fragment slot="footer">
    <Button color="light" on:click={() => onClose()}
      ><CloseSolid /> Close</Button
    >
  </svelte:fragment>
</Modal>
