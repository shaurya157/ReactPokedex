import React from 'react';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      attack: "",
      defense: "",
      poke_type: "",
      image_url: "",
      moves: {}
    };

    this.types = [
      "fire",
      "electric",
      "normal",
      "ghost",
      "psychic",
      "water",
      "bug",
      "dragon",
      "grass",
      "fighting",
      "ice",
      "flying",
      "poison",
      "ground",
      "rock",
      "steel",
      'dark',
      'fairy'
    ];

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.getErrors = this.getErrors.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createPokemon(this.state);
  }

  update(property) {
    if(property === 'move'){
      return e => this.setState({
        ['moves']: Object.assign({}, this.state.moves, {[e.target.id]: e.target.value})
      });
      } else {
      return e => this.setState({[property]: e.target.value});
    }
    }

  getErrors(){
    if(this.props.errors.length > 0) {
      let arr = this.props.errors.slice(1, -1).split(',');
      return arr.map((el, idx) => <li key={idx}>{el}</li>);
    }
  }

  render(){
    return (
      <form className="pokemon-form" onSubmit={this.handleSubmit}>
        <img src="http://aa-pokedex.herokuapp.com/assets/pokemon-logo.png"></img>
        <input placeholder="Name"
          value={this.state.name}
          type="text"
          onChange={this.update("name")} />

        <input value={this.state.image_url}
          type="text" name="image_url"
          onChange={this.update("image_url")}
          placeholder="Image URL" />

        <select value={this.state.type} onChange={this.update("poke_type")}>
          {this.types.map((type, idx) => (<option key={idx}>{type}</option>))}
        </select>

        <input value={this.state.attack} type="text"
          name="attack"
          onChange={this.update("attack")}
          placeholder="Attack" />

        <input value={this.state.defense} type="text"
          name="defense"
          onChange={this.update("defense")}
          placeholder="Defense" />

        <input value={this.state.move}
          type="text" name="move1"
          onChange={this.update("move")}
          placeholder="Move1" />

        <input value={this.state.move}
          type="text" name="move2"
          onChange={this.update("move")}
          placeholder="Move2" />

        <button>Create Pokemon</button>
        <ul>{this.getErrors()}</ul>

      </form>
    );

  }
}

export default PokemonForm;
