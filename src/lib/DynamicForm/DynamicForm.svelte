<script>
  import { Input,Button } from "flowbite-svelte";

  // @ts-ignore
  export let formData = [];
  export let onSave = (/** @type {any} */ settings) => {};

</script>

{#if formData.length > 0}
  <form>
    {#each formData as item (item.name)}
    <div class="mb-4 w-48">
        <span>{item.label}</span>
        {#if item.type === "text"}
          <Input type="text" bind:value={item.value} name={item.name} />
        {:else if item.type === "checkbox"}
          <input type="checkbox" bind:checked={item.checked} name={item.name} />
        {:else if item.type === "select"}
          <select class=" rounded-md w-48" bind:value={item.value} name={item.name}>
            {#each item.options as option (option)}
              <option value={option}>{option}</option>
            {/each}
          </select>
        {/if}
        <br />
    </div>
    {/each}
    <div class="flex">
        <Button color="alternative"  on:click={onSave}>Save</Button>
    </div>
    
  </form>
{/if}
