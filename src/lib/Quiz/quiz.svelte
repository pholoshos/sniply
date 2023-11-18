<script>
  import { Button } from "@svelteuidev/core";

    
    export let questions = [
      {
        text: "How is your experience with Splearn?",
        options: ["Good", "awesome", "nice", "awesome"],
        answer: "Good"
      },
      // Add more questions here
    ];
  
    let currentQuestion = 0;
    let selectedOption = null;
    let score = 0;
  
    function nextQuestion() {
      if (selectedOption === questions[currentQuestion].answer) {
        score++;
      }
      selectedOption = null;
      currentQuestion++;
    }
  </script>
  
  <div class=" p-4 mx-auto border rounded shadow">
    {#if currentQuestion < questions.length}
      <h2 class="text-xl font-semibold mb-4">Question {currentQuestion + 1}</h2>
      <p>{questions[currentQuestion].text}</p>
  
      <div class="mt-4">
        {#each questions[currentQuestion].options as option}
          <label class="block">
            <input
              type="radio"
              bind:group={selectedOption}
              value={option}
              class="mr-2"
            />
            {option}
          </label>
        {/each}
      </div>
  
      <Button
        class='mt-4'
        color='green'
        on:click={nextQuestion}
      >
        {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
    </Button>
    {:else}
      <div class="">
        <h2 class="text-xl font-semibold mb-2">Quiz Completed</h2>
        <p>Your score: {score}/{questions.length}</p>
      </div>
    {/if}
  </div>
  