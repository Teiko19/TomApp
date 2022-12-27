import { API_LOCATION } from "./constant";

export const GetLocation = async () => {
    const resp = await fetch(API_LOCATION);
    const characters = await resp.json()
    return characters
};