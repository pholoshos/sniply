<script>
    import { Badge, Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';

  </script>
  
  <Sidebar>
    <SidebarWrapper class="h-screen bg-gray-300">
      <Badge color='green'>Components</Badge>
      <SidebarGroup>
        <slot></slot>

      </SidebarGroup>
      <SidebarGroup border>
        <SidebarItem label="Settings" href='/settings' />
        <SidebarItem label="Help" href='/help' />
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
  