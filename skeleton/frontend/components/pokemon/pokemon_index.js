import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';

export const PokemonIndex = ({pokemon, children}) => {
  let pokedex = pokemon.map((poke, idx) => (
      <PokemonIndexItem key={poke.id} pokemon={poke} idx={idx + 1}/>
  ));

  return (
    <section className="pokedex">
      <ul className='poke-list'>
        {pokedex}
      </ul>

      {children}
  </section>
);
};
