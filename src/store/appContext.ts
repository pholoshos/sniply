// src/store/counter.js
import { writable } from 'svelte/store';

// Create a writable store
const initial: any = {
    properties: [
        {
            name: "default",
            value: "default",
            description: "default",
            type: "default"
        },
    ]
}

export const appContext = writable(initial);

//for the app
export const getAppContext = () => {
    appContext.subscribe((value: any) => {
        return value;
    });
}

//for the app
export const updateAppContext = (data: any) => {
    appContext.update((currentState) => ({
        ...currentState,
        properties: [
            ...currentState.properties,
            data,
        ],
    }));
}

//for the app
export const setAppContext = (data: any) => {
    appContext.update((currentState) => ({
        ...currentState,
        properties:data,}
    ));
}

//for  general components
export const updateComponentsContext = (data: any) => {
    appContext.update((currentState) => ({
        ...currentState,
        componentsContext: [
            ...currentState.componentsContext,
            data,
        ],
    }));
}

//for tables
export const updateTableContext = (data: any) => {
    appContext.update((currentState) => ({
        ...currentState,
        tableContext: [
            ...currentState.tableContext,
            data,
        ],
    }));
}

export default appContext;
