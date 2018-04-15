import React from "react";
import ListContainer from "../ListContainer";
import TasksFormContainer from "../TasksFormContainer";


const TaskView = ({match}) => {
    const id = parseInt(match.params.id) - 1;
    return (
        <div>
            <TasksFormContainer />
            <ListContainer projectId={id}/>
        </div>
    );
};

export default TaskView;