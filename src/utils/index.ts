import { create } from 'apisauce'
import { loadConfig } from './loadConfig';

export const baseUrl = 'https://ola-api.onrender.com';

const baseApiUrl = await loadConfig()?.then((config) => {
  return config.apiBaseUrl;
}) 

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