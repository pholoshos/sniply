<script>
  import { Tabs, TabItem } from "flowbite-svelte";
  export let pageName = "";
</script>

<Tabs>
  <TabItem  open title={pageName}>
    <slot></slot>
  </TabItem>
</Tabs>
