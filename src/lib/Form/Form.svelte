<script>
  import { Button, Label, Input, Select } from "flowbite-svelte";
  import { GearSolid } from "flowbite-svelte-icons";
  import ComponentsToolbar from "../ComponentsToolbar/ComponentsToolbar.svelte";
  import DynamicForm from "$lib/DynamicForm/DynamicForm.svelte";
  import { FormConfig } from "./config";
  import List from "$lib/List/List.svelte";
  import AppContainer from "$lib/AppContainer/AppContainer.svelte";

  export let padding = "4px";
  export let isConfig = false;
  export let projectConfig = null;


  export let width = "100px";

  export let formConfigs =  null;
  const inputType = ["text", "number", "checkbox", "select", "file"];

  export let formData = [
    {
      name: "text",
      placeholder: "Enter your text",
      value: "",
    },
  ];

  let currentForm = {
    name: "",
    placeholder: "",
    value: "",
  };

  const formName = "my-form";

  const submitForm = () => {
    const formValues = {};
    formData.forEach((field) => {
      formValues[field.name] = field.value;
    });
    console.log(formValues);
    // Handle form submission or further processing here
  };

  const onConfig = () => {
    isConfig = !isConfig;
  };

  const addInput = () => {
    formData = [...formData,{
      name: currentForm.name,
      placeholder: currentForm.placeholder,
      value: currentForm.value,
    }]
  };
</script>

<ComponentsToolbar {onConfig} />

<div class="flex w-screen">
  {#if isConfig}
    <div class=" h-screen p-4 rounded-md bg-white border" style="width: 300px;">
      <h2>Form Congiguration</h2>
      <DynamicForm formData={FormConfig}>
        <div class="bg-white p-4 mb-4 rounded-md">
          <div class="mb-4">
            <div class="mb-4">
              <Input
                name="formName"
                bind:value={currentForm.name}
                placeholder="InputName"
              />
            </div>

            <div class="mb-4">
              <Input
                name="placeholder"
                bind:value={currentForm.placeholder}
                placeholder="placeholder"
              />
            </div>

            <div class="mb-4">
              <Input
                name="value"
                bind:value={currentForm.value}
                placeholder="value"
              />
            </div>

            <Select
              name="formName"
              placeholder="Select Type"
              options={["text", "number", "checkbox", "select", "file"]}
            >
              {#each inputType as type}
                <option value={type}>{type}</option>
              {/each}
            </Select>
          </div>
          <Button on:click={addInput}>Add</Button>
        </div>
      </DynamicForm>
    </div>
  {/if}

  <form
    style="padding: {padding}; width:{width}"
    on:submit|preventDefault={submitForm}
  >
    {#each formData as { name, placeholder, value }}
      <div class="form-field">
        <ComponentsToolbar />
        <Label for={name}>{name}</Label>
        <Input type="text" id={name} {name} {placeholder} bind:value />
      </div>
    {/each}

    <Button type="submit">Submit</Button>
  </form>
</div>

<style>
  .form-field {
    margin-bottom: 15px;
  }
</style>
