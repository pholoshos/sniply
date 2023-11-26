<script>
  import { Video } from "flowbite-svelte";
  export let width = "100px";
  export let src = "";
</script>

<Video style="width:{width}" {src} controls />
