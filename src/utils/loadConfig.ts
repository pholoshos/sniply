export const loadConfig = async () => {
    const response = await fetch(`/svelteflow.config.json`);
    const data = await response.json();
    return data;
}