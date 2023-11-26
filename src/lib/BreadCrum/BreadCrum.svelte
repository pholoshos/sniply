<script>
  import { page } from "$app/stores";
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";

  export let pageRoute = $page.url.pathname.substr(
    $page.url.pathname.lastIndexOf("/")
  );

  let pagesArray = pageRoute.split("/").filter((item) => item !== "");
</script>

<Breadcrumb class="bg-white" aria-label="Default breadcrumb example">
  {#each pagesArray as route}
    <BreadcrumbItem home>{route}</BreadcrumbItem>
  {/each}
</Breadcrumb>
