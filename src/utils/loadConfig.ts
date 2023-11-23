export const loadConfig = async () => {
    const response = await fetch(`/sniply.config.json`);
    const data = await response.json();
    return data;
}