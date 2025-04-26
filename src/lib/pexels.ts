import axios from "axios";

export const pexelsApi = axios.create({
    baseURL: import.meta.env.VITE_API_PEXELS_API_URL,
    headers: {
        Authorization: import.meta.env.VITE_API_PEXELS_KEY!,
    },
});
