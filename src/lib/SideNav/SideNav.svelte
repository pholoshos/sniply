<script>
  import ComponentsToolbar from "$lib/ComponentsToolbar/ComponentsToolbar.svelte";
  import DynamicForm from "$lib/DynamicForm/DynamicForm.svelte";
  import {
    Button,
    Input,
    Select,
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
  } from "flowbite-svelte";
  import { sideNavConfig } from "./config";
  import { appState } from "../../store/app";
  import { getPages } from "../../utils/getRoutes";

  let spanClass = "flex-1 ml-3 whitespace-nowrap";

  export let projectConfig = null;
  let pages = getPages(projectConfig);

  console.log(pages);

  export let pageName = "";
  export let backgroundColor = "white";
  export let isConfig = false;

  const onConfig = () => {
    isConfig = !isConfig;
  };

  const refreshPage = (url) => {
    window.location.reload();
    window.location.href = url.toString();
  };
</script>

<ComponentsToolbar {onConfig} />

<div class="flex w-screen">
  {#if isConfig}
    <div class=" h-screen p-4 rounded-md bg-white border" style="width: 300px;">
      <h2>Form Congiguration</h2>
      <DynamicForm formData={sideNavConfig}>
        <div class="bg-white p-4 mb-4 rounded-md"></div>
      </DynamicForm>
    </div>
  {/if}

  <Sidebar activeUrl={"/" + pageName.toLowerCase()}>
    <SidebarWrapper class="h-screen" style="background-color:{backgroundColor}">
      <SidebarGroup>
        {#each pages as page}
          <SidebarItem label={page?.pageLabel} href={page?.route} on:click={()=>refreshPage(page?.route)} />
        {/each}
      </SidebarGroup>
      <SidebarGroup border>
        <SidebarItem label="Settings" href="/settings" />
        <SidebarItem label="Help" href="/help" />
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</div>
