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

export const getAppContext = () => {
    appContext.subscribe((value: any) => {
        return value;
    });
}

export const updateAppContext = (data: any) => {
    appContext.update((currentState) => ({
        ...currentState,
        properties: [
            ...currentState.properties,
            data,
        ],
    }));
}

export default appContext;
