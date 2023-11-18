<script>
    import Avater from '$lib/Avater/Avater.svelte';
import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input, Avatar } from 'flowbite-svelte';
    import { SearchOutline } from 'flowbite-svelte-icons';
  </script>
  
  <Navbar class='bg-gray-200' >
    <NavBrand href="/">
      <img src="/pdd.png" class="mr-3 h-12 sm:h-12 rounded-lg" alt="Flowbite Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ppd</span>
    </NavBrand>
    <NavHamburger  />
    <NavUl >
      <Avatar border size='xs'/>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/about">About</NavLi>
    </NavUl>
  </Navbar>