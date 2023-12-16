<script>
  import {
    Badge,
    Sidebar,
    Button,
    Listgroup,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
  } from "flowbite-svelte";

  /**
   * @type {never[]}
   */
  export let items = [];

  export let onSelect;
</script>

<Listgroup class="mt-2 mb-4 mx-2" {items} let:item>
  <div class="flex">
    <Button color="light" on:click={() => onSelect(item)}>  {item}</Button>
  </div>
</Listgroup>
