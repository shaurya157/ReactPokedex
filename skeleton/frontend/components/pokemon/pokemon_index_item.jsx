import React from 'react';
import {withRouter} from 'react-router';

const PokemonIndexItem = (props) => {

  const handleClick = url => event => props.router.push(url);

  return(
    <li className='single-pokemon'
      onClick= {handleClick(`/pokemon/${props.pokemon.id}`)}>
      <img src={props.pokemon.image_url}></img>
      {props.pokemon.name}
    </li>
  );
};

export default withRouter(PokemonIndexItem);
