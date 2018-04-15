export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export const ADD_PROJECT = 'ADD_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const TOGGLE_PROJECT = 'TOGGLE_PROJECT';
export const EDIT_PROJECT = 'EDIT_PROJECT';

let nextId = 5;

export function addTodo(title) {
    return {
        type: ADD_TODO,
        id: nextId++,
        title
    };
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    };
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    };
}

export function editTodo(id, title) {
    return {
        type: EDIT_TODO,
        id,
        title
    };
}


export function addProject(title) {
    return {
        type: ADD_PROJECT,
        id: nextId++,
        title
    };
}

export function deleteProject(id) {
    return {
        type: DELETE_PROJECT,
        id
    };
}

export function toggleProject(id) {
    return {
        type: TOGGLE_PROJECT,
        id
    };
}

export function editProject(id, title) {
    return {
        type: EDIT_PROJECT,
        id,
        title
    };
}