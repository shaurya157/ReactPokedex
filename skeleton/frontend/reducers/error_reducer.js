import { RECEIVE_ERRORS } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const defaultState = {
  errors: []
};

const ErrorReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      newState = action.errors;
      return newState;
    default:
      return state;
  }

};

export default ErrorReducer;
