<script>
  import { Alert } from "flowbite-svelte";

  export let value = "";
  export let color = "blue";

</script>

<Alert color={'blue'}>{value}</Alert>