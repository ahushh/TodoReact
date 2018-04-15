import {ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO} from "../actions";

function taskReducer(state = {}, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                title: action.title,
                completed: false
            };

        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {
                completed: !state.completed
            });

        case EDIT_TODO:
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
    console.log('taskReducer',state);

    switch (action.type) {
        case ADD_TODO:
            return [...state, taskReducer(undefined, action)];

        case DELETE_TODO:
            const index = state.findIndex(todo => todo.id === action.id);

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        case TOGGLE_TODO:
            return state.map(todo => taskReducer(todo, action));

        case EDIT_TODO:
            return state.map(todo => taskReducer(todo, action));

        default:
            return state;
    }
}

export default reducer;