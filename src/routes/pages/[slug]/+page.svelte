<script>
  import { page } from "$app/stores";
  import WorkSpace from "$lib/workspace/workSpace.svelte";
  /** @type {import('./$types').PageData} */
  export let pageRoute = $page.url.pathname.substr(
    $page.url.pathname.lastIndexOf("/")
  );
</script>

<WorkSpace isPreview={false} pageRoute={pageRoute?.toString()} />
