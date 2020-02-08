import React from 'react';
import { connect } from 'react-redux';
import Add from './Add';
import { updateNewCaseAC, addCaseAC } from '../../redux/casesReducer';

let mapStateToProps = (state) => {
    return {
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addCase: () => {
          dispatch(addCaseAC());
        },
        updateNewCase: (newCase) => {
            dispatch(updateNewCaseAC(newCase));
        }
    }
}
const AddContainer = connect(mapStateToProps, mapDispatchToProps)(Add)

export default AddContainer;