import { connect } from 'react-redux'
import Add from './Add'
import {uploadCase} from '../../redux/casesReducer'

let mapStateToProps = (state) => {
    return {
        name: state.auth.name
    }
}

const AddContainer = connect(mapStateToProps, {uploadCase})(Add)

export default AddContainer