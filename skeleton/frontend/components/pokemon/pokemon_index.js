import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';

export const PokemonIndex = ({pokemon, children}) => {

  let pokedex = pokemon.map(poke => (
      <PokemonIndexItem key={poke.id} pokemon={poke} />
  ));

  return (
    <section className="pokedex">
      <ol className='poke-list'>
        {pokedex}
      </ol>

      {children}
  </section>
);
};
