import { connect } from 'react-redux';
import Add from './Add';
import { updateNewCase, addCase } from '../../redux/casesReducer';

let mapStateToProps = (state) => {
    return {
    }
}

const AddContainer = connect(mapStateToProps, {addCase, updateNewCase})(Add)

export default AddContainer;