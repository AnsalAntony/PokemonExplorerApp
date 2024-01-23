import axios from "axios";
import { API_BASE_URL,appSuburls } from "../config";


const baseURL = API_BASE_URL;

const apiService = axios.create({
  baseURL,
  timeout: 5000,
});

export const getPokemonList = (limit = 50, offset = 0) => {  
  console.log("ansal***",limit,offset)
  return apiService.get(`${appSuburls.pokemonList}${limit}&offset=${offset}`);
};

export const pokemonDetails = (pokemonId = 10) => {
  return apiService.get(`${appSuburls.pokemon}${pokemonId}`);
};
