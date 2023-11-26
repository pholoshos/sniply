<script>
  import GentChart from "$lib/GentChart/GentChart.svelte";
  import MainLayout from "$lib/mainLayout/MainLayout.svelte";
  import { Button } from "flowbite-svelte";
  import { api, generalApi } from "../utils";
  import { goto } from "$app/navigation";
  import user from "../store/user";
  import { onMount, afterUpdate } from "svelte";
  import { getData, getToken } from "../utils/localStorage";

  onMount(() => {
    try{
      let token = getToken();
      api.setHeader("Authorization", `Bearer ${token}`);
      generalApi.setHeader("Authorization", `Bearer ${token}`);
      goto("/pages/home", { replaceState: true });
    }catch(e){
      console.log(e);
    }
  });
</script>
