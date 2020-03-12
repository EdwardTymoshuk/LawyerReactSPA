import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Case from '../Case/Case';
import {getCaseElement} from './../../../redux/caseElementReducer';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class CaseContainer extends React.Component {
    componentDidMount() {
        let caseId = this.props.match.params.caseId;
        this.props.getCaseElement(caseId);
    }
    render() {
        return (
            <Case {...this.props} caseElement={this.props.caseElement} />
        )
    }
}
let mapStateToProps = (state) => ({
    caseElement: state.caseElementPage.caseElement
})

export default compose(connect(mapStateToProps, {getCaseElement}), withRouter)(CaseContainer);
