<!-- TutoringForm.svelte -->
<script>
  import { baseUrl } from "../../../utils";

  let name = '';
  let email = '';
  let phone = '';
  let childName = '';
  let childAge = '';
  let subjects = '';
  let location = '';
  let schedule = '';
  let school = '';
  let grade = '';
  let comments = '';
  let marketingOptIn = false;

  const handleSubmit = async () => {
    // Handle form submission here (e.g., send data to the server).
    // You can use fetch or another method to send the data to your server.
    // Remember to validate and process the data appropriately.
    const formData = {
      name,
      email,
      phone,
      childName,
      childAge,
      subjects,
      location,
      schedule,
      school,
      grade,
      comments,
      marketingOptIn,
    };

    // Example: Send the data to a server endpoint
    const response = await fetch(baseUrl+'/splearn/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle successful form submission
    } else {
      // Handle errors, if any
    }
  };
</script>

<style>
  /* Apply GitHub-inspired Tailwind CSS classes here */
  .bg-gray-100 {
    background-color: #f6f8fa; /* GitHub's background color */
  }

  .text-gray-900 {
    color: #333; /* GitHub's text color */
  }

  .border-gray-300 {
    border-color: #e1e4e8; /* GitHub's border color */
  }

  .bg-green-500 {
    background-color: #28a745; /* GitHub's green color */
  }

  .hover\:bg-green-600:hover {
    background-color: #239640; /* Slightly darker green on hover */
  }
</style>

<form on:submit={handleSubmit} class="bg-gray-100 p-4 rounded-lg w-96 mx-auto shadow-md">
  <h2 class="text-2xl text-gray-900 text-center mb-4">Tutoring Request Form</h2>
  <div class="mb-4">
    <label for="name" class="block text-gray-900">Name:</label>
    <input type="text" id="name" bind:value={name} class="w-full p-2 border border-gray-300 rounded-md" required />
  </div>

  <div class="mb-4">
    <label for="email" class="block text-gray-900">Email:</label>
    <input type="email" id="email" bind:value={email} class="w-full p-2 border border-gray-300 rounded-md" required />
  </div>

  <div class="mb-4">
    <label for="phone" class="block text-gray-900">Phone:</label>
    <input type="tel" id="phone" bind:value={phone} class="w-full p-2 border border-gray-300 rounded-md" required />
  </div>

  <div class="mb-4">
    <label for="childName" class="block text-gray-900">Child's Name:</label>
    <input type="text" id="childName" bind:value={childName} class="w-full p-2 border border-gray-300 rounded-md" required />
  </div>

  <div class="mb-4">
    <label for="childAge" class="block text-gray-900">Child's Age:</label>
    <input type="number" id="childAge" bind:value={childAge} class="w-full p-2 border border-gray-300 rounded-md" required />
  </div>


  <div class="mb-4">
    <label for="subjects" class="block text-gray-900">Subjects:</label>
    <input type="text" id="subjects" bind:value={subjects} class="w-full p-2 border border-gray-300 rounded-md" required />
  </div>

  <div class="mb-4">
    <label for="location" class="block text-gray-900">Location:</label>
    <input type="text" id="location" bind:value={location} class="w-full p-2 border border-gray-300 rounded-md" required />
  </div>

  <div class="mb-4">
    <label for="schedule" class="block text-gray-900">Schedule:</label>
    <input type="text" id="schedule" bind:value={schedule} class="w-full p-2 border border-gray-300 rounded-md" required />
  </div>

  <div class="mb-4">
    <label for="school" class="block text-gray-900">Current School:</label>
    <input type="text" id="school" bind:value={school} class="w-full p-2 border border-gray-300 rounded-md" required />
  </div>

  <div class="mb-4">
    <label for="grade" class="block text-gray-900">Grade:</label>
    <input type="text" id="grade" bind:value={grade} class="w-full p-2 border border-gray-300 rounded-md" required />
  </div>

  <div class="mb-4">
    <label for="comments" class="block text-gray-900">Additional Comments:</label>
    <textarea id="comments" bind:value={comments} class="w-full p-2 border border-gray-300 rounded-md" rows="4"></textarea>
  </div>

  <div class="mb-4">
    <label for="marketingOptIn" class="block text-gray-900">
      <input type="checkbox" id="marketingOptIn" bind:checked={marketingOptIn} class="mr-2" />
      Receive marketing updates
    </label>
  </div>

  <div class="mb-4">
    <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
      Submit
    </button>
  </div>
</form>
