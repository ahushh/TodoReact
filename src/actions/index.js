export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export const ADD_PROJECT = 'ADD_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const TOGGLE_PROJECT = 'TOGGLE_PROJECT';
export const EDIT_PROJECT = 'EDIT_PROJECT';

let nextId = 4;

export function addTodo(task) {
    return {
        type: ADD_TODO,
        projectId: task.projectId,
        taskTitle: task.taskTitle,
        taskId: ++nextId
    };
}

export function deleteTodo(task) {
    return {
        type: DELETE_TODO,
        projectId: task.projectId,
        taskId: task.taskId
    };
}

export function toggleTodo(task) {
    return {
        type: TOGGLE_TODO,
        projectId: task.projectId,
        taskId: task.taskId
    };
}

export function editTodo(task) {
    return {
        type: EDIT_TODO,
        projectId: task.projectId,
        taskId: task.taskId,
        taskTitle: task.taskTitle
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