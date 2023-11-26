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
export const fetchData = async (service: any, params: any) => {
    try {
        const response = await appApi.get('', params);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

//generic method for posting data to a service using appApiSauce
export const postData = async (service: any, params: any) => {
    try {
        const response = await appApi.post('', params);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

//generic method for updating data to a service using appApiSauce
export const updateData = async (service: any, params: any) => {
    try {
        const response = await appApi.put('', params);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

//generic method for deleting data from a service using appApiSauce
export const deleteData = async (service: any, params: any) => {
    try {
        const response = await appApi.delete('', params);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

//generic method for patching data to a service using appApiSauce
export const patchData = async (service: any, params: any) => {
    try {
        const response = await appApi.patch('', params);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

//generic method for head data to a service using appApiSauce
export const headData = async (service: any, params: any) => {
    try {
        const response = await appApi.head('', params);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}
