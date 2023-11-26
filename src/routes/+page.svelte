<script>
  import { api, generalApi } from "../utils";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { getToken } from "../utils/localStorage";

  onMount(() => {
    try {
      let token = getToken();
      api.setHeader("Authorization", `Bearer ${token}`);
      generalApi.setHeader("Authorization", `Bearer ${token}`);
      goto("/pages/home", { replaceState: true });
    } catch (e) {
      console.log(e);
    }
  });
</script>
