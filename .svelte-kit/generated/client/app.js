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
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/Customers": [3],
		"/Rooms": [4],
		"/appointments": [5],
		"/billing": [6],
		"/build": [7],
		"/dashboard": [8],
		"/default": [9],
		"/gettingStarted": [10],
		"/join/[[company]]": [11],
		"/landing": [12],
		"/pages/[slug]": [13],
		"/profile": [14],
		"/reset-password": [15],
		"/settings": [16],
		"/sign-in": [17],
		"/sign-up/[[company]]": [18],
		"/stuff": [19],
		"/updates": [20]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';