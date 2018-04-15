import {ADD_PROJECT, DELETE_PROJECT, EDIT_PROJECT, TOGGLE_PROJECT} from '../actions';

function projectReducer(project = {}, action) {
    switch (action.type) {
        case ADD_PROJECT:
            return {
                id: action.id,
                title: action.title,
                completed: false
            };

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
            return [...state, projectReducer(undefined, action)];

        case DELETE_PROJECT:
            const index = state.findIndex(project => project.id === action.id);

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        case TOGGLE_PROJECT:
            return state.map(project => projectReducer(project, action));

        case EDIT_PROJECT:
            return state.map(project => projectReducer(project, action));

        default:
            return state;
    }
}

export default reducer;