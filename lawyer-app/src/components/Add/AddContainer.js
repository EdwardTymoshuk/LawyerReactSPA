import React from 'react';
import { connect } from 'react-redux';
import Add from './Add';
import { updateNewCaseAC, addCaseAC } from '../../redux/casesReducer';

const AddContainer = (props) => {

    let addCase = () => {
        props.store.dispatch(addCaseAC());
    }
    let onCaseChange = (newCase) => {
        props.store.dispatch(updateNewCaseAC(newCase));
    }
    let setId = () => {
        return props.store.getState().casesReducer.cases.length + 1;
    }

    return (
        <Add updateNewCase={onCaseChange}
            addCase={addCase}
            onHide={props.onHide}
            show={props.show}
            setId={setId}/>
            
    )
}

export default AddContainer;