import { connect } from 'react-redux';
import Add from './Add';
import { updateNewCase, uploadCase} from '../../redux/casesReducer';

let mapStateToProps = (state) => {
    return {
    }
}

const AddContainer = connect(mapStateToProps, {updateNewCase, uploadCase})(Add)

export default AddContainer;