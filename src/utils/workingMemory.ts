
import { getData, storeData } from "./localStorage"

export const storeWorkingMemory  = (config:any)=>{
    storeData('workingMemory', JSON.stringify(config));
}

export const getWorkingMemory = ()=>{
    const config = getData('workingMemory');
    return config;
}

