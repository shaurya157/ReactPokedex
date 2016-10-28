import React from 'react';
import {withRouter} from 'react-router';

const PokemonDetail = ({pokemonDetail, children, router, loading}) => {

  const handleClick = (url) => event => {
    router.push(url);
  };
  if (loading) return (<div className="loader"></div>);
  else {return (
    <section className="pokemon-detail">
      <h1>{pokemonDetail.name}</h1>
      <img src={pokemonDetail.image_url}></img>
      <ul>
        <li>{pokemonDetail.attack}</li>
        <li>{pokemonDetail.defense}</li>
        <li>{pokemonDetail.poke_type}</li>
        <li>{pokemonDetail.moves.join(', ')}</li>
        <ul>
          {pokemonDetail.items.map((el, idx) => <li key={el.id} onClick={handleClick(`pokemon/${pokemonDetail.id}/item/${el.id}`)}><img src={el.image_url}></img></li>)}
        </ul>
      </ul>
      {children}


    </section>
  );}
};

export default withRouter(PokemonDetail);
