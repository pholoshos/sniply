<script>
  import AppContainer from "$lib/AppContainer/AppContainer.svelte";
  import ComponentsList from "$lib/ComponentsList/ComponentsList.svelte";
  import DraggableComponent from "$lib/DraggableComponent/DraggableComponent.svelte";
  import {
    Button,
    SidebarItem,
    Input,
    Label,
    Listgroup,
    Alert,
  } from "flowbite-svelte";
  import { componentNames } from "./Components";
  import { randomString } from "../../utils/getRandomString";
  import {
    CloseCircleSolid,
    DownloadSolid,
    EditOutline,
    PlusSolid,
    TrashBinSolid,
  } from "flowbite-svelte-icons";
  import {
    addComponentToPage,
    appState,
    deleteComponentFromPage,
    updateAppState,
  } from "../../store/app";
  import { afterUpdate, onMount } from "svelte";
  import { loadConfig } from "../../utils/loadConfig";
  import { getPages } from "../../utils/getRoutes";
  import { isDevelopemnt } from "../../utils/getMode";
  import Spinner from "$lib/Spinner/Spinner.svelte";

  // Array to store dynamically loaded components
  /**
   * @type {any[]}
   */
  let dynamicComponents = [];
  export let pageRoute = "Home";

  export let mode = "loading";

  let isChangingProperties = false;
  /**
   * @type {{ id: any; } | null}
   */
  let selectedOnProject = null;
  let isSelectedProjectComponent = false;

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

  // Handle the component drop event
  const onDelete = (/** @type {any} */ id) => {
    dynamicComponents = dynamicComponents.filter(
      (component) => component.id !== id
    );
    deleteComponentFromPage(pageRoute?.slice(1), id);
  };

  const jsonData = {
    timestamp: new Date().toISOString(),
  };

  // Generate a JSON file
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

  /**
   * @type {boolean}
   */
  let defaultModal = false;
  /**
   * @type {{ appName: string; layouts: { default: { background: string; }; dashboard: { background: string; }; }; pages: { home: { layout: string; route: string; components: never[]; }; dashboard: { layout: string; route: string; components: never[]; }; }; }}
   */
  let projectConfig;

  // Subscribe to the appState store
  const _state = appState.subscribe((state) => {
    // Handle state changes here
    projectConfig = state.projectConfig;
  });

  // Fetch projectConfig when the component mounts
  onMount(() => {
    const _c = loadConfig()?.then((config) => {
      if (!config) return;

      mode = config?.mode;
      updateAppState({ projectConfig: config });
      console.log(mode);
      config?.pages[pageRoute?.slice(1)].components.map(
        (
          /** @type {{ componentName: string; id: string | undefined; }} */ comp
        ) => {
          createDynamicComponent(comp.componentName, comp?.id, comp);
        }
      );

      projectConfig = config;
    });
    // projectConfig = $appState.projectConfig; // Alternatively, you can use the $ prefix directly
  });

  // Handle the component drop event
  const handleSelectComponent = (/** @type {string} */ component) => {
    const id = randomString(10);
    createDynamicComponent(component, id);
  };

  // Create a dynamic component
  const createDynamicComponent = (
    /** @type {string} */ component,
    /** @type {string | undefined} */ componentId,
    data = {}
  ) => {
    //console.log("LOG:::pages",pageRoute?.slice(1))
    addComponentToPage(pageRoute?.slice(1), {
      componentName: component,
      id: componentId,
      ...data,
    });

    // Add the component name and id to the array
    projectComponents = [
      ...projectComponents,
      { componentName: component, id: componentId },
    ];

    // Dynamically import the component
    import(`../${component}/${component}.svelte`).then((module) => {
      // Add the dynamically loaded component to the array
      dynamicComponents = [
        ...dynamicComponents,
        {
          component: module.default,
          id: componentId,
          name: component,
          ...data,
        },
      ];
    });
  };

  const setFormDetails = () => {};

  afterUpdate(() => {
    // Update the appState store
    updateAppState({ projectConfig });
  });
</script>

{#if mode === "loading"}
  <div class=" mx-auto my-96 text-center">
    <Spinner />
    <p>loading...</p>
  </div>
{:else}
  <div>
    {#if isDevelopemnt(mode)}
      <Button
        class="absolute right-0 mx-8 mt-4 z-20"
        size="xs"
        color="alternative"
        on:click={generateJson}><DownloadSolid size="xs" /></Button
      >
    {/if}
    <div class="flex">
      <!-- Sidebar -->
      <div class="flex-1 z-10">
        {#if defaultModal}
          <div class="absolute w-96 h-screen bg-white p-8">
            <h1>App Settings</h1>

            <Alert color="blue">
              <span class="font-medium">Configure app</span>
              on this panel, this settings are used by all components
            </Alert>

            <div class="mt-4">
              <Label>App Name</Label>
              <Input type="text" placeholder="App Name" />
            </div>

            <div class="mt-4">
              <Label>Routes Setup</Label>
      
              <div class=" space-y-2">
                <Input type="text" placeholder="enter route here" />
                <Input type="text" placeholder="enter path" />
                <Button size='md' class="mt-2"><PlusSolid class="mr-2"/> Add Route</Button>
              </div>
              <Listgroup
                class="mt-2 mb-4"
                items={["Home","About","Dashboard"]}
                let:item
              >
                <div>
                  <Button size="xs" color="light" class="ml-2">{item}</Button>
                  <Button size="xs" color="light" class="ml-2"><EditOutline/></Button>
                  <Button size="xs" color="light" class="ml-2"><TrashBinSolid/></Button>
                </div>
      
              </Listgroup>
            </div>

            <div class="mt-4">
              <Label>base backend Url</Label>
              <Input
                type="text"
                placeholder="enter base backend api url here"
              />
            </div>

            <Button on:click={() => (defaultModal = false)} class="mt-4"
              ><CloseCircleSolid size="md" class="mr-2" /> Close Settings</Button
            >
          </div>
        {/if}
        {#if isDevelopemnt(mode)}
          <DraggableComponent
            isDevelopment={isDevelopemnt(mode)}
            x={934}
            y={67}
            isEditor={true}
            width="1"
          >
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
                  label="App Settings"
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
        {/if}
      </div>

      <!-- Main Content -->
      <div class="flex-2">
        <!-- Configuration Tab -->
        <!-- App Container and Dynamic Components -->
        <AppContainer
          pages={getPages(projectConfig)?.filter(
            (page) => page?.visibility === "public"
          )}
          appName={projectConfig?.appName}
        />

        <div class="w-screen">
          {#each dynamicComponents as dynamicComponent}
            <DraggableComponent
              {pageRoute}
              isDevelopment={isDevelopemnt(mode)}
              onDelete={() => onDelete(dynamicComponent?.id)}
              {dynamicComponent}
              {...dynamicComponent}
              id={dynamicComponent?.id}
              {projectConfig}
            />
          {/each}
        </div>
      </div>
    </div>
  </div>
{/if}
