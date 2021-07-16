import React from 'react'
import { connect } from 'react-redux'
import Add from './Add'
import { uploadCase } from '../../redux/casesReducer'

const AddContainer = (props) => {
    return (
        <Add name={props.name} uploadCase={props.uploadCase} show={props.show} cases={props.cases} />
    )
}

let mapStateToProps = (state) => {
    return {
        name: state.auth.name
    }
}

export default connect(mapStateToProps, { uploadCase })(AddContainer)