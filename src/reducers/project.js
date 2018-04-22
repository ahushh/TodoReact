import {
    ADD_PROJECT, DELETE_PROJECT, EDIT_PROJECT, TOGGLE_PROJECT,
    ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO
} from "../actions";
import update from 'immutability-helper';

function projectReducer(project = {}, action) {
    switch (action.type) {
        // case ADD_PROJECT:
        //     return {
        //         id: action.id,
        //         title: action.title,
        //         completed: false
        //     };

        case TOGGLE_PROJECT:
            if (project.id !== action.id) {
                return project;
            }

            return Object.assign({}, project, {
                completed: !project.completed
            });

        case EDIT_PROJECT:
            if (project.id !== action.id) {
                return project;
            }

            return Object.assign({}, project, {
                title: action.title
            });

        default:
            return project;
    }
}

function reducer(state = [], action) {

    switch (action.type) {
        case ADD_PROJECT:
            return update(state, {
                $push: [{
                    id: action.id,
                    title: action.title,
                    completed: false,
                    tasks: []
                }]
            });

        case DELETE_PROJECT:
            const indexProject = state.findIndex(project => project.id === action.id);

            return [
                ...state.slice(0, indexProject),
                ...state.slice(indexProject + 1)
            ];

        case TOGGLE_PROJECT:
            return state.map(project => projectReducer(project, action));

        case EDIT_PROJECT:
            return state.map(project => projectReducer(project, action));


// ________________________________________________________________________________

        case ADD_TODO:
            const newTask = {
                id: action.taskId,
                title: action.taskTitle,
                completed: false
            };
            var projectIndex = [...state].findIndex( project => project.id === action.projectId);

            return update(state, {
                [projectIndex]:
                    {
                        tasks:
                            {$push: [newTask]}
                    }
            });

        case DELETE_TODO:
            var projectIndex = [...state].findIndex( project => project.id === action.projectId);

            const indexActionTask = findProjectTasks(state, projectIndex)
                .findIndex(todo => todo.id === action.taskId);

            return update(state, {
                [projectIndex]:
                    {
                        tasks:
                            {$splice: [[indexActionTask, 1]]}
                    }
            });

        case TOGGLE_TODO:
            var projectIndex = [...state].findIndex( project => project.id === action.projectId);
            var tasks = findProjectTasks(state, projectIndex);
            var indexTask = tasks.findIndex(todo => todo.id === action.taskId);
            var task = tasks[indexTask];

            return update(state, {
                [projectIndex]:
                    {
                        tasks:
                            {
                                [indexTask]:
                                    {
                                        completed:
                                            {$set: !task.completed}
                                    }
                            }
                    }
            });

        case EDIT_TODO:
            var projectIndex = [...state].findIndex( project => project.id === action.projectId);
            var tasks = findProjectTasks(state, action.projectId);
            var indexTask = tasks.findIndex(todo => todo.id === action.taskId);
            return update(state, {
                [projectIndex]:
                    {
                        tasks:
                            {
                                [indexTask]:
                                    {
                                        title:
                                            {$set: action.taskTitle}
                                    }
                            }
                    }
            });

        default:
            return state;
    }
}

function findProjectTasks(state, projectId) {
    return state[projectId].tasks;
}

export default reducer;
