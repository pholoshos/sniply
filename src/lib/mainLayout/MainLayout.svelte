<script>
  // @ts-nocheck
  import {
    Tabs,
    TabItem,
    Card,
    Timeline,
    TimelineItem,
    Button,
    Activity,
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
    ActivityItem,
  } from "flowbite-svelte";

  import moment from "moment";

  import { onMount, afterUpdate } from "svelte";
  import { goto } from "$app/navigation";
  import user from "../../store/user";
  import { getData, getToken } from "../../utils/localStorage";
  import AppNavbar from "$lib/navbar/AppNavbar.svelte";
  import SideNav from "$lib/SideNav/SideNav.svelte";
  import Table from "$lib/Table/Table.svelte";
  import Toolbar from "$lib/Toolbar/Toolbar.svelte";

  export let useTable = true;
  export let useToolbar = true;
  export let pageName = "";

  let isLoading = false;
  let _user;

  user.subscribe((value) => {
    _user = value;
  });

  const onSearch = (keyword) => {
    isLoading = true;
    api
      .get(
        `/project/search?keyword=${keyword}&company=${_user.company || "none"}`
      )
      .then((res) => {
        if (res.ok) {
        } else {
        }
        isLoading = false;
      })
      .catch((err) => {});
  };

  onMount(() => {
    const token = getToken();
    _user = getData("user");
    if (!token) {
      goto("/landing", { replaceState: true });
    }
    api.setHeader("Authorization", `Bearer ${token}`);
    generalApi.setHeader("Authorization", `Bearer ${token}`);
    getNotifications();
  });

  afterUpdate(() => {
    if (!projects) {
    }
  }, []);
</script>

<div>
  <AppNavbar />
  <div class=" flex">
    <SideNav pageName={pageName} />
    <div class="p-4 bg-white w-full overflow-scroll">
      {#if useToolbar}
        <Toolbar {pageName}>
          {#if useTable}
            <Table />
          {:else}
            <slot />
          {/if}
        </Toolbar>
      {/if}

      {#if !useToolbar && useTable}
        <Table />
      {:else}
        <slot />
      {/if}
    </div>
  </div>
</div>
