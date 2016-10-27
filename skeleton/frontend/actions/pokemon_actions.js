export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const REQUEST_ALL_POKEMON = "REQUEST_ALL_POKEMON";

// all pokemon
export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});
export const requestAllPokemon = () => ({
  type: REQUEST_ALL_POKEMON
});

// finding one pokemon
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

// creating a new pokemon
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

export const createNewPokemon = (pokemonDetail) => ({
  type: CREATE_POKEMON,
  pokemonDetail
});

export const receivePokemon = pokemonDetail => ({
  type: RECEIVE_POKEMON,
  pokemonDetail
});

// error handling
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
