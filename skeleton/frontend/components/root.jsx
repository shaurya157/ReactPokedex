import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from "./pokemon/pokemon_index_container";
import PokemonDetailContainer from "./pokemon/pokemon_detail_container";
import PokemonFormContainer from "./pokemon_form/pokemon_form_container";
import ItemDetailContainer from "./item/item_detail_container";
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import {requestAllPokemon, requestOnePokemon} from '../actions/pokemon_actions';

const Root = ({ store }) => {
  const requestOnEnter = () => {
       store.dispatch(requestAllPokemon());
   };

   const requestSinglePokemonOnEnter = (nextState) => {
     store.dispatch(requestOnePokemon(nextState.params.pokemonId));
   };
  return (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={PokemonIndexContainer} onEnter={requestOnEnter}>
        <IndexRoute component={PokemonFormContainer}/>
        <Route path="pokemon/:pokemonId" component={PokemonDetailContainer} onEnter={requestSinglePokemonOnEnter} >
          <Route path='item/:itemId' component={ItemDetailContainer}/>
        </Route>
      </Route>
    </Router>
  </Provider>
);};

export default Root;
