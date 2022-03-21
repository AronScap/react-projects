const API_base = "https://pokeapi.co/api/v2/";

const pokemonFetch = async (endpoint) => {
    const request = await fetch(`${API_base}${endpoint}`);
    const requestJson = await request.json();
    console.log(requestJson);
    return requestJson;
}

export default{
    getPokemonsList: async (limit,offset) => {
        return await pokemonFetch(`pokemon/?limit=${limit}&offset=${offset}`);
    },
    getPokemonInfo: async (pokemonID) => {
        let info = {};
        if(pokemonID){
            info = await pokemonFetch(`pokemon/${pokemonID}`);
        }
        return info;
    },
    getPokemonSpeciesInfo: async (pokemonID) => {
        let info = {};
        if(pokemonID){
            info = await pokemonFetch(`pokemon-species/${pokemonID}`);
        }
        return info;
    },
}