

export const loadConfig = async () => {
    const url = '';
    const response = await fetch(`${url}/sniply.config.json`);
    const data = await response.json();
    return data;
}