<script>
// @ts-nocheck

  import { Button } from "flowbite-svelte";

  export let label = ""
  export let color = "primary";

</script>
<Button   color={color}>{label}</Button>