import { create } from 'apisauce'

export const baseUrl = 'https://ola-api.onrender.com';

// define the api
export const api = create({
  baseURL: 'https://ola-api.onrender.com/splearn',
  headers: { Accept: 'application/vnd.github.v3+json' },
})

export const loginApi = create({
  baseURL: 'https://ola-api.onrender.com',
  headers: { Accept: 'application/vnd.github.v3+json' },
})

export const generalApi = create({
  baseURL: 'https://ola-api.onrender.com',
  headers: { Accept: 'application/vnd.github.v3+json' },
})