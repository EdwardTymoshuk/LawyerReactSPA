import React from 'react';
import { connect } from 'react-redux';
import { setCases } from '../../redux/casesReducer';
import Cases from './Cases';
import * as axios from 'axios';

class CasesContainer extends React.Component {
    componentDidMount() {
        if (this.props.cases.length === 0) {
            axios.get('http://localhost:3000/cases').then(response => {
                this.props.setCases(response.data);
            }
            )
        }
    }
    render() {
        return <Cases cases={this.props.cases} />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(CasesContainer)