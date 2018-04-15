import React from "react";
import TaskListContainer from "../TaskListContainer";
import TasksFormContainer from "../TasksFormContainer";


const TaskView = ({match}) => {
    const abc = match.params.abc;
    return (
        <div>
            <TasksFormContainer />
            <TaskListContainer projectName={abc}/>
        </div>
    );
};

export default TaskView;