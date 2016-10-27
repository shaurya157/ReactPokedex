import {connect} from 'react-redux';
import {createNewPokemon} from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';

const mapStateToProps = ({errors}) => ({
  errors
});
const mapDispatchToProps = dispatch => ({

  createPokemon: (e) => dispatch(createNewPokemon(e))
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonForm);
