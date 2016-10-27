export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const REQUEST_ALL_POKEMON = "REQUEST_ALL_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});
export const requestAllPokemon = () => ({
  type: REQUEST_ALL_POKEMON
});

export const RECEIVE_ONE_POKEMON = "RECEIVE_ONE_POKEMON";
export const REQUEST_ONE_POKEMON = "REQUEST_ONE_POKEMON";

export const receiveOnePokemon = pokemonDetail => ({
  type: RECEIVE_ONE_POKEMON,
  pokemonDetail
});

export const requestOnePokemon = (id) => ({
  type: REQUEST_ONE_POKEMON,
  id
});
