<script>
  import { Listgroup } from "flowbite-svelte";
  export let width = "100%"
  let buttons = [
    { name: "Profile", mycustomfield: "data1", current: true },
    { name: "Settings", mycustomfield: "data2" },
    { name: "Messages", mycustomfield: "data3" },
    {
      name: "Download",
      mycustomfield: "data4",
      disabled: true,
      attrs: { type: "submit" },
    },
  ];
</script>

<Listgroup
  style="width:{width}"
  active
  items={buttons}
  let:item
  class="w-96"
  on:click={(e) => alert(Object.entries(e.detail))}
>
  {item.name}
</Listgroup>
