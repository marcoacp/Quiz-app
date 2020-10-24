import { onDestroy } from 'svelte'
import { time, totalCorrectAnswers, questions, status, userAnswers, correctAnswers } from './stores'

export const categories = [
    {
        id: 9,
        name: "General Knowledge"
    },
    {
        id: 10,
        name: "Entertainment: Books"
    },
    {
        id: 11,
        name: "Entertainment: Film"
    },
    {
        id: 12,
        name: "Entertainment: Music"
    },
    {
        id: 13,
        name: "Entertainment: Musicals & Theatres"
    },
    {
        id: 14,
        name: "Entertainment: Television"
    },
    {
        id: 15,
        name: "Entertainment: Video Games"
    },
    {
        id: 16,
        name: "Entertainment: Board Games"
    },
    {
        id: 17,
        name: "Science & Nature"
    },
    {
        id: 18,
        name: "Science: Computers"
    },
    {
        id: 19,
        name: "Science: Mathematics"
    },
    {
        id: 20,
        name: "Mythology"
    },
    {
        id: 21,
        name: "Sports"
    },
    {
        id: 22,
        name: "Geography"
    },
    {
        id: 23,
        name: "History"
    },
    {
        id: 24,
        name: "Politics"
    },
    {
        id: 25,
        name: "Art"
    },
    {
        id: 26,
        name: "Celebrities"
    },
    {
        id: 27,
        name: "Animals"
    },
    {
        id: 28,
        name: "Vehicles"
    },
    {
        id: 29,
        name: "Entertainment: Comics"
    },
    {
        id: 30,
        name: "Science: Gadgets"
    },
    {
        id: 31,
        name: "Entertainment: Japanese Anime & Manga"
    },
    {
        id: 32,
        name: "Entertainment: Cartoon & Animations"
    }
];

export const difficulties = [
    {
        level: "easy",
        text: "Easy"
    },
    {
        level: "medium",
        text: "Medium"
    },
    {
        level: "hard",
        text: "Hard"
    },

];

export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

export function timer(callback, milliseconds) {
	const interval = setInterval(callback, milliseconds);

	onDestroy(() => {
		clearInterval(interval);
	});
}

export function format(secs){
        
    let time = new Date(0);
    time.setSeconds(secs); 
    let fomatedTime = time.toISOString().substr(14, 5);
    
    return fomatedTime;
}

export function playAgain(){
    status.set('stopped');
    time.set(0);
    totalCorrectAnswers.set(0);
    questions.set()
    userAnswers.set([]);
    correctAnswers.set([]);
}