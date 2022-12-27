import { API_CHARACTERS } from "../constants";

export const getCharacters = async () => {
    const resp = await fetch(API_CHARACTERS);
    const characters = await resp.json()
    return characters
};