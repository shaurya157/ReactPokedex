import { RECEIVE_ONE_POKEMON, RECEIVE_POKEMON, RECEIVE_ERRORS } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const defaultState = {
  moves: [],
  items: [],
  errors: []
};

const PokemonDetailReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let newState = merge({}, state);
  
  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
      return action.pokemonDetail;
    case RECEIVE_POKEMON:
      return action.pokemonDetail;
    case RECEIVE_ERRORS:
      newState["errors"] = action.errors;
      console.log(newState);
      return newState;
    default:
      return state;
  }

};

export default PokemonDetailReducer;
