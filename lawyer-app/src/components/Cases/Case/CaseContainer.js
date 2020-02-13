import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';
import Case from '../Case/Case';
import setCaseElement from './../../../redux/caseElementReducer';

class CaseContainer extends React.Component {
    componentDidMount() {
        let caseId = this.props.match.params.caseId;
        axios.get('http://localhost:3000/caseElement/' + caseId).then(response => {
            this.props.setCaseElement(response.data);
            
        })
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

let WithUrlDataCaseDocumentContainer = withRouter(CaseContainer);

export default connect(mapStateToProps, {setCaseElement})(WithUrlDataCaseDocumentContainer);
