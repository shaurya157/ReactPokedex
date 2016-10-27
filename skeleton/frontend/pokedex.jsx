import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";
import {requestAllPokemon, requestOnePokemon} from './actions/pokemon_actions';

window.requestAllPokemon = requestAllPokemon;
window.requestOnePokemon = requestOnePokemon;


document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore();
    window.store = store;
    const rootEl = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, rootEl);
});
