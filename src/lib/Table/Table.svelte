<script>
  // @ts-nocheck

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
  

  let searchTerm = "";

  export let onAdd;
  export let onDelete;
  export let onEdit;
  export let modelName = "";
  export const data = [];
  export const dataId = "";
  export let backgroundColor ='white';
  export let padding = '10px'

  onMount(() => {
    getData(modelName).then((data) => {
      items = data;
    })
  });
  
  const seletedData = null;

</script>

<div class="h-screen" style="background-color: {backgroundColor}; padding: {padding}">
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
    <TableBody class="divide-y">
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
      <img class=" w-96 mx-auto" alt="" src="https://www.kreuzbergkinder.com/_nuxt/img/search_no.1ddc8c4.jpg">
      <p>No data</p>
    </div>
  {/if}
</div>
