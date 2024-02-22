<script>
  import { api, generalApi, setBaseUrl } from "../utils";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { getToken } from "../utils/localStorage";
  import { loadConfig } from "../utils/loadConfig";

  onMount(() => {
    try {
      let token = getToken();
      loadConfig()?.then((config) => {
        setBaseUrl(config?.apiBaseUrl);
      });
      api.setHeader("Authorization", `Bearer ${token}`);
      generalApi.setHeader("Authorization", `Bearer ${token}`);
      goto("/pages/home", { replaceState: true });
    } catch (e) {
      console.log(e);
    }
  });
</script>
