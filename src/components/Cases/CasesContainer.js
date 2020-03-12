import React from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import { getCases } from '../../redux/casesReducer';
import Cases from './Cases';
import Preloader from '../common/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class CasesContainer extends React.Component {
    componentDidMount() {
        console.log(this.props.cases)
       if (!this.props.cases.length) this.props.getCases();
    }
     render() {
        return <>
            {this.props.isFetching ? <Preloader />  : null }
            <Cases cases={this.props.cases} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        cases: state.casesPage.cases,
        isFetching: state.casesPage.isFetching,
    }
}

export default compose(connect(mapStateToProps, {getCases}))(CasesContainer);