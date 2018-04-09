import React from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem} from 'reactstrap';

import Checkbox from '../checkbox/Checkbox';
import MyButton from '../button/Button';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };

        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(e) {
        e.preventDefault();
        let title = e.target[0].value;

        this.props.onEdit(this.props.id, title);
        this.setState({editing: false});
    }

    displayForm() {
        return (
            <Form onSubmit={this.handleEdit}>
                <ListGroupItem>
                    <Label for="todo-edit-form">Task</Label>
                    <Input type="text" name="email" defaultValue={this.props.title} ref="title"/>
                </ListGroupItem>
                <MyButton className="save" icon="save" type="submit"/>
            </Form>
        )
    }

    displayTask() {
        return (

            <ListGroupItem className={`todo${this.props.completed ? ' completed' : ''}`}>
                <Checkbox
                    checked={this.props.completed}
                    onChange={() => this.props.onToggleTask(this.props.id)}/>

                <span className="todo-title">{this.props.title}</span>
                <MyButton
                    className="edit" icon="edit"
                    onClick={() => this.setState({editing: true})}/>
                <MyButton
                    className="delete" icon="delete"
                    onClick={() => this.props.onDeleteTask(this.props.id)}/>
            </ListGroupItem>
        )
    }


    render() {
        return this.state.editing ? this.displayForm() : this.displayTask();
    }

}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    onToggleTask: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,

};

export default Todo;