<script>
  import DynamicForm from "$lib/DynamicForm/DynamicForm.svelte";
  import { Video } from "flowbite-svelte";
  import { videoConfig } from "./videoConfig";
  import ComponentsToolbar from "$lib/ComponentsToolbar/ComponentsToolbar.svelte";
  import { onMount } from "svelte";
  import { api } from "../../utils";
  export let width = "100px";
  export let src = "";

  export let isConfig = false;
  export let isDevelopment = false;
  const onConfig = () => {
    isConfig = !isConfig;
  };

  const loadVideoContent = ()=>{
    api.get("/video1").then((res) => {
      console.log(res);
      src = res.data?.url;
    });
  }

  onMount(() => {
    loadVideoContent();
  });


</script>

<div class="flex">
  <ComponentsToolbar {onConfig} {isDevelopment} />

  {#if isConfig}
    <div class=" h-screen p-4 rounded-md bg-white border" style="width: 300px;">
      <h2>Form Stuff</h2>
      <DynamicForm formData={videoConfig}>
        <div class="bg-white p-4 mb-4 rounded-md"></div>
      </DynamicForm>
    </div>
  {/if}
  <Video style="width:{width}" {src} controls />
</div>
