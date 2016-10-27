import {fetchAllPokemon, fetchOnePokemon} from '../util/api_util';
import {receiveAllPokemon, receiveOnePokemon} from '../actions/pokemon_actions';
import {REQUEST_ALL_POKEMON} from '../actions/pokemon_actions';
import {REQUEST_ONE_POKEMON} from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receiveOnePokemonSuccess = data => dispatch(receiveOnePokemon(data));

  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);
    case REQUEST_ONE_POKEMON:
      fetchOnePokemon(action.id, receiveOnePokemonSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
