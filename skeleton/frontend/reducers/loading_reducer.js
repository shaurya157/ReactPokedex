import { REQUEST_ALL_POKEMON, REQUEST_ONE_POKEMON, RECEIVE_ONE_POKEMON, CREATE_POKEMON, RECEIVE_POKEMON, RECEIVE_ERRORS } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const defaultState = {
  loading: false
};

const LoadingReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let newState = merge({}, state);

  switch (action.type) {
    case REQUEST_ONE_POKEMON:
      return true;
    case REQUEST_ALL_POKEMON:
      return true;
    case CREATE_POKEMON:
      return true;
    default:
      return false;
  }

};

export default LoadingReducer;
