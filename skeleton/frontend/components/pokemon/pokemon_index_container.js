import {connect} from 'react-redux';
import {selectAllPokemon} from '../../reducers/selector';
import {PokemonIndex} from './pokemon_index';
import {requestAllPokemon} from '../../actions/pokemon_actions';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state),
  loading: state.loading
});



export default connect(
  mapStateToProps
)(PokemonIndex);
