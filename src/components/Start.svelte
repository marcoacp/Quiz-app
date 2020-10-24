<script>
    import { onMount } from 'svelte'
    import { url, questions, baseUrl, difficulty, category,type, encode, status } from './stores'
    import axios from 'axios'
    import { categories, difficulties } from './utils'

    let selectedCategory;
    let selectedDifficulty;
    
    let currentId;
    let currentLevel;


    onMount( () => {
        handleUrl()
        axios.get($url).then(res =>questions.set(res.data.results))
    });

    function handleUrl(){
        currentId = selectedCategory.id;
        currentLevel = selectedDifficulty.level
        url.set($baseUrl+$category+currentId+$difficulty+currentLevel+$type+$encode)
        axios.get($url).then(res =>questions.set(res.data.results))
    }    
    
    function start(){
        if( $questions.length == 0){
            status.set('error')
        }
        else {
            
            status.set('running')  
        }
    }

</script>

<div class="initial-screen">

    <label for="category">Category</label>
      <!-- svelte-ignore a11y-no-onchange -->
    <select bind:value={selectedCategory} on:change={handleUrl} name="category">
        {#each categories as category}
            <option value={category}>
                {category.name}
            </option>
        {/each}
    </select>


    <label for="difficulties">Difficulty</label>
    <!-- svelte-ignore a11y-no-onchange -->
    <select bind:value={selectedDifficulty} on:change={handleUrl} name="difficulty">
        {#each difficulties as difficulty}
            <option value={difficulty}>
                {difficulty.text}
            </option>
        {/each}
    </select>

    <button type="button" on:click={start}> Start </button>
    
</div>

<style>

    .initial-screen {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    select {
        background-color: whitesmoke;
        color: teal;
        border-color: teal;
        font-size: 1.2em;    
    }

    label {
        font-size: 1.5em;
        text-transform: uppercase;
    }

    button {
        font-size: 1.2em;
    }

</style>