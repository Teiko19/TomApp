import { API_CHARACTERS } from "./constant";

export const GetCharacters = async () => {
    const resp = await fetch(API_CHARACTERS);
    const characters = await resp.json()
    return characters
};