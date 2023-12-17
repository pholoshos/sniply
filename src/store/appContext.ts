// src/store/counter.js
import { writable } from 'svelte/store';

// Initial value


// Create a writable store
const initial: any = {} 

export const appContext = writable(initial);

export const getAppContext = () => {
    appContext.subscribe((value:any) => {
        return value;
    });
}

export const updateAppContext = (_user:any)=>{
    appContext.update(_user)
}

export default appContext;
