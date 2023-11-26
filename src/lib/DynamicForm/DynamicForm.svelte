<script>
  import { Input, Button } from "flowbite-svelte";

  // @ts-ignore
  /**
   * @type {string | any[]}
   */
  export let formData = [];
  export let onSave = (/** @type {any} */ settings) => {};
</script>

{#if formData.length > 0}
  <form>
    {#each formData as item (item.name)}
      <div class="mb-4 w-48">
        <span>{item.label}</span>
        {#if item.type === "text"}
          <Input
            class="mb-2"
            type="text"
            bind:value={item.value}
            name={item.name}
          />
        {:else if item.type === "checkbox"}
          <input
            class="mb-2"
            type="checkbox"
            bind:checked={item.checked}
            name={item.name}
          />
        {:else if item.type === "select"}
          <select
            class=" rounded-md w-48 mb-4"
            bind:value={item.value}
            name={item.name}
          >
            {#each item.options as option (option)}
              <option value={option}>{option}</option>
            {/each}
          </select>
        {/if}
        <br />
      </div>
    {/each}

    <slot />
    <div class="flex">
      <Button
        color="alternative"
        type="button"
        on:click={() => onSave(formData)}>Save</Button
      >
    </div>
  </form>
{/if}
