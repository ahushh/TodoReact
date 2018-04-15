import {connect} from 'react-redux';

import {deleteTodo, toggleTodo, editTodo} from '../../../actions/index';
import TasksList from "./TasksList/TasksList";

function mapStateToProps(state, props) {
    const projectID = props.projectId;
    return {
        tasks: state.projects[projectID].tasks,
    };

}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: id => dispatch(deleteTodo(id)),
        onToggle: id => dispatch(toggleTodo(id)),
        onEdit: (id, title) => dispatch(editTodo(id, title))
    };
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(TasksList);

export default ListContainer;