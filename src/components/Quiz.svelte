<script>
    import { onMount } from 'svelte'    
    import { questions, totalCorrectAnswers,status, time, correctAnswers, userAnswers } from "./stores";
    import { shuffle, timer, format } from './utils'

    let currentIndex = 0;
    let currentAnswers=[];
    let userAnswer='';

    onMount( () => {
        setCurrentAwnswers()   
    });

    timer(() => time.update(n => n + 1), 1000);

    function setCurrentAwnswers(){
        currentAnswers = $questions[currentIndex].incorrect_answers
                            .concat($questions[currentIndex].correct_answer);
        
        return shuffle(currentAnswers);
    }

    function checkQuestion(){

        userAnswers.set( $userAnswers = [...$userAnswers, userAnswer] )

        if ( userAnswer ==  $questions[currentIndex].correct_answer){
            totalCorrectAnswers.update(n => n + 1);
            nextQuestion()
        }
        else {
            nextQuestion()
        }
    }

    function nextQuestion(){

        correctAnswers.set($correctAnswers = [...$correctAnswers, $questions[currentIndex].correct_answer])
        userAnswer='';
        if(currentIndex < 9 ){
            currentIndex++;
            setCurrentAwnswers()
        }
        else{
            status.set('end')
        }
        
    }

</script>

<div class="details">
    <div class="details-category">
        <span>Category: { decodeURIComponent($questions[currentIndex].category) }</span>
    </div>

    <div class="details-time">
        <span> Time: { format($time) } </span>
    </div>
   
</div>

<p class='question'>{decodeURIComponent($questions[currentIndex].question)}</p>

<div class="answers-container">
    {#each currentAnswers as currentAnswer (currentAnswer)}
        <label>
            <input type=radio bind:group={userAnswer} name="answer" value={currentAnswer} class="answers">
                <span class={userAnswer == currentAnswer ? 'userAnswer' : 'otherAnswer'}>
                    {decodeURIComponent(currentAnswer)}
                </span>
        </label>
    {/each}
</div>

<div class="btn-container">
    <button disabled={userAnswer == '' ? true : false} type="button" on:click={checkQuestion}>
        {currentIndex < 9 ? 'Next Question' : 'Finish Quiz'}
    </button>  
</div>

<style>

    label {
        cursor: pointer;
        margin: 10px;
    }

    .details {
        display: flex;
        width: 800px;
        flex-direction: row;
        justify-content: space-between;
    }

    .details-category {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 400px;
        font-weight: 650px;
        font-size: 1.2em;
    }


    .details-time {
        display: flex;
        margin-right: 2px;
        justify-content: flex-end;
        align-items: center;
        width: 150px;
        font-weight: 400;
        font-size: 1.2em;
        
    }

    .question{
        font-weight: 500;
        font-size: 1.6em;
        font-style: italic;
    }

    .answers-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .answers {
        visibility:hidden;   
    }

    .otherAnswer{
        font-size: 1.5em;
        color: teal;
        background-color: whitesmoke;
        border: 2px teal solid;
        border-radius: 15px;
        padding: 5px;
    }

    .userAnswer{
        font-size: 1.5em;
        color: whitesmoke;
        background-color: teal;
        border:2px solid teal;
        border-radius: 15px;
        padding: 5px;
    }

    .btn-container{
        width: 600px;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
    }

    button{
        font-size: 1.2em;
        padding: 5px;
    }
    
</style>