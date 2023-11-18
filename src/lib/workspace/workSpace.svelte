<script>
  import AppContainer from "$lib/AppContainer/AppContainer.svelte";
  import ComponentsList from "$lib/ComponentsList/ComponentsList.svelte";
  import DraggableComponent from "$lib/DraggableComponent/DraggableComponent.svelte";
  import { Badge, SidebarItem } from "flowbite-svelte";
  import { componentNames } from "./Components";
  import { randomString } from "../../utils/getRandomString";

  // Array to store dynamically loaded components
  let dynamicComponents = [];
  /**
   * @type {any[]}
   */
  let projectComponents = [];
    const onDelete = (id)=>{
        console.log("LOG:::dynamic",dynamicComponents)
        dynamicComponents = dynamicComponents.filter((component)=>component.id !== id);
  }

  const handleSelectComponent = (component) => {
    createDynamicComponent(component);
    console.log(component);
  };

  const createDynamicComponent = (component) => {
    const id = randomString(10);
    projectComponents = [
      ...projectComponents,
      { componentName: component, id: id },
    ];
    import(`../${component}/${component}.svelte`).then((module) => {
      // Add the dynamically loaded component to the array
      dynamicComponents = [
        ...dynamicComponents,
        { component: module.default, id: id },
      ];
    });
  };
</script>

<div class="flex">
  <div class="flex-1 z-10">
    <DraggableComponent width="1">
      <div class="flex">
        <ComponentsList>
          <div>
            <Badge color="green">Components</Badge>
            {#each componentNames as componentName}
              <SidebarItem
                label={componentName}
                on:click={() => handleSelectComponent(componentName)}
              />
            {/each}
          </div>
        </ComponentsList>
        <ComponentsList>
          <Badge color="green">My Project</Badge>
          {#each projectComponents as component}
            <SidebarItem label={component.componentName} />
          {/each}
        </ComponentsList>
      </div>
    </DraggableComponent>
  </div>
  <div class="flex-2">
    <AppContainer />
    <div class="w-full">
      {#each dynamicComponents as dynamicComponent}
        <DraggableComponent onDelete={()=>onDelete(dynamicComponent.id)} width="96">
          <div>
            <svelte:component this={dynamicComponent.component} />
          </div>
        </DraggableComponent>
      {/each}
    </div>
  </div>
</div>
