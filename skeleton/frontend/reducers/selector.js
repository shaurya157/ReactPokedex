import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  return values(state.pokemon);
};

export const selectOnePokemon = (state) => {
  return values(state.pokemonDetail);
};

export const selectPokemonItem = ({pokemonDetail}, itemId) => {
  let foundItem = pokemonDetail.items.find(item => item.id == itemId);

  return foundItem || {};
};
