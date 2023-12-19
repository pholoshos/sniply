<script>
    import {
      Button,
      Input,
      Modal,
      Select,
      Table,
      TableBody,
      TableBodyCell,
      TableBodyRow,
      TableHead,
      TableHeadCell,
    } from "flowbite-svelte";
    import { CloseSolid, GearSolid, PlusSolid, TrashBinSolid } from "flowbite-svelte-icons";
    import { updateAppContext, appContext } from "../../store/appContext";
  
    export let isOpen = false;
  
    /**
     * @type {any[]}
     */
    let properties = [];
  
    appContext.subscribe((state) => {
      console.log("state", state);
      properties = state?.properties;
    });
  
    export let onClose = () => {};
  
    let property = {
      name: "",
      description: "",
      type: "",
      value: "",
    };
  
    const addProperty = () => {
      updateAppContext(property);
    };
  </script>
  
  <Modal on:close={() => onClose()} open={isOpen}>
    <div>
      <h1 class=" font-bold text-black mb-4">App Logic Center</h1>
  
      <div class="flex space-x-2 mb-4">
        <div>
          <span>Property Name</span>
          <Input bind:value={property.name} placeholder="enter property name" />
        </div>
  
        <div>
          <span>Description</span>
          <Input
            bind:value={property.description}
            placeholder="enter description"
          />
        </div>
  
        <div>
          <span>Type</span>
          <Select bind:value={property.value} placeholder="enter type">
            <option value="value">value</option>
            <option value="object">Object</option>
            <option value="array">Array</option>
          </Select>
        </div>
  
        <div>
          <span>Value</span>
          <Input bind:value={property.type} placeholder="enter default value" />
        </div>
      </div>
      <Button class="mb-8" color="light" on:click={() => addProperty()}
        ><PlusSolid class="mr-2" /> New Property</Button
      >
      <Table>
        <TableHead>
          <TableHeadCell></TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Description</TableHeadCell>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Value</TableHeadCell>
        </TableHead>
  
        <TableBody class="divide-y">
          {#each properties as _property}
            <TableBodyRow>
              {#if _property.name}
                <TableBodyCell>
                  <div>
                    <Button color="light" size="xs"><GearSolid /></Button>
                    <Button color="light" size="xs"><TrashBinSolid /></Button>
                  </div>
                </TableBodyCell>
                <TableBodyCell>{_property.name}</TableBodyCell>
                <TableBodyCell>{_property.description}</TableBodyCell>
                <TableBodyCell>{_property.type}</TableBodyCell>
                <TableBodyCell>{_property.value}</TableBodyCell>
              {/if}
            </TableBodyRow>
          {/each}
        </TableBody>
      </Table>
    </div>
    <svelte:fragment slot="footer">
      <Button color="light" on:click={() => onClose()}
        ><CloseSolid class="mr-2" /> Close</Button
      >
    </svelte:fragment>
  </Modal>
  