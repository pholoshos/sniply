// store.js
import { writable } from 'svelte/store';
import { loadConfig } from '../utils/loadConfig';

//Function to create a new, empty component
const createEmptyComponent = () => ({
  id: '',
  type: '',
  // ... other properties
});

const defaultProjectConfig =  {
  appName: "default",
  mode : "default",
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
      visibility : "hidden",
      pageLabel : "users",
      layout: "default",
      route: "/",
      components: [],
    },
    dashboard: {
      visibility : "hidden",
      pageLabel : "users",
      layout: "dashboard",
      route: "/dashboard",
      components: [],
    },
  },
}


  

// Initial state
const initialState = {
  forms: [],
  tables: [],
  appName: 'Svelte App',
  routes: [],
  userDetails: {},
  tempProjectConfig: defaultProjectConfig, 
  projectConfig: defaultProjectConfig,
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

// Function to delete a component from a page
export const deleteComponentFromPage = (pageId:any, componentId:any) => {
  appState.update((currentState) => {
    const updatedState :any= { ...currentState };

    // Find the specified page by ID
    const pageToUpdate = updatedState.projectConfig.pages[pageId];

    // Find the index of the component by ID within the page
    const componentIndex = pageToUpdate.components.findIndex(
      (component:any) => component.id === componentId
    );

    // Remove the component if found
    if (componentIndex !== -1) {
      pageToUpdate.components.splice(componentIndex, 1);
    }

    return updatedState;
  });
};



//page interface
export interface IPage {
  visibility? : boolean;
  layout?: string;
  route?: string;
  components?: any[];
}

// Function to add an empty page to projectConfig
export const addEmptyPage = (data) => {
  appState.update((currentState) => {
    const updatedState: any = { ...currentState };

    // Create a new, empty page
    const newEmptyPage = {
     ... data,
      layout: "default", // You can set the default layout or customize it as needed
      components: [],
    };

    // Add the new page to projectConfig
    updatedState.projectConfig.pages[addEmptyPage?.pageName] = newEmptyPage;

    return updatedState;
  });
};