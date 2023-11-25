<!-- DraggableDiv.svelte -->
<script>
  // @ts-nocheck
  import {
    appState,
    updateAppState,
    updateComponentInConfig,
  } from "../../store/app";
  import {
    Badge,
    Button,
    Dropdown,
    DropdownItem,
    Input,
  } from "flowbite-svelte";
  import {
    BookOutline,
    CalendarWeekSolid,
    EditOutline,
    EyeOutline,
    EyeSlashOutline,
    FileCopyOutline,
    TrashBinOutline,
  } from "flowbite-svelte-icons";

  import { createEventDispatcher } from "svelte";
  import { colorOptions } from "../../utils/Colors";
  import JabDB from "jabulane-db";
  import { randomString } from "../../utils/getRandomString";
  

  // Create an instance of JabDB with the appropriate API base URL and API key
  const jabdb = new JabDB(
    "http://localhost:3000/jabdb/",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDlkYWI2ZjM5NjI3YzAwMjg1MzdlMjMiLCJpYXQiOjE2OTI2MTI3MTQsImV4cCI6MTcyNDE3MDMxNH0.M_8BU3-Etq6SPH79asslRvEbgo9U8b7vGp_ih9qBxU8"
  );

  // Example: Get all collection names
  jabdb
    .getAllCollections()
    .then((collections) => {
      console.log("All Collections:", collections);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });

  export let x = 0;
  export let pageRoute = "Home";
  export let projectConfig = null;
  export let y = 0;
  let zIndex = 1; // Initial z-index value
  let isDragging = false;
  export let isDraggable = true;
  export let isEditor = false;
  export let label = "My Component";
  export let dynamicComponent = null;
  let isResizable = true;
  export let onDelete = () => {};
  export let isHidden = false;
  export let width = "full";
  let isConfiguring = false;
  export let id = randomString(10);

  let isSnapping = true; // New: Flag for snapping
  export let span = "My Component"; // New: span for the component

  // Style properties
  export let backgroundColor = "";
  export let color = "primary";
  export let textColor = "#000";
  export let padding = "10px";

  export let value = "";

  let config = {
    width,
    x,
    y,
    backgroundColor,
    label,
    textColor,
    color,
    padding,
    value,
    span,
    id,
  };

  // Create an event dispatcher for sending events to parent components
  const dispatch = createEventDispatcher();

  function onHide() {
    isHidden = !isHidden;
  }

  // New: Handle mouse down event
  const handleMouseDown = (event) => {
    isDragging = true;

    const offsetX = event.clientX - x;
    const offsetY = event.clientY - y;

    const handleMouseMove = (event) => {
      if (isDragging && isDraggable) {
        x = isSnapping
          ? Math.round(event.clientX - offsetX)
          : event.clientX - offsetX;
        y = isSnapping
          ? Math.round(event.clientY - offsetY)
          : event.clientY - offsetY;
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleButtonClick = (openBar = false) => {
    isConfiguring = openBar;

    let _config = {
      width,
      x,
      y,
      backgroundColor,
      label,
      textColor,
      color,
      padding,
      value,
      span,
      id,
    };

    updateComponentInConfig(pageRoute?.slice(1), dynamicComponent?.id, {
      ..._config,
      componentName: dynamicComponent.name,
      id: dynamicComponent?.component?.id,
    });
    config = _config;
  };

  const increaseZIndex = () => {
    zIndex += 1;
  };

  const decreaseZIndex = () => {
    zIndex -= 1;
  };
  const appendClasses = (classes) => {
    return classes.join(" ");
  };
</script>

{#if isConfiguring}
  <div class="config-menu">
    <h3 class="text-lg font-bold mb-4">Configuration</h3>

    <div class="config-Input">
      <span class="block text-sm font-medium text-gray-700">Graggable:</span>
      <input
        type="checkbox"
        bind:checked={isDraggable}
        class="mt-1 p-2 border rounded-md"
      />
    </div>

    <div class="config-Input">
      <span class="block text-sm font-medium text-gray-700">Value:</span>
      <input
        type="text"
        on:change={handleButtonClick}
        bind:value
        class="mt-1 p-2 border rounded-md w-full"
      />
    </div>

    <div class="config-Input">
      <span class="block text-sm font-medium text-gray-700">label:</span>
      <Input
        on:change={handleButtonClick}
        type="text"
        bind:value={label}
        class="mt-1 p-2 border rounded-md w-full"
        placeholder="Enter span"
      />
    </div>
    <div class="config-Input">
      <span class="block text-sm font-medium text-gray-700">Width:</span>
      <Input
        type="text"
        on:change={handleButtonClick}
        bind:value={width}
        class="mt-1 p-2 border rounded-md w-full"
        placeholder="Enter width"
      />
    </div>
    <div class="config-Input">
      <span class="block text-sm font-medium text-gray-700">X:</span>
      <Input
        type="text"
        on:change={handleButtonClick}
        bind:value={x}
        class="mt-1 p-2 border rounded-md w-full"
        placeholder="Enter X coordinate"
      />
    </div>
    <div class="config-Input">
      <span class="block text-sm font-medium text-gray-700">Y:</span>
      <Input
        type="text"
        on:change={handleButtonClick}
        bind:value={y}
        class="mt-1 p-2 border rounded-md w-full"
        placeholder="Enter Y coordinate"
      />
    </div>
    <div class="config-Input">
      <span class="block text-sm font-medium text-gray-700"
        >Background Color:</span
      >
      <Input
        on:change={handleButtonClick}
        type="color"
        bind:value={backgroundColor}
        class="mt-1 p-2 border rounded-md w-full"
      />
    </div>
    <div class="config-Input">
      <span class="block text-sm font-medium text-gray-700">Text Color:</span>
      <Input
        type="color"
        on:change={handleButtonClick}
        bind:value={textColor}
        class="mt-1 p-2 border rounded-md w-full"
      />
    </div>
    <div class="config-Input">
      <span class="block text-sm font-medium text-gray-700">Color:</span>
      <Dropdown
        on:change={handleButtonClick}
        on:selected={(value) => (color = value)}
        bind:value={color}
        class="mt-1 p-2 border rounded-md w-full"
      >
        {#each colorOptions as colorOption}
          <DropdownItem
            on:click={() => {
              color = colorOption;
              handleButtonClick();
            }}>{colorOption}</DropdownItem
          >
        {/each}
      </Dropdown>
    </div>
    <div class="config-Input">
      <span class="block text-sm font-medium text-gray-700">Padding:</span>
      <Input
        type="text"
        bind:value={padding}
        on:change={handleButtonClick}
        class="mt-1 p-2 border rounded-md w-full"
        placeholder="Enter padding"
      />
    </div>
    <div class="config-Input">
      <span class="block text-sm font-medium text-gray-700">Snap to Grid:</span>
      <input
        type="checkbox"
        bind:checked={isSnapping}
        on:change={handleButtonClick}
        class="mt-1 p-2 border rounded-md"
      />
    </div>
    <button on:click={() => (isConfiguring = false)}>Close</button>
  </div>
{/if}

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  style="width:{width};position: {isDraggable
    ? 'absolute'
    : 'relative'}  absolute;;left:  {x}px; top: {y}px; color: {textColor}"
  class="draggable"
  on:mousedown={handleMouseDown}
>
  <div class="toolbar space-x-2 flex">
    <Button
      size="xs"
      color="alternative"
      on:click={() => handleButtonClick(true)}
    >
      <EditOutline size="xs" /></Button
    >
    <Button size="xs" color="alternative" on:click={handleButtonClick}>
      <FileCopyOutline size="xs" /></Button
    >
    <Button size="xs" color="alternative" on:click={onDelete}
      ><TrashBinOutline size="xs" /></Button
    >

    <Button size="xs" color="alternative" on:click={onDelete}
      ><BookOutline size="xs" /></Button
    >
    <Button size="xs" color="alternative" on:click={onHide}>
      {#if isHidden}
        <EyeSlashOutline size="xs" />
      {:else}
        <EyeOutline size="xs" />
      {/if}
    </Button>
    <!-- Add other toolbar buttons if needed -->
  </div>
  <!-- <Badge color='indigo'  class='mb-2 absolute'>Beta</Badge> -->

  <div class={appendClasses([`w-${width}`, isHidden ? "hidden" : " "])}>
    <div>
      <svelte:component projectConfig={projectConfig} this={dynamicComponent?.component} {...config} />
      <slot />
    </div>
  </div>
</div>

<style>
  .draggable {
    position: absolute;
    cursor: move;
    z-index: zIndex;
    transition: 0.3s; /* Add a transition for smooth animation */
  }

  .draggable:hover .toolbar {
    opacity: 1;
    pointer-events: auto;
  }

  .config-menu {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    background-color: #fff;

    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000; /* Make sure it's above draggable div */
  }

  .toolbar {
    margin-bottom: 10px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s; /* Add a transition for smooth fade-in/out */
  }

  .toolbar button {
    margin-right: 10px;
  }

  .config-Input {
    margin-bottom: 10px;
  }
</style>
