import {connect} from 'react-redux';
import ItemDetail from './item_detail';

const mapStateToProps = (props, ownProps) => ({
  item: ownProps.params.itemId
});

export default connect(
  mapStateToProps
)(ItemDetail);
