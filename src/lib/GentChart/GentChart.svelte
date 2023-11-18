<script>
  import { onMount } from "svelte";

  let tasks = [
    {
      id: 1,
      name: "Task 1",
      description: "Description for Task 1",
      contact: "John Doe",
      start: new Date("2023-01-01"),
      end: new Date("2023-01-01"),
      priority: "high",
    },
    {
      id: 2,
      name: "Task 2",
      description: "Description for Task 2",
      contact: "Jane Doe",
      start: new Date("2023-01-03"),
      end: new Date("2023-01-03"),
      priority: "medium",
    },
    {
      id: 2,
      name: "Task 2",
      description: "Description for Task 2",
      contact: "Jane Doe",
      start: new Date("2023-01-03"),
      end: new Date("2023-01-03"),
      priority: "medium",
    },
    {
      id: 2,
      name: "Task 2",
      description: "Description for Task 2",
      contact: "Jane Doe",
      start: new Date("2023-01-03"),
      end: new Date("2023-01-07"),
      priority: "low",
    },
    {
      id: 3,
      name: "Task 3",
      description: "Description for Task 3",
      contact: "Bob Smith",
      start: new Date("2023-01-06"),
      end: new Date("2023-01-06"),
      priority: "low",
    },
    // Add more tasks as needed
  ];

  let startDate = new Date("2023-01-01");
  let endDate = new Date("2023-01-07"); // Adjust to show events for one week

  function getGridColumn(start) {
    const daysFromStart = Math.floor(
      (start - startDate) / (1000 * 60 * 60 * 24)
    );
    return daysFromStart + 1; // Adding 1 to start from column 1
  }

  function getGridSpan(start, end) {
    const daysSpan = Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;
    return daysSpan;
  }

  function getTaskColor(priority) {
    switch (priority) {
      case "high":
        return "#ff4d4f"; // Red for high priority
      case "medium":
        return "#faad14"; // Orange for medium priority
      case "low":
        return "#1890ff"; // Blue for low priority
      default:
        return "#68d391"; // Default color
    }
  }

  onMount(() => {
    // You can perform additional initialization or data fetching here
  });
</script>

<div>
  <!-- Timeline -->
  <div class="timeline">
    {#each Array.from({ length: (endDate - startDate) / (1000 * 60 * 60 * 24) + 1 }, (_, i) => i) as day}
      <div class="timeline-day">
        {new Date(
          startDate.getTime() + day * (1000 * 60 * 60 * 24)
        ).toLocaleDateString("en-US", { weekday: "short" })}
      </div>
    {/each}
  </div>
  <div class="gantt-chart">
    {#each tasks as { id, name, description, contact, start, end, priority }}
      <div
        class="task"
        style="grid-column: {getGridColumn(start)} / span {getGridSpan(
          start,
          end
        )}; background-color: {getTaskColor(priority)}"
      >
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Contact: {contact}</p>
      </div>
    {/each}
    {#each Array.from( { length: (endDate - startDate) / (1000 * 60 * 60 * 24) + 1 } ) as day (day)}
      <div
        class="grid-line"
        style="left: {(day + 1) *
          (100 / ((endDate - startDate) / (1000 * 60 * 60 * 24) + 1))}%"
      />
    {/each}
  </div>
</div>

<style>
  .gantt-chart {
    overflow: scroll;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 10px;
    border-bottom: 1px solid #c1c1c1;
    position: relative;
  }

  .task {
    border-radius: 8px;
    padding: 10px;
    margin: 4px;
    position: relative;
    overflow: hidden;
  }

  .task h3 {
    margin: 0 0 5px;
  }

  .task p {
    margin: 0;
  }

  .timeline {
    display: grid;
    padding: 4;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 10px;
    border-top: 1px solid #c1c1c1;
    margin-top: 20px;
  }

  .timeline-day {
    border-right: 1px solid #cdcdcd;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .grid-line {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: #cdcdcd;
  }
</style>
