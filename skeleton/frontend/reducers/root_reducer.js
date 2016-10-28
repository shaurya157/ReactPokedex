import {combineReducers} from 'redux';
import PokemonReducer from './pokemon_reducer';
import ErrorReducer from './error_reducer';
import PokemonDetailReducer from './pokemon_detail_reducer';
import LoadingReducer from './loading_reducer';

const RootReducer = combineReducers({
  pokemon: PokemonReducer,
  pokemonDetail: PokemonDetailReducer,
  errors: ErrorReducer,
  loading: LoadingReducer
});
 export default RootReducer;
