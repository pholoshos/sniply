<script>
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
    let spanClass = 'flex-1 ml-3 whitespace-nowrap';
    export let pageName = '';
    export let backgroundColor ='white';
  </script>
  
  <Sidebar activeUrl={"/"+pageName.toLowerCase()}>
    <SidebarWrapper class="h-screen" style='background-color:{backgroundColor}'>
      <SidebarGroup>
        <SidebarItem label="Dashboard" href='/' />
        <SidebarItem label="Rooms"  href='/Rooms' {spanClass} />
        <SidebarItem label="Customers" href='/Customers' {spanClass} />
        <SidebarItem label="Billing" href='/billing' {spanClass} />
        <SidebarItem label="Staff" href='/stuff' />
      </SidebarGroup>
      <SidebarGroup border>
        <SidebarItem label="Settings" href='/settings' />
        <SidebarItem label="Help" href='/help' />
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
  