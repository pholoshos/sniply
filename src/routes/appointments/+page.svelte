<script>
  import GentChart from "$lib/GentChart/GentChart.svelte";
  import MainLayout from "$lib/mainLayout/MainLayout.svelte";
  import { Button } from "flowbite-svelte";
</script>

<MainLayout useTable={false} pageName="Appointments">
  <div>
    <div class="mb-4">
      <Button color="dark">Prev</Button>
      <Button >Next</Button>
    </div>
    <GentChart />
  </div>
</MainLayout>
