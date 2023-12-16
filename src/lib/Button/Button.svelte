<script>
  // @ts-nocheck

  import { Button } from "flowbite-svelte";

  export let label = "";
  export let color = "primary";

  export const onClick = () => {};
</script>

<Button on:click={onClick} {color}>{label}</Button>
