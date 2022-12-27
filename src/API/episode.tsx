import { API_EPISODE } from "./constant";

export const GetEpisode = async () => {
    const resp = await fetch(API_EPISODE);
    const characters = await resp.json()
    return characters
};