export const setAuthToken = (token: string) => {
    if (typeof window !== 'undefined') {
        window.localStorage.setItem('Token', token);
    }
}

export const getToken = () => {
    if (typeof window !== 'undefined') {
        return window.localStorage?.getItem('Token');
    }
}

export const clearToken = () => {
    if (typeof window !== 'undefined') {
        window.localStorage.clear();
    }
}

export const storeData = (type: string, data: string) => {
    if (typeof window !== 'undefined') {
        window.localStorage.setItem(type, data);
    }
}

export const getData = (type: string) => {
    if (typeof window !== 'undefined') {
        const data = window.localStorage?.getItem(type);
        return JSON.parse(!!data ? data : '{}');
    }
}
