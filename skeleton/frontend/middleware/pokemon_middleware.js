import {fetchAllPokemon, fetchOnePokemon, createPokemon} from '../util/api_util';
import {receiveAllPokemon, receiveOnePokemon, receivePokemon, receiveErrors} from '../actions/pokemon_actions';
import {REQUEST_ALL_POKEMON, REQUEST_ONE_POKEMON, CREATE_POKEMON, RECEIVE_ERRORS} from '../actions/pokemon_actions';
import {hashHistory} from 'react-router';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receiveOnePokemonSuccess = data => dispatch(receiveOnePokemon(data));
  const createPokemonSuccess = data => {
    dispatch(receivePokemon(data));
    hashHistory.push(`/pokemon/${data.id}`);
  };
  const receiveError = data => {
    dispatch(receiveErrors(data.responseText));
  };

  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);
    case REQUEST_ONE_POKEMON:
      fetchOnePokemon(action.id, receiveOnePokemonSuccess);
      return next(action);
    case CREATE_POKEMON:
      createPokemon(action.pokemonDetail, createPokemonSuccess, receiveError);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
