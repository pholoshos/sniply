<script>
  import {
    Button,
    Checkbox,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableSearch,
  } from "flowbite-svelte";

  import { afterUpdate, onMount } from "svelte";
  import ComponentsToolbar from "$lib/ComponentsToolbar/ComponentsToolbar.svelte";
  import DynamicForm from "$lib/DynamicForm/DynamicForm.svelte";
  import { TableConfig } from "./TableConfig";
  import { mapServicesToOptions } from "../../utils/mapServicesToOptions";
  import { fetchData, getCollectionUrl } from "../../utils/httpsMethodActions";
  import { api } from "../../utils";

  let searchTerm = "";

  /**
   * @type {() => void}
   */
  export let onAdd;
  /**
   * @type {(arg0?: null) => void}
   */
  export let onDelete;
  /**
   * @type {(arg0?: null) => void}
   */
  export let onEdit;
  /**
   * @type {string | any[]}
   */
  export const data = [];
  export let width = "70%";
  export const dataId = "";
  export let backgroundColor = "white";
  export let isDevelopment = false;
  export let padding = "10px";

    /**
   * @type {any[]}
   */
   let tableSettings = [];


  let isConfig = false;
  export let projectConfig = null;
  export let services = projectConfig?.services || [];

  console.log("LOG:::", services);

  let extendedTableConifig = [
    ...TableConfig,
    {
      name: "collection",
      type: "select",
      label: "Select Collection",
      options: mapServicesToOptions(projectConfig?.services),
    },
  ];

  let findSettingsOptions = (/** @type {string} */ settingsName) => {
    return tableSettings?.find((c) => c?.name == settingsName);
  };

  let toolbarComponents = [
    {
      componentName: "Button",
      label: "Add",
      isHidden: false,
      onClick: () => {
        onAdd();
      },
    },
    {
      componentName: "Button",
      label: "Edit",
      isHidden: findSettingsOptions("allowEdit") || false,
      onClick: () => {
        onEdit();
      },
    },
    {
      componentName: "Button",
      label: "Delete",
      isHidden: true,
      onClick: () => {
        onDelete();
      },
    },
  ];

  console.log("LOG::: toolbarComponents", findSettingsOptions("allowEdit"));

  const onSave = (/** @type {any} */ settings) => {
    console.log("LOG:::", settings);
    tableSettings = settings;
  };

  onMount(() => {});

  const onConfig = () => {
    isConfig = !isConfig;
  };

  const loadTableData = () => {
    if (!!services) {
      let collectionName = tableSettings?.find(
        (c) => c.name === "collection"
      )?.value;
      let url = getCollectionUrl(collectionName, services);

      api
        .get(url)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  afterUpdate(() => {
    loadTableData();
  });

  onMount(() => {
    loadTableData();
  });

  const seletedData = null;
</script>

<ComponentsToolbar {isDevelopment} {onConfig} />

<div class="flex">
  {#if isConfig}
    <div class=" h-screen p-4 rounded-md bg-white border" style="width: 300px;">
      <h2>Form Stuff</h2>
      <DynamicForm {onSave} formData={extendedTableConifig}>
        <div class="bg-white p-4 mb-4 rounded-md"></div>
      </DynamicForm>
    </div>
  {/if}

  <div
    class="h-screen"
    style="background-color: {backgroundColor};width:{width}; padding: {padding}"
  >
    <div class=" space-x-2">
      {#each toolbarComponents as toolbarComponent}
        {#if !toolbarComponent?.isHidden}
          <Button on:click={() => toolbarComponent?.onClick} color="alternative"
            >{toolbarComponent?.label}</Button
          >
        {/if}
      {/each}
    </div>
    <TableSearch
      shadow
      placeholder="Search by maker name"
      hoverable={true}
      bind:inputValue={searchTerm}
    >
      <TableHead>
        <TableHeadCell>
          <Checkbox />
        </TableHeadCell>
        <TableHeadCell>ID</TableHeadCell>
        <TableHeadCell>Maker</TableHeadCell>
        <TableHeadCell>Type</TableHeadCell>
        <TableHeadCell>Make</TableHeadCell>
      </TableHead>
      <TableBody>
        {#each data as item}
          <TableBodyRow>
            <TableBodyCell>
              <Checkbox />
            </TableBodyCell>
            <TableBodyCell>{item.id}</TableBodyCell>
            <TableBodyCell>{item.maker}</TableBodyCell>
            <TableBodyCell>{item.type}</TableBodyCell>
            <TableBodyCell>{item.make}</TableBodyCell>
          </TableBodyRow>
        {/each}
      </TableBody>
    </TableSearch>
    {#if !data.length}
      <div class=" m-auto">
        <img
          class=" w-96 mx-auto"
          alt=""
          src="https://www.kreuzbergkinder.com/_nuxt/img/search_no.1ddc8c4.jpg"
        />
      </div>
    {/if}
  </div>
</div>
