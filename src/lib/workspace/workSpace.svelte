<script>
  import AppContainer from "$lib/AppContainer/AppContainer.svelte";
  import ComponentsList from "$lib/ComponentsList/ComponentsList.svelte";
  import DraggableComponent from "$lib/DraggableComponent/DraggableComponent.svelte";
  import { A, Accordion, Badge, Button, Modal, SidebarItem,Input ,Label,Checkbox, List, Listgroup} from "flowbite-svelte";
  import { componentNames } from "./Components";
  import { randomString } from "../../utils/getRandomString";
  import TableConfig from "$lib/Table/TableConfig.svelte";

  // Array to store dynamically loaded components
  let dynamicComponents = [];
  let isChangingProperties = false;
  let selectedOnProject = null;
  let isSelectedProjectComponent = false;

  const changeProperties = (component) => {
    isSelectedProjectComponent = true;
    console.log(component);
    if (component.id === selectedOnProject?.id) {
      isChangingProperties = false;
      isSelectedProjectComponent = false;
    } else {
      isChangingProperties = true;
      selectedOnProject = component;
      console.log(component);
    }
  };

  /**
   * @type {any[]}
   */
  let projectComponents = [];

  // Configuration settings
  let configSetting1 = "Default Setting 1";
  let configSetting2 = "Default Setting 2";

  const onDelete = (id) => {
    console.log("LOG:::dynamic", dynamicComponents);
    dynamicComponents = dynamicComponents.filter(
      (component) => component.id !== id
    );
  };

  let defaultModal = false;

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
  <!-- Sidebar -->
  <div class="flex-1 z-10 ">
    {#if defaultModal}
    <div class="absolute w-96 h-screen bg-white p-8">
        <h1>App Settings</h1>
         <div class="mt-4">
            <Label>App Name</Label>
            <Input type="text" placeholder="App Name" />
         </div>

         <div class="mt-4">
            <Label>Routes Setup</Label>
            <Input type="text" placeholder="App Name" />
            <Listgroup items={["Home,About,Dashboard"]} let:item>
                {item}
            </Listgroup>
         </div>

         <div class="mt-4">
            <Label>App Name</Label>
            <Input type="text" placeholder="App Name" />
         </div>
         <Button on:click={()=>defaultModal=false} class='mt-4'>Close</Button>
       
    </div>
    {/if}
    
    <DraggableComponent isEditor={true} width="1">
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
          <SidebarItem on:click={()=>defaultModal=true} label="settings"></SidebarItem>
          {#each projectComponents as component}
            <SidebarItem on:click={() => changeProperties(component)} label={component.componentName}
            />
          {/each}
        </ComponentsList>
      </div>
    </DraggableComponent>
  </div>

  <!-- Main Content -->
  <div class="flex-2">
    <!-- Configuration Tab -->
    <!-- App Container and Dynamic Components -->
    <AppContainer />
    <div class="w-full">
      {#each dynamicComponents as dynamicComponent}
        <DraggableComponent
          onDelete={() => onDelete(dynamicComponent.id)}
          dynamicComponent={dynamicComponent}
          width="96"
        >
        </DraggableComponent>
      {/each}
    </div>
  </div>
</div>
