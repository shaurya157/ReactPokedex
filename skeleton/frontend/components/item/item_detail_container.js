import {connect} from 'react-redux';
import {ItemDetail} from './item_detail';
import {selectPokemonItem} from '../../reducers/selector';

const mapStateToProps = (props, ownProps) => ({
  item: selectPokemonItem(props, ownProps.params.itemId)
});

// debugger;
export default connect(
  mapStateToProps
)(ItemDetail);
