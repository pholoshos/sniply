<script>
    import { SpeedDial, SpeedDialButton } from 'flowbite-svelte';
    import { ShareNodesSolid, PrintSolid, DownloadSolid, FileCopySolid } from 'flowbite-svelte-icons';
  </script>
  
  <SpeedDial defaultClass="absolute right-6 bottom-6">
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="w-5 h-5" />
    </SpeedDialButton>
    <SpeedDialButton name="Print">
      <PrintSolid class="w-5 h-5" />
    </SpeedDialButton>
    <SpeedDialButton name="Download">
      <DownloadSolid class="w-5 h-5" />
    </SpeedDialButton>
    <SpeedDialButton name="Copy">
      <FileCopySolid class="w-5 h-5" />
    </SpeedDialButton>
  </SpeedDial>