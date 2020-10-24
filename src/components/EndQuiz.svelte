<script>
    import { onMount } from 'svelte'
    import { totalCorrectAnswers, time, questions,userAnswers, correctAnswers } from './stores'
    import { format, playAgain } from './utils'

    let index=[0,1,2,3,4,5,6,7,8,9];
    let results;

    onMount( () => {
        results=true;
    });

    function handleView(){
        results=!results
    }

</script>

<div class="btn-container">
    <button type='button' on:click={handleView}>
        {results ? 'See Details' : "See Results"}
    </button>
    <button type='button' on:click={playAgain}>Play Again</button>
</div>

{#if results == false}
<div class="results-detais">
    
    <table>
        <tr>
          <th>Questions</th>
          <th>Your answer</th>
          <th>Correct answer</th>
        </tr>
        {#each index as i (i)}
            <tr>
                <td>
                    {decodeURIComponent($questions[i].question)}
                </td>
                <td>
                    {decodeURIComponent($userAnswers[i])}
                </td>
                <td>
                    {decodeURIComponent($correctAnswers[i])}
                </td>
            </tr>    
        {/each}
            
      </table>
</div>
{:else}
<div class="results">
    <h2>Right answers: {$totalCorrectAnswers}</h2>
    <h2>Time: { format($time) } {$time > 60 ? 'minutes' : 'seconds'}</h2>
</div>
{/if}    

<style>

table, th, td {
  border: 1px solid teal;
}

button{
    margin: 5px;
}

.btn-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

</style>


