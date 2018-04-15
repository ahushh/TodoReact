import { combineReducers } from 'redux';
import { default  as tasks } from './task';
import { default  as projects } from './project';

const reducer = combineReducers({
    tasks,
    projects
});

export default reducer;

