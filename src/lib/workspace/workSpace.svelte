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
  } from "flowbite-svelte";
  import { componentNames } from "./Components";
  import { randomString } from "../../utils/getRandomString";
  import { DownloadSolid } from "flowbite-svelte-icons";
  import {
    addComponentToPage,
    appState,
    deleteComponentFromPage,
  } from "../../store/app";
  import { onMount } from "svelte";
  import { loadConfig } from "../../utils/loadConfig";
  import { getPages } from "../../utils/getRoutes";
  import { isDevelopemnt } from "../../utils/getMode";

  // Array to store dynamically loaded components
  /**
   * @type {any[]}
   */
  let dynamicComponents = [];
  export let pageRoute = "Home";
  export let isPreview = true;

  export let mode = "loading";
  export let _isDevelopemnt = isDevelopemnt(mode);

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
    console.log("LOG:::dynamic", dynamicComponents);

    dynamicComponents = dynamicComponents.filter(
      (component) => component.id !== id
    );
    deleteComponentFromPage("home", id);
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
    const defaultData = {
      width: "",
      id,
      backgroundColor: "white",
      label: "",
      textColor: "black",
      color: "primary",
      padding: "4px",
      value: "Button",
      span: "1",
    };

    createDynamicComponent(component, id, defaultData);
  
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
</script>

{#if mode === "loading"}
  <div>
    <h1>Loading...</h1>
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

        <div class="w-full">
          {#each dynamicComponents as dynamicComponent}
            <DraggableComponent
              {pageRoute}
              isDevelopment={isDevelopemnt(mode)}
              onDelete={() => onDelete(dynamicComponent.id)}
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
