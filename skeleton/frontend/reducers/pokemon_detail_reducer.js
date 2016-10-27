import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const defaultState = {
  moves: []
};

const PokemonDetailReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
      return action.pokemonDetail;
    default:
      return state;
  }

};

export default PokemonDetailReducer;
