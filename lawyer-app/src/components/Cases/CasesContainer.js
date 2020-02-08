import React from 'react';
import { connect } from 'react-redux';
import Cases from './Cases';
import { setCases } from '../../redux/casesReducer';

let mapStateToProps = (state) => {
    return {
        cases: state.casesPage.cases
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCases: (cases) => {
            dispatch(setCases(cases));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cases)