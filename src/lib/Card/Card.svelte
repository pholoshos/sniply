<script>
  import { Card } from "flowbite-svelte";
  export let backgroundColor = "white";
</script>

<Card style=" background-color:{backgroundColor}">
  <h5
    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
  >
    Noteworthy technology acquisitions 2021
  </h5>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in
    reverse chronological order.
  </p>
</Card>
