// src/store/counter.js
import { writable } from 'svelte/store';

// Initial value


// Create a writable store
const initial: any = {} 
const initialArray : any = [];
const project = writable(initial);
export const allProjects = writable(initialArray);
export const selectedProject = writable(initial)

export const getProject = () => {
    project.subscribe((value:any) => {
        return value;
    });
}

export const updateProject = (_user:any)=>{
    project.update(_user)
}

export const updateProjects = (data:any)=>{
    allProjects.update(()=>data)
}

export default project;
