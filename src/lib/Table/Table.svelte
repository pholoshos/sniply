<script>
  import {
    Button,
    Checkbox,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableSearch,
  } from "flowbite-svelte";

  import { onMount } from "svelte";
  import { getData } from "../../utils/getData";
  import ComponentsToolbar from "$lib/ComponentsToolbar/ComponentsToolbar.svelte";
  import DynamicForm from "$lib/DynamicForm/DynamicForm.svelte";
  import { TableConfig } from "./TableConfig";

  let searchTerm = "";

  /**
   * @type {() => void}
   */
  export let onAdd;
  /**
   * @type {(arg0: null) => void}
   */
  export let onDelete;
  /**
   * @type {(arg0: null) => void}
   */
  export let onEdit;
  /**
   * @type {string | any[]}
   */
  export const data = [];
  export const dataId = "";
  export let backgroundColor = "white";
  export let isDevelopment = false;
  export let padding = "10px";
  let isConfig = false;

  onMount(() => {});

  const onConfig = () => {
    isConfig = !isConfig;
  };

  const seletedData = null;
</script>

<ComponentsToolbar {isDevelopment} {onConfig} />

<div class="flex">
  {#if isConfig}
    <div class=" h-screen p-4 rounded-md bg-white border" style="width: 300px;">
      <h2>Form Congiguration</h2>
      <DynamicForm formData={TableConfig}>
        <div class="bg-white p-4 mb-4 rounded-md"></div>
      </DynamicForm>
    </div>
  {/if}

  <div
    class="h-screen"
    style="background-color: {backgroundColor}; padding: {padding}"
  >
    <div>
      <Button on:click={() => onAdd()} color="alternative">Add</Button>
      <Button on:click={() => onDelete(seletedData)} color="alternative">
        Delete</Button
      >
      <Button on:click={() => onEdit(seletedData)} color="alternative"
        >Edit</Button
      >
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
        <p>No data</p>
      </div>
    {/if}
  </div>
</div>
