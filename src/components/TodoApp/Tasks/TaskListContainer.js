import {connect} from 'react-redux';

import {deleteTodo, toggleTodo, editTodo} from '../../../actions/index';
import TasksList from "./TasksList/TasksList";

function mapStateToProps(state, props) {
    const projectPath = props.projectName;
    const index = state.projects.findIndex((project) => project.title === projectPath);
    let tasks, projectId;
    try {
        tasks = [] && state.projects[index].tasks;
        projectId = 1 && state.projects[index].id;
    } catch (e) {
        console.log(e);
    }
    return {
        tasks: tasks,
        projectId: projectId
    };

}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: projectTask => dispatch(deleteTodo(projectTask)),
        onToggle: projectTask => dispatch(toggleTodo(projectTask)),
        onEdit: projectTask => dispatch(editTodo(projectTask))
    };
}

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TasksList);

export default TaskListContainer;