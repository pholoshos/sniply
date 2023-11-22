<script>
  import { Button,Label,Input } from "flowbite-svelte";
  import { GearSolid } from "flowbite-svelte-icons";
  import ComponentsToolbar from "../../ComponentsToolbar/ComponentsToolbar.svelte";
  import DynamicForm from "$lib/DynamicForm/DynamicForm.svelte";
  import { FormConfig } from "./config";

    export let padding = "4px";
    export let isConfig = false;
    export let width = "100px";

    export let formData  = [
      {
        name: "name",
        placeholder: "Enter your name",
        value: ""
      },
      {
        name: "email",
        placeholder: "Enter your email",
        value: ""
      },
      {
        name: "phone",
        placeholder: "Enter your phone",
        value: ""
      }
    ];;

    const formName = "my-form"
    
  
    const submitForm =() =>{
      const formValues = {};
      formData.forEach(field => {
        formValues[field.name] = field.value;
      });
      console.log(formValues);
      // Handle form submission or further processing here
    }

    const onConfig = ()=>{
      isConfig = !isConfig;
    }

  </script>
  
  <style>
    .form-field {
      margin-bottom: 15px;
    }
  </style>

  <ComponentsToolbar onConfig={onConfig}/>

  <div class="flex w-screen">
    {#if isConfig}
    <div class=" h-screen p-8 rounded-lg bg-gray-300" style="width: 300px;">
      <h2>Form Congiguration</h2>
      <DynamicForm formData={FormConfig}/>
    </div>
    {/if}

  <form style="padding: {padding}; width:{width}" on:submit|preventDefault={submitForm}>
    {#each formData as { name, placeholder, value }}
      <div class="form-field">
        <Label for={name}>{name}</Label>
        <Input type="text" id={name} name={name} placeholder={placeholder} bind:value={value} />
      </div>
    {/each}
  
    <Button type="submit">Submit</Button>
  </form>
  </div>

  