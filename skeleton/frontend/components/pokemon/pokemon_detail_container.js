import {connect} from 'react-redux';
import {selectOnePokemon} from '../../reducers/selector';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = ({pokemonDetail, loading}) => ({
  pokemonDetail,
  loading
});

export default connect(
  mapStateToProps
)(PokemonDetail);
