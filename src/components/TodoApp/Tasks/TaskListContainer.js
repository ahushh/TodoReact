import {connect} from 'react-redux';

import {deleteTodo, toggleTodo, editTodo} from '../../../actions/index';
import TasksList from "./TasksList/TasksList";

function mapStateToProps(state, props) {
    const projectPath = props.projectName;
    const index = state.projects.findIndex((project) => project.title === projectPath);

    debugger;
    const currentTasks = state.projects[index].tasks;
    return {
        tasks: currentTasks
    };

}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: id => dispatch(deleteTodo(id)),
        onToggle: id => dispatch(toggleTodo(id)),
        onEdit: (id, title) => dispatch(editTodo(id, title))
    };
}

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TasksList);

export default TaskListContainer;