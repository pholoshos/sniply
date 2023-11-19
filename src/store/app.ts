// store.js
import { writable } from 'svelte/store';

// Initial state
const initialState = {
  forms: [],
  tables: [],
  appName: 'Svelte App',
  routes : [],
  userDetails: {},
  selected: null,
  currentContext: null,
  currentPage: 'home',
  baseUrl: 'https://api.example.com',
  data: {},
  preData: {},
  tempData: {},
  tasks: [],
  // Add more properties as needed
};

// Create a writable store with the initial state
export const appState = writable(initialState);

// Function to update the state
export const updateAppState = (newState) => {
  appState.set(newState);
};
