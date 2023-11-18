<script>
  import AppContainer from "$lib/AppContainer/AppContainer.svelte";
  import ComponentsList from "$lib/ComponentsList/ComponentsList.svelte";
  import DraggableComponent from "$lib/DraggableComponent/DraggableComponent.svelte";
  import { SidebarItem } from "flowbite-svelte";
  import { componentNames } from "./Components";

  // Array to store dynamically loaded components
  let dynamicComponents = [];

  const handleSelectComponent = (component) => {
    createDynamicComponent(component);
    console.log(component);
  };

  const createDynamicComponent = (component) => {
    import(`../${component}/${component}.svelte`).then((module) => {
      // Add the dynamically loaded component to the array
      dynamicComponents = [...dynamicComponents, module.default];
    });
  };
</script>

<div class="flex">
  <div class="flex-1 z-10">
    <DraggableComponent width="1">
      <ComponentsList>
        {#each componentNames as componentName}
          <SidebarItem label= {componentName} on:click={() => handleSelectComponent(componentName)}>
          </SidebarItem>
        {/each}
      </ComponentsList>
    </DraggableComponent>
  </div>
  <div class="flex-2">
    <AppContainer />
    <div class="w-full ">
        {#each dynamicComponents as dynamicComponent}<DraggableComponent width="96">
            <div>
              <svelte:component this={dynamicComponent} />
            </div>
          </DraggableComponent>
        {/each}
    </div>

  </div>
</div>
