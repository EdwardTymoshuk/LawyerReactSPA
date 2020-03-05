import React from 'react';
import { connect } from 'react-redux';
import { setCases, toggleIsFetching, getCases } from '../../redux/casesReducer';
import Cases from './Cases';
import Preloader from '../common/Preloader';

class CasesContainer extends React.Component {
    componentDidMount() {
       this.props.getCases();
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

export default connect(mapStateToProps, {setCases, toggleIsFetching, getCases})(CasesContainer)