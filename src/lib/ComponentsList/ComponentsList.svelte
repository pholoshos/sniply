<script>
    import { Badge, Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';

  </script>
  
  <Sidebar>
    <SidebarWrapper class="h-screen w-64 bg-gray-300">
      <SidebarGroup>
        <slot></slot>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
  