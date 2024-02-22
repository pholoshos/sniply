import { create } from 'apisauce'
import { loadConfig } from './loadConfig';

export const baseUrl = 'https://ola-api.onrender.com';

const baseApiUrl =  ""; 

console.log('baseApiUrl', baseApiUrl);

// define the api
export const api = create({
  baseURL: baseApiUrl ,
  headers: { Accept: 'application/vnd.github.v3+json' },
})

export const loginApi = create({
  baseURL: baseApiUrl,
  headers: { Accept: 'application/vnd.github.v3+json' },
})

export const generalApi = create({
  baseURL: baseApiUrl,
  headers: { Accept: 'application/vnd.github.v3+json' },
})

export const  setBaseUrl = (url: string) => {
  api.setBaseURL(url);
  loginApi.setBaseURL(url);
  generalApi.setBaseURL(url);
}