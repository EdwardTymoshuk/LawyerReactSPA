import React from 'react';
import { connect } from 'react-redux';
import { setCases, toggleIsFetching } from '../../redux/casesReducer';
import Cases from './Cases';
import Preloader from '../common/Preloader';
import {casesAPI} from '../../api/api';

class CasesContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        casesAPI.getCases().then(data => {
            this.props.toggleIsFetching(false);
            this.props.setCases(data);
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

export default connect(mapStateToProps, {setCases, toggleIsFetching})(CasesContainer)