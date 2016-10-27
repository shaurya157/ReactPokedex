import React from 'react';

export const PokemonDetail = ({pokemonDetail, children}) => {
  // console.log(pokemonDetail);
  return (
    <section className="pokemon-detail">
      <h1>{pokemonDetail.name}</h1>
      <img src={pokemonDetail.image_url}></img>
      <ul>
        <li>{pokemonDetail.attack}</li>
        <li>{pokemonDetail.defense}</li>
        <li>{pokemonDetail.poke_type}</li>
        <li>{pokemonDetail.moves.join(', ')}</li>
      </ul>
      {children}


    </section>
  );
};
