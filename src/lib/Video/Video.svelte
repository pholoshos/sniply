<script>
  import DynamicForm from "$lib/DynamicForm/DynamicForm.svelte";
  import { Video } from "flowbite-svelte";
  import { videoConfig } from "./videoConfig";
  export let width = "100px";
  export let src = "";

  export let isConfig = false;

  const onConfig = () => {
    isConfig = !isConfig;
  };



</script>

{#if isConfig}
<div class=" h-screen p-4 rounded-md bg-white border" style="width: 300px;">
  <h2>Form Congiguration</h2>
  <DynamicForm formData={videoConfig}>
    <div class="bg-white p-4 mb-4 rounded-md"></div>
  </DynamicForm>
</div>
{/if}
<Video style="width:{width}" {src} controls />
