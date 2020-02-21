import { connect } from 'react-redux';
import Add from './Add';
import { updateNewCase, addCase } from '../../redux/casesReducer';

let mapStateToProps = (state) => {
    return {
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addCase: () => {
          dispatch(addCase());
        },
        updateNewCase: (newCase) => {
            dispatch(updateNewCase(newCase));
        }
    }
}
const AddContainer = connect(mapStateToProps, mapDispatchToProps)(Add)

export default AddContainer;