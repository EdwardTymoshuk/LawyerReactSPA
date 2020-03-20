import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Case from '../Case/Case';
import {getCaseElement, updateCaseElement} from './../../../redux/caseElementReducer';
import {deleteCaseElement} from './../../../redux/casesReducer';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class CaseContainer extends React.Component {
    componentDidMount() {
        let caseId = this.props.match.params.caseId;
        this.props.getCaseElement(caseId);
    }
    render() {
        return (
            <Case {...this.props}
             caseElement={this.props.caseElement} 
             updateCaseElement={this.props.updateCaseElement} 
             deleteCaseElement={this.props.deleteCaseElement}/>
        )
    }
}
let mapStateToProps = (state) => ({
    caseElement: state.caseElementPage.caseElement,
    updateCaseElement: state.caseElementPage.updateCaseElement,
    deleteCaseElement: state.caseElementPage.deleteCaseElement
})

export default compose(withAuthRedirect, connect(mapStateToProps, {getCaseElement, updateCaseElement, deleteCaseElement}), withRouter)(CaseContainer);
