<script>
  import {
    Navbar,
    NavBrand,
    NavUl,
    NavHamburger,
    Avatar,
  } from "flowbite-svelte";
  export let appName = "sniply";
  export let pages = {};

  const refreshPage =(url) =>{
 
    window.location.reload();
    window.location.href = url.toString();
  }
 
</script>

<Navbar class="bg-gray-200">
  <NavBrand href="/">
    <img
      src="/pdd.png"
      class="mr-3 h-12 sm:h-12 rounded-lg"
      alt="Flowbite Logo"
    />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      >{appName}</span
    >
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <Avatar border size="xs" />
    {#each pages[0] as page }
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span class=" hover:text-white hover:cursor-pointer"  on:click={()=>refreshPage(page?.route)}>{page?.pageLabel}</span>
    {/each} 
  </NavUl>
</Navbar>
