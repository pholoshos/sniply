<script>
  import { Button, Label, Input, Select } from "flowbite-svelte";
  import { GearSolid } from "flowbite-svelte-icons";
  import ComponentsToolbar from "../../ComponentsToolbar/ComponentsToolbar.svelte";
  import DynamicForm from "$lib/DynamicForm/DynamicForm.svelte";
  import { FormConfig } from "./config";
  import List from "$lib/List/List.svelte";

  export let padding = "4px";
  export let isConfig = false;
  export let width = "100px";
  const inputType = ["text", "number", "checkbox", "select", "file"];

  export let formData = [
    {
      name: "name",
      placeholder: "Enter your name",
      value: "",
    },
    {
      name: "email",
      placeholder: "Enter your email",
      value: "",
    },
    {
      name: "phone",
      placeholder: "Enter your phone",
      value: "",
    },
  ];

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
</script>

<ComponentsToolbar {onConfig} />

<div class="flex w-screen">
  {#if isConfig}
    <div class=" h-screen p-8 rounded-lg bg-gray-300" style="width: 300px;">
      <h2>Form Congiguration</h2>
      <DynamicForm formData={FormConfig}>
        <div class="bg-white p-4 mb-4 rounded-md">
          <div class="mb-4">
            <div class="mb-4">
                <Input name="formName" placeholder="InputName" />
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
          <Button>Add</Button>
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
        <ComponentsToolbar/>
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
