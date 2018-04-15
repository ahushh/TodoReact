import React from "react";
import PropTypes from "prop-types";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import Project from "../Project/Project";

const ProjectsList = props => {

    return (
        <TransitionGroup component="section" className="todo-list">
            {props.projects.map(todo =>
                <CSSTransition key={todo.id}
                               timeout={500}
                               classNames="slide">
                    <Project
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onDelete={props.onDelete}
                        onToggle={props.onToggle}
                        onEdit={props.onEdit}
                    />
                </CSSTransition>
            )}
        </TransitionGroup>
    );
};

ProjectsList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default ProjectsList;