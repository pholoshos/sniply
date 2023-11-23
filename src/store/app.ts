// store.js
import { writable } from 'svelte/store';

//Function to create a new, empty component
const createEmptyComponent = () => ({
  id: '',
  type: '',
  // ... other properties
});


// Initial state
const initialState = {
  forms: [],
  tables: [],
  appName: 'Svelte App',
  routes: [],
  userDetails: {},
  projectConfig: {
    appName: "MySvelteFlowApp",
    layouts: {
      default: {
        background: "#f0f0f0",
      },
      dashboard: {
        background: "#e6e6e6",
      },
    },
    pages: {
      home: {
        layout: "default",
        route: "/",
        components: [],
      },
      dashboard: {
        layout: "dashboard",
        route: "/dashboard",
        components: [],
      },
    },
  },
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

// Function to update projectConfig
export const updateProjectConfig = (newConfig:any) => {
  appState.update((currentState) => ({
    ...currentState,
    projectConfig: {
      ...currentState.projectConfig,
      ...newConfig,
    },
  }));
};

// Create a writable store with the initial state
export const appState = writable(initialState);

// Function to update the state
export const updateAppState = (newState:any) => {
  appState.set(newState);
};



// Function to update projectConfig
export const updateComponentInConfig = (pageId:any, componentId:any, newComponentData:any) => {
  appState.update((currentState) => {
    const updatedState:any = { ...currentState };

    // Find the specified page by ID
    const pageToUpdate = updatedState?.projectConfig?.pages[pageId];

    // Find the specified component by ID within the page
    const componentToUpdate = pageToUpdate.components.find(
      (component:any) => component.id === componentId
    );

    // Update the component data if found
    if (componentToUpdate) {
      Object.assign(componentToUpdate, newComponentData);
    }

    return updatedState;
  });
};

// Function to add an empty component to a page
export const addComponentToPage = (pageId:any,component:any) => {
  appState.update((currentState) => {
    const updatedState:any = { ...currentState };

    // Find the specified page by ID
    const pageToUpdate = updatedState.projectConfig.pages[pageId];

    // Add a new, empty component to the page
    // pageToUpdate.components.push(createEmptyComponent());
    pageToUpdate.components.push(component);

    return updatedState;
  });
};