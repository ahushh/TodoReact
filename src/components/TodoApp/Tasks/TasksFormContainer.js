import {connect} from 'react-redux';

import {addTodo} from '../../../actions/index';
import TasksForm from './TasksForm/TasksForm';
function mapStateToProps(state, props) {
    const projectPath = props.projectName;
    const index = state.projects.findIndex((project) => project.title === projectPath);
    let projectId;
    try {
        projectId = state.projects[index].id;
    } catch (e) {
        projectId = 0;
        console.log(e);
    }

    return {
        currentProjectId: projectId
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: newTask => dispatch(addTodo(newTask))
    };
}

const TasksFormContainer = connect(mapStateToProps, mapDispatchToProps)(TasksForm);

export default TasksFormContainer;