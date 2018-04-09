import React, {Component} from "react";
import {Container, Row, Col} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import Sidenav from '../sidenav/SideNav';
import Todo from "../todo/Todo";
import Form from '../form/Form';

class TodoApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        };

        this._nextId = 4;

        this.toggleTask = this.toggleTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    nextId() {
        return this._nextId++;
    }

    toggleTask(id) {
        let todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({todos});
    }

    deleteTask(id) {
        let todos = this.state.todos.filter(todo => todo.id !== id);

        this.setState({todos});
    }

    handleAdd(title) {
        let todo = {
            id: this.nextId(),
            title,
            completed: false
        };
        let todos = [...this.state.todos, todo];

        this.setState({todos});
    }

    handleEdit(id, title) {
        debugger;
        let todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.title = title;
            }

            return todo;
        });

        this.setState({todos});
    }

    render() {
        return (
            <div className="TodoApp">
                <Form onAdd={this.handleAdd}> </Form>
                <Row>
                    <Col xs="4" className='side-bar'><Sidenav/> </Col>
                    <Col xs="8">
                        {console.log(this.state)}
                        <TransitionGroup component="section" className="todo-list">
                            {this.state.todos.map(todo =>
                                <CSSTransition key={todo.id}
                                               timeout={500}
                                               classNames="slide">
                                    <Todo key={todo.id}
                                          id={todo.id}
                                          title={todo.title}
                                          completed={todo.completed}
                                          onToggleTask={this.toggleTask}
                                          onDeleteTask={this.deleteTask}
                                          onEdit={this.handleEdit}
                                    > </Todo>
                                </CSSTransition>
                            )}
                        </TransitionGroup>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default TodoApp;