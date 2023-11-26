import { create } from "apisauce";

const baseUrl = 'https://ola-appApi.onrender.com';

export const appApi = create({baseURL: baseUrl});

export const setAppappApiHeader = (key: string, value: string) => {
    appApi.setHeader(key, value);
}

export const removeAppappApiHeader = (key: string) => {
    appApi.deleteHeader(key);
}

export let setAppappApiBaseUrl = (url: string) => {
    appApi.setBaseURL(url);
}

//generic method for fetching data from a service using appApiSauce
export const fetchData = async (url: string, params  ={}) => {
    try {
        const response = await appApi.get(url, params);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

//generic method for posting data to a service using appApiSauce
export const postData = async ({url}: any, params: any) => {
    try {
        const response = await appApi.post(url, params);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

//generic method for updating data to a service using appApiSauce
export const updateData = async ({url}: any, params: any) => {
    try {
        const response = await appApi.put(url, params);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

//generic method for deleting data from a service using appApiSauce
export const deleteData = async ({url}: any, params: any) => {
    try {
        const response = await appApi.delete(url, params);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

//generic method for patching data to a service using appApiSauce
export const patchData = async ({url}: any, params: any) => {
    try {
        const response = await appApi.patch(url, params);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

//generic method for head data to a service using appApiSauce
export const headData = async ({url}: any, params: any) => {
    try {
        const response = await appApi.head(url, params);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

//one generaric method for all http methods
export const httpMethod = async ({url}: any, params: any, method: string) => {
    try {
        const response = await appApi[method](url, params);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export const getCollectionUrl = (collectionName: string,services:any) => {
    let service = services?.find((serv:any) => serv?.name === collectionName);
    return service?.url;
}

