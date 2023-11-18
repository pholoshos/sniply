export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/Customers": [3],
		"/Rooms": [4],
		"/appointments": [5],
		"/billing": [6],
		"/dashboard": [7],
		"/default": [8],
		"/gettingStarted": [9],
		"/join/[[company]]": [10],
		"/landing": [11],
		"/profile": [12],
		"/reset-password": [13],
		"/settings": [14],
		"/sign-in": [15],
		"/sign-up/[[company]]": [16],
		"/stuff": [17],
		"/updates": [18]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';