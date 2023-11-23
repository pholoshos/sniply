<script>
  import AppContainer from "$lib/AppContainer/AppContainer.svelte";
  import ComponentsList from "$lib/ComponentsList/ComponentsList.svelte";
  import DraggableComponent from "$lib/DraggableComponent/DraggableComponent.svelte";
  import {
    A,
    Accordion,
    Badge,
    Button,
    Modal,
    SidebarItem,
    Input,
    Label,
    Checkbox,
    List,
    Listgroup,
  } from "flowbite-svelte";
  import { componentNames } from "./Components";
  import { randomString } from "../../utils/getRandomString";
  import TableConfig from "$lib/Table/TableConfig.svelte";
  import { DownloadSolid } from "flowbite-svelte-icons";
  import {
    addComponentToPage,
    appState,
    updateAppState,
    updateComponentInConfig,
    updateProjectConfig,
  } from "../../store/app";
  import { onMount } from "svelte";
  import { loadConfig } from "../../utils/loadConfig";

  // Array to store dynamically loaded components
  /**
   * @type {any[]}
   */
  let dynamicComponents = [];
  let isChangingProperties = false;
  /**
   * @type {{ id: any; } | null}
   */
  let selectedOnProject = null;
  let isSelectedProjectComponent = false;

  const unsubscribe = appState.subscribe((state) => {
    // Handle state changes here
    console.log("State updated:", state);
  });

  function updateState() {
    const newState = {
      ...$appState, // Access the current state using the $ prefix
      projectComponents: "New Svelte App Name",
      // Add or modify other properties as needed
    };

    // Update the state using the function from the store
    updateAppState(newState);
  }

  const changeProperties = (/** @type {{ id: any; } | null} */ component) => {
    isSelectedProjectComponent = true;
    console.log(component);
    // @ts-ignore
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

  const onDelete = (/** @type {any} */ id) => {
    console.log("LOG:::dynamic", dynamicComponents);
    dynamicComponents = dynamicComponents.filter(
      (component) => component.id !== id
    );
  };

  const jsonData = {
    message: "Hello, this data will be saved to a JSON file!",
    timestamp: new Date().toISOString(),
  };

  const generateJson = () => {
    const jsonString = JSON.stringify(projectConfig, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `sveltflow${jsonData.timestamp}.json`;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  let defaultModal = false;
  /**
   * @type {{ appName: string; layouts: { default: { background: string; }; dashboard: { background: string; }; }; pages: { home: { layout: string; route: string; components: never[]; }; dashboard: { layout: string; route: string; components: never[]; }; }; }}
   */
  let projectConfig;

  const _state = appState.subscribe((state) => {
    // Handle state changes here
    projectConfig = state.projectConfig;
  });

  // Fetch projectConfig when the component mounts
  onMount(() => {
    const _c = loadConfig().then((config) => {
      //placeholder page is home for now
      const _dynamicComponents = config.pages["home"].components.map(
        (
          /** @type {{ componentName: string; id: string | undefined; }} */ comp
        ) => {
          return createDynamicComponent(comp.componentName, comp.id, comp);
        }
      );

      dynamicComponents = _dynamicComponents;
      console.log("LOG:::cos", _dynamicComponents);
      projectConfig = config;
    });
    // projectConfig = $appState.projectConfig; // Alternatively, you can use the $ prefix directly
  });

  const handleSelectComponent = (/** @type {string} */ component) => {
    createDynamicComponent(component);
    console.log(component);
  };

  const createDynamicComponent = (
    /** @type {string} */ component,
    componentId = "",
    data = {}
  ) => {
    const id = componentId ? componentId : randomString(10);
    addComponentToPage("home", { componentName: component, id: id });

    projectComponents = [
      ...projectComponents,
      { componentName: component, id: id },
    ];
    import(`../${component}/${component}.svelte`).then((module) => {
      // Add the dynamically loaded component to the array
      dynamicComponents = [
        ...dynamicComponents,
        { component: module.default, id: id, name: component, ...data },
      ];
    });
  };
</script>

<Button
  class="absolute right-0 mx-8 mt-4 z-20"
  size="xs"
  color="alternative"
  on:click={generateJson}><DownloadSolid size="xs" /></Button
>
<div class="flex">
  <!-- Sidebar -->
  <div class="flex-1 z-10">
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
        <Button on:click={() => (defaultModal = false)} class="mt-4"
          >Close</Button
        >
      </div>
    {/if}

    <DraggableComponent x={934} y={67} isEditor={true} width="1">
      <div class="flex">
        <ComponentsList>
          <div>
            <h1 class="my-4">Components</h1>
            {#each componentNames as componentName}
              <SidebarItem
                label={componentName}
                on:click={() => handleSelectComponent(componentName)}
              />
            {/each}
          </div>
        </ComponentsList>
        <ComponentsList>
          <h1 class="my-4">Project</h1>
          <SidebarItem
            on:click={() => (defaultModal = true)}
            label="settings"
          />
          {#each projectComponents as component}
            <SidebarItem
              on:click={() => changeProperties(component)}
              label={component.componentName}
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
          {dynamicComponent}
          {...dynamicComponent}
        />
      {/each}
    </div>
  </div>
</div>
