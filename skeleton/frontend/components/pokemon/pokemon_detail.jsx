import React from 'react';

export const PokemonDetail = ({pokemonDetail}) => {
  console.log(pokemonDetail);
  return (
    <section className="pokemon-detail">
      <h1>{pokemonDetail.name}</h1>
      <img src={pokemonDetail.image_url}></img>
    </section>
  );
};
