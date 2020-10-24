import { writable, readable } from 'svelte/store'

export const baseUrl = readable('https://opentdb.com/api.php?amount=10')
export const type = readable('&type=multiple')
export const encode = readable('&encode=url3986')
export const category = writable('&category=')
export const difficulty = writable('&difficulty=')
export const url = writable('')
export const questions = writable({});
export const totalCorrectAnswers = writable(0)
export const userAnswers = writable([]);
export const correctAnswers = writable([]);
export const status = writable('stopped')
export const time = writable(0);
