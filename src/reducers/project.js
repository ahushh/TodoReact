import {ADD_PROJECT, DELETE_PROJECT, EDIT_PROJECT, TOGGLE_PROJECT} from '../actions';

function projectReducer(state = {}, action) {
    switch (action.type) {
        case ADD_PROJECT:
            return {
                id: action.id,
                title: action.title,
                completed: false
            };

        case TOGGLE_PROJECT:
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {
                completed: !state.completed
            });

        case EDIT_PROJECT:
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {
                title: action.title
            });

        default:
            return state;
    }
}

function reducer(state = [], action) {
    switch (action.type) {
        case ADD_PROJECT:
            return [...state, projectReducer(undefined, action)];

        case DELETE_PROJECT:
            debugger;
            const index = state.findIndex(todo => todo.id === action.id);

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        case TOGGLE_PROJECT:
            console.log(projectReducer, 'state',  state);
            return state.map(todo => projectReducer(todo, action));

        case EDIT_PROJECT:
            return state.map(todo => projectReducer(todo, action));

        default:
            return state;
    }
}

export default reducer;