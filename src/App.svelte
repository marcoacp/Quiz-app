<script>
	import Start from './components/Start.svelte'
	import Quiz from './components/Quiz.svelte'
	import EndQuiz from './components/EndQuiz.svelte'
	import Error from './components/Error.svelte'
	import { status } from './components/stores'
</script>

<main>
	<h1 class='quiz-title'>QUIZ</h1>

	{#if $status == 'stopped'}
		<Start></Start>
	{:else if $status == 'running'}
		<Quiz></Quiz>
	{:else if $status == 'error'}
		<Error></Error>	
	{:else}
		<EndQuiz></EndQuiz>
	{/if}	
				
</main>

<style>
	main {
		text-align: center;
		padding: 0.3em;
		width: 800px;
		height: 600px;
		border:1px solid teal;
		border-radius: 5%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;
	}

	.quiz-title {
		color: teal;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 300;
		margin-bottom: 20px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>