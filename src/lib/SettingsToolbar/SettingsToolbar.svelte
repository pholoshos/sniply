<script>
  import ProfileSettings from "$lib/ProfileSettings/ProfileSettings.svelte";
  import { Tabs, TabItem } from "flowbite-svelte";

  let profile = false;

  const onOpen = (value) => {
    // console.log("LOG:::",opentab)
    // opentab = value?.target?.textContent;
    // console.log("LOG:::",tabIsOpen("profile"))
    profile = true;
  };

  const tabIsOpen = (value) => value.toLowerCase() == opentab.toLowerCase();
</script>

<Tabs>
  <TabItem open={true} title="Settings">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Profile:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </p>
    <ProfileSettings />
  </TabItem>
</Tabs>
