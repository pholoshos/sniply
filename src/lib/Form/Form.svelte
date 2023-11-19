<script>
  import { Button,Label,Input } from "flowbite-svelte";
  import { GearSolid } from "flowbite-svelte-icons";
  import ComponentsToolbar from "../../ComponentsToolbar/ComponentsToolbar.svelte";

    export let padding = "4px";

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
  </script>
  
  <style>
    .form-field {
      margin-bottom: 15px;
    }
  </style>

  <ComponentsToolbar/>
  <form style="padding: {padding};" on:submit|preventDefault={submitForm}>
    {#each formData as { name, placeholder, value }}
      <div class="form-field">
        <Label for={name}>{name}</Label>
        <Input type="text" id={name} name={name} placeholder={placeholder} bind:value={value} />
      </div>
    {/each}
  
    <Button type="submit">Submit</Button>
  </form>
  