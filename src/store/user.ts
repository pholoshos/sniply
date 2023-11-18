// src/store/counter.js
import { writable } from 'svelte/store';

// Initial value


// Create a writable store
const initial: any = {} 
const user = writable(initial);

export const getUser = () => {
    user.subscribe((value:any) => {
        return value;
    });
}

export const updateUser = (_user:any)=>{
    user.update(_user)
}

export default user;
