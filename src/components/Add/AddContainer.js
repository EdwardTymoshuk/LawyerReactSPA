import { connect } from 'react-redux';
import Add from './Add';
import {uploadCase} from '../../redux/casesReducer';

let mapStateToProps = (state) => {
    return {
    }
}

const AddContainer = connect(mapStateToProps, {uploadCase})(Add)

export default AddContainer;