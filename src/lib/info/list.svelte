<script>
  import { Accordion } from '@svelteuidev/core';
</script>

<Accordion>
  <Accordion.Item  value="1">
    <div slot="control">Gettings Started</div>
    Build type safe applications...
  </Accordion.Item>
  <Accordion.Item value="2">
    <div slot="control">Learn The basics</div>
    SvelteUI contains more than just components...
  </Accordion.Item>
  <Accordion.Item value="3">
    <div slot="control">Create Project</div>
    All components are accessible according to WAI-ARIA standards....
  </Accordion.Item>

  <Accordion.Item value="4">
    <div slot="control">Complete Project</div>
    All components are accessible according to WAI-ARIA standards....
  </Accordion.Item>
</Accordion>