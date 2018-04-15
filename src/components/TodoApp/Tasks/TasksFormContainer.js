import {connect} from 'react-redux';

import {addTodo} from '../../../actions/index';
import TasksForm from './TasksForm/TasksForm';

function mapDispatchToProps(dispatch) {
    return {
        onAdd: title => dispatch(addTodo(title))
    };
}

const TasksFormContainer = connect(null, mapDispatchToProps)(TasksForm);

export default TasksFormContainer;