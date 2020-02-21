import React from 'react';
import { connect } from 'react-redux';
import { setCases, toggleIsFetching } from '../../redux/casesReducer';
import Cases from './Cases';
import * as axios from 'axios';
import Preloader from '../common/Preloader';


class CasesContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get('http://localhost:3000/cases').then(response => {
            this.props.toggleIsFetching(false);
            this.props.setCases(response.data);
        }
        )
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader />  : null}
            <Cases cases={this.props.cases}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        cases: state.casesPage.cases,
        isFetching: state.casesPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         setCases: (cases) => {
//             dispatch(setCases(cases));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetching(isFetching));
//         }
//     }
// }

export default connect(mapStateToProps, {setCases, toggleIsFetching})(CasesContainer)